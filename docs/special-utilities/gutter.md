---
title: Gutter
description: Learn about the Gutter utility.
date: 1000-01-08
---

## About Gutter

The `gutter` utility applies margin-based horizontal or vertical spacing of child elements using the [Lobotomized Owl](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) selector.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply `gutter`, assign the class `gutter-x-<size>` or `gutter-y-<size>` to any parent element.

<div class="flex radius-md bg-cool-gray bg-tint-800 p-20 gutter-x-20">
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-cool-gray color-white">1</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-cool-gray color-white">2</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-cool-gray color-white">3</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-cool-gray color-white">4</div>
</div>

```html
<div class="gutter-x-20">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

```css
.gutter-x-20 > * + * {
  --gutter-right: 0;
  --gutter-left: 1;
  margin: 0 calc(var(--size-20) * var(--gutter-right)) 0 calc(var(--size-20) * var(--gutter-left));
}
```

---

## Gutter Reverse

You can reverse direction of the `margin` that is applied by assigning the `gutter-reverse` utility, this can be useful in situations where `flex-row-reverse` or `flex-col-reverse` is applied.

<div class="flex flex-row-reverse radius-md bg-cool-gray bg-tint-800 p-20 gutter-x-20 gutter-reverse split-x-2">
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-cool-gray color-white">1</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-cool-gray color-white">2</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-cool-gray color-white">3</div>
  <div class="flex align-items-center justify-content-center w-40 h-40 radius-sm bg-cool-gray color-white">4</div>
</div>

```html
<div class="gutter-x-20 gutter-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

---

## Disabling Gutter

To disable, pass in the `gutter` properties to the `exclude` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      gutter-x,
      gutter-y,
      gutter-reverse,     
    )
  )
);
```