---
title: Keyframes
description: Learn how to customize typography related settings.
date: 1000-01-04
---

## Keyframes

The `keyframes` settings map is used to generate `@keyframes` rule.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Customizing Keyframes

The following default keyframe configurations are applied.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    keyframes: (
      spin: (
        from: (
          transform: rotate(0deg)
        ),
        to: (
          transform: rotate(360deg)
        )
      ),
      ping: (
        0%: (
          transform: scale(1),
          opacity: 1,
        ),
        80%: (
          transform: scale(2.25),
          opacity: 0,
        ),
        100%: (
          transform: scale(2.25),
          opacity: 0,
        )
      ),
      bounce: (
        0%: (
          transform: translateY(-25%),
          animation-timing-function: cubic-bezier(.8,0,1,1)
        ),
        50%: (
          transform: none,
          animation-timing-function: cubic-bezier(0,0,.2,1)
        ),
        100%: (
          transform: translateY(-25%),
          animation-timing-function: cubic-bezier(.8,0,1,1)
        )
      ),
      pulse: (
        0%: (
          opacity: 1,
        ),
        50%: (
          opacity: .5,
        ),
        100%: (
          opacity: 1,
        )
      )
    )
  )
)
```

```css
/* styles.css */

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes ping {
  0% { transform: scale(1); opacity: 1; }
  80% { transform: scale(2.25); opacity: 0; }
  100% { transform: scale(2.25); opacity: 0; }
}
@keyframes bounce {
  0% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
  100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
}
@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
```

---

## Customizing Keyframes

You can customize keyframes by passing in key value pairs to the `keyframes` setting in your configuration. After defining the name of your keyframe, the syntax for defining your animation is similar to the native method.

```scss
// styles.scss

@use "uniform" as * with (
  $config: (
    keyframes: (
      custom-animation: (
        from: (
          background-blue: red
        ),
        to: (
          background-blue: blue
        )
      ),
    )
  )
)
```

```css
/* styles.css */

@keyframes custom-animation {
  from { background-blue: red; }
  to { background-blue: blue; }
}
```

---

## Disabling Defaults

You can remove all defaults by passing `null` to the `keyframes` setting.

```scss
@use "uniform" as * with (
  $config: (
    keyframes: null,
  )
)
