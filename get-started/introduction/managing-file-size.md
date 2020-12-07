---
title: Managing File Size
description: Learn about Comma Compression&trade; and reducing file-size.
date: 1000-01-03
---

## Managing File Size

Utility-first frameworks are generally known for their large file-size but Uniform comes in at only **29kb gzipped** and **256kb minified**. Below is a comparison of how Uniform ranks compared to other popular frameworks.

| Framework | Original Size | Minified | Gzipped |
| - | - | - | - |
| Semantic UI | 809.4kb | 613.8kb | 100.6kb |
| Tailwind | 783.5kb | 603.3kb | 78.0kb |
| Uniform | 224.2kb | 189.9kb | 24.9kb |
| Bulma | 224.2kb | 189.9kb | 24.9kb |
| Bootstrap | 187.8kb | 152.1kb | 22.7kb |
| Foundation | 154.1kb | 119.2kb | 15.9kb |

---

## Comma Seperated Pseudos

Uniform takes a unique approach to how pseudo variant selectors are generated. Rather than duplicating whole sets of selectors, pseudo variants are comma seperated from its parent selector removing the need for duplicates. At scale, activating many pseudo variants for a large property set will only fractionally increase file size.

```css
/* styles.css */
.bg-red, .hover\:bg-red:hover, .focus\:bg-red:focus {
  ...
}
```

---

## Tailored Configuration

**Uniform takes a more considered approach** in determining which properties should have responsive ness and pseudo variants activated by default. For example, it makes sense for color properties such as `background-color` to change on hover, however properties such as `flex-wrap` would rarely need to. Also, properties such as `letter-spacing` will not need to be responsive as it would not normally change based on breakpoint. This type of tailored thinking helps to drastically improve file size footprint. 

You can of course, override the default settings and enable responsiveness, and customize variants for any CSS property.

```scss
@use "uniform" as * with (
  $config: (
    utilities: (
      background-color: (
        responsive: false,
        pseudos: ( hover, focus )
      ),
      letter-spacing: (
        responsive: false,
        pseudos: ( hover, focus )
      )
    )
  )
)
```

---

## Reducing Size Further

To reduce the file-size of your build even further, you can easily limit the number of variants or even disable unused CSS properties entirely. For more information on customizing your setup, visit the page on <a class="hover.underline" href="/get-started/configuration">configuration</a>.

```scss
// Remove default properties
@use "uniform" as * with (
  $config: (
    // remove default primary colors
    primary-colors: null,

    // exclude the following properties from build
    excludes: (
      background,
      background-attachment,
      opacity
    )
  )
);
```