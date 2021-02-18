---
title: Theme Settings
description: Set global settings to match your theme.
date: 1000-01-03
---


## Theme Settings

The `theme` setting specifies global theme related settings such as sizing units, fonts, and colors. Theme settings are a powerful and easy way to customize Uniform CSS to match your product and design. Many of the theme settings are shared across multiple related CSS properties such as `background-color` and `color`.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Theme Setting Usage

Theme settings are shared across multiple related CSS properties.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    colors: (
      custom-color: #B20000,
    )
  )
);
```

```css
/* styles.css */
.bg-custom-color {background-color: #B20000;}
.color-custom-color {color: #B20000;}
.border-custom-color {color: #B20000;}
...
```

---

## Default Theme Settings

Uniform CSS comes pre-set with default theme settings which are applied across its related properties. Theme settings are unique in that its values can be accessed through various theme helper functions.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    colors: (...),
    ...
  )
);
```

---

## Theme Settings Table

The following theme setting definitions apply.

| Setting | Description |
| - | - |
| `colors` | Specifies the base colors |
| `tint-levels` | Specifies the tint levels |
| `shade-levels` | Specifies the shade levels |
| `opacity-levels` | Specifies the opacity-levels |
| `gradients` | Specifies the base gradients |
| `breakpoints` | Specifies the base breakpoints |
| `positive-sizes` | Specifies the positive base sizes |
| `negative-sizes` | Specifies the negative base sizes |
| `range-limits` | Specify the size limits for size properties |
| `shadows` | Specifies the base shadows |
| `radiuses` | Specifies the base radiuses |
| `font-families` | Specifies the base font-families |
| `font-sizes` | Specifies the base font-sizes |
| `font-weights` | Specifies the base font-weights |
| `leadings` | Specifies the base line-heights |
| `trackings` | Specifies the base letter-spacings |


{.table}

---

## Overriding Theme Settings

To override base theme settings, pass key value pairs to each setting in your configuration. Passing in a key that already exists will override the existing value.

```scss
// default values
@use "uniform" as * with (
  $config: (
    colors: (
      red: #B20000,
      ...
    ),
    leadings: (
      loose: 1.6,
      ...
    )
  )
);
```

```css
/* styles.css */
.bg-red {background-color: #B20000;}
.color-red {color: #B20000;}
.border-red {color: #B20000;}
.leading-loose {line-height: 1.6}
...
```

---


## Disabling Theme Settings

Theme settings can be disabled by passing the value `null` to each setting.

```scss
// default values
@use "uniform" as * with (
  $config: (
    colors: null,
    leadings: null,
    ...
  )
);
```

---

## For more information

For more information on customizing your theme, please refer to the dedicated section on theme in the docs.