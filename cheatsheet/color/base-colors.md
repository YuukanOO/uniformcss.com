---
title: Base Colors
description: Visual reference of all default colors.
date: 1000-01-03
---

## Visual Reference

The following table visually represents all the colors that are available.

| Color | Name | HSL |
| - | - | - |
| { .bg-red } | `red` | h0 s75 l50 |
| { .bg-orange } | `orange` | h20 s75 l50 |
| { .bg-yellow } | `yellow` | h40 s75 l50 |
| { .bg-lemon } | `lemon` | h60 s75 l50 |
| { .bg-olive } | `olive` | h80 s75 l50 |
| { .bg-lime } | `lime` | h100 s75 l50 |
| { .bg-green } | `green` | h120 s75 l50 |
| { .bg-mint } | `mint` | h140 s75 l50 |
| { .bg-teal } | `teal` | h160 s75 l50 |
| { .bg-cyan } | `cyan` | h180 s75 l50 |
| { .bg-sky } | `sky` | h200 s75 l50 |
| { .bg-blue } | `blue` | h220 s75 l50 |
| { .bg-indigo } | `indigo` | h240 s75 l50 |
| { .bg-purple } | `purple` | h260 s75 l50 |
| { .bg-orchid } | `orchid` | h280 s75 l50 |
| { .bg-magenta } | `magenta` | h300 s75 l50 |
| { .bg-pink } | `pink` | h320 s75 l50 |
| { .bg-crimson } | `crimson` | h340 s75 l50 |
| { .bg-white } | `white` | h0 s0 l100 |
| { .bg-black } | `black` | h0 s0 l0 |
| { .bg-cool-gray } | `cool-gray` | h220 s10 l50 |
| { .bg-gray } | `gray` | h0 s0 l50 |
| { .bg-warm-gray } | `warm-gray` | h24 s10 l50 |
| { .bg-primary } | `primary` | h220 s75 l50 |
| { .bg-secondary } | `secondary` | h220 s50 l50 |
| { .bg-tertiary } | `tertiary` | h220 s25 l50 |
| { .bg-transparent } | `transparent` | transparent |
| { .bg-current } | `current` | currentColor |


{ .text-left }

---

## Basic Usage

Colors only apply to color related property. Apply colors using `<property>-<color>`.

```html
<div class="bg-red">
  ...
</div>

<div class="border-blue">
  ...
</div>

<h1 class="color-orange">
  ...
</h1>
```

---

## CSS Variables

Customize hue and saturation of colors by overriding the following CSS custom properties.

```css
:root {
  --red-hue: 0;
  --red-sat: 75%;
  --orange-hue: 20;
  --orange-sat: 75%;
  --yellow-hue: 40;
  --yellow-sat: 75%;
  --lemon-hue: 60;
  --lemon-sat: 75%;
  --olive-hue: 80;
  --olive-sat: 75%;
  --lime-hue: 100;
  --lime-sat: 75%;
  --green-hue: 120;
  --green-sat: 75%;
  --mint-hue: 140;
  --mint-sat: 75%;
  --teal-hue: 160;
  --teal-sat: 75%;
  --cyan-hue: 180;
  --cyan-sat: 75%;
  --sky-hue: 200;
  --sky-sat: 75%;
  --blue-hue: 220;
  --blue-sat: 75%;
  --indigo-hue: 240;
  --indigo-sat: 75%;
  --purple-hue: 260;
  --purple-sat: 75%;
  --orchid-hue: 280;
  --orchid-sat: 75%;
  --magenta-hue: 300;
  --magenta-sat: 75%;
  --pink-hue: 320;
  --pink-sat: 75%;
  --crimson-hue: 340;
  --crimson-sat: 75%;
  --white-hue: 0;
  --white-sat: 0%;
  --black-hue: 0;
  --black-sat: 0%;

  --cool-gray-hue: 220;
  --cool-gray-sat: 10%;
  --gray-hue: 0;
  --gray-sat: 0%;
  --warm-gray-hue: 24;
  --warm-gray-sat: 10%;
  
  --primary-hue: 220;
  --primary-sat: 75%;
  --secondary-hue: 220;
  --secondary-sat: 50%;
  --tertiary-hue: 220;
  --tertiary-sat: 25%;

  --transparent: transparent;
  --current: currentColor;
}
```

