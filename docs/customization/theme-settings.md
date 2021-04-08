---
title: Theme Settings
description: Set global settings to match your theme.
date: 1000-01-03
---


## Theme Settings

The `theme` setting are a set of values that are shared across multiple properties or specific to your project such as, sizing units, fonts, and colors. Theme settings are a powerful and easy way to customize Uniform CSS to match your brand and design.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Theme Setting Usage

Theme settings are shared across multiple CSS properties.

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
.bg-custom-color { background-color: #B20000; }
.color-custom-color { color: #B20000; }
.border-custom-color { border-color: #B20000; }
...
```

---

## Default Theme Settings

Uniform CSS comes pre-set with default theme settings which are applied across its relevant properties. Theme settings are unique in that its values can be accessed using [helper functions](/docs/helper-functions).

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    colors: ( ... ),
    screens: ( ... ),
  )
);
```

---

## Theme Settings Table

The following theme setting definitions apply.

| Setting | Description |
| - | - |
| `colors` | Set of base colors |
| `tint-levels` | Set of the tint levels |
| `shade-levels` | Set of the shade levels |
| `opacity-levels` | Set of the opacity-levels |
| `gradients` | Set of gradients |
| `screens` | Set of the breakpoints |
| `positive-sizes` | Set of the positive sizes |
| `negative-sizes` | Set of the negative sizes |
| `range-limits` | Specify the range limits for size properties |
| `shadows` | Set of the shadows |
| `radiuses` | Set of the radiuses |
| `font-families` | Set of the font-families |
| `font-sizes` | Set of the font-sizes |
| `font-weights` | Set of the font-weights |
| `leadings` | Set of the line-heights |
| `trackings` | Set of the letter-spacings |
| `keyframes` | Set of keyframes |

{.text-left style=""}

---

## Overriding Theme Settings

To override base theme settings, pass key value pairs to each setting in your configuration. Passing in a key that already exists will override the existing value.

```scss
// styles.scss
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
.bg-red { background-color: #B20000; }
.color-red { color: #B20000; }
.border-red { color: #B20000; }
.leading-loose { line-height: 1.6 }
...
```

---

## Disabling Theme Settings

Passing in `null` will disable all default Uniform settings. If you wish to disable defaults and apply your own, you can do so by applying your own theme settings to the `extend` map.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    colors: null,
    extend: (
      colors: (
        mainRed: red,
        mainBlue: blue
      )
    )
  )
);
```

```css
/* styles.css */
.bg-mainRed { background-color: red; }
.bg-mainBlue { background-color: blue; }
```


---

## For more information

For more information on theming, please refer to the dedicated section on theme.