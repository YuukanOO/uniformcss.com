---
title: CDN Configuration
description: Quickest way to configure and get started.
date: 1000-01-02
---

## Truly Plug'n Play

Although you may not get the full customization freedom that the Sass version provides, the CDN version still provides lots of ways to customize Uniform CSS in the form of CSS variables (custom properties).

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Accessing CDN Build

Loading Uniform CSS through a CDN is the quickest and easiest way to get up and running. Include the following CDN stylesheet in the head of your HTML.

```html
<link href="https://cdn.jsdelivr.net/npm/uniformcss@1.0.0/uniform.css" rel="stylesheet">
```

```css
:root {
  --font-sans: 'Inter';
  --primary-hue: 46;
}
```

---

## How it works

Behind the scenes, Uniform CSS generates CSS variables that are then applied to properties like `background-color`, `width`, and etc. Since these CSS variables are overridable, you can customize the default Uniform settings by defining your CSS variable overrides inside the `:root` pseudo selector. To see a list of all variables that you can override, inspect this page to see the variables in your developer tools.

```css
/* myStyles.css */
:root {
  --font-sans: 'Inter';
  --extrabold: 800;
  --primary-hue: 46;
  ...
}
```

---