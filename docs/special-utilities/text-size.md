---
title: Text Size
description: Learn about the text size special utility
date: 1000-01-02
---

## About Text Size

The `text-<size>` utility applies both `font-size` and `line-height` properties to any text element. This utility is the recommended way styling text since it provides two commonly used text styling properties in one.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

You can apply utility using the `text-<size>` utility. This utility is responsive and can also be applied conditionally based on breakpoint.

```html
<h1 class="text-8xl">
  ...
</h1>
```

```css
.text-8xl {
  font-size: var(--font-8xl);
  line-height: var(--font-8xl-leading);
}
```

---

## Disabling Text Size

To disable this utility, pass `text-size` to the `exclude` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      wrapper
    )
  )
);
```