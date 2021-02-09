---
title: Markdown
description: Everything to know about the Markdown module
date: 1000-01-01
---

## About Markdown Module

The markdown module applies styling to basic typography element such as headings and bullet lists. This module can be particularly useful for styling markdown body content.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

To activate this module, apply the class `markdown` to any text body container. Typography elements inside this container will be formatted.

<div class="bg-white border-1 border-silver-400 radius-md p-20 markdown">
  <h3>H3 Heading</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis, nibh et fringilla pretium, mi quam vestibulum sapien, auctor rhoncus lacus leo eu velit. Nulla facilisi. Nunc dictum erat sed justo ornare, in pretium orci rhoncus.</p>
</div>

```html
<article class="markdown">
  <h3>H3 Heading</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis, nibh et fringilla pretium, mi quam vestibulum sapien, auctor rhoncus lacus leo eu velit. Nulla facilisi. Nunc dictum erat sed justo ornare, in pretium orci rhoncus.</p>
</article>
```

---

## Headings

The markdown module supports up to `h4` level of heading styles.

<div class="bg-white border-1 border-silver-400 radius-md p-20 markdown">
  <h1>H1 Heading</h1>
  <h2>H2 Heading</h2>
  <h3>H3 Heading</h3>
  <h4>H4 Heading</h4>
</div>

```html
<article class="markdown">
  <h1>H1 Heading</h1>
  <h2>H2 Heading</h2>
  <h3>H3 Heading</h3>
  <h4>H4 Heading</h4>
</article>
```

---

## Lists

The markdown module supports both ordered and unordered lists.

<div class="bg-white border-1 border-silver-400 radius-md p-20 markdown">
  <ol>
    <li>First ordered list item</li>
    <li>Another item</li>
    <li>Third item</li>
  </ol>

  <ul>
    <li>Fruit
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
      </ul>
    </li>
    <li>Dairy
      <ul>
        <li>Milk</li>
        <li>Cheese</li>
      </ul>
    </li>
  </ul>
</div>

```html
<article class="markdown">
  <ol>
    <li>First ordered list item</li>
    <li>Another item</li>
    <li>Third item</li>
  </ol>

  <ul>
    <li>Fruit
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
      </ul>
    </li>
    <li>Dairy
      <ul>
        <li>Milk</li>
        <li>Cheese</li>
      </ul>
    </li>
  </ul>
</article>
```

---

## Links and Emphasis

The markdown module supports all standard link and text highlight styling.

<div class="bg-white border-1 border-silver-400 radius-md p-20 markdown">
  <p>
    <strong>Lorem ipsum</strong> <em>dolor</em> sit amet, consectetur adipiscing elit. <a href="http://a.com">Inline Links</a>
  </p>
</div>

```html
<article class="markdown">
  <p>
    <strong>Lorem ipsum</strong> <em>dolor</em> sit amet, consectetur adipiscing elit. <a href="http://a.com">Inline Links</a>
  </p>
</article>
```

---

## Blockquotes

The markdown module supports all standard link and text highlight styling.

<div class="bg-white border-1 border-silver-400 radius-md p-20 markdown">
  <blockquote>
    <p>This is a standard block quote.</p>
  </blockquote>
</div>

```html
<article class="markdown">
  <blockquote>
    <p>This is a standard block quote.</p>
  </blockquote>
</article>
```

---

## Code

The markdown module supports all standard code styling.

<div class="bg-white border-1 border-silver-400 radius-md p-20 markdown">
  <p>When <code>x = 3</code>, that means <code>x + 2 = 5</code></p>
</div>

```html
<article class="markdown">
  <p>When <code>x = 3</code>, that means <code>x + 2 = 5</code></p>
</article>
```

---

## How to Disable this Module

By default, all modules are enabled. To disable this button module, pass `module-markdown` to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      module-markdown
    )
  )
);
```
