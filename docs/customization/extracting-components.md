---
title: Extracting Components
description: Dealing with common utility patterns.
date: 1000-01-08
---

## Extracting Components

Even though Uniform is a Utility-first CSS framework, it encourages the extraction of components as common design patterns emerge. The following guide will cover the various ways you can extract components.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Using Theme Helper Functions

Uniform CSS encourages the extraction of components without breaking your existing Sass workflow. You can build custom components and still get access to theme settings using helper functions. To learn more about helper functions, refer to the page on helper functions.

```scss
// styles.scss
.custom-element {
  display: block;
  padding: size(20);
  font-family: font-family(sans);
  border-radius: radius(md);
  box-shadow: shadow(sm);

  &:hover {
    box-shadow: shadow(md);
  }
}
```

---

## Using @apply mixin <span class="ml-6 inline-flex align-items-center px-8 h-20 font-sm leading-0 bold radius-round bg-blue bg-brighten-500 color-white align-middle">Beta</span>

The `apply()` mixin allows you to apply properties directly using shorthand utility class names. Behind the scene, it parses through the list of arguments and extends placeholder selectors that match the name.

```scss
.element {
  @include apply(
    'mb-24',
    'hover.mb-32',
    'p-20',
    'bg-white',
  )
}
```

This is currently an experimental feature and should not be used for production. To enable this feature, placeholders must be set to `true` in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    placeholders: true,
  )
);
```