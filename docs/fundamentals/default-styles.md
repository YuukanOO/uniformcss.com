---
title: Default Styles
description: Learn about default reset and starter styles
date: 1000-01-05
---

## Reset Styles

By default, Uniform applies reset of styles to flatten browser inconsistencies and to provide a clean foundation to build utility properties on.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Main points worth noting

1. All elements have no default `margin` or `padding`.
2. All elements have a default border style applied.
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

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
  scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Disabling Reset Styles

If you prefer to exclude reset styles from your build, simply pass the following setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (default-reset)
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
  font-weight: var(--body-font-weight, var(--font-regular));
  line-height: var(--body-leading, 1);
  background-color: var(--body-background-color, white);
  color: var(--body-text-color, black);
}

h1,h2,h3,h4,h5,h6 {
  line-height: var(--heading-leading, var(--leading-tighter));
  margin-bottom: var(--heading-margin, 0.5em);
  color: var(--heading-color, black);
  &:last-child {
    margin-bottom: 0;
  }
}

p {
  line-height: var(--paragraph-leading, var(--leading-normal));
  margin-bottom: var(--paragraph-margin, 1.5rem);
  &:last-child {
    margin-bottom: 0;
  }
}

a {
  text-decoration: none;
  cursor: pointer;
  color: var(--link-color, RoyalBlue);
}

b,strong {
  font-weight: var(--bold-font-weight, var(--font-bold));
}

sub,sup {
  position: relative;
  font-size: .75em;
}

sub {
  bottom: -0.25em;
  left: 0.25em;
}

sup {
  top: -0.5em;
  left: 0.25em;
}

pre,code {
  font-family: var(--font-mono);
}
```

---

## Overriding Starter Styles

Starter styles include customer properties with fallback values that act as a hook to be overwritten. The following start style custom properties are available to be overwritten.

```css
:root {
  --background-color: ...;

  --body-font-size: ...;
  --body-font-weight: ...;
  --body-leading: ...;
  --body-background-color: ...;
  --body-text-color: ...;

  --heading-leading: ...;
  --heading-margin: ...;
  --heading-color: ...;

  --paragraph-leading: ...;
  --paragraph-margin: ...;

  --link-color: ...;

  --bold-font-weight: ...;
}
```

---

## Disabling Starter Styles

If you prefer to exclude starter styles from your build, simply pass the following setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (default-starter)
  )
);
```
