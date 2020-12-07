---
title: Grid System
description: Learn how to apply basic grid based layouts
date: 1000-01-06
---


## Getting started with Grid

Grids are a useful tool to help layout your page design. The Uniform grid systems are built using the `grid` display type and designed to support up to `12` columns.

<section class="bg-silver-200 p-20 radius-md">
  <div class="grid grid-cols-2 mb-20">
    <div class="h-40 bg-gray-500">
    </div>
    <div class="h-40 bg-gray-100">
    </div>
  </div>

  <div class="grid grid-cols-3 mb-20">
    <div class="h-40 bg-gray-500">
    </div>
    <div class="h-40 bg-gray-100">
    </div>
    <div class="h-40 bg-gray-500">
    </div>
  </div>

  <div class="grid grid-cols-4">
    <div class="h-40 bg-gray-100">
    </div>
    <div class="h-40 bg-gray-500">
    </div>
    <div class="h-40 bg-gray-100">
    </div>
    <div class="h-40 bg-gray-500">
    </div>
  </div>
</section>

```html
<div class="grid grid-cols-2">
  <div>...</div>
  <div>...</div>
</div>

<div class="grid grid-cols-3">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>

<div class="grid grid-cols-4">
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

---

## Gutters

You can create gutters by combining your grid layout with the `gap-<size>` property. There are a total of **30** sizing units available for gaps. To get a sense of the available sizing units, please refer to the cheatsheet.

<section class="bg-silver-200 p-20 radius-md">
  <div class="grid grid-cols-2 mb-20 gap-36">
    <div class="h-40 bg-gray-500">
    </div>
    <div class="h-40 bg-gray-100">
    </div>
  </div>

  <div class="grid grid-cols-3 mb-20 gap-48">
    <div class="h-40 bg-gray-500">
    </div>
    <div class="h-40 bg-gray-100">
    </div>
    <div class="h-40 bg-gray-500">
    </div>
  </div>

  <div class="grid grid-cols-4 gap-24">
    <div class="h-40 bg-gray-100">
    </div>
    <div class="h-40 bg-gray-500">
    </div>
    <div class="h-40 bg-gray-100">
    </div>
    <div class="h-40 bg-gray-500">
    </div>
  </div>
</section>

```html
<div class="grid grid-cols-2 gap-36">
  ...
</div>

<div class="grid grid-cols-3 gap-48">
  ...
</div>

<div class="grid grid-cols-4 gap-24">
  ...
</div>
```

---

## Responsive Gutters

Gutters can be responsive by prefixing the `gap-<size>` property with the breakpoint variant. For more information on media queries, please refer to <a class="hover.underline" href="/get-started/media-queries">media queries</a>. 

<section class="bg-silver-200 p-20 radius-md">
  <div class="grid grid-cols-3 gap-12 sm.gap-24 md.gap-28 lg.gap-36">
    <div class="h-40 bg-gray-500">
    </div>
    <div class="h-40 bg-gray-100">
    </div>
    <div class="h-40 bg-gray-500">
    </div>
  </div>
</section>

```html
<div class="grid grid-cols-3 gap-12 sm.gap-24 md.gap-28 lg.gap-36">
  ...
</div>
```

---

## Columns

You can control the size of each column by specifying its column span count.

<section class="bg-silver-200 p-20 radius-md">
  <div class="grid grid-cols-5 gap-14">
    <div class="h-40 bg-gray-100 col-1">
    </div>
    <div class="h-40 bg-gray-500 col-3">
    </div>
    <div class="h-40 bg-gray-100 col-1">
    </div>
  </div>
</section>

```html
<div class="grid grid-cols-5 gap-14">
  <div class="col-1">...</div>
  <div class="col-3">...</div>
  <div class="col-1">...</div>
</div>
```

---

## Responsive Columns

Both the grid column count and column span count can be responsive by prefixing the breakpoint variant. Adjust your browser width to see this in action.

<section class="bg-silver-200 p-20 radius-md">
  <div class="grid grid-cols-1 md.grid-cols-5 gap-14">
    <div class="h-40 bg-gray-100 col-1 md.col-1">
    </div>
    <div class="h-40 bg-gray-500 col-1 md.col-3">
    </div>
    <div class="h-40 bg-gray-100 col-1 md.col-1">
    </div>
  </div>
</section>

```html
<div class="grid grid-cols-1 md.grid-cols-5 gap-14">
  <div class="col-1 md.col-1">...</div>
  <div class="col-1 md.col-3">...</div>
  <div class="col-1 md.col-1">...</div>
</div>
```
