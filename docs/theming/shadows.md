---
title: Shadow
description: Learn how to customize default shadows.
date: 1000-01-04
---

## Shadow

Box shadow effects can be applied using via the `shadow` utility. By default, there are 12 shadow effects available. These effects can also be extended, replaced, or overwritten through your configuration.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Default Shadows

The following default shadow configurations are applied. To see a more visual reference of all the shadows, visit [Cheatsheet](/cheatsheet).

```scss
@use "uniform" as * with (
  $config: (
    shadows: (
      2xs: (
        0 1px 2px 0 rgba(0, 0, 0, 0.05)
      ),
      xs: (
        0 1px 3px rgba(0, 0, 0, 0.15), 
        0 1px 3px rgba(0, 0, 0, 0.2)
      ),
      sm: (
        0 3px 6px rgba(0, 0, 0, 0.16),
        0 3px 6px rgba(0, 0, 0, 0.23),
      ),
      md: (
        0 10px 20px rgba(0, 0, 0, 0.19),
        0 6px 6px rgba(0, 0, 0, 0.23),
      ),
      lg: (
        0 15px 30px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.2),
      ),
      xl: (
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 15px 10px rgba(0, 0, 0, 0.2),
      ),
      2xl: (
        0 25px 45px rgba(0, 0, 0, 0.3), 
        0 20px 20px rgba(0, 0, 0, 0.3)
      ),
      focus: (
        0 0 0 4px hsla(220, 70%, 60%, 20%)
      ),
      input-focus: (
        0 0 0 3px hsla(220, 70%, 60%, 20%)
      ),
      input-success: (
        0 0 0 3px hsla(70, 70%, 60%, 20%)
      ),
      input-warning: (
        0 0 0 3px hsla(30, 70%, 60%, 20%)
      ),
      input-danger: (
        0 0 0 3px hsla(0, 70%, 60%, 20%)
      )
    )
  )
)
```

---

## Customizing via Sass

You can add your own shadows by passing in key value pairs to the `shadows` map in your configuration.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    shadows: (
      card: ( 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) ),
      chatbox: ( 0 20px 24px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25) ),
    ),
  )
);
```

```css
/* styles.css */

.shadow-card {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.shadow-chatbox {
  box-shadow: 0 20px 24px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
}
...
```

---

## Customizing via CDN

If you are using the CDN version of Uniform CSS, you can still customizing default settings by overriding CSS variables.

```css
:root {
  --shadow-2xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-xs: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.2);
  --shadow-sm: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  --shadow-md: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  --shadow-lg: 0 15px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 10px rgba(0, 0, 0, 0.2);
  --shadow-2xl: 0 25px 45px rgba(0, 0, 0, 0.3), 0 20px 20px rgba(0, 0, 0, 0.3);
  --shadow-focus: 0 0 0 4px rgba(82, 129, 224, 0.2);
  --shadow-input-focus: 0 0 0 3px rgba(82, 129, 224, 0.2);
  --shadow-input-success: 0 0 0 3px rgba(201, 224, 82, 0.2);
  --shadow-input-warning: 0 0 0 3px rgba(224, 153, 82, 0.2);
  --shadow-input-danger: 0 0 0 3px rgba(224, 82, 82, 0.2);
}
```

---

## Disabling Defaults

You can remove all default shadows by passing `null` to the `shadows` setting.

```scss
@use "uniform" as * with (
  $config: (
    shadows: null
  )
)
