---
title: Font Sizes
description: Visual reference of all default font sizes.
date: 1000-01-03
---

## Visual Reference

The following table visually represents all the font-sizes that are available.

:::markdown overflow-auto
| Size | Class | Pixel | Rem |
| - | - | - | - |
| <span class="semibold color-black text-2xs">2xs</span> | `text-2xs` | 10px | 0.625rem |
| <span class="semibold color-black text-xs">xs</span> | `text-xs` | 12px | 0.75rem |
| <span class="semibold color-black text-sm">sm</span> | `text-sm` | 14px | 0.875rem |
| <span class="semibold color-black text-md">md</span> | `text-md` | 16px | 1rem |
| <span class="semibold color-black text-lg">lg</span> | `text-lg` | 18px | 1.125rem |
| <span class="semibold color-black text-xl">xl</span> | `text-xl` | 20px | 1.25rem |
| <span class="semibold color-black text-2xl">2xl</span> | `text-2xl` | 24px | 1.5rem |
| <span class="semibold color-black text-3xl">3xl</span> | `text-3xl` | 28px | 1.75rem |
| <span class="semibold color-black text-4xl">4xl</span> | `text-4xl` | 32px | 2rem |
| <span class="semibold color-black text-5xl">5xl</span> | `text-5xl` | 36px | 2.25rem |
| <span class="semibold color-black text-6xl">6xl</span> | `text-6xl` | 40px | 2.5rem |
| <span class="semibold color-black text-7xl">7xl</span> | `text-7xl` | 48px | 3rem |
| <span class="semibold color-black text-8xl">8xl</span> | `text-8xl` | 56px | 3.5rem |
| <span class="semibold color-black text-9xl">9xl</span> | `text-9xl` | 64px | 4rem |
| <span class="semibold color-black text-10xl">10xl</span> | `text-10xl` | 72px | 4.5rem |
| <span class="semibold color-black text-11xl">11xl</span> | `text-11xl` | 88px | 5.5rem |
| <span class="semibold color-black text-12xl">12xl</span> | `text-12xl` | 104px | 6.5rem |
| <span class="semibold color-black text-13xl">13xl</span> | `text-13xl` | 120px | 7.5rem |

{ .text-left .w-100p }
:::

---

## Basic Usage

Apply the `text-<size>` utility to any text based element.

```html
<h1 class="text-6xl">
  H1 Heading
</h1>
```

---

## CSS Variables

You can customize each `font-size` by overriding the following CSS custom properties.

```css
:root {
  --font-13xl: 7.5rem;
  --font-12xl: 6.5rem;
  --font-11xl: 5.5rem;
  --font-10xl: 4.5rem;
  --font-9xl: 4rem;
  --font-8xl: 3.5rem;
  --font-7xl: 3rem;
  --font-6xl: 2.5rem;
  --font-5xl: 2.25rem;
  --font-4xl: 2rem;
  --font-3xl: 1.75rem;
  --font-2xl: 1.5rem;
  --font-xl: 1.25rem;
  --font-lg: 1.125rem;
  --font-md: 1rem;
  --font-sm: 0.875rem;
  --font-xs: 0.75rem;
  --font-2xs: 0.625rem;

  --font-13xl-leading: 1;
  --font-12xl-leading: 1;
  --font-11xl-leading: 1;
  --font-10xl-leading: var(--leading-120);
  --font-9xl-leading: var(--leading-120);
  --font-8xl-leading: var(--leading-120);
  --font-7xl-leading: var(--leading-120);
  --font-6xl-leading: var(--leading-120);
  --font-5xl-leading: var(--leading-140);
  --font-4xl-leading: var(--leading-140);
  --font-3xl-leading: var(--leading-140);
  --font-2xl-leading: var(--leading-140);
  --font-xl-leading: var(--leading-140);
  --font-lg-leading: var(--leading-180);
  --font-md-leading: var(--leading-180);
  --font-sm-leading: var(--leading-180);
  --font-xs-leading: var(--leading-180);
  --font-2xs-leading: var(--leading-100);
}
```

