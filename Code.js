const PHASE1 = {
  sheets: {
    content: '1A. Content Planning',
    settings: '5. Settings',
    activityLog: 'Activity Log',
    revisionLog: 'Revision Log',
    notes: '0. Notes',
  },
  rows: {
    contentHeader: 4,
    contentDataStart: 6,
    logHeader: 1,
  },
  coreHeaders: {
    contentId: 'Content #',
    status: 'Status',
  },
  workflowConfigTitle: 'Workflow Config',
  workflowColumns: [
    'Created Date',
    'Created By',
    'Current Owner',
    'Assigned Filmer(s)',
    'Assigned Editor',
    'Assigned Reviewer',
    'Shot List',
    'Filming Instructions',
    'Props / Setup Notes',
    'Location',
    'Reference Links',
    'Editing Brief',
    'Priority',
    'Raw Footage Folder URL',
    'Edited V1 URL',
    'Edited V2 URL',
    'Edited V3 URL',
    'Final Approved Video URL',
    'Previous Status',
    'Last Updated By',
    'Last Updated Timestamp',
    'Stage Started Timestamp',
    'Stage Completed Timestamp',
    'Revision Count',
    'Abby Feedback',
    'Editor Notes',
    'Blocker / Issue',
    'Platform(s)',
    'Scheduled By',
    'Posted URL',
    'Posted Timestamp',
  ],
  activityLogHeaders: [
    'Timestamp',
    'Content #',
    'Action',
    'Old Status',
    'New Status',
    'User',
    'Notes',
    'URL Submitted',
  ],
  revisionLogHeaders: [
    'Timestamp',
    'Content #',
    'Version Number',
    'Submitted By',
    'Edited File URL',
    'Feedback From Abby',
    'Decision',
    'Notes',
  ],
  configLists: {
    Statuses: [
      'Idea',
      'Planned',
      'Assigned to Film',
      'Filming Complete',
      'Editing V1',
      'Ready for Abby Review',
      'Revision Requested',
      'Editing V2+',
      'Approved',
      'Scheduled',
      'Posted',
      'Paused / Backlog',
    ],
    'Team Members': [
      'Abby',
      'Hillary',
      'Tao',
      'Stephanie',
      'Vivianne',
      'Admin',
    ],
    Roles: [
      'Admin',
      'Brand Manager',
      'Filmer',
      'Editor',
      'Reviewer',
    ],
    'Filmer Assignment Values': [
      'Hillary',
      'Tao',
      'Hillary + Tao',
    ],
    Platforms: [
      'Instagram',
      'TikTok',
      'YouTube',
      'Instagram + TikTok',
      'Instagram + YouTube',
      'TikTok + YouTube',
      'Instagram + TikTok + YouTube',
    ],
    Priorities: [
      'Low',
      'Medium',
      'High',
      'Urgent',
    ],
  },
  statusMap: {
    IDEA: 'Idea',
    Idea: 'Idea',
    Proposed: 'Planned',
    Draft: 'Planned',
    Filming: 'Assigned to Film',
    Editing: 'Editing V1',
    'Revision 1': 'Revision Requested',
    'Revision 2': 'Revision Requested',
    Posted: 'Posted',
  },
};

function setupPhase1DatabaseFoundation() {
  const spreadsheet = SpreadsheetApp.getActive();
  const activityLog = ensureActivityLog_(spreadsheet);
  const revisionLog = ensureRevisionLog_(spreadsheet);
  const configRanges = ensureWorkflowSettings_(spreadsheet);
  const columnMap = ensureWorkflowColumns_(spreadsheet);
  const statusChanges = standardizeExistingStatuses_(spreadsheet, columnMap, activityLog);

  applyWorkflowValidations_(spreadsheet, columnMap, configRanges);
  flagCredentialSecurityCleanup_(spreadsheet, activityLog);

  spreadsheet.toast(
    `Phase 1 setup complete. ${statusChanges} status value(s) standardized.`,
    'Content Workflow',
    8
  );

  return {
    activityLog: activityLog.getName(),
    revisionLog: revisionLog.getName(),
    standardizedStatusCount: statusChanges,
    workflowColumnCount: PHASE1.workflowColumns.length,
  };
}

function ensureWorkflowSettings_(spreadsheet) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.settings);
  const blockStart = findOrCreateWorkflowConfigBlock_(sheet);
  const titles = Object.keys(PHASE1.configLists);
  const maxListLength = Math.max.apply(null, titles.map((title) => PHASE1.configLists[title].length));

  ensureColumns_(sheet, blockStart.column + titles.length - 1);
  sheet.getRange(blockStart.row, blockStart.column, 1, titles.length)
    .setValues([titles])
    .setFontWeight('bold');

  titles.forEach((title, offset) => {
    const values = PHASE1.configLists[title].map((value) => [value]);
    const column = blockStart.column + offset;
    const bodyRange = sheet.getRange(blockStart.row + 1, column, maxListLength, 1);
    bodyRange.clearContent();
    sheet.getRange(blockStart.row + 1, column, values.length, 1).setValues(values);

    const namedRange = sheet.getRange(blockStart.row + 1, column, values.length, 1);
    upsertNamedRange_(spreadsheet, configRangeName_(title), namedRange);
  });

  sheet.getRange(blockStart.row - 1, blockStart.column)
    .setValue(PHASE1.workflowConfigTitle)
    .setFontWeight('bold');
  sheet.autoResizeColumns(blockStart.column, titles.length);

  return titles.reduce((ranges, title) => {
    ranges[title] = spreadsheet.getRangeByName(configRangeName_(title));
    return ranges;
  }, {});
}

function ensureWorkflowColumns_(spreadsheet) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const headerRow = PHASE1.rows.contentHeader;
  const existing = getHeaderMap_(sheet, headerRow);
  let nextColumn = sheet.getLastColumn() + 1;
  const missingColumnCount = PHASE1.workflowColumns.filter((header) => !existing[header]).length;

  if (missingColumnCount > 0) {
    ensureColumns_(sheet, sheet.getLastColumn() + missingColumnCount);
  }

  PHASE1.workflowColumns.forEach((header) => {
    if (existing[header]) {
      return;
    }

    sheet.getRange(headerRow, nextColumn)
      .setValue(header)
      .setFontWeight('bold')
      .setWrap(true);
    existing[header] = nextColumn;
    nextColumn += 1;
  });

  assertRequiredContentColumns_(existing);
  sheet.autoResizeColumns(Math.max(1, sheet.getLastColumn() - PHASE1.workflowColumns.length), PHASE1.workflowColumns.length);

  return getHeaderMap_(sheet, headerRow);
}

function ensureActivityLog_(spreadsheet) {
  return ensureLogSheet_(spreadsheet, PHASE1.sheets.activityLog, PHASE1.activityLogHeaders);
}

function ensureRevisionLog_(spreadsheet) {
  return ensureLogSheet_(spreadsheet, PHASE1.sheets.revisionLog, PHASE1.revisionLogHeaders);
}

function standardizeExistingStatuses_(spreadsheet, columnMap, activityLog) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const contentIdColumn = columnMap[PHASE1.coreHeaders.contentId];
  const statusColumn = columnMap[PHASE1.coreHeaders.status];
  assertRequiredContentColumns_(columnMap);

  const lastDataRow = getLastContentDataRow_(sheet, contentIdColumn);
  if (lastDataRow < PHASE1.rows.contentDataStart) {
    return 0;
  }

  const rowCount = lastDataRow - PHASE1.rows.contentDataStart + 1;
  const statusRange = sheet.getRange(PHASE1.rows.contentDataStart, statusColumn, rowCount, 1);
  const statusValues = statusRange.getDisplayValues();
  const rawStatusValues = statusRange.getValues();
  const contentIds = sheet.getRange(PHASE1.rows.contentDataStart, contentIdColumn, rowCount, 1).getDisplayValues();
  const timestamp = new Date();
  const user = getEffectiveUserEmail_();
  const logRows = [];
  let changeCount = 0;

  for (let index = 0; index < rowCount; index += 1) {
    const oldStatus = String(statusValues[index][0] || '').trim();
    if (!Object.prototype.hasOwnProperty.call(PHASE1.statusMap, oldStatus)) {
      continue;
    }

    const newStatus = PHASE1.statusMap[oldStatus];
    if (oldStatus === newStatus) {
      continue;
    }

    rawStatusValues[index][0] = newStatus;
    changeCount += 1;
    logRows.push([
      timestamp,
      contentIds[index][0],
      'STANDARDIZE_STATUS',
      oldStatus,
      newStatus,
      user,
      'Phase 1 database foundation setup standardized legacy status value.',
      '',
    ]);
  }

  if (changeCount > 0) {
    statusRange.clearDataValidations();
    statusRange.setValues(rawStatusValues);
    appendRows_(activityLog, logRows);
  }

  return changeCount;
}

function applyWorkflowValidations_(spreadsheet, columnMap, configRanges) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const validationRowCount = Math.max(sheet.getMaxRows() - PHASE1.rows.contentDataStart + 1, 1);

  applyValidationToColumn_(sheet, columnMap[PHASE1.coreHeaders.status], validationRowCount, configRanges.Statuses);
  applyValidationToColumn_(sheet, columnMap['Current Owner'], validationRowCount, configRanges['Team Members']);
  applyValidationToColumn_(sheet, columnMap['Assigned Filmer(s)'], validationRowCount, configRanges['Filmer Assignment Values']);
  applyValidationToColumn_(sheet, columnMap['Assigned Editor'], validationRowCount, configRanges['Team Members']);
  applyValidationToColumn_(sheet, columnMap['Assigned Reviewer'], validationRowCount, configRanges['Team Members']);
  applyValidationToColumn_(sheet, columnMap.Priority, validationRowCount, configRanges.Priorities);
  applyValidationToColumn_(sheet, columnMap['Platform(s)'], validationRowCount, configRanges.Platforms);
}

function ensureLogSheet_(spreadsheet, sheetName, headers) {
  const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
  const headerRange = sheet.getRange(PHASE1.rows.logHeader, 1, 1, headers.length);
  const currentHeaders = headerRange.getDisplayValues()[0];
  const needsHeaderUpdate = headers.some((header, index) => currentHeaders[index] !== header);

  if (needsHeaderUpdate) {
    headerRange.setValues([headers]);
  }

  headerRange.setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);

  return sheet;
}

function findOrCreateWorkflowConfigBlock_(sheet) {
  const titleFinder = sheet.createTextFinder(PHASE1.workflowConfigTitle)
    .matchCase(false)
    .matchEntireCell(true);
  const titleCell = titleFinder.findNext();

  if (titleCell) {
    return {
      row: titleCell.getRow() + 1,
      column: titleCell.getColumn(),
    };
  }

  return {
    row: 2,
    column: sheet.getLastColumn() + 2,
  };
}

function getHeaderMap_(sheet, headerRow) {
  const headerValues = sheet.getRange(headerRow, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
  return headerValues.reduce((map, header, index) => {
    const cleanHeader = String(header || '').trim();
    if (cleanHeader && !map[cleanHeader]) {
      map[cleanHeader] = index + 1;
    }
    return map;
  }, {});
}

function assertRequiredContentColumns_(columnMap) {
  [PHASE1.coreHeaders.contentId, PHASE1.coreHeaders.status].forEach((header) => {
    if (!columnMap[header]) {
      throw new Error(`Required content column not found: ${header}`);
    }
  });
}

function getLastContentDataRow_(sheet, contentIdColumn) {
  const firstDataRow = PHASE1.rows.contentDataStart;
  const rowCount = Math.max(sheet.getLastRow() - firstDataRow + 1, 1);
  const values = sheet.getRange(firstDataRow, contentIdColumn, rowCount, 1).getDisplayValues();

  for (let index = values.length - 1; index >= 0; index -= 1) {
    if (String(values[index][0] || '').trim()) {
      return firstDataRow + index;
    }
  }

  return firstDataRow - 1;
}

function applyValidationToColumn_(sheet, column, rowCount, sourceRange) {
  if (!column || !sourceRange) {
    return;
  }

  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sourceRange, true)
    .setAllowInvalid(false)
    .build();

  sheet.getRange(PHASE1.rows.contentDataStart, column, rowCount, 1).setDataValidation(rule);
}

function upsertNamedRange_(spreadsheet, name, range) {
  spreadsheet.getNamedRanges()
    .filter((namedRange) => namedRange.getName() === name)
    .forEach((namedRange) => namedRange.remove());
  spreadsheet.setNamedRange(name, range);
}

function configRangeName_(title) {
  return `Workflow_${title.replace(/[^A-Za-z0-9]+/g, '_').replace(/_+$/g, '')}`;
}

function appendRows_(sheet, rows) {
  if (!rows.length) {
    return;
  }

  ensureRows_(sheet, sheet.getLastRow() + rows.length);
  ensureColumns_(sheet, rows[0].length);
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}

function ensureColumns_(sheet, requiredLastColumn) {
  const currentMaxColumns = sheet.getMaxColumns();
  if (requiredLastColumn > currentMaxColumns) {
    sheet.insertColumnsAfter(currentMaxColumns, requiredLastColumn - currentMaxColumns);
  }
}

function ensureRows_(sheet, requiredLastRow) {
  const currentMaxRows = sheet.getMaxRows();
  if (requiredLastRow > currentMaxRows) {
    sheet.insertRowsAfter(currentMaxRows, requiredLastRow - currentMaxRows);
  }
}

function flagCredentialSecurityCleanup_(spreadsheet, activityLog) {
  if (!spreadsheet.getSheetByName(PHASE1.sheets.notes)) {
    return;
  }

  const existingActions = activityLog.getLastRow() > 1
    ? activityLog.getRange(2, 3, activityLog.getLastRow() - 1, 1).getDisplayValues().flat()
    : [];

  if (existingActions.indexOf('SECURITY_REVIEW') !== -1) {
    return;
  }

  appendRows_(activityLog, [[
    new Date(),
    '',
    'SECURITY_REVIEW',
    '',
    '',
    getEffectiveUserEmail_(),
    '`0. Notes` appears to contain social login credentials. Move credentials to a secure password manager and remove them from the workbook.',
    '',
  ]]);
}

function requireSheet_(spreadsheet, sheetName) {
  const sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    throw new Error(`Required sheet not found: ${sheetName}`);
  }
  return sheet;
}

function getEffectiveUserEmail_() {
  const user = Session.getEffectiveUser();
  return user && user.getEmail ? user.getEmail() : '';
}
