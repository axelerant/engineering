---
layout: page
title: Release Management
permalink: /release-management/
weight: 7
parent: General
subnav:
  - Development Releases
  - Staging Releases
  - Production Releases
---
## Development Releases

A release to the dev (integration) environment can/should occur multiple times per sprint at regular intervals for the team to test merged code against current production database and files. Review the projspace/minnal manual for understanding how to deploy releases across various instances.

**Development Release Steps**

1. Backup the development database
2. Copy the production database to dev
3. Copy the production files to dev
4. Deploy branch to projspace cloud branch running in dev environment.
5. Run drush and post-deployment updates on dev environment.
6. Test.

## Staging Releases

A release to the staging (QA) environment should occur once or more per sprint at regular scheduled times with the client for the client to test tickets that have passed internal QA processes.

**Staging Release Steps**

1. Days before release
    * Schedule staging release timing with `client`.
2. Stage Release
    1. Backup the staging database
    2. Copy the production database to staging
    3. Copy the production files to staging
    4. Deploy relevant branch to the staging environment.
    5. Run drush and post-deployment updates on staging environment.
    6. Test tickets
    7. Transition deployed tickets that pass internal QA to RESOLVED state (must be In Progress first) and assign to Project Manager
3. Cut a tag from staging for future production deployment
    1. Create a tag based on the staged projspace branch. Tags follow the format v[major].[minor].[release] and should be consistent with releases in the Deployment Notes:
        * [major] - This is the major release number. It stays at 0 during development and will be incremented to 1 once the site goes live. This should only increase when a major change to the site is released.
        * [minor] - This number represents the current sprint. It is not 1:1 in its number, but only increases once a new sprint cycle is being worked on.
        * [release] - This number represents the current release for the current [minor] (sprint) release. Unless the current sprint is a long one, this number will most likely never exceed .10.
    2. Publish the tag to projspace cloud repo but do not switch any environments to this tag
4. Update Deployment Notes document
    1. Move the current red release to orange
    2. Create a new placeholder incremented red release
5. Post-release Communication
    1. Prepare deployment summary message (an email with link to more details in a news post). Curamine news post should contain:
        1. Version number being deployed
        2. List of tickets being addressed
        3. Any related information or steps needed to be taken post-deployment.

## Production Releases

A release to the production content editing environment should occur only when the client has approved a staging release ready for production and all tickets contained in the release have passed through client QA team and are approved.

***Production Release Steps***

1. Hours before release
    1. Schedule release timing with `client`
    2. Get approval to ship out changes
2. Production release
    1. Backup the production database
    2. Switch production to the appropriate approved tag
    3. Wait for tag to deploy to all production server
    4. Run updates as mentioned in the deployment notes
    5. Test
3. Update Deployment Notes document
    * Move the relevant orange release(s) to green
4. Post-release Communication
    * Prepare deployment summary news post:
        * Version number being deployed
        * List of tickets being addressed
        * Any related information or steps needed to be taken post-deployment.
