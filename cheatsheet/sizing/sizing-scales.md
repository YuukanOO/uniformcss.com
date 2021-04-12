---
title: Sizing Scales
description: Visual reference of all default sizes.
date: 1000-01-03
---

## Visual Reference

The following table visually represents all the radiuses that are available.


:::markdown h-640 overflow-x-hidden overflow-y-auto
| Reference | Size | Pixels | Rem |
| - | - | - | - |
| <div class="w-100p h-0 bg-cool-gray"></div> | `size-0` | 0 | 0 |
| <div class="w-100p h-1 bg-cool-gray"></div> | `size-1` | 1px | 0.062rem |
| <div class="w-100p h-2 bg-cool-gray"></div> | `size-2` | 2px | 0.125rem |
| <div class="w-100p h-3 bg-cool-gray"></div> | `size-3` | 3px | 0.187rem |
| <div class="w-100p h-4 bg-cool-gray"></div> | `size-4` | 4px | 0.25rem |
| <div class="w-100p h-5 bg-cool-gray"></div> | `size-5` | 5px | 0.3125rem |
| <div class="w-100p h-6 bg-cool-gray"></div> | `size-6` | 6px | 0.375rem |
| <div class="w-100p h-7 bg-cool-gray"></div> | `size-7` | 7px | 0.4375rem |
| <div class="w-100p h-8 bg-cool-gray"></div> | `size-8` | 8px | 0.5rem |
| <div class="w-100p h-9 bg-cool-gray"></div> | `size-9` | 9px | 0.5625rem |
| <div class="w-100p h-10 bg-cool-gray"></div> | `size-10` | 10px | 0.625rem |
| <div class="w-100p h-12 bg-cool-gray"></div> | `size-12` | 12px | 0.75rem |
| <div class="w-100p h-14 bg-cool-gray"></div> | `size-14` | 14px | 0.875rem |
| <div class="w-100p h-16 bg-cool-gray"></div> | `size-16` | 16px | 1rem |
| <div class="w-100p h-18 bg-cool-gray"></div> | `size-18` | 18px | 1.125rem |
| <div class="w-100p h-20 bg-cool-gray"></div> | `size-20` | 20px | 1.25rem |
| <div class="w-100p h-24 bg-cool-gray"></div> | `size-24` | 24px | 1.5rem |
| <div class="w-100p h-28 bg-cool-gray"></div> | `size-28` | 28px | 1.75rem |
| <div class="w-100p h-32 bg-cool-gray"></div> | `size-32` | 32px | 2rem |
| <div class="w-100p h-36 bg-cool-gray"></div> | `size-36` | 36px | 2.25rem |
| <div class="w-100p h-40 bg-cool-gray"></div> | `size-40` | 40px | 2.5rem |
| <div class="w-100p h-48 bg-cool-gray"></div> | `size-48` | 48px | 3rem |
| <div class="w-100p h-56 bg-cool-gray"></div> | `size-56` | 56px | 3.5rem |
| <div class="w-100p h-64 bg-cool-gray"></div> | `size-64` | 64px | 4rem |
| <div class="w-100p h-72 bg-cool-gray"></div> | `size-72` | 72px | 4.5rem |
| <div class="w-100p h-80 bg-cool-gray"></div> | `size-80` | 80px | 5rem |
| <div class="w-100p h-96 bg-cool-gray"></div> | `size-96` | 96px | 6rem |
| <div class="w-100p h-112 bg-cool-gray"></div> | `size-112` | 112px | 7rem |
| <div class="w-100p h-128 bg-cool-gray"></div> | `size-128` | 128px | 8rem |
| <div class="w-100p h-144 bg-cool-gray"></div> | `size-144` | 144px | 9rem |
| <div class="w-100p h-160 bg-cool-gray"></div> | `size-160` | 160px | 10rem |
| <div class="w-100p h-192 bg-cool-gray"></div> | `size-192` | 192px | 12rem |
| <div class="w-100p h-224 bg-cool-gray"></div> | `size-224` | 224px | 14rem |
| <div class="w-100p h-256 bg-cool-gray"></div> | `size-256` | 256px | 16rem |
| <div class="w-100p h-288 bg-cool-gray"></div> | `size-288` | 288px | 18rem |
| <div class="w-100p h-320 bg-cool-gray"></div> | `size-320` | 320px | 20rem |
| <div class="w-100p h-384 bg-cool-gray"></div> | `size-384` | 384px | 24rem |
| <div class="w-100p h-448 bg-cool-gray"></div> | `size-448` | 448px | 28rem |
| <div class="w-100p h-512 bg-cool-gray"></div> | `size-512` | 512px | 32rem |
| <div class="w-100p h-576 bg-cool-gray"></div> | `size-576` | 576px | 36rem |
| <div class="w-100p h-640 bg-cool-gray"></div> | `size-640` | 640px | 40rem |

{ .text-left }

:::

---

## Basic Usage

Combine each size variant with any size related property such as `width`, `height`, `padding`, `margin`, and etc.

```html
<div class="w-32 h-32 ...">
  <!-- 32px width and 32px height -->
</div>

<div class="mb-24 ...">
  <!-- 20px margin-bottom -->
</div>
```

---

## CSS Variables

The following CSS variables are available.

:::overflow-auto h-512 radius-md
```css
:root {
  --size-0: 0;

  --size-n1: -0.062rem;
  --size-n2: -0.125rem;
  --size-n3: -0.187rem;
  --size-n4: -0.25rem;
  --size-n5: -0.3125rem;
  --size-n6: -0.375rem;
  --size-n7: -0.4375rem;
  --size-n8: -0.5rem;
  --size-n9: -0.5625rem;
  --size-n10: -0.625rem;
  --size-n12: -0.75rem;
  --size-n14: -0.875rem;
  --size-n16: -1rem;
  --size-n18: -1.125rem;
  --size-n20: -1.25rem;
  --size-n24: -1.5rem;
  --size-n28: -1.75rem;
  --size-n32: -2rem;
  --size-n36: -2.25rem;
  --size-n40: -2.5rem;
  --size-n48: -3rem;
  --size-n56: -3.5rem;
  --size-n64: -4rem;
  --size-n72: -4.5rem;
  --size-n80: -5rem;
  --size-n96: -6rem;
  --size-n112: -7rem;
  --size-n128: -8rem;
  --size-n144: -9rem;
  --size-n160: -10rem;
  --size-n192: -12rem;
  --size-n224: -14rem;
  --size-n256: -16rem;
  --size-n288: -18rem;
  --size-n320: -20rem;
  --size-n384: -24rem;
  --size-n448: -28rem;
  --size-n512: -32rem;
  --size-n576: -36rem;
  --size-n640: -40rem;
  --size-n768: -48rem;
  --size-n896: -56rem;
  --size-n1024: -64rem;
  --size-n1152: -72rem;
  --size-n1280: -80rem;
  --size-n1536: -96rem;
  --size-n1792: -112rem;
  --size-n2048: -128rem;
  --size-n2304: -144rem;
  --size-n2560: -160rem;

  --size-1: 0.062rem;
  --size-2: 0.125rem;
  --size-3: 0.187rem;
  --size-4: 0.25rem;
  --size-5: 0.3125rem;
  --size-6: 0.375rem;
  --size-7: 0.4375rem;
  --size-8: 0.5rem;
  --size-9: 0.5625rem;
  --size-10: 0.625rem;
  --size-12: 0.75rem;
  --size-14: 0.875rem;
  --size-16: 1rem;
  --size-18: 1.125rem;
  --size-20: 1.25rem;
  --size-24: 1.5rem;
  --size-28: 1.75rem;
  --size-32: 2rem;
  --size-36: 2.25rem;
  --size-40: 2.5rem;
  --size-48: 3rem;
  --size-56: 3.5rem;
  --size-64: 4rem;
  --size-72: 4.5rem;
  --size-80: 5rem;
  --size-96: 6rem;
  --size-112: 7rem;
  --size-128: 8rem;
  --size-144: 9rem;
  --size-160: 10rem;
  --size-192: 12rem;
  --size-224: 14rem;
  --size-256: 16rem;
  --size-288: 18rem;
  --size-320: 20rem;
  --size-384: 24rem;
  --size-448: 28rem;
  --size-512: 32rem;
  --size-576: 36rem;
  --size-640: 40rem;
  --size-768: 48rem;
  --size-896: 56rem;
  --size-1024: 64rem;
  --size-1152: 72rem;
  --size-1280: 80rem;
  --size-1536: 96rem;
  --size-1792: 112rem;
  --size-2048: 128rem;
  --size-2304: 144rem;
  --size-2560: 160rem;
}
```
:::
