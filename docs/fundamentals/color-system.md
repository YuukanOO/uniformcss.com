---
title: Color System
description: Semantic color system to match your brand.
date: 1000-01-02
---

## Color System

Customizing and manipulating colors to match your brand or design is an important aspect of Uniform CSS. Colors in Uniform are produced using the HSL model which provide useful ways to manipulate colors using composable classes.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Colors

Uniform provides a total of `24` default colors. Color hues are positioned spaced across the spectrum in increments of 20. The following colors can be applied across borders, text, and backgrounds.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 bg-red color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">red • h0 s75</span>
  </div>
  <div class="radius-sm p-12 bg-orange color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">orange • h20 s75</span>
  </div>
  <div class="radius-sm p-12 bg-yellow color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">yellow • h40 s75</span>
  </div>
  <div class="radius-sm p-12 bg-lemon color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">lemon • h60 s75</span>
  </div>
  <div class="radius-sm p-12 bg-olive color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">olive • h80 s75</span>
  </div>
  <div class="radius-sm p-12 bg-lime color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">lime • h100 s75</span>
  </div>
  <div class="radius-sm p-12 bg-green color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">green • h120 s75</span>
  </div>
  <div class="radius-sm p-12 bg-mint color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">mint • h140 s75</span>
  </div>
  <div class="radius-sm p-12 bg-teal color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">teal • h160 s75</span>
  </div>
  <div class="radius-sm p-12 bg-cyan color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">cyan • h180 s75</span>
  </div>
  <div class="radius-sm p-12 bg-sky color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">sky • h200 s75</span>
  </div>
  <div class="radius-sm p-12 bg-blue color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">blue • h220 s75</span>
  </div>
  <div class="radius-sm p-12 bg-indigo color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">indigo • h240 s75</span>
  </div>
  <div class="radius-sm p-12 bg-purple color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">purple • h260 s75</span>
  </div>
  <div class="radius-sm p-12 bg-orchid color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">orchid • h280 s75</span>
  </div>
  <div class="radius-sm p-12 bg-magenta color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">magenta • h300 s75</span>
  </div>
  <div class="radius-sm p-12 bg-pink color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">pink • h320 s75</span>
  </div>
  <div class="radius-sm p-12 bg-crimson color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">crimson • h340 s75</span>
  </div>
  <div class="radius-sm p-12 bg-cool-gray color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">cool-gray • h220 s10</span>
  </div>
  <div class="radius-sm p-12 bg-gray color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">gray • h220 s5</span>
  </div>
  <div class="radius-sm p-12 bg-warm-gray color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">warm-gray • h24 s10</span>
  </div>
  <div class="radius-sm p-12 bg-black color-white font-xs font-bold">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">black</span>
  </div>
  <div class="radius-sm p-12 bg-white color-black font-xs font-bold border-1">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">white</span>
  </div>
  <div class="radius-sm p-12 bg-transparent color-white font-xs font-bold border-1">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">transparent</span>
  </div>
</div>

---

## Basic Usage

To apply colors, apply the color key to any color related utility property.

```html
<div class="bg-pink color-white">
  Pink background with white text
</div>
<div class="color-accent-blue">
  Accent blue text
</div>
<div class="border-1 border-orange">
  Orange border
</div>
```

---

## Shades

Shades make your colors darker. There are `10` levels of shades available. Similar to Google Material's Design System, Uniform follows the `100 ... 900` syntax for defining shades.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 bg-blue bg-shade-100">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-100</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-shade-200">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-200</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-shade-300">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-300</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-shade-400">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-400</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-shade-500">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-500</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-shade-600">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-600</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-shade-700">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-700</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-shade-800">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-800</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-shade-900">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-900</span>
  </div>
</div>

```html
<div class="bg-blue bg-shade-0">...</div>
<div class="bg-blue bg-shade-100">...</div>
<div class="bg-blue bg-shade-200">...</div>
<div class="bg-blue bg-shade-300">...</div>
<div class="bg-blue bg-shade-400">...</div>
<div class="bg-blue bg-shade-500">...</div>
<div class="bg-blue bg-shade-600">...</div>
<div class="bg-blue bg-shade-700">...</div>
<div class="bg-blue bg-shade-800">...</div>
<div class="bg-blue bg-shade-900">...</div>
```

---

## Tints

Tints make your base color lighter. There are `10` levels of tints available. Similar to Google Material's Design System, Uniform follows the `100 ... 900` syntax for defining shades.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 bg-blue bg-tint-100">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-100</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-tint-200">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-200</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-tint-300">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-300</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-tint-400">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-400</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-tint-500">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-500</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-tint-600">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-600</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-tint-700">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-700</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-tint-800">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-800</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-tint-900">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-900</span>
  </div>
</div>

```html
<div class="bg-blue bg-tint-0">...</div>
<div class="bg-blue bg-tint-100">...</div>
<div class="bg-blue bg-tint-200">...</div>
<div class="bg-blue bg-tint-300">...</div>
<div class="bg-blue bg-tint-400">...</div>
<div class="bg-blue bg-tint-500">...</div>
<div class="bg-blue bg-tint-600">...</div>
<div class="bg-blue bg-tint-700">...</div>
<div class="bg-blue bg-tint-800">...</div>
<div class="bg-blue bg-tint-900">...</div>
```

---

## Opacity

Each color can change in opacity. Color opacity manipulates the alpha channel of the HSL color model. By default, there are `15` levels of opacity to choose from.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 bg-blue bg-opacity-0 border-1 border-gray border-tint-800">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-0</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-02 border-1 border-gray border-tint-800">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-02</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-04 border-1 border-gray border-tint-800">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-04</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-06">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-06</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-08">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-08</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-10">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-10</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-20">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-20</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-20">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-30</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-40">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-40</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-50">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-50</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-60">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-60</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-70">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-70</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-80">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-80</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-90">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-90</span>
  </div>
  <div class="radius-sm p-12 bg-blue bg-opacity-100">
    <span class="font-xs font-bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-100</span>
  </div>
</div>

```html
<div class="bg-blue bg-opacity-0">...</div>
<div class="bg-blue bg-opacity-02">...</div>
<div class="bg-blue bg-opacity-04">...</div>
<div class="bg-blue bg-opacity-06">...</div>
<div class="bg-blue bg-opacity-08">...</div>
<div class="bg-blue bg-opacity-10">...</div>
<div class="bg-blue bg-opacity-20">...</div>
<div class="bg-blue bg-opacity-20">...</div>
<div class="bg-blue bg-opacity-40">...</div>
<div class="bg-blue bg-opacity-50">...</div>
<div class="bg-blue bg-opacity-80">...</div>
<div class="bg-blue bg-opacity-90">...</div>
<div class="bg-blue bg-opacity-100">...</div>
```

---