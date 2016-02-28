---
layout: page
title: JavaScript
permalink: /javascript/
weight: 3
parent: Front-end
subnav:
  - Performance
  - Best Practices
  - Formatting
---

## Performance

Performance is critical for every web application, however, too much effort shouldn't be put into micro optimization as JavaScript VM is extremely fast at processing. We should periodically profile the application to check for memory leaks, jank, low FPS, and trace function calls take time more time than warranted for execution. Browser based developer tools are capable of performing all these tasks and more.


## Libraries

There should be a lot of thought put in when including a new library in a project. We might end up adding hundreds of kilobytes to the page weight when all we need is just a simple function. This is similarly applicable to libraries like jQuery, the DOM API's equally powerful now and is supported by most of the browsers.


## Best Practices

- Always cache reference and iterators when using loops and functions.
- Prefer vanilla JavaScript over jQuery when project browser support requirement permits.
- Wrap scripts in IIFE to keep global namespace clean.
- Use ES2015 modules over require.js.


## Formatting

- Use [editorconfig](http://editorconfig.org/) per project to control indentation per file format.
- Stylistic preferences should be checked by [ESLint](http://eslint.org/).
