---
title: Sass Configuration
description: Customizing Uniform CSS to your heart's content.
date: 1000-01-01
---

## How Configuration Works

Customizations in Uniform CSS are all handled from the root of your Sass project. The Sass implementation of Uniform CSS provides the most customization freedom. 

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

Uniform CSS is loaded in as a module and can be configured with by passing in settings to the `$config` map. To learn more about modules please visit the [official Sass docs](https://sass-lang.com/documentation/at-rules/use).

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    important: true,
    // override settings here
  )
);
```

```css
/* styles.css */
.align-left { text-align: left !important; }
.align-right { text-align: right !important; }
```

---

## Setting Groups

It is helpful to note, there are four types of settings you can pass into your configuration, build, theme, utility, and excludes. 

### Build Settings

Build settings control globally how your properties are constructed.

```scss
@use "uniform" as * with (
  $config: (
    important: true,
    // other build settings here
  )
);
```

### Theme Settings

Theme settings are universally shared settings such as breakpoints, sizes, and colors that affect multiple or project specific properties.

```scss
@use "uniform" as * with (
  $config: (\
    screens: (
      ...
    )
    colors: (
      ...
    ),
    // other theme settings here
  )
);
```

### Utility Settings

Utility settings specifies the individual setting of each property.

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

Exclude and include settings specifies which properties should be excluded and included.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      all,
      // other excluded properties
    ),
    include: (
      background-color,
      text-align,
      // other included properties
    ),
  )
);
```

