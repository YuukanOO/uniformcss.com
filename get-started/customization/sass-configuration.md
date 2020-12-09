---
title: Sass Configuration
description: Customizing Uniform CSS to your heart's content.
date: 1000-01-01
---

## How Configuration Works

Customizations in Uniform CSS are all handled through a single point of entry from the root of your Sass project. Unlike the CDN option, the Sass implementation of Uniform CSS provides the most customization freedom. 

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Basic Usage

Uniform CSS is loaded in as a module and can be configured with by passing in settings to the `$config` map. To learn more about modules please visit the [official Sass docs](https://sass-lang.com/documentation/at-rules/use).

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    important: true,    
    // override settings here
  )
);
```

```css
/* styles.css */
.align-left {text-align: left !important;}
.align-right {text-align: right !important;}
```

---

## Setting Groups

It is helpful to note, there are four types of settings you can pass into your configuration, build, theme, utility, and excludes. 

### Build Settings

Build settings specifies globally how your properties are constructed.

```scss
@use "uniform" as * with (
  $config: (
    important: true,
    // other build settings here
  )
);
```

### Theme Settings

Theme settings specifies universally shared theme related settings such as breakpoints, sizes, and colors etc.

```scss
@use "uniform" as * with (
  $config: (\
    screens: (
      ...
    )
    colors: (
      ...
    ),
    // other theme settings here
  )
);
```

### Utilities Settings

Utilities settings specifies the individual setting of each property.

```scss
@use "uniform" as * with (
  $config: (
    utilities: (
      text-align: (
        ...
      )
      // other utility settings here
    ),
  )
);
```

### Exclude Settings

Exclude and include settings specifies which properties or modules should be excluded or included during the build.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      all,
      // other excluded properties
    ),
    includes: (
      background-color,
      text-align,
      // other included properties
    ),
  )
);
```

---

## Build Settings

Build settings are global in influence and specifies how your your utility classes are generated. These include the option of appending a prefix, changing the shorthand delimiter, and applying `!important` to each classes.

### Build Setting Usage

Build settings control how classes should look on a global level.

```scss
// default values
@use "uniform" as * with (
  $config: (
    important: false,
    prefix: '',
    delimiter: '-',
    pseudo-delimiter: '.',
    screen-delimiter: '.',
  )
);
```

### Build Settings Definitions

The following build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `important`{.code-a} | `false` | Append `!important` to each property. |
| `prefix` | `null` | Append a namespace to the beginning of each class name. |
| `delimiter` | `-` | Specifies the delimiter that separates shorthand name to its variant. |
| `pseudo-delimiter` | `.` | Specifies the delimiter of pseudo variants. |
| `screen-delimiter` | `.` | Specifies the delimiter of breakpoint variants. |

---

## Utility Settings

The `utility` setting is a map where you can pass in settings to configure, replace, and extend variants for each property. For each property the following settings are available to be configured.

### Utility Setting Usage

Utility settings control how classes should look on a global level.

```scss
// default values
@use "uniform" as * with (
  $config: (
    utilities: (
      background-color: (
        shorthand: bg,
        responsive: false,

      )
    )
  )
);
```

### Build Settings Definitions

The following build setting definitions apply.

| Setting | Default | Description |
| - | - | - |
| `important`{.code-a} | `false` | Append `!important` to each property. |
| `prefix` | `null` | Append a namespace to the beginning of each class name. |
| `delimiter` | `-` | Specifies the delimiter that separates shorthand name to its variant. |
| `pseudo-delimiter` | `.` | Specifies the delimiter of pseudo variants. |
| `screen-delimiter` | `.` | Specifies the delimiter of breakpoint variants. |


---

### Include Variables <div class="inline-block ml-2 px-2 py-1 bg-black radius-xs font-2xs font-600 align-middle text-white uppercase tracking-1">Global</div>

Include variables deal with controlling which reset, starter or modules should be included in the build process.

```scss
@use "uniform" as * with (
  $include-reset-styles: true,
  $include-starter-styles: true,
  $include-button-module: true,
  $include-form-module: true,
  $include-table-module: true,
  $include-wrapper-module: true,
);
```

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
      <td><code class="text-teal text-brighten-500 text-darken-200">sm</code></td>
      <td>
        <code class="text-gray-600">768px</code>
      </td>
    </tr>
    <tr>
      <td><code class="text-teal text-brighten-500 text-darken-200">md</code></td>
      <td>
        <code class="text-gray-600">1024px</code>
      </td>
    </tr>
    <tr>
      <td><code class="text-teal text-brighten-500 text-darken-200">lg</code></td>
      <td>
        <code class="text-gray-600">1280px</code>
      </td>
    </tr>
    <tr>
      <td><code class="text-teal text-brighten-500 text-darken-200">xl</code></td>
      <td>
        <code class="text-gray-600">1536px</code>
      </td>
    </tr>
  </tbody>
</table>

---

### Theme Variables <div class="inline-block ml-2 px-2 py-1 bg-black radius-xs font-2xs font-600 align-middle text-white uppercase tracking-1">Global</div>

Theme variables are theme specific maps such as breakpoints, colors, and spacing that is used across multiple CSS properties. For more about theme variables, visit the **theme section**.

```scss
@use "uniform" as * with (
  $colors: (
    custom-red: red,
    custom-blue: blue
  ),
  $screens: (
    sm. 768px,
    md. 1024px,
    lg. 1280px
  ),
  $font-sizes: (
    extra-large: 72px
  )
)
```



---

## Local Variables <div class="inline-block ml-2 px-2 py-1 bg-black radius-xs font-2xs font-600 align-middle text-white uppercase tracking-1">Local</div>

Unlike Global variables, each CSS property has Locally scoped variables that control how that particular property is handled. For more information on configuring CSS properties, check out <a class="hover.underline" href="/get-started/customizing-properties">customizing-properties</a>.

```scss
@use "uniform" as * with (
  $background-color-shorthand: bg,
  $background-color-responsive: true,
  $background-color-responsive-pseudos: false,
  $background-color-properties: (background-color),
  $background-color-core-variants: (core.colors()),
  $background-color-variants: (),
  $background-color-pseudos: (hover, focus, active, group-hover),
);
```
