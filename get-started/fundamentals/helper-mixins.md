---
title: Helper Mixins
description: Get started with built-in helper mixins.
date: 1000-01-08
---

## About Helper Mixins

Helper mixins allow you to conveniently add useful blocks of CSS with a simple syntax.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Screen Mixin

The `screen()` function returns values from the breakpoint map provided an existing variant is passed in as a parameter. `screens()` function returns the entire map, useful for looping.

For more information on breakpoints, visit <a class="hover.underline" href="/get-started/breakpoints">breakpoints</a>.

```scss
.element {
  @include screen(lg) {
    background: red;
  }
}
```

```css
@media (min-width: 1280px) {
  .element {
    background: red;
  }
}
```

---

## Apply Mixin <span class="ml-6 inline-flex align-items-center px-8 h-20 font-sm leading-0 font-bold radius-round bg-blue bg-brighten-500 text-white">Beta</span>

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