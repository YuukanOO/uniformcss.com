---
title: Overview
description: Quick dive into Uniform CSS and its features.
date: 1000-01-01
lastUpdated: 2020-10-20
---

## Introducing Uniform

Thank you for checking out Uniform CSS, a utility-first CSS framework built entirely on Sass. Uniform was designed to help front-end teams build beautifully consistent and maintainable sites, and UI components. It is principled around scale, speed, ease-of-use, and customizability. The easiest way to get started is via the CDN or as a Sass dependency.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How Uniform CSS is different

Here are some of the **top reasons** why Uniform CSS could be a great fit for your next ambitious project!

<h4>1. It's written entirely in Sass</h4>

Why Sass? Sass is the most popular CSS preprocessor in the world! Adding Uniform as a Sass dependency is **literally one line of code**{.color-black}.

```scss
// add this to your main styles.scss
@use "uniform" as *;
```

<h4>2. It's dead-easy to configure</h4>

Remove and extend colors? Check. Replace breakpoints? Check. Alias property names, add prefixes, modify syntax — you name it! Uniform is configurable to the last detail.

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

<h4>3. Built with CSS Variables in mind</h4>

Prefer not to worry about preprocessors and just start building your site? Just add the pre-packaged CDN version of Uniform and customize fonts, colors, sizes, and more by directly overriding each CSS variable. It's that easy.

```html
<!-- index.html -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/uniformcss@1.0.0/uniform.css"
/>
```

```css
/* styles.css */
:root {
  --body-color: black;
  --font-sans: "custom-font", sans-serif;
  --btn-radius: 6px;
}
```

<h4>4. You can add your own properties</h4>

While shiny new CSS specs become standardized, you don’t have to wait for Uniform. You can use Uniform APIs to add your own properties.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
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
.color-cap { text-edge: cap alphabetic; }
...
```

<h4>5. Built-in helper functions to access theme values</h4>

You can build your own components and access your theme variables directly in Sass using helper functions.

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

<h4>6. Comes with pre-built common components</h4>

To help save you time, Uniform CSS comes with **optional** pre-built components for common UI elements such as buttons and form elements. These can all be enabled, disabled, and customized down to the last pixel.

<section class="flex align-items-center justify-content-center bg-silver-300 p-20 py-48 radius-md">
  <button class="btn btn-primary mr-4">Button</button>
  <button class="btn btn-secondary mr-4">Button</button>
  <button class="btn btn-tertiary">Button</button>
</section>

```html
<button class="btn btn-primary">Button</button>
<button class="btn btn-secondary">Button</button>
<button class="btn btn-tertiary">Button</button>
```

<h4>7. Exclude or include only the properties you need</h4>

Every aspect of Uniform CSS is optional, you can quickly exclude all properties and only include what you need.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    exclude: (
      all // exclude all
    ),
    include: (
      background-color, margin, padding, // only include these
    )
  )
);
```

<h4>8. Designed to be Lightweight</h4>

Uniform is smart about which pseudo variants are activated for each utility property. Pseudo variants are also comma seperated to ensure no uncessary duplicate properties are included. This helps to drastically improve file-size and make the CDN version a perfect way to get quickly started.

<div class="grid grid-cols-1 sm.grid-cols-3 gap-20">
  <div class="radius-md px-20 py-28 bg-cool-gray bg-opacity-10">
    <div class="flex mb-20">
      <div class="font-5xl font-light bg-gradient bg-text color-transparent" style="--gradient: to right, #8F7CFF, #fd7cff;">2min</div>
    </div>
    <div class="h-2 bg-gradient mb-14" style="--gradient: to right, #8F7CFF, #fd7cff;">
    </div>
    <p class="font-sm color-black">project <br>setup time <br>required only</p>
  </div>
  <div class="radius-md px-20 py-28 bg-cool-gray bg-opacity-10">
    <div class="flex mb-20">
      <div class="font-5xl font-light bg-gradient bg-text color-transparent" style="--gradient: to right, #72cdff, #46f381;">61kb</div>
    </div>
    <div class="h-2 bg-gradient mb-14" style="--gradient: to right, #72cdff, #46f381;">
    </div>
    <p class="font-sm color-black">gzipped for <br>lightning fast <br>delivery</p>
  </div>
  <div class="radius-md px-20 py-28 bg-cool-gray bg-opacity-10">
    <div class="flex mb-20">
      <div class="font-5xl font-light bg-gradient bg-text color-transparent" style="--gradient: to right, #ff7b7b, #d8bb2f;">136</div>
    </div>
    <div class="h-2 bg-gradient mb-14" style="--gradient: to right, #ff7b7b, #d8bb2f;">
    </div>
    <p class="font-sm color-black">configurable <br>design <br>tokens</p>
  </div>
</div>
