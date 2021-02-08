---
title: Sass Configuration
description: Customizing Uniform CSS to your heart's content.
date: 1000-01-01
---

## How Configuration Works

Customizations in Uniform CSS are all handled through a single point of entry from the root of your Sass project. Unlike the CDN option, the Sass implementation of Uniform CSS provides the most customization freedom. 

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

Uniform CSS is loaded in as a module and can be configured with by passing in settings to the `$config` map. To learn more about modules please visit the [official Sass docs](https://sass-lang.com/documentation/at-rules/use).

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    build: (
      important: true,
    )
    // override settings here
  )
);
```

```css
/* styles.css */
.align-left {text-align: left !important;}
.align-right {text-align: right !important;}
```

---

## Setting Groups

It is helpful to note, there are four types of settings you can pass into your configuration, build, theme, utility, and excludes. 

### Build Settings

Build settings specifies globally how your properties are constructed.

```scss
@use "uniform" as * with (
  $config: (
    build: (
      important: true,
      // other build settings here
    )
  )
);
```

### Theme Settings

Theme settings specifies universally shared theme related settings such as breakpoints, sizes, and colors etc.

```scss
@use "uniform" as * with (
  $config: (\
    theme: (
      screens: (
        ...
      )
      colors: (
        ...
      ),
      // other theme settings here
    )
  )
);
```

### Utilities Settings

Utilities settings specifies the individual setting of each property.

```scss
@use "uniform" as * with (
  $config: (
    utility: (
      text-align: (
        ...
      )
      // other utility settings here
    ),
  )
);
```

### Exclude Settings

Exclude and include settings specifies which properties or modules should be excluded or included during the build.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      all,
      // other excluded properties
    ),
    includes: (
      background-color,
      text-align,
      // other included properties
    ),
  )
);
```

