---
title: Align Items
property: align-items
mdn: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
description: Row positioning inside grid and multi-row flex containers.
date: 1000-01-01
---

## Basic Usage

The `align-items` property controls alignment for items inside the flex container.

| Class Name              | Property                       |
| ----------------------- | ------------------------------ |
| `align-content-center`  | `align-content: center`        |
| `align-content-start`   | `align-content: flex-start`    |
| `align-content-end`     | `align-content: flex-end`      |
| `align-content-between` | `align-content: space-between` |
| `align-content-around`  | `align-content: space-around`  |
| `align-content-evenly`  | `align-content: space-evenly`  |

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

<!--

## Center

Items are packed flush to each other in the center of the alignment container along the cross axis.

---

## Start

Items are packed flush to each other against the start edge of the alignment container in the cross axis.

---

## End

Items are packed flush to each other against the end edge of the alignment container in the cross axis.

---

## Around

Items are evenly distributed within the alignment container along the cross axis.

---

## Evenly

Items are evenly distributed within the alignment container along the cross axis.

-->

---

## Resources

To learn more about the `{{ property }}` property refer to the [MDN docs <i class="far fa-external-link ml-6"></i>]({{ mdn }}).