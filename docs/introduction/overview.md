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

Here are some **top reasons** why Uniform CSS could be a great fit for you.

### 1. It's written entirely in Sass

Millions of projects are powered by Sass, Uniform **does not** take away any benefits of using Sass. Add Uniform directly into your Sass project with **one line of code**.

```scss
// add this to your main styles.scss
@use "uniform" as *;
```

### 2. It's dead-easy to configure

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

### 3. Built with CSS Variables in mind

Prefer not to worry about preprocessors and just start building your site? Just add the pre-packaged CDN version of Uniform and customize fonts and colors to match your project by overriding each CSS variable. It's that easy.

```html
<!-- index.html -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/ThinkUniform/UniformCSS/dist/uniform.min.css" />
```

```css
/* styles.css */
:root {
  --font-sans: "custom-font", sans-serif;
  --blue-hue: 210;
}
```

### 4. You can add your own properties

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
          trim: both
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
.leading-trim { leading-trim: both; }
.text-cap { text-edge: cap alphabetic; }
```

### 5. Built-in helper functions to access theme values

Prefer to write components the old fashioned way? You have all benefits of Sass while still having access to theme variables using helper functions.

```scss
// styles.scss
.custom-element {
  padding: size(20, 24);
  font-weight: font-weight(bold);
  background-color: fill(mint, shade-200);
}
```

```css
/* styles.css */
.custom-element {
  padding: var(--size-20), var(--size-24); /* 1.25rem 1.5rem */
  font-weight: var(--bold); /* 700 */
  background-color: hsl(var(--mint-hue), var(--mint-sat), var(--shade-200));
}
```

### 6. Exclude or include only the properties you need

Every aspect of Uniform CSS is optional, you can easily remove all properties and only include what you need, as you need them.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    exclude: (
      all // exclude all
    ),
    include: (
      background-color, 
      margin, 
      padding, // only include these utility properties
    )
  )
);
```

### 7. Designed to be Lightweight

Uniform is much smaller compared to other utility-first CSS frameworks whilst still supporting all the properties you need. Uniform only activates responsiveness and pseudo variants for properties that make sense.

---

## Browser Support

Uniform CSS looks and performs great on all the latest version of modern browsers. Uniform CSS is tested and built to support the latest stable version of **Chrome**, **Firefox**, **Edge**, and **Safari**. Uniform CSS does not support any version of IE, including IE 11.