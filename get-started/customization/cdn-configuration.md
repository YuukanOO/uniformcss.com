---
title: CDN Configuration
description: Quickest way to configure and get started.
date: 1000-01-02
---

## Truly Plug'n Play

Loading Uniform CSS through a CDN is the quickest and easiest way to get up and running. Although you may not get the full customization freedom that the Sass version provides, the CDN version still provides lots of ways to customize Uniform CSS in the form of CSS variables (custom properties).

```html
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
```

```css
:root {
  --font-sans: 'Inter';
  --primary-hue: 46;
  --btn-radius: 4px;
}
```

---

## How it works

Behind the scenes, Uniform CSS provides CSS variable *hooks* with a fallback value. When these hook variables are defined in your CSS it will override the default fallback value. Using this method provides you with the ability to override and customize many of the default theme settings of Uniform CSS without the need for Sass. 

```css
body {
  font-size: var(--body-font-size, 1rem);
  line-height: var(--body-leading, 1);
  color: var(--body-color, black);
}
```

---

## How to override CSS variables

To override Uniform CSS variables, load your overriding stylesheet after Uniform CSS and declare the variables you wish to override inside the `:root` pseudo-class. 

```css
/* myStyles.css */
:root {
  --font-sans: 'Inter';
  --primary-hue: 46;
  --btn-radius: 4px;
  ...
}
```

---


## Starter Style Variables

The following starter style variables are available for overriding.

```css
:root {
  --body-font-size: 1rem;
  --body-leading: 1;
  --body-color: black;

  --heading-leading: 1.25rem;
  --heading-margin: 0.5em;
  --heading-color: black;

  --paragraph-leading: 1.75;
  --paragraph-margin: 1.5rem;

  --link-color: MediumOrchid;
  --link-hover-color: MediumOrchid;

  --bold-font-weight: 700;  
}
```

---

## Theme Variables

All theme variables are available for overriding as well. To see more information on which theme variables are available please visit the section on Theming.

```css
:root {
  --font-sans: sans-serif;
  --font-serif: serif;
  --font-mono: monospace;

  --shadow-focus: 0 0 0 3px rgba(0, 145, 255, 0.2);
  --shadow-success: 0 0 0 3px rgba(0, 182, 73, 0.2);
  --shadow-warning: 0 0 0 3px rgba(255, 175, 22, 0.2);
  --shadow-danger: 0 0 0 3px rgba(252, 95, 95, 0.2);
  ...
}
```
