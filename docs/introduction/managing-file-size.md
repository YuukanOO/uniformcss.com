---
title: Managing File Size
description: Learn how to keep file-size in check.
date: 1000-01-03
---

## Managing File Size

Due to its low-level nature, utility-first CSS frameworks are generally known to possess a large file-sizes. Compared to other frameworks, Uniform CSS is uniquely designed to maintain a minimal footprint. The following guide also covers ways you can further reduce your output size.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How Uniform Compares

Uniform comes in at **48kb brotli** and **675kb minified**. Below is a comparison of how Uniform ranks compared to other popular frameworks.

| Framework   | Minified | Minified    | Gzipped    |
| ----------- | ------------- | ----------- | ---------- |
| Tailwind    | 3020.9kb      | 3020.9kb    | 294.0kb    |
| Semantic UI | 629.8kb       | 629.8kb     | 103.8kb    |
| **Uniform** | **640.9kb**   | **675.9kb** | **88.4kb** |
| Bulma       | 189.9kb       | 189.9kb     | 24.9kb     |
| Bootstrap   | 152.1kb       | 152.1kb     | 22.7kb     |
| Foundation  | 119.2kb       | 119.2kb     | 15.9kb     |

{.text-left}

---

## Merged Pseudos

Uniform compiles pseudos using comma seperators rather than duplicating whole sets of selectors. This makes it possible to activate multiple pseudo variants without much impact on final size.

```css
/* styles.css */
.bg-red,
.hover\:bg-red:hover,
.focus\:bg-red:focus {
  ...;
}
```

---

## Tailored Configuration

**Uniform takes a more considered approach** in determining which properties should have responsive and pseudo variants activated by default. 

For example, it makes sense for color properties such as `background-color` to change on hover, however properties such as `flex-wrap` would rarely require this interaction. This type of selective activation of pseudo and responsive variants helps to drastically improve the size of your generated output.

You can of course, override the default settings and enable responsiveness, and customize variants for any CSS property.

```scss
@use "uniform" as * with (
  $config: (
    utility: (
      background-color: (
        responsive: true,
        pseudos: ( hover, focus, active )
      ),
      letter-spacing: (
        responsive: false,
        pseudos: ( hover, focus )
      )
    )
  )
);
```

---

## Exclude unused properties

You can drastically further reduce your output size by excluding properties or variants you are unlikely to use.

```scss
// Remove default properties
@use "uniform" as * with (
  $config: (
    // remove default colors
    colors: null,

    // remove negative sizes
    negative-sizes: null,

    // exclude the following properties from build
    exclude: (
      background,
      background-attachment,
      opacity
    )
  )
);
```

---

## Remove unused CSS

For an even smaller output, you can utilize third-party tools such as **PurgeCSS** to treeshake and remove remove unused CSS. This tool will analyze your template and match selectors against your CSS. Using PurgeCSS in production will result in the smallest file size (usually under 10kb).

To learn more about setting up purge CSS, visit [PurgeCSS]("https://purgecss.com/").
