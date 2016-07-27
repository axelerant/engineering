---
layout: page
title: Quality Assurance
permalink: /qa/
weight: 4
parent: QA
subnav:
  - QA Processes
  - Curamine Report Tracking process
  - BDD with Behat
---

## QA Processes

1. ### Pre-Iteration / Sprint Zero

    * While the project is being kicked off and the requirements are being finalized by the Business Analysts (BA), QA needs to be involved along with Dev.
    * QA needs to go through each requirement in details and visualize the scenarios in which the initial/draft requirements will be tested.
    * Queries that are assigned to BAs through Curamine/Emails/Jira/Standup calls, need to be documented and logged in the Query log (template creation is in progress).

2. ### Test Estimation

    * After going through the initial rounds of requirements analysis and clarifications, QA needs to provide Test estimation in terms of man-hours needed to complete Functional and Regression testing (if needed).
    * Test estimation needs to be provided by gauging the complexity of the requirements and also its scope.
    * It should consider the number of environments (for eg: test and staging environment) in which the testing would occur.
    * It also needs to consider the number of web browsers and/or devices that the web portal needs to be tested.

3. ### Test Plan Creation

    During the pre-iteration/sprint zero phase, QA needs to analyze the requirements as a whole and create a Test Plan. During every iteration of the sprint (for eg: sprint retrospective), the document needs to be updated and refined.

    Before the project retrospective, Test Plan document needs to be baselined.

    The document needs to contain the following sections:

      1. Change History
      2. Approvals/Status Reporting
      3. Document Objective
      4. Project Description/ Definition
      5. Test Scope
          1. In Scope
          2. Out of Scope
      6. Test Strategy:
          1. Entry and Exit Criteria
          2. Suspension and Resumption Criteria
          3. Automation Strategy (if applicable)
          4. Testing Risk & Mitigation Plan
          5. Testing Assumptions and Dependencies
          6. Environments Needs and Tool Setup
          7. Test Deliverables and Timelines

    [Test Plan Template link](https://docs.google.com/a/axelerant.com/document/d/1Az4iOLXiaxNJlbuKnVwcHQN8YjFbe6MIj4xUzoChxSQ/edit#heading=h.m5ghldw4hfe)

4. ### Test Plan Review and Feedback

    Test Plan document needs to be reviewed with the Project Managers and Dev Leads. After the first round of review & feedback, the baselined Test Plan needs to be shared with BAs/Client for review. Sign off should be obtained from the BAs/Client.

5. ### Query Logging

    Query can be logged at any phase of the project before the Test Cases are sent to Client/Business Analysts for review and sign off. In other words, ideally the ambiguity/query needs to be logged during the following phases:

    * Inception/Pre Iteration
    * Test Plan Creation
    * Test Plan Review and Feedback
    * Test Case Creation
    * Test Case Review (Internal/Peer Review)

    The Query log template needs to be consisted of the following fields and currently is in the form of an excel.

    * **Subject** [Mandatory field] - Query Title / Subject
    * **Requirement/Ticket Number** [Mandatory field]
    * **Phase**  [Mandatory field] - Following are the values of the field:
      Requirements Analysis
      Test Planning
      Test Case Creation
    * **Description** [Mandatory field] - Detailed description of the query. Document referred. Any additional information.
    * **Status** [Mandatory field] -
        * After the query is raised, then QA/Dev should set the status as New.
        * After the query is assigned to Client/Business Analysts, then QA/Dev should set the status as Assigned.
        * While the query is being reviewed, then the Client/BAs should set the status as In Progress.
        * After the query is resolved, then the Client/BAs should set the status as Resolved and assign it back to QA/Dev.
        * After confirming that the resolution provided for the query is complete in its entirety then the QA/Dev should close the query by setting its status to Closed.
        * If the query isn’t resolved then QA/Dev should assign the query to Client/BA and set the status to Assigned. Again the cycle continues from point ‘c’ (i.e., In Progress state).
        * At any stage, if it is confirmed from Business/Dev that the query is invalid, then the status needs to be changed to Invalid.
            ![QA flowchart](images/index-flowchart-qa.png)
        * **Parent ticket** [Non-mandatory] - Link existing query, ticket or bug (if needed).
        * **Assignee**  [Mandatory field] - Name of the person to whom the query is assigned.
        * **Query Severity** [Mandatory field] – Following are the values of this field:
          - Show Stopper
          - Major
          - Minor
        * **Priority** [Mandatory field] - Following are the values of this field:
          - Urgent
          - High
          - Normal
          - Low
        * **Target Version** [Non-mandatory field for QA] - This field is used for tracking purposes. Following are the values of this field:
          - 20 Current Milestone
          - 30 Project Backlog
          - 40 Closed Requests
          - UAT
        * **Start date** [Auto-populated field]
        * **Due date** [Non-Mandatory field]
        * **Resolution** [Mandatory field when the state is Resolved] - Detailed description regarding Query’s resolution.
        * **Files** [Non-Mandatory field] - Any attachment that needs to be linked to the query (For e.g. requirement document).
        * **%age Done**  [Non-mandatory] - Automated field that will reflect 100% when the query is closed.

    [Query Log Template link](https://docs.google.com/a/axelerant.com/spreadsheets/d/1kjC23TIgw5N7PVaSiyzMbdDSbxdB7T1duHulCGR77yI/edit)

6. ### Continuous Discussion and Feedback

    Continuous discussion with Project Manager and Dev Leads regarding the initial set of Requirement tickets that will be fixed. This will be helpful for QA to plan and prioritize the Test case creation and would be able to test the tickets at the earliest after being deployed.

    Continuous discussion with Dev Leads and Developers to understand the Requirements of the tickets so that all the scenarios and flows are covered for the respective requirement tickets.  All ambiguities related to the requirements needs to be documented in the Query log.

7. ### Test Case Creation

    After the requirements are baselined, Test Cases need to be created covering positive and negative scenarios. Test cases need to be mapped to the respective Requirement tickets (i.e., ID). Test Cases should consist of following sections and need to be created in an excel format (Relevant points for Testcase creation are from i to xiv):

    1. **Requirement ID_Testcase ID** -\\
        For e.g., TestReq01_TC01 (Requirement ID = Curamine/JIRA ticket number)
    2. **Subject** - For eg:
        - Subject of the Requirement ID present in Curamine/JIRA\\
          "Or"
        - Input the Use Case Name / Document here
    3. **High Level Test Scenario**\\
        Sample High level test scenario:
        - Input numeric values in the Test1 page and the user should be able to navigate to the Test2 page (positive scenario).
        - Input alphanumeric values in the Test1 page and user should be unable to navigate to the Test2 page (negative scenario).
    4. **Category** - Type of Test case - Manual, Automation
    5. **Status** - Following are the values of the field:
        - New
        - In Progress
        - Closed
        - Deferred
    6. **Priority** - Following are the values of the field:
        - 4-Critical
        - 3-High
        - 2-Medium
        - 1-Low
    7. **Environment** - Mention the environment in which Test execution would take place:
        - Dev
        - Test
        - Staging
    8. **Precondition/Prerequisite** -\\
        Sample Prerequisite:
        - Credentials of Admin user should be active.
        - The endpoints of the system should be working.
    9. **Steps**\\
        Sample Steps:
        - As an author, go to /node/add/project
        - Fill out fields
        - Click 'Save'
    10. **Expected Result**\\
        Sample Expected Result
        - All field listings, field types, field values, field validation matches document at https://test.com/attachments/download
        - Node is saved successfully
    11. **Test Data** - Test data requirements needed to execute the Test Case.
    12. **Link to the Automated script** - If its a manual testcase, the value of this field would be N/A. If its an automated testcase, the value of this field needs to be populated.
    13. **Testcase Build date**
    14. **Testcase Build by** - QA member's name
    15. **Testcase Reviewed by** - Reviewer's name
    16. **Test Result** - Outcome of the Testcase executed:
        - If the expected and actual test execution outcome matches, then the Test Result = Pass
        - If the expected and actual test execution outcome doesn't matches, then the Test Result = Fail
    17. **Execution date**
    18. **Executed by** - QA member's name
    19. **Comments** -  For example:
        - Linked Bug
        - Test execution description can be provided (i.e., the number of users, the number of browsers to be tested,etc.,)

    [Test Case and Execution Document link](https://docs.google.com/a/axelerant.com/spreadsheet/ccc?key=0AtQab-usIdz_dDA3akdYQ0wtY3NSN2taNkRqeFdUNnc&usp=drive_web)

8. ### Test Case Review and Feedback

    Test Case document needs to be reviewed with the Project Managers and Dev Leads. After the first round of review & feedback, the baselined Test Case document needs to be shared with BAs/Client for review. Sign off should be obtained from the BAs/Client.

9. ### Dev/Test Environment Readiness

    Dev needs to successfully test the code fix first in Dev environment and then request QA to verify the code fix in Dev environment.

    After the QA has successfully tested the fix in Dev environment, Dev needs to push the code fix to QA/Test Environment for testing.

    From Quality Control (Audit perspective), Dev and QA both should maintain test steps and screenshots/evidences w.r.t testing the code fix in Dev environment.

10. ### Test Execution (Pass)

    During test execution, test documentation/evidence should be done in form of screenshots. The evidences (screenshots) need to be uploaded in the respective requirement ticket in Curamine/Jira along with the Acceptance criteria. The screenshot also needs to be documented in a Word doc/excel format with respect to the Requirement ticket.

11. ### Test Execution (Fail)

    During test execution, if a requirement ticket fails then appropriate bug reproduction steps, Expected Result, Actual Result along with evidences (screenshots) needs to be mentioned in the tool Curamine/Jira and assigned back to Dev. These evidences need to be documented in Word doc/excel format.

    For both points 10 & 11, the template that needs to be used for Test execution is Test Case and Execution Document link\\
    (Relevant columns are Test Result, Execution date and Executed by).

12. ### [Bug Logging](#curamine-report-tracking-process)

13. ### Bug Retesting

    After a bug is fixed, the Dev needs to assigns it to QA for testing. If the bug is successfully retested then the evidences (screenshots) needs to be uploaded in the respective requirement ticket in Curamine/Jira along with the Acceptance criteria. If bug retest fails, then appropriate bug reproduction steps along with evidences (screenshots) needs to be mentioned in the tool Curamine/Jira and assigned back to Dev. In both the cases, the evidences need to be documented in Word doc/excel format.

14. ### Regression Testing

    After all the requirement tickets are successfully tested, test cases related to critical and high priority functionality needs to be tested in the QA environment. These evidences need to be documented in Word doc/excel format.

15. ### QA Sign off

    After completing the Functional and Regression Testing, the QA provides sign off, i.e., the code is functionally stable and is ready to be deployed in Staging.

16. ### Staging Testing

    After the code is deployed in Staging Environment, the test cases related to critical and high priority functionality needs to be tested. These evidences need to be documented in Word doc/excel format.

17. ### Staging Sign off

    After completing Staging Testing, the QA provides sign off, i.e., the code is functionally stable and is ready to be deployed in Production.

18. ### QC Audit

    Within the Project folder in the Google Drive, an QA folder needs to be created.

    Auditor would be verifying the following points after project completion:

    1. Valid Queries logged in Curamine. The format of the queries is as per defined standard in QA Guide.
    2. All versions of Test Plan are present in Project folder's QA folder. The format of the Test Plan is as per defined standard in QA Guide.\\
      Note: After the Test case tracker (Redcase) is refined in Curamine, the Test case creation audit would be done via Curamine.
    3. Base-lined Test Plan version is reviewed by Client / Project Manager / Peer.
    4. All versions of Test scenarios and Test cases (functional and regression) are present in Project folder's QA folder. The format of the Test scenario and Test case is as per defined standard in QA Guide.\\
      Note: After the Redcase plugin is fixed in Curamine, the Test Execution audit would be done via Curamine.
    5. Base-lined Test scenarios and Test cases reviewed by Client / Project Manager / Peer.
    6. Test cases executed in correct template and uploaded in Project folder. The format of the Test execution is as per defined standard in QA Guide.
    7. Valid Bugs logged in Curamine. The format of the bugs is as per defined standard in QA Guide.
    8. Test results (screenshots) are uploaded during Test exeuction and Bug logging.
    9. UAT bugs raised by Client
    10. Production bugs raised by Client

    [QC Audit Checklist](https://docs.google.com/a/axelerant.com/spreadsheets/d/1QqBTUMwGUkEdlQ31NU4POA39WQr7Abbt9ffNHBx0Bjg/edit#gid=0)

## Curamine Report Tracking process

1. ### Bug Report template

    To define a tolerance level (a threshold) to the tests done by Quality Assurance and to have clear bug reports (as one of the metrics) on the projects.

    A threshold/tolerance of QA team to be 1 show-stopper; 3 major severity issues;  4 minor bugs to reject a build and send it back to the project team.

    In Curamine, a Quality bug report needs to incorporate the following:

    * **Subject Name** [Mandatory for QA to enter] - Bug Title / Subject
    * **Description** [Mandatory for QA to enter] - Concise description of the bug. Details such as user credentials, environment URLs, browsers, etc., need to be mentioned.
    * **Steps to Reproduce** [Mandatory for QA to enter] - Detailed steps to reproduce the bug.
    * **Requirement/Ticket Number** [Mandatory for QA to enter] - Requirement/Ticket number mapping to the requirement in Curamine or JIRA.\\
      If the ticket isn't mapping to any ticket number then please mention either of one of the values (N/A, Ad-hoc, Sanity)
    * **Status** [Mandatory for QA and Dev to enter] -
        - After the bug is raised, then QA should set the status as **New**.
        - After the bug is assigned to Dev, then QA should set the status as **Assigned**.
        - While the bug is being reviewed and a fix is being build, then Dev should set the status as **In Progress**.
        - After the Dev have deployed the fix in Dev environment and deployed the fix in  QA environment, then Dev should set the status as **Resolved**.
        - After QA have successfully re-tested the bug, then QA should set the status to **Retest Pass** and then change the status to **Closed**.
        - If the QA have failed the retest of the bug, then QA should set the status as **Retest Fail** and assign it back to Dev. Again the flow from “step c” (i.e., In Progress state) will be initiated.
        - At any stage, if it is confirmed from Business/Dev that the bug is invalid, then the status needs to be changed to **Invalid**.
        - If the Business confirms that a particular defect will be fixed later (for eg: in Sprint 10), then the defect status should be changed to **Deferred**.

          ![Bug status flowchart](images/index-flowchart-bug-status.png)
    * **Parent ticket** [Non-mandatory] - Mention if any existing bug is causing the current bug to occur.
    * **Assignee** [Mandatory for QA and Dev to enter] - Name of the person to whom the bug is assigned.
    * **Bug Severity** [Mandatory for QA to enter] – Following are the values of this field:
        - Show Stopper (Render a system unusable and has no workaround);
        - Major (A bug, which will cause an observable product failure or departure from requirements) and
        - Minor (A bug that will not cause a failure in execution of the product).
    * **Priority** [Mandatory for QA to enter] – Following are the values of this field:
        - Urgent
        - High
        - Normal
        - Low
    * **Bug Category** [Mandatory for QA to enter] – Following are the values of this field:\\
      Functional, Performance, Compatibility, Cosmetic, Security, Documentation and Environmental.
    * **Target Version** [Non-mandatory field for QA] - This field is used for tracking purposes. Following are the values of this field:
        - 20 Current Milestone
        - 30 Project Backlog
        - 40 Closed Requests
        - UAT
        - Production
    * **Start date** [Auto-populated field]
    * **Due date** [Non-Mandatory field]
    * **Files** [Mandatory for QA and Dev to enter] -
        - QA would be initially providing the screenshots/evidence while logging the bug.
        - After Dev has fixed the bug in Dev environment, then the Dev need to provide the screenshots/evidence.
        - After QA has Retest Pass or Retest Fail the bug, then the QA need to provide the screenshots/evidence.
    * **Frequency of occurrence** [Mandatory for QA to enter] – Regular behavior, Random behavior [can help visibility on reproducibility]
    * **Test case** [Non-Mandatory to be filled by QA] -
        - State the number of testcases impacted (i.e., failed or blocked w.r.t to the bug).
        - Mention the URL of the testcases uploaded in the project folder.
    * **Risks** [Non-mandatory]– To be filled in by developers when assigning the bug fixes back to QA. Risk can be another functionality which has been updated to fix the bug.
    * **Implementation notes**  [Non-mandatory] - To be filled in by developers when assigning the bug fixes back to QA
    * **QA Miss Analysis Status** [Mandatory field if a bug has been assigned by Client for analysis]\\
      Whenever an UAT / Production bug is found by client, then the bug needs to be assigned to Dev & QA to analyze that how did we miss the bug in QA environment.\\
      Values of the field can be: Y or N
    * **QA Miss Analysis Comments** [Mandatory field if a bug has been assigned by Client for analysis]
        - QA should analyze the bug and provide explanation that its an QA Miss = N (for eg: which means that this bug is not applicable to requirements in scope while testing; the bug can't be produced in QA Env because the test data available in UAT / Production can’t be replicated in QA Env).
        - If the bug is QA Miss = Y, then the QA should mention steps that will be done in future sprints, so that such kind of bugs are not missed in QA Env (for eg: building correct test cases to test the requirements completely; more test cases to the Regression test suite).
    * **Story Point** [Non-mandatory field for Dev] - Mention the complexity of the bug.
    * **%age Done**  [Non-mandatory] - Automated field that will reflect 100% when the bug is closed.
    * **Estimated Time** [Non-mandatory for Dev] - Estimated time needed by the Dev to fix the bug.

    [Bug Log Template link](https://docs.google.com/a/axelerant.com/spreadsheets/d/12YbQrEyW9UAzrcIY3COiZw3GGG18KRgP1K421o6OERc/edit)

2. ### Project Quality Health Reports

    _Inputs from Karuna Batra & Gursahib Suri (under review)_

    1. **Number of Bugs raised in the Project**:

        Group by status (New, Assigned, In Progress, Resolved, Retest Pass, Retest Fail, Closed, Invalid, Deferred) within each sprint and/or project.

        Bugs grouped by status “Closed” will provide the count of valid bugs raised w.r.t sprint/project.

        Bugs grouped by status “Invalid” will provide the count of invalid bugs raised w.r.t sprint/project. The invalid bugs can be analyzed for future sprints/projects, so that preventive measures can be taken to reduce the count of invalid bugs to bare minimum.

    2. **Bug severity report**:

        Grouped by severity (Showstopper, Major, Minor) and/or priority (Critical, High, Medium, Low)

    3. **Number of Queries raised in the Project**:

        Group by status (New, Assigned, In Progress, Resolved, Closed, Invalid) within each sprint and/or project.

        Queries grouped by status “Closed” will provide the count of valid queries raised w.r.t sprint/project.

        Queries grouped by status “Invalid” will provide the count of invalid  queries raised w.r.t sprint/project. The invalid  can be analyzed for future sprints/projects, so that preventive measures can be taken to reduce the count of invalid queries to bare minimum.

    4. **UAT Bug Report (QA Miss Analysis)**:

        Whenever an UAT bug is found by client, then the bug needs to be assigned to Dev & QA to analyze that how did we miss the bug in QA environment.

        QA should analyze the bug and provide explanation that its an QA Miss = N (for eg: which means that this bug is not applicable to requirements in scope while testing; the bug can't be produced in QA Env because the test data available in UAT can’t be replicated in QA Env).

        If the bug is QA Miss = Y, then the QA should mention steps that will be done in future sprints, so that such kind of bugs are not missed in QA Env (for eg: building correct test cases to test the requirements completely; more test cases to the Regression test suite).

        **Curamine fields**:

        * **QA Miss: Flag (Y or N)**:

            After an UAT bug is produced, then the bug will be assigned both to QA and Dev to investigate.

            QA needs to analyze the bug to determine if its an QA Miss or not an QA Miss. (In other words, it means to analyze that the UAT bug was a cause due to a miss in QA processes or it was due to conditions not in scope of QA).

        * **Root Cause**:

            If the bug is QA Miss = Y, then the Root Cause needs to be mentioned (for eg: Incorrect Test Case Creation, Incorrect Test Case Execution, Incorrect Requirement Understanding, Incorrect Test Coverage).

            If the QA Miss = N, then also the Root Cause needs to be mentioned (for eg: bug is out of scope of the agreed Requirements, Test data available in QA & UAT Env is different, QA had raised the same bug but was cancelled by Business Analyst).

        * **Action Plan**:

            If QA Miss = N, then this field is N/A.

            If QA Miss = Y, then preventive and corrective steps/measure have to be written to ensure that the root cause of the bug is not repeated in future projects/sprints.

    5. **Production Bug Report (QA Miss Analysis)**:

        Whenever a Production bug is found by client, then the bug needs to be assigned to Dev & QA to analyze that how did we miss the bug in QA environment.

        QA should analyze the bug and provide explanation that it’s an QA Miss = N (for eg: which means that this bug is not applicable to requirements in scope while testing; the bug can't be produced in QA Env because the testdata available in Production can’t be replicated in QA Env).

        If the bug is QA Miss = Y, then the QA should mention steps that will be done in future sprints, so that such kind of bugs are not missed in QA Env  (for eg: building correct test cases to test the requirements completely; more testcases to the Regression test suite)].

        **Curamine fields**:

        * **QA Miss: Flag (Y or N)**:

            After a Production bug is produced, then the bug will be assigned both to QA and Dev to investigate.

            QA needs to analyze the bug to determine if its an QA Miss or not an QA Miss. (In other words, it means to analyze that the Production bug was a cause due to a miss in QA processes or it was due to conditions not in scope of QA).

        * **Root Cause**:

            If the bug is QA Miss = Y, then the Root Cause needs to be mentioned (for eg: Incorrect Test Case Creation, Incorrect Test Case Execution, Incorrect Requirement Understanding, Incorrect Test Coverage).

            If the QA Miss = N, then also the Root Cause needs to be mentioned (for eg: bug is out of scope of the agreed Requirements, Test data available in QA & Production Env is different, QA had raised the same bug but was cancelled by Business Analyst).

        * **Action Plan**:

            If QA Miss = N, then this field is N/A.

            If QA Miss = Y, then preventive and corrective steps/measure have to be written to ensure that the root cause of the bug is not repeated in future projects/sprints.

## BDD with Behat

Behat is seeing a lot of progress in it’s integration with Drupal 7 and Drupal 8. There should be no reason to not use Behat to write scripts for functional testing.

### Requirements

* [BehatRunner](https://www.drupal.org/project/behatrunner) module.
* [Behat](https://github.com/Behat/Behat) - Base framework.
* Mink - For testing web applications.
* Goutte - For headless browser testing.
* Selenium / Zombies / others for JavaScript testing.
* [DrupalExtension](https://www.drupal.org/project/drupalextension) - To get started with most common Drupal based scenarios.

### Process

* Writing test cases can begin with or soon after development or site building.
* Goutte should be preferred in most cases for performance reasons.
* Scenarios which need Javascript functionality (such as AJAX), would need Selenium Server or similar for testing.

### Testing Methodologies

* Blackbox testing is preferred for testing read functionality (such as accessing pages, clicking links and verifying text).
* Drush or Drupal API drivers could be used to test create functionality (using @api tag).

### Writing Behat Test Scripts

- Create a custom module as per normal conventions (i.e., in sites/all/modules/custom directory)
- Edit `/sites/default/files/behatrunner/behat.yml` and update the following

~~~
wd_host: //'http://se.projspace.com:4444/wd/hub'
base_url: //'http://connections:connections@connections.comp.projspace.com'
~~~

Update settings.php with composer vendor & file dir path. Be sure it sites within sites/default/files

~~~
$conf['composer_manager_vendor_dir'] = 'sites/default/files/vendor';
$conf['composer_manager_file_dir'] = 'sites/default/files/';
~~~

Follow specific instructions from BehatRunner project page. Specifically, enable the module using drush7, NOT from Drupal admin pages / drush 6

~~~
drush7 en behatrunner -y
~~~

Run the tests using drush or BehatRunner UI. Quick drush commands:

~~~
drush7 brun
~~~

**Register modules**

~~~
drush7 brm
~~~

**Configuring Selenium**

At the time of this writing, we run Selenium Server in Grid mode and use version 2.44.0 on the hub and the node. This sometimes results in not being able to find the correct node when the Selenium driver requests another version. This can be fixed by specifying the version in use in the behat.yml file. If you are using behatrunner, the behat.yml file can be found at public://behatrunner. In case you are using behat directly, the behat.yml is placed in the same directory from where you run behat.

The behat.yml configuration needed is as follows:

~~~
    extensions:
      Behat\MinkExtension\Extension:
        goutte: ~
        selenium2:
          capabilities: { "selenium-version": "2.44.0"}
~~~

If you are using an alternative browser to test, use the settings as follows (for Chrome 38):

~~~
    extensions:
      Behat\MinkExtension\Extension:
        goutte: ~
        selenium2:
          browser: chrome
          capabilities: { "selenium-version": "2.44.0", "browser": "chrome", "browserName": "chrome", "version": "38", "browserVersion": "38"}
~~~

**Without BehatRunner**

Only follow the instructions here if you cannot use BehatRunner for any reason.

* Without BehatRunner, all steps to setup composer, behat configuration, drupalextension configuration, etc. should be done manually.
* Place tests in an appropriately named directory (e.g. behat-tests) outside document root. If it cannot be outside docroot, the convention is to place it in “sites/default/behat-tests”.
* Use composer to load Behat, Mink, DrupalExtension and other dependencies. See example below.
* Use a .gitignore to skip composer downloaded files from the repository. See example below.
* Import a behat.local.yml file from the main behat.yml file for loading instance specific configurations. An idea could be to use a template file (e.g. behat.local.yml.example) for this purpose. The instance specific configuration includes non-global settings like base URL, path to Drupal installation, Selenium server settings, etc.
* The features can be placed under a “features” directory within the behat-tests directory. Split up features as appropriate.
* The features are written using the Gherkin language. Refer the [documentation](http://docs.behat.org/en/latest/guides/1.gherkin.html) for syntax and examples.
* Include a FeatureContext.php as appropriate. For most simple test cases, this class can be empty, but it still has to be defined and extend from DrupalContext provided by DrupalExtension.

~~~
Example composer.json
{
    "require": {
        "drupal/drupal-extension": "1.0.*@stable"
    },
    "config": {
        "bin-dir": "bin/"
    }
}
~~~

~~~
Example .gitignore
bin
vendor
behat.local.yml
*.rej
test_releases
~~~

~~~
Example behat.yml
default:
  paths:
    features: 'features'
  extensions:
    Behat\MinkExtension\Extension:
      goutte: ~
      selenium2: ~
    Drupal\DrupalExtension\Extension:
      blackbox: ~
      region_map:
        Navigation: ".l-navigation"
# Import local settings.
imports:
  - behat.local.yml
~~~

~~~
Example behat.local.yml.example
default:
  extensions:
    Behat\MinkExtension\Extension:
      base_url: http://drupal.dev/
    Drupal\DrupalExtension\Extension:
      blackbox: ~
      # Setting the path to Drupal instead of using an alias.
      drush:
        root: /var/www/drupal/docroot
~~~

~~~
Example FeatureContext.php
<?php
use Drupal\DrupalExtension\Context\DrupalContext;

/**
 * Features context.
 */
class FeatureContext extends DrupalContext {

}
~~~

### Executing tests

Since we use composer to manage dependencies, Behat will not be present in the repository. We need to run composer update before running the tests for the first time and since the operation downloads and create files, this is not currently possible on Projspace.

These tests need to be run on the developer or tester machine using the following directions:

* Start with composer install the first time you run tests. You may run composer update occasionally to receive updates.
    * If you do not have composer installed, follow the steps at the Installation guide for `*nix` or Windows. It is recommended to install it globally, but if you cannot, replace `composer install` or `composer update` with `php composer.phar install` or `php composer.phar update` as directed in the documentation.
* While in behat-tests directory, run the tests by entering bin/behat. All the feature files in features directory will be executed sequentially and results shown on the screen.
References

### Reference

[BehatRunner Tutorial](https://www.youtube.com/watch?v=OIs376Qp5nI)

<http://www.phase2technology.com/blog/quality-assurance-for-complex-drupal-implementations/>

<http://www.slideshare.net/mediacurrent/five-easy-ways-to-qa-your-site>

<http://www.guru99.com/software-testing.html>

**Sites to understand Gherkins language:**

- <http://docs.behat.org/en/latest/guides/1.gherkin.html>
- <https://github.com/cucumber/cucumber/wiki/Gherkin>

**Testing your website with Behat, Mink, and Selenium**

<https://www.youtube.com/watch?v=9cYhnTojaHU>

**How to incrementally integrate QA in an Agile Development Process**

<https://www.youtube.com/watch?v=1q9FRZDLCOk>

**Agile in Practice: Automated Testing**

<https://www.youtube.com/watch?v=t6GgTWlkhXw&list=UUvjm4EYod_aaVNP5U6QSt3g>

**Agile in Practice: Test Driven Development**

<https://www.youtube.com/watch?v=uGaNkTahrIw>

**Behaviour Driven Development vs Test Driven Development**

<https://www.youtube.com/watch?v=mT8QDNNhExg>
