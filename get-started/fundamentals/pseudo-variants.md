---
title: Pseudo Variants
date: 1000-01-04
---


### Pseudo Interactions

Pseudo interactions such as hover and focus can be achieved by appending the pseudo variant to the beginning of your class name e.g. `<pseudo>.keyword-variant`.

<section class="radius-sm bg-silver-200 p-6">
  <div class="bg-black hover.bg-red transition transition-200 cursor-pointer text-white align-center py-8">
    Hover on me
  </div>
</section>

```html
<div class="bg-black hover.bg-red">
	Hover on me
</div>
```

---

### Pseudo Variant Chart

The following pseudo interactions are available to be activated for each property.

<table class="table">
  <thead class="uppercase font-xs font-600 tracking-1 text-black">
    <tr>
      <th>
        Variant
      </th>
      <th>
        Value
      </th>
    </tr>
  </thead>
  <tbody class="font-sm">
    <tr>
      <td><code class="color-teal-500">first</code></td>
      <td><code class="text-gray-600">:first-child</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">last</code></td>
      <td><code class="text-gray-600">:last-child</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">last-type</code></td>
      <td><code class="text-gray-600">:last-of-type</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">odd</code></td>
      <td><code class="text-gray-600">:nth-child(odd)</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">even</code></td>
      <td><code class="text-gray-600">:nth-child(even)</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">hover</code></td>
      <td><code class="text-gray-600">:hover</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">focus</code></td>
      <td><code class="text-gray-600">:focus</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">active</code></td>
      <td><code class="text-gray-600">:active</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">visited</code></td>
      <td><code class="text-gray-600">:visited</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">disabled</code></td>
      <td><code class="text-gray-600">:disabled</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">checked</code></td>
      <td><code class="text-gray-600">:checked</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">empty</code></td>
      <td><code class="text-gray-600">:empty</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">focus-within</code></td>
      <td><code class="text-gray-600">:focus-within</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">group-hover</code></td>
      <td><code class="text-gray-600">.group:hover </code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">group-focus</code></td>
      <td><code class="text-gray-600">.group:focus</code></td>
    </tr>
    <tr>
      <td><code class="color-teal-500">dark</code></td>
      <td><code class="text-gray-600">.dark</code></td>
    </tr>
  </tbody>
</table>

---

#### First Child

The `first.<property>` allows you to apply a utility to the first child.

<section class="radius-sm bg-silver-100 p-6">
  <div class="bg-blue text-white p-2 mb-4 align-center">
    Item A
  </div>
  <div class="bg-silver-400 text-white p-2 mb-4 align-center">
    Item B
  </div>
  <div class="bg-silver-400 text-white p-2 align-center">
    Item C
  </div>
</section>

```html
<div class="bg-silver-400 first.bg-blue">
	Item A
</div>
<div class="bg-silver-400 first.bg-blue">
	Item B
</div>
<div class="bg-silver-400 first.bg-blue">
	Item C
</div>
```

---

#### Last Child

The `last.<property>` allows you to apply a utility to the last child.

<section class="radius-sm bg-silver-100 p-6">
  <div class="bg-silver-400 text-white p-2 mb-4 align-center">
    Item A
  </div>
  <div class="bg-silver-400 text-white p-2 mb-4 align-center">
    Item B
  </div>
  <div class="bg-blue text-white p-2 align-center">
    Item C
  </div>
</section>

```html
<div class="bg-silver-400 last.bg-blue">
	Item A
</div>
<div class="bg-silver-400 last.bg-blue">
	Item B
</div>
<div class="bg-silver-400 last.bg-blue">
	Item C
</div>
```

---

#### First of Type

The `first-type.<property>` allows you to apply a utility to the first of type.

<section class="radius-sm bg-silver-100 p-6">
  <div class="bg-blue text-white p-2 mb-4 align-center">
    Item A
  </div>
  <div class="bg-silver-400 text-white p-2 mb-4 align-center">
    Item B
  </div>
  <div class="bg-silver-400 text-white p-2 align-center">
    Item C
  </div>
</section>

```html
<div class="bg-silver-400 first-type.bg-blue">
	Item A
</div>
<div class="bg-silver-400 first-type.bg-blue">
	Item B
</div>
<div class="bg-silver-400 first-type.bg-blue">
	Item C
</div>
```

---

#### Last of Type

The `last-type.<property>` allows you to apply a utility to the last of type.

<section class="radius-sm bg-silver-100 p-6">
  <div class="bg-silver-400 text-white p-2 mb-4 align-center">
    Item A
  </div>
  <div class="bg-silver-400 text-white p-2 mb-4 align-center">
    Item B
  </div>
  <div class="bg-blue text-white p-2 align-center">
    Item C
  </div>
</section>

```html
<div class="bg-silver-400 last-type.bg-blue">
	Item A
</div>
<div class="bg-silver-400 last-type.bg-blue">
	Item B
</div>
<div class="bg-silver-400 last-type.bg-blue">
	Item C
</div>
```

---

#### Odd Child

The `odd.<property>` allows you to apply a utility to the odd child.

<section class="radius-sm bg-silver-100 p-6">
  <div class="bg-blue text-white p-2 mb-4 align-center">
    Item A
  </div>
  <div class="bg-silver-400 text-white p-2 mb-4 align-center">
    Item B
  </div>
  <div class="bg-blue text-white p-2 align-center">
    Item C
  </div>
</section>

```html
<div class="bg-silver-400 odd.bg-blue">
	Item A
</div>
<div class="bg-silver-400 odd.bg-blue">
	Item B
</div>
<div class="bg-silver-400 odd.bg-blue">
	Item C
</div>
```

---

#### Even Child

The `even.<property>` allows you to apply a utility to the even child.

<section class="radius-sm bg-silver-100 p-6">
  <div class="bg-silver-400 text-white p-2 mb-4 align-center">
    Item A
  </div>
  <div class="bg-blue text-white p-2 mb-4 align-center">
    Item B
  </div>
  <div class="bg-silver-400 text-white p-2 align-center">
    Item C
  </div>
</section>

```html
<div class="bg-silver-400 even.bg-blue">
	Item A
</div>
<div class="bg-silver-400 even.bg-blue">
	Item B
</div>
<div class="bg-silver-400 even.bg-blue">
	Item C
</div>
```

---

#### Hover

The `hover.<property>` allows you to apply a utility on hover.

<section class="radius-sm bg-silver-100 p-6">
  <div class="bg-silver-400 hover.bg-blue text-white p-2 align-center">
    Hover
  </div>
</section>

```html
<div class="bg-silver-400 hover.bg-blue">
	Hover
</div>
```

---

#### Active

The `active.<property>` allows you to apply a utility on active.

<section class="radius-sm bg-silver-100 p-6">
  <div class="bg-silver-400 active.bg-blue text-white p-2 align-center">
    Press
  </div>
</section>

```html
<div class="bg-silver-400 active.bg-blue">
	Press
</div>
```

---

#### Visited

The `visited.<property>` allows you to apply a utility on visited.

<section class="radius-sm bg-silver-100 p-6">
  <a href="#" class="text-blue underline mr-4">Normal Link</a>
  <a href="#" class="text-purple underline">Visited Link</a>
</section>

```html
<a href="#" class="text-blue visited.text-purple-600">Normal Link</a>
<a href="#" class="text-blue visited.text-purple-600">Visited Link</a>
```

---

#### Focus

The `focus.<property>` allows you to apply a utility on focus.

<section class="radius-sm bg-silver-100 p-6">
  <input value="Focus" class="w-100p p-4 focus.bg-blue focus.text-white">
</section>

```html
<input value="Focus" class="focus.bg-blue" />
```

---

#### Disabled

The `focus.<property>` allows you to apply a utility on focus.

<section class="radius-sm bg-silver-100 p-6">
  <input value="Focus" class="w-100p p-4" disabled>
</section>

```html
<input value="Focus" class="disabled.bg-silver-400" disabled />
```

---

#### Empty

The `empty.<property>` allows you to apply a utility on empty.

<section class="radius-sm bg-silver-100 p-6">
  <div class="h-10 bg-blue"></div>
</section>

```html
<div class="bg-silver-400 empty.bg-blue"></div>
```

---

#### Focus Within

The `focus-within.<property>` allows you to apply a utility on focus-within.

<section class="radius-sm bg-silver-100 p-6">
  <form class="bg-white border-b-2px focus-within.border-blue">
    <input placeholder="Focus" class="w-100p outline-0 p-4">
  </form>
</section>

```html
<form class="bg-white border-b-2px focus-within.border-blue">
  <input placeholder="Focus" />
</form>
```

---

#### Group Hover

The `group-hover.<property>` allows you to apply properties when the parent container is hovered. You must assign the parent container with a `group` class.

<section class="radius-sm bg-silver-100 p-6">
  <div class="group bg-white align-center">
    <div class="flex-grow align-center py-4">
      Hover
    </div>
    <div class="flex-grow align-center py-4 group-hover.bg-blue">
      Group Hover
    </div>
    <div class="flex-grow align-center py-4">
      Hover
    </div>
  </div>
</section>

```html
<div class="group">
  <div>
    Hover
  </div>
  <div class="group-hover.bg-silver-100">
    Group Hover
  </div>
  <div>
    Hover
  </div>
</div>
```

---

#### Group Focus

The `group-focus.<property>` operates in the same way as `group-hover` but allows you to apply properties when the parent container is in focus. You must assign the parent container with a `group` class.

---

### Enabling Pseudos

In order to maintain a reasonable file-size, Uniform by default only enables pseudo variants for a subset of CSS properties.

You can enable a pseudo variants by passing in preferred pseudos to the  `pseudos` key to each property of your configuration.

```scss
@use "uniform" as * with (
  $config: (
    utilities: (
      background-color: (
      	pseudos: (active, focus, group-hover)
      ),
      border-color: (
      	pseudos: (focus-within)
      ),
      color: (
        responsive: true,
        pseudos: (focus)
      ),
    )
  )
);
```

---

### Pseudo Delimiter

By default, Uniform uses the `.` character to separate the breakpoints and pseudos from the property. You can override the default breakpoint delimiter by defining `pseudo-delimiter` in your configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    pseudo-delimiter: '\\:',
  )
);
```

```css
/* styles.css */
.hover\:bg-red:hover { ... }
.hover\:bg-blue:hover { ... }
...
```

---

### Extending Pseudos

You can extend pseudos by passing in key value pairs to the `pseudos` key in your configuration variable.

```scss
@use "uniform" as * with (
  $config: (
    pseudos: (
      nth4: 'nth-child(4)',
      nth5n: 'nth-child(5n)',
    )
  )
);
```

```css
/* styles.css */
.nth4\:bg-red:nth-child(4) { ... }
.nth5n\:bg-red:nth-child(5n) { ... }
...
```
