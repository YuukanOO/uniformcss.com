---
title: Sizing System
description: Flexible sizing system to fit any design.
date: 1000-01-02
---

## Sizing System

The ability to customize colors to match design is an important aspect of Uniform CSS. Colors in Uniform are produced using the HSL model which provides opportunities to manipulate colors using composable classes.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Colors

Uniform provides a total of `23` default colors. Color hues are distributed across the color spectrum in increments of 20. The following colors can be applied for `border`, `text`, `placeholder`, and `background-color` properties.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 flex bg-primary">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">primary - h220 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-secondary">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">secondary - h240 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-tertiary">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tertiary - h24 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-red">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">red - h0 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-orange">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">orange - h20 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-yellow">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">yellow - h40 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-lemon">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">lemon - h60 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-olive">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">olive - h80 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-lime">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">lime - h100 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-green">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">green - h120 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-mint">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">mint - h140 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-teal">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">teal - h160 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-cyan">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">cyan - h180 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-sky">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">sky - h200 s75</span>
  </div>
  <div class="radius-sm p-12 flex flex bg-blue">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">blue - h220 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-indigo">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">indigo - h240 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-purple">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">purple - h260 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-orchid">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">orchid - h280 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-magenta">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">magenta - h300 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-pink">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">pink - h320 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-crimson">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">crimson - h340 s75</span>
  </div>
  <div class="radius-sm p-12 flex bg-cool-gray">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">cool-gray - h220 s10</span>
  </div>
  <div class="radius-sm p-12 flex bg-gray">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">gray - h220 s5</span>
  </div>
  <div class="radius-sm p-12 flex bg-warm-gray">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">warm-gray - h24 s10</span>
  </div>
  <div class="radius-sm p-12 flex bg-white">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-60 color-white">white</span>
  </div>
  <div class="radius-sm p-12 flex bg-black border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">black</span>
  </div>
  <div class="radius-sm p-12 flex bg-transparent border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">transparent</span>
  </div>
</div>


---

## Basic Usage

To apply colors, use the property shorthand followed by the color key.

```html
<div class="bg-pink color-white">
  pink background with white text
</div>
<div class="color-blue">
  blue text
</div>
<div class="border-1 border-orange">
  1 pixel orange border
</div>
```

---

## Shades

Shades make your colors darker by changing the lightness value. There are `9` levels of shades available. Similar to Google Material's Design System, Uniform follows the `100 ... 900` syntax for defining shades.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 flex bg-blue bg-shade-base">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-base</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-100">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-100</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-200">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-200</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-300">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-300</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-400">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-400</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-500">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-500</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-600">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-600</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-700">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-700</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-800">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-800</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-900 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-900</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-shade-full border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">shade-full</span>
  </div>
</div>


```html
<div class="bg-blue bg-shade-base">...</div>
<div class="bg-blue bg-shade-100">...</div>
<div class="bg-blue bg-shade-200">...</div>
<div class="bg-blue bg-shade-300">...</div>
<div class="bg-blue bg-shade-400">...</div>
<div class="bg-blue bg-shade-500">...</div>
<div class="bg-blue bg-shade-600">...</div>
<div class="bg-blue bg-shade-700">...</div>
<div class="bg-blue bg-shade-800">...</div>
<div class="bg-blue bg-shade-900">...</div>
<div class="bg-blue bg-shade-full">...</div>
```

---

## Tints

Tints make your base color lighter by changing the lightness value. There are `9` levels of tints available. Similar to Google Material's Design System, Uniform follows the `100 ... 900` syntax for defining shades.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 flex bg-blue bg-tint-base">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-base</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-100">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-100</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-200">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-200</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-300">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-300</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-400">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-400</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-500">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-500</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-600">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-600</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-700">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-700</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-800">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-800</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-900 border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-900</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-tint-full border-1 border-white border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">tint-full</span>
  </div>
</div>

```html
<div class="bg-blue bg-tint-base">...</div>
<div class="bg-blue bg-tint-100">...</div>
<div class="bg-blue bg-tint-200">...</div>
<div class="bg-blue bg-tint-300">...</div>
<div class="bg-blue bg-tint-400">...</div>
<div class="bg-blue bg-tint-500">...</div>
<div class="bg-blue bg-tint-600">...</div>
<div class="bg-blue bg-tint-700">...</div>
<div class="bg-blue bg-tint-800">...</div>
<div class="bg-blue bg-tint-900">...</div>
<div class="bg-blue bg-tint-full">...</div>
```

---

## Opacity

Each color can change in opacity. Color opacity properties manipulates the alpha channel of the HSL color model. By default, there are `15` levels of opacity to choose from.

<div class="grid grid-cols-2 sm.grid-cols-3 gap-10 overflow-hidden">
  <div class="radius-sm p-12 flex bg-blue bg-opacity-0 border-1 border-gray border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-0</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-2 border-1 border-gray border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-2</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-4 border-1 border-gray border-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-4</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-6">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-6</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-8">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-8</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-10">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-10</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-20</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-20">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-30</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-40">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-40</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-50">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-50</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-60">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-60</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-70">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-70</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-80">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-80</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-90">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-90</span>
  </div>
  <div class="radius-sm p-12 flex bg-blue bg-opacity-100">
    <span class="font-xs leading-none bold inline-flex px-6 py-5 radius-xs bg-black bg-opacity-20 color-white">opacity-100</span>
  </div>
</div>

```html
<div class="bg-blue bg-opacity-0">...</div>
<div class="bg-blue bg-opacity-2">...</div>
<div class="bg-blue bg-opacity-4">...</div>
<div class="bg-blue bg-opacity-6">...</div>
<div class="bg-blue bg-opacity-8">...</div>
<div class="bg-blue bg-opacity-10">...</div>
<div class="bg-blue bg-opacity-20">...</div>
<div class="bg-blue bg-opacity-20">...</div>
<div class="bg-blue bg-opacity-40">...</div>
<div class="bg-blue bg-opacity-50">...</div>
<div class="bg-blue bg-opacity-80">...</div>
<div class="bg-blue bg-opacity-90">...</div>
<div class="bg-blue bg-opacity-100">...</div>
```