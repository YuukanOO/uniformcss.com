---
title: Gradients
description: Learn how to customize and manipulate gradients.
date: 1000-01-02
---

## Adjusting Base Colors

All base colors in Uniform CSS can be quickly adjusted by overriding CSS variables to match Hue, Saturation, and Lightness of your brand and design. For each color you can adjust its color properties across all its set or on an individual swatch basis.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

### How Color Fallbacks Work

Uniform applies provides two levels of undefined hue and saturation CSS variables that can be overwritten. Each level takes precedence over the other meaning you can scope the hue controls to the set or on an individual swatch basis.

For example, lets say the color `primary-500` has a base hue value set to `225`. Defining the `--primary-hue` variable will adjust the hue across all the primary set. However, defining the `--primary-500-hue` variable will further override the previously defined variable and apply the newly defined value to the `500` shade only. 

```scss
:root {
  --primary-hue: 20; // Universally overrides hue for all primary colors
  --primary-500-hue: 75; // This takes precendence for the 500 shade only
}
```

> **Note**, the same principle can be applied for saturations. Saturation overrides work in a similar way but with the `sat` keyword instead. For example, `--primary-sat` and `--primary-500-sat`.

### Adjusting Set Hues

To begin, you can rotate the hue by overriding the `--<color>-hue` variable.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-3 leading-6 gap-18">
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-500">
      primary-500
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-600">
      primary-600
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-700">
      primary-700
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-500" style="--primary-hue: 75;">
      primary-500
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-600" style="--primary-hue: 75;">
      primary-600
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-700" style="--primary-hue: 75;">
      primary-700
    </div>
  </div>
</div>

```html
<div class="bg-primary-500 ..."></div>
<div class="bg-primary-600 ..."></div>
<div class="bg-primary-700 ..."></div>
<div class="bg-primary-500 ..." style="--primary-hue: 75;"></div>
<div class="bg-primary-600 ..." style="--primary-hue: 75;"></div>
<div class="bg-primary-700 ..." style="--primary-hue: 75;"></div>
```

### Adjusting Swatch Hue

If you want more control over a particular shade of a color you can override the hue of a shade instead e.g.`--<color>-<shade>-hue`.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-2 leading-6 gap-18">
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-500">
      primary-500
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-600">
      primary-600
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-500" style="--primary-500-hue: 20;">
      primary-500
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-600" style="--primary-600-hue: 75;">
      primary-600
    </div>
  </div>
</div>

```html
<div class="bg-primary-500 ..."></div>
<div class="bg-primary-600 ..."></div>
<div class="bg-primary-500 ..." style="--primary-500-hue: 20;"></div>
<div class="bg-primary-600 ..." style="--primary-600-hue: 75;"></div>
```

### Adjusting Set Saturations

To begin, you can adjust the base saturation of each set by overriding the `--<color>-sat` variable. Note, values must be declared as a percentage.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-3 leading-6 gap-18">
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-500">
      primary-500
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-600">
      primary-600
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-700">
      primary-700
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-500" style="--primary-sat: 75%;">
      primary-500
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-600" style="--primary-sat: 75%;">
      primary-600
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-700" style="--primary-sat: 75%;">
      primary-700
    </div>
  </div>
</div>

```html
<div class="bg-primary-500 ..."></div>
<div class="bg-primary-600 ..."></div>
<div class="bg-primary-700 ..."></div>
<div class="bg-primary-500 ..." style="--primary-sat: 75%;"></div>
<div class="bg-primary-600 ..." style="--primary-sat: 75%;"></div>
<div class="bg-primary-700 ..." style="--primary-sat: 75%;"></div>
```

### Adjusting Swatch Saturation

If you wish to control the saturation of a particular shade, you can do so by overriding `--<color>-<shade>-sat`.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-2 leading-6 gap-18">
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-500">
      primary-500
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-600">
      primary-600
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-500" style="--primary-500-sat: 20%;">
      primary-500
    </div>
    <div class="radius-sm p-12 text-white font-xs font-bold bg-primary-600" style="--primary-600-sat: 95%;">
      primary-600
    </div>
  </div>
</div>

```html
<div class="bg-primary-500 ..."></div>
<div class="bg-primary-600 ..."></div>
<div class="bg-primary-500 ..." style="--primary-500-sat: 20%;"></div>
<div class="bg-primary-600 ..." style="--primary-600-sat: 95%;"></div>
```

---

## Advanced Color Manipulation

All colors in Uniform CSS are defined using HSL. This opens up the opportunity of adjusting saturation and lightness using utility properties. By doing so, color vibrancy and shade can be manipulated in a composable manner.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-4 leading-6 gap-18">
    <div class="ratio-square radius-sm bg-red"></div>
    <div class="ratio-square radius-sm bg-red bg-brighten-5"></div>
    <div class="ratio-square radius-sm bg-red bg-darken-2"></div>
    <div class="ratio-square radius-sm bg-red bg-lighten-8"></div>
  </div>
</div>

```html
<div class="bg-red ..."></div>
<div class="bg-red bg-brighten-5 ..."></div>
<div class="bg-red bg-darken-2 ..."></div>
<div class="bg-red bg-lighten-8 ..."></div>
```

### How Color Manipulation Works

The advanced color manipulation feature is only available to `background-color`, `color`, `border-color`, and `split-color` properties. For each type of manipulation the utility shorthand of the property you're trying to affect must be included e.g. `<shorthand>-red`.

<div class="bg-white border-1 border-silver-300 p-20 h-200px radius-md">
  <div class="grid grid-cols-1 leading-6 gap-18">
    <div class="flex align-items-center justify-content-center h-48 align-center radius-sm text-blue text-lighten-3">Light blue text</div>
    <div class="flex align-items-center justify-content-center h-48 align-center radius-sm bg-blue bg-darken-4 text-white">Dark blue background</div>
    <div class="flex align-items-center justify-content-center h-48 align-center radius-sm border-4 border-red border-lighten-8 border-brighten-5">Light and bright red border</div>
  </div>
</div>

```html
<div class="text-blue text-lighten-3 ..."></div>
<div class="bg-blue bg-darken-4 ..."></div>
<div class="border-red border-lighten-800 border-brighten-5 ..."></div>
```

---

## Adjusting Color Saturation

Each color in Uniform can increase or decrease in saturation using the `brighten` or `deepen` utilties. For each of these, there are 9 levels of adjustments.

### Brightening Colors

Colors can increase their saturation using the `<shorthand>-brighten` utility.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-5 leading-6 gap-18">
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue">base</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-1">1</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-2">2</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-3">3</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-4">4</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-5">5</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-6">6</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-7">7</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-8">8</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-brighten-9">9</div>
  </div>
</div>

```html
<div class="bg-blue ..."></div>
<div class="bg-blue bg-brighten-1 ..."></div>
<div class="bg-blue bg-brighten-2 ..."></div>
<div class="bg-blue bg-brighten-3 ..."></div>
<div class="bg-blue bg-brighten-4 ..."></div>
<div class="bg-blue bg-brighten-5 ..."></div>
<div class="bg-blue bg-brighten-6 ..."></div>
<div class="bg-blue bg-brighten-7 ..."></div>
<div class="bg-blue bg-brighten-8 ..."></div>
<div class="bg-blue bg-brighten-9 ..."></div>
```

### Default Brightness Levels

By default, the `brighten` utility adjusts saturation based on the following values. You can override this by passing in key value pairs to the `brighten-levels` in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    brighten-levels: (
      brighten-1: 5%,
      brighten-2: 10%,
      brighten-3: 15%,
      brighten-4: 20%,
      brighten-5: 25%,
      brighten-6: 30%,
      brighten-7: 35%,
      brighten-8: 40%,
      brighten-9: 45%,
    ),
  )
)
```

### Deepening Colors

Colors can decrease their saturation using the `<shorthand>-deepen` utility.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-5 leading-6 gap-18">
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue">base</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-1">1</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-2">2</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-3">3</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-4">4</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-5">5</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-6">6</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-7">7</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-8">8</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-deepen-9">9</div>
  </div>
</div>

```html
<div class="bg-blue ..."></div>
<div class="bg-blue bg-deepen-1 ..."></div>
<div class="bg-blue bg-deepen-2 ..."></div>
<div class="bg-blue bg-deepen-3 ..."></div>
<div class="bg-blue bg-deepen-4 ..."></div>
<div class="bg-blue bg-deepen-5 ..."></div>
<div class="bg-blue bg-deepen-6 ..."></div>
<div class="bg-blue bg-deepen-7 ..."></div>
<div class="bg-blue bg-deepen-8 ..."></div>
<div class="bg-blue bg-deepen-9 ..."></div>
```

### Default Deepen Levels

By default, the `deepen` utility adjusts saturation based on the following values. You can override this by passing in key value pairs to the `deepen-levels` in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    deepen-levels: (
      deepen-1: -5%,
      deepen-2: -10%,
      deepen-3: -15%,
      deepen-4: -20%,
      deepen-5: -25%,
      deepen-6: -30%,
      deepen-7: -35%,
      deepen-8: -40%,
      deepen-9: -45%,
    ),
  )
)
```

---

## Adjusting Color Lightness

Each color in Uniform can increase or decrease in lightness using the `lighten` or `darken` properties. For each of these, there are 9 levels of adjustments.

### Lightening Colors

Colors can increase their lightness using the `<shorthand>-lighten` utility.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-5 leading-6 gap-18">
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue">base</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-1">1</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-2">2</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-3">3</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-4">4</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-5">5</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-6">6</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-7">7</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-8">8</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-lighten-9">9</div>
  </div>
</div>

```html
<div class="bg-blue ..."></div>
<div class="bg-blue bg-lighten-1 ..."></div>
<div class="bg-blue bg-lighten-2 ..."></div>
<div class="bg-blue bg-lighten-3 ..."></div>
<div class="bg-blue bg-lighten-4 ..."></div>
<div class="bg-blue bg-lighten-5 ..."></div>
<div class="bg-blue bg-lighten-6 ..."></div>
<div class="bg-blue bg-lighten-7 ..."></div>
<div class="bg-blue bg-lighten-8 ..."></div>
<div class="bg-blue bg-lighten-9 ..."></div>
```

### Default Lighten Levels

By default, the `lighten` utility adjusts lightness based on the following values. You can override this by passing in key value pairs to the `lighten-levels` in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    lighten-levels: (
      lighten-1: 5%,
      lighten-2: 10%,
      lighten-3: 15%,
      lighten-4: 20%,
      lighten-5: 25%,
      lighten-6: 30%,
      lighten-7: 35%,
      lighten-8: 40%,
      lighten-9: 45%,
    ),
  )
)
```

### Darkening Colors

Colors can decrease their lightness using the `<shorthand>-darken` utility.

<div class="bg-silver-200 p-20 h-200px radius-md">
  <div class="grid grid-cols-5 leading-6 gap-18">
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue">base</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-1">1</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-2">2</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-3">3</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-4">4</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-5">5</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-6">6</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-7">7</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-8">8</div>
    <div class="flex align-items-center justify-content-center h-56 text-white font-xs font-bold radius-sm bg-blue bg-darken-9">9</div>
  </div>
</div>

```html
<div class="bg-blue ..."></div>
<div class="bg-blue bg-darken-1 ..."></div>
<div class="bg-blue bg-darken-2 ..."></div>
<div class="bg-blue bg-darken-3 ..."></div>
<div class="bg-blue bg-darken-4 ..."></div>
<div class="bg-blue bg-darken-5 ..."></div>
<div class="bg-blue bg-darken-6 ..."></div>
<div class="bg-blue bg-darken-7 ..."></div>
<div class="bg-blue bg-darken-8 ..."></div>
<div class="bg-blue bg-darken-9 ..."></div>
```

### Default Darken Levels

By default, the `darken` utility adjusts lightness based on the following values. You can override this by passing in key value pairs to the `darken-levels` in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    darken-levels: (
      darken-1: -5%,
      darken-2: -10%,
      darken-3: -15%,
      darken-4: -20%,
      darken-5: -25%,
      darken-6: -30%,
      darken-7: -35%,
      darken-8: -40%,
      darken-9: -45%,
    ),
  )
)
```


---

## Adjusting Color Opacity

Color properties in Uniform can be applied with varying degrees of opacity using the `<shorthand>-opacity` utility. The opacity utility can be applied to any color related properties such as `background-color`, `color`, and `border-color`. 

<div class="border-1 border-silver-300 p-20 h-200px radius-md">
  <div class="grid grid-cols-4 leading-6 gap-18">
    <div class="ratio-square flex align-items-center justify-content-center text-white font-xs font-bold radius-sm bg-blue bg-opacity-10"></div>
    <div class="ratio-square flex align-items-center justify-content-center text-white font-xs font-bold radius-sm bg-blue bg-opacity-20"></div>
    <div class="ratio-square flex align-items-center justify-content-center text-white font-xs font-bold radius-sm bg-blue bg-opacity-30"></div>
    <div class="ratio-square flex align-items-center justify-content-center text-white font-xs font-bold radius-sm bg-blue bg-opacity-40"></div>
  </div>
</div>

```html
<div class="bg-blue bg-opacity-10 ..."></div>
<div class="bg-blue bg-opacity-20 ..."></div>
<div class="bg-blue bg-opacity-30 ..."></div>
<div class="bg-blue bg-opacity-40 ..."></div>
```

### Default Opacity Levels

By default, there are 13 levels of opacity available. Use the following list of values to see each level and its value. You can override the default levels and even include your own by passing in key value pairs to the `opacity-levels` setting in your configuration. The opacity setting is applied across all opacity related CSS properties.

```scss
@use "uniform" as * with (
  $config: (
    opacity-levels: (
      opacity-02: 0.02,
      opacity-04: 0.04,
      opacity-06: 0.06,
      opacity-08: 0.08,
      opacity-10: 0.1,
      opacity-20: 0.2,
      opacity-30: 0.3,
      opacity-40: 0.4,
      opacity-50: 0.5,
      opacity-60: 0.6,
      opacity-70: 0.7,
      opacity-80: 0.8,
      opacity-90: 0.9,
    ),
  )
)
```

---

## Extending Colors

You can include your own colors by passing key values to the `colors` setting or extend any existing color sets. Colors can be added in as hex values, however, if you would like to take advantage of Uniform's advanced color manipulation utilities, colors must be added as HSL values.

```scss
@use "uniform" as * with (
  $config: (
    colors: (
      navbar: #000000,
      subnav: (
        hue: 25, saturation: 25%, lightness: 50%
      )
    ),
    system-colors: (
      custom: #ffffff
    ),
    ...
  )
)
```

```css
.bg-navbar {
  background-color: #000000;
}

.bg-subnav {
  --bg-sat: 0%;
  --bg-ltn: 0%;
  --bg-opacity: 1;
  background-color: hsla(25, calc(25% + var(--bg-sat)), calc(50% + var(--bg-ltn)), var(--bg-opacity));
}

.bg-custom {
  background-color: #ffffff;
}
```

> Configuring colors work in a similar way to other types of configuration in Uniform CSS. If the key exists, it will override the existing key otherwise it will be included as new variant.

---

## Disabling Colors

To remove existing color sets, simply pass in `null` to each color set setting. Uniform CSS color sets are designed to help users quicky get started, however if there is a set that is not required, disabling color sets are a great way to reduce the build size of Uniform.

```scss
@use "uniform" as * with (
  $config: (
    primary-colors: null, // primary colors will be excluded in your build
    system-colors: null,  // system colors will be excluded in your build
    ...
  )
)
```
