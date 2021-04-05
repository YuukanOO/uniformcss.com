---
title: Text Size
description: Learn about the text size special utility
date: 1000-01-01
---

## About Text Size

The `text-<size>` utility applies both `font-size` and `line-height` properties to any text element. This utility is the recommended method for styling any text on page.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To apply this utility, apply the `wrapper` class to any parent container.

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

## Customizing Wrapper

You can override the default `max-width` value by defining the following CSS variables.

```css
:root {
  --wrapper-max-width: 640px;
  --wrapper-sm-max-width: 768px;
  --wrapper-md-max-width: 1024px;
  --wrapper-lg-max-width: 1280px;
  --wrapper-xl-max-width: 1536px;
}
```

---

## Disabling Wrapper

To disable this utility, pass `wrapper` to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    exclude: (
      wrapper
    )
  )
);
```