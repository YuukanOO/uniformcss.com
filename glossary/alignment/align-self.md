---
title: Align Self
property: align-self
mdn: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
description: Aligns a Flexbox or CSS Grid child
date: 1000-01-01
---

## Basic Usage

The `align-self` utilities align a Flexbox or CSS Grid child. Alignment happens along the cross-axis, which for a Flexbox row is top-to-bottom and for Flexbox column, left-to-right.

| Class Name           | Property              |
| -------------------- | --------------------- |
| `align-self-center`  | `align-self: auto`    |
| `align-self-start`   | `align-self: start`   |
| `align-self-end`     | `align-self: end`     |
| `align-self-between` | `align-self: center`  |
| `align-self-around`  | `align-self: stretch` |

---

## Default Settings

The following default responsive and pseudo settings.

| Setting      | Default Setting |
| ------------ | --------------- |
| `responsive` | `true`          |
| `pseudos`    | `none`          |

---

## {{ title }}

<div class="bg-silver-200 p-20 h-256 radius-md flex flex-wrap align-content-center">
  <!-- ... -->
</div>

```html
<div class="TODO">
	<!-- TODO -->
</div>
```

---

## Resources

To learn more about the `{{ property }}` property refer to the [MDN docs <i class="far fa-external-link ml-6"></i>]({{ mdn }}).
