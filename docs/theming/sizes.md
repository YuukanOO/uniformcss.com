---
title: Sizes
description: Learn how to customize default sizing units.
date: 1000-01-04
---

## Sizes

Sizes are applied in varying degree of ranges across size related property such as `width` and `margin` support different ranges of sizes. Sizing units can be extended, replaced, or overwritten through your configuration. For more information on sizes, visit [Sizing System](/docs/sizing-system)

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Customizing via Sass

Size settings are available as two groups, `positive-sizes` and `negative-sizes`. You can add your own sizes by passing in key value pairs to each of these maps in your configuration.

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

### Why are there two groups?

During the Sass compilation process, the sizing maps are shared and used to generate size related properties. However, negative sizes are only used for properties such as `translate` and `margin` and do not apply to properties such as `width` and `padding`. This is why groups are separated into positive and negative sizes.

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

## Disabling Defaults

You can remove all default radiuses by passing `null` to the `positive-sizes` or `negative-sizes` settings.

```scss
@use "uniform" as * with (
  $config: (
    positive-sizes: null,
    negative-sizes: null
  )
)
