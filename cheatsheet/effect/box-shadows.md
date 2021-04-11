---
title: Box Shadows
description: Visual reference of all default box-shadows.
date: 1000-01-03
---

## Drop Shadow Effects

The following table visually represents all drop shadow effects that are available.

<section class="bg-cool-gray bg-tint-800 p-20 radius-md">
  <div class="grid grid-cols-1 gap-20">
    <div class="h-40 shadow-2xs bg-white radius-sm"></div>
    <div class="h-40 shadow-xs bg-white radius-sm"></div>
    <div class="h-40 shadow-sm bg-white radius-sm"></div>
    <div class="h-40 shadow-md bg-white radius-sm"></div>
    <div class="h-40 shadow-lg bg-white radius-sm"></div>
    <div class="h-40 shadow-xl bg-white radius-sm"></div>
    <div class="h-40 shadow-2xl bg-white radius-sm"></div>
  </div>
</section>

## Input State Effects

The following table visually represents all input state effects that are available.

<section class="bg-cool-gray bg-tint-800 p-20 radius-md">
  <div class="grid grid-cols-1 gap-20">
    <input type="text" class="h-40 shadow-focus bg-white radius-sm" placeholder="Focus">
    <input type="text" class="h-40 shadow-success bg-white radius-sm" placeholder="Success">
    <input type="text" class="h-40 shadow-warning bg-white radius-sm" placeholder="Warning">
    <input type="text" class="h-40 shadow-danger bg-white radius-sm" placeholder="Danger">
  </div>
</section>

---

## Class List

Use the following table for `box-shadow` class reference.

| Class | Value |
| - | - |
| `shadow-none` | `0` {.align-top } |
| `shadow-2xs` | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` {.align-top } |
| `shadow-xs` | `0 1px 3px rgba(0, 0, 0, 0.15),`<br />`0 1px 3px rgba(0, 0, 0, 0.2)` {.align-top } |
| `shadow-sm` | `0 3px 6px rgba(0, 0, 0, 0.16),`<br />`0 3px 6px rgba(0, 0, 0, 0.23)` {.align-top } |
| `shadow-md` | `0 10px 20px rgba(0, 0, 0, 0.19),`<br />`0 6px 6px rgba(0, 0, 0, 0.23)` {.align-top } |
| `shadow-lg` | `0 15px 30px rgba(0, 0, 0, 0.25),`<br />`0 10px 10px rgba(0, 0, 0, 0.2)` {.align-top } |
| `shadow-xl` | `0 20px 40px rgba(0, 0, 0, 0.3),`<br />`0 15px 10px rgba(0, 0, 0, 0.2)` {.align-top } |
| `shadow-2xl` | `0 25px 45px rgba(0, 0, 0, 0.3),`<br />`0 20px 20px rgba(0, 0, 0, 0.3)` {.align-top } |
| `shadow-focus` | `0 0 0 4px rgba(32, 96, 223, 0.2)` {.align-top } |
| `shadow-success` | `0 0 0 4px rgba(159, 223, 32, 0.2)` {.align-top } |
| `shadow-warning` | `0 0 0 4px rgba(223, 159, 32, 0.2)` {.align-top } |
| `shadow-danger` | `0 0 0 4px rgba(223, 32, 32, 0.2)` {.align-top } |

{ .text-left style="--markdown-table-cell-padding: 0.75em;" }

---

## Basic Usage

Apply box shadow effect with the `shadow-<size>` utility.

```html
<div class="shadow-lg ...">
  ...
</div>
```

---

## CSS Variables

Customize radiuses by overriding the following CSS custom properties.

```css
:root {
  --shadow-none: 0;

  --shadow-2xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-xs: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.2);
  --shadow-sm: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  --shadow-md: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  --shadow-lg: 0 15px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 10px rgba(0, 0, 0, 0.2);
  --shadow-2xl: 0 25px 45px rgba(0, 0, 0, 0.3), 0 20px 20px rgba(0, 0, 0, 0.3);

  --shadow-focus: 0 0 0 4px rgba(32, 96, 223, 0.2);
  --shadow-success: 0 0 0 4px rgba(159, 223, 32, 0.2);
  --shadow-warning: 0 0 0 4px rgba(223, 159, 32, 0.2);
  --shadow-danger: 0 0 0 4px rgba(223, 32, 32, 0.2);
}
```

