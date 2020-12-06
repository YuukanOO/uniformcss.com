---
title: Overview
description: Learn how to install and get started with Uniform CSS.
date: 1000-01-01
lastUpdated: 2020-10-20
---

### Introducing Uniform &nbsp;&nbsp;🦄

First of all, thank you for taking the time to check out this project. Uniform CSS is the worlds first fully customizable utility-first CSS framework built entirely with Sass. One of its biggest strength is that it is super easy to learn and can be implemented in both pre-packaged or native way making it super adaptable to a wide range of workflows.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

### How Uniform CSS is different

Here are the **top reasons** why Uniform CSS could be a great fit for your next project! 🚀

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-700 leading-none bg-silver-200 leading-1 text-black radius-round">1</span> It's built entirely in Sass</h4>

Built entirely in Sass (the most well known CSS preprocessor currently out there). Adding Uniform into your existing project is **literally a single line of code**.

```scss
// add this to your main styles.scss
@use "uniform" as *;
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-none bg-silver-200 leading-1 text-black radius-round">2</span> It's super-duper easy to configure</h4>

Uniform CSS is a top-grade utility class generator. Remove and extend colors, replace breakpoints, change property names, add prefixes, modify syntax, and more! **You can optionally configure almost every tiny detail imagineable**.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    important: true,
    prefix: myProject,
    colors: (
      custom-color-1: red,
      custom-color-2: blue
    ),
    ...
  )
);
```

```css
/* styles.css */
.myProject-bg-custom-color-1 { background-color: red !important; }
.myProject-bg-custom-color-2 { background-color: blue !important; }
...
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-none bg-silver-200 leading-1 text-black radius-round">3</span> You can add your own new properties</h4>

As shiny new CSS specs get finalized and introduced, you don't have to wait for Uniform to support it! Easily add your own properties in directly.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      leading-trim: (
        keyword: leading,
        properties: (leading-trim),
        variants: (
          trimmer: both
        )
      ),
      text-edge: (
        keyword: text,
        properties: (text-edge),
        variants: (
          cap: cap alphabetic
        )
      )
    )
  )
);
```

```css
/* styles.css */
.leading-trimmer { leading-trim: both; }
.text-edge { text-edge: cap alphabetic; }
...
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-none bg-silver-200 leading-1 text-black radius-round">4</span> Comes with built-in helper functions</h4>

Need a theme value for that one-off component you need to build? Uniform provides internal helper functions to help you access your theme values directly.

```scss
// styles.scss
.custom-element {
  padding: size(4, 5);
  background-color: fill(mint);
}
```

```css
/* styles.css */
.custom-element {
  padding: 1rem 1.25rem ;
  background-color: hsl(140, 50%, 50%);
}
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-none bg-silver-200 leading-1 text-black radius-round">5</span> Built with CSS Variables in mind</h4>

Prefer not to worry about preprocessors and just start building your site? Just add the pre-packaged CDN version of Uniform and customize fonts, colors, sizes, and more by directly overriding each CSS variable. It's that easy.

```html
<!-- index.html -->
<link rel="stylesheet" href="https://unpkg.com/@zaydek/duomo@0.7.0-rc.24/dist/stack.css">
```

```css
/* styles.css */
:root {
  --font-sans: 'custom-font', sans-serif;
  --btn-radius: 6px;
}
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-none bg-silver-200 leading-1 text-black radius-round">6</span> Comes with pre-built common components</h4>

To help save you time, Uniform CSS comes with **optional** pre-built components for common UI elements such as buttons and form elements. These can all be enabled, disabled, and customized down to the last pixel.

<section class="radius-sm bg-silver-100 p-6 flex flex-wrap justify-content-center">
  <button class="btn btn-primary mr-4">Button</button>
  <button class="btn btn-secondary mr-4">Button</button>
  <button class="btn btn-tertiary">Button</button>
</section>

```html
<button class="btn btn-primary">Button</button>
<button class="btn btn-secondary">Button</button>
<button class="btn btn-tertiary">Button</button>
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-none bg-silver-200 leading-1 text-black radius-round">7</span> Each property follow a strict naming convention</h4>

Every property and its variant names follow a strict and infinitely scalable convention to ensure they are future-proof well considered to avoid conflicts.

```scss
auto: auto,
100p: 100%,
100vw: 100vw,

px: 1px,
2px: 2px,
3px: 3px,

lg: 48px,
xl: 56px;
2xl: 64px,
...
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-none bg-silver-200 leading-1 text-black radius-round">8</span> Lightweight in Size</h4>

Uniform only activates responsiveness and pseudo variants to certain properties to ensure file-size is kept to a minimal. Optionally, you can choose to activate these variants directly through your main sass file.