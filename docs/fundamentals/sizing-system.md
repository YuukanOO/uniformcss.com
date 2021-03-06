---
title: Sizing System
description: Flexible sizing system for pixel perfect adjusments.
date: 1000-01-02
---

## Sizing System

Uniform provides a broad range of sizes to help you achieve pixel perfect sizing of objects and margins. All sizes are produced in `rem` however represented as the numerical `px` equivalent for easier reference. Most pixel sizing featured in common design patterns are supported.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Sizes

Uniform supports the following sizes out of the box. These sizes are applied in varying degree of ranges across size related property such as `width` and `margin` support different ranges of sizes.

| Level | Size | Pixel | Rem |
| - | - | - | - |
| 1 | `size-0` | 0px | 0rem |
| 2 | `size-1` | 1px | 0.0625rem |
| 3 | `size-2` | 2px | 0.125rem |
| 4 | `size-3` | 3px | 0.1875rem |
| 5 | `size-4` | 4px | 0.25rem |
| 6 | `size-5` | 5px | 0.3125rem |
| 7 | `size-6` | 6px | 0.375rem |
| 8 | `size-7` | 7px | 0.4375rem |
| 9 | `size-8` | 8px | 0.5rem |
| 10 | `size-9` | 9px | 0.5625rem |
| 11 | `size-10` | 10px | 0.625rem |
| 12 | `size-12` | 12px | 0.75rem |
| 13 | `size-14` | 14px | 0.875rem |
| 14 | `size-16` | **16px** | **1rem (base)** |
| 15 | `size-18` | 18px | 1.125rem |
| 16 | `size-20` | 20px | 1.25rem |
| 17 | `size-24` | 24px | 1.5rem |
| 18 | `size-28` | 28px | 1.75rem |
| 19 | `size-32` | 32px | 2rem |
| 20 | `size-36` | 36px | 2.25rem |
| 21 | `size-40` | 40px | 2.5rem |
| 22 | `size-48` | 48px | 3rem |
| 23 | `size-56` | 56px | 3.5rem |
| 24 | `size-64` | 64px | 4rem |
| 25 | `size-72` | 72px | 4.5rem |
| 26 | `size-80` | 80px | 5rem |
| 27 | `size-96` | 96px | 6rem |
| 28 | `size-112` | 112px | 7rem |
| 29 | `size-128` | 128px | 8rem |
| 30 | `size-144` | 144px | 9rem |
| 31 | `size-160` | 160px | 10rem |
| 32 | `size-192` | 192px | 12rem |
| 33 | `size-224` | 224px | 14rem |
| 34 | `size-256` | 256px | 16rem |
| 35 | `size-288` | 288px | 18rem |
| 36 | `size-320` | 320px | 20rem |
| 37 | `size-384` | 384px | 24rem |
| 38 | `size-448` | 448px | 28rem |
| 39 | `size-512` | 512px | 32rem |
| 40 | `size-576` | 576px | 36rem |
| 41 | `size-640` | 640px | 40rem |
| 42 | `size-768` | 768px | 48rem |
| 43 | `size-896` | 896px | 56rem |
| 44 | `size-1024` | 1024px | 64rem |
| 45 | `size-1152` | 1152px | 72rem |
| 46 | `size-1280` | 1280px | 80rem |
| 47 | `size-1536` | 1536px | 96rem |
| 48 | `size-1792` | 1792px | 112rem |
| 49 | `size-2048` | 2048px | 128rem |
| 50 | `size-2304` | 2304px | 144rem |
| 51 | `size-2560` | 2560px | 160rem |

{.text-left style=""}

---

## Basic Usage

To apply colors, use the property shorthand followed by the color key.

```html
<div class="w-32 h-32">
  32px width
  32px height
</div>

<div class="mb-36">
  36px margin-bottom
</div>

<div class="mb-20 md.mb-24">
  20px margin-bottom on mobile
  24px margin-bottom on medium screen
</div>
```
