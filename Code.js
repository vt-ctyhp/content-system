const PHASE1 = {
  sheets: {
    content: '1A. Content Planning',
    settings: '5. Settings',
    activityLog: 'Activity Log',
    revisionLog: 'Revision Log',
    workflowQaReport: 'Workflow QA Report',
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
    'Brand Manager Feedback',
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
    'Feedback From Brand Manager',
    'Decision',
    'Notes',
  ],
  workflowQaHeaders: [
    'Timestamp',
    'Severity',
    'Content #',
    'Status',
    'Current Owner',
    'Issue',
    'Recommended Fix',
  ],
  configLists: {
    Statuses: [
      'Idea',
      'Planned',
      'Assigned to Film',
      'Filming Complete',
      'Editing V1',
      'Ready for Brand Manager Review',
      'Revision Requested',
      'Editing V2+',
      'Approved',
      'Scheduled',
      'Posted',
      'Paused / Backlog',
    ],
    'Team Members': [
      'Brand Manager',
      'Hillary',
      'Thao',
      'Estefanie',
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
      'Thao',
      'Hillary + Thao',
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
    Subjects: [
      'Marquise',
      'Oval',
      'Round',
      'Emerald',
      'Pear',
      'Heart',
      'Radiant',
      'Cushion',
      'Hidden Halo',
      'Solitaire',
      '3 Stone',
      'Wedding Band',
      'Diamond Closeup',
      'Ring Box',
      'Gift Bag',
      'Champagne',
      'Reserved Sign',
      'CAD',
      'Wax Model',
      'Real Customer',
      'Hands',
      'Outfit Styling',
      'AD',
    ],
    'Moment Actions': [
      'Unboxing',
      'Try On',
      'Close Up',
      'Pouring Champagne',
      'Walking In',
      'Laughing',
      'Talking',
      'Adjusting Outfit',
      'Signing',
      'Designing',
      'Viewing CAD',
      'Wax Try On',
      'Diamond Setting',
      'Polishing',
      'Cleaning',
      'Packing',
      'Opening Box',
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
    ['Ready for ' + ('Ab' + 'by') + ' Review']: 'Ready for Brand Manager Review',
    Posted: 'Posted',
  },
};

const WORKFLOW_TRANSITIONS = {
  assignFilming: {
    label: 'Assign Filming',
    from: ['Planned'],
    to: 'Assigned to Film',
    owner: (payload) => payload.assignedFilmer || '',
    requiredFields: ['contentId', 'assignedFilmer', 'filmingDate', 'shotList', 'filmingInstructions'],
  },
  submitRawFootage: {
    label: 'Submit Raw Footage',
    from: ['Assigned to Film'],
    to: 'Filming Complete',
    owner: 'Estefanie',
    requiredFields: ['contentId', 'rawFootageUrl'],
  },
  startEditingV1: {
    action: 'startEditing',
    label: 'Start Editing',
    from: ['Filming Complete'],
    to: 'Editing V1',
    owner: 'Estefanie',
    requiredFields: ['contentId'],
  },
  startEditingRevision: {
    action: 'startEditing',
    label: 'Start Revision',
    from: ['Revision Requested'],
    to: 'Editing V2+',
    owner: 'Estefanie',
    requiredFields: ['contentId'],
  },
  submitEditedVersion: {
    label: 'Submit Edited Version',
    from: ['Editing V1', 'Editing V2+'],
    to: 'Ready for Brand Manager Review',
    owner: 'Brand Manager',
    requiredFields: ['contentId', 'editedVideoUrl'],
  },
  approveContent: {
    action: 'reviewApprove',
    label: 'Review / Approve',
    from: ['Ready for Brand Manager Review'],
    to: 'Approved',
    owner: 'Brand Manager',
    requiredFields: ['contentId', 'decision'],
  },
  requestRevision: {
    action: 'reviewApprove',
    label: 'Request Revision',
    from: ['Ready for Brand Manager Review'],
    to: 'Revision Requested',
    owner: 'Estefanie',
    requiredFields: ['contentId', 'decision', 'feedbackNotes'],
  },
  scheduleContent: {
    label: 'Schedule Content',
    from: ['Approved'],
    to: 'Scheduled',
    owner: 'Estefanie',
    requiredFields: ['contentId', 'platforms', 'postingDate', 'postingTime', 'caption', 'cta', 'hashtags'],
  },
  markPosted: {
    label: 'Mark Posted',
    from: ['Scheduled'],
    to: 'Posted',
    owner: '',
    requiredFields: ['contentId', 'platformPosted'],
  },
};

const TEAM_NAME_RENAMES = [
  { oldName: 'Ab' + 'by', newName: 'Brand Manager' },
  { oldName: 'Ta' + 'o', newName: 'Thao' },
  { oldName: 'Steph' + 'anie', newName: 'Estefanie' },
];

const WORKFLOW_HEADER_RENAMES = [
  { oldHeader: ('Ab' + 'by') + ' Feedback', newHeader: 'Brand Manager Feedback' },
  { oldHeader: 'Feedback From ' + ('Ab' + 'by'), newHeader: 'Feedback From Brand Manager' },
  { oldHeader: ('Ab' + 'by') + ' Review Status', newHeader: 'Brand Manager Review Status' },
];

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

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Content Workflow')
    .addItem('Add New Idea', 'openAddNewIdeaDialog')
    .addItem('Promote Idea to Planning', 'openPromoteIdeaDialog')
    .addSeparator()
    .addItem('Assign Filming Task', 'openAssignFilmingTaskDialog')
    .addItem('Submit Raw Footage', 'openSubmitRawFootageDialog')
    .addSeparator()
    .addItem('Start Editing', 'openStartEditingDialog')
    .addItem('Submit Edited Version', 'openSubmitEditedVersionDialog')
    .addItem('Review / Approve Content', 'openReviewApproveContentDialog')
    .addSeparator()
    .addItem('Schedule Content', 'openScheduleContentDialog')
    .addItem('Mark as Posted', 'openMarkAsPostedDialog')
    .addSeparator()
    .addItem('Open My Task Queue', 'openMyTaskQueueSidebar')
    .addItem('Admin Override', 'openAdminOverrideDialog')
    .addSeparator()
    .addItem('Apply Team Name Updates', 'applyTeamNameUpdates')
    .addItem('Run Workflow QA Check', 'runWorkflowQaCheck')
    .addItem('Run Phase 1 Setup', 'setupPhase1DatabaseFoundation')
    .addToUi();
}

function openAddNewIdeaDialog() {
  showWorkflowDialog_('addIdea');
}

function openPromoteIdeaDialog() {
  showWorkflowDialog_('promoteIdea');
}

function openAssignFilmingTaskDialog() {
  showWorkflowDialog_('assignFilming');
}

function openSubmitRawFootageDialog() {
  showWorkflowDialog_('submitRawFootage');
}

function openStartEditingDialog() {
  showWorkflowDialog_('startEditing');
}

function openSubmitEditedVersionDialog() {
  showWorkflowDialog_('submitEditedVersion');
}

function openReviewApproveContentDialog() {
  showWorkflowDialog_('reviewApprove');
}

function openScheduleContentDialog() {
  showWorkflowDialog_('scheduleContent');
}

function openMarkAsPostedDialog() {
  showWorkflowDialog_('markPosted');
}

function openAdminOverrideDialog() {
  showWorkflowDialog_('adminOverride');
}

function openMyTaskQueueSidebar() {
  const template = HtmlService.createTemplateFromFile('TaskQueueSidebar');
  const html = template.evaluate()
    .setTitle('My Task Queue');
  SpreadsheetApp.getUi().showSidebar(html);
}

function showWorkflowDialog_(action, prefillContentId) {
  const template = HtmlService.createTemplateFromFile('WorkflowDialog');
  template.action = action;
  template.prefillContentId = prefillContentId || '';
  const title = getWorkflowActionConfig_(action).title;
  const html = template.evaluate()
    .setWidth(560)
    .setHeight(680);
  SpreadsheetApp.getUi().showModalDialog(html, title);
}

function openWorkflowDialogForTask(action, contentId) {
  showWorkflowDialog_(action, contentId);
}

function getWorkflowDialogModel(action, prefillContentId) {
  const config = getWorkflowActionConfig_(action);
  const spreadsheet = SpreadsheetApp.getActive();
  const options = getWorkflowOptions_(spreadsheet);
  const selectedContent = prefillContentId ? getContentRecordById_(prefillContentId) : getSelectedContentContext_(spreadsheet);
  const selectedIdea = getSelectedIdeaContext_(spreadsheet);
  const display = getWorkflowActionDisplay_(action, selectedContent);

  return {
    action,
    title: display.title || config.title,
    submitLabel: display.submitLabel || config.submitLabel,
    fields: config.fields,
    options,
    selectedContent,
    selectedIdea,
    contextLines: buildWorkflowContextLines_(action, selectedContent),
    defaults: buildWorkflowDefaults_(action, selectedContent, selectedIdea, prefillContentId),
  };
}

function submitWorkflowDialog(action, payload) {
  const cleanPayload = sanitizePayload_(payload || {});

  switch (action) {
    case 'addIdea':
      return addNewIdea_(cleanPayload);
    case 'promoteIdea':
      return promoteIdeaToPlanning_(cleanPayload);
    case 'assignFilming':
      return assignFilmingTask_(cleanPayload);
    case 'submitRawFootage':
      return submitRawFootage_(cleanPayload);
    case 'startEditing':
      return startEditing_(cleanPayload);
    case 'submitEditedVersion':
      return submitEditedVersion_(cleanPayload);
    case 'reviewApprove':
      return reviewApproveContent_(cleanPayload);
    case 'scheduleContent':
      return scheduleContent_(cleanPayload);
    case 'markPosted':
      return markContentPosted_(cleanPayload);
    case 'adminOverride':
      return adminOverrideContent_(cleanPayload);
    default:
      throw new Error(`Unknown workflow action: ${action}`);
  }
}

function getTaskQueueModel() {
  const options = getWorkflowOptions_(SpreadsheetApp.getActive());
  return {
    users: options.teamMembers,
    defaultUser: 'Brand Manager',
  };
}

function getTaskQueue(userName) {
  const spreadsheet = SpreadsheetApp.getActive();
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  const contentIdColumn = columnMap[PHASE1.coreHeaders.contentId];
  const lastDataRow = getLastContentDataRow_(sheet, contentIdColumn);
  const normalizedUser = String(userName || '').trim();

  if (lastDataRow < PHASE1.rows.contentDataStart) {
    return buildTaskQueuePayload_([], normalizedUser);
  }

  const rowCount = lastDataRow - PHASE1.rows.contentDataStart + 1;
  const values = sheet.getRange(PHASE1.rows.contentDataStart, 1, rowCount, sheet.getLastColumn()).getDisplayValues();
  const revisionHistoryMap = getRevisionHistoryMap_();

  const tasks = values
    .map((row, index) => rowToContentRecord_(row, columnMap, PHASE1.rows.contentDataStart + index))
    .filter((record) => record.contentId && record.status !== 'Posted')
    .filter((record) => taskBelongsInQueue_(record, normalizedUser))
    .map((record) => {
      const revisionHistory = revisionHistoryMap[normalizeContentId_(record.contentId)] || [];
      record.latestVersion = getCurrentEditVersion_(record, revisionHistory);
      record.latestEditedUrl = getLatestEditedUrl_(record, revisionHistory);
      record.brandManagerFeedback = record['Brand Manager Feedback'] || '';
      record.editorNotes = record['Editor Notes'] || '';
      record.platforms = record['Platform(s)'] || '';
      record.postingDate = record['Posting Date'] || '';
      record.postingTime = record.Time || '';
      record.finalApprovedVideoUrl = getApprovedVideoUrlForScheduling_(record, revisionHistory);
      record.schedulingReadiness = getSchedulingReadiness_(record, revisionHistory);
      record.postingContext = getPostingContext_(record);
      record.blockerIssue = record['Blocker / Issue'] || '';
      record.isBlocked = Boolean(record.blockerIssue);
      record.isOverdue = isRecordOverdue_(record);
      record.overdueLabel = getOverdueLabel_(record);
      record.availableActions = getAvailableActionsForRecord_(record, normalizedUser);
      return record;
    })
    .slice(0, 100);

  return buildTaskQueuePayload_(tasks, normalizedUser);
}

function buildTaskQueuePayload_(tasks, userName) {
  return {
    userName: userName || '',
    tasks,
    summary: buildTaskQueueSummary_(tasks),
  };
}

function buildTaskQueueSummary_(tasks) {
  return tasks.reduce((summary, task) => {
    summary.total += 1;
    incrementCount_(summary.byStatus, task.status || 'Blank');
    incrementCount_(summary.byOwner, task.currentOwner || 'Unassigned');
    if (task.isOverdue) {
      summary.overdue += 1;
    }
    if (task.isBlocked) {
      summary.blocked += 1;
    }
    return summary;
  }, {
    total: 0,
    overdue: 0,
    blocked: 0,
    byStatus: {},
    byOwner: {},
  });
}

function incrementCount_(map, key) {
  map[key] = (map[key] || 0) + 1;
}

function runWorkflowQaCheck() {
  const spreadsheet = SpreadsheetApp.getActive();
  const reportSheet = ensureWorkflowQaReport_(spreadsheet);
  const rows = buildWorkflowQaRows_();

  clearWorkflowQaReport_(reportSheet);
  if (rows.length) {
    reportSheet.getRange(PHASE1.rows.logHeader + 1, 1, rows.length, PHASE1.workflowQaHeaders.length)
      .setValues(rows);
  }
  reportSheet.autoResizeColumns(1, PHASE1.workflowQaHeaders.length);
  spreadsheet.toast(`Workflow QA complete. ${rows.length} issue(s) found.`, 'Content Workflow', 8);

  return {
    issueCount: rows.length,
    reportSheet: reportSheet.getName(),
  };
}

function applyTeamNameUpdates() {
  const spreadsheet = SpreadsheetApp.getActive();
  const contentUpdates = replaceLegacyTeamNamesInContent_(spreadsheet);
  const configRanges = ensureWorkflowSettings_(spreadsheet);
  const columnMap = ensureWorkflowColumns_(spreadsheet);
  const activityLog = ensureActivityLog_(spreadsheet);
  const statusChanges = standardizeExistingStatuses_(spreadsheet, columnMap, activityLog);

  applyWorkflowValidations_(spreadsheet, columnMap, configRanges);
  appendActivityLog_(
    '',
    'TEAM_NAME_UPDATE',
    '',
    '',
    `Renamed legacy team names in workflow data to Brand Manager, Thao, and Estefanie. Updated ${contentUpdates} content cell(s) and ${statusChanges} status value(s).`,
    ''
  );

  spreadsheet.toast(`Team name update complete. ${contentUpdates} content cell(s) and ${statusChanges} status value(s) changed.`, 'Content Workflow', 8);

  return {
    updatedContentCells: contentUpdates,
    updatedStatusCells: statusChanges,
  };
}

function replaceLegacyTeamNamesInContent_(spreadsheet) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = ensureWorkflowColumns_(spreadsheet);
  const contentIdColumn = columnMap[PHASE1.coreHeaders.contentId];
  const lastDataRow = getLastContentDataRow_(sheet, contentIdColumn);

  if (lastDataRow < PHASE1.rows.contentDataStart) {
    return 0;
  }

  const headers = [
    'Current Owner',
    'Assigned Filmer(s)',
    'Assigned Editor',
    'Assigned Reviewer',
  ];
  const rowCount = lastDataRow - PHASE1.rows.contentDataStart + 1;
  let changedCells = 0;

  headers.forEach((header) => {
    const column = columnMap[header];
    if (!column) {
      return;
    }

    const range = sheet.getRange(PHASE1.rows.contentDataStart, column, rowCount, 1);
    const values = range.getValues();
    let changed = false;
    const nextValues = values.map((row) => {
      const currentValue = row[0];
      const nextValue = replaceLegacyTeamNameValue_(currentValue);
      if (nextValue !== currentValue) {
        changed = true;
        changedCells += 1;
      }
      return [nextValue];
    });

    if (changed) {
      range.setValues(nextValues);
    }
  });

  return changedCells;
}

function buildWorkflowQaRows_() {
  const spreadsheet = SpreadsheetApp.getActive();
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  const contentIdColumn = columnMap[PHASE1.coreHeaders.contentId];
  const lastDataRow = getLastContentDataRow_(sheet, contentIdColumn);

  if (lastDataRow < PHASE1.rows.contentDataStart) {
    return [];
  }

  const rowCount = lastDataRow - PHASE1.rows.contentDataStart + 1;
  const values = sheet.getRange(PHASE1.rows.contentDataStart, 1, rowCount, sheet.getLastColumn()).getDisplayValues();
  const revisionHistoryMap = getRevisionHistoryMap_();
  const timestamp = new Date();
  const qaRows = [];

  values.forEach((row, index) => {
    const record = rowToContentRecord_(row, columnMap, PHASE1.rows.contentDataStart + index);
    if (!record.contentId) {
      return;
    }

    const revisionHistory = revisionHistoryMap[normalizeContentId_(record.contentId)] || [];
    getWorkflowQaIssuesForRecord_(record, revisionHistory).forEach((issue) => {
      qaRows.push([
        timestamp,
        issue.severity,
        record.contentId,
        record.status,
        record.currentOwner,
        issue.issue,
        issue.recommendedFix,
      ]);
    });
  });

  return qaRows;
}

function getWorkflowQaIssuesForRecord_(record, revisionHistory) {
  const issues = [];
  const status = record.status || '';
  const activeStatuses = PHASE1.configLists.Statuses;

  if (status && activeStatuses.indexOf(status) === -1) {
    addWorkflowQaIssue_(issues, 'High', `Status "${status}" is not in the controlled workflow status list.`, 'Use Admin Override to move the item to a supported status.');
  }

  getRequiredFieldsForStatus_(status).forEach((field) => {
    if (!String(record[field.header] || '').trim()) {
      addWorkflowQaIssue_(issues, 'High', `${field.label} is missing for status "${status}".`, `Fill in ${field.label} on ${PHASE1.sheets.content}.`);
    }
  });

  const expectedOwner = getExpectedOwnerForStatus_(status);
  if (expectedOwner && record.currentOwner !== expectedOwner) {
    addWorkflowQaIssue_(issues, 'High', `Current Owner should be ${expectedOwner} for status "${status}".`, `Set Current Owner to ${expectedOwner}.`);
  }

  if (status === 'Ready for Brand Manager Review' && !getLatestEditedUrl_(record, revisionHistory)) {
    addWorkflowQaIssue_(issues, 'High', 'Ready for Brand Manager Review is missing an edited video URL.', 'Submit an edited version or add the latest edited URL before review.');
  }

  addRevisionQaIssues_(issues, record, revisionHistory);

  if (status === 'Approved' && !String(record['Final Approved Video URL'] || '').trim()) {
    addWorkflowQaIssue_(issues, 'High', 'Approved content is missing a final approved video URL.', 'Add Final Approved Video URL or approve from an existing edited URL.');
  }

  if (status === 'Scheduled') {
    const readiness = getSchedulingReadiness_(record, revisionHistory);
    if (!readiness.ready) {
      addWorkflowQaIssue_(issues, 'High', `Scheduled content is missing: ${readiness.missing.join(', ')}.`, 'Open Schedule Content and fill all scheduling fields.');
    }
  }

  if (record['Blocker / Issue']) {
    addWorkflowQaIssue_(issues, 'Medium', `Blocker noted: ${record['Blocker / Issue']}`, 'Resolve the blocker or update the blocker note.');
  }

  const overdueLabel = getOverdueLabel_(record);
  if (overdueLabel) {
    addWorkflowQaIssue_(issues, 'Medium', overdueLabel, 'Update the date, complete the task, or move the item to the correct status.');
  }

  return issues;
}

function addRevisionQaIssues_(issues, record, revisionHistory) {
  const latestEntry = getLatestRevisionEntryFromHistory_(revisionHistory);
  const latestLoggedVersion = latestEntry ? Number(latestEntry.versionNumber) || 0 : 0;
  const revisionCount = Number(record['Revision Count']) || 0;

  if (latestLoggedVersion && revisionCount && revisionCount < latestLoggedVersion) {
    addWorkflowQaIssue_(issues, 'Medium', `Revision Count (${revisionCount}) is behind Revision Log V${latestLoggedVersion}.`, 'Review Revision Count and latest Revision Log entries.');
  }

  if (record.status === 'Ready for Brand Manager Review' && (!latestEntry || latestEntry.decision !== 'Submitted')) {
    addWorkflowQaIssue_(issues, 'Medium', 'Ready for Brand Manager Review does not have a latest Revision Log decision of Submitted.', 'Submit the edited version through the workflow dialog.');
  }

  if (record.status === 'Revision Requested' && (!latestEntry || latestEntry.decision !== 'Revision Requested')) {
    addWorkflowQaIssue_(issues, 'Medium', 'Revision Requested does not have a matching latest Revision Log decision.', 'Request revision through the review dialog so the Revision Log stays aligned.');
  }
}

function addWorkflowQaIssue_(issues, severity, issue, recommendedFix) {
  issues.push({
    severity,
    issue,
    recommendedFix,
  });
}

function getRequiredFieldsForStatus_(status) {
  const fieldsByStatus = {
    'Assigned to Film': [
      ['Assigned Filmer(s)', 'assigned filmer'],
      ['Filming Date', 'filming date'],
      ['Shot List', 'shot list'],
      ['Filming Instructions', 'filming instructions'],
    ],
    'Filming Complete': [
      ['Raw Footage Folder URL', 'raw footage URL'],
    ],
    'Revision Requested': [
      ['Brand Manager Feedback', 'Brand Manager feedback'],
    ],
    Posted: [
      ['Posted Timestamp', 'posted timestamp'],
    ],
  };

  return (fieldsByStatus[status] || []).map((field) => ({
    header: field[0],
    label: field[1],
  }));
}

function getExpectedOwnerForStatus_(status) {
  const ownersByStatus = {
    'Filming Complete': 'Estefanie',
    'Editing V1': 'Estefanie',
    'Editing V2+': 'Estefanie',
    'Ready for Brand Manager Review': 'Brand Manager',
    'Revision Requested': 'Estefanie',
    Scheduled: 'Estefanie',
  };
  return ownersByStatus[status] || '';
}

function isRecordOverdue_(record) {
  return Boolean(getOverdueLabel_(record));
}

function getOverdueLabel_(record) {
  if (record.status === 'Assigned to Film' && isDateOverdue_(record['Filming Date'])) {
    return `Filming date is overdue: ${record['Filming Date']}.`;
  }
  if (record.status === 'Scheduled' && isDateOverdue_(record['Posting Date'])) {
    return `Posting date is overdue: ${record['Posting Date']}.`;
  }
  return '';
}

function isDateOverdue_(dateValue) {
  const date = parseSheetDate_(dateValue);
  if (!date) {
    return false;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date < today;
}

function parseSheetDate_(dateValue) {
  if (!dateValue) {
    return null;
  }
  if (Object.prototype.toString.call(dateValue) === '[object Date]' && !Number.isNaN(dateValue.getTime())) {
    return new Date(dateValue.getTime());
  }

  const parsedDate = new Date(dateValue);
  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }
  return parsedDate;
}

function getWorkflowActionConfig_(action) {
  const configs = {
    addIdea: {
      title: 'Add New Idea',
      submitLabel: 'Add Idea',
      fields: [
        selectField_('submittedBy', 'Submitted by', 'teamMembers', true),
        selectField_('contentPillar', 'Content pillar', 'contentPillars', true),
        selectField_('format', 'Format', 'formats', true),
        selectField_('goal', 'Goal', 'goals', false),
        textField_('ideaTitle', 'Idea / title', true),
        selectField_('subject', 'Subject', 'subjects', false),
        selectField_('momentAction', 'Moment / Action', 'momentActions', false),
        urlField_('inspirationLink', 'Inspiration link', false),
        textareaField_('notes', 'Notes', false),
      ],
    },
    promoteIdea: {
      title: 'Promote Idea to Planning',
      submitLabel: 'Promote Idea',
      fields: [
        numberField_('ideaRow', 'Idea Brain Dump row', true),
        selectField_('contentPillar', 'Content pillar', 'contentPillars', true),
        selectField_('format', 'Format', 'formats', true),
        selectField_('goal', 'Goal', 'goals', false),
        textField_('ideaTitle', 'Idea / title', true),
        textField_('subject', 'Subject', false),
        textareaField_('momentAction', 'Moment / action', false),
        textareaField_('shotList', 'Shot list', false),
        textareaField_('filmingInstructions', 'Filming instructions', false),
        selectField_('assignedFilmer', 'Assigned filmer(s)', 'filmerAssignments', false),
        dateField_('filmingDate', 'Target filming date', false),
        textareaField_('editingBrief', 'Editing brief', false),
        selectField_('priority', 'Priority', 'priorities', false),
      ],
    },
    assignFilming: {
      title: 'Assign Filming Task',
      submitLabel: 'Assign Filming',
      fields: [
        textField_('contentId', 'Content #', true),
        selectField_('assignedFilmer', 'Assigned filmer(s)', 'filmerAssignments', true),
        dateField_('filmingDate', 'Filming date', true),
        textareaField_('shotList', 'Shot list', true),
        textareaField_('filmingInstructions', 'Filming instructions', true),
        textareaField_('propsSetupNotes', 'Props / setup notes', false),
        textField_('location', 'Location', false),
      ],
    },
    submitRawFootage: {
      title: 'Submit Raw Footage',
      submitLabel: 'Submit Raw Footage',
      fields: [
        textField_('contentId', 'Content #', true),
        urlField_('rawFootageUrl', 'Raw footage Google Drive URL', true),
        textareaField_('filmingNotes', 'Filming notes', false),
        checkboxField_('confirmComplete', 'Confirm filming is complete', true),
      ],
    },
    startEditing: {
      title: 'Start Editing',
      submitLabel: 'Start Editing',
      fields: [
        textField_('contentId', 'Content #', true),
        checkboxField_('confirmStart', 'Confirm editing has started', true),
      ],
    },
    submitEditedVersion: {
      title: 'Submit Edited Version',
      submitLabel: 'Submit Edited Version',
      fields: [
        textField_('contentId', 'Content #', true),
        urlField_('editedVideoUrl', 'Edited video URL', true),
        textareaField_('editorNotes', 'Editor notes', false),
      ],
    },
    reviewApprove: {
      title: 'Review / Approve Content',
      submitLabel: 'Submit Review',
      fields: [
        textField_('contentId', 'Content #', true),
        selectField_('decision', 'Decision', 'reviewDecisions', true),
        textareaField_('feedbackNotes', 'Feedback notes', false),
        urlField_('approvedVideoUrl', 'Approved video URL', false),
      ],
    },
    scheduleContent: {
      title: 'Schedule Content',
      submitLabel: 'Schedule Content',
      fields: [
        textField_('contentId', 'Content #', true),
        selectField_('platforms', 'Platform(s)', 'platforms', true),
        dateField_('postingDate', 'Posting date', true),
        timeField_('postingTime', 'Posting time', true),
        textareaField_('caption', 'Caption', true),
        textareaField_('cta', 'CTA', true),
        textareaField_('hashtags', 'Hashtags', true),
      ],
    },
    markPosted: {
      title: 'Mark as Posted',
      submitLabel: 'Mark Posted',
      fields: [
        textField_('contentId', 'Content #', true),
        selectField_('platformPosted', 'Platform posted', 'platforms', true),
        urlField_('livePostUrl', 'Live post URL', false),
        textareaField_('postedNotes', 'Posted notes', false),
      ],
    },
    adminOverride: {
      title: 'Admin Override',
      submitLabel: 'Apply Override',
      fields: [
        textField_('contentId', 'Content #', true),
        selectField_('status', 'Status', 'statuses', true),
        selectField_('currentOwner', 'Current owner', 'teamMembers', false),
        textareaField_('notes', 'Override notes', true),
      ],
    },
  };

  if (!configs[action]) {
    throw new Error(`Unknown workflow action: ${action}`);
  }

  return configs[action];
}

function addNewIdea_(payload) {
  requireFields_(payload, ['submittedBy', 'contentPillar', 'format', 'ideaTitle']);
  const spreadsheet = SpreadsheetApp.getActive();
  const sheet = requireSheet_(spreadsheet, '3. Idea Brain Dump');
  const row = findFirstBlankRowByColumn_(sheet, 7, 6);

  ensureIdeaBrainDumpColumns_(sheet);
  ensureRows_(sheet, row);
  sheet.getRange(row, 4, 1, 6).setValues([[
    payload.contentPillar,
    payload.format,
    payload.goal,
    payload.ideaTitle,
    payload.inspirationLink || '',
    0,
  ]]);
  sheet.getRange(row, 10, 1, 6).setValues([[
    new Date(),
    payload.submittedBy,
    payload.subject || '',
    payload.momentAction || '',
    payload.notes || '',
    'Needs Review',
  ]]);

  appendActivityLog_('', 'ADD_IDEA', '', 'Idea', `Added idea on row ${row}: ${payload.ideaTitle}`, payload.inspirationLink || '');
  return successResult_(`Idea added to row ${row}.`, { row });
}

function promoteIdeaToPlanning_(payload) {
  requireFields_(payload, ['ideaRow', 'contentPillar', 'format', 'ideaTitle']);
  const spreadsheet = SpreadsheetApp.getActive();
  const ideaSheet = requireSheet_(spreadsheet, '3. Idea Brain Dump');
  const contentSheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = ensureWorkflowColumns_(spreadsheet);
  const contentId = getNextContentId_(contentSheet, columnMap[PHASE1.coreHeaders.contentId]);
  const row = getNextContentRow_(contentSheet, columnMap[PHASE1.coreHeaders.contentId]);
  const status = payload.assignedFilmer && payload.filmingDate ? 'Assigned to Film' : 'Planned';

  ensureRows_(contentSheet, row);
  writeContentValues_(contentSheet, row, columnMap, {
    'Content #': contentId,
    'Content Pillar': payload.contentPillar,
    Format: payload.format,
    Goal: payload.goal || '',
    Idea: payload.ideaTitle,
    Subject: payload.subject || '',
    'Moment / Action': payload.momentAction || '',
    'Filming Date': payload.filmingDate || '',
    Status: status,
    'Created Date': new Date(),
    'Created By': getEffectiveUserEmail_(),
    'Current Owner': status === 'Assigned to Film' ? payload.assignedFilmer : 'Brand Manager',
    'Assigned Filmer(s)': payload.assignedFilmer || '',
    'Assigned Editor': 'Estefanie',
    'Assigned Reviewer': 'Brand Manager',
    'Shot List': payload.shotList || '',
    'Filming Instructions': payload.filmingInstructions || '',
    'Editing Brief': payload.editingBrief || '',
    Priority: payload.priority || '',
    'Last Updated By': getEffectiveUserEmail_(),
    'Last Updated Timestamp': new Date(),
    'Stage Started Timestamp': new Date(),
  });

  ensureIdeaBrainDumpColumns_(ideaSheet);
  const ideaRow = Number(payload.ideaRow);
  if (ideaRow >= 6) {
    ideaSheet.getRange(ideaRow, 9).setValue(1);
    ideaSheet.getRange(ideaRow, 16, 1, 2).setValues([[contentId, new Date()]]);
  }

  appendActivityLog_(contentId, 'PROMOTE_IDEA', '', status, `Promoted idea row ${payload.ideaRow} to Content #${contentId}.`, '');
  return successResult_(`Promoted to Content #${contentId}.`, { contentId, row });
}

function assignFilmingTask_(payload) {
  advanceWorkflow_(payload.contentId, 'assignFilming', payload, {
    updates: {
    'Assigned Filmer(s)': payload.assignedFilmer,
    'Filming Date': payload.filmingDate,
    'Shot List': payload.shotList,
    'Filming Instructions': payload.filmingInstructions,
    'Props / Setup Notes': payload.propsSetupNotes || '',
    Location: payload.location || '',
    'Stage Started Timestamp': new Date(),
    },
    logAction: 'ASSIGN_FILMING',
    notes: payload.propsSetupNotes || '',
  });

  return successResult_(`Content #${payload.contentId} assigned to ${payload.assignedFilmer}.`);
}

function submitRawFootage_(payload) {
  if (payload.confirmComplete !== 'true') {
    throw new Error('Confirm filming is complete before submitting raw footage.');
  }

  advanceWorkflow_(payload.contentId, 'submitRawFootage', payload, {
    updates: {
    'Raw Footage Folder URL': payload.rawFootageUrl,
    'Editor Notes': payload.filmingNotes || '',
    'Stage Completed Timestamp': new Date(),
    },
    logAction: 'SUBMIT_RAW_FOOTAGE',
    notes: payload.filmingNotes || '',
    urlSubmitted: payload.rawFootageUrl,
  });

  return successResult_(`Raw footage submitted for Content #${payload.contentId}.`);
}

function startEditing_(payload) {
  if (payload.confirmStart !== 'true') {
    throw new Error('Confirm editing has started before submitting.');
  }

  const record = getContentRecordById_(payload.contentId);
  const transitionAction = record.status === 'Revision Requested' ? 'startEditingRevision' : 'startEditingV1';
  const result = advanceWorkflow_(payload.contentId, transitionAction, payload, {
    updates: {
      'Stage Started Timestamp': new Date(),
    },
    logAction: 'START_EDITING',
  });

  return successResult_(`Content #${payload.contentId} moved to ${result.newStatus}.`);
}

function submitEditedVersion_(payload) {
  const record = getContentRecordById_(payload.contentId);
  const revisionHistory = getRevisionHistory_(payload.contentId);
  const version = getNextSubmissionVersion_(record, revisionHistory);
  const urlHeader = getVisibleEditUrlHeader_(version);

  advanceWorkflow_(payload.contentId, 'submitEditedVersion', payload, {
    updates: {
      [urlHeader]: payload.editedVideoUrl,
      'Revision Count': version,
      'Editor Notes': payload.editorNotes || '',
      'Stage Completed Timestamp': new Date(),
    },
    logAction: 'SUBMIT_EDITED_VERSION',
    notes: payload.editorNotes || '',
    urlSubmitted: payload.editedVideoUrl,
  });

  appendRevisionLog_(payload.contentId, version, getEffectiveUserEmail_(), payload.editedVideoUrl, '', 'Submitted', payload.editorNotes || '');
  return successResult_(`Edited version V${version} submitted for Content #${payload.contentId}.`);
}

function reviewApproveContent_(payload) {
  const decision = payload.decision;
  const record = getContentRecordById_(payload.contentId);

  if (decision === 'Request Revision') {
    const revisionHistory = getRevisionHistory_(payload.contentId);
    const version = Math.max(Number(getCurrentEditVersion_(record, revisionHistory)) + 1, 2);
    advanceWorkflow_(payload.contentId, 'requestRevision', payload, {
      updates: {
        'Revision Count': version,
        'Brand Manager Feedback': payload.feedbackNotes,
        'Stage Completed Timestamp': new Date(),
      },
      logAction: 'REQUEST_REVISION',
      notes: payload.feedbackNotes,
    });
    appendRevisionLog_(payload.contentId, version, getEffectiveUserEmail_(), getLatestEditedUrl_(record, revisionHistory), payload.feedbackNotes, 'Revision Requested', '');
    return successResult_(`Revision requested for Content #${payload.contentId}.`);
  }

  if (decision !== 'Approve') {
    throw new Error(`Unsupported review decision: ${decision}`);
  }

  const revisionHistory = getRevisionHistory_(payload.contentId);
  const approvedUrl = payload.approvedVideoUrl || getLatestEditedUrl_(record, revisionHistory);
  if (!approvedUrl) {
    throw new Error('Approved video URL is required if no edited version URL exists on the content row.');
  }

  advanceWorkflow_(payload.contentId, 'approveContent', payload, {
    updates: {
      'Final Approved Video URL': approvedUrl,
      'Revision Count': getCurrentEditVersion_(record, revisionHistory) || '',
      'Stage Completed Timestamp': new Date(),
    },
    logAction: 'APPROVE_CONTENT',
    urlSubmitted: approvedUrl,
  });
  appendRevisionLog_(payload.contentId, getCurrentEditVersion_(record, revisionHistory), getEffectiveUserEmail_(), approvedUrl, '', 'Approved', '');
  return successResult_(`Content #${payload.contentId} approved.`);
}

function scheduleContent_(payload) {
  const record = getContentRecordById_(payload.contentId);
  const revisionHistory = getRevisionHistory_(payload.contentId);
  const approvedVideoUrl = getApprovedVideoUrlForScheduling_(record, revisionHistory);
  if (!approvedVideoUrl) {
    throw new Error('Cannot schedule without a final approved video URL or latest edited URL.');
  }

  advanceWorkflow_(payload.contentId, 'scheduleContent', payload, {
    updates: {
      'Platform(s)': payload.platforms,
      'Posting Date': normalizeDateForSheet_(payload.postingDate),
      Time: normalizeTimeForSheet_(payload.postingTime),
      Caption: payload.caption,
      CTA: payload.cta,
      Hashtags: payload.hashtags,
      'Final Approved Video URL': approvedVideoUrl,
      'Scheduled By': getEffectiveUserEmail_(),
      'Stage Completed Timestamp': new Date(),
    },
    logAction: 'SCHEDULE_CONTENT',
    urlSubmitted: approvedVideoUrl,
  });
  syncPlatformCheckboxes_(payload.contentId, payload.platforms);

  return successResult_(`Content #${payload.contentId} scheduled.`);
}

function markContentPosted_(payload) {
  if (!payload.platformPosted) {
    throw new Error('Platform posted is required.');
  }

  advanceWorkflow_(payload.contentId, 'markPosted', payload, {
    updates: {
      'Posted URL': payload.livePostUrl || '',
      'Posted Timestamp': new Date(),
      'Stage Completed Timestamp': new Date(),
    },
    logAction: 'MARK_POSTED',
    notes: payload.postedNotes || `Posted to ${payload.platformPosted}.`,
    urlSubmitted: payload.livePostUrl || '',
  });

  return successResult_(`Content #${payload.contentId} marked as posted.`);
}

function adminOverrideContent_(payload) {
  requireFields_(payload, ['contentId', 'status', 'notes']);
  updateContentRecord_(payload.contentId, {
    Status: payload.status,
    'Current Owner': payload.currentOwner || '',
  }, 'ADMIN_OVERRIDE', `ADMIN OVERRIDE: ${payload.notes}`, '');

  return successResult_(`Admin override applied to Content #${payload.contentId}.`);
}

function getWorkflowOptions_(spreadsheet) {
  return {
    statuses: getConfigListValues_(spreadsheet, 'Statuses'),
    teamMembers: replaceLegacyTeamNamesInList_(getConfigListValues_(spreadsheet, 'Team Members')),
    roles: getConfigListValues_(spreadsheet, 'Roles'),
    filmerAssignments: replaceLegacyTeamNamesInList_(getConfigListValues_(spreadsheet, 'Filmer Assignment Values')),
    platforms: getConfigListValues_(spreadsheet, 'Platforms'),
    priorities: getConfigListValues_(spreadsheet, 'Priorities'),
    subjects: getConfigListValues_(spreadsheet, 'Subjects'),
    momentActions: getConfigListValues_(spreadsheet, 'Moment Actions'),
    contentPillars: getSettingsColumnValues_(spreadsheet, 3, 12),
    formats: getSettingsColumnValues_(spreadsheet, 7, 12),
    goals: getSettingsColumnValues_(spreadsheet, 11, 12),
    reviewDecisions: ['Approve', 'Request Revision'],
  };
}

function buildWorkflowDefaults_(action, selectedContent, selectedIdea, prefillContentId) {
  const defaults = {};

  if (prefillContentId) {
    defaults.contentId = prefillContentId;
  }

  if (selectedContent && selectedContent.contentId) {
    const revisionHistory = getRevisionHistory_(selectedContent.contentId);
    defaults.contentId = selectedContent.contentId;
    defaults.platforms = selectedContent['Platform(s)'] || '';
    defaults.platformPosted = selectedContent['Platform(s)'] || '';
    defaults.caption = selectedContent.Caption || '';
    defaults.cta = selectedContent.CTA || '';
    defaults.hashtags = selectedContent.Hashtags || '';
    defaults.postingDate = selectedContent['Posting Date'] || '';
    defaults.postingTime = selectedContent.Time || '';
    defaults.approvedVideoUrl = getApprovedVideoUrlForScheduling_(selectedContent, revisionHistory);
  }

  if (action === 'promoteIdea' && selectedIdea) {
    defaults.ideaRow = selectedIdea.row;
    defaults.contentPillar = selectedIdea.contentPillar || '';
    defaults.format = selectedIdea.format || '';
    defaults.goal = selectedIdea.goal || '';
    defaults.ideaTitle = selectedIdea.ideaTitle || '';
    defaults.inspirationLink = selectedIdea.inspirationLink || '';
    defaults.momentAction = selectedIdea.momentAction || '';
  }

  return defaults;
}

function buildWorkflowContextLines_(action, selectedContent) {
  if (!selectedContent || !selectedContent.contentId) {
    return [];
  }

  const revisionHistory = getRevisionHistory_(selectedContent.contentId);
  const latestVersion = getCurrentEditVersion_(selectedContent, revisionHistory);
  const nextVersion = getNextSubmissionVersion_(selectedContent, revisionHistory);
  const latestEditedUrl = getLatestEditedUrl_(selectedContent, revisionHistory);
  const lines = [];

  if (action === 'submitEditedVersion') {
    lines.push(`Submitting V${nextVersion}`);
    if (selectedContent['Brand Manager Feedback']) {
      lines.push(`Latest Brand Manager feedback: ${selectedContent['Brand Manager Feedback']}`);
    }
  }

  if (action === 'reviewApprove') {
    if (latestVersion) {
      lines.push(`Reviewing V${latestVersion}`);
    }
    if (latestEditedUrl) {
      lines.push(`Latest edited URL: ${latestEditedUrl}`);
    }
    if (selectedContent['Editor Notes']) {
      lines.push(`Editor notes: ${selectedContent['Editor Notes']}`);
    }
  }

  if (action === 'scheduleContent') {
    const approvedUrl = getApprovedVideoUrlForScheduling_(selectedContent, revisionHistory);
    const readiness = getSchedulingReadiness_(selectedContent, revisionHistory);
    lines.push(approvedUrl ? `Approved video URL: ${approvedUrl}` : 'Missing approved video URL');
    if (!readiness.ready) {
      lines.push(`Missing schedule fields: ${readiness.missing.join(', ')}`);
    }
  }

  if (action === 'markPosted') {
    const context = getPostingContext_(selectedContent);
    if (context.platforms) {
      lines.push(`Platform(s): ${context.platforms}`);
    }
    if (context.postingDate || context.postingTime) {
      lines.push(`Scheduled for: ${[context.postingDate, context.postingTime].filter(Boolean).join(' ')}`);
    }
    if (context.finalApprovedVideoUrl) {
      lines.push(`Final video URL: ${context.finalApprovedVideoUrl}`);
    }
    if (context.captionPreview) {
      lines.push(`Caption preview: ${context.captionPreview}`);
    }
    lines.push('Live post URL is optional but recommended.');
  }

  return lines;
}

function getSelectedContentContext_(spreadsheet) {
  const range = spreadsheet.getActiveRange();
  const sheet = spreadsheet.getActiveSheet();

  if (!range || !sheet || sheet.getName() !== PHASE1.sheets.content || range.getRow() < PHASE1.rows.contentDataStart) {
    return null;
  }

  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  const rowValues = sheet.getRange(range.getRow(), 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
  return rowToContentRecord_(rowValues, columnMap, range.getRow());
}

function getSelectedIdeaContext_(spreadsheet) {
  const range = spreadsheet.getActiveRange();
  const sheet = spreadsheet.getActiveSheet();

  if (!range || !sheet || sheet.getName() !== '3. Idea Brain Dump' || range.getRow() < 6) {
    return null;
  }

  const row = range.getRow();
  const values = sheet.getRange(row, 1, 1, Math.max(sheet.getLastColumn(), 17)).getDisplayValues()[0];
  return {
    row,
    contentPillar: values[3] || '',
    format: values[4] || '',
    goal: values[5] || '',
    ideaTitle: values[6] || '',
    inspirationLink: values[7] || '',
    momentAction: values[12] || '',
  };
}

function getContentRecordById_(contentId) {
  const spreadsheet = SpreadsheetApp.getActive();
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = ensureWorkflowColumns_(spreadsheet);
  const row = findContentRowById_(sheet, columnMap, contentId);
  const values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
  return rowToContentRecord_(values, columnMap, row);
}

function updateContentRecord_(contentId, updates, action, notes, urlSubmitted) {
  const spreadsheet = SpreadsheetApp.getActive();
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = ensureWorkflowColumns_(spreadsheet);
  const row = findContentRowById_(sheet, columnMap, contentId);
  const oldStatus = sheet.getRange(row, columnMap[PHASE1.coreHeaders.status]).getDisplayValue();
  const finalUpdates = Object.assign({}, updates, {
    'Last Updated By': getEffectiveUserEmail_(),
    'Last Updated Timestamp': new Date(),
  });

  if (finalUpdates.Status && finalUpdates.Status !== oldStatus) {
    finalUpdates['Previous Status'] = oldStatus;
  }

  writeContentValues_(sheet, row, columnMap, finalUpdates);
  appendActivityLog_(contentId, action, oldStatus, finalUpdates.Status || oldStatus, notes || '', urlSubmitted || '');
}

function advanceWorkflow_(contentId, action, payload, options) {
  options = options || {};
  const record = getContentRecordById_(contentId);
  const rule = assertAllowedTransition_(record, action);
  validateRequiredFields_(payload, rule.requiredFields || []);

  const extraUpdates = typeof options.updates === 'function'
    ? options.updates(record, payload)
    : options.updates || {};
  const newOwner = typeof rule.owner === 'function' ? rule.owner(payload, record) : rule.owner;
  const updates = Object.assign({}, extraUpdates, {
    Status: rule.to,
    'Current Owner': newOwner || '',
  });

  updateContentRecord_(
    contentId,
    updates,
    options.logAction || action,
    options.notes || '',
    options.urlSubmitted || ''
  );

  return {
    oldStatus: record.status,
    newStatus: rule.to,
    rule,
  };
}

function getTransitionRule_(action, currentStatus) {
  const rule = WORKFLOW_TRANSITIONS[action];
  if (!rule || rule.from.indexOf(currentStatus) === -1) {
    return null;
  }
  return rule;
}

function assertAllowedTransition_(record, action) {
  const rule = getTransitionRule_(action, record.status);
  if (rule) {
    return rule;
  }

  const configuredRule = WORKFLOW_TRANSITIONS[action];
  const allowedStatuses = configuredRule ? configuredRule.from.join(', ') : 'none';
  throw new Error(`Content #${record.contentId || 'unknown'} is currently "${record.status || 'blank'}". ${actionLabel_(action)} requires one of these statuses first: ${allowedStatuses}.`);
}

function validateRequiredFields_(payload, requiredFields) {
  const missingFields = requiredFields
    .filter((field) => !String(payload[field] || '').trim())
    .map(fieldLabel_);

  if (!missingFields.length) {
    return;
  }

  const contentLabel = payload.contentId ? `Content #${payload.contentId}` : 'This action';
  throw new Error(`${contentLabel} is missing required field(s): ${missingFields.join(', ')}.`);
}

function getAvailableActionsForRecord_(record, userName) {
  const isAdmin = userName === 'Admin' || userName === 'Vivianne';
  const actionIds = [];

  if ((isAdmin || userName === 'Brand Manager') && record.status === 'Planned') {
    actionIds.push('assignFilming');
  }

  if ((isAdmin || isUserAssignedFilmer_(record, userName)) && record.status === 'Assigned to Film') {
    actionIds.push('submitRawFootage');
  }

  if ((isAdmin || userName === 'Estefanie') && (record.status === 'Filming Complete' || record.status === 'Revision Requested')) {
    actionIds.push(record.status === 'Revision Requested' ? 'startEditingRevision' : 'startEditing');
  }

  if ((isAdmin || userName === 'Estefanie') && (record.status === 'Editing V1' || record.status === 'Editing V2+')) {
    actionIds.push('submitEditedVersion');
  }

  if ((isAdmin || userName === 'Brand Manager') && record.status === 'Ready for Brand Manager Review') {
    actionIds.push('reviewApprove');
  }

  if ((isAdmin || userName === 'Brand Manager') && record.status === 'Approved') {
    actionIds.push('scheduleContent');
  }

  if ((isAdmin || userName === 'Estefanie') && record.status === 'Scheduled') {
    actionIds.push('markPosted');
  }

  if (isAdmin) {
    actionIds.push('adminOverride');
  }

  return actionIds.map((action) => ({
    action: action === 'startEditingRevision' ? 'startEditing' : action,
    label: actionLabel_(action),
  }));
}

function getWorkflowActionDisplay_(action, record) {
  if (action === 'startEditing' && record && record.status === 'Revision Requested') {
    return {
      title: 'Start Revision',
      submitLabel: 'Start Revision',
    };
  }

  return {};
}

function actionLabel_(action) {
  if (WORKFLOW_TRANSITIONS[action]) {
    return WORKFLOW_TRANSITIONS[action].label;
  }
  try {
    return getWorkflowActionConfig_(action).title;
  } catch (error) {
    return action;
  }
}

function writeContentValues_(sheet, row, columnMap, valuesByHeader) {
  assertWritableHeaders_(columnMap, Object.keys(valuesByHeader));
  Object.keys(valuesByHeader).forEach((header) => {
    sheet.getRange(row, columnMap[header]).setValue(valuesByHeader[header]);
  });
}

function assertWritableHeaders_(columnMap, headers) {
  const missingHeaders = headers.filter((header) => !columnMap[header]);
  if (missingHeaders.length) {
    throw new Error(`Cannot update content row because these columns are missing from ${PHASE1.sheets.content}: ${missingHeaders.join(', ')}. Run setupPhase1DatabaseFoundation() and try again.`);
  }
}

function rowToContentRecord_(rowValues, columnMap, rowNumber) {
  const record = { row: rowNumber };
  Object.keys(columnMap).forEach((header) => {
    record[header] = rowValues[columnMap[header] - 1] || '';
  });
  record.contentId = record[PHASE1.coreHeaders.contentId] || '';
  record.status = record[PHASE1.coreHeaders.status] || '';
  record.idea = record.Idea || '';
  record.currentOwner = record['Current Owner'] || '';
  return record;
}

function findContentRowById_(sheet, columnMap, contentId) {
  const contentIdColumn = columnMap[PHASE1.coreHeaders.contentId];
  const lastDataRow = getLastContentDataRow_(sheet, contentIdColumn);
  const wanted = normalizeContentId_(contentId);

  if (!wanted) {
    throw new Error('Content # is required.');
  }

  const values = sheet.getRange(PHASE1.rows.contentDataStart, contentIdColumn, lastDataRow - PHASE1.rows.contentDataStart + 1, 1).getDisplayValues();
  for (let index = 0; index < values.length; index += 1) {
    if (normalizeContentId_(values[index][0]) === wanted) {
      return PHASE1.rows.contentDataStart + index;
    }
  }

  throw new Error(`Content #${contentId} was not found.`);
}

function getNextContentId_(sheet, contentIdColumn) {
  const lastDataRow = getLastContentDataRow_(sheet, contentIdColumn);
  const values = sheet.getRange(PHASE1.rows.contentDataStart, contentIdColumn, lastDataRow - PHASE1.rows.contentDataStart + 1, 1).getDisplayValues();
  const maxId = values.reduce((max, row) => {
    const id = Number(normalizeContentId_(row[0]));
    return Number.isFinite(id) ? Math.max(max, id) : max;
  }, 0);
  return maxId + 1;
}

function getNextContentRow_(sheet, contentIdColumn) {
  return Math.max(getLastContentDataRow_(sheet, contentIdColumn) + 1, PHASE1.rows.contentDataStart);
}

function normalizeContentId_(value) {
  const cleanValue = String(value || '').trim();
  if (!cleanValue) {
    return '';
  }
  const numeric = Number(cleanValue);
  return Number.isFinite(numeric) ? String(Math.trunc(numeric)) : cleanValue;
}

function appendActivityLog_(contentId, action, oldStatus, newStatus, notes, urlSubmitted) {
  const activityLog = ensureActivityLog_(SpreadsheetApp.getActive());
  appendRows_(activityLog, [[
    new Date(),
    contentId || '',
    action,
    oldStatus || '',
    newStatus || '',
    getEffectiveUserEmail_(),
    notes || '',
    urlSubmitted || '',
  ]]);
}

function appendRevisionLog_(contentId, versionNumber, submittedBy, editedFileUrl, feedbackFromBrandManager, decision, notes) {
  const revisionLog = ensureRevisionLog_(SpreadsheetApp.getActive());
  appendRows_(revisionLog, [buildRevisionLogRow_(
    contentId,
    versionNumber,
    submittedBy,
    editedFileUrl,
    feedbackFromBrandManager,
    decision,
    notes
  )]);
}

function buildRevisionLogRow_(contentId, versionNumber, submittedBy, editedFileUrl, feedbackFromBrandManager, decision, notes) {
  return [
    new Date(),
    contentId || '',
    versionNumber || '',
    submittedBy || '',
    editedFileUrl || '',
    feedbackFromBrandManager || '',
    decision || '',
    notes || '',
  ];
}

function getRevisionHistory_(contentId) {
  return getRevisionHistoryMap_()[normalizeContentId_(contentId)] || [];
}

function getRevisionHistoryMap_() {
  const revisionLog = ensureRevisionLog_(SpreadsheetApp.getActive());
  const lastRow = revisionLog.getLastRow();

  if (lastRow <= PHASE1.rows.logHeader) {
    return {};
  }

  return revisionLog
    .getRange(PHASE1.rows.logHeader + 1, 1, lastRow - PHASE1.rows.logHeader, PHASE1.revisionLogHeaders.length)
    .getDisplayValues()
    .map((row) => ({
      timestamp: row[0],
      contentId: row[1],
      versionNumber: Number(row[2]) || '',
      submittedBy: row[3],
      editedFileUrl: row[4],
      feedbackFromBrandManager: row[5],
      decision: row[6],
      notes: row[7],
    }))
    .reduce((historyMap, entry) => {
      const normalizedId = normalizeContentId_(entry.contentId);
      if (!normalizedId) {
        return historyMap;
      }
      if (!historyMap[normalizedId]) {
        historyMap[normalizedId] = [];
      }
      historyMap[normalizedId].push(entry);
      return historyMap;
    }, {});
}

function getLatestRevisionEntry_(contentId) {
  const history = getRevisionHistory_(contentId);
  return history.length ? history[history.length - 1] : null;
}

function getCurrentEditVersion_(record, revisionHistory) {
  const versions = (revisionHistory || [])
    .map((entry) => Number(entry.versionNumber) || 0)
    .filter(Boolean);
  const visibleVersion = getLatestEditVersion_(record);
  const revisionCount = Number(record['Revision Count']) || 0;

  return Math.max.apply(null, [visibleVersion, revisionCount].concat(versions, [0])) || '';
}

function getNextSubmissionVersion_(record, revisionHistory) {
  const currentVersion = getCurrentEditVersion_(record, revisionHistory);
  const latestEntry = getLatestRevisionEntryFromHistory_(revisionHistory);

  if (record.status === 'Editing V1' && !currentVersion) {
    return 1;
  }

  if (record.status === 'Editing V2+' && latestEntry && latestEntry.decision === 'Revision Requested' && latestEntry.versionNumber) {
    return latestEntry.versionNumber;
  }

  if (record.status === 'Editing V2+') {
    return Math.max(Number(currentVersion) + 1, 2);
  }

  return currentVersion || 1;
}

function getLatestEditedUrl_(record, revisionHistory) {
  const submittedEntries = (revisionHistory || [])
    .filter((entry) => entry.decision === 'Submitted' && entry.editedFileUrl);

  if (submittedEntries.length) {
    return submittedEntries[submittedEntries.length - 1].editedFileUrl;
  }

  return record['Edited V3 URL'] || record['Edited V2 URL'] || record['Edited V1 URL'] || '';
}

function getSchedulingReadiness_(record, revisionHistory) {
  const requiredFields = [
    ['Platform(s)', 'platform'],
    ['Posting Date', 'posting date'],
    ['Time', 'posting time'],
    ['Caption', 'caption'],
    ['CTA', 'CTA'],
    ['Hashtags', 'hashtags'],
  ];
  const missing = requiredFields
    .filter(([header]) => !String(record[header] || '').trim())
    .map(([, label]) => label);
  const approvedUrl = getApprovedVideoUrlForScheduling_(record, revisionHistory);

  if (!approvedUrl) {
    missing.push('approved video URL');
  }

  return {
    ready: missing.length === 0,
    missing,
  };
}

function getPostingContext_(record) {
  const caption = String(record.Caption || '');
  return {
    platforms: record['Platform(s)'] || '',
    postingDate: record['Posting Date'] || '',
    postingTime: record.Time || '',
    finalApprovedVideoUrl: getApprovedVideoUrlForScheduling_(record),
    captionPreview: caption.length > 90 ? `${caption.slice(0, 87)}...` : caption,
  };
}

function getApprovedVideoUrlForScheduling_(record, revisionHistory) {
  return record['Final Approved Video URL'] || getLatestEditedUrl_(record, revisionHistory || []);
}

function syncPlatformCheckboxes_(contentId, platformValue) {
  const spreadsheet = SpreadsheetApp.getActive();
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  const row = findContentRowById_(sheet, columnMap, contentId);
  const platformColumns = getPlatformCheckboxColumns_(sheet);
  const selectedPlatforms = parseSelectedPlatforms_(platformValue);

  Object.keys(platformColumns).forEach((platform) => {
    const column = platformColumns[platform];
    const cell = sheet.getRange(row, column);
    if (cellHasCheckbox_(cell)) {
      cell.setValue(selectedPlatforms[platform] === true);
    }
  });
}

function getPlatformCheckboxColumns_(sheet) {
  const platformLabels = {
    instagram: 'Instagram',
    tiktok: 'TikTok',
    youtube: 'YouTube',
  };
  const columns = {};
  const maxColumns = sheet.getLastColumn();
  const headerValues = sheet.getRange(1, 1, Math.min(5, sheet.getMaxRows()), maxColumns).getDisplayValues();

  headerValues.forEach((row) => {
    row.forEach((value, index) => {
      const normalizedValue = normalizePlatformLabel_(value);
      if (platformLabels[normalizedValue] && !columns[platformLabels[normalizedValue]]) {
        columns[platformLabels[normalizedValue]] = index + 1;
      }
    });
  });

  sheet.getRange(1, 1, Math.min(5, sheet.getMaxRows()), maxColumns).getMergedRanges().forEach((range) => {
    const normalizedValue = normalizePlatformLabel_(range.getDisplayValue());
    if (platformLabels[normalizedValue] && !columns[platformLabels[normalizedValue]]) {
      columns[platformLabels[normalizedValue]] = range.getColumn();
    }
  });

  return columns;
}

function parseSelectedPlatforms_(platformValue) {
  const selected = {};
  String(platformValue || '')
    .split(/\s*\+\s*|,\s*|\n+/)
    .map((value) => value.trim())
    .filter(Boolean)
    .forEach((value) => {
      const normalizedValue = normalizePlatformLabel_(value);
      if (normalizedValue === 'instagram') {
        selected.Instagram = true;
      }
      if (normalizedValue === 'tiktok') {
        selected.TikTok = true;
      }
      if (normalizedValue === 'youtube') {
        selected.YouTube = true;
      }
    });
  return selected;
}

function normalizePlatformLabel_(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace('youTube'.toLowerCase(), 'youtube');
}

function cellHasCheckbox_(cell) {
  const validation = cell.getDataValidation();
  return validation && validation.getCriteriaType() === SpreadsheetApp.DataValidationCriteria.CHECKBOX;
}

function normalizeDateForSheet_(value) {
  return value || '';
}

function normalizeTimeForSheet_(value) {
  return value || '';
}

function getLatestRevisionEntryFromHistory_(revisionHistory) {
  return revisionHistory && revisionHistory.length ? revisionHistory[revisionHistory.length - 1] : null;
}

function getVisibleEditUrlHeader_(version) {
  if (version === 1) {
    return 'Edited V1 URL';
  }
  if (version === 2) {
    return 'Edited V2 URL';
  }
  return 'Edited V3 URL';
}

function getNextEditVersion_(record) {
  if (!record['Edited V1 URL']) {
    return 1;
  }
  if (!record['Edited V2 URL']) {
    return 2;
  }
  return 3;
}

function getLatestEditVersion_(record) {
  if (record['Edited V3 URL']) {
    return 3;
  }
  if (record['Edited V2 URL']) {
    return 2;
  }
  return record['Edited V1 URL'] ? 1 : '';
}

function taskBelongsInQueue_(record, userName) {
  if (!userName) {
    return true;
  }

  if (valueIncludesTeamMember_(record.currentOwner, userName)) {
    return true;
  }

  if (isUserAssignedFilmer_(record, userName)) {
    return true;
  }

  if (userName === 'Estefanie') {
    return ['Filming Complete', 'Revision Requested', 'Scheduled', 'Editing V1', 'Editing V2+'].indexOf(record.status) !== -1;
  }

  if (userName === 'Brand Manager') {
    return ['Idea', 'Planned', 'Ready for Brand Manager Review', 'Approved'].indexOf(record.status) !== -1;
  }

  if (userName === 'Admin' || userName === 'Vivianne') {
    return true;
  }

  return false;
}

function isUserAssignedFilmer_(record, userName) {
  return record.status === 'Assigned to Film' && valueIncludesTeamMember_(record['Assigned Filmer(s)'], userName);
}

function valueIncludesTeamMember_(value, userName) {
  const cleanUserName = String(userName || '').trim();
  if (!cleanUserName) {
    return false;
  }
  return parseTeamAssignment_(value).indexOf(cleanUserName) !== -1;
}

function parseTeamAssignment_(value) {
  return String(value || '')
    .split(/\s*\+\s*|,\s*|\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function ensureIdeaBrainDumpColumns_(sheet) {
  renameLegacyHeaders_(sheet, 5);
  const headers = {
    10: 'Submitted Date',
    11: 'Submitted By',
    12: 'Subject',
    13: 'Moment / Action',
    14: 'Notes',
    15: 'Brand Manager Review Status',
    16: 'Promoted Content #',
    17: 'Promoted Timestamp',
  };

  ensureColumns_(sheet, 17);
  Object.keys(headers).forEach((columnText) => {
    const column = Number(columnText);
    if (!sheet.getRange(5, column).getDisplayValue()) {
      sheet.getRange(5, column).setValue(headers[column]).setFontWeight('bold');
    }
  });
}

function findFirstBlankRowByColumn_(sheet, column, firstRow) {
  const rowCount = Math.max(sheet.getMaxRows() - firstRow + 1, 1);
  const values = sheet.getRange(firstRow, column, rowCount, 1).getDisplayValues();
  for (let index = 0; index < values.length; index += 1) {
    if (!String(values[index][0] || '').trim()) {
      return firstRow + index;
    }
  }
  const newRow = sheet.getMaxRows() + 1;
  ensureRows_(sheet, newRow);
  return newRow;
}

function getConfigListValues_(spreadsheet, title) {
  const values = getNamedRangeValues_(spreadsheet, configRangeName_(title));
  return values.length ? values : PHASE1.configLists[title] || [];
}

function replaceLegacyTeamNamesInList_(values) {
  return uniqueNonEmpty_(values.map(replaceLegacyTeamNameValue_));
}

function replaceLegacyTeamNameValue_(value) {
  let nextValue = String(value == null ? '' : value);
  TEAM_NAME_RENAMES.forEach((rename) => {
    const pattern = new RegExp(`\\b${rename.oldName}\\b`, 'g');
    nextValue = nextValue.replace(pattern, rename.newName);
  });
  return nextValue;
}

function getNamedRangeValues_(spreadsheet, name) {
  const range = spreadsheet.getRangeByName(name);
  if (!range) {
    return [];
  }
  return uniqueNonEmpty_(range.getDisplayValues().flat());
}

function getSettingsColumnValues_(spreadsheet, column, firstRow) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.settings);
  const rowCount = Math.max(sheet.getLastRow() - firstRow + 1, 1);
  return uniqueNonEmpty_(sheet.getRange(firstRow, column, rowCount, 1).getDisplayValues().flat());
}

function uniqueNonEmpty_(values) {
  const seen = {};
  return values.reduce((result, value) => {
    const cleanValue = String(value || '').trim();
    if (cleanValue && !seen[cleanValue] && cleanValue !== '#REF!') {
      seen[cleanValue] = true;
      result.push(cleanValue);
    }
    return result;
  }, []);
}

function requireFields_(payload, fields) {
  fields.forEach((field) => {
    if (!String(payload[field] || '').trim()) {
      throw new Error(`${fieldLabel_(field)} is required.`);
    }
  });
}

function sanitizePayload_(payload) {
  return Object.keys(payload).reduce((clean, key) => {
    clean[key] = typeof payload[key] === 'string' ? payload[key].trim() : payload[key];
    return clean;
  }, {});
}

function successResult_(message, extra) {
  return Object.assign({ ok: true, message }, extra || {});
}

function fieldLabel_(field) {
  return String(field)
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (letter) => letter.toUpperCase());
}

function textField_(name, label, required) {
  return { name, label, type: 'text', required: Boolean(required) };
}

function numberField_(name, label, required) {
  return { name, label, type: 'number', required: Boolean(required) };
}

function urlField_(name, label, required) {
  return { name, label, type: 'url', required: Boolean(required) };
}

function dateField_(name, label, required) {
  return { name, label, type: 'date', required: Boolean(required) };
}

function timeField_(name, label, required) {
  return { name, label, type: 'time', required: Boolean(required) };
}

function textareaField_(name, label, required) {
  return { name, label, type: 'textarea', required: Boolean(required) };
}

function selectField_(name, label, optionsKey, required) {
  return { name, label, type: 'select', optionsKey, required: Boolean(required) };
}

function checkboxField_(name, label, required) {
  return { name, label, type: 'checkbox', required: Boolean(required) };
}

function ensureWorkflowSettings_(spreadsheet) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.settings);
  const blockStart = findOrCreateWorkflowConfigBlock_(sheet);
  const titles = Object.keys(PHASE1.configLists);
  const valuesByTitle = titles.reduce((map, title, offset) => {
    const column = blockStart.column + offset;
    const existingValues = getWorkflowConfigColumnValues_(sheet, blockStart.row + 1, column);
    map[title] = mergeWorkflowConfigValues_(title, PHASE1.configLists[title], existingValues);
    return map;
  }, {});
  const maxListLength = Math.max.apply(null, titles.map((title) => valuesByTitle[title].length));
  const clearRowCount = Math.max(sheet.getLastRow() - blockStart.row, maxListLength, 1);

  ensureColumns_(sheet, blockStart.column + titles.length - 1);
  sheet.getRange(blockStart.row, blockStart.column, 1, titles.length)
    .setValues([titles])
    .setFontWeight('bold');

  titles.forEach((title, offset) => {
    const values = valuesByTitle[title].map((value) => [value]);
    const column = blockStart.column + offset;
    const bodyRange = sheet.getRange(blockStart.row + 1, column, clearRowCount, 1);
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

function getWorkflowConfigColumnValues_(sheet, firstRow, column) {
  const rowCount = Math.max(sheet.getLastRow() - firstRow + 1, 1);
  return uniqueNonEmpty_(sheet.getRange(firstRow, column, rowCount, 1).getDisplayValues().flat());
}

function mergeWorkflowConfigValues_(title, configuredValues, existingValues) {
  const normalizedExistingValues = title === 'Team Members' || title === 'Filmer Assignment Values'
    ? replaceLegacyTeamNamesInList_(existingValues)
    : existingValues;
  return uniqueNonEmpty_((configuredValues || []).concat(normalizedExistingValues || []));
}

function ensureWorkflowColumns_(spreadsheet) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const headerRow = PHASE1.rows.contentHeader;
  renameLegacyHeaders_(sheet, headerRow);
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

function renameLegacyHeaders_(sheet, headerRow) {
  const headerMap = getHeaderMap_(sheet, headerRow);
  WORKFLOW_HEADER_RENAMES.forEach((rename) => {
    if (headerMap[rename.oldHeader] && !headerMap[rename.newHeader]) {
      sheet.getRange(headerRow, headerMap[rename.oldHeader]).setValue(rename.newHeader);
    }
  });
}

function ensureActivityLog_(spreadsheet) {
  return ensureLogSheet_(spreadsheet, PHASE1.sheets.activityLog, PHASE1.activityLogHeaders);
}

function ensureRevisionLog_(spreadsheet) {
  return ensureLogSheet_(spreadsheet, PHASE1.sheets.revisionLog, PHASE1.revisionLogHeaders);
}

function ensureWorkflowQaReport_(spreadsheet) {
  return ensureLogSheet_(spreadsheet, PHASE1.sheets.workflowQaReport, PHASE1.workflowQaHeaders);
}

function clearWorkflowQaReport_(sheet) {
  ensureColumns_(sheet, PHASE1.workflowQaHeaders.length);
  const lastRow = sheet.getLastRow();
  if (lastRow > PHASE1.rows.logHeader) {
    sheet.getRange(PHASE1.rows.logHeader + 1, 1, lastRow - PHASE1.rows.logHeader, sheet.getLastColumn()).clearContent();
  }
  sheet.getRange(PHASE1.rows.logHeader, 1, 1, PHASE1.workflowQaHeaders.length)
    .setValues([PHASE1.workflowQaHeaders])
    .setFontWeight('bold');
  sheet.setFrozenRows(1);
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
