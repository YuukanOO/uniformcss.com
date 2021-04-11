---
title: Gradients
description: Visual reference of all default gradients.
date: 1000-01-03
---


## Visual Reference

The following table visually represents all the gradients that are available.

:::markdown overflow-auto
| Reference | Class | Gradient |
| - | - | - |
| { .bg-gradient-x-to-black } | `bg-gradient-x-from-white` | `linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)` |
| { .bg-gradient-x-from-black } | `bg-gradient-x-to-white` | `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%)` |
| { .bg-gradient-y-to-black } | `bg-gradient-y-from-white` | `linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%)` |
| { .bg-gradient-y-from-black } | `bg-gradient-y-to-white` | `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%)` |
| { .bg-gradient-x-from-black } | `bg-gradient-x-from-black` | `linear-gradient(to right, black 0%, rgba(0, 0, 0, 0) 100%)` |
| { .bg-gradient-x-to-black } | `bg-gradient-x-to-black` | `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, black 100%)` |
| { .bg-gradient-y-from-black } | `bg-gradient-y-from-black` | `linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 100%)` |
| { .bg-gradient-y-to-black } | `bg-gradient-y-to-black` | `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%)` |

{ .text-left style="--markdown-table-cell-padding: 0.75em;" }
:::



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

Customize gradients by overriding the following CSS custom properties.

```css
:root {
  --gradient-x-from-white: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  --gradient-x-to-white: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%);
  --gradient-y-from-white: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%);
  --gradient-y-to-white: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%);
  --gradient-x-from-black: linear-gradient(to right, black 0%, rgba(0, 0, 0, 0) 100%);
  --gradient-x-to-black: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, black 100%);
  --gradient-y-from-black: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 100%);
  --gradient-y-to-black: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
}
```

