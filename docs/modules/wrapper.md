---
title: Wrapper
description: Everything to know about the Wrapper module
date: 1000-01-04
---

## About Wrapper Module

The Wrapper module is an optional pre-built component that provides `max-width` set containerization to your page layout.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Wrapper Module

To apply this module assign the class `wrapper` to your element.

```html
<div class="wrapper">
  ...
</div>
```

---

## Customizing Basic Button

The following CSS variable hooks are available to customize. There are three default max-widths you can assign, each with `20px` padding on the left and right border of your container element.

```css
/* styles.css */
:root {
  --wrapper-padding: 1.25rem; /* 20px */
  --wrapper-max-width: 808px;
  --wrapper-sm-max-width: 1064px;
  --wrapper-md-max-width: 1180px;
  --wrapper-lg-max-width: 1320px;
}
```

---

## How to Disable this Module

By default, all modules are enabled. To disable this wrapper module, pass `module-wrapper` to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      module-wrapper
    )
  )
);
```