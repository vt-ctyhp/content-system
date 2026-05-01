const PHASE1 = {
  sheets: {
    content: '1A. Content Planning',
    filmingCalendar: '1B. Filming Calendar',
    postingCalendar: '1C. Posting Calendar',
    settings: '5. Settings',
    activityLog: 'Activity Log',
    revisionLog: 'Revision Log',
    workflowQaReport: 'Workflow QA Report',
    notes: '0. Notes',
  },
  rows: {
    contentSectionHeader: 4,
    contentHeader: 5,
    contentDataStart: 7,
    logHeader: 1,
  },
  coreHeaders: {
    contentId: 'Content #',
    status: 'Status',
  },
  workflowConfigTitle: 'Workflow Config',
  contentSections: [
    {
      title: 'Identity & Grouping',
      headers: ['Content #', 'Concept ID', 'Brand', 'Dual Brand Set', 'Paired Content #', 'Original / Companion', 'Content Pillar', 'Format', 'Goal', 'Idea'],
    },
    {
      title: 'Concept & Filming Plan',
      headers: [
        'Subject',
        'Moment / Action',
        'Filming Date',
        'Assigned Filmer(s)',
        'Shot List',
        'Filming Instructions',
        'Props / Setup Notes',
        'Location',
        'Reference Links',
        'Shared Shoot Notes',
      ],
    },
    {
      title: 'Workflow State',
      headers: [
        'Status',
        'Current Owner',
        'Assigned Editor',
        'Assigned Reviewer',
        'Priority',
        'Blocker / Issue',
        'Created Date',
        'Created By',
        'Previous Status',
        'Last Updated By',
        'Last Updated Timestamp',
        'Stage Started Timestamp',
        'Stage Completed Timestamp',
      ],
    },
    {
      title: 'Brand Edit & Review',
      headers: [
        'Brand Angle',
        'Variant Strategy',
        'Editing Brief',
        'Raw Footage Folder URL',
        'HP Raw Footage Folder URL',
        'VVS Raw Footage Folder URL',
        'Edited V1 URL',
        'Edited V2 URL',
        'Edited V3 URL',
        'Final Approved Video URL',
        'Revision Count',
        'Brand Manager Feedback',
        'Editor Notes',
      ],
    },
    {
      title: 'Scheduling & Posting',
      headers: [
        'Platform(s)',
        'Posting Date',
        'Time',
        'Caption',
        'CTA',
        'Hashtags',
        'Scheduled By',
        'Posted URL',
        'Posted Timestamp',
        'Paired Posting Date',
        'Target Post Gap Days',
        'Actual Post Gap Days',
        'Spacing Status',
      ],
    },
    {
      title: 'Visual Helpers',
      headers: ['Instagram', 'TikTok', 'YouTube', 'Calendar Display'],
    },
  ],
  workflowColumns: [
    'Concept ID',
    'Brand',
    'Dual Brand Set',
    'Paired Content #',
    'Original / Companion',
    'Shot List',
    'Filming Instructions',
    'Props / Setup Notes',
    'Location',
    'Reference Links',
    'Shared Shoot Notes',
    'Current Owner',
    'Assigned Filmer(s)',
    'Assigned Editor',
    'Assigned Reviewer',
    'Editing Brief',
    'Priority',
    'Brand Angle',
    'Variant Strategy',
    'Raw Footage Folder URL',
    'HP Raw Footage Folder URL',
    'VVS Raw Footage Folder URL',
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
    'Paired Posting Date',
    'Target Post Gap Days',
    'Actual Post Gap Days',
    'Spacing Status',
    'Instagram',
    'TikTok',
    'YouTube',
    'Calendar Display',
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
    'Content Pillars': [
      'Signature Experience',
      'Process as Luxury',
      'Subtle Differentiation',
      'Product as Outcome',
      'Aesthetic Brand Content',
      'Hook-Based Insight',
    ],
    Formats: [
      'Reel',
      'Carousel',
      'Static Post',
      'Story',
      'Short Form Video',
    ],
    Goals: [
      'Awareness',
      'Education',
      'Engagement',
      'Conversion',
    ],
    Brands: [
      'HP',
      'VVS',
    ],
    'Dual Brand Sets': [
      'HP + VVS',
      'HP Only',
      'VVS Only',
    ],
    'Original / Companion': [
      'Original',
      'Companion',
      'Single Brand',
    ],
    'Spacing Statuses': [
      'Ideal',
      'Acceptable',
      'Too Close',
      'Unpaired / Missing Date',
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
    owner: 'Estefanie',
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

const CONTENT_PLANNING_STYLE = {
  bg: '#F7F1EB',
  surface: '#FBF7F1',
  inset: '#EFE8DD',
  dark: '#2A2725',
  body: '#4A4540',
  muted: '#8A8178',
  rule: '#D4CFC4',
  pink: '#E91D79',
  white: '#FFFFFF',
};

const DUAL_BRAND_SETS = {
  both: 'HP + VVS',
  hpOnly: 'HP Only',
  vvsOnly: 'VVS Only',
};

const DUAL_BRAND_GROUPED_STATUSES = ['Planned', 'Assigned to Film'];
const STRICT_WORKFLOW_CONFIG_LISTS = [
  'Statuses',
  'Content Pillars',
  'Brands',
  'Dual Brand Sets',
  'Original / Companion',
  'Spacing Statuses',
  'Platforms',
  'Priorities',
  'Subjects',
  'Moment Actions',
];

const IDEA_BRAIN_DUMP = {
  sheetName: '3. Idea Brain Dump',
  headerRow: 5,
  dataStart: 6,
  headers: [
    'Idea ID',
    'Submitted Date',
    'Submitted By',
    'Brand Manager Review Status',
    'Promote to 1A?',
    'Content Pillar',
    'Format',
    'Goal',
    'Idea / Title',
    'Subject',
    'Moment / Action',
    'Inspiration Link',
    'Notes',
    'Promoted Content #',
    'Promoted Timestamp',
  ],
  legacyPositions: {
    'Content Pillar': 4,
    Format: 5,
    Goal: 6,
    'Idea / Title': 7,
    'Inspiration Link': 8,
    'Promote to 1A?': 9,
    'Submitted Date': 10,
    'Submitted By': 11,
    Subject: 12,
    'Moment / Action': 13,
    Notes: 14,
    'Brand Manager Review Status': 15,
    'Promoted Content #': 16,
    'Promoted Timestamp': 17,
  },
};

function setupPhase1DatabaseFoundation() {
  const spreadsheet = SpreadsheetApp.getActive();
  const activityLog = ensureActivityLog_(spreadsheet);
  const revisionLog = ensureRevisionLog_(spreadsheet);
  const configRanges = ensureWorkflowSettings_(spreadsheet);
  const columnMap = rebuildContentPlanningSchema_(spreadsheet);
  rebuildIdeaBrainDumpSheet_(spreadsheet);
  const statusChanges = standardizeExistingStatuses_(spreadsheet, columnMap, activityLog);

  applyWorkflowValidations_(spreadsheet, columnMap, configRanges);
  rebuildDependentViewTabs_(spreadsheet, columnMap);
  if (typeof buildWorkflowInstructionsTab === 'function') {
    buildWorkflowInstructionsTab();
  }
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
    workflowColumnCount: getContentPlanningHeaders_().length,
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
    .addItem('Rebuild Calendar Views', 'rebuildCalendarViews')
    .addItem('Rebuild Workflow Instructions', 'buildWorkflowInstructionsTab')
    .addItem('Run Phase 1 Setup', 'setupPhase1DatabaseFoundation')
    .addToUi();
}

function rebuildCalendarViews() {
  const spreadsheet = SpreadsheetApp.getActive();
  const columnMap = ensureWorkflowColumns_(spreadsheet);
  rebuildDependentViewTabs_(spreadsheet, columnMap, { includeKanban: false });
  spreadsheet.toast('Calendar views rebuilt.', 'Content Workflow', 5);
}

function openAddNewIdeaDialog() {
  showWorkflowDialog_('addIdea');
}

function openPromoteIdeaDialog() {
  openPromoteIdeaSidebar();
}

function openPromoteIdeaSidebar() {
  const template = HtmlService.createTemplateFromFile('PromoteIdeaSidebar');
  const html = template.evaluate()
    .setTitle('Promote Idea to Planning');
  SpreadsheetApp.getUi().showSidebar(html);
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
    });

  return buildTaskQueuePayload_(groupDualBrandFilmingTasks_(tasks, normalizedUser).slice(0, 100), normalizedUser);
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

function groupDualBrandFilmingTasks_(tasks, userName) {
  const grouped = {};
  const results = [];

  tasks.forEach((task) => {
    const shouldGroup = task['Concept ID']
      && task['Dual Brand Set'] === DUAL_BRAND_SETS.both
      && DUAL_BRAND_GROUPED_STATUSES.indexOf(task.status) !== -1;

    if (!shouldGroup) {
      results.push(task);
      return;
    }

    const key = `${task['Concept ID']}::${task.status}`;
    if (!grouped[key]) {
      grouped[key] = Object.assign({}, task, {
        isGroupedConcept: true,
        groupedContentIds: [],
        groupedBrands: [],
        groupedAngles: [],
      });
      results.push(grouped[key]);
    }
    grouped[key].groupedContentIds.push(task.contentId);
    grouped[key].groupedBrands.push(task.Brand);
    if (task['Brand Angle']) {
      grouped[key].groupedAngles.push(`${task.Brand}: ${task['Brand Angle']}`);
    }
  });

  results.forEach((task) => {
    if (!task.isGroupedConcept) {
      return;
    }
    task.contentId = task.groupedContentIds[0];
    task.displayContentId = task.groupedContentIds.join(' / ');
    task.brandDisplay = uniqueNonEmpty_(task.groupedBrands).join(' + ');
    task.brandAngleDisplay = task.groupedAngles.join('\n');
    task.availableActions = getAvailableActionsForRecord_(task, userName);
  });

  return results;
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
  addDualBrandQaIssues_(issues, record);

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

function addDualBrandQaIssues_(issues, record) {
  if (!record.Brand && record.contentId) {
    addWorkflowQaIssue_(issues, 'High', 'Brand is missing.', 'Set Brand to HP or VVS.');
  }
  if (!record['Concept ID'] && record.contentId) {
    addWorkflowQaIssue_(issues, 'High', 'Concept ID is missing.', 'Run the 1A rebuild setup or fill Concept ID.');
  }
  if (record['Dual Brand Set'] === DUAL_BRAND_SETS.both) {
    if (!record['Paired Content #']) {
      addWorkflowQaIssue_(issues, 'High', 'Dual-brand row is missing Paired Content #.', 'Set paired HP/VVS content reference.');
    }
    const pairedRecord = getPairedContentRecord_(record);
    if (!pairedRecord) {
      addWorkflowQaIssue_(issues, 'High', 'Paired Content # does not resolve to a content row.', 'Fix the paired content reference.');
    } else {
      if (pairedRecord['Paired Content #'] !== record.contentId) {
        addWorkflowQaIssue_(issues, 'Medium', 'Paired row does not reference this content back.', 'Make paired references reciprocal.');
      }
      if (pairedRecord['Filming Date'] && record['Filming Date'] && pairedRecord['Filming Date'] !== record['Filming Date']) {
        addWorkflowQaIssue_(issues, 'Medium', 'Paired rows have different filming dates.', 'Align filming dates for shared shoots.');
      }
      if (pairedRecord['Assigned Filmer(s)'] && record['Assigned Filmer(s)'] && pairedRecord['Assigned Filmer(s)'] !== record['Assigned Filmer(s)']) {
        addWorkflowQaIssue_(issues, 'Medium', 'Paired rows have different assigned filmers.', 'Align assigned filmer(s) for shared shoots.');
      }
    }
    if (record.status === 'Filming Complete') {
      if (!record['HP Raw Footage Folder URL']) {
        addWorkflowQaIssue_(issues, 'High', 'HP raw footage URL is missing for a completed dual-brand shoot.', 'Submit HP raw footage from the grouped filming action.');
      }
      if (!record['VVS Raw Footage Folder URL']) {
        addWorkflowQaIssue_(issues, 'High', 'VVS raw footage URL is missing for a completed dual-brand shoot.', 'Submit VVS raw footage from the grouped filming action.');
      }
    }
  }
  if (record.status === 'Scheduled' && record['Paired Content #'] && !record['Spacing Status']) {
    addWorkflowQaIssue_(issues, 'Medium', 'Scheduled paired row is missing Spacing Status.', 'Reschedule through the workflow dialog to calculate spacing.');
  }
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
    Approved: 'Estefanie',
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
        selectField_('brandSet', 'Brand set', 'dualBrandSets', true),
        selectField_('contentPillar', 'Content pillar', 'contentPillars', true),
        selectField_('format', 'Format', 'formats', true),
        selectField_('goal', 'Goal', 'goals', false),
        textField_('ideaTitle', 'Idea / title', true),
        selectField_('subject', 'Subject', 'subjects', false),
        selectField_('momentAction', 'Moment / action', 'momentActions', false),
        textareaField_('shotList', 'Shot list', false),
        textareaField_('filmingInstructions', 'Filming instructions', false),
        selectField_('assignedFilmer', 'Assigned filmer(s)', 'filmerAssignments', false),
        dateField_('filmingDate', 'Target filming date', false),
        textareaField_('sharedShootNotes', 'Shared shoot notes', false),
        textareaField_('hpBrandAngle', 'HP brand angle', false),
        textareaField_('vvsBrandAngle', 'VVS brand angle', false),
        textareaField_('hpVariantStrategy', 'HP variant strategy', false),
        textareaField_('vvsVariantStrategy', 'VVS variant strategy', false),
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
        urlField_('rawFootageUrl', 'Raw footage Google Drive URL', false),
        urlField_('hpRawFootageUrl', 'HP raw footage Google Drive URL', false),
        urlField_('vvsRawFootageUrl', 'VVS raw footage Google Drive URL', false),
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
  const sheet = requireSheet_(spreadsheet, IDEA_BRAIN_DUMP.sheetName);
  ensureIdeaBrainDumpColumns_(sheet);
  const columnMap = getHeaderMap_(sheet, IDEA_BRAIN_DUMP.headerRow);
  const row = findFirstBlankRowByColumn_(sheet, columnMap['Idea / Title'], IDEA_BRAIN_DUMP.dataStart);
  ensureRows_(sheet, row);
  writeIdeaBrainDumpValues_(sheet, row, columnMap, {
    'Idea ID': getNextIdeaId_(sheet, columnMap),
    'Submitted Date': new Date(),
    'Submitted By': payload.submittedBy,
    'Brand Manager Review Status': 'Needs Review',
    'Promote to 1A?': false,
    'Content Pillar': payload.contentPillar,
    Format: payload.format,
    Goal: payload.goal,
    'Idea / Title': payload.ideaTitle,
    Subject: payload.subject || '',
    'Moment / Action': payload.momentAction || '',
    'Inspiration Link': payload.inspirationLink || '',
    Notes: payload.notes || '',
  });

  appendActivityLog_('', 'ADD_IDEA', '', 'Idea', `Added idea on row ${row}: ${payload.ideaTitle}`, payload.inspirationLink || '');
  return successResult_(`Idea added to row ${row}.`, { row });
}

function promoteIdeaToPlanning_(payload) {
  requireFields_(payload, ['ideaRow', 'brandSet', 'contentPillar', 'format', 'ideaTitle']);
  const spreadsheet = SpreadsheetApp.getActive();
  const ideaSheet = requireSheet_(spreadsheet, '3. Idea Brain Dump');
  const contentSheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = ensureWorkflowColumns_(spreadsheet);
  const conceptId = getNextConceptId_(contentSheet, columnMap[PHASE1.coreHeaders.contentId]);
  const deliverables = buildBrandDeliverables_(conceptId, payload.brandSet);
  const status = payload.assignedFilmer && payload.filmingDate ? 'Assigned to Film' : 'Planned';
  const createdContentIds = [];

  deliverables.forEach((deliverable) => {
    const row = getNextContentRow_(contentSheet, columnMap[PHASE1.coreHeaders.contentId]);
    ensureRows_(contentSheet, row);
    writeContentValues_(contentSheet, row, columnMap, buildPromotedContentValues_(payload, deliverable, status));
    createdContentIds.push(deliverable.contentId);
  });
  styleContentPlanningDataRows_(contentSheet, columnMap);

  ensureIdeaBrainDumpColumns_(ideaSheet);
  const ideaColumnMap = getHeaderMap_(ideaSheet, IDEA_BRAIN_DUMP.headerRow);
  const ideaRow = Number(payload.ideaRow);
  if (ideaRow >= IDEA_BRAIN_DUMP.dataStart) {
    writeIdeaBrainDumpValues_(ideaSheet, ideaRow, ideaColumnMap, {
      'Promote to 1A?': true,
      'Promoted Content #': createdContentIds.join(', '),
      'Promoted Timestamp': new Date(),
      'Brand Manager Review Status': 'Promoted',
    });
  }

  appendActivityLog_(createdContentIds.join(', '), 'PROMOTE_IDEA', '', status, `Promoted idea row ${payload.ideaRow} to ${payload.brandSet}: ${createdContentIds.join(', ')}.`, '');
  if (payload.filmingDate) {
    rebuildCalendarViewsSilently_();
  }
  return successResult_(`Promoted to ${createdContentIds.join(', ')}.`, { contentIds: createdContentIds, conceptId });
}

function buildPromotedContentValues_(payload, deliverable, status) {
  const now = new Date();
  return {
    'Content #': deliverable.contentId,
    'Concept ID': deliverable.conceptId,
    Brand: deliverable.brand,
    'Dual Brand Set': payload.brandSet,
    'Paired Content #': deliverable.pairedContentId,
    'Original / Companion': deliverable.originalCompanion,
    'Content Pillar': payload.contentPillar,
    Format: payload.format,
    Goal: payload.goal || '',
    Idea: payload.ideaTitle,
    Subject: payload.subject || '',
    'Moment / Action': payload.momentAction || '',
    'Filming Date': payload.filmingDate || '',
    'Assigned Filmer(s)': payload.assignedFilmer || '',
    'Shot List': payload.shotList || '',
    'Filming Instructions': payload.filmingInstructions || '',
    'Shared Shoot Notes': payload.sharedShootNotes || '',
    Status: status,
    'Current Owner': status === 'Assigned to Film' ? payload.assignedFilmer : 'Brand Manager',
    'Assigned Editor': 'Estefanie',
    'Assigned Reviewer': 'Brand Manager',
    Priority: payload.priority || '',
    'Created Date': now,
    'Created By': getEffectiveUserEmail_(),
    'Last Updated By': getEffectiveUserEmail_(),
    'Last Updated Timestamp': now,
    'Stage Started Timestamp': now,
    'Brand Angle': deliverable.brand === 'HP' ? payload.hpBrandAngle || '' : payload.vvsBrandAngle || '',
    'Variant Strategy': deliverable.brand === 'HP' ? payload.hpVariantStrategy || '' : payload.vvsVariantStrategy || '',
    'Editing Brief': payload.editingBrief || '',
    'Target Post Gap Days': 14,
    'Spacing Status': deliverable.pairedContentId ? 'Unpaired / Missing Date' : '',
  };
}

function buildBrandDeliverables_(conceptId, brandSet) {
  const brands = brandSet === DUAL_BRAND_SETS.hpOnly
    ? ['HP']
    : brandSet === DUAL_BRAND_SETS.vvsOnly
      ? ['VVS']
      : ['HP', 'VVS'];

  return brands.map((brand, index) => {
    const contentId = `${conceptId}-${brand}`;
    const pairedBrand = brands.length > 1 ? brands.find((item) => item !== brand) : '';
    return {
      conceptId,
      brand,
      contentId,
      pairedContentId: pairedBrand ? `${conceptId}-${pairedBrand}` : '',
      originalCompanion: brands.length === 1 ? 'Single Brand' : index === 0 ? 'Original' : 'Companion',
    };
  });
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

  rebuildCalendarViewsSilently_();
  return successResult_(`Content #${payload.contentId} assigned to ${payload.assignedFilmer}.`);
}

function submitRawFootage_(payload) {
  if (payload.confirmComplete !== 'true') {
    throw new Error('Confirm filming is complete before submitting raw footage.');
  }

  const record = getContentRecordById_(payload.contentId);
  const pairedRecord = getPairedContentRecord_(record);

  if (isDualBrandRecord_(record) && pairedRecord) {
    validateRequiredFields_(payload, ['hpRawFootageUrl', 'vvsRawFootageUrl']);
    [record, pairedRecord].forEach((item) => {
      const brandRawUrl = item.Brand === 'HP' ? payload.hpRawFootageUrl : payload.vvsRawFootageUrl;
      advanceWorkflow_(item.contentId, 'submitRawFootage', Object.assign({}, payload, { rawFootageUrl: brandRawUrl }), {
        updates: {
          'Raw Footage Folder URL': brandRawUrl,
          'HP Raw Footage Folder URL': payload.hpRawFootageUrl,
          'VVS Raw Footage Folder URL': payload.vvsRawFootageUrl,
          'Editor Notes': payload.filmingNotes || '',
          'Stage Completed Timestamp': new Date(),
        },
        logAction: 'SUBMIT_RAW_FOOTAGE',
        notes: payload.filmingNotes || '',
        urlSubmitted: brandRawUrl,
      });
    });
    rebuildCalendarViewsSilently_();
    return successResult_(`Raw footage submitted for ${record['Concept ID']} (${record.contentId}, ${pairedRecord.contentId}).`);
  }

  advanceWorkflow_(payload.contentId, 'submitRawFootage', payload, {
    updates: {
      'Raw Footage Folder URL': payload.rawFootageUrl,
      [`${record.Brand || 'HP'} Raw Footage Folder URL`]: payload.rawFootageUrl,
      'Editor Notes': payload.filmingNotes || '',
      'Stage Completed Timestamp': new Date(),
    },
    logAction: 'SUBMIT_RAW_FOOTAGE',
    notes: payload.filmingNotes || '',
    urlSubmitted: payload.rawFootageUrl,
  });

  rebuildCalendarViewsSilently_();
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
  const spacingContext = getSpacingContext_(record, payload.postingDate);

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
      'Paired Posting Date': spacingContext.pairedPostingDate || '',
      'Actual Post Gap Days': spacingContext.actualGapDays || '',
      'Spacing Status': spacingContext.spacingStatus || '',
    },
    logAction: 'SCHEDULE_CONTENT',
    notes: spacingContext.warning || '',
    urlSubmitted: approvedVideoUrl,
  });
  syncPlatformCheckboxes_(payload.contentId, payload.platforms);
  rebuildCalendarViewsSilently_();

  return successResult_(`Content #${payload.contentId} scheduled.${spacingContext.warning ? ` ${spacingContext.warning}` : ''}`);
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

  rebuildCalendarViewsSilently_();
  return successResult_(`Content #${payload.contentId} marked as posted.`);
}

function adminOverrideContent_(payload) {
  requireFields_(payload, ['contentId', 'status', 'notes']);
  updateContentRecord_(payload.contentId, {
    Status: payload.status,
    'Current Owner': payload.currentOwner || '',
  }, 'ADMIN_OVERRIDE', `ADMIN OVERRIDE: ${payload.notes}`, '');

  rebuildCalendarViewsSilently_();
  return successResult_(`Admin override applied to Content #${payload.contentId}.`);
}

function getWorkflowOptions_(spreadsheet) {
  return {
    statuses: getConfigListValues_(spreadsheet, 'Statuses'),
    teamMembers: replaceLegacyTeamNamesInList_(getConfigListValues_(spreadsheet, 'Team Members')),
    roles: getConfigListValues_(spreadsheet, 'Roles'),
    filmerAssignments: replaceLegacyTeamNamesInList_(getConfigListValues_(spreadsheet, 'Filmer Assignment Values')),
    brands: getConfigListValues_(spreadsheet, 'Brands'),
    dualBrandSets: getConfigListValues_(spreadsheet, 'Dual Brand Sets'),
    originalCompanionValues: getConfigListValues_(spreadsheet, 'Original / Companion'),
    spacingStatuses: getConfigListValues_(spreadsheet, 'Spacing Statuses'),
    platforms: getConfigListValues_(spreadsheet, 'Platforms'),
    priorities: getConfigListValues_(spreadsheet, 'Priorities'),
    subjects: getConfigListValues_(spreadsheet, 'Subjects'),
    momentActions: getConfigListValues_(spreadsheet, 'Moment Actions'),
    contentPillars: getConfigListValues_(spreadsheet, 'Content Pillars'),
    formats: getConfigListValues_(spreadsheet, 'Formats'),
    goals: getConfigListValues_(spreadsheet, 'Goals'),
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
    defaults.brandSet = DUAL_BRAND_SETS.both;
    defaults.ideaRow = selectedIdea.row;
    defaults.contentPillar = selectedIdea.contentPillar || '';
    defaults.format = selectedIdea.format || '';
    defaults.goal = selectedIdea.goal || '';
    defaults.ideaTitle = selectedIdea.ideaTitle || '';
    defaults.inspirationLink = selectedIdea.inspirationLink || '';
    defaults.subject = selectedIdea.subject || '';
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

  if (action === 'submitRawFootage' && isDualBrandRecord_(selectedContent)) {
    lines.push(`Dual-brand concept ${selectedContent['Concept ID']}`);
    lines.push('Submit separate raw footage links for HP and VVS.');
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
    const spacingContext = getSpacingContext_(selectedContent, selectedContent['Posting Date']);
    lines.push(approvedUrl ? `Approved video URL: ${approvedUrl}` : 'Missing approved video URL');
    if (!readiness.ready) {
      lines.push(`Missing schedule fields: ${readiness.missing.join(', ')}`);
    }
    if (spacingContext.pairedPostingDate) {
      lines.push(`Paired post date: ${spacingContext.pairedPostingDate}`);
      lines.push(`Spacing: ${spacingContext.spacingStatus}${spacingContext.actualGapDays ? ` (${spacingContext.actualGapDays} days)` : ''}`);
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

  if (!range || !sheet || sheet.getName() !== IDEA_BRAIN_DUMP.sheetName || range.getRow() < IDEA_BRAIN_DUMP.dataStart) {
    return null;
  }

  const row = range.getRow();
  ensureIdeaBrainDumpColumns_(sheet);
  const columnMap = getHeaderMap_(sheet, IDEA_BRAIN_DUMP.headerRow);
  const values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
  const record = rowToIdeaBrainDumpRecord_(values, columnMap);
  return {
    row,
    contentPillar: record['Content Pillar'] || '',
    format: record.Format || '',
    goal: record.Goal || '',
    ideaTitle: record['Idea / Title'] || '',
    inspirationLink: record['Inspiration Link'] || '',
    subject: record.Subject || '',
    momentAction: record['Moment / Action'] || '',
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

function getPairedContentRecord_(record) {
  if (!record || !record['Paired Content #']) {
    return null;
  }
  try {
    return getContentRecordById_(record['Paired Content #']);
  } catch (error) {
    return null;
  }
}

function isDualBrandRecord_(record) {
  return Boolean(record && record['Dual Brand Set'] === DUAL_BRAND_SETS.both && record['Paired Content #']);
}

function getSpacingContext_(record, postingDateValue) {
  const pairedRecord = getPairedContentRecord_(record);
  if (!pairedRecord) {
    return {
      spacingStatus: record && record['Paired Content #'] ? 'Unpaired / Missing Date' : '',
      warning: '',
    };
  }

  const postingDate = parseSheetDate_(postingDateValue);
  const pairedPostingDate = parseSheetDate_(pairedRecord['Posting Date']);
  if (!postingDate || !pairedPostingDate) {
    return {
      pairedPostingDate: pairedRecord['Posting Date'] || '',
      spacingStatus: 'Unpaired / Missing Date',
      warning: '',
    };
  }

  const actualGapDays = Math.abs(Math.round((postingDate.getTime() - pairedPostingDate.getTime()) / 86400000));
  const spacingStatus = actualGapDays >= 14 ? 'Ideal' : actualGapDays >= 7 ? 'Acceptable' : 'Too Close';
  return {
    pairedPostingDate: pairedRecord['Posting Date'],
    actualGapDays,
    spacingStatus,
    warning: actualGapDays < 14 ? `Spacing warning: paired ${pairedRecord.Brand || 'brand'} post is ${actualGapDays} day(s) apart; 14+ is ideal.` : '',
  };
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

  if ((isAdmin || userName === 'Brand Manager' || userName === 'Estefanie') && record.status === 'Approved') {
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
    const value = rowValues[columnMap[header] - 1];
    record[header] = value === undefined || value === null ? '' : value;
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
  if (lastDataRow < PHASE1.rows.contentDataStart) {
    throw new Error(`Content #${contentId} was not found.`);
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
  if (lastDataRow < PHASE1.rows.contentDataStart) {
    return 1;
  }
  const values = sheet.getRange(PHASE1.rows.contentDataStart, contentIdColumn, lastDataRow - PHASE1.rows.contentDataStart + 1, 1).getDisplayValues();
  const maxId = values.reduce((max, row) => {
    const id = Number(normalizeContentId_(row[0]));
    return Number.isFinite(id) ? Math.max(max, id) : max;
  }, 0);
  return maxId + 1;
}

function getNextConceptId_(sheet, contentIdColumn) {
  const lastDataRow = getLastContentDataRow_(sheet, contentIdColumn);
  if (lastDataRow < PHASE1.rows.contentDataStart) {
    return 1;
  }

  const values = sheet.getRange(PHASE1.rows.contentDataStart, contentIdColumn, lastDataRow - PHASE1.rows.contentDataStart + 1, 1).getDisplayValues();
  return values.reduce((max, row) => {
    const idText = normalizeContentId_(row[0]);
    const match = idText.match(/^(\d+)(?:-[A-Z]+)?$/);
    const id = match ? Number(match[1]) : Number(idText);
    return Number.isFinite(id) ? Math.max(max, id) : max;
  }, 0) + 1;
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
    return ['Filming Complete', 'Revision Requested', 'Approved', 'Scheduled', 'Editing V1', 'Editing V2+'].indexOf(record.status) !== -1;
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

function inferBrandFromContentId_(contentId) {
  const match = String(contentId || '').match(/-(HP|VVS)$/i);
  return match ? match[1].toUpperCase() : '';
}

function inferConceptIdFromContentId_(contentId) {
  const match = String(contentId || '').match(/^(\d+)/);
  return match ? match[1] : normalizeContentId_(contentId);
}

function buildCalendarDisplayValue_(record) {
  return [
    record.Status,
    record.Brand ? `[${record.Brand}]` : '',
    record['Content #'] ? `#${record['Content #']}` : '',
    record.Idea || '',
  ].filter(Boolean).join(' - ');
}

function ensureIdeaBrainDumpColumns_(sheet) {
  if (!isIdeaBrainDumpSchemaCurrent_(sheet)) {
    rebuildIdeaBrainDumpSurface_(sheet, readIdeaBrainDumpRecords_(sheet));
    return;
  }
  styleIdeaBrainDumpSheet_(sheet);
}

function rebuildIdeaBrainDumpSheet_(spreadsheet) {
  const sheet = requireSheet_(spreadsheet, IDEA_BRAIN_DUMP.sheetName);
  rebuildIdeaBrainDumpSurface_(sheet, readIdeaBrainDumpRecords_(sheet));
  applyIdeaBrainDumpValidations_(spreadsheet, sheet);
}

function readIdeaBrainDumpRecords_(sheet) {
  const headerMap = getHeaderMap_(sheet, IDEA_BRAIN_DUMP.headerRow);
  const lastRow = sheet.getLastRow();
  if (lastRow < IDEA_BRAIN_DUMP.dataStart) {
    return [];
  }

  const rowCount = lastRow - IDEA_BRAIN_DUMP.dataStart + 1;
  const range = sheet.getRange(IDEA_BRAIN_DUMP.dataStart, 1, rowCount, Math.max(sheet.getLastColumn(), 17));
  const values = range.getDisplayValues();
  const richTextValues = range.getRichTextValues();
  return values
    .map((row, index) => {
      const record = rowToIdeaBrainDumpRecord_(row, headerMap);
      attachIdeaBrainDumpRichText_(record, richTextValues[index], headerMap);
      return record;
    })
    .filter((record) => ideaBrainDumpRecordHasData_(record));
}

function rowToIdeaBrainDumpRecord_(row, headerMap) {
  const record = {};
  IDEA_BRAIN_DUMP.headers.forEach((header) => {
    const headerColumn = headerMap[header] || getIdeaBrainDumpLegacyColumn_(header);
    record[header] = headerColumn ? row[headerColumn - 1] || '' : '';
  });
  return record;
}

function getIdeaBrainDumpLegacyColumn_(header) {
  return IDEA_BRAIN_DUMP.legacyPositions[header] || 0;
}

function attachIdeaBrainDumpRichText_(record, richTextRow, headerMap) {
  if (!richTextRow) {
    return;
  }

  IDEA_BRAIN_DUMP.headers.forEach((header) => {
    const headerColumn = headerMap[header] || getIdeaBrainDumpLegacyColumn_(header);
    const richTextValue = headerColumn ? richTextRow[headerColumn - 1] : null;
    if (!richTextValue || !richTextValueHasLink_(richTextValue)) {
      return;
    }
    record.__richTextByHeader = record.__richTextByHeader || {};
    record.__richTextByHeader[header] = richTextValue;
  });
}

function restoreIdeaBrainDumpRichText_(sheet, records) {
  const columnMap = getHeaderMap_(sheet, IDEA_BRAIN_DUMP.headerRow);
  records.forEach((record, rowIndex) => {
    if (!record.__richTextByHeader) {
      return;
    }
    Object.keys(record.__richTextByHeader).forEach((header) => {
      if (columnMap[header]) {
        sheet.getRange(IDEA_BRAIN_DUMP.dataStart + rowIndex, columnMap[header]).setRichTextValue(record.__richTextByHeader[header]);
      }
    });
  });
}

function richTextValueHasLink_(richTextValue) {
  if (richTextValue.getLinkUrl && richTextValue.getLinkUrl()) {
    return true;
  }
  return richTextValue.getRuns().some((run) => run.getLinkUrl && run.getLinkUrl());
}

function ideaBrainDumpRecordHasData_(record) {
  return [
    'Idea ID',
    'Submitted Date',
    'Submitted By',
    'Content Pillar',
    'Format',
    'Goal',
    'Idea / Title',
    'Subject',
    'Moment / Action',
    'Inspiration Link',
    'Notes',
    'Promoted Content #',
  ].some((header) => String(record[header] || '').trim());
}

function rebuildIdeaBrainDumpSurface_(sheet, records) {
  const headers = IDEA_BRAIN_DUMP.headers;
  ensureColumns_(sheet, headers.length);
  ensureRows_(sheet, Math.max(100, IDEA_BRAIN_DUMP.dataStart + records.length + 20));
  if (sheet.getMaxColumns() > headers.length) {
    sheet.deleteColumns(headers.length + 1, sheet.getMaxColumns() - headers.length);
  }

  sheet.clear();
  sheet.clearFormats();
  sheet.clearNotes();
  sheet.clearConditionalFormatRules();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).clearDataValidations();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).breakApart();
  buildIdeaBrainDumpMasthead_(sheet, headers.length);
  sheet.getRange(IDEA_BRAIN_DUMP.headerRow, 1, 1, headers.length).setValues([headers]);

  if (records.length) {
    const values = records.map((record, index) => {
      const nextRecord = Object.assign({}, record);
      nextRecord['Idea ID'] = nextRecord['Idea ID'] || getGeneratedIdeaId_(index + 1);
      nextRecord['Promote to 1A?'] = normalizeCheckboxValue_(nextRecord['Promote to 1A?']);
      return headers.map((header) => Object.prototype.hasOwnProperty.call(nextRecord, header) ? nextRecord[header] : '');
    });
    sheet.getRange(IDEA_BRAIN_DUMP.dataStart, 1, values.length, headers.length).setValues(values);
    restoreIdeaBrainDumpRichText_(sheet, records);
  }

  styleIdeaBrainDumpSheet_(sheet);
}

function buildIdeaBrainDumpMasthead_(sheet, width) {
  const c = CONTENT_PLANNING_STYLE;
  sheet.getRange(1, 1, 1, width)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.muted)
    .setBackground(c.bg)
    .setVerticalAlignment('bottom');
  sheet.getRange(1, 1).setValue('CONTENT OPERATIONS  /  IDEA INTAKE');
  sheet.getRange(2, 1, 1, width)
    .setFontFamily('Playfair Display')
    .setFontSize(22)
    .setFontWeight('bold')
    .setFontColor(c.dark)
    .setBackground(c.bg)
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.getRange(2, 1).setValue('3. Idea Brain Dump');
  sheet.getRange(3, 1, 1, width)
    .setFontFamily('Inter')
    .setFontSize(9)
    .setFontStyle('italic')
    .setFontColor(c.muted)
    .setBackground(c.bg);
  sheet.getRange(3, 1).setValue('Raw idea intake before Brand Manager/Admin promotes selected concepts into 1A. Use workflow dialogs for new ideas and promotion.');
}

function styleIdeaBrainDumpSheet_(sheet) {
  const c = CONTENT_PLANNING_STYLE;
  const width = IDEA_BRAIN_DUMP.headers.length;
  sheet.getRange(1, 1, sheet.getMaxRows(), width).setBackground(c.bg).setFontFamily('Inter');
  sheet.getRange(IDEA_BRAIN_DUMP.headerRow, 1, 1, width)
    .setBackground(c.dark)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.white)
    .setWrap(true)
    .setVerticalAlignment('middle')
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.getRange(IDEA_BRAIN_DUMP.dataStart, 1, Math.max(sheet.getMaxRows() - IDEA_BRAIN_DUMP.dataStart + 1, 1), width)
    .setBackground(c.white)
    .setFontSize(10)
    .setFontColor(c.body)
    .setWrap(true)
    .setVerticalAlignment('top')
    .setBorder(true, true, true, true, true, true, c.rule, SpreadsheetApp.BorderStyle.SOLID);
  ['Idea ID', 'Submitted Date', 'Submitted By', 'Brand Manager Review Status', 'Promote to 1A?', 'Promoted Content #', 'Promoted Timestamp'].forEach((header) => {
    const columnMap = getHeaderMap_(sheet, IDEA_BRAIN_DUMP.headerRow);
    if (columnMap[header]) {
      sheet.getRange(IDEA_BRAIN_DUMP.dataStart, columnMap[header], Math.max(sheet.getMaxRows() - IDEA_BRAIN_DUMP.dataStart + 1, 1), 1)
        .setBackground(c.inset)
        .setFontColor(c.muted);
    }
  });
  applyIdeaBrainDumpColumnWidths_(sheet);
  sheet.setFrozenRows(IDEA_BRAIN_DUMP.headerRow);
  sheet.setFrozenColumns(5);
  sheet.setHiddenGridlines(true);
  sheet.setRowHeight(1, 22);
  sheet.setRowHeight(2, 34);
  sheet.setRowHeight(3, 28);
  sheet.setRowHeight(IDEA_BRAIN_DUMP.headerRow, 46);
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  sheet.getRange(IDEA_BRAIN_DUMP.headerRow, 1, Math.max(sheet.getLastRow() - IDEA_BRAIN_DUMP.headerRow + 1, 1), width).createFilter();
}

function applyIdeaBrainDumpColumnWidths_(sheet) {
  const widths = {
    'Idea ID': 90,
    'Submitted Date': 115,
    'Submitted By': 140,
    'Brand Manager Review Status': 150,
    'Promote to 1A?': 110,
    'Content Pillar': 165,
    Format: 120,
    Goal: 130,
    'Idea / Title': 260,
    Subject: 150,
    'Moment / Action': 155,
    'Inspiration Link': 220,
    Notes: 260,
    'Promoted Content #': 155,
    'Promoted Timestamp': 150,
  };
  const columnMap = getHeaderMap_(sheet, IDEA_BRAIN_DUMP.headerRow);
  Object.keys(columnMap).forEach((header) => {
    sheet.setColumnWidth(columnMap[header], widths[header] || 120);
  });
}

function applyIdeaBrainDumpValidations_(spreadsheet, sheet) {
  const columnMap = getHeaderMap_(sheet, IDEA_BRAIN_DUMP.headerRow);
  const rowCount = Math.max(sheet.getMaxRows() - IDEA_BRAIN_DUMP.dataStart + 1, 1);
  applyWarningValidationToColumnForStart_(sheet, columnMap['Content Pillar'], IDEA_BRAIN_DUMP.dataStart, rowCount, spreadsheet.getRangeByName(configRangeName_('Content Pillars')));
  applyWarningValidationToColumnForStart_(sheet, columnMap.Format, IDEA_BRAIN_DUMP.dataStart, rowCount, spreadsheet.getRangeByName(configRangeName_('Formats')));
  applyWarningValidationToColumnForStart_(sheet, columnMap.Goal, IDEA_BRAIN_DUMP.dataStart, rowCount, spreadsheet.getRangeByName(configRangeName_('Goals')));
  applyValidationToColumnForStart_(sheet, columnMap.Subject, IDEA_BRAIN_DUMP.dataStart, rowCount, spreadsheet.getRangeByName(configRangeName_('Subjects')), true);
  applyValidationToColumnForStart_(sheet, columnMap['Moment / Action'], IDEA_BRAIN_DUMP.dataStart, rowCount, spreadsheet.getRangeByName(configRangeName_('Moment Actions')), true);
  applyValidationToColumnForStart_(sheet, columnMap['Brand Manager Review Status'], IDEA_BRAIN_DUMP.dataStart, rowCount, ['Needs Review', 'Reviewed', 'Promoted', 'Backlog']);
  if (columnMap['Promote to 1A?']) {
    sheet.getRange(IDEA_BRAIN_DUMP.dataStart, columnMap['Promote to 1A?'], rowCount, 1).insertCheckboxes();
  }
}

function isIdeaBrainDumpSchemaCurrent_(sheet) {
  const headerMap = getHeaderMap_(sheet, IDEA_BRAIN_DUMP.headerRow);
  return IDEA_BRAIN_DUMP.headers.every((header, index) => headerMap[header] === index + 1);
}

function writeIdeaBrainDumpValues_(sheet, row, columnMap, valuesByHeader) {
  Object.keys(valuesByHeader).forEach((header) => {
    if (columnMap[header]) {
      const value = header === 'Promote to 1A?' ? normalizeCheckboxValue_(valuesByHeader[header]) : valuesByHeader[header];
      sheet.getRange(row, columnMap[header]).setValue(value);
    }
  });
}

function normalizeCheckboxValue_(value) {
  if (value === true || value === false) {
    return value;
  }
  const cleanValue = String(value || '').trim().toLowerCase();
  return cleanValue === '1' || cleanValue === 'true' || cleanValue === 'yes' || cleanValue === 'checked';
}

function getNextIdeaId_(sheet, columnMap) {
  if (!columnMap['Idea ID']) {
    return getGeneratedIdeaId_(1);
  }
  const lastRow = Math.max(sheet.getLastRow(), IDEA_BRAIN_DUMP.dataStart);
  const values = sheet.getRange(IDEA_BRAIN_DUMP.dataStart, columnMap['Idea ID'], Math.max(lastRow - IDEA_BRAIN_DUMP.dataStart + 1, 1), 1).getDisplayValues();
  const maxId = values.reduce((max, row) => {
    const match = String(row[0] || '').match(/IDEA-(\d+)/i);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);
  return getGeneratedIdeaId_(maxId + 1);
}

function getGeneratedIdeaId_(number) {
  return `IDEA-${String(number).padStart(4, '0')}`;
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
  const existingValuesByTitle = getExistingWorkflowSettingsValues_(sheet);
  const legacyValuesByTitle = getLegacySettingsValues_(sheet);
  const blockStart = rebuildWorkflowSettingsSurface_(sheet);
  const titles = Object.keys(PHASE1.configLists);
  const valuesByTitle = titles.reduce((map, title, offset) => {
    const existingValues = (existingValuesByTitle[title] || []).concat(legacyValuesByTitle[title] || []);
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

  styleWorkflowSettingsSheet_(sheet, blockStart, titles, maxListLength);

  return titles.reduce((ranges, title) => {
    ranges[title] = spreadsheet.getRangeByName(configRangeName_(title));
    return ranges;
  }, {});
}

function getLegacySettingsValues_(sheet) {
  return {
    'Content Pillars': getSettingsColumnValuesFromSheet_(sheet, 3, 12),
    Formats: getSettingsColumnValuesFromSheet_(sheet, 7, 12),
    Goals: getSettingsColumnValuesFromSheet_(sheet, 11, 12),
  };
}

function getSettingsColumnValuesFromSheet_(sheet, column, firstRow) {
  if (column > sheet.getMaxColumns()) {
    return [];
  }
  const rowCount = Math.max(sheet.getLastRow() - firstRow + 1, 1);
  return uniqueNonEmpty_(sheet.getRange(firstRow, column, rowCount, 1).getDisplayValues().flat());
}

function getExistingWorkflowSettingsValues_(sheet) {
  const titleFinder = sheet.createTextFinder(PHASE1.workflowConfigTitle)
    .matchCase(false)
    .matchEntireCell(true);
  const titleCell = titleFinder.findNext();
  if (!titleCell) {
    return {};
  }

  const headerRow = titleCell.getRow() + 1;
  const firstColumn = titleCell.getColumn();
  const width = Math.max(sheet.getLastColumn() - firstColumn + 1, 1);
  const headers = sheet.getRange(headerRow, firstColumn, 1, width).getDisplayValues()[0];
  return headers.reduce((map, title, index) => {
    const cleanTitle = String(title || '').trim();
    if (cleanTitle) {
      map[cleanTitle] = getWorkflowConfigColumnValues_(sheet, headerRow + 1, firstColumn + index);
    }
    return map;
  }, {});
}

function rebuildWorkflowSettingsSurface_(sheet) {
  const titles = Object.keys(PHASE1.configLists);
  ensureColumns_(sheet, titles.length);
  ensureRows_(sheet, 80);
  if (sheet.getMaxColumns() > titles.length) {
    sheet.deleteColumns(titles.length + 1, sheet.getMaxColumns() - titles.length);
  }

  sheet.clear();
  sheet.clearFormats();
  sheet.clearNotes();
  sheet.clearConditionalFormatRules();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).clearDataValidations();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).breakApart();
  return { row: 5, column: 1 };
}

function styleWorkflowSettingsSheet_(sheet, blockStart, titles, maxListLength) {
  const c = CONTENT_PLANNING_STYLE;
  const width = titles.length;
  const bodyRows = Math.max(maxListLength, 1);
  sheet.getRange(1, 1, sheet.getMaxRows(), width).setBackground(c.bg).setFontFamily('Inter');

  sheet.getRange(1, 1, 1, width).merge()
    .setValue('CONTENT OPERATIONS  /  WORKFLOW CONFIG')
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.muted)
    .setBackground(c.bg)
    .setVerticalAlignment('bottom');
  sheet.getRange(2, 1, 1, width).merge()
    .setValue('5. Settings')
    .setFontFamily('Playfair Display')
    .setFontSize(22)
    .setFontWeight('bold')
    .setFontColor(c.dark)
    .setBackground(c.bg)
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.getRange(3, 1, 1, width).merge()
    .setValue('Live reference lists for workflow dropdowns and data validation. Update values here, then rerun Phase 1 Setup to refresh validations.')
    .setFontFamily('Inter')
    .setFontSize(9)
    .setFontStyle('italic')
    .setFontColor(c.muted)
    .setBackground(c.bg);
  sheet.getRange(4, 1, 1, width).merge()
    .setValue(PHASE1.workflowConfigTitle)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.white)
    .setBackground(c.dark)
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.getRange(blockStart.row, blockStart.column, 1, width)
    .setBackground(c.surface)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.dark)
    .setWrap(true)
    .setVerticalAlignment('middle')
    .setBorder(true, true, true, true, true, false, c.rule, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(blockStart.row + 1, blockStart.column, bodyRows, width)
    .setBackground(c.white)
    .setFontSize(10)
    .setFontColor(c.body)
    .setWrap(true)
    .setVerticalAlignment('top')
    .setBorder(true, true, true, true, true, true, c.rule, SpreadsheetApp.BorderStyle.SOLID);
  sheet.setFrozenRows(blockStart.row);
  sheet.setHiddenGridlines(true);
  sheet.setRowHeight(1, 22);
  sheet.setRowHeight(2, 34);
  sheet.setRowHeight(3, 28);
  sheet.setRowHeight(4, 28);
  sheet.setRowHeight(blockStart.row, 46);
  sheet.autoResizeColumns(1, width);
  for (let column = 1; column <= width; column += 1) {
    sheet.setColumnWidth(column, Math.max(sheet.getColumnWidth(column), 130));
  }
}

function getWorkflowConfigColumnValues_(sheet, firstRow, column) {
  const rowCount = Math.max(sheet.getLastRow() - firstRow + 1, 1);
  return uniqueNonEmpty_(sheet.getRange(firstRow, column, rowCount, 1).getDisplayValues().flat());
}

function mergeWorkflowConfigValues_(title, configuredValues, existingValues) {
  if (STRICT_WORKFLOW_CONFIG_LISTS.indexOf(title) !== -1) {
    return uniqueNonEmpty_(configuredValues || []);
  }

  const normalizedExistingValues = title === 'Team Members' || title === 'Filmer Assignment Values'
    ? replaceLegacyTeamNamesInList_(existingValues)
    : existingValues;
  return uniqueNonEmpty_((configuredValues || []).concat(normalizedExistingValues || []));
}

function ensureWorkflowColumns_(spreadsheet) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const headerRow = getExistingContentHeaderRow_(sheet);
  if (headerRow !== PHASE1.rows.contentHeader || !isContentPlanningSchemaCurrent_(sheet)) {
    return rebuildContentPlanningSchema_(spreadsheet);
  }
  renameLegacyHeaders_(sheet, PHASE1.rows.contentHeader);
  const existing = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  const allHeaders = getContentPlanningHeaders_();
  let nextColumn = sheet.getLastColumn() + 1;
  const missingColumnCount = allHeaders.filter((header) => !existing[header]).length;

  if (missingColumnCount > 0) {
    ensureColumns_(sheet, sheet.getLastColumn() + missingColumnCount);
  }

  allHeaders.forEach((header) => {
    if (existing[header]) {
      return;
    }

    sheet.getRange(PHASE1.rows.contentHeader, nextColumn)
      .setValue(header)
      .setFontWeight('bold')
      .setWrap(true);
    existing[header] = nextColumn;
    nextColumn += 1;
  });

  assertRequiredContentColumns_(existing);
  styleContentPlanningSheet_(sheet);

  return getHeaderMap_(sheet, PHASE1.rows.contentHeader);
}

function renameLegacyHeaders_(sheet, headerRow) {
  const headerMap = getHeaderMap_(sheet, headerRow);
  WORKFLOW_HEADER_RENAMES.forEach((rename) => {
    if (headerMap[rename.oldHeader] && !headerMap[rename.newHeader]) {
      sheet.getRange(headerRow, headerMap[rename.oldHeader]).setValue(rename.newHeader);
    }
  });
}

function rebuildContentPlanningSchema_(spreadsheet) {
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const sourceHeaderRow = getExistingContentHeaderRow_(sheet);
  const sourceDataStart = sourceHeaderRow === PHASE1.rows.contentHeader ? PHASE1.rows.contentDataStart : 6;
  const sourceColumnMap = getHeaderMap_(sheet, sourceHeaderRow);
  const sourceContentIdColumn = sourceColumnMap[PHASE1.coreHeaders.contentId];
  const sourceLastDataRow = sourceContentIdColumn ? getLastContentDataRowForStart_(sheet, sourceContentIdColumn, sourceDataStart) : sourceDataStart - 1;
  const sourceRows = sourceLastDataRow >= sourceDataStart
    ? sheet.getRange(sourceDataStart, 1, sourceLastDataRow - sourceDataStart + 1, sheet.getLastColumn()).getValues()
    : [];
  const records = sourceRows
    .map((row) => migrateContentRecord_(rowToContentRecord_(row, sourceColumnMap, 0)))
    .filter((record) => record[PHASE1.coreHeaders.contentId]);

  backupContentPlanningSheet_(spreadsheet, sheet);
  rebuildContentPlanningSurface_(sheet);
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  if (records.length) {
    const headers = getContentPlanningHeaders_();
    const values = records.map((record) => headers.map((header) => Object.prototype.hasOwnProperty.call(record, header) ? record[header] : ''));
    ensureRows_(sheet, PHASE1.rows.contentDataStart + values.length - 1);
    sheet.getRange(PHASE1.rows.contentDataStart, 1, values.length, headers.length).setValues(values);
  }
  styleContentPlanningSheet_(sheet);
  return columnMap;
}

function backupContentPlanningSheet_(spreadsheet, sheet) {
  const marker = 'Backup - 1A ';
  const timestamp = Utilities.formatDate(new Date(), spreadsheet.getSpreadsheetTimeZone(), 'yyyyMMdd-HHmm');
  let backupName = `${marker}${timestamp}`;
  let suffix = 2;
  while (spreadsheet.getSheetByName(backupName)) {
    backupName = `${marker}${timestamp}-${suffix}`;
    suffix += 1;
  }
  sheet.copyTo(spreadsheet).setName(backupName);
}

function rebuildContentPlanningSurface_(sheet) {
  const headers = getContentPlanningHeaders_();
  ensureColumns_(sheet, headers.length);
  ensureRows_(sheet, 1000);
  if (sheet.getMaxColumns() > headers.length) {
    sheet.deleteColumns(headers.length + 1, sheet.getMaxColumns() - headers.length);
  }

  sheet.clear();
  sheet.clearFormats();
  sheet.clearNotes();
  sheet.clearConditionalFormatRules();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).clearDataValidations();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).breakApart();

  buildContentPlanningMasthead_(sheet, headers.length);
  buildContentPlanningSectionHeaders_(sheet);
  sheet.getRange(PHASE1.rows.contentHeader, 1, 1, headers.length).setValues([headers]);
}

function buildContentPlanningMasthead_(sheet, width) {
  const c = CONTENT_PLANNING_STYLE;
  sheet.getRange(1, 1, 1, width)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.muted)
    .setBackground(c.bg)
    .setVerticalAlignment('bottom');
  sheet.getRange(1, 1).setValue('CONTENT OPERATIONS  /  MASTER PLANNING');
  sheet.setRowHeight(1, 22);

  sheet.getRange(2, 1, 1, width)
    .setFontFamily('Playfair Display')
    .setFontSize(22)
    .setFontWeight('bold')
    .setFontColor(c.dark)
    .setBackground(c.bg)
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.getRange(2, 1).setValue('1A. Content Planning');
  sheet.setRowHeight(2, 34);

  sheet.getRange(3, 1, 1, width)
    .setFontFamily('Inter')
    .setFontSize(9)
    .setFontStyle('italic')
    .setFontColor(c.muted)
    .setBackground(c.bg);
  sheet.getRange(3, 1).setValue('Use Content Workflow dialogs for status changes, reviews, scheduling, and posting. HP/VVS rows share a Concept ID but move through editing and posting separately.');
  sheet.setRowHeight(3, 24);
}

function buildContentPlanningSectionHeaders_(sheet) {
  let column = 1;
  PHASE1.contentSections.forEach((section) => {
    sheet.getRange(PHASE1.rows.contentSectionHeader, column, 1, section.headers.length).merge()
      .setValue(section.title.toUpperCase())
      .setHorizontalAlignment('center');
    column += section.headers.length;
  });
}

function styleContentPlanningSheet_(sheet) {
  const c = CONTENT_PLANNING_STYLE;
  const headers = getContentPlanningHeaders_();
  const maxRows = sheet.getMaxRows();
  const width = headers.length;

  sheet.getRange(1, 1, maxRows, width).setBackground(c.bg).setFontFamily('Inter');
  sheet.getRange(PHASE1.rows.contentSectionHeader, 1, 1, width)
    .setBackground(c.dark)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.bg)
    .setVerticalAlignment('middle')
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.getRange(PHASE1.rows.contentHeader, 1, 1, width)
    .setBackground(c.surface)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.dark)
    .setWrap(true)
    .setVerticalAlignment('middle')
    .setBorder(true, true, true, true, true, false, c.rule, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(PHASE1.rows.contentDataStart, 1, Math.max(maxRows - PHASE1.rows.contentDataStart + 1, 1), width)
    .setBackground(c.white)
    .setFontSize(10)
    .setFontColor(c.body)
    .setWrap(true)
    .setVerticalAlignment('top')
    .setBorder(true, true, true, true, true, true, c.rule, SpreadsheetApp.BorderStyle.SOLID);
  styleContentPlanningHelperColumns_(sheet);
  applyContentPlanningColumnWidths_(sheet);
  applyContentPlanningOperationalFormatting_(sheet);
  sheet.setFrozenRows(PHASE1.rows.contentHeader);
  sheet.setFrozenColumns(10);
  sheet.setHiddenGridlines(true);
  sheet.setRowHeight(PHASE1.rows.contentSectionHeader, 28);
  sheet.setRowHeight(PHASE1.rows.contentHeader, 46);
  const filterRange = sheet.getRange(PHASE1.rows.contentHeader, 1, Math.max(sheet.getLastRow() - PHASE1.rows.contentHeader + 1, 1), width);
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  filterRange.createFilter();
}

function styleContentPlanningDataRows_(sheet) {
  if (sheet.getLastRow() >= PHASE1.rows.contentDataStart) {
    styleContentPlanningSheet_(sheet);
  }
}

function styleContentPlanningHelperColumns_(sheet) {
  const c = CONTENT_PLANNING_STYLE;
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  ['Created Date', 'Created By', 'Previous Status', 'Last Updated By', 'Last Updated Timestamp', 'Stage Started Timestamp', 'Stage Completed Timestamp', 'Calendar Display'].forEach((header) => {
    if (columnMap[header]) {
      sheet.getRange(PHASE1.rows.contentDataStart, columnMap[header], Math.max(sheet.getMaxRows() - PHASE1.rows.contentDataStart + 1, 1), 1)
        .setBackground(c.inset)
        .setFontColor(c.muted);
    }
  });
}

function applyContentPlanningColumnWidths_(sheet) {
  const widths = {
    'Content #': 92,
    'Concept ID': 82,
    Brand: 64,
    'Dual Brand Set': 110,
    'Paired Content #': 110,
    'Original / Companion': 120,
    Idea: 220,
    'Shot List': 220,
    'Filming Instructions': 240,
    'Shared Shoot Notes': 220,
    'Brand Angle': 180,
    'Variant Strategy': 200,
    Caption: 240,
    CTA: 180,
    Hashtags: 220,
    'Calendar Display': 260,
  };
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  Object.keys(columnMap).forEach((header) => {
    sheet.setColumnWidth(columnMap[header], widths[header] || 120);
  });
}

function applyContentPlanningOperationalFormatting_(sheet) {
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  const rowCount = Math.max(sheet.getMaxRows() - PHASE1.rows.contentDataStart + 1, 1);

  if (columnMap.Time) {
    sheet.getRange(PHASE1.rows.contentDataStart, columnMap.Time, rowCount, 1)
      .setNumberFormat('h:mm AM/PM');
  }

  ['Dual Brand Set', 'Paired Content #', 'Original / Companion'].forEach((header) => {
    if (columnMap[header]) {
      sheet.hideColumns(columnMap[header]);
    }
  });
}

function getContentPlanningHeaders_() {
  return PHASE1.contentSections.reduce((headers, section) => headers.concat(section.headers), []);
}

function getExistingContentHeaderRow_(sheet) {
  if (getHeaderMap_(sheet, PHASE1.rows.contentHeader)[PHASE1.coreHeaders.contentId]) {
    return PHASE1.rows.contentHeader;
  }
  if (getHeaderMap_(sheet, 4)[PHASE1.coreHeaders.contentId]) {
    return 4;
  }
  return PHASE1.rows.contentHeader;
}

function isContentPlanningSchemaCurrent_(sheet) {
  const headers = getContentPlanningHeaders_();
  const headerMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  return headers.every((header, index) => headerMap[header] === index + 1);
}

function migrateContentRecord_(record) {
  const migrated = {};
  getContentPlanningHeaders_().forEach((header) => {
    migrated[header] = record[header] || '';
  });
  migrated.Status = PHASE1.statusMap[record.Status] || record.Status || '';
  migrated['Current Owner'] = replaceLegacyTeamNameValue_(record['Current Owner'] || '');
  if (migrated.Status === 'Approved' && (!migrated['Current Owner'] || migrated['Current Owner'] === 'Brand Manager')) {
    migrated['Current Owner'] = 'Estefanie';
  }
  migrated['Assigned Filmer(s)'] = replaceLegacyTeamNameValue_(record['Assigned Filmer(s)'] || '');
  migrated['Assigned Editor'] = replaceLegacyTeamNameValue_(record['Assigned Editor'] || '');
  migrated['Assigned Reviewer'] = replaceLegacyTeamNameValue_(record['Assigned Reviewer'] || '');
  migrated['Brand Manager Feedback'] = record['Brand Manager Feedback'] || record[('Ab' + 'by') + ' Feedback'] || '';
  migrated.Brand = migrated.Brand || inferBrandFromContentId_(migrated['Content #']);
  migrated['Concept ID'] = migrated['Concept ID'] || inferConceptIdFromContentId_(migrated['Content #']);
  migrated['Dual Brand Set'] = migrated['Dual Brand Set'] || (migrated.Brand ? `${migrated.Brand} Only` : '');
  migrated['Original / Companion'] = migrated['Original / Companion'] || (migrated.Brand ? 'Single Brand' : '');
  migrated['Target Post Gap Days'] = migrated['Target Post Gap Days'] || '';
  migrated['Spacing Status'] = migrated['Spacing Status'] || '';
  migrated['Calendar Display'] = migrated['Calendar Display'] || buildCalendarDisplayValue_(migrated);
  return migrated;
}

function rebuildDependentViewTabs_(spreadsheet, columnMap, options) {
  options = options || {};
  rebuildCalendarViewTab_(spreadsheet, {
    sheetName: PHASE1.sheets.filmingCalendar,
    eyebrow: 'CONTENT OPERATIONS  /  FILMING VIEW',
    title: '1B. Filming Calendar',
    subtitle: 'Read-only calendar view of filming dates from 1A. Content Planning. Use workflow dialogs for updates.',
    dateHeader: 'Filming Date',
    eventType: 'filming',
  }, columnMap);

  rebuildCalendarViewTab_(spreadsheet, {
    sheetName: PHASE1.sheets.postingCalendar,
    eyebrow: 'CONTENT OPERATIONS  /  POSTING VIEW',
    title: '1C. Posting Calendar',
    subtitle: 'Read-only calendar view of posting dates from 1A. Content Planning. HP/VVS rows stay brand-specific for scheduling.',
    dateHeader: 'Posting Date',
    eventType: 'posting',
  }, columnMap);

  if (options.includeKanban !== false && typeof buildKanbanView === 'function') {
    buildKanbanView();
  }
}

function rebuildCalendarViewTab_(spreadsheet, config, columnMap) {
  const sheet = spreadsheet.getSheetByName(config.sheetName) || spreadsheet.insertSheet(config.sheetName);
  const c = CONTENT_PLANNING_STYLE;
  const width = 8;
  const controls = getCalendarControls_(sheet, spreadsheet);
  const eventsByDate = getCalendarEventsByDate_(spreadsheet, columnMap, config);
  const days = getCalendarDays_(controls.startDate);
  ensureColumns_(sheet, width);
  ensureRows_(sheet, 18);
  if (sheet.getMaxColumns() > width) {
    sheet.deleteColumns(width + 1, sheet.getMaxColumns() - width);
  }
  if (sheet.getMaxRows() > 18) {
    sheet.deleteRows(19, sheet.getMaxRows() - 18);
  }

  sheet.clear();
  sheet.clearFormats();
  sheet.clearNotes();
  sheet.clearConditionalFormatRules();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).clearDataValidations();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).breakApart();
  sheet.getRange(1, 1, sheet.getMaxRows(), width).setBackground(c.bg).setFontFamily('Inter');

  sheet.getRange(1, 1, 1, width).merge()
    .setValue(config.eyebrow)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.muted)
    .setBackground(c.bg)
    .setVerticalAlignment('bottom');
  sheet.getRange(2, 1, 1, width).merge()
    .setValue(config.title)
    .setFontFamily('Playfair Display')
    .setFontSize(20)
    .setFontWeight('bold')
    .setFontColor(c.dark)
    .setBackground(c.bg)
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
  sheet.getRange(3, 1, 1, width).merge()
    .setValue(config.subtitle)
    .setFontFamily('Inter')
    .setFontSize(9)
    .setFontStyle('italic')
    .setFontColor(c.muted)
    .setBackground(c.bg);

  buildCalendarControls_(sheet, controls);
  buildCalendarGrid_(sheet, days, eventsByDate, controls, config);
}

function buildCalendarControls_(sheet, controls) {
  const c = CONTENT_PLANNING_STYLE;
  sheet.getRange(4, 1, 1, 8)
    .setBackground(c.surface)
    .setFontFamily('Inter')
    .setFontSize(9)
    .setVerticalAlignment('middle')
    .setBorder(true, true, true, true, true, false, c.rule, SpreadsheetApp.BorderStyle.SOLID);

  sheet.getRange(4, 1).setValue('Calendar Start Date').setFontStyle('italic').setHorizontalAlignment('right');
  sheet.getRange(4, 2).setValue(controls.startDate).setNumberFormat('mmm d, yyyy').setFontWeight('bold').setHorizontalAlignment('center').setBackground(CONTENT_PLANNING_STYLE.white);
  sheet.getRange(4, 4).setValue('Highlight Date').setFontStyle('italic').setHorizontalAlignment('right');
  sheet.getRange(4, 5).setValue(controls.highlightDate || '').setNumberFormat('mmm d, yyyy').setHorizontalAlignment('center').setBackground(CONTENT_PLANNING_STYLE.white);
  sheet.getRange(4, 7).insertCheckboxes().setValue(controls.extraSpace === true);
  sheet.getRange(4, 8).setValue('Add extra space between lines').setFontWeight('bold');
}

function buildCalendarGrid_(sheet, days, eventsByDate, controls, config) {
  const c = CONTENT_PLANNING_STYLE;
  const weekdays = days.slice(0, 7).map((day) => Utilities.formatDate(day, Session.getScriptTimeZone(), 'EEEE'));
  sheet.getRange(6, 1).setValue('');
  sheet.getRange(6, 2, 1, 7).setValues([weekdays])
    .setBackground(c.dark)
    .setFontFamily('Roboto Mono')
    .setFontSize(8)
    .setFontWeight('bold')
    .setFontColor(c.bg)
    .setWrap(true)
    .setVerticalAlignment('middle')
    .setBorder(null, null, true, null, null, null, c.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);

  for (let week = 0; week < 5; week += 1) {
    const dateRow = 7 + (week * 2);
    const eventRow = dateRow + 1;
    sheet.getRange(dateRow, 1, 2, 1).merge()
      .setValue(`Week ${week + 1}`)
      .setBackground('#E7D2CF')
      .setFontColor(c.white)
      .setFontFamily('Roboto Mono')
      .setFontSize(10)
      .setFontWeight('bold')
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle')
      .setTextRotation(90);

    const weekDays = days.slice(week * 7, week * 7 + 7);
    const dateValues = weekDays.map((day) => Utilities.formatDate(day, Session.getScriptTimeZone(), 'MMM d'));
    const eventValues = weekDays.map((day) => {
      const key = calendarDateKey_(day);
      const lines = eventsByDate[key] || [];
      return lines.join(controls.extraSpace ? '\n\n' : '\n');
    });

    sheet.getRange(dateRow, 2, 1, 7).setValues([dateValues])
      .setBackground(c.surface)
      .setFontColor(c.dark)
      .setFontFamily('Inter')
      .setFontSize(9)
      .setFontWeight('bold')
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle')
      .setBorder(true, true, true, true, true, true, c.rule, SpreadsheetApp.BorderStyle.SOLID);
    sheet.getRange(eventRow, 2, 1, 7).setValues([eventValues])
      .setBackground(c.white)
      .setFontFamily('Inter')
      .setFontSize(9)
      .setFontColor(c.body)
      .setWrap(true)
      .setVerticalAlignment('top')
      .setBorder(true, true, true, true, true, true, c.rule, SpreadsheetApp.BorderStyle.SOLID);

    weekDays.forEach((day, index) => {
      if (controls.highlightDate && calendarDateKey_(day) === calendarDateKey_(controls.highlightDate)) {
        sheet.getRange(dateRow, index + 2)
          .setBackground(c.pink)
          .setFontColor(c.white);
      }
    });
  }

  sheet.getRange(1, 1, 18, 8).setVerticalAlignment('middle');
  sheet.setFrozenRows(6);
  sheet.setHiddenGridlines(true);
  sheet.setColumnWidth(1, 52);
  for (let column = 2; column <= 8; column += 1) {
    sheet.setColumnWidth(column, 205);
  }
  sheet.setRowHeight(1, 22);
  sheet.setRowHeight(2, 34);
  sheet.setRowHeight(3, 26);
  sheet.setRowHeight(4, 28);
  sheet.setRowHeight(6, 28);
  [7, 9, 11, 13, 15].forEach((row) => sheet.setRowHeight(row, 24));
  [8, 10, 12, 14, 16].forEach((row) => sheet.setRowHeight(row, 116));
}

function getCalendarControls_(sheet, spreadsheet) {
  const existingStart = parseSheetDate_(safeGetDisplayValue_(sheet, 4, 2));
  const existingHighlight = parseSheetDate_(safeGetDisplayValue_(sheet, 4, 5));
  const existingExtra = safeGetValue_(sheet, 4, 7);
  return {
    startDate: existingStart || getFirstDayOfCurrentMonth_(spreadsheet),
    highlightDate: existingHighlight,
    extraSpace: existingExtra === true || String(existingExtra).toUpperCase() === 'TRUE',
  };
}

function getCalendarEventsByDate_(spreadsheet, columnMap, config) {
  const contentSheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const contentIdColumn = columnMap[PHASE1.coreHeaders.contentId];
  const lastDataRow = getLastContentDataRow_(contentSheet, contentIdColumn);
  const eventsByDate = {};
  if (lastDataRow < PHASE1.rows.contentDataStart) {
    return eventsByDate;
  }

  const rowCount = lastDataRow - PHASE1.rows.contentDataStart + 1;
  const range = contentSheet.getRange(PHASE1.rows.contentDataStart, 1, rowCount, contentSheet.getLastColumn());
  const values = range.getValues();
  const displayValues = range.getDisplayValues();
  values
    .map((row, index) => {
      const record = rowToContentRecord_(row, columnMap, PHASE1.rows.contentDataStart + index);
      applyCalendarDisplayFields_(record, displayValues[index], columnMap);
      return record;
    })
    .forEach((record) => {
      const date = parseSheetDate_(record[config.dateHeader]);
      if (!record.contentId || !date) {
        return;
      }
      const key = calendarDateKey_(date);
      if (!eventsByDate[key]) {
        eventsByDate[key] = [];
      }
      eventsByDate[key].push(buildCalendarEventText_(record, config.eventType));
    });

  Object.keys(eventsByDate).forEach((key) => {
    eventsByDate[key].sort();
  });
  return eventsByDate;
}

function applyCalendarDisplayFields_(record, displayRow, columnMap) {
  if (columnMap.Time && displayRow) {
    record.Time = displayRow[columnMap.Time - 1] || record.Time || '';
  }
}

function buildCalendarEventText_(record, eventType) {
  if (eventType === 'posting') {
    return [
      record.status || 'No status',
      formatCalendarTime_(record.Time),
      `[${record.contentId}]`,
      record.Brand || '',
      record['Platform(s)'] || '',
      truncateForCalendar_(record.Idea || ''),
    ].filter(Boolean).join(' - ');
  }

  return [
    record.status || 'No status',
    `[${record.contentId}]`,
    record.Brand || '',
    truncateForCalendar_(record.Idea || ''),
    record['Assigned Filmer(s)'] || '',
  ].filter(Boolean).join(' - ');
}

function getCalendarDays_(startDate) {
  const start = new Date(startDate.getTime());
  start.setHours(0, 0, 0, 0);
  return Array.from({ length: 35 }, (_, index) => {
    const date = new Date(start.getTime());
    date.setDate(start.getDate() + index);
    return date;
  });
}

function getFirstDayOfCurrentMonth_(spreadsheet) {
  const now = new Date();
  const timezone = spreadsheet.getSpreadsheetTimeZone();
  const year = Number(Utilities.formatDate(now, timezone, 'yyyy'));
  const month = Number(Utilities.formatDate(now, timezone, 'M'));
  return new Date(year, month - 1, 1);
}

function calendarDateKey_(dateValue) {
  const date = parseSheetDate_(dateValue);
  return date ? Utilities.formatDate(date, Session.getScriptTimeZone(), 'yyyy-MM-dd') : '';
}

function truncateForCalendar_(value) {
  const text = String(value || '').trim();
  return text.length > 90 ? `${text.slice(0, 87)}...` : text;
}

function formatCalendarTime_(value) {
  if (!value) {
    return '';
  }
  if (Object.prototype.toString.call(value) === '[object Date]' && !Number.isNaN(value.getTime())) {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), 'h:mm a');
  }
  if (typeof value === 'number' && Number.isFinite(value)) {
    const milliseconds = Math.round(value * 24 * 60 * 60 * 1000);
    return Utilities.formatDate(new Date(milliseconds), 'UTC', 'h:mm a');
  }

  const text = String(value).trim();
  const timeMatch = text.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*([AP]M)?$/i);
  if (!timeMatch) {
    return text;
  }
  let hour = Number(timeMatch[1]);
  const minute = timeMatch[2];
  const suffix = timeMatch[3] ? timeMatch[3].toUpperCase() : hour >= 12 ? 'PM' : 'AM';
  if (!timeMatch[3] && hour > 12) {
    hour -= 12;
  }
  if (hour === 0) {
    hour = 12;
  }
  return `${hour}:${minute} ${suffix}`;
}

function safeGetDisplayValue_(sheet, row, column) {
  return row <= sheet.getMaxRows() && column <= sheet.getMaxColumns()
    ? sheet.getRange(row, column).getDisplayValue()
    : '';
}

function safeGetValue_(sheet, row, column) {
  return row <= sheet.getMaxRows() && column <= sheet.getMaxColumns()
    ? sheet.getRange(row, column).getValue()
    : '';
}

function rebuildCalendarViewsSilently_() {
  const spreadsheet = SpreadsheetApp.getActive();
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  rebuildDependentViewTabs_(spreadsheet, columnMap, { includeKanban: false });
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
  applyWarningValidationToColumn_(sheet, columnMap['Content Pillar'], validationRowCount, configRanges['Content Pillars']);
  applyWarningValidationToColumn_(sheet, columnMap.Format, validationRowCount, configRanges.Formats);
  applyWarningValidationToColumn_(sheet, columnMap.Goal, validationRowCount, configRanges.Goals);
  applyValidationToColumn_(sheet, columnMap.Brand, validationRowCount, configRanges.Brands);
  applyValidationToColumn_(sheet, columnMap['Dual Brand Set'], validationRowCount, configRanges['Dual Brand Sets']);
  applyValidationToColumn_(sheet, columnMap['Original / Companion'], validationRowCount, configRanges['Original / Companion']);
  applyValidationToColumn_(sheet, columnMap.Subject, validationRowCount, configRanges.Subjects);
  applyValidationToColumn_(sheet, columnMap['Moment / Action'], validationRowCount, configRanges['Moment Actions']);
  applyValidationToColumn_(sheet, columnMap['Spacing Status'], validationRowCount, configRanges['Spacing Statuses']);
  applyValidationToColumn_(sheet, columnMap.Priority, validationRowCount, configRanges.Priorities);
  applyValidationToColumn_(sheet, columnMap['Platform(s)'], validationRowCount, configRanges.Platforms);
  applyCheckboxValidationToColumn_(sheet, columnMap.Instagram, validationRowCount);
  applyCheckboxValidationToColumn_(sheet, columnMap.TikTok, validationRowCount);
  applyCheckboxValidationToColumn_(sheet, columnMap.YouTube, validationRowCount);
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
  return getLastContentDataRowForStart_(sheet, contentIdColumn, PHASE1.rows.contentDataStart);
}

function getLastContentDataRowForStart_(sheet, contentIdColumn, firstDataRow) {
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

function applyWarningValidationToColumn_(sheet, column, rowCount, sourceRange) {
  if (!column || !sourceRange) {
    return;
  }

  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sourceRange, true)
    .setAllowInvalid(true)
    .build();

  sheet.getRange(PHASE1.rows.contentDataStart, column, rowCount, 1).setDataValidation(rule);
}

function applyWarningValidationToColumnForStart_(sheet, column, firstRow, rowCount, sourceRange) {
  applyValidationToColumnForStart_(sheet, column, firstRow, rowCount, sourceRange, true);
}

function applyValidationToColumnForStart_(sheet, column, firstRow, rowCount, source, allowInvalid) {
  if (!column || !source) {
    return;
  }

  const builder = SpreadsheetApp.newDataValidation();
  if (Array.isArray(source)) {
    builder.requireValueInList(source, true);
  } else {
    builder.requireValueInRange(source, true);
  }

  const rule = builder
    .setAllowInvalid(Boolean(allowInvalid))
    .build();
  sheet.getRange(firstRow, column, rowCount, 1).setDataValidation(rule);
}

function applyCheckboxValidationToColumn_(sheet, column, rowCount) {
  if (!column) {
    return;
  }
  sheet.getRange(PHASE1.rows.contentDataStart, column, rowCount, 1).insertCheckboxes();
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
