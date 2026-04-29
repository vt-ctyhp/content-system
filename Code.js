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

function showWorkflowDialog_(action) {
  const template = HtmlService.createTemplateFromFile('WorkflowDialog');
  template.action = action;
  const title = getWorkflowActionConfig_(action).title;
  const html = template.evaluate()
    .setWidth(560)
    .setHeight(680);
  SpreadsheetApp.getUi().showModalDialog(html, title);
}

function getWorkflowDialogModel(action) {
  const config = getWorkflowActionConfig_(action);
  const spreadsheet = SpreadsheetApp.getActive();
  const options = getWorkflowOptions_(spreadsheet);
  const selectedContent = getSelectedContentContext_(spreadsheet);
  const selectedIdea = getSelectedIdeaContext_(spreadsheet);

  return {
    action,
    title: config.title,
    submitLabel: config.submitLabel,
    fields: config.fields,
    options,
    selectedContent,
    selectedIdea,
    defaults: buildWorkflowDefaults_(action, selectedContent, selectedIdea),
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
    defaultUser: 'Abby',
  };
}

function getTaskQueue(userName) {
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
  const normalizedUser = String(userName || '').trim();

  return values
    .map((row, index) => rowToContentRecord_(row, columnMap, PHASE1.rows.contentDataStart + index))
    .filter((record) => record.contentId && record.status !== 'Posted')
    .filter((record) => taskBelongsInQueue_(record, normalizedUser))
    .slice(0, 100);
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
  const columnMap = getHeaderMap_(contentSheet, PHASE1.rows.contentHeader);
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
    'Current Owner': status === 'Assigned to Film' ? payload.assignedFilmer : 'Abby',
    'Assigned Filmer(s)': payload.assignedFilmer || '',
    'Assigned Editor': 'Stephanie',
    'Assigned Reviewer': 'Abby',
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
  requireFields_(payload, ['contentId', 'assignedFilmer', 'filmingDate', 'shotList', 'filmingInstructions']);
  updateContentRecord_(payload.contentId, {
    'Assigned Filmer(s)': payload.assignedFilmer,
    'Filming Date': payload.filmingDate,
    'Shot List': payload.shotList,
    'Filming Instructions': payload.filmingInstructions,
    'Props / Setup Notes': payload.propsSetupNotes || '',
    Location: payload.location || '',
    'Current Owner': payload.assignedFilmer,
    Status: 'Assigned to Film',
    'Stage Started Timestamp': new Date(),
  }, 'ASSIGN_FILMING', payload.propsSetupNotes || '', '');

  return successResult_(`Content #${payload.contentId} assigned to ${payload.assignedFilmer}.`);
}

function submitRawFootage_(payload) {
  requireFields_(payload, ['contentId', 'rawFootageUrl']);
  if (payload.confirmComplete !== 'true') {
    throw new Error('Confirm filming is complete before submitting raw footage.');
  }

  updateContentRecord_(payload.contentId, {
    'Raw Footage Folder URL': payload.rawFootageUrl,
    'Editor Notes': payload.filmingNotes || '',
    'Current Owner': 'Stephanie',
    Status: 'Filming Complete',
    'Stage Completed Timestamp': new Date(),
  }, 'SUBMIT_RAW_FOOTAGE', payload.filmingNotes || '', payload.rawFootageUrl);

  return successResult_(`Raw footage submitted for Content #${payload.contentId}.`);
}

function startEditing_(payload) {
  requireFields_(payload, ['contentId']);
  if (payload.confirmStart !== 'true') {
    throw new Error('Confirm editing has started before submitting.');
  }

  const record = getContentRecordById_(payload.contentId);
  const nextStatus = record.status === 'Revision Requested' ? 'Editing V2+' : 'Editing V1';
  updateContentRecord_(payload.contentId, {
    Status: nextStatus,
    'Current Owner': 'Stephanie',
    'Stage Started Timestamp': new Date(),
  }, 'START_EDITING', '', '');

  return successResult_(`Content #${payload.contentId} moved to ${nextStatus}.`);
}

function submitEditedVersion_(payload) {
  requireFields_(payload, ['contentId', 'editedVideoUrl']);
  const record = getContentRecordById_(payload.contentId);
  const version = getNextEditVersion_(record);
  const urlHeader = version === 1 ? 'Edited V1 URL' : version === 2 ? 'Edited V2 URL' : 'Edited V3 URL';

  updateContentRecord_(payload.contentId, {
    [urlHeader]: payload.editedVideoUrl,
    'Editor Notes': payload.editorNotes || '',
    'Current Owner': 'Abby',
    Status: 'Ready for Abby Review',
    'Stage Completed Timestamp': new Date(),
  }, 'SUBMIT_EDITED_VERSION', payload.editorNotes || '', payload.editedVideoUrl);

  appendRevisionLog_(payload.contentId, version, getEffectiveUserEmail_(), payload.editedVideoUrl, '', 'Submitted', payload.editorNotes || '');
  return successResult_(`Edited version V${version} submitted for Content #${payload.contentId}.`);
}

function reviewApproveContent_(payload) {
  requireFields_(payload, ['contentId', 'decision']);
  const decision = payload.decision;
  const record = getContentRecordById_(payload.contentId);

  if (decision === 'Request Revision') {
    requireFields_(payload, ['feedbackNotes']);
    const nextRevisionCount = Number(record['Revision Count'] || 0) + 1;
    updateContentRecord_(payload.contentId, {
      Status: 'Revision Requested',
      'Current Owner': 'Stephanie',
      'Revision Count': nextRevisionCount,
      'Abby Feedback': payload.feedbackNotes,
      'Stage Completed Timestamp': new Date(),
    }, 'REQUEST_REVISION', payload.feedbackNotes, '');
    appendRevisionLog_(payload.contentId, nextRevisionCount + 1, getEffectiveUserEmail_(), '', payload.feedbackNotes, 'Revision Requested', '');
    return successResult_(`Revision requested for Content #${payload.contentId}.`);
  }

  if (decision !== 'Approve') {
    throw new Error(`Unsupported review decision: ${decision}`);
  }

  const approvedUrl = payload.approvedVideoUrl || record['Edited V3 URL'] || record['Edited V2 URL'] || record['Edited V1 URL'];
  if (!approvedUrl) {
    throw new Error('Approved video URL is required if no edited version URL exists on the content row.');
  }

  updateContentRecord_(payload.contentId, {
    Status: 'Approved',
    'Current Owner': 'Abby',
    'Final Approved Video URL': approvedUrl,
    'Stage Completed Timestamp': new Date(),
  }, 'APPROVE_CONTENT', '', approvedUrl);
  appendRevisionLog_(payload.contentId, getLatestEditVersion_(record), getEffectiveUserEmail_(), approvedUrl, '', 'Approved', '');
  return successResult_(`Content #${payload.contentId} approved.`);
}

function scheduleContent_(payload) {
  requireFields_(payload, ['contentId', 'platforms', 'postingDate', 'postingTime', 'caption', 'cta', 'hashtags']);
  updateContentRecord_(payload.contentId, {
    'Platform(s)': payload.platforms,
    'Posting Date': payload.postingDate,
    Time: payload.postingTime,
    Caption: payload.caption,
    CTA: payload.cta,
    Hashtags: payload.hashtags,
    'Scheduled By': getEffectiveUserEmail_(),
    'Current Owner': 'Stephanie',
    Status: 'Scheduled',
    'Stage Completed Timestamp': new Date(),
  }, 'SCHEDULE_CONTENT', '', '');

  return successResult_(`Content #${payload.contentId} scheduled.`);
}

function markContentPosted_(payload) {
  requireFields_(payload, ['contentId', 'platformPosted']);
  updateContentRecord_(payload.contentId, {
    Status: 'Posted',
    'Current Owner': '',
    'Posted URL': payload.livePostUrl || '',
    'Posted Timestamp': new Date(),
    'Stage Completed Timestamp': new Date(),
  }, 'MARK_POSTED', payload.postedNotes || `Posted to ${payload.platformPosted}.`, payload.livePostUrl || '');

  return successResult_(`Content #${payload.contentId} marked as posted.`);
}

function adminOverrideContent_(payload) {
  requireFields_(payload, ['contentId', 'status', 'notes']);
  updateContentRecord_(payload.contentId, {
    Status: payload.status,
    'Current Owner': payload.currentOwner || '',
  }, 'ADMIN_OVERRIDE', payload.notes, '');

  return successResult_(`Admin override applied to Content #${payload.contentId}.`);
}

function getWorkflowOptions_(spreadsheet) {
  return {
    statuses: getConfigListValues_(spreadsheet, 'Statuses'),
    teamMembers: getConfigListValues_(spreadsheet, 'Team Members'),
    roles: getConfigListValues_(spreadsheet, 'Roles'),
    filmerAssignments: getConfigListValues_(spreadsheet, 'Filmer Assignment Values'),
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

function buildWorkflowDefaults_(action, selectedContent, selectedIdea) {
  const defaults = {};

  if (selectedContent && selectedContent.contentId) {
    defaults.contentId = selectedContent.contentId;
    defaults.caption = selectedContent.Caption || '';
    defaults.cta = selectedContent.CTA || '';
    defaults.hashtags = selectedContent.Hashtags || '';
    defaults.postingDate = selectedContent['Posting Date'] || '';
    defaults.postingTime = selectedContent.Time || '';
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
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
  const row = findContentRowById_(sheet, columnMap, contentId);
  const values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
  return rowToContentRecord_(values, columnMap, row);
}

function updateContentRecord_(contentId, updates, action, notes, urlSubmitted) {
  const spreadsheet = SpreadsheetApp.getActive();
  const sheet = requireSheet_(spreadsheet, PHASE1.sheets.content);
  const columnMap = getHeaderMap_(sheet, PHASE1.rows.contentHeader);
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

function writeContentValues_(sheet, row, columnMap, valuesByHeader) {
  Object.keys(valuesByHeader).forEach((header) => {
    if (columnMap[header]) {
      sheet.getRange(row, columnMap[header]).setValue(valuesByHeader[header]);
    }
  });
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

function appendRevisionLog_(contentId, versionNumber, submittedBy, editedFileUrl, feedbackFromAbby, decision, notes) {
  const revisionLog = ensureRevisionLog_(SpreadsheetApp.getActive());
  appendRows_(revisionLog, [[
    new Date(),
    contentId || '',
    versionNumber || '',
    submittedBy || '',
    editedFileUrl || '',
    feedbackFromAbby || '',
    decision || '',
    notes || '',
  ]]);
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

  if (record.currentOwner && record.currentOwner.indexOf(userName) !== -1) {
    return true;
  }

  if (userName === 'Hillary' || userName === 'Tao') {
    return record['Assigned Filmer(s)'] && record['Assigned Filmer(s)'].indexOf(userName) !== -1;
  }

  if (userName === 'Stephanie') {
    return ['Filming Complete', 'Revision Requested', 'Scheduled', 'Editing V1', 'Editing V2+'].indexOf(record.status) !== -1;
  }

  if (userName === 'Abby') {
    return ['Idea', 'Planned', 'Ready for Abby Review', 'Approved'].indexOf(record.status) !== -1;
  }

  if (userName === 'Admin' || userName === 'Vivianne') {
    return true;
  }

  return false;
}

function ensureIdeaBrainDumpColumns_(sheet) {
  const headers = {
    10: 'Submitted Date',
    11: 'Submitted By',
    12: 'Subject',
    13: 'Moment / Action',
    14: 'Notes',
    15: 'Abby Review Status',
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
