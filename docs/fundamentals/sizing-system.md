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

Uniform provides a total of `47` default sizes. Each size related property such as `width` and `margin` support different ranges of sizes.

<!-- <div class="relative">
  <table class="text-left" style="--markdown-table-border: 1px solid hsl(var(--gray-hue), var(--gray-sat), var(--shade-700))">
    <thead>
      <tr>
        <th>Size</th>
        <th>Pixel</th>
        <th>Rem</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--size-0</code></td>
        <td>0px</td>
        <td>0rem</td>
      </tr>
      <tr>
        <td><code>--size-1</code></td>
        <td>1px</td>
        <td>0.0625rem</td>
      </tr>
      <tr>
        <td><code>--size-2</code></td>
        <td>2px</td>
        <td>0.125rem</td>
      </tr>
      <tr>
        <td><code>--size-3</code></td>
        <td>3px</td>
        <td>0.1875rem</td>
      </tr>
      <tr>
        <td><code>--size-4</code></td>
        <td>4px</td>
        <td>0.25rem</td>
      </tr>
      <tr>
        <td><code>--size-5</code></td>
        <td>5px</td>
        <td>0.3125rem</td>
      </tr>
      <tr>
        <td><code>--size-6</code></td>
        <td>6px</td>
        <td>0.375rem</td>
      </tr>
      <tr>
        <td><code>--size-7</code></td>
        <td>7px</td>
        <td>0.4375rem</td>
      </tr>
      <tr>
        <td><code>--size-8</code></td>
        <td>8px</td>
        <td>0.5rem</td>
      </tr>
      <tr>
        <td><code>--size-9</code></td>
        <td>9px</td>
        <td>0.5625rem</td>
      </tr>
      <tr>
        <td><code>--size-10</code></td>
        <td>10px</td>
        <td>0.625rem</td>
      </tr>
      <tr>
        <td><code>--size-12</code></td>
        <td>12px</td>
        <td>0.75rem</td>
      </tr>
      <tr>
        <td><code>--size-14</code></td>
        <td>14px</td>
        <td>0.875rem</td>
      </tr>
      <tr>
        <td><code>--size-16</code></td>
        <td>16px</td>
        <td>1rem (base)</td>
      </tr>
      <tr>
        <td><code>--size-18</code></td>
        <td>18px</td>
        <td>1.125rem</td>
      </tr>
      <tr>
        <td><code>--size-20</code></td>
        <td>20px</td>
        <td>1.25rem</td>
      </tr>
      <tr>
        <td><code>--size-24</code></td>
        <td>24px</td>
        <td>1.5rem</td>
      </tr>
      <tr>
        <td><code>--size-28</code></td>
        <td>28px</td>
        <td>1.75rem</td>
      </tr>
      <tr>
        <td><code>--size-32</code></td>
        <td>32px</td>
        <td>2rem</td>
      </tr>
      <tr>
        <td><code>--size-36</code></td>
        <td>36px</td>
        <td>2.25rem</td>
      </tr>
      <tr>
        <td><code>--size-40</code></td>
        <td>40px</td>
        <td>2.5rem</td>
      </tr>
      <tr>
        <td><code>--size-48</code></td>
        <td>48px</td>
        <td>3rem</td>
      </tr>
      <tr>
        <td><code>--size-56</code></td>
        <td>56px</td>
        <td>3.5rem</td>
      </tr>
      <tr>
        <td><code>--size-64</code></td>
        <td>64px</td>
        <td>4rem</td>
      </tr>
      <tr>
        <td><code>--size-72</code></td>
        <td>72px</td>
        <td>4.5rem</td>
      </tr>
      <tr>
        <td><code>--size-80</code></td>
        <td>80px</td>
        <td>5rem</td>
      </tr>
      <tr>
        <td><code>--size-96</code></td>
        <td>96px</td>
        <td>6rem</td>
      </tr>
      <tr>
        <td><code>--size-112</code></td>
        <td>112px</td>
        <td>7rem</td>
      </tr>
      <tr>
        <td><code>--size-128</code></td>
        <td>128px</td>
        <td>8rem</td>
      </tr>
      <tr>
        <td><code>--size-144</code></td>
        <td>144px</td>
        <td>9rem</td>
      </tr>
      <tr>
        <td><code>--size-160</code></td>
        <td>160px</td>
        <td>10rem</td>
      </tr>
      <tr>
        <td><code>--size-192</code></td>
        <td>192px</td>
        <td>12rem</td>
      </tr>
      <tr>
        <td><code>--size-224</code></td>
        <td>224px</td>
        <td>14rem</td>
      </tr>
      <tr>
        <td><code>--size-256</code></td>
        <td>256px</td>
        <td>16rem</td>
      </tr>
      <tr>
        <td><code>--size-288</code></td>
        <td>288px</td>
        <td>18rem</td>
      </tr>
      <tr>
        <td><code>--size-320</code></td>
        <td>320px</td>
        <td>20rem</td>
      </tr>
      <tr>
        <td><code>--size-384</code></td>
        <td>384px</td>
        <td>24rem</td>
      </tr>
      <tr>
        <td><code>--size-448</code></td>
        <td>448px</td>
        <td>28rem</td>
      </tr>
      <tr>
        <td><code>--size-512</code></td>
        <td>512px</td>
        <td>32rem</td>
      </tr>
      <tr>
        <td><code>--size-576</code></td>
        <td>576px</td>
        <td>36rem</td>
      </tr>
      <tr>
        <td><code>--size-640</code></td>
        <td>640px</td>
        <td>40rem</td>
      </tr>
      <tr>
        <td><code>--size-768</code></td>
        <td>768px</td>
        <td>48rem</td>
      </tr>
      <tr>
        <td><code>--size-896</code></td>
        <td>896px</td>
        <td>56rem</td>
      </tr>
      <tr>
        <td><code>--size-1024</code></td>
        <td>1024px</td>
        <td>64rem</td>
      </tr>
      <tr>
        <td><code>--size-1152</code></td>
        <td>1152px</td>
        <td>72rem</td>
      </tr>
      <tr>
        <td><code>--size-1280</code></td>
        <td>1280px</td>
        <td>80rem</td>
      </tr>
      <tr>
        <td><code>--size-1536</code></td>
        <td>1536px</td>
        <td>96rem</td>
      </tr>
    </tbody>
  </table>
</div> -->

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
