---
title: Flex Wrap
property: flex-wrap
mdn: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
description: Controls whether to wrap overflowing Flexbox children
date: 1000-01-01
---

## Basic Usage

The `flex-wrap` utilities control whether to wrap overflowing Flexbox children. Overflowing means Flexbox children exceed the parent bounding box. For `flex-direction: row` this is `width`, and for `flex-direction: column` this is `height`.

| Class Name          | Property                  |
| ------------------- | ------------------------- |
| `flex-no-wrap`      | `flex-wrap: nowrap`       |
| `flex-wrap`         | `flex-wrap: wrap`         |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse` |

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

To learn more about `{{ property }}`, refer to [MDN docs <i class="far fa-external-link ml-6"></i>]({{ mdn }}).
