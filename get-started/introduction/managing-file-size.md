---
title: Managing File Size
description: Learn how to keep file-size in check.
date: 1000-01-03
---

## Managing File Size

Due to its custom nature, utility-first frameworks are generally known for their large file-sizes. There are various ways you can reduce the output file-size depending on your workflow.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How Uniform Compares

Uniform comes in at **71kb gzipped** and **728kb minified**. Below is a comparison of how Uniform ranks compared to other popular frameworks.

| Framework   | Original Size | Minified | Gzipped |
| ----------- | ------------- | -------- | ------- |
| Tailwind    | 3739.4kb      | 3020.7kb | 293.9kb |
| Semantic UI | 809.4kb       | 613.8kb  | 100.6kb |
| Uniform     | 224.2kb       | 728.9kb  | 61.9kb  |
| Bulma       | 224.2kb       | 189.9kb  | 24.9kb  |
| Bootstrap   | 187.8kb       | 152.1kb  | 22.7kb  |
| Foundation  | 154.1kb       | 119.2kb  | 15.9kb  |

{.table}

---

## Comma Seperated Pseudos

Uniform takes a unique approach to how pseudo variant selectors are generated. Rather than duplicating whole sets of selectors, pseudo variants are comma seperated. This makes it possible to activate multiple pseudo variants without too much impact on file-size.

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

**Uniform takes a more considered approach** in determining which properties should have responsive and pseudo variants activated by default. For example, it makes sense for color properties such as `background-color` to change on hover, however properties such as `flex-wrap` would rarely need to. Also, properties such as `letter-spacing` will not need to be responsive as it would generally not change based on breakpoint. This kind of tailored thinking helps to drastically improve file size footprint.

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

---

## Using PurgeCSS

PurgeCSS is a third-party tool to remove unused CSS. This tool will analyze your template and match selectors against your CSS. PurgeCSS is particularly useful and can be implemented in a variety of ways to support many different front-end workflows. To learn more about setting up purge CSS, visit <a class="hover.underline" href="https://purgecss.com/">PurgeCSS</a>.
