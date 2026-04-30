# PRD: Google Workspace Marketing Content Automation System V1

## 1. Product Overview

### Product Name

Marketing Content Workflow Automation System

### Primary Goal

Create a Google Workspace-based workflow system that helps the marketing/content team move content ideas from idea intake to planning, filming, editing, review, approval, scheduling, and posting with clear ownership, status tracking, and fewer manual follow-ups.

### Proposed Stack

* **Google Sheets** as the main database
* **Google Apps Script** as the automation layer
* **Google Sheets custom menu** as the main user entry point
* **Google Apps Script modal dialogs and optional sidebars** as the team-facing interface inside the spreadsheet
* **Google Drive** for raw footage and edited video file storage
* **Optional later:** Google Calendar integration for filming/posting schedule visibility
* **Optional later:** Gmail or Google Chat notifications

### V1 Philosophy

V1 should improve workflow clarity without overbuilding. The spreadsheet should remain the source of truth, and the team should interact through controlled Google Sheets menus, pop-up dialogs, and optional sidebars so they do not have to manually edit many workflow columns.

V1 should focus on:

* Clear statuses
* Clear ownership
* Simple handoff menu actions
* Required fields at each stage
* File/folder URL tracking
* Brand Manager approval workflow
* Estefanie editing workflow
* Hillary/Thao filming workflow
* Posting schedule assignment

V1 should not attempt to fully automate file uploads, social media posting, AI content generation, or complex performance reporting.

---

## 2. Current Workbook Analysis

### 2.1 Relevant Tabs Reviewed

#### 1A. Content Planning

This is the current master content database. It contains the primary content records and should remain the core database table for V1.

Current visible columns include:

* Content #
* Content Pillar
* Format
* Goal
* Idea
* Subject
* Moment / Action
* Filming Date
* Posting Date
* Time
* Status
* Caption
* CTA
* Hashtags
* Copy/Paste
* Notes
* Custom Text 2

Additional columns to the right are used for calendar formulas and specific post views.

Current statuses observed include:

* Posted
* Draft
* Proposed
* Editing
* Revision 1
* Revision 2
* Filming
* IDEA / Idea

Current issue: statuses are not fully standardized. For example, `IDEA` and `Idea` both appear. The workflow needs one controlled list of statuses to avoid broken Kanban logic and unclear ownership.

#### 1B. Filming Calendar

This appears to be a calendar-style view driven primarily from 1A. It is useful for visually seeing filming dates and planned content.

Current issue: because it is formula/view-based, it is not ideal as the main place for users to update workflow status. It should remain a view, not the main operating surface.

#### 1C. Posting Calendar

This appears to be a posting calendar view, also driven primarily from 1A. It shows posting dates, times, status, captions, CTA, hashtags, and copy/paste fields.

Current issue: it is helpful for visibility, but approval and scheduling decisions should be captured through controlled web app actions, then reflected here.

#### 1D. Kanban View

This tab is already structured as a formula-driven Kanban board. It groups records from 1A by status and includes smart filters/sorting.

Current Kanban column headers include:

* Idea
* Proposed
* Planned
* Filmed
* Editing
* Ready
* Scheduled
* Posted

Current issue: the Kanban board is a great visual, but it is not yet a workflow engine. The system needs controlled status transitions, stage-specific required fields, owners, timestamps, and version tracking through Apps Script menu actions and dialogs.

#### 3. Idea Brain Dump

This tab appears to hold raw ideas, inspiration links, content pillar, format, goal, and a `Planned` checkbox/flag.

Current issue: this is useful as an intake or idea backlog, but V1 should avoid splitting core workflow across too many tabs. Ideas can either continue to start here and be promoted into 1A, or the web app can create new idea records directly in 1A.

#### 4 Content Queue

This tab appears to hold content queue items and carousel-specific queue items. It includes content pillar, format, goal, title, and posted flag.

Current issue: it looks like a backlog/reference queue rather than the active production workflow. V1 should not depend on this tab unless the team actively uses it.

#### 5. Settings

This tab already contains configurable values such as content pillars, formats, goals, statuses, and custom labels.

Current issue: this should become the controlled configuration source for dropdowns, allowed statuses, team members, roles, and workflow stage rules.

---

## 3. Problem Statement

The current content workflow is spread across spreadsheets and manual team communication. The sheet already tracks content records, but it does not fully manage the handoff process between Brand Manager, Hillary, Thao, and Estefanie.

The main operational problems are:

* Team members may not know what is assigned to them
* Statuses can be inconsistent
* Raw footage links may not be submitted in a standardized place
* Editing versions are not clearly tracked
* Brand Manager’s feedback/approval loop is not fully structured
* Posting schedule decisions are not cleanly connected to final approval
* The spreadsheet works as a database, but direct manual editing is not structured enough for day-to-day workflow management

---

## 4. Users & Roles

### 4.1 Admin / Management

Likely users: Vivianne, leadership, or system admin.

Responsibilities:

* View the full pipeline
* Review overdue work
* Check bottlenecks
* Edit system settings if needed
* Override assignments/statuses when necessary

### 4.2 Brand Manager

Primary user: Brand Manager

Responsibilities:

* Add or refine content ideas
* Move ideas into planning
* Create shot list and filming instructions
* Assign filming to Hillary or Thao
* Assign editing to Estefanie
* Review edited versions
* Provide feedback
* Approve final content
* Schedule posting date/time

### 4.3 Marketing Intern / Filmer

Primary users: Hillary and Thao

Responsibilities:

* View assigned filming tasks
* See filming date, shot list, instructions, props, location, and reference links
* Film content
* Upload raw footage to Google Drive manually
* Submit raw footage folder/file URL in the web app
* Mark filming complete

### 4.4 Editor

Primary user: Estefanie

Responsibilities:

* View assigned editing tasks
* Access raw footage URL and editing brief
* Start editing version 1
* Submit edited version 1 URL
* Mark version 1 complete
* Receive Brand Manager feedback if revisions are needed
* Start and complete version 2 or later versions as needed
* Submit final edited URL

---

## 5. V1 Workflow

### 5.1 Recommended V1 Statuses

Use one standardized status list. These statuses should replace inconsistent versions like `IDEA` vs `Idea`.

Recommended V1 statuses:

1. **Idea**
2. **Planned**
3. **Assigned to Film**
4. **Filming Complete**
5. **Editing V1**
6. **Ready for Brand Manager Review**
7. **Revision Requested**
8. **Editing V2+**
9. **Approved**
10. **Scheduled**
11. **Posted**
12. **Paused / Backlog**

Optional simplification if V1 feels too much:

1. Idea
2. Planned
3. Assigned to Film
4. Filmed
5. Editing
6. Needs Review
7. Revision Requested
8. Approved
9. Scheduled
10. Posted

Recommendation: use the detailed version in the database, but group some statuses visually in the Kanban UI.

### 5.2 Workflow Steps

#### Step 1: Idea Intake

Anyone can submit an idea, but primarily Brand Manager will manage this.

Required fields:

* Idea title
* Content pillar
* Format
* Goal
* Inspiration link, optional
* Notes, optional
* Created by

System action:

* Create new row in 1A
* Assign next Content #
* Set status to `Idea`
* Set created timestamp

#### Step 2: Planning

Brand Manager reviews the idea and turns it into a planned content task.

Required fields before moving forward:

* Shot list
* Filming instructions
* Assigned filmer: Hillary, Thao, or both
* Target filming date
* Editing brief, optional but preferred
* Reference/inspiration links, optional
* Props/location notes, optional

System action:

* Update status to `Assigned to Film`
* Store assigned filmer
* Store planned by = Brand Manager
* Store planned timestamp
* Show task in filmer dashboard

#### Step 3: Filming

Hillary/Thao sees assigned filming tasks in their dashboard.

Required fields to complete filming:

* Raw footage Google Drive URL
* Confirmation that files were uploaded
* Optional notes from filmer

System action:

* Update status to `Filming Complete`
* Store raw footage URL
* Store filmed by
* Store filming completed timestamp
* Move task to Estefanie’s editing queue

#### Step 4: Editing Version 1

Estefanie starts editing.

Actions available:

* Start V1 Edit
* Submit V1 Edit

Required fields when submitting V1:

* Edited video URL
* Optional editor notes

System action:

* When Estefanie clicks `Start V1 Edit`, status becomes `Editing V1`
* When Estefanie submits V1 URL, status becomes `Ready for Brand Manager Review`
* Store V1 start timestamp
* Store V1 completed timestamp
* Store V1 edited file URL
* Assign review owner to Brand Manager

#### Step 5: Brand Manager Review

Brand Manager reviews the edited video.

Actions available:

* Approve
* Request Revision

If approved:

* Status becomes `Approved`
* Final approved video URL is set
* Task moves to scheduling queue

If revision requested:

* Brand Manager must enter feedback notes
* Status becomes `Revision Requested`
* Task returns to Estefanie

Required fields for revision request:

* Feedback notes
* Optional priority/urgency

#### Step 6: Revision Editing

Estefanie sees revision tasks.

Actions available:

* Start Next Revision
* Submit Next Revision

System action:

* Increment edit version number
* Status becomes `Editing V2+`
* Store version number
* Store edited URL for that version
* Send task back to Brand Manager review after submission

V1 recommendation: store only current version fields in 1A plus keep a separate revision log tab for detailed history.

#### Step 7: Approval and Scheduling

Once Brand Manager approves the content, she schedules it.

Required fields:

* Posting date
* Posting time
* Platform: Instagram, TikTok, YouTube, or multiple
* Caption
* CTA
* Hashtags
* Final video URL

System action:

* Update status to `Scheduled`
* Write posting date and time to 1A
* Reflect in 1C Posting Calendar

#### Step 8: Posted

After content is posted, Brand Manager or Estefanie marks it as posted.

Required fields:

* Posted platform URL, optional for V1 but strongly recommended
* Posted date/time

System action:

* Update status to `Posted`
* Store posted timestamp
* Optionally store live post URL

---

## 6. Recommended Database Structure

### 6.1 Keep 1A as Master Content Table

1A should remain the core database, but add workflow columns instead of relying only on the existing planning/content fields.

### 6.2 Recommended New Columns for 1A

Add these columns after the existing core content fields or in a new clean database tab that mirrors 1A.

#### Identity & Ownership

* Content ID / Content #
* Created Date
* Created By
* Current Owner
* Assigned Filmer
* Assigned Editor
* Assigned Reviewer
* Brand / Account, optional if HPUSA and VVS both use this later

#### Planning Fields

* Shot List
* Filming Instructions
* Props / Setup Notes
* Location
* Reference Links
* Editing Brief
* Priority

#### File Tracking

* Raw Footage Folder URL
* Edited V1 URL
* Edited V2 URL
* Edited V3 URL
* Final Approved Video URL
* Cover Photo URL, optional
* Asset Folder URL, optional

#### Workflow Control

* Status
* Previous Status
* Last Updated By
* Last Updated Timestamp
* Stage Started Timestamp
* Stage Completed Timestamp
* Revision Count
* Brand Manager Feedback
* Editor Notes
* Blocker / Issue

#### Scheduling & Posting

* Posting Date
* Posting Time
* Platform(s)
* Caption
* CTA
* Hashtags
* Scheduled By
* Posted URL
* Posted Timestamp

### 6.3 Recommended Supporting Tabs

#### Settings

Use existing `5. Settings`, expanded to include:

* Allowed statuses
* Team members
* Roles
* Platforms
* Content pillars
* Formats
* Goals
* Default posting times
* Status transition rules

#### Activity Log

New tab.

Purpose:
Track every important action for audit/history.

Fields:

* Timestamp
* Content #
* Action
* Old Status
* New Status
* User
* Notes
* URL submitted, if applicable

#### Revision Log

New tab.

Purpose:
Avoid stuffing unlimited version history into 1A.

Fields:

* Timestamp
* Content #
* Version Number
* Submitted By
* Edited File URL
* Feedback From Brand Manager
* Decision: Approved / Revision Requested
* Notes

#### Team Dashboard Data, optional

New hidden/helper tab if needed.

Purpose:
Apps Script can use this for cached dashboard metrics, but V1 may not need it.

---

## 7. Spreadsheet Dialog Interface Requirements

### 7.1 General UI Requirements

V1 should not use a separate web app. Instead, the system should run inside the existing Google Sheet using Apps Script custom menus, modal dialogs, and optional sidebars.

The goal is to keep users inside the spreadsheet while preventing messy manual edits.

The spreadsheet interface should include:

* A custom menu called `Content Workflow`
* Role-based actions from the menu
* Dialog boxes for required inputs
* Optional sidebar for task queues
* Validation before status changes
* Automatic updates to 1A, 1B, 1C, 1D, Activity Log, and Revision Log
* Clear success/error messages after each action

### 7.2 Recommended Custom Menu Structure

Recommended top-level menu: **Content Workflow**

Menu items:

* Add New Idea
* Promote Idea to Planning
* Assign Filming Task
* Submit Raw Footage
* Start Editing
* Submit Edited Version
* Review / Approve Content
* Schedule Content
* Mark as Posted
* Open My Task Queue
* Admin Override

### 7.3 Dialog-Based Workflow

#### Add New Idea Dialog

Used by Brand Manager, Estefanie, Hillary, Thao, or management.

Writes to:

* `3. Idea Brain Dump`

Fields:

* Submitted by
* Content pillar
* Format
* Goal
* Idea/title
* Subject
* Moment/action
* Inspiration link
* Notes

System action:

* Creates new idea row
* Generates Idea ID
* Sets Brand Manager Review Status to `Needs Review`
* Adds submitted timestamp

#### Promote Idea to Planning Dialog

Used primarily by Brand Manager.

Reads from:

* Selected row in `3. Idea Brain Dump`

Writes to:

* `1A. Content Planning`

Fields:

* Confirm/edit content pillar
* Confirm/edit format
* Confirm/edit goal
* Confirm/edit idea/title
* Shot list
* Filming instructions
* Assigned filmer(s)
* Target filming date
* Editing brief
* Priority

System action:

* Creates new content row in 1A
* Generates next Content #
* Sets status to `Assigned to Film` or `Planned`, depending on whether filmer/date are filled
* Writes promoted Content # back to Idea Brain Dump
* Logs promotion in Activity Log

#### Assign Filming Task Dialog

Used by Brand Manager.

Fields:

* Content #
* Assigned filmer(s): Hillary, Thao, or Hillary + Thao
* Filming date
* Shot list
* Filming instructions
* Props/location notes

System action:

* Updates 1A
* Sets status to `Assigned to Film`
* Updates current owner to assigned filmer(s)
* Makes the task appear in each relevant filmer queue

#### Submit Raw Footage Dialog

Used by Hillary or Thao.

Fields:

* Content #
* Raw footage Google Drive URL
* Filming notes
* Confirm filming complete

System action:

* Requires raw footage URL
* Sets status to `Filming Complete`
* Sets current owner to Estefanie
* Adds filming completed timestamp
* Logs action

#### Start Editing Dialog

Used by Estefanie.

Fields:

* Content #
* Confirm start editing

System action:

* Sets status to `Editing V1` or `Editing V2+`
* Adds edit start timestamp
* Logs action

#### Submit Edited Version Dialog

Used by Estefanie.

Fields:

* Content #
* Edited video URL
* Editor notes

System action:

* Requires edited video URL
* Updates edited version URL
* Increments or confirms version number
* Sets status to `Ready for Brand Manager Review`
* Sets current owner to Brand Manager
* Writes to Revision Log
* Logs action

#### Review / Approve Content Dialog

Used by Brand Manager.

Fields:

* Content #
* Decision: Approve or Request Revision
* Feedback notes, required if requesting revision
* Approved video URL, optional if approving current edited version

System action if approved:

* Sets status to `Approved`
* Sets final approved video URL
* Sets current owner to Brand Manager for scheduling
* Logs action

System action if revision requested:

* Sets status to `Revision Requested`
* Sets current owner to Estefanie
* Stores Brand Manager feedback
* Writes to Revision Log
* Logs action

#### Schedule Content Dialog

Used by Brand Manager.

Fields:

* Content #
* Platform(s)
* Posting date
* Posting time
* Caption
* CTA
* Hashtags

System action:

* Requires platform, posting date, posting time, caption, CTA, and hashtags
* Sets status to `Scheduled`
* Updates 1A
* Reflects in 1C Posting Calendar
* Sets current owner to Estefanie for posting
* Logs action

#### Mark as Posted Dialog

Used by Estefanie.

Fields:

* Content #
* Platform posted
* Live post URL, optional but recommended
* Posted notes, optional

System action:

* Sets status to `Posted`
* Adds posted timestamp
* Stores live post URL if provided
* Logs action

### 7.4 Optional Sidebar: My Task Queue

V1 can include a sidebar inside the Google Sheet.

The sidebar should allow a user to select their name and see a filtered list of tasks assigned to them.

Recommended sidebar sections:

* Brand Manager: Needs Planning, Needs Review, Approved but Not Scheduled
* Hillary: Assigned Filming Tasks
* Thao: Assigned Filming Tasks
* Estefanie: Ready to Edit, Revisions Needed, Scheduled to Post
* Admin: All Active Tasks and Overdue Tasks

Each task should show:

* Content #
* Idea/title
* Status
* Current owner
* Assigned filmer(s)
* Filming date
* Posting date
* Relevant file URLs
* Next recommended action

For V1, the sidebar is helpful but not required if dialogs and filtered sheet views are enough.

---

## 8. Status Transition Rules

### 8.1 Allowed Transitions

| From                  | To                    | User                 | Required Fields                                       |
| --------------------- | --------------------- | -------------------- | ----------------------------------------------------- |
| Idea                  | Planned               | Brand Manager/Admin           | Content pillar, format, idea title                    |
| Planned               | Assigned to Film      | Brand Manager/Admin           | Assigned filmer, filming date, shot list/instructions |
| Assigned to Film      | Filming Complete      | Hillary/Thao/Admin    | Raw footage URL                                       |
| Filming Complete      | Editing V1            | Estefanie/Admin      | None beyond raw footage URL                           |
| Editing V1            | Ready for Brand Manager Review | Estefanie/Admin      | Edited V1 URL                                         |
| Ready for Brand Manager Review | Revision Requested    | Brand Manager/Admin           | Feedback notes                                        |
| Ready for Brand Manager Review | Approved              | Brand Manager/Admin           | Final video URL or approved version URL               |
| Revision Requested    | Editing V2+           | Estefanie/Admin      | None                                                  |
| Editing V2+           | Ready for Brand Manager Review | Estefanie/Admin      | Edited revision URL                                   |
| Approved              | Scheduled             | Brand Manager/Admin           | Posting date, posting time, platform, caption         |
| Scheduled             | Posted                | Brand Manager/Estefanie/Admin | Posted URL optional in V1                             |

### 8.2 Validation Rules

The system should block users from advancing if required fields are missing.

Examples:

* Cannot mark filming complete without a raw footage URL
* Cannot submit edit complete without edited video URL
* Cannot request revision without feedback notes
* Cannot schedule without date/time/platform
* Cannot post without at least confirming platform

---

## 9. Automation Requirements

### 9.1 Apps Script Functions

#### Content Creation

* `createContentIdea(formData)`
* Adds a new row to 1A
* Generates next Content #
* Sets status to Idea

#### Content Planning

* `updatePlanningDetails(contentId, planningData)`
* Saves shot list, instructions, assigned filmer, filming date, and notes

#### Status Updates

* `advanceStatus(contentId, action, payload)`
* Validates required fields
* Updates status
* Updates owner
* Updates timestamps
* Writes to Activity Log

#### File URL Submission

* `submitRawFootage(contentId, rawFootageUrl, notes)`
* `submitEditedVersion(contentId, versionUrl, notes)`

#### Review Actions

* `approveContent(contentId, approvedUrl)`
* `requestRevision(contentId, feedbackNotes)`

#### Scheduling

* `scheduleContent(contentId, postingDate, postingTime, platforms)`

#### Task Queue Data

* `getTaskQueue(role, userName, filters)`
* Returns relevant tasks for the optional sidebar or filtered sheet views

### 9.2 Notifications for V1

V1 can start without notifications if the spreadsheet task queues and menu actions are used daily.

Recommended V1.1 notification layer:

* Email or Google Chat message when a task moves to someone’s queue
* Daily summary of overdue tasks
* Brand Manager review queue reminder
* Estefanie editing queue reminder

### 9.3 Google Drive Integration

V1 should not force direct upload through the web app.

Instead:

* Team manually uploads files to Google Drive
* Team pastes Drive folder/file URL into the web app
* Apps Script validates that the field is not empty and looks like a URL

V2 can add folder creation or Drive picker integration.

---

## 10. Calendar Requirements

### 10.1 V1

Keep filming and posting calendars as spreadsheet views, fed from 1A.

The web app should update 1A fields:

* Filming Date
* Posting Date
* Posting Time
* Status

Then 1B and 1C should continue to reflect those dates.

### 10.2 V2

Add Google Calendar event creation:

* Create filming event when Brand Manager assigns filming date
* Create posting reminder/event when content is scheduled
* Update event if date changes
* Store Google Calendar event ID in 1A

V2 calendar sync should only be added after the basic web app workflow is stable.

---

## 11. Kanban Requirements

### 11.1 Keep 1D as Spreadsheet Kanban View

Since V1 will not use a standalone web app, the existing 1D Kanban View should remain the main visual pipeline view.

The Kanban tab should continue to group content by workflow stage, but users should not manually drag cards or manually edit formula output areas.

Recommended Kanban columns:

* Idea
* Planned
* Assigned to Film
* Filming Complete
* Editing
* Brand Manager Review
* Revision Requested
* Approved
* Scheduled
* Posted

Each Kanban card should show:

* Content #
* Idea/title
* Content pillar
* Format
* Current owner
* Assigned filmer(s)
* Filming date
* Posting date
* Status
* Raw footage URL indicator
* Edit version indicator

### 11.2 Action Flow from Kanban

Users can visually reference 1D, but workflow changes should happen through the `Content Workflow` custom menu/dialogs.

Example:

* Brand Manager sees a card in `Ready for Brand Manager Review`.
* Brand Manager selects the corresponding row in 1A or enters the Content # in the Review dialog.
* Brand Manager approves or requests revision through the dialog.
* The script updates 1A.
* 1D automatically refreshes through formulas.

---

## 12. MVP Feature Scope

### Must Have for V1

* Spreadsheet-native custom menu and dialog-based workflow actions
* Add new content idea
* Update planning fields
* Assign filmer
* Submit raw footage URL
* Assign/edit by Estefanie
* Submit edited video URL
* Brand Manager review and feedback loop
* Approval button
* Schedule posting date/time
* Mark as posted
* Activity log
* Controlled status list
* Required-field validation
* 1A stays updated as the database

### Should Have for V1

* Revision log
* Overdue labels
* Simple search/filter or optional `My Task Queue` sidebar
* Current owner field
* Last updated timestamp
* Basic metrics: count by status and owner

### Not in V1

* Automatic social media posting
* Direct file upload through Apps Script dialogs
* Complex Google Calendar sync
* AI caption generation
* Automated performance reporting
* Multi-brand complexity unless absolutely needed
* Advanced approval chains beyond Brand Manager

---

## 13. Recommended Implementation Plan

### Phase 1: Clean Database Foundation

Goal: make 1A safe and usable as a database.

Tasks:

* Standardize status list
* Add missing workflow columns
* Create Activity Log tab
* Create Revision Log tab
* Expand Settings tab
* Decide whether Idea Brain Dump remains separate or gets replaced by web app idea intake

### Phase 2: Build Spreadsheet Dialog Interface

Goal: create controlled menu actions and dialog forms inside the Google Sheet.

Tasks:

* Create Apps Script custom menu
* Create dialog forms for each major workflow action
* Read and update rows from 1A and Idea Brain Dump
* Add optional role/user selector for task queues
* Add simple filtered task sidebar if needed

### Phase 3: Add Workflow Actions

Goal: allow users to move content through the workflow.

Tasks:

* Add action buttons based on status and role
* Validate required fields
* Update 1A
* Write to Activity Log
* Update current owner

### Phase 4: Add Editing & Revision Loop

Goal: support Estefanie/Brand Manager back-and-forth without confusion.

Tasks:

* Track version count
* Submit edited version URL
* Request revision with required feedback
* Store revision details in Revision Log
* Return task to Estefanie until approved

### Phase 5: Add Scheduling Workflow

Goal: Brand Manager can approve and schedule content.

Tasks:

* Add scheduling form
* Require posting date/time/platform
* Update 1A
* Reflect in 1C Posting Calendar
* Mark as scheduled/posted

### Phase 6: Polish & Workflow QA

Goal: reduce errors before team rollout.

Tasks:

* Test all statuses
* Test missing required fields
* Test all role views
* Test actual team workflow with 3–5 content records
* Add simple admin override

---

## 14. Key Risks & Recommendations

### Risk 1: Too Many Statuses

Too many statuses can confuse the team.

Recommendation:
Use detailed statuses internally, but group them visually in the dashboard.

### Risk 2: Spreadsheet Formula Breakage

The current workbook contains formula-heavy calendar and Kanban views. Direct team edits can break formulas.

Recommendation:
Only allow web app edits to core database columns. Protect formula/view tabs.

### Risk 3: File URL Discipline

If team members forget to paste Google Drive URLs, Estefanie cannot begin work efficiently.

Recommendation:
Block `Filming Complete` unless raw footage URL is submitted.

### Risk 4: Revision History Gets Messy

Multiple edit versions can clutter 1A.

Recommendation:
Keep current/latest edit fields in 1A, but store every version in a Revision Log tab.

### Risk 5: Building Too Much in V1

The system can become overcomplicated if V1 includes calendar sync, direct upload, notifications, AI generation, and performance tracking all at once.

Recommendation:
Start with the workflow dashboard and sheet updates. Add integrations after team adoption.

---

## 15. Confirmed V1 Workflow Decisions

### 15.1 Idea Intake Location

New ideas should be submitted through the web app, but they should flow into **3. Idea Brain Dump** first, not directly into 1A.

Reason:

* This keeps raw, early-stage ideas separate from the active production database.
* It prevents 1A from becoming cluttered with unapproved or half-baked ideas.
* Brand Manager can review, clean up, and promote ideas into 1A when they are ready for planning.

V1 requirement:

* The web app should include an `Add New Idea` form.
* Submitted ideas should write to `3. Idea Brain Dump`.
* The Idea Brain Dump tab should be cleaned up or restructured so its columns are similar enough to 1A that promoted ideas can transfer cleanly later.

Recommended Idea Brain Dump columns:

* Idea ID
* Submitted Date
* Submitted By
* Content Pillar
* Format
* Goal
* Idea / Title
* Subject
* Moment / Action
* Inspiration Link
* Notes
* Brand Manager Review Status
* Promote to 1A?
* Promoted Content #
* Promoted Timestamp

### 15.2 Filming Queues

Hillary and Thao should have separate filming queues.

V1 requirement:

* Hillary should only see tasks assigned to Hillary, plus tasks assigned to both Hillary and Thao.
* Thao should only see tasks assigned to Thao, plus tasks assigned to both Hillary and Thao.
* If a task is assigned to both, the task card should clearly show `Assigned to: Hillary + Thao`.

Recommended field:

* `Assigned Filmer(s)` as a multi-select or comma-separated value.

### 15.3 Editing Assignment

Estefanie should automatically receive every task once filming is complete.

V1 requirement:

* When Hillary or Thao submits the raw footage URL and marks filming complete, the system should automatically set the next owner to Estefanie.
* The task should appear in Estefanie’s editing queue immediately.
* Brand Manager does not need to manually assign Estefanie for each task in V1.

### 15.4 Scheduling Requirements

Caption, CTA, and hashtags are required before content can be marked as `Scheduled`.

V1 requirement:

* Brand Manager must enter or confirm caption, CTA, hashtags, platform, posting date, and posting time before scheduling.
* The system should block the `Mark as Scheduled` action if any of those fields are missing.

### 15.5 Posted Responsibility

Estefanie is responsible for marking content as posted.

V1 requirement:

* Once a task is scheduled, it should appear in Estefanie’s posting queue.
* Estefanie can mark it as `Posted` after the content has gone live.
* Optional but recommended: Estefanie should paste the live post URL when marking as posted.

### 15.6 Remaining Open Questions

1. How many revision rounds should V1 support visibly: V1/V2/V3 only, or unlimited through a Revision Log?
2. When Brand Manager approves a video, should the approved edited URL automatically become the final approved video URL?
3. Should the system track platform separately for Instagram, TikTok, and YouTube in V1, or just one combined `Platform(s)` field?
4. Should the web app include a management-only admin override, or should all users be able to edit any content record in V1?

---

## 16. Recommended V1 Decision Defaults

If we want the simplest working V1, use these defaults:

* Ideas are entered through the web app into `3. Idea Brain Dump`, then Brand Manager promotes selected ideas into 1A.
* Brand Manager owns planning, assignment, review, approval, and scheduling.
* Hillary and Thao each have separate filming queues. Tasks assigned to both appear in both queues.
* Estefanie automatically receives every task after filming is marked complete and raw footage URL is submitted.
* V1 supports visible fields for V1, V2, and V3, plus a Revision Log for additional history.
* Brand Manager approval sets the final approved video URL.
* Brand Manager marks content as Scheduled; Estefanie marks content as Posted.
* Platforms are tracked in one multi-select text field for V1.
* Caption, CTA, hashtags, platform, posting date, and posting time are required before marking as Scheduled.
* Admin override is available only in Admin view.

---

## 17. Success Metrics

V1 should be considered successful if:

* Team members know exactly what tasks are assigned to them
* Raw footage URLs are consistently captured
* Estefanie can easily see what is ready to edit
* Brand Manager can easily see what needs review
* Revisions are tracked clearly
* Approved content can be scheduled without hunting through messages
* 1A remains the clean master database
* 1B/1C/1D remain useful views without being manually edited
* Fewer follow-up messages are needed to ask, “Where is this content?” or “Who has this next?”

---

## 18. Immediate Next Step

Before coding, confirm the V1 workflow decisions in Section 15. After that, the first build phase should be database cleanup: standardize statuses, add workflow columns, and create Activity Log + Revision Log tabs. Once the database structure is stable, the Apps Script custom menu, dialogs, and optional sidebar can be built on top of it.
