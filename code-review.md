---
layout: page
title: Code Review
permalink: /code-review/
weight: 9
parent: General
subnav:
  - Peer Code Review
  - Drupal Review Assist Tools
---

## Peer Code Review

* Peer review should be scheduled at the completion of a feature or a non-trivial bug-fix.
* Reviewing someone else’s code can almost be as intensive as writing code from scratch. The idea is to question everything from the approach to the implementation and also ensure best practices are being followed. Best practices range from naming conventions to usage of design patterns.
* Tools to simplify peer review include git diff, patch files, pull requests, etc… The process for each can be defined on a case-to-case basis.


## Process

**Requester**

* Log into [http://code.projspace.com](http://code.projspace.com)
* Browse to the particular project
* Create Merge request; each merge request has a set of commits. Refer [https://github.com/blog/1943-how-to-write-the-perfect-pull-request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)
* Assign the merge request to the peer for review.
* Nothing gets merged without a reviewed Merge Request

**Requestee**

* Read: [http://haacked.com/archive/2013/10/28/code-review-like-you-mean-it.aspx](http://haacked.com/archive/2013/10/28/code-review-like-you-mean-it.aspx)
* Log into [http://code.projspace.com](http://code.projspace.com)
* Browse to the particular project
* Open the Merge Request Tab
* All the commits are seen there
    * We have an option of viewing a diff of all those
    * By clicking on diff it shows the diff of all the files into which commits are there between the previous commit and that particular commit
    * A snippet is presented for each file and requestee should liberally add comments as per the references guidelines.

**Checklists and other references**

* [Axelerant Drupal site building checklist](https://docs.google.com/a/axelerant.com/document/d/1diyvVyw1xHfxy-Vqno6XpTDl1SJFeW8cZsZ2DijYYEg/edit#heading=h.uiw4a5wyr1p9)
* [Axelerant Drupal migration checklist](https://docs.google.com/a/axelerant.com/document/d/1iD5L3cvO-dQ95hh0Gq4Xn3-Ss4CHRrmyzg-eZKybVtU/edit)
* [https://help.github.com/articles/using-pull-requests](https://help.github.com/articles/using-pull-requests)
* [https://www.lullabot.com/blog/article/quick-guide-code-reviews](https://www.lullabot.com/blog/article/quick-guide-code-reviews)
* [https://github.com/blog/1943-how-to-write-the-perfect-pull-request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)
* [https://robots.thoughtbot.com/git-push-force-with-lease](https://robots.thoughtbot.com/git-push-force-with-lease)
* [https://egghead.io/lessons/javascript-how-to-rebase-a-git-pull-request-branch](https://egghead.io/lessons/javascript-how-to-rebase-a-git-pull-request-branch)
* [https://egghead.io/lessons/javascript-how-to-squash-multiple-git-commits](https://egghead.io/lessons/javascript-how-to-squash-multiple-git-commits)
* [http://blog.fogcreek.com/cultivating-a-code-review-culture-interview-with-derek-prior/](http://blog.fogcreek.com/cultivating-a-code-review-culture-interview-with-derek-prior/)
* [https://github.com/thoughtbot/guides/tree/master/code-review](https://github.com/thoughtbot/guides/tree/master/code-review)
* [RailsConf 2015 - Implementing a Strong Code-Review Culture](https://www.youtube.com/watch?v=PJjmw9TRB7s)
