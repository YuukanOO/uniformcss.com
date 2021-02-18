---
title: Managing File Size
description: Learn how to keep file-size in check.
date: 1000-01-03
---

## Managing File Size

Due to its low-level nature, utility-first CSS frameworks are generally known to possess a large file-sizes. Compared to other frameworks, Uniform CSS is uniquely designed to maintain a minimal footprint. The following guide also covers ways you can further reduce your output.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How Uniform Compares

Uniform comes in at **48kb brotli** and **675kb minified**. Below is a comparison of how Uniform ranks compared to other popular frameworks.

| Framework   | Original Size | Minified    | Gzipped    |
| ----------- | ------------- | ----------- | ---------- |
| Tailwind    | 3739.4kb      | 3020.9kb    | 294.0kb    |
| Semantic UI | 828.9kb       | 629.8kb     | 103.8kb    |
| **Uniform** | **856.5kb**   | **675.9kb** | **88.4kb** |
| Bulma       | 224.2kb       | 189.9kb     | 24.9kb     |
| Bootstrap   | 187.8kb       | 152.1kb     | 22.7kb     |
| Foundation  | 154.1kb       | 119.2kb     | 15.9kb     |

{.table}

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

**Uniform takes a more considered approach** in determining which properties should have responsive and pseudo variants activated by default. For example, it makes sense for color properties such as `background-color` to change on hover, however properties such as `flex-wrap` would rarely need to. Also, one-off properties such as `letter-spacing` will not need to be responsive as it would rarely change based on breakpoint. This type of tailored thinking helps to drastically improve the size of your generated output.

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

**PurgeCSS** is a third-party tool to remove unused CSS. This tool will analyze your template and match selectors against your CSS. Using PurgeCSS in production will result in the smallest file size (usually under 10kb).

To learn more about setting up purge CSS, visit [PurgeCSS]("https://purgecss.com/").
