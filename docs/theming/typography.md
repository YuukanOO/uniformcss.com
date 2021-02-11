---
title: Typography
description: Learn how to customize typography related settings.
date: 1000-01-04
---

## Typography

You can customize full range of typography properties such as line-heights and font sizes in Uniform CSS. In this guide, you will learn which variants are available for each typography property and how you can customize them.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Font Families

Font family properties can be applied using the `font-<family>` utility. By default, there are three font families available.

<div class="grid grid-cols-1 gap-36 align-center bg-black radius-md py-48">
  <div class="font-sans font-3xl text-white">Sans Family</div>
  <div class="font-serif font-3xl text-white">Serif Family</div>
  <div class="font-mono font-3xl text-white">Mono Family</div>
</div>

```html
<div class="font-sans ...">Sans Family</div>
<div class="font-serif ...">Serif Family</div>
<div class="font-mono ...">Mono Family</div>
```

---

## Customizing Font Families

You can extend and replace default font families by customizing the `font-families` setting in your theme configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    font-families: (
      // default
      sans: sans-serif,
      serif: serif,
      mono: monospace,

      // custom
      helvetica: ("Helvetica Now Display", system-ui, sans-serif),
    ),
  )
)
```

```css
/* styles.css */
.font-sans {font-family: sans-serif;}
.font-serif {font-family: serif;}
.font-mono {font-family: monospace;}
.font-helvetica {font-family: "Helvetica Now Display", system-ui, sans-serif;}
```

---

## Font Sizes

Font size properties can be applied using the `font-<size>` utility. By default, there are 16 font families available.

<div class="radius-md overflow-hidden bg-black text-white">
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-2xs">
    2xs text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">10px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">0.625rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-xs">
    xs text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">12px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">0.75rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-sm">
    sm text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">14px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">0.875rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-md">
    md text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">16px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">1rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-lg">
    lg text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">18px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">1.125rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-xl">
    xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">20px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">1.25rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-2xl">
    2xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">24px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">1.5rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-3xl">
    3xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">28px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">1.75rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-4xl">
    4xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">32px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">2rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 transition-100 last.mb-0 font-500 font-5xl">
    5xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">36px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">2.25rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 last.mb-0 font-500 font-6xl">
    6xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">40px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">2.5rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 last.mb-0 font-500 font-7xl">
    7xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">48px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">3rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 last.mb-0 font-500 font-8xl">
    8xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">56px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">3.5rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 last.mb-0 font-500 font-9xl">
    9xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">64px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">4rem</div>
    </div>
  </div>
  <div class="flex align-items-center justify-content-between px-20 py-24 border-b-1 border-gray-900 hover.bg-gray-900 last.mb-0 font-500 font-10xl">
    10xl text
    <div class="flex align-items-center font-xs">
      <div class="w-48 align-right select-all">72px</div>
      <div class="w-56 align-right opacity-60 ml-18 select-all">4.5rem</div>
    </div>
  </div>
</div>

```html
<div class="font-2xs ...">2xs text</div>
<div class="font-xs ...">xs text</div>
<div class="font-sm ...">sm text</div>
<div class="font-md ...">md text</div>
<div class="font-base ...">base text</div>
<div class="font-lg ...">lg text</div>
<div class="font-xl ...">xl text</div>
<div class="font-2xl ...">2xl text</div>
<div class="font-3xl ...">3xl text</div>
<div class="font-4xl ...">4xl text</div>
<div class="font-5xl ...">5xl text</div>
<div class="font-6xl ...">6xl text</div>
<div class="font-7xl ...">7xl text</div>
<div class="font-8xl ...">8xl text</div>
<div class="font-9xl ...">9xl text</div>
<div class="font-10xl ...">10xl text</div>
```

---

## Customizing Font Sizes

You can extend and replace default font sizes by customizing the `font-sizes` setting in your theme configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    font-sizes: (
      custom-heading: 8rem,
    ),
  )
)
```

```css
/* styles.css */
font-custom-heading {font-size: 8rem;}

font-2xs {font-size: 0.625rem;}
font-xs {font-size: 0.75rem;}
font-sm {font-size: 0.875rem;}
...
```

---

## Line Height

Line height properties can be applied using the `leading-<size>` utility. By default, there are 17 line-heights available.

<div class="grid grid-cols-1 gap-36 bg-black radius-md p-20 py-48">
  <div class="leading-0 text-white">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis velit ipsum, commodo feugiat felis condimentum nec.
  </div>
  <div class="leading-8 text-white">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis velit ipsum, commodo feugiat felis condimentum nec.
  </div>
</div>

```html
<div class="leading-0 ...">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis velit ipsum, commodo feugiat felis condimentum nec.
</div>
<div class="leading-8 ...">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis velit ipsum, commodo feugiat felis condimentum nec.
</div>
```

---

## Customizing Line Height

You can extend and override the default variants by passing key value pairs to the `leadings` setting in your theme configuration. By default there are 17 variants to choose from.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    leadings: (
      tightest: 1,
      tighter: 1.25,
      tight: 1.5,
      base: 1.75,
      loose: 2,
      looser: 2.25,
      loosest: 2.5,

      0: 1,
      1: 1.1,
      2: 1.2,
      3: 1.3,
      4: 1.4,
      5: 1.5,
      6: 1.6,
      7: 1.7,
      8: 1.8,
      9: 1.9
    ),
  )
)
```

---


## Letter Spacing

Letter spacing properties can be applied using the `tracking-<size>` utility. By default, there are 26 letter-spacings available.

<div class="grid grid-cols-1 gap-36 bg-black align-center radius-md p-20 py-48">
  <div class="tracking-8 font-3xl text-white">
    Lorem ipsum
  </div>
  <div class="tracking-tight font-3xl text-white">
    Lorem ipsum
  </div>
</div>

```html
<div class="tracking-8 ...">
  Lorem ipsum
</div>
<div class="tracking-tight ...">
  Lorem ipsum
</div>
```

---

## Customizing Letter Spacing

You can extend and override the default variants by passing key value pairs to the `trackings` setting in your theme configuration. By default there are 26 variants to choose from.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    trackings: (
      tightest: -0.75em,
      tighter: -0.05em,
      tight: -0.025em,
      base: 0,
      loose: 0.025em,
      looser: 0.05em,
      loosest: 0.075em,

      n9: -0.09em,
      n8: -0.08em,
      n7: -0.07em,
      n6: -0.06em,
      n5: -0.05em,
      n4: -0.04em,
      n3: -0.03em,
      n2: -0.02em,
      n1: -0.01em,
      0: 0,
      1: 0.01em,
      2: 0.02em,
      3: 0.03em,
      4: 0.04em,
      5: 0.05em,
      6: 0.06em,
      7: 0.07em,
      8: 0.08em,
      9: 0.09em,
    ),
  )
)
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables. The following typography CSS variables can be overwritten.

### Font Family CSS Variables

```css
:root {
  --font-sans: sans-serif;
  --font-serif: serif;
  --font-mono: monospace;
}
```

### Font Size CSS Variables

```css
:root {
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
  --font-base: 1rem;
  --font-md: 0.9375rem;
  --font-sm: 0.875rem;
  --font-xs: 0.75rem;
  --font-2xs: 0.625rem;
}
```

### Font Weight CSS Variables

```css
:root {
  --font-ultralight: 100;
  --font-extralight: 200;
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-ultrabold: 900;
}
```

### Leading CSS Variables

```css
:root {
  --leading-tightest: 1;
  --leading-tighter: 1.25;
  --leading-tight: 1.5;
  --leading-base: 1.75;
  --leading-loose: 2;
  --leading-looser: 2.25;
  --leading-loosest: 2.5;
  --leading-0: 1;
  --leading-1: 1.1;
  --leading-2: 1.2;
  --leading-3: 1.3;
  --leading-4: 1.4;
  --leading-5: 1.5;
  --leading-6: 1.6;
  --leading-7: 1.7;
  --leading-8: 1.8;
  --leading-9: 1.9;
}
```

### Tracking CSS Variables

```css
:root {
  --tracking-tightest: -0.75em;
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-base: 0;
  --tracking-loose: 1.025em;
  --tracking-looser: 1.05em;
  --tracking-loosest: 1.075em;
  --tracking-n9: -0.09em;
  --tracking-n8: -0.08em;
  --tracking-n7: -0.07em;
  --tracking-n6: -0.06em;
  --tracking-n5: -0.05em;
  --tracking-n4: -0.04em;
  --tracking-n3: -0.03em;
  --tracking-n2: -0.02em;
  --tracking-n1: -0.01em;
  --tracking-0: 0;
  --tracking-1: 0.01em;
  --tracking-2: 0.02em;
  --tracking-3: 0.03em;
  --tracking-4: 0.04em;
  --tracking-5: 0.05em;
  --tracking-6: 0.06em;
  --tracking-7: 0.07em;
  --tracking-8: 0.08em;
  --tracking-9: 0.09em;
}
```