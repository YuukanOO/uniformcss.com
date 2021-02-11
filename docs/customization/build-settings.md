---
title: Build Settings
description: Explore global build settings for Uniform.
date: 1000-01-03
---

## Build Settings

Build settings are global in influence and specifies how your your utility classes are generated. These include the option of appending a prefix, changing the shorthand delimiter, and applying `!important` tags and more.

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
.myPrefix-block {display: block !important;}
.myPrefix-inline {display: inline !important;}
...
```

### Build Settings Table

The following build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `important`{.code-a} | `false` | Append `!important` to each property. |
| `prefix` | `null` | Append a namespace to the beginning of each class name. |
| `delimiter` | `-` | Specifies the delimiter that separates shorthand name to its variant. |
| `pseudo-delimiter` | `.` | Specifies the delimiter of pseudo variants. |
| `screen-delimiter` | `.` | Specifies the delimiter of breakpoint variants. |
| `screen-delimiter` | `.` | Specifies the delimiter of breakpoint variants. |

{.table}

---

## Advanced Settings

Advanced settings provide extra functionality that go beyond standard use.

### Advanced Setting Usage

To enable each advanced setting, simply include the setting in your configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    headless: false,
    debugger: false,
    placeholders: false,
    dark-mode: false,
  )
);
```

### Advanced Settings Table

The following advanced build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `headless` | `false` | Loads Uniform CSS in Headless Mode. |
| `debugger` | `false` | Enables all pseudos across all responsive breakpoints. |
| `placeholders` | `false` | Builds with placeholder selectors enabled. |
| `dark-mode` | `false` | Enable dark pseudo across all properties. |

{.table}

### Headless Mode

When `headless` is enabled, Uniform CSS will be loaded but no class properties will be generated. This can be useful in situations where helper functions are needed without importing the entire utility library itself.

```scss
@use "uniform" as * with (
  $config: (
    headless: true, // false by default
  )
);
```

### Debugger

When `debugger` is enabled, every single pseudo across all breakpoints will be generated for every single property. This will indeed create a very large file size but can be useful for testing and debugging variants.

```scss
@use "uniform" as * with (
  $config: (
    debugger: true, // false by default
  )
);
```

### Placeholders

When `placeholders` is enabled, every property will also generate Sass placeholder selector counterparts. This setting must be enabled to use the experimental `apply()` helper mixin feature.

```scss
@use "uniform" as * with (
  $config: (
    placeholders: true, // false by default
  )
);
```

### Dark Mode SUpport

When `dark-mode` is enabled, every property will also generate a dark pseudo variant.

```scss
@use "uniform" as * with (
  $config: (
    dark-mode: true, // false by default
  )
);
```

