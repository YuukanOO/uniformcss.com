---
title: Breakpoints
description: Customize breakpoints for all responsive properties
date: 1000-01-01
---

## Breakpoints

By default, responsive properties will be generated for each breakpoint. Breakpoints are defined as `screens` in Uniform and breakpoints can be overwritten or extended.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Breakpoint Variant Chart

By default, there are **4 breakpoints** for any given responsive behavior. Use the following chart as the reference for any breakpoint related property.

| Variant | Value |
| - | - |
| `sm` | `768px` |
| `md` | `1024px` |
| `lg` | `1280px` |
| `lg` | `1536px` |

{.table}

---

## Basic Usage

The following example showcases how the variants can be applied.

```html
<div class="h-10 sm.h-14 md.h-20 lg.h-24 xl.h-64">
  10px height on mobile
  14px height on small screen sizes
  20px height on medium screen sizes
  24px height on large screen sizes
  64px height on extra large screen sizes
</div>
```


---

## Supporting Other Breakpoints

You can add support for more breakpoints by appending your own key value pair to the screens setting in your configuration. Optionally, if a key already exists the newly defined value will take precedence.

```scss
@use "uniform" as * with (
  $config: (
    screens: (
      xs: 640px // includes 640px as a supported breakpoint
    )
  )
);
```

