---
title: Button
description: Learn about the Button module and how you can customize it.
date: 1000-01-01
---

## About Button Module

The button module is an optional pre-built component that can be useful for dealing with call-to-actions on a page.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How Customization Works

Uniform CSS modules are built with CSS variable hooks, each with their own fallback value. On its own, CSS variable hooks don't do anything, however when they are declared, they will take precedence over the fallback value allowing you to override and customize the default setting.

```scss
.btn {
  // Height is 40px, unless `--btn-height` is declared in root
  height: var(--btn-height, 40px);
  ...
}
```
---

## Basic Button Usage

To apply this module assign the class `btn` to your button element.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <button class="btn">Button</button>
</div>

```html
<button class="btn">Button</button>
```

---

## Customizing Basic Button

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --btn-height: ...;
  --btn-padding: ...;
  --btn-bg: ...;
  --btn-border: ...;
  --btn-shadow: ...;
  --btn-radius: ...;
  --btn-font-family: ...;
  --btn-font-size: ...;
  --btn-font-weight: ...;
  --btn-color-transform: ...;
  --btn-tracking: ...;
  --btn-color: ...;
  --btn-transition: ...;

  --btn-hover-bg: ...;
  --btn-hover-color: ...;
  --btn-hover-border: ...;
  --btn-hover-shadow: ...;
  --btn-focus-shadow: ...;
}
```


---

## Branded Buttons

There are three types of branded button variants available, `primary`, `secondary`, and `tertiary`. These can also be further customized to fit your brand.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <button class="btn btn-primary mr-4">Button</button>
  <button class="btn btn-secondary mr-4">Button</button>
  <button class="btn btn-tertiary">Button</button>
</div>

```html
<button class="btn btn-primary">Button</button>
<button class="btn btn-secondary">Button</button>
<button class="btn btn-tertiary">Button</button>
```

---

## Customizing Branded Button

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --btn-primary-bg: ...;
  --btn-primary-color: ...;
  --btn-primary-border: ...;
  --btn-primary-shadow: ...;
  --btn-primary-hover-bg: ...;
  --btn-primary-hover-color: ...;
  --btn-primary-hover-border: ...;
  --btn-primary-hover-shadow: ...;
  --btn-primary-focus-shadow: ...;

  --btn-secondary-bg: ...;
  --btn-secondary-color: ...;
  --btn-secondary-border: ...;
  --btn-secondary-shadow: ...;
  --btn-secondary-hover-bg: ...;
  --btn-secondary-hover-color: ...;
  --btn-secondary-hover-border: ...;
  --btn-secondary-hover-shadow: ...;
  --btn-secondary-focus-shadow: ...;

  --btn-tertiary-bg: ...;
  --btn-tertiary-color: ...;
  --btn-tertiary-border: ...;
  --btn-tertiary-shadow: ...;
  --btn-tertiary-hover-bg: ...;
  --btn-tertiary-hover-color: ...;
  --btn-tertiary-hover-border: ...;
  --btn-tertiary-hover-shadow: ...;
  --btn-tertiary-focus-shadow: ...;
}
```

---

## Light and Dark Buttons

There are two types of `light` and `dark` button variants available.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <button class="btn btn-light mr-4">Button</button>
  <button class="btn btn-dark">Button</button>
</div>

```html
<button class="btn btn-light">Button</button>
<button class="btn btn-dark">Button</button>
```

---

## Customizing Light Dark Buttons

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --btn-light-bg: ...;
  --btn-light-color: ...;
  --btn-light-border: ...;
  --btn-light-shadow: ...;
  --btn-light-hover-bg: ...;
  --btn-light-hover-color: ...;
  --btn-light-hover-border: ...;
  --btn-light-hover-shadow: ...;
  --btn-light-focus-shadow: ...;

  --btn-dark-bg: ...;
  --btn-dark-color: ...;
  --btn-dark-border: ...;
  --btn-dark-shadow: ...;
  --btn-dark-hover-bg: ...;
  --btn-dark-hover-color: ...;
  --btn-dark-hover-border: ...;
  --btn-dark-hover-shadow: ...;
  --btn-dark-focus-shadow: ...;
}
```


---

## State Buttons

There are three types of state buttons to handle `success`, `warning`, and `danger`.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <button class="btn btn-success mr-4">Success</button>
  <button class="btn btn-warning mr-4">Warning</button>
  <button class="btn btn-danger">Danger</button>
</div>

```html
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
```

---

## Customizing State Buttons

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --btn-success-bg: ...;
  --btn-success-color: ...;
  --btn-success-border: ...;
  --btn-success-shadow: ...;
  --btn-success-hover-bg: ...;
  --btn-success-hover-color: ...;
  --btn-success-hover-border: ...;
  --btn-success-hover-shadow: ...;
  --btn-success-focus-shadow: ...;

  --btn-warning-bg: ...;
  --btn-warning-color: ...;
  --btn-warning-border: ...;
  --btn-warning-shadow: ...;
  --btn-warning-hover-bg: ...;
  --btn-warning-hover-color: ...;
  --btn-warning-hover-border: ...;
  --btn-warning-hover-shadow: ...;
  --btn-warning-focus-shadow: ...;

  --btn-danger-bg: ...;
  --btn-danger-color: ...;
  --btn-danger-border: ...;
  --btn-danger-shadow: ...;
  --btn-danger-hover-bg: ...;
  --btn-danger-hover-color: ...;
  --btn-danger-hover-border: ...;
  --btn-danger-hover-shadow: ...;
  --btn-danger-focus-shadow: ...;
}
```



---

## Outline Buttons

You can create outline buttons by appending `btn-outline`.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <button class="btn btn-outline">Button</button>
</div>

```html
<button class="btn btn-outline">Button</button>
```

---

## Customizing Outline Buttons

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --btn-outline-bg: ...;
  --btn-outline-color: ...;
  --btn-outline-border: ...;
  --btn-outline-shadow: ...;
  --btn-outline-hover-bg: ...;
  --btn-outline-hover-color: ...;
  --btn-outline-hover-border: ...;
  --btn-outline-hover-shadow: ...;
  --btn-outline-focus-shadow: ...;
}
```

---

## Button Sizes

Three are **5** button sizes to choose from.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <button class="btn btn-xs mr-4">Button</button>
  <button class="btn btn-sm mr-4">Button</button>
  <button class="btn btn-md mr-4">Button</button>
  <button class="btn btn-lg mr-4">Button</button>
  <button class="btn btn-xl">Button</button>
</div>

```html
<button class="btn btn-xs">Button</button>
<button class="btn btn-sm">Button</button>
<button class="btn btn-md">Button</button>
<button class="btn btn-lg">Button</button>
<button class="btn btn-xl">Button</button>
```

---

## Customizing Button Sizes

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --btn-xs-height: ...;
  --btn-xs-padding: ...;
  --btn-xs-font-size: ...;

  --btn-sm-height: ...;
  --btn-sm-padding: ...;
  --btn-sm-font-size: ...;

  --btn-md-height: ...;
  --btn-md-padding: ...;
  --btn-md-font-size: ...;

  --btn-lg-height: ...;
  --btn-lg-padding: ...;
  --btn-lg-font-size: ...;

  --btn-xl-height: ...;
  --btn-xl-padding: ...;
  --btn-xl-font-size: ...;
}
```

---

## Responsive Button Sizes

Button sizes can change based on breakpoint

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <button class="btn btn-sm md.btn-lg lg.btn-xl">Button</button>
</div>

```html
<button class="btn btn-sm md.btn-lg lg.btn-xl">Button</button>
```

---

## Button Groups

Buttons can be combined by wrapping them with a `btns` class assigned container.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <div class="btns">
    <button class="btn">1</button>
    <button class="btn">2</button>
    <button class="btn">3</button>
  </div>
</div>

```html
<div class="btns">
  <button class="btn">1</button>
  <button class="btn">2</button>
  <button class="btn">3</button>
</div>
```

---

## Loading Buttons

Buttons can have loading animation by appending `is-loading`.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <button class="btn is-loading">Loading</button>
</div>

```html
<div class="btns">
  <button class="btn is-loading">Loading</button>
</div>
```

---

## How to Disable this Module

By default, all modules are enabled. To disable this button module, pass `module-button` to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      module-button
    )
  )
);
```