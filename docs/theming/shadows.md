---
title: Shadow
description: Learn how to customize default shadows.
date: 1000-01-04
---

## Shadow

Box shadow effects can be applied using via the `shadow` utility. By default, there are 9 shadow effects available. These effects can also be extended, replaced, or overwritten through your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Shadow Variant Chart

By default, Uniform provides **9 shadow effects**. Use the following chart as the reference for each size.

| Variant | Value |
| - | - |
| `xs` | `(0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24))` |
| `sm` | `(0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23))` |
| `md` | `(0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23))` |
| `lg` | `(0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22))` |
| `xl` | `(0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22))` |
| `focus` | `(0 0 0 3px rgb(0, 145, 255, 0.2))` |
| `success` | `(0 0 0 3px rgb(0, 182, 73, 0.2))` |
| `warning` | `(0 0 0 3px rgb(255, 175, 22, 0.2))` |
| `danger` | `(0 0 0 3px rgb(252, 95, 95, 0.2))` |

{.table}

---

## Basic Usage

The following example showcases how the variants can be applied.

<div class="bg-cool-gray bg-tint-800 p-20 h-200px radius-md">
  <div class="grid grid-cols-5 gap-18">
    <div class="shadow-xs ratio-square bg-white">
    </div>
    <div class="shadow-sm ratio-square bg-white">
    </div>
    <div class="shadow-md ratio-square bg-white">
    </div>
    <div class="shadow-lg ratio-square bg-white">
    </div>
    <div class="shadow-xl ratio-square bg-white">
    </div>
    <div class="shadow-focus ratio-square bg-white">
    </div>
    <div class="shadow-focus-success ratio-square bg-white">
    </div>
    <div class="shadow-focus-warning ratio-square bg-white">
    </div>
    <div class="shadow-focus-danger ratio-square bg-white">
    </div>
  </div>
</div>

```html
<div class="shadow-xs ..."></div>
<div class="shadow-sm ..."></div>
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-xl ..."></div>

<div class="shadow-focus ..."></div>
<div class="shadow-focus-success ..."></div>
<div class="shadow-focus-warning ..."></div>
<div class="shadow-focus-danger ..."></div>
```

---

## Extending Shadows

You can customize the default shadows or add new ones by passing key value pairs to the `shadows` theme setting in your configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    shadows: (
      card: ( 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) ),
      chatbox: ( 0 20px 24px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25) ),
    ),
  )
);
```

```css
/* styles.css */
.shadow-card {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.shadow-chatbox {
  box-shadow: 0 20px 24px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
}
...
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables. The following shadow CSS variables can be overwritten.

```css
:root {
  --shadow-xs: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-sm: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  --shadow-md: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  --shadow-lg: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  --shadow-xl: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  --shadow-focus: 0 0 0 3px rgba(0, 145, 255, 0.2);
  --shadow-success: 0 0 0 3px rgba(0, 182, 73, 0.2);
  --shadow-warning: 0 0 0 3px rgba(255, 175, 22, 0.2);
  --shadow-danger: 0 0 0 3px rgba(252, 95, 95, 0.2);
}
```