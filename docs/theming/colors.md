---
title: Colors
description: Learn how to customize and manipulate colors.
date: 1000-01-02
---

## Customizing Colors

All colors in Uniform are applied using the HSL model. This opens up opportunities to manipulate colors in a wide range of ways in a composable manner. There are `24` colors in total.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Colors

The following default color configurations are applied.

```scss
@use "uniform" as * with (
  $config: (
    colors: (
      red: ( hue: 0, sat: 75% ),
      orange: ( hue: 20, sat: 75% ),
      yellow: ( hue: 40, sat: 75% ),
      lemon: ( hue: 60, sat: 75% ),
      olive: ( hue: 80, sat: 75% ),
      lime: ( hue: 100, sat: 75% ),
      green: ( hue: 120, sat: 75% ),
      mint: ( hue: 140, sat: 75% ),
      teal: ( hue: 160, sat: 75% ),
      cyan: ( hue: 180, sat: 75% ),
      sky: ( hue: 200, sat: 75% ),
      blue: ( hue: 220, sat: 75% ),
      indigo: ( hue: 240, sat: 75% ),
      purple: ( hue: 260, sat: 75% ),
      orchid: ( hue: 280, sat: 75% ),
      magenta: ( hue: 300, sat: 75% ),
      pink: ( hue: 320, sat: 75% ),
      crimson: ( hue: 340, sat: 75% ),
      white: ( hue: 0, sat: 0% ),
      black: ( hue: 0, sat: 0% ),
      cool-gray: ( hue: 220, sat: 10% ),
      gray: ( hue: 220, sat: 5% ),
      warm-gray: ( hue: 24, sat: 10% ),
      transparent: transparent,
    ),
  )
)
```

---

## Customizing via Sass

To custom existing colors or add new ones, pass in key value pairs to the `colors` setting in your configuration. Values can be passed in as a map or static values. Colors that are passed in as `hue` and `sat` maps will automatically be assigned `50%` lightness and is able to take advantage of color manipulation properties such as `tints`, `shade`, and `opacity`.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    colors: (
      red: ( 
        hue: 10,
        sat: 63% 
      ),
      custom: pink
    ),
  )
)
```

```css
/* styles.css */

:root {
  --red-hue: 10;
  --red-sat: 63%;
}

.color-red {
  --color-ltn: 50%;
  --color-opacity: 1;
  color: hsla(var(--red-hue), var(--red-sat), var(--color-ltn), var(--color-opacity));
}

.color-custom {
  --color-ltn: 50%;
  --color-opacity: 1;
  color: pink;
}
```

---

## Customizing Tints

Tints control the lightness value of a given color. By default, there are `10` levels of tints available and each level follows the `100 ... 900` naming convention. You can override or add new levels by passing in key value pairs to the `tints` setting in your configuration.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    tints: (
      0: 50%,
      100: 55.24%,
      200: 60.46%,
      300: 65.68%,
      400: 70.9%,
      500: 76.12%,
      600: 81.34%,
      700: 86.56%,
      800: 91.78%,
      900: 97%,
    )
  )
)
```

---

## Customizing Shades

Shades control the darkness value of a given color. By default, there are `10` levels of shades available and each level follows the `100 ... 900` naming convention. You can override or add new levels by passing in key value pairs to the `shades` setting in your configuration.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    shades: (
      0: 50%,
      100: 44.76%,
      200: 39.54%,
      300: 34.32%,
      400: 29.1%,
      500: 23.88%,
      600: 18.66%,
      700: 13.44%,
      800: 8.22%,
      900: 3%,
    )
  )
)
```

---

## Customizing Opacities

Opacities control the alpha value of a given color. You can override or add new levels by passing in key value pairs to the `shades` setting in your configuration. The following opacity levels are available by default.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    opacities: (
      '0': 0,
      '02': 0.02,
      '04': 0.04,
      '06': 0.06,
      '08': 0.08,
      10: 0.1,
      20: 0.2,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      80: 0.8,
      90: 0.9,
      100: 1
    )
  )
)
```

---


## Customizing via CDN

If you are using the CDN implementation, you can still customize all existing theme properties by overriding `--<property>-<variant>` CSS custom properties. This method can be particularly useful for when you just want to get started quickly without worrying about a Sass build process. 

```scss
// styles.css

:root {
  --red-hue: 10;
  --red-sat: 63%;
  --blue-hue: 224;
  --blue-sat: 72%;

  --tint-900: 98%;
  --shade-800: 86%;
}
```

> To see the full list of CSS variables inspect element this page.

---

## Disabling Defaults

If you prefer to remove the default settings and add your own, simply pass `null` to any theme property. Additionally, you can add your own by assigning theme settings to the `extend` map.

```scss
@use "uniform" as * with (
  $config: (
    colors: null, // disable default colors
    shades: null,  // disable default shades

    extend: (
      colors: (
        red: ( hue: 10, sat: 63% ),
        custom: pink,
      ),
      shades: (
        100: 44.76%,
        200: 39.54%,
        300: 34.32%,
        400: 29.1%,
        500: 23.88%,
        600: 18.66%,
        700: 13.44%,
        800: 8.22%,
        900: 3%,
      )
    )
  )
)
```
