---
layout: page
title: Drupal
permalink: /drupal/
weight: 5
parent: Back-end
subnav:
  - Best Practices
  - File Structure and Conventions
  - Site Building
  - Writing Modules
  - Hooks
  - Drupal Review Assist Tools
---

## Best Practices
* General philosophy: architecture first, design second.
* Custom modules and features should be prefixed with project-key_
* Keep project-key_ as short as possible. Possibly, use an abbreviation instead of the full name.
* Choose descriptive package names for your features and custom modules. [Refer](https://drupal.org/node/542202#package)
* Follow general Drupal coding standards. Even though the page says that the coding standards apply to Drupal itself and contributed modules, it is a very good idea to use it for custom code as well.

## File Structure and Conventions

Repositories on Projspace, Minnal, and other providers such as Acquia require that Drupal files should be stored in a directory called `docroot/` at the root of the repository. Other providers like Pantheon require Drupal files to be at the root of the repository itself. In cases where a `docroot` directory is used, other files such as scripts may be stored in the root of the repository itself (these would not be exposed by the web server). In Pantheon like environments, other measures such as `.htaccess` may be required. Pantheon provides an option of a [directory called `private`](https://pantheon.io/docs/articles/sites/private-files/#storing-private-keys-and-certs) which will not be delivered via web. This directory may be used for additional files.

Within Drupal, the modules and themes must be classified in their directories. The modules must be stored under `contrib`, `custom`, and `features` depending on if they are contributed modules, custom modules built for the project, or feature modules for the site build. The same should be done for the themes as well. If the modules are stored under an installation profile, the modules and themes must be classified in a similar manner under the profile as well.

A typical Drupal 7 profile might look like this.

~~~
.
+- docroot/
|  +- includes/
|  +- misc/
|  +- profiles/
|  |  +- standard/
|  |  +- minimal/
|  |  +- example/
|  |     +- modules/
|  |     |  +- contrib/
|  |     |  +- custom/
|  |     |  +- features/
|  |     +- themes/
|  |     |  +- contrib/
|  |     |  +- custom/
|  |     |- example.info
|  |     |- example.install
|  |     |- example.profile
|  +- scripts/
|  +- sites/
|  |  +- all/
|  |  +- default/
|  +- themes/
|  |- .gitignore
|  |- .htaccess
|  |- and more...
+- patches/
+- scripts/
|- .gitignore
~~~

## Site Building

All configuration on a Drupal website should be built as logical features. These features should be split in logical feature modules all stored in `features` directory.

### The Features Guideline

For documentation on features specifically, please refer to the [features documentation](https://drupal.org/documentation/modules/features).

**Feature Change Workflow**

When changes need to be made to anything that falls inside of any of the above categories, the following steps are made to insure features are cleanly and correctly maintained:

* Before starting, make sure you local database is current and `drush updb` has been executed to ensure your database is up to date.
* Make the desired(content type field change, views change, whatever) changes on your local environment
* Find the feature that supports above changes and re-export the feature to ensure the changes are captured.
* Increase the feature version during the export process to signify a change has been made.
* Edit project_key_updates.install and do a feature_revert() in a new update hook so when the code is deployed, the changes you’ve made are picked up and implemented. See previous update hooks to see how this is done as there are lots of good examples in this file.
* Commit the updated feature code and project_key_updates.install file and issue a merge request, as you would normal code deployment.

**Dealing With Overridden Features**

There will be times a feature is out of date (or overridden). Its important we keep these clean, so follow these general steps to get the feature back into a default state:

* Head to the specific features overridden page /admin/structure/features/featurename/diff where featurename is replaced with the actual feature delta. You can also get to this path by going to /admin/structure/features, clicking on the feature and finding the Review Overrides tab at the top of the feature overview page.
* Determine what specifically is different from the current state of the feature and what is either missing or causing the override.
* Either 1. modify the features corresponding inc file to correct the override, or 2. manually make the correction through the UI and re-export the feature.
* Follow the Feature Change Workflow to deploy the updated features.

**Reverting Features Knowledge**

If changes are made to anything on the site (content type, view, vocabulary, etc) and that change is not re-exported into a feature, the next time that feature gets reverted those changes are going to get blown away.

It is critical that any changes to an exportable “thing” is captured and included to its supporting feature. Now, not “everything” is in a feature, so it does take some familiarity to know off hand what is and what is not part of an existing feature.

**Determining if something should be in a Feature**

A couple of ways to ensure if it is or is not:

* Grep your code base, specifically in /sites/all/modules/custom/features for the delta of the thing you’re changing. If its a node, block, bean, view, etc, its going to have a delta, so grepping the features list for this delta will quickly let you know if this thing is or is not part of an existing feature.
* Visually inspect the features list. This is going to be much more time consuming than grepping, but if you’re not familiar with grep or searching code for specific things, you can manually click through all of the features and check the exportables to see if the thing you are looking for is in a feature.


## Writing Modules

Any custom modules that are required should be stored in the `custom` directory within the `modules` directory. The modules must follow proper namespacing to avoid conflicts. A simple way to namespace this would be to prefix the project name, e.g. `example_custom_name`. The code in the module should follow proper [code conventions for Drupal code](https://www.drupal.org/coding-standards).

## Hooks

Hooks are a central concept to development with Drupal. They are an implementation of a cross between [observer](https://en.wikipedia.org/wiki/Observer_pattern) and [visitor](https://en.wikipedia.org/wiki/Visitor_pattern) patterns aided by magic naming. In simple words, hooks allow you to "hook" into Drupal's flow of execution at specific points and perform tasks or alter things.

Hooks are sufficiently documented in the [Drupal documentation](https://www.drupal.org/node/292) and [elsewhere](https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=drupal%20hooks). This section mainly covers best practices for implementing hooks.

### Basic Principles

* Always include a docblock

  ~~~php
  /**
   * Implements hook_menu().
   */
  function example_menu() {
    $menu = [/* Build menu */];
    return $menu;
  }
  ~~~
* Group related hooks together in the file
* Use specific include files if the hook allows it (e.g. views, migrate)
* Use the right hook considering performance implications

### Thin Hooks

Do not place complex business logic within a hook. Instead, call a separate function or class as appropriate. The hooks may perform basic checks to decide whether an action should be taken and call a method that does the actual work. This allows decoupling the business logic from it's invocation by hooks and allows greater reuse.

Another benefit of this approach is that it allows the .module file to be of a reasonable size. Since Drupal loads all .module files on every request, less code in hooks means that there is less code for PHP to parse. The other functions or classes should be in different files.

It is a good idea to structure your code as objects. See the [object oriented PHP](/php/#object-oriented-php) section for more details. Use your best judgement to decide on whether the functionality works better as objects or functions. Most of the times, objects would be preferred as they allow cleaner code reuse and easier testing.

### Performance Implications

Always consider if the hook you are implementing entails a performance penalty and look for alternatives. For example, it is never a good idea to use hook_init() to add JS/CSS to a page. There are many alternatives to globally or conditionally load JS/CSS files instead of hook_init. In fact, there is always an alternative to using hook_init, which is why the hook was [removed in Drupal 8](https://www.drupal.org/node/2013014).

## Drupal Review Assist Tools

Certain static code analysis tools can be run as part of peer review both by the developers or builders themselves and during formal review.
PAReview.sh along with DrupalSecure and DrupalPractice.

~~~
	$> /usr/local/bin/pareview DIR-PATH
~~~

Assuming we aren’t working with multi-site setup and the code follows the prescribed formatting structure, here’s what you would run periodically..

Review custom Modules(s)

~~~
	$> /usr/local/bin/pareview sites/all/modules/custom
~~~

Review custom Theme(s)

~~~
	$> /usr/local/bin/pareview sites/all/themes/custom
~~~

[SiteAudit](https://www.drupal.org/project/site_audit) for site build analysis.

This may be run at certain checkpoints during development and prior to deployment and ideally before a release to “test”. Run the command below within the docroot of an instance to generate the site audit report.

~~~
	$> drush aa --html --bootstrap --detail --skip=insights > report.html
~~~
