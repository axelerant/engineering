---
layout: page
title: HTML
permalink: /html/
weight: 1
parent: Front-end
subnav:
  - Semantics
  - Accessibility
  - Formatting
---

## Semantics

Semantic markup is the cornerstone of a valid and accessible webpage. When building for the web we have to consider devices other than our conventional web browsers. This is to make sure that whoever consumes the document content doesn't have an uncompromised experienced.

We use HTML to structure the content of our document, each element has a specific purpose and therefore we should use them based on that specific purpose only. We could always build a webpage using `div` and `span` elements but that in turn compromises the structure and meaning of the content for both humans and machines that read it.

HTML is has no direct relationship with the presentation of the document and that should be mitigated to CSS. The document should be structured in a fashion where it is consumable by devices that have no presentational layer like screen readers.

- Make use of right HTML elements to structure the content of the document rather than using `div` everywhere.
- Classes and ID's don't have any semantic value, use them as hooks for JavaScript and CSS.
- Do not bloat the document with presentational markup when it can be managed using CSS.
- Do not use presentational elements like `i`, `b`, `small`, etc.


## Accessibility

Accessibility should be a minimum requirement rather than being considered an add-on to the project. The webpage we build should reach audience of all kind or else we should be neglecting a staggering population of [285 million](http://www.who.int/mediacentre/factsheets/fs282/en/) people across the world.

ARIA roles should be used proplely throughtout the webpage, these help visually impaired people to traverse the document easily. These are also used by applications that need to consume specific content of the page tagged with ARIA roles.

The content shouldn't be effected to help with the presentation layer as it breaks the flow of how the content reads on devices other than web browsers. This can be easily achived by writing clean and valid markup and mitigating presentational concerns to CSS.

Similar to ARIA landmark roles, other specifications can be implemented to increase the reach of our webpage. [Schema.org](http://www.schema.org) helps in building relation between content and can be used for webpages and emails. [Microdata](https://www.w3.org/TR/microdata/) is useful to embed machine readable data in our webpage.

- Use ARIA landmark roles.
- Structure webpage based on the content flow.
- Follow Schema.org and Microdata specifications.
- Use language attribute on `HTML` tag.
- Use appropriate `alt` and `title` attributes for images and links.
- Write semantic markup.

## Formatting

- Use [editorconfig](http://editorconfig.org/) per project to control indentation per file format.
