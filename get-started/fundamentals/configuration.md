---
title: Configuration
description: A quick introduction to how customization works.
date: 1000-01-01
---


## Customizing Uniform

There are **two ways** you can customize Uniform to fit your project needs, **Basic** and **Native**. The Basic way to configure Uniform is to simply apply CSS variable overrides inside the `:root` pseudo element. The native method requires Sass and overrides are performed in the form of a <a class="hover.underline" href="https://sass-lang.com/documentation/at-rules/use#configuration">module configuration</a>.


{% include shortcodes/video, id: 'tLqqi5gyxQg' %}


---

## Native Configuration &nbsp; 😎

The native configuration method is the best way to take full advantage of Sass and Uniform's customization features. You can customize almost every aspect of this framework using the new and awesome <a class="hover.underline" href="https://sass-lang.com/documentation/at-rules/use#configuration">module configuration</a> method.

To apply native configuration, load Uniform into your main sass project and override the module by passing in settings to the `$config` variable. For more information, please refer to the dedicated customization section.

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

---

## Basic Configuration &nbsp; 🍼

The basic configuration method is the easiest way to customize and get started with Uniform. This method only allows you to customize basic attributes such as **typography**, **colors**, and **sizing scales**. It does not however, allow you to perform more deeper customizations such as apply a prefix or enable/disable the important tag and more. 

Lets assume you have included a pre-packaged CDN version of Uniform loaded into your project. To apply basic configuration, simply apply CSS variable overrides inside a `:root` pseudo element. For more information, please refer to the customization section.

```css
:root {
  --font-sans: 'Open Sans', Helvetica, Arial, Sans-Serif;
  --primary-hue: 40;
  --btn-radius: 4px;
}
```
