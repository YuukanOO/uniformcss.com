---
title: Modules
description: A quick introduction into built-in modules.
date: 1000-01-07
---

## What are Modules?

Modules in Uniform are pre-built components for common UI elements such as buttons, forms, and tables. Uniform provides these modules to help avoid having to build these types of components from scratch.

Out of the box, Uniform includes modules for **buttons**, **responsive tables**, **form elements**, **markdown**, and **wrappers**.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Button Module

The button module come in various types and supports multiple sizes. To learn more about using this module visit the dedicated modules page on <a class="hover.underline" href="/get-started/button/">buttons</a>.

<section class="flex align-items-center justify-content-center h-192 bg-silver-200 p-20 radius-md">
  <button class="btn">Button</button>
</section>

```html
<button class="btn">Button</button>
```

---

## Form Module

The form module provides styling for basic form elements. To learn more about using this module visit the dedicated modules page on <a class="hover.underline" href="/get-started/form/">form</a>.

<section class="radius-sm bg-silver-200 p-20">
  <form>
    <div class="mb-20 last.mb-0">
      <label class="label mb-6">Email</label>
      <input class="input" placeholder="Email" value="john.titor@apple.com">
    </div>
    <div class="mb-20 last.mb-0">
      <label class="label mb-6">Username</label>
      <input class="input" type="text" placeholder="UniformCSS" value="@UniformCSS">
    </div>
    <div class="mb-20 last.mb-0">
      <label class="checkbox">
        <input type="checkbox" checked required />
        <div class="checkbox__checkmark"></div>
        Checkbox
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <label class="radio mr-4">
        <input type="radio" name="radio" checked />
        <div class="radio__checkmark"></div>
        Radio
      </label>
      <label class="radio">
        <input type="radio" name="radio" checked />
        <div class="radio__checkmark"></div>
        Radio
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <label class="toggle">
        <input type="checkbox" checked />
        <div class="toggle__switch"></div>
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <div class="select">
        <select>
          <option selected>Selected</option>
          <option>Option</option>
          <option>Option</option>
        </select>
        <div class="select__angle"></div>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="mb-20 last.mb-0">
    <label class="label mb-6">Email</label>
    <input class="input" placeholder="Email" value="john.titor@apple.com" />
  </div>

  <div class="mb-20 last.mb-0">
    <label class="label mb-6">Username</label>
    <input class="input" type="text" placeholder="UniformCSS" value="@UniformCSS" />
  </div>

  <div class="mb-20 last.mb-0">
    <label class="checkbox">
      <input type="checkbox" checked required />
      <div class="checkbox__checkmark"></div>
      Checkbox
    </label>
  </div>

  <div class="mb-20 last.mb-0">
    <label class="radio mr-4">
      <input type="radio" name="radio" checked />
      <div class="radio__checkmark"></div>
      Radio
    </label>
    <label class="radio">
      <input type="radio" name="radio" checked />
      <div class="radio__checkmark"></div>
      Radio
    </label>
  </div>

  <div class="mb-20 last.mb-0">
    <label class="toggle">
      <input type="checkbox" checked />
      <div class="toggle__switch"></div>
    </label>
  </div>

  <div class="mb-6 last.mb-0">
    <div class="select">
      <select>
        <option selected>Selected</option>
        <option>Option</option>
        <option>Option</option>
      </select>
      <div class="select__angle"></div>
    </div>
  </div>
</form>
```

---

## Table Module

The table module provides styling for the basic table element. To learn more about using this module visit the dedicated modules page on <a class="hover.underline" href="/get-started/table/">table</a>.

<section class="radius-sm bg-silver-200 p-20">
  <table class="table table-stack sm.table-unstack">
    <thead>
      <tr>
        <th>Column A</th>
        <th>Column B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-table-label="Column A">1</td>
        <td data-table-label="Column B">2</td>
      </tr>
      <tr>
        <td data-table-label="Column A">1</td>
        <td data-table-label="Column B">2</td>
      </tr>
    </tbody>
  </table>
</section>

```html
<table class="table table-stack sm.table-unstack">
  <thead>
    <tr>
      <th>Column A</th>
      <th>Column B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-table-label="Column A">1</td>
      <td data-table-label="Column B">2</td>
    </tr>
    <tr>
      <td data-table-label="Column A">1</td>
      <td data-table-label="Column B">2</td>
    </tr>
  </tbody>
</table>
```

---

## Markdown Module

The markdown module provides basic typographical styling useful for markdown styling. To learn more about using this module visit the dedicated modules page on <a class="hover.underline" href="/get-started/markdown/">markdown</a>.

```html
<div class="markdown">...</div>
```

---

## Wrapper Module

The wrapper module is a container that provides set of `max-width` properties based on various breakpoints. To learn more about using this module visit the dedicated modules page on <a class="hover.underline" href="/get-started/wrapper/">wrapper</a>.

```html
<div class="wrapper">...</div>
```

---

## Disabling Modules

By default, Uniform CSS comes with all modules enabled. To exclude all or individual modules, include its name in the exclude key inside your configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    exclude: (
      module-button,
      module-form,
      module-table,
      module-wrapper,
      module-markdown,
    )
  )
);
```
