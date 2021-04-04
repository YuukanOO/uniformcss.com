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

| Size | Pixel | Rem |
| - | - | - |
| `size-0` | 0px | 0rem |
| `size-1` | 1px | 0.0625rem |
| `size-2` | 2px | 0.125rem |
| `size-3` | 3px | 0.1875rem |
| `size-4` | 4px | 0.25rem |
| `size-5` | 5px | 0.3125rem |
| `size-6` | 6px | 0.375rem |
| `size-7` | 7px | 0.4375rem |
| `size-8` | 8px | 0.5rem |
| `size-9` | 9px | 0.5625rem |
| `size-10` | 10px | 0.625rem |
| `size-12` | 12px | 0.75rem |
| `size-14` | 14px | 0.875rem |
| `size-16` | **16px** | **1rem (base)** |
| `size-18` | 18px | 1.125rem |
| `size-20` | 20px | 1.25rem |
| `size-24` | 24px | 1.5rem |
| `size-28` | 28px | 1.75rem |
| `size-32` | 32px | 2rem |
| `size-36` | 36px | 2.25rem |
| `size-40` | 40px | 2.5rem |
| `size-48` | 48px | 3rem |
| `size-56` | 56px | 3.5rem |
| `size-64` | 64px | 4rem |
| `size-72` | 72px | 4.5rem |
| `size-80` | 80px | 5rem |
| `size-96` | 96px | 6rem |
| `size-112` | 112px | 7rem |
| `size-128` | 128px | 8rem |
| `size-144` | 144px | 9rem |
| `size-160` | 160px | 10rem |
| `size-192` | 192px | 12rem |
| `size-224` | 224px | 14rem |
| `size-256` | 256px | 16rem |
| `size-288` | 288px | 18rem |
| `size-320` | 320px | 20rem |
| `size-384` | 384px | 24rem |
| `size-448` | 448px | 28rem |
| `size-512` | 512px | 32rem |
| `size-576` | 576px | 36rem |
| `size-640` | 640px | 40rem |
| `size-768` | 768px | 48rem |
| `size-896` | 896px | 56rem |
| `size-1024` | 1024px | 64rem |
| `size-1152` | 1152px | 72rem |
| `size-1280` | 1280px | 80rem |
| `size-1536` | 1536px | 96rem |
| `size-1792` | 1792px | 112rem |
| `size-2048` | 2048px | 128rem |
| `size-2304` | 2304px | 144rem |
| `size-2560` | 2560px | 160rem |

{.text-left style="--markdown-table-border: 1px solid hsl(var(--gray-hue), var(--gray-sat), var(--shade-700))"}

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
