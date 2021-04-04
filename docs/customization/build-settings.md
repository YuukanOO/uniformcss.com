---
title: Build Settings
description: Explore global build settings for Uniform.
date: 1000-01-03
---

## Build Settings

Build settings are global in influence and controls how your utility classes are generated. These include the option of appending a prefix, changing the shorthand delimiter, and applying `!important` tags and etc.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Build Setting Usage

Build settings control how classes should look on a global level.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    important: true,
    prefix: 'myPrefix-',
  )
);
```

```css
/* styles.css */
.myPrefix-block { display: block !important; }
.myPrefix-inline { display: inline !important; }
...
```

---

## Basic Settings

The following basic build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `important`{.code-a} | `false` | Apply `!important` to each property. |
| `prefix` | `null` | Append a namespace to the beginning of each class name. |
| `delimiter` | `'-'` | Specifies the delimiter that separates shorthand name to its variant. |
| `pseudo-delimiter` | `'.'` | Specifies the delimiter of pseudo variants. |
| `screen-delimiter` | `'.'` | Specifies the delimiter of breakpoint variants. |

{.text-left style="--markdown-table-border: 1px solid hsl(var(--gray-hue), var(--gray-sat), var(--shade-700))"}

---

## Advanced Settings

The following advanced build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `headless` | `false` | Loads Uniform CSS in Headless Mode. |
| `placeholders` | `false` | Builds with placeholder selectors enabled. |
| `dark-mode-support` | `false` | Enable dark pseudo across all properties. |

{.text-left style="--markdown-table-border: 1px solid hsl(var(--gray-hue), var(--gray-sat), var(--shade-700))"}

### Headless Mode

When `headless` is enabled, Uniform CSS will be loaded but nothing will be generated in the final output file. This can be useful in situations where you need access to helper functions and theme variables without importing the entire library.

```scss
@use "uniform" as * with (
  $config: (
    headless: true, // false by default
  )
);
```

### Placeholders

When `placeholders` is enabled, every property will also generate Sass placeholder selector that can be extended. This setting must be enabled to use the `apply()` helper mixin feature.

```scss
@use "uniform" as * with (
  $config: (
    placeholders: true, // false by default
  )
);
```

### Dark Mode Support

When `dark-mode-support` is enabled, every property will also generate a dark pseudo variant.

```scss
@use "uniform" as * with (
  $config: (
    dark-mode-support: true, // false by default
  )
);
```
