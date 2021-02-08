---
title: Table
description: Everything to know about the Table module
date: 1000-01-03
---

## About Table Module

The Table module is an optional pre-built component that provides customizable styling for tables. This module also provides tables with the ability to be responsive.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Table Module

To apply table styling, assign the class `table` to your table element.

<div class="bg-silver-200 radius-md p-20 align-center">
  <table class="table">
    <thead>
      <tr>
        <th>Column A</th>
        <th>Column B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  <thead>
    <tr>
      <th>Column A</th>
      <th>Column B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
```

---

## Customizing Table

The following CSS variable hooks are available to customize.

<div class="bg-black radius-sm overflow-auto">
{% highlight css %}
/* styles.css */
:root {
  --table-radius: ...;
  --table-shadow: ...;
  --table-bg: ...;

  --table-th-height: ...;
  --table-th-padding: ...;
  --table-th-bg: ...;

  --table-td-height: ...;
  --table-td-padding: ...;
  --table-td-border: ...;
}
{% endhighlight %}
</div>

---

## Responsive Tables

Tables can become responsive at various breakpoints by adding the `table-stack` and `table-unstack` classes. You can also add the `data-table-label` attribute to allow for labels when table columns are stacked.

<div class="bg-silver-200 radius-md p-20 align-center">
  <table class="table table-stack md.table-unstack">
    <thead>
      <tr>
        <th>Column A</th>
        <th>Column B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Resize your browser</td>
        <td data-table-label="Column B">Resize your browser</td>
      </tr>
      <tr>
        <td data-table-label="Column A">Resize your browser</td>
        <td data-table-label="Column B">Resize your browser</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-stack md.table-unstack">
  <thead>
    <tr>
      <th>Column A</th>
      <th>Column B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Resize your browser</td>
      <td data-table-label="Column B">Resize your browser</td>
    </tr>
    <tr>
      <td data-table-label="Column A">Resize your browser</td>
      <td data-table-label="Column B">Resize your browser</td>
    </tr>
  </tbody>
</table>
```

---

## Customizing Responsive Table

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --table-stack-margin: ...;

  --table-label-margin: ...;
  --table-label-font-size: ...;
  --table-label-font-weight: ...;
  --table-label-text-transform: ...;
  --table-label-tracking: ...;
  --table-label-color: ...;
}
```

---

## Alternating Tables

Table rows can also feature alternating rows with the `table-alt` class.

<div class="bg-silver-200 radius-md p-20 align-center">
  <table class="table table-alt">
    <thead>
      <tr>
        <th>Column A</th>
        <th>Column B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-alt">
  <thead>
    <tr>
      <th>Column A</th>
      <th>Column B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
```

---

## Customizing Table

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --table-alt-bg: ...;
}
```
---

## How to Disable this Module

By default, all modules are enabled. To disable this table module, pass `module-table` to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      module-table
    )
  )
);
```
