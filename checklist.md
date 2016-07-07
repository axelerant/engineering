---
layout: page
title: Checklists
permalink: /checklist/
weight: 11
parent: General
subnav:
  - Drupal 7 Site Building Checklist
  - Drupal Migration Checklist
---

## Drupal 7 Site Building Checklist

### Content Types

* Delete unused content types
* Manage display: consistent the ordering/format of fields for content display
* Manage fields: consistent ordering/labels for content creation
* Content type settings are consistent (modules like Page Title, AddThis, Translation settings)
* All content types have been tested (drupal.org/project/devel and with real content)

### Views

* Delete Views and displays that aren’t being used
* Add meaningful description and tagging of views
* Consistent formatting across Views
* Check permissions on administrative Views
* Enable Views Caching
* Make sure that all views are configured to check user access permissions

### SEO Tools

* Google Analytics ([drupal.org/project/google_analytics](https://www.drupal.org/project/google_analytics))
* Google Authorship Module([drupal.org/project/google_authorship](https://www.drupal.org/project/google_authorship))
* Configure URL Alias Patterns (Configuration > Search and metadata > URL Aliases > Settings > Patterns)
* Fix navigation on 404 pages ([drupal.org/project/navigation404](https://www.drupal.org/project/navigation404))
* Meta tags are configured ([drupal.org/project/metatag](https://www.drupal.org/project/metatag))
* Set custom error pages (Configuration > System > Site Information)
    * Handle 403 and 404 error pages and format them as per the theme
* Configure the Mollom module to prevent spam ([drupal.org/project/mollom](https://www.drupal.org/project/mollom))
* Add social media tools ([drupal.org/project/sharethis](https://www.drupal.org/project/sharethis))
* XML sitemap ([drupal.org/project/xmlsitemap](https://www.drupal.org/project/xmlsitemap))
* Additional checklist ( [http://www.clickminded.com/seo-checklist/](http://www.clickminded.com/seo-checklist/) )
* Onpage SEO best Practices
    * Page title tags &  header ( h1, h2 ….) are being used.
    * Spider friendly site navigation ( non JS based )
* Broken links are checked and redirects put in place.
* Redirects for legacy URLs mapped via redirection mapping document from client is in place after any migrations.

### Accessibility (As applicable & refer: [https://www.drupal.org/node/465106](https://www.drupal.org/node/465106))

* Tables are used to organize and present tabular data such as financial results, calendars, etc.
Data cells need to be associated explicitly with header cells so screen reader users have an
easier time navigating and understanding the content of the data table.
* Provide each form element (text field, checkbox, dropdown list, etc.) with a descriptive label
that is explicitly associated with the form element so users understand what input
is expected of them.
* Every link should make sense if the link text is read by itself. Screen reader users may choose
to read only the links on a web page. Certain links like "read more" or "click here" should therefore
be avoided because those will not allow a user to understand where the links lead once
they are taken out of their context.
* Alternative text provides a textual alternative to non-text content in web pages (such as images).
It is especially helpful for people who are blind and rely on a screen reader to have the content
of the website read to them, but also very important for search engine optimization (seo)
purposes as it allows for more content to be indexed.</p><p>Videos and live audio should,
at minimum, have captions and preferably a transcript. With archived audio, a transcription
may be sufficient. Optional: Configure the Nomensa Accessible Media Player module.
* Provide a mechanism that allows users to skip over navigation or other elements or blocks
of information that repeat on every page. This is usually accomplished by providing a "Skip
to Content", "Skip to Main Content", or "Skip Navigation" link at the very top of the page
which jumps to the main content of the page.</p><p>Learn more about Skip navigation
for web pages.
* The use of color can enhance comprehension, but that information may not be available to a
person who is colorblind and will be unavailable to screen reader users. Do not use color
alone to convey information. Optional: Install the Page Style module.
* There are many ways to make your content easier to understand. Write clearly,
use clear fonts, and use headings and lists appropriately. Optional: Install the Text Size module.
* Use ARIA landmark roles within your theme(s).
([https://www.drupal.org/project/block_aria_landmark_roles](https://www.drupal.org/project/block_aria_landmark_roles))
* Ensure that JavaScript event handlers are device independent.
* Optional: Generate an accessibility statement using Nomensa\'s
<a href="http://www.accessibilitystatementgenerator.com" title="Nomensa\'s Accessibility Statement Generator">Accessibility Statement Generator</a>.

### Content Editing

* Enable and configure an editor ([drupal.org/project/wysiwyg](https://www.drupal.org/project/wysiwyg) or [drupal.org/project/bueditor](drupal.org/project/bueditor))
* Text formats are ordered and configured correctly (Configuration > Content authoring > Text formats)
* Images can be embedded in the body text ([drupal.org/project/insert](https://www.drupal.org/project/insert) and [drupal.org/project/image_resize_filter](https://www.drupal.org/project/image_resize_filter))

### For the Administrator

* Administration Views are in place ([drupal.org/project/admin_views](https://www.drupal.org/project/admin_views))
* Views items can be re-ordered as necessary ([drupal.org/project/draggableviews](https://www.drupal.org/project/draggableviews))
* Administrators have a menu that they can access ([drupal.org/project/admin_menu](https://www.drupal.org/project/admin_menu))

### Emails

* Webforms are configured to send to the correct email address (Content > Webforms)
* Email notifications for registration have been tested (Configuration > People)

### User Accounts
* Roles have been created and tested ([drupal.org/project/masquerade](https://www.drupal.org/project/masquerade))
* Registration is limited if necessary (Configuration > People > Account Settings). The default value of Visitors can create accounts and no administrator approval is required is easily overlooked, and often undesired.
* Anonymous users have permissions to access/search content (People > Permissions)

### Content

* Remove all test content from the site
* No required fields are missing from legacy content
* Image styles have been tested with different sizes ([drupal.org/project/imagecache_proportions](https://www.drupal.org/project/imagecache_proportions))

### Theming
* Load images based on device size ([drupal.org/project/adaptive_image](https://www.drupal.org/project/adaptive_image) [drupal.org/project/resp_img](drupal.org/project/resp_img))
* Check that the viewport meta tag is in place ([drupal.org/project/viewport](https://www.drupal.org/project/viewport) or [https://www.drupal.org/node/1888028](https://www.drupal.org/node/1888028))
*  Make sure there’s a favicon (Appearance > Settings)
* Use Sass with .scss syntax
* Drupal 8 CSS guideline ([drupal.org/node/1887918](https://www.drupal.org/node/1887918))
* Disable Sass debug and switch output style to compressed on production
*  Validate code using linters and hinters (jslint, csslint, html validator)
* Use normalize instead of reset ([necolas.github.io/normalize.css/](http://necolas.github.io/normalize.css/))
* Bem naming conventions for classes and id’s ([bem.info/method/definitions/](http://bem.info/method/definitions/))
* Import fonts in css file using @import feature.
* Set unicode (UTF-8) for font-icons rendering
* Use tap-highlight-color for tap hightlight on touch devices ([css-infos.net/property/-webkit-tap-highlight-color](http://css-infos.net/property/-webkit-tap-highlight-color))
* Compass compatible grid systems ([github.com/Team-Sass/Singularity](https://github.com/Team-Sass/Singularity))

### Multilingual Items

* Date formats are localized (Configuration > Regional and language > Date and time > Localize)
* Email are translated (Configuration > People)
* Transliteration of path aliases ([drupal.org/project/transliteration](https://www.drupal.org/project/transliteration))
* Run translation updates ([drupal.org/project/l10n](https://www.drupal.org/project/l10n))

### Development & Pre-Launch

* Review the deployment platform and ensure there are no discrepancies at time of going live. Suggest that post sprint 1 deploy the code on to the final server and make sure there are no surprises.
* Check that aliases have been updated (Configuration > Search and metadata > URL Aliases > Settings > Update)
* Use captcha  / mollom for all anonymous forms
* Set update action for URL aliases (Configuration > Search and metadata > URL Aliases > Settings)
* Disable, uninstall, and remove contrib modules that you don’t use
* Disable core modules that you don’t use (i.e. color, comments, search, dashboard)
* Disable modules for development (i.e. masquerade, devel). Not only devel itself, but other other utilities (such as masquerade, trace, or coder) may have been installed that you wouldn't need on the production site. Leaving extra modules enabled can hinder the performance of your site, or even create security vulnerabilities if misconfigured.
* Make sure that your modules are up-to-date  (Configuration > Modules > Update)
* Change the administrative password  (Go to /user/1/edit )
* Disable error logging  (Configuration > Development > Logging and errors). On a production site, it's best to suppress on-screen error reporting by choosing Write errors to the log.
* Enable caching and aggregation (Configuration > Development > Performance). The best performance settings depends on your site. Also, don't change cache settings at the last moment without thoroughly testing your site's features. Ideally, I like to finalize the cache settings about 2/3 of the way through a project, so that the final stages of development and testing are performed with cache settings that will match production.
* Install and configure Entity Cache module ( [https://www.drupal.org/project/entitycache](https://www.drupal.org/project/entitycache))
* Do a security review [drupal.org/project/security_review](https://www.drupal.org/project/security_review)
* Prefer if dblog can be turned off completely and alternates such as syslog can be enabled. If not set database logging row limit (admin/settings/logging/dblog) I have found the default row limit of 1000 can  wrap quickly, leave you without vital debugging information when you need it most. The average row length is generally around 1kB, so even boosting this to 100,000 rows will still leave you with a manageable watchdog table.
* Set a maintenance theme (settings.php). By default Drupal's Site off-line page uses the Minnelli theme. Switching this is a nice enhancement, in case you ever need to use the maintenance mode, or in the unfortunate event you experience unplanned downtime. In most cases your site's theme will work fine; just add $conf['maintenance_theme'] = 'mytheme'; to settings.php. You may also need to add a maintenance-page.tpl.php to your theme; if you're using Zen this is already done for you.
* Confirm email settings
Often, placeholder email addresses will be filled in during development, and should be updated before deployment. I try to start with the correct addresses from the beginning when possible, but sometimes you don't have this information until later in the project's life. In addition to Drupal's global site_mail, addresses can be stored in a variety of places: The admin user's account, contact forms, webforms, ubercart, triggers, or CiviCRM settings.
* Check username for main administrator account
admin is the most commonly used username for the main administrator. Please change the username to something more project specific.
* Redirect to/from `www.*` (.htaccess). Drupal's .htaccess file contains an example RewriteRule showing how to redirect from example.com to www.example.com or vice-versa. Enforcing a single domain name is essential if your site uses SSL, and even with plain HTTP I like the consistency of a single URL. Additionally, since the RewriteCond declaration is specific to a particular host, you can add multiple domains to the same .htaccess file, either for multi-site installs or for multiple testing / production host names.
* Check proxy settings. If your production server uses a proxy or load balancer, Drupal needs some additional configuration to accurately record remote IPs. This impacts error logging and some modules such as Mollom.

~~~
$conf['reverse_proxy'] = TRUE;
$conf['reverse_proxy_addresses'] = array(
  '10.10.20.100',
  '10.10.30.100',
);
~~~
* Setup cron job

### Performance

* Ensure the entire production stack is rightly configured including memcache, apc, varnish, cdn and performance settings within Drupal. Refer: Developer FAQ
* Run a [site-audit](https://www.drupal.org/project/site_audit) report and ensure all items are in green

~~~
$ drush aa --html --bootstrap --detail --skip=insights > report.html
~~~
* Collect a good representative url list (urls.txt) and sftp to projspace webserver. Generally, I take the output of sitemap.xml and copy paste into google spreadsheet and then cut & paste into a text file.
* For anonymous review, run siege with specific concurrency and time for the test `siege -d10 -c1000 -i -f urls.txt`
* For logged in traffic, leverage the blazemeter module to build the jmx script and execute.
* To debug performance issues, you can either use newrelic / do it manually via webgrind analysis.
* Review page speed of the above urls by visiting either [http://tools.pingdom.com/fpt/](http://tools.pingdom.com/fpt/) / [http://www.webpagetest.org/](http://www.webpagetest.org/)

### Security

* Install and configure HTML Purifier module ([drupal.org/project/htmlpurifier](https://www.drupal.org/project/htmlpurifier) - adds stronger protection against XSS vulnerabilities for text input formats. We recommend installing it and applying to all text input formats)
* Execute Drupal Security scan @ [http://hackertarget.com/drupal-security-scan/](http://hackertarget.com/drupal-security-scan/) for the urls collected for performance testing

### Post-Launch

* Paths are working correctly and have a final look at .htaccess file for any modifications.
* Emails are being sent
* Multilingual domains (if any) are set up
* Files can be uploaded (permissions and file upload limit are correct)

### Credits & References

* [Evolving Web & Acquia](https://www.acquia.com/resources/acquia-tv/conference/best-practice-checklist-building-drupal-website-may-30-2013)
* [Deployment checklist](http://www.metaltoad.com/blog/drupal-7-deployment-checklist)
* [SEO Checklist](http://www.clickminded.com/seo-checklist/)
* [Training CMS](http://alistapart.com/article/training-the-cms)


## Drupal Migration Checklist

### Pre-sales

* [Migration Questionnaire has been filled](https://docs.google.com/document/d/1CDeLSau3z_Ruu_BuPN8P7kylvFtxnzbGExIib7LPP0Y/edit#heading=h.fcbb2ygzlvfn)
* [Estimation sheet has been filled](https://docs.google.com/spreadsheets/d/1qFyevKfff7pW2RX6E3QiCLs5KBmEVDZG8vouCj0jROE/edit#gid=4)

### Project-kickoff

* Identify the following people associated with the project
    * Content Maintainers (Team who would be using the system)
    * Technical Owners (Technical team)
    * Saboteur (Who are the folks who are in the critical delivery of the project -- SSO, Security team)
    * Project Champion? (Who is the person who has sign off rights on the project)
* Gain as much knowledge as possible about what your data means. It is eventually going to be necessary for your team to know exactly what each field of data represents, and whether or not you want to migrate it to the new site. If you wait to start this process until development begins it can draw out the migration schedule. The more (or more complex) your data, the longer this process can take. Get as much of a head start as possible before the development team is engaged.
    * If proprietary, access to relevant libraries in place to be able to retrieve data
    * Mapping document has been duly filled out
* DNM all source/destination fields if there is no corresponding fields
    * This process completes with client signoff on the scope of migration and the destination of each data field. This defines the final scope of data migration, even if it differs from the original scope, so this may require adjustment to the scope document.
    * Define content migration acceptance criteria in advance. A project manager should never need to establish acceptance criteria after the review period has begun. It is always preferable to negotiate and document this criteria before the frenzy and pressure of pre-launch activities. The ability to reference previously established criteria during the review period saves time and keeps heads cool.
    * Establish an environment dedicated to content review and clean-up. Establishing an environment dedicated to content clean-up avoids interruptions from the project team's ongoing testing and bug fix efforts. With a dedicated environment, stakeholders don't have to think twice about whether the environment is available to them. It also allows for more parallel project work to happen during this high-stakes period leading up to launch. Projspace makes it easy to spin up new environments for this purpose.

### Migration Planning

Migration cannot begin the moment the project begins, because there are development dependencies. The content types and fields must be developed before the content can be migrated into them. Critical things to consider in planning are as follows:

* It is never too early to start source data cleanup!
    * Delete or archive old or unused content. This can reduce data "cruft" and will make the work of migration easier and also eases the effort of data validation for you.
    * Purge expired and outdated user accounts. Migration can be seen as an opportunity to update the user base to only active accounts, or can be seen as a way to welcome inactive users back. Determine your path forward, and update user content accordingly, purging outdated or duplicate accounts before moving to the new system.
    * Review roles and permissions and consider which are actually used. Developing a new user role and permissions system is almost certainly a part of the work of the new site development, and hidden complexity lies in too many user roles, having unused roles, or duplicate roles. It also complicates data validation and increases the cost of QA overall. Streamline as much as possible.
* Enable access to complete data by the migration team as soon as possible in the project schedule.
* Consider the priority of different data types, and plan for development of those aspects of the site first.
* Consider that migration can be done incrementally, but this greatly expands the time is takes to validate (from the client team) so an effort should be made to consider the scope of validation work when planning.
* Care should be taken to consider the sunset date of any currently used applications you may be migrating from. It is unwise to run the project schedule up to the day the old system contract ends, because it removes the ability to review the data in the context of the old platform, which can make validation difficult.

### Development

* Ensure emails don’t go out to active users
* Maintain aliases from old site to new
* Have the crawler hit the site generated site map against the migrated content and watch for 404s
* Prepare a one-page instruction sheet for reviewers. Before the review period begins, project managers can create an instruction sheet to inform reviewers of logistics. Rather than fielding dozens of questions, pro-active instructions ensure that reviewers can make the best use of limited time.
* Ensure path redirects have been setup
* Ensure metatags have been migrated

### Incremental Migrations

* In the case of rapid development, sites with a large amount of data that continues to be updated as development is underway, or high-risk migrations, this work may be split up into incremental migrations. These may be organized around the development schedule for specific content types and fields, the development of interface elements that enable or aid in data validation, or the date on which specific data becomes available for migration. The general plan for whether the migration is incremental or addressed in test-migrations-followed-by-final-migration manner should be put in place during initial planning. This incremental approach may allow more flexibility for the development team, but may require more time of the data validation team on the client side, since the validation is broken up into phases.

### Launch

* Once all files/databases have been synchronized and you’ve performed your quick test, you’ll want to login to your registrar or DNS service provider and change your A record(s) to point to the new server IP(s). Because you’ve lowered your TTL values 48 hours in advance, propagation (the time it takes for the DNS services around the world to reflect your IP change) should be quite fast. Usually, WSM sees propagation occur within 1-8 hours, as opposed to 24-72 hours which was the ‘norm’ a few years ago.

### Day after and 1-2 weeks post launch

* Review 404s
* Monitor Twitter/Facebook channels
* Don't take the old site away for atleast 1 month

### Credits & References

* [https://www.acquia.com/blog/taking-migrations-madness-gladness](https://www.acquia.com/blog/taking-migrations-madness-gladness)
* [http://drupalize.me/videos/data-migration-best-practices](http://drupalize.me/videos/data-migration-best-practices)
* [https://www.youtube.com/watch?v=lsrWfXPj_j8](https://www.youtube.com/watch?v=lsrWfXPj_j8)
* [https://www.acquia.com/sites/default/files/library/attachment/migrating-to-drupal.pdf](https://www.acquia.com/sites/default/files/library/attachment/migrating-to-drupal.pdf)
* [https://www.acquia.com/sites/default/files/library/attachment/Datasheet-Acquia%20Content%20Migration%20Services.pdf](https://www.acquia.com/sites/default/files/library/attachment/Datasheet-Acquia%20Content%20Migration%20Services.pdf)
* [https://techcommons.stanford.edu/files/D6D7DrupalMigration.pdf](https://techcommons.stanford.edu/files/D6D7DrupalMigration.pdf)
* [https://www.websitemovers.com/blog/application-migration-best-practices/](https://www.websitemovers.com/blog/application-migration-best-practices/)
* [https://www.acquia.com/blog/10-tips-streamline-migration-review](https://www.acquia.com/blog/10-tips-streamline-migration-review)
