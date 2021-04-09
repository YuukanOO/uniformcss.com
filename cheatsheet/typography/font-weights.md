---
title: Font Weights
description: Visual reference of all default font sizes.
date: 1000-01-03
---

## Visual Reference

The following table visually represents all the font-sizes that are available.

| Reference | Class | Weight |
| - | - | - |
| <span class="ultralight color-black text-3xl">Brown Fox</span> | `ultralight` | 100 |
| <span class="extralight color-black text-3xl">Brown Fox</span> | `extralight` | 200 |
| <span class="light color-black text-3xl">Brown Fox</span> | `light` | 300 |
| <span class="regular color-black text-3xl">Brown Fox</span> | `regular` | 400 |
| <span class="medium color-black text-3xl">Brown Fox</span> | `medium` | 500 |
| <span class="semibold color-black text-3xl">Brown Fox</span> | `semibold` | 600 |
| <span class="bold color-black text-3xl">Brown Fox</span> | `bold` | 700 |
| <span class="extrabold color-black text-3xl">Brown Fox</span> | `extrabold` | 800 |
| <span class="ultrabold color-black text-3xl">Brown Fox</span> | `ultrabold` | 900 |

{ .text-left }

---

## Basic Usage

Apply the `<weight>` utility to any text based element.

```html
<h1 class="extrabold">
  H1 Heading
</h1>
```

---

## CSS Variables

You can customize each `font-weight` by overriding the following CSS custom properties.

```css
:root {
  --ultralight: 100;
  --extralight: 200;
  --light: 300;
  --regular: 400;
  --medium: 500;
  --semibold: 600;
  --bold: 700;
  --extrabold: 800;
  --ultrabold: 900;
}
```

