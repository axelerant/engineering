---
layout: page
title: Drupal
permalink: /drupal/
weight: 5
parent: Back-end
subnav:
  - Hooks
  - File Structure and Conventions
  - Writing modules
  - Symfony components
  - Automated Tests Simpletest, PHPUnit
---

## Hooks

Hooks are a central concept to development with Drupal. They are an implementation of a cross between [observer](https://en.wikipedia.org/wiki/Observer_pattern) and [visitor](https://en.wikipedia.org/wiki/Visitor_pattern) patterns aided by magic naming. In simple words, hooks allow you to "hook" into Drupal's flow of execution at specific points and perform tasks or alter things.

Hooks are sufficiently documented in the [Drupal documentation](https://www.drupal.org/node/292) and [elsewhere](https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=drupal%20hooks). This section mainly covers best practices for implementing hooks.

### Basic Principles

* Always include a docblock

  ~~~php
  /**
   * Implements hook_init().
   */
  function example_init() {
    // Init code.
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
