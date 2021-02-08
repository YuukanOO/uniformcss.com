---
title: Media Queries
description: Learn how to apply classes that change across on breakpoint.
date: 1000-01-03
---

## Responsive Design

You can apply responsive utility classes by appending the breakpoint variant to the beginning of your class name e.g. `<breakpoint-variant>.shorthand-variant`.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Mobile-First Design

Uniform uses a mobile-first CSS approach to allow for styles to be applied on mobile screens first before larger more complex screen layouts. This means that by default, **classes will cascade upwards in screen size** unless specified otherwise.

```html
<div class="h-10 sm.h-14 md.h-20 lg.h-24 xl.h-64">
  10px height on mobile 14px height on small screen sizes 20px height on medium
  screen sizes 24px height on large screen sizes 64px height on extra large
  screen sizes
</div>
```

---

## Breakpoint Variants

By default, there are **four** breakpoint variants available `sm`, `md`, `lg` and `xl`. For more information on modifying these variants, please visit the page on <a class="hover.underline" href="/get-started/breakpoints">breakpoints</a>.

```scss
// sm
@media (min-width: 768px) {
  ...
}
// md
@media (min-width: 1024px) {
  ...
}
// lg
@media (min-width: 1280px) {
  ...
}
// xl
@media (min-width: 1536px) {
  ...
}
```

---

## Breakpoint Delimiter

By default, Uniform uses the `.` character to separate the breakpoints and pseudos from the property. You can override the default breakpoint delimiter by defining `screen-delimiter` in your configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    build: (
      screen-delimiter: '__',
    )
  )
);
```

```css
/* styles.css */
@media (min-width: 1024px) {
  .sm__block {
    display: block;
  }
  .sm__flex {
    display: flex;
  }
  ...;
}
```

---

## Enabling Responsiveness

By design, Uniform takes common design patterns into consideration and only enables responsiveness to a subset of CSS properties in order to maintain a reasonable file-size. You can override the default responsive setting by passing the value `true` to `responsive` key within each property setting in the configuration.

```scss
@use "uniform" as * with (
  $config: (
    utility: (
      letter-spacing: ( responsive: true ),
      list-style-type: ( responsive: true ),
      text-transform: ( responsive: true )
    )
  )
);
```

> To see which properties are responsive, please visit the glossary.

---

## Extending Breakpoints

You can change the number of breakpoints and even change their `min-width` values by passing in your own custom map to the `screens` key in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    theme: (
      screens: (
        custom-breakpoint: 1920px
      )
    )
  )
);
```

```css
/* styles.css */
@media (min-width: 1920px) {
  .custom-breakpoint\.block {
    display: block;
  }
  .custom-breakpoint\.flex {
    display: flex;
  }
  ...;
}
```

---

## Overriding Existing Breakpoints

You can replace existing breakpoints by overriding existing keys to the `screens` map in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    theme: (
      screens: (
        md: 1920px
      )
    )
  )
);
```

```css
/* styles.css */
@media (min-width: 1920px) {
  .md\.block {
    display: block;
  }
  .md\.flex {
    display: flex;
  }
  ...;
}
```
