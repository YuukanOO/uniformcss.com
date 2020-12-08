---
title: Default Styles
description: Learn about default reset and starter styles
date: 1000-01-05
---


## Reset Styles

By default, Uniform applies reset of styles to flatten browser inconsistencies and to provide a clean foundation to build utility classes on.

**Here are the main points worth noting:**

1. All elements have no default `margin` or `padding`.
2. All elements have a default border style applied to make it easier to apply borders.
3. Body has a default `line-height` of 1.
4. All media elements are set to `display: block`.

```css
/* Reset everything */
*,*::before,*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  border: 0 solid #000;
}

/* Prevent iOS font size change */
html {
  -webkit-text-size-adjust: 100%;
}

/* Reset body line-height */
body {
  min-height: 100vh;
  line-height: 1;
}

/* All media elements set to block */
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  width: 100%;
  vertical-align: middle;
}

/* Collapse table */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove list style */
ol,ul {
  list-style: none;
}
```

---

## Disabling Reset Styles

If you prefer to exclude reset styles from your build, simply pass the following setting in your configuration. 

```scss
@use "uniform" as * with (
  $config: (
    excludes: (default-reset)
  )
);
```

---


## Starter Styles

By default, Uniform provides optional starter styles to help apply rudimentary formatting to common html elements. Uniform starter styles also provide **custom property hooks** with fallback values to help theme quickly and get started.

```css
html {
  background-color: var(--background-color, white);
}

body {
  font-size: var(--body-font-size, 1rem);
  line-height: var(--body-leading, 1);
  color: var(--body-color, black);
}

h1, h2, h3, h4, h5, h6 {
  line-height: var(--heading-leading, var(--leading-tighter));
  margin-bottom: var(--heading-margin, 0.5em);
  color: var(--heading-color, black);
}
h1:last-child, h2:last-child, h3:last-child, h4:last-child, h5:last-child, h6:last-child {
  margin-bottom: 0;
}

p {
  line-height: var(--paragraph-leading, var(--leading-base));
  margin-bottom: var(--paragraph-margin, 1.5rem);
}
p:last-child {
  margin-bottom: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: var(--link-color, MediumOrchid);
}
a:hover {
  color: var(--link-hover-color, MediumOrchid);
}

b, strong {
  font-weight: var(--bold-font-weight, var(--font-bold));
}

sub, sup {
  position: relative;
  font-size: 0.75em;
}

sub {
  bottom: -0.25em;
  left: 0.25em;
}

sup {
  top: -0.5em;
  left: 0.25em;
}

pre, code {
  font-family: var(--font-mono);
}
```

---

## Overriding Starter Styles

Starter styles include customer properties with fallback values that act as a hook to be overwritten. The following start style custom properties are available to be overwritten.

```css
:root {
  --background-color: ... ;

  --body-font-size: ... ;
  --body-leading: ... ;
  --body-color: ... ;

  --heading-leading: ... ;
  --heading-margin: ... ;
  --heading-color: ... ;

  --paragraph-leading: ... ;
  --paragraph-margin: ... ;

  --link-color: ... ;
  --link-hover-color: ... ;
  --link-active-color: ... ;

  --bold-font-weight: ... ;
}
```

---

## Disabling Starter Styles

If you prefer to exclude starter styles from your build, simply pass the following setting in your configuration. 

```scss
@use "uniform" as * with (
  $config: (
    excludes: (default-starter)
  )
);
```
