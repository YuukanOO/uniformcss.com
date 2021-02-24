---
title: Pseudo Variants
description: Learn how classes can change based on pseudo interaction.
date: 1000-01-04
---

## Pseudo Interactions

Pseudos allow for utility properties to be conditionally applied based on user interaction. These include interactions such as `hover`, `focus`, and etc.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Pseudo Interactions

Pseudo interactions such as hover can be achieved by appending the pseudo variant to the beginning of your class name e.g. `<pseudo>.shorthand-variant`.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <button class="p-12 px-18 bg-blue hover.bg-shade-200 transition-100 cursor-pointer bold color-white radius-sm">
    Hover on me
  </button>
</section>

```html
<button class="bg-blue hover.bg-shade-200">Hover on me</button>
```

---

## Pseudo Variant Chart

The following pseudo interactions are available to be activated for each property.

<div class="h-384 overflow-auto shadow-md radius-lg">
<table class="table table-alt shadow-0">
  <thead>
    <tr>
      <th class="sticky t-0">
        Variant
      </th>
      <th class="sticky t-0">
        Value
      </th>
    </tr>
  </thead>
  <tbody class="font-sm">
    <tr>
      <td><code class="color-teal color-shade-200">first</code></td>
      <td><code class="color-gray-600">:first-child</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">last</code></td>
      <td><code class="color-gray-600">:last-child</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">last-type</code></td>
      <td><code class="color-gray-600">:last-of-type</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">odd</code></td>
      <td><code class="color-gray-600">:nth-child(odd)</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">even</code></td>
      <td><code class="color-gray-600">:nth-child(even)</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">hover</code></td>
      <td><code class="color-gray-600">:hover</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">focus</code></td>
      <td><code class="color-gray-600">:focus</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">active</code></td>
      <td><code class="color-gray-600">:active</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">visited</code></td>
      <td><code class="color-gray-600">:visited</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">disabled</code></td>
      <td><code class="color-gray-600">:disabled</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">checked</code></td>
      <td><code class="color-gray-600">:checked</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">empty</code></td>
      <td><code class="color-gray-600">:empty</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">focus-within</code></td>
      <td><code class="color-gray-600">:focus-within</code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">group-hover</code></td>
      <td><code class="color-gray-600">.group:hover </code></td>
    </tr>
    <tr>
      <td><code class="color-teal color-shade-200">group-focus</code></td>
      <td><code class="color-gray-600">.group:focus</code></td>
    </tr>
  </tbody>
</table>
</div>

---

## Enabling Pseudos

By default, only a subset of properties have pseudo variants enabled. To see which pseudos are enabled, please refer to the glossary. You can enable pseudo variants by passing preferred pseudos to the `pseudos` map for each property in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    utility: (
      background-color: (
      	pseudos: (hover, active, focus, group-hover)
      ),
      border-color: (
      	pseudos: (focus-within)
      ),
      color: (
        pseudos: (focus)
      ),
    )
  )
);
```

---

## Pseudo Delimiter

By default, Uniform uses the `.` character to separate the breakpoints and pseudos from the property. You can override the default breakpoint delimiter by defining `pseudo-delimiter` in your configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    pseudo-delimiter: ':',
  )
);
```

```css
/* styles.css */
.hover\:bg-red:hover { ... }
.hover\:bg-orange:hover { ... }
...
```

---

## Extending Pseudos

You can extend the available set of pseudos by passing in key value pairs to the `pseudos` key in your configuration variable.

```scss
@use "uniform" as * with (
  $config: (
    pseudos: (
      nth4: 'nth-child(4)',
      nth5n: 'nth-child(5n)',
    ),
    utility: (
      background-color: (
        pseudos: (nth4, nth5n)
      )
    )
  )
);
```

```css
/* styles.css */
.nth4\:bg-red:nth-child(4),
.nth5n\:bg-red:nth-child(5n) { 
  ... 
}
```

---

### First Child

The `first.<property>` allows you to apply a utility to the first child.

<section class="bg-blue bg-shade-900 p-20 radius-md">
  <div class="bg-blue bg-opacity-100 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    1
  </div>
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    2
  </div>
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 align-center radius-sm">
    3
  </div>
</section>

```html
<div class="opacity-30 first.opacity-100">1</div>
<div class="opacity-30 first.opacity-100">2</div>
<div class="opacity-30 first.opacity-100">3</div>
```

---

### Last Child

The `last.<property>` allows you to apply a utility to the last child.

<section class="bg-blue bg-shade-900 p-20 radius-md">
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    1
  </div>
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    2
  </div>
  <div class="bg-blue bg-opacity-100 color-white bold font-lg p-14 align-center radius-sm">
    3
  </div>
</section>

```html
<div class="opacity-30 last.opacity-100">1</div>
<div class="opacity-30 last.opacity-100">2</div>
<div class="opacity-30 last.opacity-100">3</div>
```

---

### First of Type

The `first-type.<property>` allows you to apply a utility to the first of type.

<section class="bg-blue bg-shade-900 p-20 radius-md">
  <div class="bg-blue bg-opacity-100 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    1
  </div>
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    2
  </div>
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 align-center radius-sm">
    3
  </div>
</section>

```html
<div class="opacity-30 first-type.opacity-100">1</div>
<div class="opacity-30 first-type.opacity-100">2</div>
<div class="opacity-30 first-type.opacity-100">3</div>
```

---

### Last of Type

The `last-type.<property>` allows you to apply a utility to the last of type.

<section class="bg-blue bg-shade-900 p-20 radius-md">
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    1
  </div>
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    2
  </div>
  <div class="bg-blue bg-opacity-100 color-white bold font-lg p-14 align-center radius-sm">
    3
  </div>
</section>

```html
<div class="opacity-30 last-type.opacity-100">1</div>
<div class="opacity-30 last-type.opacity-100">2</div>
<div class="opacity-30 last-type.opacity-100">3</div>
```

---

### Odd Child

The `odd.<property>` allows you to apply a utility to the odd child.

<section class="bg-blue bg-shade-900 p-20 radius-md">
  <div class="bg-blue bg-opacity-100 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    1
  </div>
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    2
  </div>
  <div class="bg-blue bg-opacity-100 color-white bold font-lg p-14 align-center radius-sm">
    3
  </div>
</section>

```html
<div class="opacity-30 odd.opacity-100">1</div>
<div class="opacity-30 odd.opacity-100">2</div>
<div class="opacity-30 odd.opacity-100">3</div>
```

---

### Even Child

The `even.<property>` allows you to apply a utility to the even child.

<section class="bg-blue bg-shade-900 p-20 radius-md">
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    1
  </div>
  <div class="bg-blue bg-opacity-100 color-white bold font-lg p-14 mb-12 align-center radius-sm">
    2
  </div>
  <div class="bg-blue opacity-30 color-white bold font-lg p-14 align-center radius-sm">
    3
  </div>
</section>

```html
<div class="opacity-30 even.opacity-100">1</div>
<div class="opacity-30 even.opacity-100">2</div>
<div class="opacity-30 even.opacity-100">3</div>
```

---

### Hover

The `hover.<property>` allows you to apply a utility on hover.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <button class="p-12 px-18 bg-blue hover.bg-shade-200 transition-100 cursor-pointer bold color-white radius-sm">
    Hover on me
  </button>
</section>

```html
<button class="bg-blue hover.bg-shade-200">Hover on me</button>
```

---

### Active

The `active.<property>` allows you to apply a utility on active.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <button class="p-12 px-18 bg-blue active.bg-shade-200 focus.outline-0 transition-100 cursor-pointer bold color-white radius-sm">
    Click me
  </button>
</section>

```html
<button class="bg-blue active.bg-shade-200">Click me</button>
```

---

### Visited

The `visited.<property>` allows you to apply a utility on visited.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <a href="#" class="color-blue hover.color-blue underline mr-14">Normal Link</a>
  <a href="#" class="color-purple hover.color-purple underline">Visited Link</a>
</section>

```html
<a href="#" class="color-blue visited.color-blue">Normal Link</a>
<a href="#" class="color-blue visited.color-purple">Visited Link</a>
```

---

### Focus

The `focus.<property>` allows you to apply a utility on focus.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <input value="Focus" class="p-12 opacity-50 focus.opacity-100 focus.outline-0 bold font-lg">
</section>

```html
<input value="Focus" class="opacity-50 focus.opacity-100" />
```

---

### Disabled

The `disabled.<property>` allows you to apply a utility on disabled.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <input value="Disabled" class="bg-white p-12 opacity-100 disabled.opacity-50 bold font-lg" disabled>
</section>

```html
<input value="Disabled" class="opacity-100 disabled.opacity-50" disabled />
```

---

### Empty

The `empty.<property>` allows you to apply a utility on empty.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <div class="w-64 h-64 radius-sm bg-blue empty.bg-mint"></div>
</section>

```html
<div class="w-64 h-64 bg-blue empty.bg-mint"></div>
```

---

### Focus Within

The `focus-within.<property>` allows you to apply a utility on focus-within.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <form class="relative shadow-xs bg-black border-b-2 border-gray focus-within.border-blue">
    <input placeholder="Focus on me" class="bg-black p-12 bold font-lg outline-0">
  </form>
</section>

```html
<form class="bg-black border-b-2 border-gray focus-within.border-blue">
  <input placeholder="Focus on me" />
</form>
```

---

### Group Hover

The `group-hover.<property>` allows you to apply properties when the parent container is hovered. You must assign the parent container with a `group` class.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <a class="group bg-white color-black hover.bg-blue hover.bg-shade-600 transition-200 block p-20 radius-sm">
    <h3 class="group-hover.color-mint transition-200 mb-4">Group Hover</h3>
    <p class="group-hover.color-white transition-200">Hover on this card to see change</p>
  </a>
</section>

```html
<a class="group bg-white color-black hover.bg-blue hover.bg-shade-600 transition-200 block p-20 radius-sm">
  <h3 class="group-hover.color-mint transition-200 mb-4">Group Hover</h3>
  <p class="group-hover.color-white transition-200">Hover on this card to see change</p>
</a>
```

---

### Group Focus

The `group-focus.<property>` operates in the same way as `group-hover` but allows you to apply properties when the parent container is in focus. You must assign the parent container with a `group` class.

<section class="flex align-items-center justify-content-center bg-blue bg-shade-900 p-20 h-192 radius-md">
  <button class="group flex align-items-center p-12 px-18 bg-blue focus.bg-shade-600 focus.outline-0 transition-200 cursor-pointer bold color-white radius-sm">
    <svg clads="fill-current transition-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="currentColor" class="w-24 h-24 group-focus.color-magenta mr-16"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    Focus on me
  </button>
</section>

```html
<button class="group color-white bg-blue focus.bg-shade-600">
  <svg class="group-focus:color-cyan"></svg> Button
</button>
```
