---
title: Align Content
description: Row positioning inside grid and multi-row flex containers.
date: 1000-01-01
---

### Basic Usage

The `align-content` property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

Class Name | Property
- | -
`align-content-center` | `align-content: center`
`align-content-start` | `align-content: flex-start`
`align-content-end` | `align-content: flex-end`
`align-content-between` | `align-content: space-between`
`align-content-around` | `align-content: space-around`
`align-content-around` | `align-content: space-evenly`


---


### Start

Values for the following CSS variables apply to the `font-family` property. 

<div class="bg-silver-200 p-5 h-200px radius-md flex flex-wrap align-content-start">
  <div class="w-4-12 p-1">
    <div class="flex align-items-center justify-content-center h-10 bg-primary-900 font-bold font-xl text-white radius-sm">1</div>
  </div>
  <div class="w-4-12 p-1">
    <div class="flex align-items-center justify-content-center h-10 bg-primary-900 font-bold font-xl text-white radius-sm">2</div>
  </div>
  <div class="w-4-12 p-1">
    <div class="flex align-items-center justify-content-center h-10 bg-primary-900 font-bold font-xl text-white radius-sm">3</div>
  </div>
  <div class="w-4-12 p-1">
    <div class="flex align-items-center justify-content-center h-10 bg-primary-900 font-bold font-xl text-white radius-sm">4</div>
  </div>
  <div class="w-4-12 p-1">
    <div class="flex align-items-center justify-content-center h-10 bg-primary-900 font-bold font-xl text-white radius-sm">5</div>
  </div>
  <div class="w-4-12 p-1">
    <div class="flex align-items-center justify-content-center h-10 bg-primary-900 font-bold font-xl text-white radius-sm">6</div>
  </div>
</div>

```html
<div class="h-48 flex flex-wrap content-start ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```
