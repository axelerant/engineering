---
layout: page
title: PHP
permalink: /php/
weight: 4
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

