---
title: Sizes
description: Learn how to customize default sizing units.
date: 1000-01-04
---

## Sizes

Uniform CSS provides 40 rem based sizing units across all size related properties such as `width` and `height`. Sizing units can be extended, replaced, or overwritten through your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Sizing Chart

By default, Uniform provides **40 sizing units**. The variant key for each sizing unit is the exact number in pixel size. Use the following chart as the reference for each size.

| Variant | Value |
| - | - |
| 0 | `0` |
| 1 | `1px` |
| 2 | `2px` |
| 3 | `3px` |
| 4 | `0.25rem` |
| 5 | `0.312rem` |
| 6 | `0.375rem` |
| 7 | `0.437rem` |
| 8 | `0.5rem` |
| 9 | `0.562rem` |
| 10 | `0.625rem` |
| 12 | `0.75rem` |
| 14 | `0.875rem` |
| 16 | `1rem` |
| 18 | `1.125rem` |
| 20 | `1.25rem` |
| 24 | `1.5rem` |
| 28 | `1.75rem` |
| 32 | `2rem` |
| 36 | `2.25rem` |
| 40 | `2.5rem` |
| 48 | `3rem` |
| 56 | `3.5rem` |
| 64 | `4rem` |
| 72 | `4.5rem` |
| 80 | `5rem` |
| 96 | `6rem` |
| 112 | `7rem` |
| 128 | `8rem` |
| 144 | `9rem` |
| 160 | `10rem` |
| 192 | `12rem` |
| 224 | `14rem` |
| 256 | `16rem` |
| 288 | `18rem` |
| 320 | `20rem` |
| 384 | `24rem` |
| 448 | `28rem` |
| 512 | `32rem` |
| 576 | `36rem` |
| 640 | `40rem` |

{.table}

---

## Basic Usage

The following example showcases how the variants can be applied.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-5 gap-18">
    <div>
      <div class="w-24 h-24 radius-round bg-black">
      </div>
    </div>
    <div>
      <div class="w-32 h-32 radius-round bg-black">
      </div>
    </div>
    <div>
      <div class="w-36 h-36 radius-round bg-black">
      </div>
    </div>
    <div>
      <div class="w-48 h-48 radius-round bg-black">
      </div>
    </div>
    <div>
      <div class="w-64 h-64 radius-round bg-black">
      </div>
    </div>
  </div>
</div>

```html
<div class="w-24 h-24 ..."></div>
<div class="w-32 h-32 ..."></div>
<div class="w-36 h-36 ..."></div>
<div class="w-48 h-48 ..."></div>
<div class="w-64 h-64 ..."></div>
```

---

## Dealing with Negative Units

In Uniform, negative sizes can be applied by appending `n` in front of the unit number.

```html
<div class="mt-n32 ...">
Negative 32px margin-top
</div>
```

---

## Extending Sizes

You can customize the default sizing or add new ones by passing key value pairs to the `positive-sixes` and `negative-sizes` setting in your theme configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    positive-sizes: (
      400: 400px
    ),
    negative-sizes: (
      n400: -400px
    )
  )
);
```

```css
/* styles.css */
.mt-400 {
  margin-top: 400px;
}
.mt-n400 {
  margin-top: -400px;
}
...
```
