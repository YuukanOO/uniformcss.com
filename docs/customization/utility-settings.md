---
title: Utility Settings
description: Control how individual properties are generated.
date: 1000-01-03
---


## Utility Settings

The `utility` setting is a map where you can pass in settings to configure each property. You can also replace and extend variants for any given property.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How it works

Each property in Uniform CSS is constructed using the same data structure. By passing in your settings to the `utilities` map, you can override these settings. Each property has a set number of settings available, if a certain setting is not specified in your configuration, it will use the default value instead.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      text-align: (
        shorthand: align,
        responsive: false,
      ),
      margin-top: (
        shorthand: customMarginTop
      )
    )
  )
);
```

```css
/* styles.css */
.align-left {text-align: left;}
.align-right {text-align: right;}

.customMarginTop-1: {margin-top: 1px;}
.customMarginTop-2: {margin-top: 2px;}
...
```

> **Note to JavaScript developers**{.color-black}, Sass maps appear similar to JSON but do not require quotation marks around the key or strings. This is one of the convenient features of using Sass to configure your data structure.

---

## Utility Settings Table

The following utility setting definitions apply.

| Setting | Type | Description |
| - | - | - |
| `shorthand` | `string` | Shorthand word to represent property. |
| `responsive` | `boolean` | Responsive Setting. |
| `responsive-pseudos` | `boolean` | Responsive setting across pseudo variants. |
| `properties` | `list` | Target CSS property. |
| `custom-properties` | `map` | Custom properties inclusion. |
| `default-variants` | `map` | Key value map of the variants. |
| `default-pseudos` | `list` | List of supported pseudos. |
| `variants` | `map` | Key value map of the variants. |
| `pseudos` | `list` | List of supported pseudos. |

{.table}

---

## Shorthand

The `shorthand` setting overrides the default keyword used to identify the property.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      margin-top: (
        shorthand: customMarginTop
      ),
      margin-right: (
        shorthand: mr
      )
    )
  )
);
```

```css
/* styles.css */
.customMarginTop-1: {margin-top: 0.062rem;}
.customMarginTop-2: {margin-top: 0.125rem;}
...

.mr-1: {margin-right: 0.062rem;}
.mr-2: {margin-right: 0.125rem;}
...
```

### Null Shorthand

If `null` is passed in as a value for `shorthand` the property will omit the shorthand and use the variant name to identify the property instead.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      display: (
        shorthand: null
      )
    )
  )
);
```

```css
/* styles.css */
.block: {display: block;}
.inline-block: {display: inline-block;}
.flex: {display: flex;}
...
```

---

## Responsive

The `responsive` setting enables or disables the responsiveness of a given property.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      text-align: (
        responsive: true,
      ),
    )
  )
);
```

```css
/* styles.css */
@media (min-width: 768px) {
  .sm\.align-left {text-align: left;}
  .sm\.align-right {text-align: right;}
}
@media (min-width: 1024px) {
  .md\.align-left {text-align: left;}
  .md\.align-right {text-align: right;}
}
@media (min-width: 1280px) {
  .lg\.align-left {text-align: left;}
  .lg\.align-right {text-align: right;}
}
@media (min-width: 1536px) {
  .xl\.align-left {text-align: left;}
  .xl\.align-right {text-align: right;}
}
```

---

## Responsive Pseudos

The `responsive-pseudos` setting when enabled, will enable pseudo variants across breakpoints. By default all Uniform CSS property pseudos are not individually specifiable based on breakpoints e.g. `sm.hover.align-left`. This setting enables that feature.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      float: (
        responsive: true,
        responsive-pseudos: true,
        pseudos: (hover)
      ),
    )
  )
);
```

```css
/* styles.css */
@media (min-width: 768px) {
  .sm\.float-left {float: left;}
  .sm\.float-right {float: right;}
  .sm\.hover\.float-left:hover {float: left;}
  .sm\.hover\.float-right:hover {float: right;}
}
...
```

---

## Extra Selectors

The `extra-selector` setting when enabled, will apply CSS combinators to the end of the utility. This can be useful for achieving features such as the lobotomized owl.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      gutter-y: (
        shorthand: gutter-x,
        properties: (margin-top),
        extra-selector: '> * + *',
        variants: (
          10: 10px;
        );
      ),
    )
  )
);
```

```css
/* styles.css */
.gutter-y-10 > * + * {
  margin-top: 10px;
}
...
```


---

## Properties

The `properties` setting specifies the CSS property to include. All properties have their default properties already set however this can be useful for building custom ones.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      line-height: (
        shorthand: leading,
        properties: (line-height)
      ),
    )
  )
);
```

```css
/* styles.css */
.leading-0 {
  line-height: 1;
}
.leading-1 {
  line-height: 1.1;
}
.leading-2 {
  line-height: 1.2;
}
...
```

It is important to note, the `properties` setting must be passed in as a map and can contain mutiple properties. This can be particularly useful for custom classes that contain multiple properties.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      padding-x: (
        shorthand: px,
        properties: (
          padding-left, 
          padding-right
        )
      ),
    )
  )
);
```

```css
/* styles.css */
.px-0 {
  padding-left: 0;
  padding-right: 0;
}
.px-1 {
  padding-left: 1px;
  padding-right: 1px;
}
.px-2 {
  padding-left: 2px;
  padding-right: 2px;
}
...
```

---

## Custom Properties

The `custom-properties` setting specifies custom properties that the CSS property to include. This can be useful for properties that need to include resetting custom properties such as `background-color`. The `custom-properties` setting must be passed in as a map with key value pairs.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      background-color: (
        custom-properties: (
          --bg-sat: 0%,
          --bg-ltn: 0%,
          --bg-opacity: 1,
        )
      ),
    )
  )
);
```

```css
/* styles.css */
.bg-red {
  --bg-sat: 0%,
  --bg-ltn: 0%,
  --bg-opacity: 1,
  background-color: ...;
}
.bg-blue {
  --bg-sat: 0%,
  --bg-ltn: 0%,
  --bg-opacity: 1,
  background-color: ...;
}
...
```


---

## Variants

The `variants` setting specifies which variants should be generated for a given CSS property. Settings must be passed in as a map with key value pairs.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      margin: (
        shorthand: m,
        properties: (margin),
        variants: (
          1: 1px,
          2: 2px,
          custom: 180px,
        )
      ),
    )
  )
);
```

```css
/* styles.css */
.m-1 {
  margin: 1px,
}
.m-2 {
  margin: 2px,
}
.m-custom {
  margin: 180px,
}
...
```

### Null Variants

If `null` is passed in as a value for a variant key the property will omit the variant and use the shorthand instead.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      transition-property: (
        shorthand: transition-property,
        properties: (transition-property),
        variants: (
          null: (
            background-color,
            border-color,
            color,
            fill,
            stroke,
            opacity,
            box-shadow,
            transform,
          )
        )
      ),
    )
  )
);
```

```css
/* styles.css */
.transition-property {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
}
...
```

---

## Overwriting Defaults

Default Variants and Pseudos can be both removed, overwritten, or extended. Similar to how `variants` and `pseudos` settings are set, you can target default settings directly by appending the word `default` at the beginning of each setting name. 

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      text-align: (
        variants: null,
        default-pseudos: null,
        variants: (
          customVariant: left
        )
      ),
    )
  )
);
```

```css
.text-align-customVariant {
  text-align: left;
}

```