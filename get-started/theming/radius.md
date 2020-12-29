---
title: Radius
description: Learn how to customize default radius sizes.
date: 1000-01-03
---

## Radius

Border radius properties can be applied using via the `radius` utility. By default, there are 8 border radius sizes available. These sizes can also be extended, replaced, or overwritten through your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Radius Variant Chart

By default, Uniform provides **8 border radius sizes**. Use the following chart as the reference for each size.

| Variant | Value | Pixels |
| - | - | - |
| `2xs` | `0.125rem` | `2px` |
| `xs` | `0.25rem` | `4px` |
| `sm` | `0.375rem` | `6px` |
| `md` | `0.5rem` | `8px` |
| `lg` | `0.625rem` | `10px` |
| `xl` | `0.75rem` | `12px` |
| `2xl` | `0.875rem` | `14px` |
| `round` | `9999px` | `9999px` |

{.table}

---

## Basic Usage

The following example showcases how the variants can be applied.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-8 gap-18">
    <div class="ratio-square radius-2xs bg-black">
    </div>
    <div class="ratio-square radius-xs bg-black">
    </div>
    <div class="ratio-square radius-sm bg-black">
    </div>
    <div class="ratio-square radius-md bg-black">
    </div>
    <div class="ratio-square radius-lg bg-black">
    </div>
    <div class="ratio-square radius-xl bg-black">
    </div>
    <div class="ratio-square radius-2xl bg-black">
    </div>
    <div class="ratio-square radius-round bg-black">
    </div>
  </div>
</div>

```html
<div class="radius-2xs ..."></div>
<div class="radius-xs ..."></div>
<div class="radius-sm ..."></div>
<div class="radius-md ..."></div>
<div class="radius-lg ..."></div>
<div class="radius-xl ..."></div>
<div class="radius-2xl ..."></div>
<div class="radius-round ..."></div>
```

---

## Extending Radius

You can customize the default sizes or add new ones by passing key value pairs to the `radiuses` setting in your configuration. Customizations applied to the `radiuses` setting will be universally applied across all border radius related properties such as `border-radius`, `border-top-right-radius` etc.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    radiuses: (
      custom: 5px,
      card: 7px,
    ),
  )
);
```

```css
/* styles.css */
.radius-custom {
  border-radius: 5px;
}
.radius-card {
  border-radius: 7px;
}
...
```

> Configuring radius sizes work in a similar way to other types of configuration in Uniform CSS. If the key exists, it will override the existing key otherwise it will be included as new variant.

---


## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables. The following radius CSS variables can be overwritten.

### Radius CSS Variables

```css
:root {
  --radius-2xs: 0.125rem;
  --radius-xs: 0.25rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.625rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 0.875rem;
  --radius-round: 9999px;
}
```