---
title: Opacities
description: Visual reference of all default opacities.
date: 1000-01-03
---

## Visual Reference

The following table visually represents all the opacities that are available.

| Reference | Class | Opacity |
| - | - | - |
| { .bg-black .bg-opacity-0 } | `opacity-0` | 0 |
| { .bg-black .bg-opacity-2 } | `opacity-2` | 0.02 |
| { .bg-black .bg-opacity-4 } | `opacity-4` | 0.04 |
| { .bg-black .bg-opacity-6 } | `opacity-6` | 0.06 |
| { .bg-black .bg-opacity-8 } | `opacity-8` | 0.08 |
| { .bg-black .bg-opacity-10 } | `opacity-10` | 0.1 |
| { .bg-black .bg-opacity-20 } | `opacity-20` | 0.2 |
| { .bg-black .bg-opacity-30 } | `opacity-30` | 0.3 |
| { .bg-black .bg-opacity-40 } | `opacity-40` | 0.4 |
| { .bg-black .bg-opacity-50 } | `opacity-50` | 0.5 |
| { .bg-black .bg-opacity-60 } | `opacity-60` | 0.6 |
| { .bg-black .bg-opacity-70 } | `opacity-70` | 0.7 |
| { .bg-black .bg-opacity-80 } | `opacity-80` | 0.8 |
| { .bg-black .bg-opacity-90 } | `opacity-90` | 0.9 |
| { .bg-black .bg-opacity-100 } | `opacity-100` | 1 |

{ .text-left }

---

## Basic Usage

Apply opacity effect with the `opacity-<variant>` utility..

```html
<div class="opacity-20 ...">
  ...
</div>
```

---

## Color Opacity Usage

Opacities can also be applied to color related properties such as `background-color`, `border-color`, `color`, and etc.

```html
<div class="bg-black bg-opacity-50">
  ...
</div>

<div class="color-red color-opacity-20">
  ...
</div>
```

---

## CSS Variables

Customize opacities by overriding the following CSS custom properties.

```css
:root {
  --opacity-0: 0;
  --opacity-2: 0.02;
  --opacity-4: 0.04;
  --opacity-6: 0.06;
  --opacity-8: 0.08;
  --opacity-10: 0.1;
  --opacity-20: 0.2;
  --opacity-30: 0.3;
  --opacity-40: 0.4;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-70: 0.7;
  --opacity-80: 0.8;
  --opacity-90: 0.9;
  --opacity-100: 1;
}
```

