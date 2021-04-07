---
title: Wrapper
description: Learn about the wrapper special utility
date: 1000-01-01
---

## About Wrapper

The `wrapper` class is commonly seen in standard web layouts as a container for any page content. This utility sets the `max-width` of an element to match the `min-width` of the active breakpoint.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply this utility, apply the `wrapper` class to any parent container.

```html
<!-- index.html  -->

<div class="wrapper">
  ...
</div>
```

```css
/* styles.css */

.wrapper {
  width: 100%;
  margin: auto;
  max-width: var(--wrapper-max-width, 640px);
}
@media (min-width: 768px) {
  .wrapper {
    max-width: var(--wrapper-sm-max-width, 768px);
  }
}
@media (min-width: 1024px) {
  .wrapper {
    max-width: var(--wrapper-md-max-width, 1024px);
  }
}
@media (min-width: 1280px) {
  .wrapper {
    max-width: var(--wrapper-lg-max-width, 1280px);
  }
}
@media (min-width: 1536px) {
  .wrapper {
    max-width: var(--wrapper-xl-max-width, 1536px);
  }
}
```

---

## Customizing Wrapper

You can override the default `max-width` value by defining the following CSS variables.

```css
:root {
  --wrapper-max-width: 640px;
  --wrapper-sm-max-width: 768px;
  --wrapper-md-max-width: 1024px;
  --wrapper-lg-max-width: 1280px;
  --wrapper-xl-max-width: 1536px;
}
```

---

## Disabling Wrapper

To disable this utility, pass `wrapper` to the `exclude` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      wrapper
    )
  )
);
```