---
title: Utility Settings
description: Control how individual properties are generated.
date: 1000-01-03
---


## Utility Settings

The `utility` setting is a map where you can pass in settings to configure, replace, and extend variants for each property. For each property the following settings are available to be configured.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

### Utility Setting Usage

Utility settings control how classes should look on a global level.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utilities: (
      text-align: (
        shorthand: align,
        responsive: false,
        ...
      )
    )
  )
);
```

```css
/* styles.css */
.align-left {text-align: left;}
.align-right {text-align: right;}
...
```

### Utility Settings Table

The following utility setting definitions apply.

| Setting | Type | Description |
| - | - | - |
| `shorthand` | `string` | Specifies the shorthand word to represent property. |
| `responsive` | `boolean` | Specifies wether property is responsive. |
| `responsive-pseudos` | `boolean` | Specifies wether property is responsive across pseudo variants. |
| `pseudo-delimiter` | `boolean` | Specifies the delimiter of pseudo variants. |
| `screen-delimiter` | `boolean` | Specifies the delimiter of breakpoint variants. |

{.table}

gesges