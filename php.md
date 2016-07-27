---
layout: page
title: PHP
permalink: /php/
weight: 5
parent: Back-end
subnav:
  - Object Oriented PHP
  - PHP-FIG
  - Coding Standards
  - Composer
  - PHPUnit
---

## Object Oriented PHP

Writing procedural applications in PHP is so 2003. Besides giving a neolithic age feel, the applicaiton is difficult to maintain, test, and understand. PHP 5.0 and upwards has made it possible to use modern OO principles when writing applications, which was only made easier with PHP 5.3. Modern PHP applications should leverage these features in order to write code that follows [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) principles.

### Simplicity

> Simplicity is prerequisite for reliability.
> -- Edsger W. Dijkstra

Do not confuse simple with easy. They are rarely the same. In fact, writing simple programs is very hard but it is well worth the effort. The code should be _simple_ to read and change and that is not _easy_ to write.

> A class should have only one reason to change.
> -- Robert C. Martin

~~~php
// This class handles both formatting of a report and also collecting data for
// it. This violates the single responsibility principle. Even though this may
// be apparently easy to use, it is very hard to test and maintain.
class ReportPrint
{
    public function formatReport(...)
    {
    }

    public function reportData(...)
    {
    }
}
~~~

Simplicity often means that your objects are doing one thing and one thing only. Read about [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) for more details.

### Extensibiity

> software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification
> -- [Open/Closed Principle](https://en.wikipedia.org/wiki/Open/closed_principle)

Carefully use visibility modifiers such as private, protected, and public for methods and properties in a class to allow extensibiity without changing that class. A child class can modify the behaviour just by extending the class and overriding relevant properties and methods.

~~~php
class Entity
{
    // Generic properties and methods applicable for all entities.
}

class ConfigEntity extends Entity
{
    // Specific methods to represent configuration entities.
}

class ContentEntity extends Entity
{
    // Specific methods to represent content entities.
}
~~~

### Interfaces

Follow the common adage of programming to abstractions, not concrete classes. Write meaningful and sensible abstractions. A single class may implement multiple interfaces when necessary.

~~~php
// @todo
~~~

### Composition over Inheritance

Inheritance is not evil but it can been misused as a shortcut to reuse code. Consider the relationship between classes before trying to apply inheritance. Try to rephrase the objects with a ['has-a'](https://en.wikipedia.org/wiki/Has-a) relationship rather than a ['is-a'](https://en.wikipedia.org/wiki/Is-a) relationship. Inheritance should be used carefully and sparingly.

~~~php
// Inheritance.
class TextBox extends WidgetBase
{
    // ...
}
~~~

~~~php
// @todo: Composition.
~~~

[Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle) is a good test when choosing between inheritance and composition.

### Namespaces

PHP 5.3 had added support for namespaces which should be used instead of all the previous methods of namespacing classes and functions.

~~~php
// Before.
class Database_MySql_Connection { }

// After.
namespace Database\Mysql;
class Connection {}
~~~

## PHP-FIG

[PHP-FIG](http://www.php-fig.org/) is a group formed to recommend standards that allow greater interaction among various PHP frameworks. It is a good idea to follow the recommendations unless there is a good reason not to.

### Autoloading Standards (PSR-4, <s>PSR-0</s>)

An [autoloader](http://php.net/manual/en/language.oop5.autoload.php) is responsible for loading classes (only) when they are required which helps in two ways:

* The class is not loaded unless required, hence saving memory.
* As a developer, you do not have to remember to load the files containing the class definition.

> Note: Even though the document uses the word 'class', this actually applies to interfaces, traits, and of course, classes.
{: .notice }

PHP SPL provides [spl_autoload_register](http://php.net/spl_autoload_register) which allows you to register an autoload function. When PHP cannot find a class, it calls all the registered autoload functions so that they can load the file containing the required class.

> Warning: If you are using [__autoload](http://php.net/manual/en/function.autoload.php), see the [documentation for spl_autoload_register](http://php.net/spl_autoload_register) for caveats on using them together.
{: .warning }

While it is possible to use your own autoload logic, many PHP components have moved on to using [PSR-4](http://www.php-fig.org/psr/psr-4/) for autoloading. See the [examples document](http://www.php-fig.org/psr/psr-4/examples/) on the PHP-FIG website to understand how a class and autoloader work here. However, you should really be using [composer](https://getcomposer.org/) for the autoloader unless you have a good reason not to.

### Interfaces

At the time of the writing, there are three interfaces that are recommended by PHP-FIG.

* [PSR-3: Logging Interface](http://www.php-fig.org/psr/psr-3/) - Define interfaces to logger engines.
* [PSR-6: Caching Interface](http://www.php-fig.org/psr/psr-6/) - Define interfaces to caching engines.
* [PSR-7: HTTP Message Interface](http://www.php-fig.org/psr/psr-7/) - Define interfaces to describe HTTP Request and Response messages.

These interfaces should be used for the task at hand as it becomes trivial to switch out concrete implementations when required. For example, it would be very easy to use a different logger on the fly depending on the scenario just by injecting a concrete logger which implements a PSR-3 logger interface (many do). Similarly, we can replace Guzzle by another PSR-7 library without touching any of the code that handles the request and response objects.

### Coding Style

PHP-FIG suggests [PSR-2](http://www.php-fig.org/psr/psr-2/) as the preferred coding style which extends [PSR-1](http://www.php-fig.org/psr/psr-1/), which is the basic coding standard. It is encouraged to use PSR-2 to ensure easy interoperability with many components that use PSR-2. There is [another recommendation currently in review](https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md) which will extend the coding style for PHP 7.0 changes.

## Composer

![Composer](https://getcomposer.org/img/logo-composer-transparent.png)
{: .align-right}
[Composer](https://getcomposer.org/) is a dependency manager for PHP components which also provides an autoloader to conveniently load classes from the packages. The autoloader supports PSR-0, PSR-4, and other methods such as a static class-map.

You should always use composer to write applications (most frameworks support this) by starting with a [composer.json](https://getcomposer.org/doc/04-schema.md) file in your application. If you are writing a reusable component/library, start with a [composer.json](https://getcomposer.org/doc/04-schema.md) to define it. Also, commit the [composer.lock](https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file) file for an application, but not for a library.

## PHPUnit

PHPUnit is a unit testing framework for PHP and also can be used to run integration tests. It is recommended to start with a phpunit.xml.dist in your application and also include phpunit in your composer.json (in require-dev).
