---
layout: page
title: CSS
permalink: /css/
weight: 2
parent: Front-end
subnav:
  - Architecture
  - Naming conventions
  - Best practices
  - Formatting
---

## Architecture

As simple as CSS may seems to be, its quite a challenge to maintain it as your codebase gets bigger with time. Relying on tools like preprocessors isn't a solution for this problem and it sometimes can even have adverse effects. Following time tested principles like SRP, DRY, and Object-Orientation can help ease our way to a clean and maintainable codebase.

The project and files structure can also define how easy it is to refactor without effecting the codebase. Breaking CSS into files per granular component that are not dependent of context, helps in building a library of components that can be easily plugged with each other. You should have a library of CSS components like Legos that you can combine together to build something huge.

- Follow SRP, DRY, and OOP when writing CSS.
- Break CSS files into small components.
- Component shouldn't be based on context of parent or children components.

## Naming conventions

We follow [SMACSS](https://smacss.com) in conjunction with [BEM](https://en.bem.info/) to name our CSS components, which means we use parts of both of them. SMACSS is used for denoting states and layout prefixes of components. Whereas BEM is used for defining the component, component children, and their modifiers.

~~~css
/* SMACSS */
.is-hidden {
  visibility: hidden;
  opacity: 0;
}

.l-sidebar {
  max-width: 25%;
  width: 30rem;
  float: left;
}
~~~

~~~css
/* BEM */
.modal {
  border: 1px solid #CCCCCC;
  max-width: 25rem;
  margin: auto;
}

.modal__title {
  font-size: 1.25rem;
  margin-bottom: .25rem;
}

.modal--night {
  background: #333333;
  color: #FFFFFF;
}
~~~

## Best practices

- Use classes over ID's and attribute selectors.
- Always use `border-box` box model.
- Do not use CSS'es `@import`.
- Implement single media query block in a component file.
- Mitigate prefixing to tools rather than doing it manually.
- Do not use `@extend`.
- Use `@mixin` in favour of `@extend`.
- Keep specificity as low as possible.
- Do not nest more than three levels.

## Formatting

- Use [editorconfig](http://editorconfig.org/) per project to control indentation per file format.
- Stylistic preferences should be checked by [Stylelint](https://github.com/stylelint/stylelint).
