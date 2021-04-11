---
title: Shades
description: Visual reference of all default shades.
date: 1000-01-03
---

## Visual Reference

The following table visually represents all the shades that are available.

| Reference | Shade | Lightness |
| - | - | - |
| { .bg-primary .bg-shade-base } | `base` | 50% |
| { .bg-primary .bg-shade-100 } | `100` | 44.9% |
| { .bg-primary .bg-shade-200 } | `200` | 39.79% |
| { .bg-primary .bg-shade-300 } | `300` | 34.68% |
| { .bg-primary .bg-shade-400 } | `400` | 29.57% |
| { .bg-primary .bg-shade-500 } | `500` | 24.46% |
| { .bg-primary .bg-shade-600 } | `600` | 19.35% |
| { .bg-primary .bg-shade-700 } | `700` | 14.24% |
| { .bg-primary .bg-shade-800 } | `800` | 9.13% |
| { .bg-primary .bg-shade-900 } | `900` | 4% |
| { .bg-primary .bg-shade-full } | `full` | 0% |

{ .text-left }

---

## Basic Usage

Combine shade properties to any color property to change the lightness of the color.

```html
<div class="bg-primary bg-shade-400">
  ...
</div>
```

---

## CSS Variables

Customize shades by overriding the following CSS custom properties.

```css
:root {
  --shade-base: 50%;
  --shade-100: 44.9%;
  --shade-200: 39.79%;
  --shade-300: 34.68%;
  --shade-400: 29.57%;
  --shade-500: 24.46%;
  --shade-600: 19.35%;
  --shade-700: 14.24%;
  --shade-800: 9.13%;
  --shade-900: 4%;
  --shade-full: 0%;
}
```

