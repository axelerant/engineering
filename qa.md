---
layout: page
title: Quality Assurance
permalink: /qa/
weight: 7
parent: General
subnav:
  - BDD with Behat
---

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
