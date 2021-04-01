---
title: Utility Settings
description: Control individual properties settings.
date: 1000-01-03
---


## Utility Settings

The `utility` setting allows you to configure how each properties are generated. For example, you can replace and extend variants for any given property.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## How it works

Each property in Uniform CSS is constructed using the same data structure. By passing in your settings to the `utility` map, you can override the default data set for esch property. Each property has a set number of settings available and if a certain setting is not specified in your configuration, it will Uniform will fall back to the default setting value instead.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      text-align: (
        shorthand: text,
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
.align-left { text-align: left; }
.align-right { text-align: right; }

.customMarginTop-1: { margin-top: 1px; }
.customMarginTop-2: { margin-top: 2px; }
...
```

---

## Utility Settings Table

The following utility setting definitions apply.

| Setting | Type | Description |
| - | - | - |
| `shorthand` | `string` | Shorthand word to represent property. |
| `responsive` | `boolean` | Set responsiveness. |
| `responsive-pseudos` | `boolean` | Responsiveness across pseudo variants. |
| `properties` | `list` | Raw CSS property. |
| `custom-properties` | `map` | Custom properties inclusion. |
| `variants` | `map` | Key value map of the variants. |
| `pseudos` | `list` | Supported pseudos. |

{.text-left style="--markdown-table-border: 1px solid hsl(var(--gray-hue), var(--gray-sat), var(--shade-700))"}

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
.customMarginTop-1: { margin-top: 1px; }
.customMarginTop-2: { margin-top: 2px; }
...

.mr-1: { margin-right: 1px; }
.mr-2: { margin-right: 2px; }
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
        shorthand: null,
        variants: (
          block: block,
          flexTest: flex
        )
      )
    )
  )
);
```

```css
/* styles.css */
.block: { display: block; }
.flexText: { display: flex; }
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
  .sm\.text-left { text-align: left; }
  .sm\.text-right { text-align: right; }
}
@media (min-width: 1024px) { 
  .md\.text-left { text-align: left; }
  .md\.text-right { text-align: right; }
}
@media (min-width: 1280px) { 
  .lg\.text-left { text-align: left; }
  .lg\.text-right { text-align: right; }
}
@media (min-width: 1536px) { 
  .xl\.text-left { text-align: left; }
  .xl\.text-right { text-align: right; }
}
```

---

## Responsive Pseudos

The `responsive-pseudos` setting when enabled, will enable responsiveness across pseudos. By default, `responsive-pseudos` is disabled for all Uniform CSS properties.

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
  .sm\.float-left { float: left; }
  .sm\.float-right { float: right; }

  .sm\.hover\.float-left:hover { float: left; }
  .sm\.hover\.float-right:hover { float: right; }
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

The `properties` setting specifies the CSS property to include. You can include multiple properties to be applied.

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

The `custom-properties` setting specifies custom properties to include with each property. This can be useful for properties that need to include resetting custom properties such as `background-color`. The `custom-properties` setting must be passed in as a map with key value pairs.

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
        shorthand: transition,
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
.transition { 
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
}
...
```

---

## Pseudos

The `pseudos` setting specifies which pseudos set should be generated for a given CSS property. Settings must be passed in as a list.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility: (
      background-color: (
        pseudos: (
          hover, focus, group-hover
        )
      ),
    )
  )
);
```

---

## Disabling Defaults

Passing in `null` will disable all default settings. If you wish to disable defaults and apply your own, you can do so by applying your own settings to the `extend` map.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    utility : (
      background-color: (
        variants: null,
        pseudos: null,
        extend: (
          variants: (
            mainRed: red,
            mainBlue: blue
          ),
          pseudos: (hover, focus)
        )
      )
    )
  )
);
```

```css
/* styles.css */
.bg-mainRed { background-color: red; }
.bg-mainBlue { background-color: blue; }
```