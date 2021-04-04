---
title: Extracting Components
description: Dealing with common utility patterns.
date: 1000-01-08
---

## Extracting Components

Uniform encourages the extraction of components when clear and repeating design patterns emerge. The following guide will cover the various ways you can extract components.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Using Theme Helper Functions

You can build custom components and still get access to theme variables using helper functions. To learn more about helper functions, refer to the page on [Helper Functions](/docs/helper-functions).

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

## Using @apply mixin <span class="ml-6 inline-flex align-items-center px-8 h-20 font-sm bold radius-full bg-blue bg-brighten-500 color-white align-middle">beta</span>

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

To enable this feature, placeholders must be set to `true` in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    placeholders: true,
  )
);
```