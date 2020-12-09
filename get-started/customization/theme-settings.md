---
title: Theme Settings
description: Control how individual properties are generated.
date: 1000-01-03
---


## Utility Settings

The `utility` setting is a map where you can pass in settings to configure, replace, and extend variants for each property. For each property the following settings are available to be configured.

### Utility Setting Usage

Utility settings control how classes should look on a global level.

```scss
// default values
@use "uniform" as * with (
  $config: (
    utilities: (
      background-color: (
        shorthand: bg,
        responsive: false,

      )
    )
  )
);
```

### Build Settings Definitions

The following build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `important`{.code-a} | `false` | Append `!important` to each property. |
| `prefix` | `null` | Append a namespace to the beginning of each class name. |
| `delimiter` | `-` | Specifies the delimiter that separates shorthand name to its variant. |
| `pseudo-delimiter` | `.` | Specifies the delimiter of pseudo variants. |
| `screen-delimiter` | `.` | Specifies the delimiter of breakpoint variants. |