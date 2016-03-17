---
layout: page
title: Version Control
permalink: /version-control/
weight: 6
parent: General
subnav:
  - Git Workflow
  - Branch Naming
---
## Git Workflow

**For Support & Maintenance**

* Refer: [GitFlow](https://github.com/nvie/gitflow)

**For End-End Development projects**

* Fork the main project repository
* Create a feature branch and perform work
* Submit a merge request of that feature branch to the main repository for peer review.
* The reviewer reviews - accepts/rejects the merge request.
* Commits should be atomic to the maximum extent possible. If extraneous commits become necessary, they should be in a different branch and rewritten before being merged with any of the main branches.
* Rebase your branches off latest dev before submitting for review or merge. Learn to use git rebase with squashing options.

## Branch Naming

* No hard-and-fast rules here, but ideally your branches are named after Curamine tickets, with the understanding that sometimes you need to submit
code that doesn't relate to an existing Curamine ticket.
* If you forget and don't name your branch after a ticket, just be sure to reference the ticket in the commit or pull request message.
