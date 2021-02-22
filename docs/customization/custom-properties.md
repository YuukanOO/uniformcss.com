---
title: Custom Properties
description: Generating your own custom properties.
date: 1000-01-07
---

## Custom Properties

The `utilities` map can be used to generate your own custom properties by passing in the same data structure of a standard CSS property.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Generating Custom Properties

You can use the same data structure of a utility setting to generate your own property.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      leading-trim: (
        responsive: true,
        shorthand: leading,
        properties: (leading-trim),
        variants: (
          trimmer: both
        )
      ),
      text-edge: (
        shorthand: text,
        properties: (text-edge),
        variants: (
          cap: cap alphabetic
        )
      )
    )
  )
);
```

```css
/* styles.css */
.leading-trimmer { leading-trim: both; }
.text-edge { text-edge: cap alphabetic; }
...
```

---

## Excluding Custom Properties

Any new utilities generated through the `utilities` settings map will behave like any other utility and can be included or excluded using the `include` and `exclude` settings.

```scss
// default values
@use "uniform" as * with (
  $config: (
    utility: (
      leading-trim: (
        responsive: true,
        shorthand: leading,
        properties: (leading-trim),
        variants: (
          trimmer: both
        )
      ),
    ),
    exclude: (
      all
    ),
    include: (
      leading-trim
    )
  )
);
```

---

## Add to Core Library <span class="ml-6 inline-flex align-items-center px-8 h-20 font-sm leading-0 font-bold radius-round bg-blue bg-brighten-500 color-white align-middle">Advanced</span>

Adding utilities through the utilities map can be a useful to quickly add properties however when adding many, your Uniform configuration may become long. To avoid this problem custom properties can also be added natively to the core library.

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-700 leading-0 bg-gray bg-tint-800 leading-0 color-black radius-round">1</span> Build out your data structure</h4>

Create a new `sass` document and use the following template to configure your own custom property.

```scss
// leading-trim.scss
@use "uniform/core";
@use "sass:map";

$name: leading-trim;
$shorthand: leading-trim;
$responsive: false;
$responsive-pseudos: false;
$extra-selector: null;

$properties: (leading-trim);
$custom-properties: ();

$variants: ();

$pseudos: ();

$config: (
  utility: (
    $name: (
      shorthand: $shorthand,
      responsive: $responsive,
      responsive-pseudos: $responsive-pseudos,
      extra-selector: $extra-selector,
      properties: $properties,
      custom-properties: $custom-properties,
      variants: (
        $variants,
      ),
      pseudos: (
        $pseudos,
      ),
    ),
  ),
);

core.$all-config: map.deep-merge(core.$all-config, $config);
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-700 leading-0 bg-gray bg-tint-800 leading-0 color-black radius-round">2</span> Include custom property to the import list</h4>

Open `_index.scss` located inside the uniform directly and include the newly created custom property using the `@use` after the last imported property.

```scss
// uniform/_index.scss
...
@use "utilities/svg/core-fill";
@use "utilities/svg/core-stroke";
@use "utilities/svg/core-stroke-width";

@use "utilities/leading-trim"; // include your custom property here
```

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-700 leading-0 bg-gray bg-tint-800 leading-0 color-black radius-round">3</span> Override or customize custom property</h4>

Once your custom property has been added into the core library, it will behave like any other utility property. This means it can be configured, overwritten or extended like any other property inside the `utilities` map.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      leading-trim: (
        responsive: true,
        shorthand: leading,
        properties: (leading-trim),
        variants: (
          trimmer: both
        )
      )
    )
  )
);
```
