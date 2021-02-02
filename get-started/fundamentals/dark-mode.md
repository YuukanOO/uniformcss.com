---
title: Dark Mode
description: Get started with built-in helper functions
date: 1000-01-08
---

## About Helper Functions

If you are using the native Sass implementation of Uniform, you get access to useful helper functions that allow you to **directly access theme variable values**. This can be particularly useful when extracting components.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How they work

Behind the scenes, all default and user-defined theme variables such as colors, sizes, and font values are merged and enclosed inside a map. Helper functions essentially act as a get function that interacts with this map to pull theme values.

```scss
// Example custom element
.element {
  margin-bottom: size(40);
  padding: size(20);
  background: fill(primary-500);
  font-size: font-size(xl);
  font-weight: font-weight(semibold);
  line-height: leading(base);
}

// Example custom loop using map
@each $breakpoint, $breakpoint-value in breakpoints() {
  // for each breakpoint, do the following
}

@each $fill, $fill-value in fills() {
  // for each fill, do the following
}
```

---

## Breakpoints Functions

The `screen()` function returns values from the breakpoint map provided an existing variant is passed in as a parameter. `screens()` function returns the entire map, useful for looping.

For more information on breakpoints, visit <a class="hover.underline" href="/get-started/breakpoints">breakpoints</a>.

```scss
@media (min-width: screen(lg)) {
  ...
}

// Will pull the following pixel value in your compiled css
@media (min-width: 1280px) {
  ...
}
```

```scss
@each $breakpoint, $breakpoint-value in screens() {
  // for each breakpoint, do the following
}
```

---

## Color Functions

There are two color helper functions available. The `fill()` function returns values from the merged colors map provided an existing variant is passed in as a parameter. The `gradient()` function returns values from the gradients map provided an existing variant is passed in as a parameter.

```scss
.element {
  background-color: fill(gray-200);
}

.element {
  background: gradient(gradient-x-from-white);
}
```

#### Advanced Color Manipulation

The `fill()` can dynamically apply saturation and lightness transformations by passing in three parameters. For more information on which variants are available, visit <a class="hover.underline" href="/get-started/colors">colors</a>.

```scss
.element {
  background-color: fill(red, brighten-500, lightness-200);
}

.element-2 {
  background-color: fill(blue, base, darken-400);
}
```

---

## Size Functions

The `size()` function returns values from the size map for both positive and negative sizes provided an existing variant is passed in as a parameter.

```scss
.element {
  margin: size(n24); // -1.5rem (-24px)
  width: size(32); // 2rem (32px)
}
```

The `size()` function can also accept multiple parameters for joint sizing units for shorthand properties.

```scss
.element {
  padding: size(24, 32); // 1.5rem 2rem
}
```

When pluralized, the `sizes()` function returns all the sizes useful for loops. By default, the sizes function will return both positive and negative sizes.

```scss
@each $size, $size-value in sizes() {
  // for each size, do the following
}
```

You can also return positive or negative sizes only with `positive-sizes()` and `negative-sizes()` functions.

```scss
@each $positive-size, $positive-size-value in positive-sizes() {
  // for each size, do the following
}

@each $positive-size, $positive-size-value in positive-sizes() {
  // for each size, do the following
}
```

For more information on which variants are available, visit <a class="hover.underline" href="/get-started/sizes">sizes</a>.

---

## Shadows Functions

The `shadow()` function returns values from the shadow map provided an existing variant is passed in as a parameter. `shadows()` function returns the entire map.

For more information on which variants are available, visit <a class="hover.underline" href="/get-started/shadows">shadows</a>.

```scss
.element {
  box-shadow: shadow(sm);
}
```

```scss
@each $shadow, $shadow-value in shadows() {
  // for each shadow, do the following
}
```

---

## Typography Functions

Uniform provides various functions to pull values from font related maps such as `font-size` and `font-family`. For more information, please visit <a class="hover.underline" href="/get-started/typography">typography</a>.

#### Font Family

The `font-family()` function returns values from the font-family map provided an existing variant is passed in as a parameter. When pluralized, the `font-families()` function returns the entire map.

```scss
.element {
  font-family: font-family(sans);
}
```

```scss
@each $font-family, $font-family-value in font-families() {
  // for each font-family, do the following
}
```

#### Font Size

The `font-size()` function returns values from the font-size map provided an existing variant is passed in as a parameter. When pluralized, the `font-sizes()` function returns the entire map.

```scss
.element {
  font-size: font-size(sans);
}
```

```scss
@each $font-size, $font-size-value in font-sizes() {
  // for each font-size, do the following
}
```

#### Font Weight

The `font-weight()` function returns values from the font-weight map provided an existing variant is passed in as a parameter. When pluralized, the `font-weights()` function returns the entire map.

```scss
.element {
  font-weight: font-weight(bold);
}
```

```scss
@each $font-weight, $font-weight-value in font-weights() {
  // for each font-weight, do the following
}
```

#### Line Height

The `leading()` function returns values from the leading map provided an existing variant is passed in as a parameter. When pluralized, the `leadings()` function returns the entire map.

```scss
.element {
  line-height: leading(loose);
}
```

```scss
@each $leading, $leading-value in leadings() {
  // for each leading, do the following
}
```

#### Letter Spacing

The `tracking()` function returns values from the tracking map provided an existing variant is passed in as a parameter. When pluralized, the `trackings()` function returns the entire map.

```scss
.element {
  letter-spacing: tracking(loose);
}
```

```scss
@each $tracking, $tracking-value in trackings() {
  // for each tracking, do the following
}
```

---

## Radius Functions

The `radius()` function returns values from the radius map provided an existing variant is passed in as a parameter. The `radiuses()` function returns the entire map.

For more information on which variants are available, visit <a class="hover.underline" href="/get-started/radius">radius</a>.

```scss
.element {
  letter-spacing: radius(loose);
}
```

```scss
@each $radius, $radius-value in radiuses() {
  // for each radius, do the following
}
```

---

## Other Helper Functions

In Additional to theme functions, Uniform also provides generic helper functions to help you perform certain tasks more easily.

#### Rem Function

The `rem()` function allows you easily convert a pixel value into a rem value.

```scss
.element {
  font-size: rem(18); // this will convert 18px to rem
}
```

#### Merge Function

The `merge()` function allows you merge any number of maps as you like. This differs from the native Sass module feature `map.merge()` where you can only merge up to two maps.

```scss
$map: merge($map1, $map2, $map3, $map4);
```
