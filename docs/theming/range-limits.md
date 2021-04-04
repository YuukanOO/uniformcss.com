---
title: Range Limits
description: Learn how to customize sizing range limits.
date: 1000-01-04
---

## Range Limits

Size based properties such as `width` and `margin` utilize the [size maps](/docs/sizing-system) to generate each variant, however, each of these properties pull different range of sizes. The `range-limits` setting allows you to control how many sizes are pulled to generate the variants for each size based property.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Range Limits

The following default range limit configurations are applied for each property type. For each property, the list represents the beginning and end range of supported size levels. For example, `(1, 41)` size level  To see a more visual reference of all radiuses, visit [Cheatsheet](/cheatsheet).

```scss
@use "uniform" as * with (
  $config: (
    range-limits: (
      margin: (1, 41),
      padding: (1, 41),
      width: (1, 41),
      min-width: (1, 1),
      max-width: (34, 41),
      height: (1, 41),
      min-height: (1, 1),
      max-height: (1, 41),
      gap: (1, 29),
      gutter: (1, 29),
      border-width: (1, 9),
      split-width: (1, 9),
      top: (1, 29),
      right: (1, 29),
      bottom: (1, 29),
      left: (1, 29),
      translate-x: (1, 29),
      translate-y: (1, 29)
    ),
  )
)
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables. To see a list of all CSS custom properties, view the list by opening your browser's developer tools dialog.

```css
:root {
  --size-1: 1px;
  --size-2: 2px;
  --size-3: 3px;
  --size-4: 0.25rem;
  --size-5: 0.3125rem;
  --size-6: 0.375rem;
  --size-7: 0.4375rem;
  --size-8: 0.5rem;
  --size-9: 0.5625rem;
  --size-10: 0.625rem;
  ...
}
```

---

## Defining Range Limits

---

## Disabling Defaults

You can remove all default radiuses by passing `null` to the `positive-sizes` or `negative-sizes` settings.

```scss
@use "uniform" as * with (
  $config: (
    positive-sizes: null,
    negative-sizes: null
  )
)
