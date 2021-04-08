---
title: XY Shorthands
description: Learn about XY Shorthands
date: 1000-01-08
---

## About XY Shorthands

Directional utilities such as `padding`, `margin`, and `border` can be applied both horizontally and vertically, saving you from having to apply the utility twice in order to achieve a `left` and `right` or `top` and `bottom` effect.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply directional utilities horizontally or vertically, append `x` or `y` as direction.

```html
<div class="px-20 my-36 border-x-1 ...">
  <!--
  - 20px padding, left and right
  - 36px margin, top and bottom
  - 1px border-width, left and right
  -->
</div>
```

---

## Disabling Wrapper

To disable, pass in the utility name to the `exclude` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      padding-x,
      padding-y,
      margin-x,
      margin-y,
      border-x,
      border-y
    )
  )
);
```