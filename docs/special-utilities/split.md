---
title: Split
description: Learn about the Split utility.
date: 1000-01-08
---

## About Split

The `split` utility applies horizontal or vertical dividing borders to child elements.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply `split`, assign the class `split-x-<size>` or `split-y-<size>` to any parent element.

<div class="radius-md bg-cool-gray bg-tint-800 split-y-2 px-20 split-gray">
  <div class="h-40"></div>
  <div class="h-40"></div>
  <div class="h-40"></div>
  <div class="h-40"></div>
</div>

```html
<div class="split-y-2 split-gray">
  <div class="h-40"></div>
  <div class="h-40"></div>
  <div class="h-40"></div>
  <div class="h-40"></div>
</div>
```

```css
.split-gray > * + * {
  --split-ltn: 50%;
  --split-opacity: 1;
  border-color: hsla(var(--gray-hue), var(--gray-sat), var(--split-ltn), var(--split-opacity));
}

.split-y-2 > * + * {
  --split-top: 1;
  --split-bottom: 0;
  border-width: calc(var(--size-2) * var(--split-top)) 0 calc(var(--size-2) * var(--split-bottom)) 0;
}
```
---

## Split Widths

The `split` utility behaves similarly to the `border` utility and the same number of variants apply.

```html
<div class="split-y-1 ...">
  ...
</div>

<div class="split-y-2 ...">
  ...
</div>

<div class="split-y-3 ...">
  ...
</div>

<div class="split-y-4 ...">
  ...
</div>

<div class="split-y-5 ...">
  ...
</div>

<div class="split-y-6 ...">
  ...
</div>

<div class="split-y-7 ...">
  ...
</div>

<div class="split-y-8 ...">
  ...
</div>
```

---

## Split Reverse

You can reverse direction of the `border` that is applied by assigning the `split-reverse` utility, this can be useful in situations where `flex-row-reverse` or `flex-col-reverse` is applied.

```html
<div class="split-x-2 split-reverse">
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

---

## Split Manipulation

All `border` related properties such as color, style, and opacity can be applied to the `split` utility.

```html
<div class="split-x-2 split-gray split-dotted split-opacity-40 split-tint-400">
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

---

## Disabling Split

To disable `split` utilities, pass in each utility name to the `exclude` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      split-x,
      split-y,
      split-reverse,
      split-color,
      split-opacity,
      split-tint,
      split-shade,
      split-style      
    )
  )
);
```