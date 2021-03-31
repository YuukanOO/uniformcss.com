---
title: Naming Principles
description: How properties are named for scale and consistency.
date: 1000-01-09
---

## Naming Principles

Due to the immutable and low-level nature of utility classes, Uniform takes a careful and considered approach to how each shorthand and variants are named to ensure they are consistent and easy to remember. The following is a list of principles Uniform follows when considering how properties and its variants are named.

---

## 1. Make use of verbose values

If the property values are verbose and self explanatory, then use the value to define shorthand provided the value name does not cause any confusion or conflict with other properties.

```scss
.block {display: block;}
.ease-in-out {transition-timing-function: ease-in-out;}
.underline {color-decoration: underline;}
...
```

## 2. Truncate property names

If the property name include words that can be shortened without confusion, shorten it.

```scss
.bg-black: {background-color: black;}
.bg-white: {background-color: white;}
...
```

## 3. Remove hyphenation

If the word is hyphenated but can be elegantly combined, remove hyphenation e.g. `wordbreak` and `whitespace` instead of `word-break` and `white-space`.

```scss
.wordbreak-normal: {word-break: normal;}
.whitespace-normal: {white-space: normal;}
...
```

## 4. Single-letter shorthands

Single-characters are only reserved for directions and the `width`, `height`, `margin`, and `padding` properties e.g. `w`, `h`, `m`, `p`. For single letter properties, don't separate direction using a delimiter. For example, use `mr` for margin right instead of `m-r`.

```scss
.w-1: {width: 0.25rem;}
.p-2: {padding: 0.5rem;}

.mr-1: {margin-right 0.25rem;}
.mb-1: {margin-bottom 0.25rem;}
...
```

## 5. Single characters for directions

Common directional properties such as `top`, `right`, `bottom`, and `left` are represented with the first letter of the direction e.g. `border-t` for `border-top` etc. For more than one direction, combine the direction letters e.g. `tr` for `top-right`.

```scss
.radius-tl-sm. {border-top-left-radius: 0.25rem;}
.radius-tr-sm. {border-top-right-radius: 0.25rem;}
...
```

## 6. Simplify properties names

Simplify the property name to its most essential and ideal denominator of the word provided it does not cause confusion or conflict with others properties in the same family.

```scss
.font-700: {font-weight: 700;}
.font-xl. {font-size: 1.25rem;}
...
```

When dealing with multi-word properties such as `line-height`, simplifying it to just `height` or `line` would misrepresent the meaning and cause confusion. In this case, use a different industry term such as `leading` instead.

## 7. Append unit as characters

Over qualify the unit by appending an abbreviated characters that represent the unit only if it causes conflict without. All negative values are suffixed with `n`, (short for negative). Append units to avoid conflicts with similarly numbered variants.


```scss
50p: 50%,
n50p: -50%,
100p: 100%,   // p for percent
n100p: -100%,

100vw: 100vw, // vw for viewport width
100vh: 100vh, // vw for viewport width
...
```

## 8. Consistent property scales

Pixel based variants follow the standard sizing scale `1`, `2`, `3...` pattern. General sizing follow the `xs`, `sm`, `md`, `lg`, `xl` pattern. Custom scales such as line-height follow numerical `1`, `2`, `3` pattern provided it does not cause conflicts with standard sizing.

```scss
// Pixel based scaling
1: 1px,
2: 2px,
3: 3px,
4: 4px,
...
```

```scss
// XY based scaling
...
4xl: rem(32),
3xl: rem(28),
2xl: rem(24),
xl: rem(20),
lg: rem(18),
md: rem(15),
sm: rem(14),
xs: rem(12),
2xs: rem(10),
...
```

```scss
// Custom scaling
0: 1,
1: 1.1,
2: 1.2,
3: 1.3,
4: 1.4,
...
```