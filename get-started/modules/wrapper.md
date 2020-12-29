---
title: Wrapper
description: Learn about the Wrapper module and how you can customize it.
date: 1000-01-04
---

## About Button Module

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

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --wrapper-padding: ...;
  --wrapper-max-width: ...;
  --wrapper-xs-max-width: ...;
  --wrapper-sm-max-width: ...;
  --wrapper-md-max-width: ...;
  --wrapper-lg-max-width: ...;
  --wrapper-xl-max-width: ...;
}
```

---

## How to Disable this Module

By default, all modules are enabled. To disable this wrapper module, pass `wrapper-module` to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      wrapper-module
    )
  )
);
```