---
title: Tints
description: Visual reference of all default shades.
date: 1000-01-03
---

## Visual Reference

The following table visually represents all the shades that are available.

| Reference | Shade | Lightness |
| - | - | - |
| { .bg-primary .bg-tint-base } | `base` | 50% |
| { .bg-primary .bg-tint-100 } | `100` | 55.12% |
| { .bg-primary .bg-tint-200 } | `200` | 60.23% |
| { .bg-primary .bg-tint-300 } | `300` | 65.34% |
| { .bg-primary .bg-tint-400 } | `400` | 70.45% |
| { .bg-primary .bg-tint-500 } | `500` | 75.56% |
| { .bg-primary .bg-tint-600 } | `600` | 80.67% |
| { .bg-primary .bg-tint-700 } | `700` | 85.78% |
| { .bg-primary .bg-tint-800 } | `800` | 90.89% |
| { .bg-primary .bg-tint-900 } | `900` | 96% |
| { .bg-primary .bg-tint-full } | `full` | 100% |



{ .text-left }

---

## Basic Usage

Combine tint properties to any color property to change the lightness of the color.

```html
<div class="bg-primary bg-tint-400">
  ...
</div>
```

---

## CSS Variables

Customize tints by overriding the following CSS custom properties.

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

