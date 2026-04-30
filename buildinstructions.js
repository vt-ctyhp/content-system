/**
 * ============================================================================
 *  WORKFLOW INSTRUCTIONS BUILDER  -  Tab "0. Workflow Instructions"
 * ============================================================================
 *
 *  Rebuilds an instruction tab for the content workflow system.
 *
 *  This is intentionally separate from Code.js and the Kanban builder so it can
 *  be run manually whenever workflow instructions need to be refreshed.
 *
 *  Usage:
 *   1. Run buildWorkflowInstructionsTab()
 *   2. Open "0. Workflow Instructions"
 *   3. Share the tab with the team as the first stop for workflow questions.
 *
 *  Re-running is safe and idempotent. It only rebuilds this instruction tab.
 * ============================================================================
 */

const INSTRUCTIONS_CFG = {
  targetTab: '0. Workflow Instructions',
  color: {
    bg: '#F7F1EB',
    surface: '#FBF7F1',
    inset: '#EFE8DD',
    dark: '#2A2725',
    body: '#4A4540',
    muted: '#8A8178',
    rule: '#D4CFC4',
    pink: '#E91D79',
    white: '#FFFFFF'
  }
};

function buildWorkflowInstructionsTab() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(INSTRUCTIONS_CFG.targetTab);

  if (!sheet) {
    sheet = ss.insertSheet(INSTRUCTIONS_CFG.targetTab, 0);
  }

  instructionsResetSheet_(sheet);
  instructionsResizeSheet_(sheet);
  instructionsPaintBackground_(sheet);
  instructionsBuildHeader_(sheet);
  instructionsBuildSidePanel_(sheet);
  instructionsBuildContent_(sheet);
  instructionsFinalise_(sheet);

  ss.toast('Workflow instructions rebuilt successfully.', INSTRUCTIONS_CFG.targetTab, 5);
}

function instructionsResetSheet_(sheet) {
  const fullRange = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
  fullRange.breakApart();
  fullRange.clearDataValidations();
  sheet.clear();
  sheet.clearFormats();
  sheet.clearNotes();
  sheet.getBandings().forEach((banding) => banding.remove());
  sheet.clearConditionalFormatRules();
}

function instructionsResizeSheet_(sheet) {
  const requiredColumns = 10;
  const requiredRows = 142;
  const currentColumns = sheet.getMaxColumns();
  const currentRows = sheet.getMaxRows();

  if (currentColumns < requiredColumns) {
    sheet.insertColumnsAfter(currentColumns, requiredColumns - currentColumns);
  } else if (currentColumns > requiredColumns) {
    sheet.deleteColumns(requiredColumns + 1, currentColumns - requiredColumns);
  }

  if (currentRows < requiredRows) {
    sheet.insertRowsAfter(currentRows, requiredRows - currentRows);
  } else if (currentRows > requiredRows) {
    sheet.deleteRows(requiredRows + 1, currentRows - requiredRows);
  }

  sheet.setColumnWidth(1, 210);
  sheet.setColumnWidth(2, 18);
  sheet.setColumnWidth(3, 150);
  sheet.setColumnWidth(4, 150);
  sheet.setColumnWidth(5, 150);
  sheet.setColumnWidth(6, 150);
  sheet.setColumnWidth(7, 150);
  sheet.setColumnWidth(8, 150);
  sheet.setColumnWidth(9, 150);
  sheet.setColumnWidth(10, 18);
}

function instructionsPaintBackground_(sheet) {
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setBackground(INSTRUCTIONS_CFG.color.bg);
}

function instructionsBuildHeader_(sheet) {
  const c = INSTRUCTIONS_CFG.color;

  sheet.getRange(1, 3, 1, 7).merge()
    .setValue('CONTENT OPERATIONS  /  TEAM GUIDE')
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.muted)
    .setBackground(c.bg)
    .setHorizontalAlignment('left')
    .setVerticalAlignment('bottom');
  sheet.setRowHeight(1, 22);

  sheet.getRange(2, 3, 1, 7).merge()
    .setValue('Workflow Instructions')
    .setFontFamily('Playfair Display')
    .setFontSize(24)
    .setFontWeight('bold')
    .setFontColor(c.dark)
    .setBackground(c.bg)
    .setHorizontalAlignment('left')
    .setVerticalAlignment('middle')
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.setRowHeight(2, 38);

  sheet.getRange(3, 3, 1, 7).merge()
    .setValue('Use this tab to choose the right workflow action, understand handoffs, and know which tabs to edit.')
    .setFontFamily('Inter')
    .setFontSize(9)
    .setFontStyle('italic')
    .setFontColor(c.muted)
    .setBackground(c.bg)
    .setHorizontalAlignment('left')
    .setVerticalAlignment('middle');
  sheet.setRowHeight(3, 20);
}

function instructionsBuildSidePanel_(sheet) {
  const c = INSTRUCTIONS_CFG.color;
  const rows = [
    ['START HERE', 'header'],
    [null, 'gap'],
    ['DAILY ACTION', 'label'],
    ['Content Workflow > Open My Task Queue', 'body'],
    ['NEW IDEA', 'label'],
    ['Content Workflow > Add New Idea', 'body'],
    ['QA CHECK', 'label'],
    ['Content Workflow > Run Workflow QA Check', 'body'],
    ['SOURCE OF TRUTH', 'label'],
    ['1A. Content Planning', 'body'],
    ['DO NOT MANUALLY EDIT', 'label'],
    ['1B, 1C, 1D, Activity Log, Revision Log, Workflow QA Report', 'body'],
    ['ADMIN ONLY', 'label'],
    ['Admin Override, Settings changes, team roles, and Sheet sharing permissions', 'body']
  ];

  rows.forEach((item, index) => {
    const row = index + 1;
    const value = item[0];
    const style = item[1];
    const cell = sheet.getRange(row, 1);

    if (value !== null) {
      cell.setValue(value);
    }

    switch (style) {
      case 'header':
        cell.setFontFamily('Playfair Display')
          .setFontSize(14)
          .setFontWeight('bold')
          .setFontColor(c.dark)
          .setBackground(c.surface)
          .setVerticalAlignment('middle')
          .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
        sheet.setRowHeight(row, 36);
        break;
      case 'label':
        cell.setFontFamily('Roboto Mono')
          .setFontSize(8)
          .setFontWeight('bold')
          .setFontColor(c.muted)
          .setBackground(c.surface)
          .setVerticalAlignment('middle');
        sheet.setRowHeight(row, 18);
        break;
      case 'body':
        cell.setFontFamily('Inter')
          .setFontSize(9)
          .setFontColor(c.dark)
          .setBackground(c.white)
          .setWrap(true)
          .setVerticalAlignment('middle')
          .setBorder(true, true, true, true, false, false, c.rule, SpreadsheetApp.BorderStyle.SOLID);
        sheet.setRowHeight(row, 38);
        break;
      case 'gap':
        cell.setBackground(c.surface);
        sheet.setRowHeight(row, 8);
        break;
    }
  });

  sheet.getRange(16, 1)
    .setValue('This tab is rebuilt by script. Update instructions in buildinstructions.js, then rerun buildWorkflowInstructionsTab().')
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontColor(c.muted)
    .setBackground(c.inset)
    .setWrap(true)
    .setVerticalAlignment('top')
    .setBorder(true, true, true, true, false, false, c.rule, SpreadsheetApp.BorderStyle.SOLID);
  sheet.setRowHeight(16, 78);
}

function instructionsBuildContent_(sheet) {
  let row = 5;

  row = instructionsAddSection_(sheet, row, 'Workflow Rules', 'The sheet works best when users move items through the dialogs instead of manually editing statuses.', [
    {
      title: 'Core status flow',
      body: [
        'Idea -> Planned -> Assigned to Film -> Filming Complete -> Editing V1 -> Ready for Brand Manager Review',
        'Ready for Brand Manager Review -> Approved -> Scheduled -> Posted',
        'Ready for Brand Manager Review -> Revision Requested -> Editing V2+ -> Ready for Brand Manager Review'
      ]
    },
    {
      title: 'Daily starting point',
      body: [
        'Use Content Workflow > Open My Task Queue.',
        'Choose your name from the User dropdown.',
        'Use the action buttons on each card instead of typing Content # manually when possible.'
      ]
    },
    {
      title: 'Tabs to treat as views',
      body: [
        '1B. Filming Calendar, 1C. Posting Calendar, and 1D. Kanban View are formula or script-built views.',
        'Update 1A. Content Planning through workflow dialogs so the views stay in sync.'
      ]
    }
  ]);

  row = instructionsAddSection_(sheet, row, 'Everyone', 'How the whole team should use the system.', [
    {
      title: 'Add a new idea',
      body: [
        'Open Content Workflow > Add New Idea.',
        'Fill Submitted by, Content pillar, Format, Idea / title, Subject, and Moment / Action when known.',
        'Goal is optional. Notes and Inspiration link are optional.',
        'New ideas go to 3. Idea Brain Dump until Brand Manager or Admin promotes them.'
      ]
    },
    {
      title: 'Check your assignments',
      body: [
        'Open My Task Queue and select your name.',
        'Cards show only the tasks that belong to that user or role.',
        'Overdue and blocked labels mean the item needs attention before the normal workflow can continue.'
      ]
    },
    {
      title: 'Avoid manual status edits',
      body: [
        'Status changes should happen through workflow actions.',
        'Manual status edits can skip required fields, owners, timestamps, Activity Log entries, and Revision Log entries.',
        'Ask Vivianne/Admin for an Admin Override if something truly needs to be corrected.'
      ]
    }
  ]);

  row = instructionsAddSection_(sheet, row, 'Brand Manager', 'Planning, reviewing, and scheduling owner.', [
    {
      title: 'Promote ideas',
      body: [
        'Review 3. Idea Brain Dump.',
        'Select or enter the idea row, then use Content Workflow > Promote Idea to Planning.',
        'Add enough planning detail for filming: subject, moment/action, shot list, instructions, filmer, date, editing brief, and priority when known.'
      ]
    },
    {
      title: 'Assign filming',
      body: [
        'For Planned items, use Assign Filming Task.',
        'Required: assigned filmer, filming date, shot list, and filming instructions.',
        'The task moves to Assigned to Film and Current Owner becomes Hillary, Thao, or Hillary + Thao.'
      ]
    },
    {
      title: 'Review edited content',
      body: [
        'Ready for Brand Manager Review cards show the latest edit URL and version number.',
        'Approve when final: Final Approved Video URL is saved and status becomes Approved.',
        'Request Revision when changes are needed: feedback is required, Revision Log is updated, and Current Owner becomes Estefanie.'
      ]
    },
    {
      title: 'Schedule approved content',
      body: [
        'For Approved items, use Schedule Content.',
        'Required: platform, posting date, time, caption, CTA, hashtags, and approved video URL.',
        'Scheduling updates 1A, checks platform boxes when available, and sends the item to Estefanie to post.'
      ]
    }
  ]);

  row = instructionsAddSection_(sheet, row, 'Hillary and Thao', 'Filming owner workflow.', [
    {
      title: 'Find filming tasks',
      body: [
        'Open My Task Queue and select Hillary or Thao.',
        'Assigned filming cards appear when the item status is Assigned to Film and the assigned filmer includes your name.',
        'Read the shot list, filming instructions, props/setup notes, location, and reference links before filming.'
      ]
    },
    {
      title: 'Submit raw footage',
      body: [
        'After filming, use Submit Raw Footage from the task card or menu.',
        'Paste the Google Drive folder URL for the raw footage.',
        'Confirm filming is complete. The item moves to Filming Complete and Current Owner becomes Estefanie.'
      ]
    },
    {
      title: 'If filming is blocked',
      body: [
        'Add the blocker in 1A. Content Planning under Blocker / Issue or tell Brand Manager/Admin.',
        'Blocked items will show in QA and task queue labels.',
        'Do not mark filming complete until footage is actually ready for editing.'
      ]
    }
  ]);

  row = instructionsAddSection_(sheet, row, 'Estefanie', 'Editing, revision, and posting owner workflow.', [
    {
      title: 'Start editing',
      body: [
        'Filming Complete and Revision Requested items appear in Estefanie task queue.',
        'Use Start Editing for first edits and Start Revision when Brand Manager requested changes.',
        'The item moves to Editing V1 or Editing V2+.'
      ]
    },
    {
      title: 'Submit edited versions',
      body: [
        'Use Submit Edited Version when the edit is ready for Brand Manager.',
        'Paste the edited video URL and add editor notes if useful.',
        'V1, V2, and V3 URLs are visible on 1A. Version 4+ history remains in Revision Log.'
      ]
    },
    {
      title: 'Handle revisions',
      body: [
        'Revision Requested cards show Brand Manager feedback.',
        'Start Revision, make updates, and submit the next edited version.',
        'Revision Log preserves each submitted version and review decision.'
      ]
    },
    {
      title: 'Mark content posted',
      body: [
        'Scheduled cards show platform, date/time, caption preview, and final video URL.',
        'Use Mark as Posted after the post is live.',
        'Platform is required. Live post URL is optional for V1 but recommended.'
      ]
    }
  ]);

  row = instructionsAddSection_(sheet, row, 'Vivianne and Admin', 'System maintenance and exception handling.', [
    {
      title: 'Run setup and QA',
      body: [
        'Run Phase 1 Setup only when rebuilding foundation fields or refreshing validations.',
        'Run Workflow QA Check before rollout, after bulk edits, and when the team reports missing tasks.',
        'Workflow QA Report is advisory and can be regenerated. It should not be used as a working database.'
      ]
    },
    {
      title: 'Use Admin Override carefully',
      body: [
        'Admin Override is the only intended bypass path.',
        'Notes are required and Activity Log records the old status, new status, user, and override note.',
        'Use it for corrections, not for normal day-to-day status movement.'
      ]
    },
    {
      title: 'Maintain Settings',
      body: [
        '5. Settings controls dropdown values for statuses, team members, roles, platforms, priorities, subjects, and moment/actions.',
        'Keep names consistent with task queue ownership rules: Brand Manager, Hillary, Thao, Estefanie, Vivianne, Admin.',
        'Avoid storing credentials in the workbook. Move social login credentials out of 0. Notes.'
      ]
    },
    {
      title: 'Add a new team member',
      body: [
        'Add the person to the Team Members list in the Workflow Config block on 5. Settings.',
        'If they can film, add their name or pairing to Filmer Assignment Values. Assigned filming cards route automatically when the assigned value includes their exact name.',
        'Rerun Phase 1 Setup after changing controlled lists so named ranges and dropdown validations refresh.',
        'For planning, review, editing, posting, or Admin Override permissions, update Code.js routing rules too.'
      ]
    },
    {
      title: 'Assign roles and permissions',
      body: [
        'Google Sheets access is controlled with the Share button. Give edit access only to people who should update workflow data.',
        'The Roles list in 5. Settings is a workflow reference, not a security system by itself.',
        'Task queue permissions are currently workflow-based: Brand Manager handles planning/review/scheduling, Hillary/Thao handle filming, Estefanie handles editing/posting, Vivianne/Admin see all actions.',
        'If a new person needs a routed queue or Admin Override access, update Code.js routing rules before relying on the role label alone.'
      ]
    }
  ]);

  row = instructionsAddSection_(sheet, row, 'Reference Tabs', 'What each tab is for.', [
    {
      title: 'Working tabs',
      body: [
        '1A. Content Planning: master database and source of truth.',
        '3. Idea Brain Dump: raw idea intake before promotion.',
        '5. Settings: controlled lists and workflow config.'
      ]
    },
    {
      title: 'View tabs',
      body: [
        '1B. Filming Calendar: filming schedule view.',
        '1C. Posting Calendar: posting schedule view.',
        '1D. Kanban View: script-built board view for scanability.'
      ]
    },
    {
      title: 'System tabs',
      body: [
        'Activity Log: audit history of workflow actions and overrides.',
        'Revision Log: exact edit version and review decision history.',
        'Workflow QA Report: regenerated issue report for rollout and maintenance checks.'
      ]
    }
  ]);

  instructionsAddSection_(sheet, row, 'Troubleshooting', 'Fast checks when something does not appear where expected.', [
    {
      title: 'Task missing from queue',
      body: [
        'Check Status and Current Owner on 1A.',
        'For filming, confirm Assigned Filmer(s) includes Hillary, Thao, or Hillary + Thao.',
        'Run Workflow QA Check to find missing owner or required-field issues.'
      ]
    },
    {
      title: 'Calendar or Kanban looks wrong',
      body: [
        'Do not edit 1B, 1C, or 1D directly.',
        'Confirm Posting Date, Time, Filming Date, Status, and Content # are filled correctly on 1A.',
        'For Kanban layout issues, rerun buildKanbanView().'
      ]
    },
    {
      title: 'Dropdown or validation issue',
      body: [
        'Check 5. Settings first.',
        'Run setupPhase1DatabaseFoundation() if workflow columns or dropdown validations were damaged.',
        'Use Admin Override only if the normal workflow action is blocked by bad legacy data.'
      ]
    }
  ]);
}

function instructionsAddSection_(sheet, row, title, subtitle, cards) {
  const c = INSTRUCTIONS_CFG.color;

  sheet.getRange(row, 3, 1, 7).merge()
    .setValue(title)
    .setFontFamily('Playfair Display')
    .setFontSize(17)
    .setFontWeight('bold')
    .setFontColor(c.dark)
    .setBackground(c.bg)
    .setHorizontalAlignment('left')
    .setVerticalAlignment('middle')
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.setRowHeight(row, 30);

  sheet.getRange(row + 1, 3, 1, 7).merge()
    .setValue(subtitle)
    .setFontFamily('Inter')
    .setFontSize(9)
    .setFontStyle('italic')
    .setFontColor(c.muted)
    .setBackground(c.bg)
    .setWrap(true)
    .setHorizontalAlignment('left')
    .setVerticalAlignment('middle');
  sheet.setRowHeight(row + 1, 24);

  let nextRow = row + 3;
  cards.forEach((card) => {
    nextRow = instructionsAddCard_(sheet, nextRow, card.title, card.body);
  });

  return nextRow + 1;
}

function instructionsAddCard_(sheet, row, title, bodyLines) {
  const c = INSTRUCTIONS_CFG.color;
  const body = bodyLines.map((line) => '- ' + line).join('\n');
  const height = Math.max(54, bodyLines.length * 23);

  sheet.getRange(row, 3, 1, 2).merge()
    .setValue(title)
    .setFontFamily('Roboto Mono')
    .setFontSize(9)
    .setFontWeight('bold')
    .setFontColor(c.bg)
    .setBackground(c.dark)
    .setWrap(true)
    .setHorizontalAlignment('left')
    .setVerticalAlignment('top')
    .setBorder(true, true, true, false, null, null, c.rule, SpreadsheetApp.BorderStyle.SOLID);

  sheet.getRange(row, 5, 1, 5).merge()
    .setValue(body)
    .setFontFamily('Inter')
    .setFontSize(10)
    .setFontColor(c.body)
    .setBackground(c.surface)
    .setWrap(true)
    .setHorizontalAlignment('left')
    .setVerticalAlignment('top')
    .setBorder(true, false, true, true, null, null, c.rule, SpreadsheetApp.BorderStyle.SOLID);

  sheet.setRowHeight(row, height);
  return row + 1;
}

function instructionsFinalise_(sheet) {
  sheet.setFrozenColumns(1);
  sheet.setFrozenRows(3);
  sheet.setHiddenGridlines(true);
}
