---
title: Radius
description: Learn how to customize default radius sizes.
date: 1000-01-03
---

## Radius

Border radius properties can be applied using via the `radius` utility. By default, there are 9 border radius sizes available. These sizes can also be extended, replaced, or overwritten through your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Radiuses

The following default radius configurations are applied. To see a more visual reference of all radiuses, visit [Cheatsheet](/cheatsheet).

```scss
@use "uniform" as * with (
  $config: (
    radiuses: (
      none: 0,
      2xs: rem(3),
      xs: rem(4),
      sm: rem(6),
      md: rem(8),
      lg: rem(12),
      xl: rem(18),
      2xl: rem(24),
      full: 9999px,
    ),
  )
)
```

---

## Customizing via Sass

You can add your own radius by passing in key value pairs to the `radiuses` map in your configuration. Customizations applied to the `radiuses` setting will be universally applied across all border radius related properties such as `border-radius`, `border-top-right-radius` etc.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    radiuses: (
      custom: 5px,
      card: 7px,
    ),
  )
);
```

```css
/* styles.css */
.radius-custom {
  border-radius: 5px;
}
.radius-card {
  border-radius: 7px;
}
...
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables.

```css
:root {
  --radius-none: 0;
  --radius-2xs: 0.1875rem;
  --radius-xs: 0.25rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1.125rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
}
```

---

## Disabling Defaults

You can remove all default radiuses by passing `null` to the `radiuses` setting.

```scss
@use "uniform" as * with (
  $config: (
    radiuses: null
  )
)
