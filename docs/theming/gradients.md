---
title: Gradients
description: Learn how to customize and manipulate gradients.
date: 1000-01-02
---

## About Gradients

Uniform provides inline gradient support using the `bg-gradient` utility. You can also add your own gradients using the `gradients` theme setting in your configuration. By default, Uniform also provides basic to and from, white and black gradients for horizontal and vertical axises.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Applying Inline Gradient

To apply inline gradients, add the class `bg-gradient` to any element and override the `--gradient` CSS variable with your gradient.

```html
<div class="bg-gradient" style="--gradient: to right, #ffbebe, #4eff9d;">
  ...
</div>
```

---

## Default Gradients

The following default gradient configurations are applied. To see a more visual reference of all the gradients, visit [Cheatsheet](/cheatsheet).

```scss
@use "uniform" as * with (
  $config: (
    gradients: (
      gradient-x-from-white: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%),
      gradient-x-to-white: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%),
      gradient-y-from-white: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%),
      gradient-y-to-white: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%),
      gradient-x-from-black: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),
      gradient-x-to-black: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%),
      gradient-y-from-black: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),
      gradient-y-to-black: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%),
    )
  )
)
```

---

## Customizing via Sass

You can add your own gradients by passing in key value pairs to the `gradients` map in your configuration.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    gradients: (
      custom-gradient: linear-gradient(to right, red 0%, blue 100%)
    )
  )
)
```

```css
/* styles.css */

.bg-custom-gradient {
  background: linear-gradient(to right, red 0%, blue 100%);
}
```

---

## Disabling Defaults

You can remove all default gradients by passing `null` to the `gradients` setting.

```scss
@use "uniform" as * with (
  $config: (
    gradients: null
  )
)
