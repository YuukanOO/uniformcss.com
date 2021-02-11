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

To apply inline gradients, add a the class `bg-gradient` to any element and override the `--gradient` CSS variable with your gradient value.

```html
<div class="bg-gradient" style="--gradient: to right, #ffbebe, #4eff9d;">
  ...
</div>
```

---

## Adding Gradients

You can add your own gradient by adding key value pairs to the the `gradients` setting in your theme configuration. The following gradients are built-in.

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

```css
.bg-gradient-x-from-white {
  background-color: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
}
```

---

## Disabling Gradients

You can remove all gradients by passing `null` in your gradient setting.

```scss
@use "uniform" as * with (
  $config: (
    gradients: null
  )
)
