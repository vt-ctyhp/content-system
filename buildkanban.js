/**
 * ============================================================================
 *  KANBAN VIEW BUILDER  —  Tab "1D. Kanban View"
 * ============================================================================
 *
 *  Rebuilds the "1D. Kanban View" tab as a fully formula-driven Kanban board
 *  pulling LIVE from "1A. Content Planning".
 *
 *  ── Column map on 1A ────────────────────────────────────────────────────────
 *   Headers are read dynamically from row 5 of "1A. Content Planning"
 *   after the master planning table rebuild.
 *
 *  ── Status columns (real values found in the sheet) ─────────────────────────
 *   Idea | Proposed | Draft | Filming | Editing | Revision 1 | Revision 2 | Posted
 *   All matched case-insensitively via LOWER(TRIM(...)).
 *   "Idea" also catches "IDEA".
 *
 *  ── Card layout (4-row block per card) ──────────────────────────────────────
 *   Row 1:  #ID   Format                    |   Posting Date (pink, right)
 *   Row 2:  Content Pillar (italic, muted)
 *   Row 3:  Idea title (bold Playfair, wraps)
 *   Row 4:  Film: <date>  footer (inset background)
 *
 *  ── Filter panel (column A) ──────────────────────────────────────────────────
 *   A4  = Show Posted checkbox
 *   A6  = Sort By dropdown
 *   A8  = Sort Order dropdown
 *   A10 = Content Pillar filter
 *   A12 = Format filter
 *   A14 = Filming From date
 *   A16 = Filming To date
 *   A18 = Posting From date
 *   A20 = Posting To date
 *
 *  ── Usage ────────────────────────────────────────────────────────────────────
 *   1. Extensions → Apps Script → paste this file → Save
 *   2. Run buildKanbanView() → authorize
 *   3. Open "1D. Kanban View" tab — live data will be there
 *   Re-running is safe and idempotent (clears then rebuilds).
 * ============================================================================
 */


// ── CONFIG ───────────────────────────────────────────────────────────────────
const CFG = {
  sourceTab: '1A. Content Planning',
  targetTab: '1D. Kanban View',

  // Data range on 1A
  dataStart: 7,
  dataEnd:   1000,

  // Real status values found in the sheet — edit freely to add/remove/reorder.
  // Matching is CASE-INSENSITIVE.
  statuses: [
    'Planned',
    'Assigned to Film',
    'Filming Complete',
    'Editing V1',
    'Ready for Brand Manager Review',
    'Revision Requested',
    'Editing V2+',
    'Approved',
    'Scheduled',
    'Posted'
  ],

  // Layout
  cardWidth:   3,   // sheet columns per Kanban column
  cardGap:     1,   // blank columns between Kanban columns
  maxCards:    50,  // rows of cards per status column (lower = faster build)

  // Editorial palette
  color: {
    bg:      '#F7F1EB',
    surface: '#FBF7F1',
    inset:   '#EFE8DD',
    dark:    '#2A2725',
    body:    '#4A4540',
    muted:   '#8A8178',
    rule:    '#D4CFC4',
    pink:    '#E91D79'
  }
};


// ── ENTRY POINT ──────────────────────────────────────────────────────────────
function buildKanbanView() {
  const ss = SpreadsheetApp.getActive();

  if (!ss.getSheetByName(CFG.sourceTab)) {
    throw new Error('Source tab not found: ' + CFG.sourceTab);
  }
  CFG.col = getKanbanColumnMap_(ss.getSheetByName(CFG.sourceTab));

  let sheet = ss.getSheetByName(CFG.targetTab);
  if (!sheet) sheet = ss.insertSheet(CFG.targetTab);

  // Full reset
  sheet.clear();
  sheet.clearFormats();
  sheet.clearNotes();
  sheet.getBandings().forEach(b => b.remove());
  sheet.clearConditionalFormatRules();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
       .clearDataValidations();

  _resizeSheet(sheet);
  _paintBackground(sheet);
  _buildFilterPanel(sheet);
  _buildHeader(sheet);
  _buildKanbanColumns(sheet);
  _buildCountRow(sheet);
  _finalise(sheet);

  ss.toast('✓ Kanban view rebuilt successfully.', '1D. Kanban View', 5);
}


// ── GEOMETRY ─────────────────────────────────────────────────────────────────

/** 1-indexed sheet column where Kanban column `i` (0-based) starts. */
function colStart(i) {
  // col 1 = filter panel, col 2 = gutter, Kanban starts at col 3
  return 3 + i * (CFG.cardWidth + CFG.cardGap);
}

/** Convert 1-indexed column number → A1 letter(s). */
function colLetter(n) {
  let s = '';
  while (n > 0) {
    s = String.fromCharCode(65 + (n - 1) % 26) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

function getKanbanColumnMap_(sourceSheet) {
  const headerRow = 5;
  const headers = sourceSheet.getRange(headerRow, 1, 1, sourceSheet.getLastColumn()).getDisplayValues()[0]
    .reduce((map, header, index) => {
      if (header) map[header] = colLetter(index + 1);
      return map;
    }, {});
  const columnMap = {
    id: headers['Content #'],
    concept: headers['Concept ID'],
    brand: headers.Brand,
    pillar: headers['Content Pillar'],
    format: headers.Format,
    idea: headers.Idea,
    filming: headers['Filming Date'],
    posting: headers['Posting Date'],
    status: headers.Status,
  };
  const missing = Object.keys(columnMap).filter((key) => !columnMap[key]);
  if (missing.length) {
    throw new Error('Kanban cannot find required 1A headers on row 5. Run setupPhase1DatabaseFoundation() first. Missing: ' + missing.join(', '));
  }
  return columnMap;
}

function _resizeSheet(sheet) {
  const lastCol = colStart(CFG.statuses.length - 1) + CFG.cardWidth; // +1 trailing gutter
  const lastRow = 6 + CFG.maxCards * 4 + 2;

  const curC = sheet.getMaxColumns();
  if (curC < lastCol) sheet.insertColumnsAfter(curC, lastCol - curC);
  else if (curC > lastCol) sheet.deleteColumns(lastCol + 1, curC - lastCol);

  const curR = sheet.getMaxRows();
  if (curR < lastRow) sheet.insertRowsAfter(curR, lastRow - curR);
  else if (curR > lastRow) sheet.deleteRows(lastRow + 1, curR - lastRow);

  // Column widths
  sheet.setColumnWidth(1, 195); // filter panel
  sheet.setColumnWidth(2, 14);  // gutter

  CFG.statuses.forEach((_, i) => {
    const s = colStart(i);
    sheet.setColumnWidth(s,     68);  // ID/Format
    sheet.setColumnWidth(s + 1, 68);  // (padding)
    sheet.setColumnWidth(s + 2, 104); // Posting date / right side
    if (i < CFG.statuses.length - 1) {
      sheet.setColumnWidth(s + CFG.cardWidth, 10); // gap column
    }
  });
}

function _paintBackground(sheet) {
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
       .setBackground(CFG.color.bg);
}


// ── FILTER PANEL ─────────────────────────────────────────────────────────────
function _buildFilterPanel(sheet) {
  const c = CFG.color;

  // Row definitions: [value, style]
  const rows = [
    ['SMART FILTER & SORT', 'header'],  // 1
    [null,                  'gap'],     // 2
    ['SHOW POSTED CONTENT?','label'],   // 3
    [true,                  'input'],   // 4  ← checkbox
    ['SORT BY',             'label'],   // 5
    ['Content #',           'input'],   // 6  ← dropdown
    ['SORT ORDER',          'label'],   // 7
    ['Ascending',           'input'],   // 8  ← dropdown
    ['CONTENT PILLAR',      'label'],   // 9
    ['',                    'input'],   // 10 ← dropdown (live from 1A)
    ['FORMAT',              'label'],   // 11
    ['',                    'input'],   // 12 ← dropdown (live from 1A)
    ['FILMING FROM',        'label'],   // 13
    ['',                    'date'],    // 14
    ['FILMING TO',          'label'],   // 15
    ['',                    'date'],    // 16
    ['POSTING FROM',        'label'],   // 17
    ['',                    'date'],    // 18
    ['POSTING TO',          'label'],   // 19
    ['',                    'date'],    // 20
  ];

  rows.forEach(([val, style], i) => {
    const row = i + 1;
    const cell = sheet.getRange(row, 1);
    if (val !== null) cell.setValue(val);

    switch (style) {
      case 'header':
        cell.setFontFamily('Playfair Display').setFontSize(13).setFontWeight('bold')
            .setFontColor(c.dark).setBackground(c.surface)
            .setVerticalAlignment('middle')
            .setBorder(null,null,true,null,null,null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
        sheet.setRowHeight(row, 36);
        break;
      case 'label':
        cell.setFontFamily('Roboto Mono').setFontSize(8).setFontWeight('bold')
            .setFontColor(c.muted).setBackground(c.surface)
            .setVerticalAlignment('middle');
        sheet.setRowHeight(row, 18);
        break;
      case 'input':
      case 'date':
        cell.setFontFamily('Inter').setFontSize(10).setFontColor(c.dark)
            .setBackground('#FFFFFF')
            .setBorder(true,true,true,true,false,false, c.rule, SpreadsheetApp.BorderStyle.SOLID);
        sheet.setRowHeight(row, 24);
        if (style === 'date') cell.setNumberFormat('ddd, mmm d, yyyy');
        break;
      case 'gap':
        cell.setBackground(c.surface);
        sheet.setRowHeight(row, 8);
        break;
    }
  });

  // Checkbox
  sheet.getRange('A4').insertCheckboxes();

  // Sort By
  sheet.getRange('A6').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(['Content #','Content Pillar','Format','Idea','Filming Date','Posting Date'], true)
      .setAllowInvalid(false).build());

  // Sort Order
  sheet.getRange('A8').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(['Ascending','Descending'], true)
      .setAllowInvalid(false).build());

  // Pillar — live list from 1A col C
  sheet.getRange('A10').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInRange(
        SpreadsheetApp.getActive().getRange(
          "'" + CFG.sourceTab + "'!$" + CFG.col.pillar + "$" + CFG.dataStart + ':$' + CFG.col.pillar + '$' + CFG.dataEnd), true)
      .setAllowInvalid(true).build());

  // Format — live list from 1A col D
  sheet.getRange('A12').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInRange(
        SpreadsheetApp.getActive().getRange(
          "'" + CFG.sourceTab + "'!$" + CFG.col.format + "$" + CFG.dataStart + ':$' + CFG.col.format + '$' + CFG.dataEnd), true)
      .setAllowInvalid(true).build());

  // Date validations
  ['A14','A16','A18','A20'].forEach(ref => {
    sheet.getRange(ref).setDataValidation(
      SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(true).build());
  });
}


// ── TITLE HEADER ─────────────────────────────────────────────────────────────
function _buildHeader(sheet) {
  const c = CFG.color;
  const span = colStart(CFG.statuses.length - 1) + CFG.cardWidth - colStart(0);
  const startCol = colStart(0);

  // Eyebrow
  sheet.getRange(1, startCol, 1, span).merge()
       .setValue('CONTENT OPERATIONS  /  KANBAN BOARD')
       .setFontFamily('Roboto Mono').setFontSize(8).setFontWeight('bold')
       .setFontColor(c.muted).setBackground(c.bg)
       .setHorizontalAlignment('left').setVerticalAlignment('bottom');
  sheet.setRowHeight(1, 22);

  // Title
  sheet.getRange(2, startCol, 1, span).merge()
       .setValue('1D. Kanban View')
       .setFontFamily('Playfair Display').setFontSize(22).setFontWeight('bold')
       .setFontColor(c.dark).setBackground(c.bg)
       .setHorizontalAlignment('left').setVerticalAlignment('middle')
       .setBorder(null,null,true,null,null,null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.setRowHeight(2, 34);

  // Subtitle
  sheet.getRange(3, startCol, 1, span).merge()
       .setValue('Live board · Status from 1A. Content Planning · Use column A filters to refine')
       .setFontFamily('Inter').setFontSize(9).setFontStyle('italic')
       .setFontColor(c.muted).setBackground(c.bg)
       .setHorizontalAlignment('left').setVerticalAlignment('middle');
  sheet.setRowHeight(3, 18);
}


// ── KANBAN COLUMNS ──────────────────────────────────────────────────────────
function _buildKanbanColumns(sheet) {
  const c = CFG.color;

  CFG.statuses.forEach((status, idx) => {
    const sc = colStart(idx); // start column (1-indexed)

    // Status header — row 4
    sheet.getRange(4, sc, 1, CFG.cardWidth).merge()
         .setValue(status.toUpperCase())
         .setFontFamily('Roboto Mono').setFontSize(9).setFontWeight('bold')
         .setFontColor(c.bg).setBackground(c.dark)
         .setHorizontalAlignment('center').setVerticalAlignment('middle')
         .setBorder(null,null,true,null,null,null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
    sheet.setRowHeight(4, 30);

    // Count row — row 5 (formula placed later)
    sheet.setRowHeight(5, 20);

    // Cards — 4 rows each, starting at row 6
    for (let card = 0; card < CFG.maxCards; card++) {
      const base = 6 + card * 4;
      const rank = card + 1;

      // Row 1 left: #ID + Format
      sheet.getRange(base, sc, 1, 2).merge()
           .setFormula(_formula(status, rank, 'idFmt'));

      // Row 1 right: Posting Date
      sheet.getRange(base, sc + 2)
           .setFormula(_formula(status, rank, 'post'));

      // Row 2: Pillar
      sheet.getRange(base + 1, sc, 1, CFG.cardWidth).merge()
           .setFormula(_formula(status, rank, 'pillar'));

      // Row 3: Idea
      sheet.getRange(base + 2, sc, 1, CFG.cardWidth).merge()
           .setFormula(_formula(status, rank, 'idea'));

      // Row 4: Filming date footer
      sheet.getRange(base + 3, sc, 1, CFG.cardWidth).merge()
           .setFormula(_formula(status, rank, 'film'));
    }

    _styleColumn(sheet, sc);
  });
}


// ── CARD STYLES ──────────────────────────────────────────────────────────────
function _styleColumn(sheet, sc) {
  const c = CFG.color;
  const S = SpreadsheetApp.BorderStyle.SOLID;

  for (let card = 0; card < CFG.maxCards; card++) {
    const base = 6 + card * 4;

    // Row 1 left: ID + Format
    sheet.getRange(base, sc, 1, 2)
         .setBackground(c.surface).setFontFamily('Roboto Mono').setFontSize(9)
         .setFontWeight('bold').setFontColor(c.dark)
         .setHorizontalAlignment('left').setVerticalAlignment('middle')
         .setBorder(true, true, false, null, null, null, c.rule, S);
    sheet.setRowHeight(base, 22);

    // Row 1 right: Posting date
    sheet.getRange(base, sc + 2)
         .setBackground(c.surface).setFontFamily('Roboto Mono').setFontSize(8)
         .setFontColor(c.pink)
         .setHorizontalAlignment('right').setVerticalAlignment('middle')
         .setBorder(true, null, false, true, null, null, c.rule, S);

    // Row 2: Pillar
    sheet.getRange(base + 1, sc, 1, CFG.cardWidth)
         .setBackground(c.surface).setFontFamily('Inter').setFontSize(9)
         .setFontStyle('italic').setFontColor(c.muted)
         .setHorizontalAlignment('left').setVerticalAlignment('middle')
         .setBorder(false, true, false, true, null, null, c.rule, S);
    sheet.setRowHeight(base + 1, 17);

    // Row 3: Idea
    sheet.getRange(base + 2, sc, 1, CFG.cardWidth)
         .setBackground(c.surface).setFontFamily('Playfair Display').setFontSize(11)
         .setFontWeight('bold').setFontColor(c.dark)
         .setHorizontalAlignment('left').setVerticalAlignment('top').setWrap(true)
         .setBorder(false, true, false, true, null, null, c.rule, S);
    sheet.setRowHeight(base + 2, 40);

    // Row 4: Filming footer
    sheet.getRange(base + 3, sc, 1, CFG.cardWidth)
         .setBackground(c.inset).setFontFamily('Roboto Mono').setFontSize(8)
         .setFontColor(c.body)
         .setHorizontalAlignment('left').setVerticalAlignment('middle')
         .setBorder(true, true, true, true, null, null, c.rule, S);
    sheet.setRowHeight(base + 3, 19);
  }
}


// ── COUNT ROW ────────────────────────────────────────────────────────────────
function _buildCountRow(sheet) {
  const c = CFG.color;
  CFG.statuses.forEach((status, idx) => {
    const sc = colStart(idx);
    sheet.getRange(5, sc, 1, CFG.cardWidth).merge()
         .setFormula(_countFormula(status))
         .setFontFamily('Roboto Mono').setFontSize(8).setFontWeight('bold')
         .setFontColor(c.muted).setBackground(c.bg)
         .setHorizontalAlignment('center').setVerticalAlignment('middle');
  });
}


// ── FORMULA BUILDERS ─────────────────────────────────────────────────────────

/**
 * Builds the SORT(FILTER(...)) expression for a given status.
 * Returns a matrix with 7 columns:
 *   1=ID, 2=Pillar, 3=Format, 4=Idea, 5=FilmingDate, 6=PostingDate, 7=Brand
 * Each card formula wraps this in INDEX(..., rank, col).
 */
function _matrix(status) {
  const t = "'" + CFG.sourceTab + "'!";
  const s = CFG.dataStart;
  const e = CFG.dataEnd;
  const col = CFG.col;

  // Helper to make a $COL$start:$COL$end reference
  const ref = (c) => t + '$' + c + '$' + s + ':$' + c + '$' + e;

  const refId  = ref(col.id);
  const refPil = ref(col.pillar);
  const refFmt = ref(col.format);
  const refIdea= ref(col.idea);
  const refFilm= ref(col.filming);
  const refPost= ref(col.posting);
  const refSt  = ref(col.status);
  const refBrand = ref(col.brand);

  const statusQ = status.replace(/"/g, '""');

  // Status match — case-insensitive trim
  const statusMatch =
    'LOWER(TRIM(' + refSt + '&""))=LOWER(TRIM("' + statusQ + '"))';

  // Posted-toggle (don't apply to the Posted column itself)
  const postedGuard = (status.toLowerCase() === 'posted')
    ? 'TRUE'
    : 'IF($A$4,TRUE,LOWER(TRIM(' + refSt + '&""))<>"posted")';

  // FILTER requires every condition to be an array of the same length as the
  // data. Multiplying boolean arrays (* = AND) lets scalar TRUE broadcast
  // safely so Sheets never sees mismatched condition lengths.
  const filterExpr =
    'FILTER(' +
      '{' + refId + ',' + refPil + ',' + refFmt + ',' + refIdea + ',' + refFilm + ',' + refPost + ',' + refBrand + '},' +
      '(' + refId + '<>"")' +
      '*(' + statusMatch + ')' +
      '*(' + postedGuard + ')' +
      '*(IF($A$10="",TRUE,' + refPil  + '=$A$10))' +
      '*(IF($A$12="",TRUE,' + refFmt  + '=$A$12))' +
      '*(IF($A$14="",TRUE,IFERROR(' + refFilm + '>=$A$14,TRUE)))' +
      '*(IF($A$16="",TRUE,IFERROR(' + refFilm + '<=$A$16,TRUE)))' +
      '*(IF($A$18="",TRUE,IFERROR(' + refPost + '>=$A$18,TRUE)))' +
      '*(IF($A$20="",TRUE,IFERROR(' + refPost + '<=$A$20,TRUE)))' +
    ')';

  const sortColMap = '{"Content #","Content Pillar","Format","Idea","Filming Date","Posting Date","Brand"}';

  return 'SORT(' + filterExpr + ',MATCH($A$6,' + sortColMap + ',0),$A$8="Ascending")';
}

/**
 * Returns a single-cell formula for a given card slot.
 * `kind` = 'idFmt' | 'post' | 'pillar' | 'idea' | 'film'
 * `rank` = 1-based row within the sorted+filtered result for this status
 */
function _formula(status, rank, kind) {
  const m = _matrix(status);

  // Pull one value from the matrix: INDEX(matrix, row, col)
  const idx = (col) => 'IFERROR(INDEX(' + m + ',' + rank + ',' + col + '),"")';

  const id   = idx(1);
  const pil  = idx(2);
  const fmt  = idx(3);
  const idea = idx(4);
  const film = idx(5);
  const post = idx(6);
  const brand = idx(7);

  switch (kind) {
    case 'idFmt':
      // Show #ID + Format only when there is an ID
      return '=IFERROR(IF(' + id + '="","","#"&' + id + '&"  ["&' + brand + '&"]  "&' + fmt + '),"")';

    case 'post':
      return '=IFERROR(IF(' + id + '="","",IF(' + post + '="","—",TEXT(' + post + ',"mmm d"))),"")';

    case 'pillar':
      return '=IFERROR(IF(' + id + '="","",' + pil + '),"")';

    case 'idea':
      return '=IFERROR(IF(' + id + '="","",' + idea + '),"")';

    case 'film':
      return '=IFERROR(IF(' + id + '="","",IF(' + film + '="","Film: —","Film: "&TEXT(' + film + ',"mmm d"))),"")';
  }
  return '=""';
}

/** Count of rows matching this status (ignores filter panel — always total). */
function _countFormula(status) {
  const t = "'" + CFG.sourceTab + "'!";
  const s = CFG.dataStart;
  const e = CFG.dataEnd;
  const refId = t + '$' + CFG.col.id     + '$' + s + ':$' + CFG.col.id     + '$' + e;
  const refSt = t + '$' + CFG.col.status + '$' + s + ':$' + CFG.col.status + '$' + e;
  const statusQ = status.replace(/"/g, '""');
  const match = 'LOWER(TRIM(' + refSt + '&""))=LOWER(TRIM("' + statusQ + '"))';
  return '=SUMPRODUCT(--(' + refId + '<>""),--(' + match + '))&" cards"';
}


// ── FINISHING TOUCHES ────────────────────────────────────────────────────────
function _finalise(sheet) {
  sheet.setFrozenColumns(2); // filter panel + gutter stay visible when scrolling right
  sheet.setFrozenRows(5);    // eyebrow, title, subtitle, status headers, count row
  sheet.setHiddenGridlines(true);
}
