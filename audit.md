---
layout: page
title: Drupal Audit Guide
permalink: /drupal-audit/
weight: 9
parent: Back-end
subnav:
  - Acquisition audit
  - Implementation verification audit
  - Vendor management audit
  - Support audit
  - Getting started
  - Business of an audit
  - Who can do an audit?
  - Selling audits
---
This document outlines the process to follow for auditing any Drupal project:

## What’s an audit?

Audit is a run-through of an implementation of a site. Audits are done for many different reasons and thus the actual process of doing an audit varies.

## Prerequisites?

* Basic knowledge of Drupal and its architecture
* Understanding the business involving Drupal

## Audit types

* Acquisition audit
* Implementation Verification audit
* Vendor management audit
* Support audit

## Acquisition audit

* Generally done before the decision to buy a business
  * A part of the ‘due diligence’ process
* Usually done to smaller startups who base their business to a web site / web service
* Typically more in-depth
* Focuses on whatever business plans there are for the system

## Implementation verification audit

* A customer want to validate their vendor’s work on their Drupal system
* Usually pretty brief, done in collaboration with the implementing vendor
* Shouldn’t ever be done for a system that’s not finished, unless it’s a strict architecture audit
* Usually the client isn’t expecting major problems to be found

## Vendor management audit

* Vendor management audit is usually done to either switch vendors or due to problems with the current vendor
* Usually done without the knowledge of the current vendor, thus done usually with limited documentation and/or information
* Might be either very brief or very profound audit
* Client expects to find problems in the implementation

## Support audit

* A very brief audit done to move the system to be supported by the auditing partner
* These are done with minimal resources, but must be done well, because the vendor carries all the risks
* The only type of audit where the auditing consultant can learn from the experience, as all the details will be revealed in the longer run

## How it’s done

**TIP #1 You always need the source code**

## Getting started

* First and foremost: start taking notes from day 1
* Secure the source code and a dump of the database
* If the data is too private, ask for it to be obfuscated
* Don’t ever settle for partial source code, just the custom modules, for example
* They’ll be happy to leave the hacked core and `enhanced` contrib modules outside of the audit

## Install the site

* Whichever audit you’re doing, start by installing the site
* It’s a learning experience, you’ll find out what’s missing and what’s not documented
* You’ll probably have to stop several times to ask more data, code, Varnish VCL configs, Apache rewrites, API definitions (to create dummies) etc. so reserve enough calendar time for this
* Still worth the time - every time

**TIP #2 You must understand the architecture**

## Architecture

* Once installed, look at the architecture of the site
* Usually Drupal sites are based on certain contrib combinations to build functionality
* Remember not to be biased
* Does it ﬁt the purpose?
* Is the site using Drupal as it should?
* Are there custom parts where there’s a well-working contrib available?
* Is it overly complicated?
* Always make sure you understand the architecture
* When the site is very complicated, integrated and contains a lot of custom code, understanding the architecture might take several days. You’ll just have to endure it, it’s the prerequisite for a proper audit

## Reading code

* Reading code is not a big problem in regular Drupal audits
* There’s relatively little custom code to be read and you can ﬁnd where it is by running [Hacked](https:// drupal.org/project/hacked)!
* When there’s a lot of code, remember you can’t read it all
* With limited time and too much code to read, focus on the parts that matter
* Security holes
    * Looking for: security holes?
        * Check for SSL login
        * Check for old contribs without security patches
        * Check out if all the custom parts are using abstraction to interface with the database
        * Look for usage of uncleaned inputs in UI
        * Don’t forget the Javascript, a lot of XSS possibilities there
        * Look for API calls without HTTPS but with private data
* Beginner mistakes
    * Looking for: beginner mistakes?
        * Look for unclean access to Drupal Accessing database straight (and not own tables)
        * Look for unnecessary custom modules (good contribs available)
        * Look for wrong hooks (e.g. init instead of cron for stuff that’s needed to be done rarely)
* Performance problems
    * Looking for: performance problems?
        * Check out static caches for time-consuming functions
        * Check out the amount of processing in init hook
        * Look for slow backend APIs
        * Check out the caching strategy
        * Look for unnecessary, but very slow contrib modules
        * Look for mis-usage of contrib modules

## Social engineering

* Talk to the original site developers whenever it’s possible
    * They’ll tell you how it works and why it works like that
    * They might even point you to potential problems
    * Just be polite and friendly, especially in acquisition audits - auditing is not about pissing people off

**TIP #3 It’s not just the code**

## Installation and server conﬁguration

* A really professionally made site might still be deployed by a total newbie
* Always look at the production environment
    * You’ll need at least read access to the actual server or a copy of all the relevant conﬁguration ﬁles
* There’s a lot to check for security, performance and reliability
* Look at the PHP, httpd and PHP process manager conﬁgurations
    * Opcode cache in use
    * PHP `scary options` off
    * Apache/Nginx safely conﬁgured
* MySQL and other databases
    * Replication configurations
* Backups
* Check for open ports, services running, MySQL passwords
* Look at the sweet extras, memcache configuration, Varnish VCLs, MongoDB, Redis, SOLR configurations
    * While you’re at it, make sure you check out the SOLR schemas, too

## Drupal conﬁguration

* Then take a look at the Drupal conﬁguration
    * User roles and privileges
    * Registration and login settings
    * Caching settings
    * Contrib module settings, beware, there might be some really scary ones
    * Custom module settings
    * SEO conﬁgurations, that’s easily forgotten
    * Cleanup for automatic imports or other automatically growing data
    * Multisite conﬁgurations
    * Language conﬁgurations
    * etc...

**TIP #4 A quick benchmark never hurt anyone**

## Performance

* Depending on the audit, performance is just a part of the audit, or the main focus of the audit
* In acquisition audits, performance issues are usually very important
* But even in the normal case, a quick benchmark is in order
* Just run couple of pages with anonymous user and logged in user with a benchmarking tool (ab, siege) and proﬁle (xdebug, xhprof) the backend (on a separate benchmark run) under load
    * You’ll see the bottlenecks immediately and get an idea if the site is slower than normal, or properly optimized

**TIP #5 Auditing is a gentleman’s game**

## Reporting

* Usually one or two written reports are produced as an output
    * Two written reports are needed when we need a technical and a non-technical report
* Frequently they contain parts of code or runtime grinds, but sometimes the NDA bans that (possible in acquisition audits)
* The usual audit document is divided into three parts
    * Introduction: explains the system, its architecture and platform, modules and implementation on a high level
    * Findings: lists all the findings, usually also mentions the stuff that was okay, but focuses on the problems
    * Improvement suggestions: lists all the suggested improvements for the problems listed in the previous chapter

## Don’t bash!

* Never bash the vendor who implemented the system
    * Just list the problems neutrally
    * You’ll be on the receiving end at some point and you’ll appreciate the auditor to understand that there are different circumstances in which Drupal systems are made - some harder than others
    * Auditing is a gentleman’s game
        * We’re a small community of professionals and there’s no need to sell by bashing others

**TIP #6 list only real findings**

## List only real findings

* What if you can’t find anything?
    * Did you remember to manage customer expectations?
    * Never exaggerate problems!
    * If you can’t find anything, then you don’t list anything!

**TIP #7 Audits need to be done by an expert**

## Business of an audit

* The time needed for a Drupal audit is very hard to estimate
* Ranging from 2 man-days to 30 man-days
* Pricing is usually by the hour, and goes by the pricing of the most experienced consultant
* For support audits the time is usually very limited

## Who can do an audit?

* The person doing the audit needs to be a real expert
* In Drupal audits, Drupal skills are not enough: the person needs to have rock-solid programming skills, especially in PHP
* Also, experience in integrations, high-performance and security is hugely beneficial

**TIP #8 Get a reference - if you can**

## Any references?

* The most problematic part in selling Drupal audits is to get the proper public references to be credible
* Auditing is a subtle business, so make sure you read the NDA

## Selling audits

* When your customer is changing vendors, from someone to you, you should try and sell an audit
    * It’s for your own security - you never know what you’re getting into
    * Same goes for taking an existing site into support, always demand to make an audit as a part of the support deal
    * Never promise you’ll find anything wrong in an audit - you don’t know that
    * Never promise you’ll find everything that’s wrong with the system during an audit - nobody can guarantee that. I can only guarantee you’ll miss something

**Sourced** from [http://www.slideshare.net/exove/auditing-drupal-sites](http://www.slideshare.net/exove/auditing-drupal-sites)
