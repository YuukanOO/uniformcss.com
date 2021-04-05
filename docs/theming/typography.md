---
title: Typography
description: Learn how to customize typography related settings.
date: 1000-01-04
---

## Typography Properties

You can customize full range of typography based properties such as `line-height` and `font-size`. In this guide, you will learn which variants are available for each typography group and how you can customize them. For a visual reference of all typography properties and its variants, view the [Cheatsheet](/docs/cheatsheet).

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Customizing Font Families

You can customize font-families by passing in key value pairs to the `font-families` setting in your configuration.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    font-families: (
      // custom
      helvetica: ("Helvetica Now Display", system-ui, sans-serif)
    ),
  )
)
```

```css
/* styles.css */

.font-helvetica { font-family: "Helvetica Now Display", system-ui, sans-serif; }
```

---

## Customizing Font Sizes

You can customize font-sizes by passing in key value pairs to the `font-sizes` setting in your configuration. Font-size variants require both `font-size` and `line-height` to be defined. 

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    font-sizes: (
      heading: (
        font-size: 40px,
        line-height: 1.2,
      )
    ),
  )
)
```

```css
/* styles.css */

.text-heading {
  font-size: 40px;
  line-height: 1.2;
}
```

---

## Customizing Line Height

You can customize line-heights by passing in key value pairs to the `leadings` setting in your configuration.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    leadings: (
      custom: 1.2,
    ),
  )
)
```

```css
/* styles.css */

.leading-custom {
  line-height: 1.2;
}
```

---

## Customizing Letter Spacing

You can customize letter-spacings by passing in key value pairs to the `trackings` setting in your configuration.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    trackings: (
      custom: 1em;
    ),
  )
)
```

```css
/* styles.css */

.tracking-custom {
  letter-spacing: 1em;
}
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables. The following typography CSS variables can be overwritten.

### Font Family CSS Variables

```css
:root {
  --font-sans: sans-serif;
  --font-serif: serif;
  --font-mono: monospace;
}
```

### Font Size CSS Variables

```css
:root {
  --font-13xl: 7.5rem;
  --font-12xl: 6.5rem;
  --font-11xl: 5.5rem;
  --font-10xl: 4.5rem;
  --font-9xl: 4rem;
  --font-8xl: 3.5rem;
  --font-7xl: 3rem;
  --font-6xl: 2.5rem;
  --font-5xl: 2.25rem;
  --font-4xl: 2rem;
  --font-3xl: 1.75rem;
  --font-2xl: 1.5rem;
  --font-xl: 1.25rem;
  --font-lg: 1.125rem;
  --font-md: 1rem;
  --font-sm: 0.875rem;
  --font-xs: 0.75rem;
  --font-2xs: 0.625rem;
}
```

### Font Leading CSS Variables

```css
:root {
  --font-13xl-leading: 1;
  --font-12xl-leading: 1;
  --font-11xl-leading: 1;
  --font-10xl-leading: var(--leading-120);
  --font-9xl-leading: var(--leading-120);
  --font-8xl-leading: var(--leading-120);
  --font-7xl-leading: var(--leading-120);
  --font-6xl-leading: var(--leading-120);
  --font-5xl-leading: var(--leading-140);
  --font-4xl-leading: var(--leading-140);
  --font-3xl-leading: var(--leading-140);
  --font-2xl-leading: var(--leading-140);
  --font-xl-leading: var(--leading-140);
  --font-lg-leading: var(--leading-180);
  --font-md-leading: var(--leading-180);
  --font-sm-leading: var(--leading-180);
  --font-xs-leading: var(--leading-180);
  --font-2xs-leading: var(--leading-100);
}
```

### Font Weight CSS Variables

```css
:root {
  --ultralight: 100;
  --extralight: 200;
  --light: 300;
  --regular: 400;
  --medium: 500;
  --semibold: 600;
  --bold: 700;
  --extrabold: 800;
  --ultrabold: 900;
}
```

### Leading CSS Variables

```css
:root {
  --leading-100: 1;
  --leading-110: 1.1;
  --leading-120: 1.2;
  --leading-130: 1.3;
  --leading-140: 1.4;
  --leading-150: 1.5;
  --leading-160: 1.6;
  --leading-170: 1.7;
  --leading-180: 1.8;
  --leading-190: 1.9;
  --leading-200: 2;
  --leading-210: 2.1;
  --leading-220: 2.2;
  --leading-230: 2.3;
  --leading-240: 2.4;
  --leading-250: 2.5;
}
```

### Tracking CSS Variables

```css
:root {
  --tracking-tightest: -0.08em;
  --tracking-tighter: -0.04em;
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-loose: 0.02em;
  --tracking-looser: 0.04em;
  --tracking-loosest: 0.08em;
}
```

## Disabling Defaults

You can remove all defaults by passing `null` to the each of the settings.

```scss
@use "uniform" as * with (
  $config: (
    font-sizes: null,
    leadings: null,
    ...
  )
)
