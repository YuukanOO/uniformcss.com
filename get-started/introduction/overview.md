---
title: Overview
description: Quick dive into Uniform CSS and its features.
date: 1000-01-01
lastUpdated: 2020-10-20
---

## Introducing Uniform &nbsp;&nbsp;🦄

First of all, thank you for taking the time to check out this project. Uniform CSS is the Sass based utility class generator and framework built for scale and customizability. One of its biggest strength is that it is easy to learn and can be implemented in both pre-packaged or native ways making it super adaptable to a wide range of workflows.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How Uniform CSS is different

Here are the **top reasons** why Uniform CSS could be a great fit for your next project! 🚀

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-700 leading-0 bg-silver-200 leading-0 text-black radius-round">1</span> It's built entirely in Sass</h4>

Built entirely in Sass (the most well known CSS preprocessor currently out there). Adding Uniform into your existing project is **literally a single line of code**.

```scss
// add this to your main styles.scss
@use "uniform" as *;
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">2</span> It's super-duper easy to configure</h4>

Uniform CSS is a top-grade utility class generator. Remove and extend colors, replace breakpoints, change property names, add prefixes, modify syntax, and more! **You can optionally configure almost every tiny detail imagineable**.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    important: true,
    prefix: myProject,
    delimiter: '-',
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

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">3</span> Built with CSS Variables in mind</h4>

Prefer not to worry about preprocessors and just start building your site? Just add the pre-packaged CDN version of Uniform and customize fonts, colors, sizes, and more by directly overriding each CSS variable. It's that easy.

```html
<!-- index.html -->
<link rel="stylesheet" href="https://unpkg.com/@zaydek/duomo@0.7.0-rc.24/dist/stack.css">
```

```css
/* styles.css */
:root {
  --body-color: black;
  --font-sans: 'custom-font', sans-serif;
  --btn-radius: 6px;
}
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">4</span> You can add your own properties</h4>

As shiny new CSS specs get finalized and introduced, you don't have to wait for Uniform to support it! Easily add your own properties in directly.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      leading-trim: (
        responsive: true,
        shorthand: leading,
        properties: (leading-trim),
        variants: (
          trimmer: both
        )
      ),
      text-edge: (
        shorthand: text,
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

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">5</span> Built-in helpers to access semantic tokens</h4>

In Uniform CSS, there’s no need to repeat yourself. You can access your semantic tokens, like `fill(red)`, using getter functions.

```scss
// styles.scss
.custom-element {
  padding: size(20, 24);
  background-color: fill(mint);
}
```

```css
/* styles.css */
.custom-element {
  padding: 1.25rem 1.5rem;
  background-color: hsl(140, 50%, 50%);
}
```



<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">6</span> Comes with pre-built common components</h4>

To help save you time, Uniform CSS comes with **optional** pre-built components for common UI elements such as buttons and form elements. These can all be enabled, disabled, and customized down to the last pixel.

<section class="flex align-items-center justify-content-center bg-silver-200 p-20 radius-md">
  <button class="btn btn-primary mr-4">Button</button>
  <button class="btn btn-secondary mr-4">Button</button>
  <button class="btn btn-tertiary">Button</button>
</section>

```html
<button class="btn btn-primary">Button</button>
<button class="btn btn-secondary">Button</button>
<button class="btn btn-tertiary">Button</button>
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">7</span> Exclude or include only the properties you need</h4>

Almost every aspect of Uniform CSS is optional, you can very quickly exclude and include any number of properties.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    excludes: (
      all // exclude all
    ),
    includes: (
      background-color, margin, padding, // only include these
    )
  )
);
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">8</span> Designed to be Lightweight</h4>

Uniform automatically applies comma seperated selectors of pseudos variants and only activates responsiveness to the appropriate set of properties during the compilation. This helps to drastically improve file-size and make the CDN version a perfect way to get quickly started.