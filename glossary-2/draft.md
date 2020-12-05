## `justify-content`

`justify-content`, along with [`align-items`](TODO), are two of the most essential classes for working with [Flexbox](TODO). In the context of a Flexbox row, `flex row`, `justify-content` justifies children elements across the x-axis (left-to-right). In the context of a Flexbox column, `flex col`, `justify-content` justifies children elements across the y-axis (top-to-bottom).

[`align-items`](TODO) is converse to `justify-content`.

[You can learn more about `justify-content` at the MDN documentation.](TODO)

`justify-content` supports the following values:

| Class      | CSS                           |
| ---------- | ----------------------------- |
| `stretch`  | `justify-content: stretch`\*  |
| `start`    | `justify-content: flex-start` |
| `center`   | `justify-content: center`     |
| `end`      | `justify-content: flex-end`   |
| `baseline` | `justify-content: baseline`   |

\*`justify-content` defaults to `stretch` when unspecified.

## `align-items`

`align-items`, along with [`justify-content`](TODO), are two of the most essential classes for working with [Flexbox](TODO). In the context of a Flexbox column, `flex col`, `align-items` aligns children elements across the y-axis (top-to-bottom). In the context of a Flexbox column, `flex col`, `align-items` aligns children elements across the x-axis (left-to-right).

[`justify-content`](TODO) is converse to `align-items`.

[You can learn more about `align-items` at the MDN documentation.](TODO)

`align-items` supports the following values:

| Class      | CSS                       |
| ---------- | ------------------------- |
| `stretch`  | `align-items: stretch`\*  |
| `start`    | `align-items: flex-start` |
| `center`   | `align-items: center`     |
| `end`      | `align-items: flex-end`   |
| `baseline` | `align-items: baseline`   |

\*`align-items` defaults to `stretch` when unspecified.

## `text-opacity`

`text-opacity` controls text opacity, that is, the transparency of an element’s text. `text-opacity-0` makes an element’s text completely transparent and `opacity-100` makes an element’s text completely opaque.

Note that `text-opacity` does not apply to nested element text; `text-opacity` _only_ applies to the current element’s text.

Other opacity utilities include [`text-opacity`](TODO), [`background-opacity`](TODO), and [`border-opacity`](TODO). Other utilities to consider are [`display-none`](TODO) and [`invisible`](TODO).

<!-- [You can learn more about `opacity` at the MDN documentation.](TODO) -->

| Class              | CSS                      |
| ------------------ | ------------------------ |
| `text-opacity-0`   | `--text-opacity: 0%`     |
| `text-opacity-20`  | `--text-opacity: 20%`    |
| `text-opacity-40`  | `--text-opacity: 40%`    |
| `text-opacity-60`  | `--text-opacity: 60%`    |
| `text-opacity-80`  | `--text-opacity: 80%`    |
| `text-opacity-100` | `--text-opacity: 100%`\* |

\*`text-opacity` defaults to `100%` when unspecified.

## `background-opacity`

`background-opacity` controls the transparency of an element’s `background-color` and or `background-image`. `background-opacity-0` makes an element’s background completely transparent and `background-opacity-100` makes an element’s background completely opaque.

Note that `background-opacity` does not apply to nested children elements; `background-opacity` _only_ applies to the current element.

`background-opacity` is also useful in combination with [`background-blur`](TODO).

Other opacity utilities include [`text-opacity`](TODO), [`background-opacity`](TODO), and [`border-opacity`](TODO). Other utilities to consider are [`display-none`](TODO) and [`invisible`](TODO).

<!-- [You can learn more about `opacity` at the MDN documentation.](TODO) -->

| Class            | CSS                    |
| ---------------- | ---------------------- |
| `bg-opacity-0`   | `--bg-opacity: 0%`     |
| `bg-opacity-20`  | `--bg-opacity: 20%`    |
| `bg-opacity-40`  | `--bg-opacity: 40%`    |
| `bg-opacity-60`  | `--bg-opacity: 60%`    |
| `bg-opacity-80`  | `--bg-opacity: 80%`    |
| `bg-opacity-100` | `--bg-opacity: 100%`\* |

\*`bg-opacity` defaults to `100%` when unspecified.

## `border-opacity`

`border-opacity` controls the transparency of an element’s border. `border-opacity-0` makes an element’s border completely transparent and `border-opacity-100` makes an element’s border completely opaque.

Note that `border-opacity` does not apply to nested children elements; `border-opacity` _only_ applies to the current element.

Other opacity utilities include [`text-opacity̵`](TODO), [`background-opacity`](TODO), and [`border-opacity`](TODO). Other utilities to consider are [`display-none`](TODO) and [`invisible`](TODO).

<!-- [You can learn more about `border-opacity` at the MDN documentation.](TODO) -->

| Class                | CSS                        |
| -------------------- | -------------------------- |
| `border-opacity-0`   | `--border-opacity: 0%`     |
| `border-opacity-20`  | `--border-opacity: 20%`    |
| `border-opacity-40`  | `--border-opacity: 40%`    |
| `border-opacity-60`  | `--border-opacity: 60%`    |
| `border-opacity-80`  | `--border-opacity: 80%`    |
| `border-opacity-100` | `--border-opacity: 100%`\* |

\*`border-opacity` defaults to `100%` when unspecified.

## `opacity`

`opacity` controls the transparency of an element. `opacity-0` makes an element completely transparent and `opacity-100` makes an element completely opaque.

Other opacity utilities include [`text-opacity`](TODO), [`background-opacity`](TODO), and [`border-opacity`](TODO). Other utilities to consider are [`display-none`](TODO) and [`invisible`](TODO).

[You can learn more about `opacity` at the MDN documentation.](TODO)

| Class         | CSS               |
| ------------- | ----------------- |
| `opacity-0`   | `opacity: 0%`     |
| `opacity-20`  | `opacity: 20%`    |
| `opacity-40`  | `opacity: 40%`    |
| `opacity-60`  | `opacity: 60%`    |
| `opacity-80`  | `opacity: 80%`    |
| `opacity-100` | `opacity: 100%`\* |

\*`opacity` defaults to `100%` when unspecified.

## `align`

`align` can be used to justify text along the x-axis (left-to-right) and align text along the y-axis (top-to-bottom). `align` combines `text-align` and `vertical-align` into one shorthand for ease of use.

- [You can learn more about `text-align` at the MDN documentation.](TODO)
- [You can learn more about `vertical-align` at the MDN documentation.](TODO)

| Class                      | CSS                           |
| -------------------------- | ----------------------------- |
| align-left (x-axis)        | `text-align: left`\*          |
| align-center (x-axis)      | `text-align: center`          |
| align-right (x-axis)       | `text-align: right`           |
| align-justify (x-axis)     | `text-align: justify`         |
| align-baseline (y-axis)    | `vertical-align: baseline`\*  |
| align-top (y-axis)         | `vertical-align: top`         |
| align-middle (y-axis)      | `vertical-align: middle`      |
| align-bottom (y-axis)      | `vertical-align: bottom`      |
| align-text-top (y-axis)    | `vertical-align: text-top`    |
| align-text-bottom (y-axis) | `vertical-align: text-bottom` |

<!-- HINT: Do you want to support start and end? -->

\*`align` defaults to `left` (x-axis) and `baseline` (y-axis) when unspecified.

## `invisible` and `visible`

`invisible` and `visible` control an element’s visibility. `invisible` is most similar to [`opacity-0`](TODO) and `visible` to [`opacity-100`](TODO). If you’re unsure about whether to use `invisible` or `opacity-0`, we recommend `opacity-0` because `opacity` is a transitionable / animatable property in CSS.

<!-- TODO: Document a11y concerns. -->

Note that `invisible` is not the same as `display-none`; `invisible` creates a bounding box and `display-none` does not.

- [You can learn more about `visibility` at the MDN documentation.](TODO)

| Class     | CSS                     |
| --------- | ----------------------- |
| invisible | `visibility: hidden`    |
| visible   | `visibility: visible`\* |

\*`visibility` defaults to `visible` when unspecified.

## `overflow`

`overflow` controls whether children elements that overflow the parent element’s bounding box should be visible, clipped (`hidden`) or scrolled (`scroll`) along the x-, y-, or both axes.

Note that you should not use an `overflow` utility on an element that also uses `padding`. Because these CSS properties interfere with each other, we recommend wrapping the `padding` element with an `overflow` element.

- [You can learn more about `overflow` at the MDN documentation.](TODO)

| Class                | CSS                   |
| -------------------- | --------------------- |
| `overflow-auto`      | `overflow: auto`\*    |
| `overflow-hidden`    | `overflow: hidden`    |
| `overflow-visible`   | `overflow: visible`   |
| `overflow-scroll`    | `overflow: scroll`    |
| `overflow-x-auto`    | `overflow-x: auto`\*  |
| `overflow-x-hidden`  | `overflow-x: hidden`  |
| `overflow-x-visible` | `overflow-x: visible` |
| `overflow-x-scroll`  | `overflow-x: scroll`  |
| `overflow-y-auto`    | `overflow-y: auto`\*  |
| `overflow-y-hidden`  | `overflow-y: hidden`  |
| `overflow-y-visible` | `overflow-y: visible` |
| `overflow-y-scroll`  | `overflow-y: scroll`  |

\*`overflow` defaults to `auto` when unspecified.

## `border-box` and `content-box`

<!-- TODO: Check is it just padding or padding and border, etc. -->

`border-box` and `content-box` control whether an element’s box-sizing, that is, whether `padding` and `border-width` should be inset or outset. By default Uniform CSS uses `box-sizing: border-box` as a global CSS reset, as does most of the web. We recommend you only use `content-box` if you know what you are doing.

Note that `content-box` only changes the bounding box of the current element; it does not change the bounding box for nested children elements.

| Class       | CSS                        |
| ----------- | -------------------------- |
| border-box  | `box-sizing: border-box`\* |
| content-box | `box-sizing: content-box`  |

\*`box-sizing` defaults to `border-box` when unspecified.

- [You can learn more about `box-sizing` at the MDN documentation.](TODO)

## `order`

<!-- TODO: Check only affects Flexbox and CSS Grid -->

`order` controls an element’s order with respect to the document flow of a Flexbox or CSS Grid context. By default, the web renders elements in the same order as they appear in HTML. But by using `order` in a Flexbox or CSS Grid context, you can change an element’s rendered order, so that last elements may appear first or vice-versa. `order` is particularly useful for responsive design.

Note that if you are using `margin-top` or `margin-left` utilities to space elements, `order` does not work as expected. Instead, we recommend using [`gap`](TODO). However, `gap` is not yet supported for Flexbox in Safari. If you are only targeting Chrome or Firefox, you can safely use `order` with `gap` today.

- [You can learn more about `order` at the MDN documentation.](TODO)

| Class      | CSS         |
| ---------- | ----------- |
| `order-1`  | `order: 1`  |
| `order-2`  | `order: 2`  |
| `order-3`  | `order: 3`  |
| `order-4`  | `order: 4`  |
| `order-5`  | `order: 5`  |
| `order-6`  | `order: 6`  |
| `order-7`  | `order: 7`  |
| `order-8`  | `order: 8`  |
| `order-9`  | `order: 9`  |
| `order-10` | `order: 10` |
| `order-11` | `order: 11` |
| `order-12` | `order: 12` |

<!-- TODO: What’s the default value for order? 0? -->

<!-- \*`overflow` defaults to `auto` when unspecified. -->

---

- [ ] @use "utilities/alignment/core-align-content";
- [x] @use "utilities/alignment/core-align-items";
- [ ] @use "utilities/alignment/core-align-self";
- [x] @use "utilities/alignment/core-justify-content";
- [x] @use "utilities/alignment/core-text-align";
- [x] @use "utilities/alignment/core-vertical-align";
- [ ] @use "utilities/appearance/core-display";
- [x] @use "utilities/appearance/core-opacity";
- [ ] @use "utilities/appearance/core-outline";
- [x] @use "utilities/appearance/core-visibility";
- [ ] @use "utilities/appearance/extension-appearance";
- [ ] @use "utilities/appearance/extension-font-smooth";
- [ ] @use "utilities/background/extension-background-brighten";
- [ ] @use "utilities/background/extension-background-deepen";
- [ ] @use "utilities/background/extension-background-lighten";
- [ ] @use "utilities/background/extension-background-darken";
- [x] @use "utilities/background/extension-background-opacity";
- [ ] @use "utilities/background/core-background-attachment";
- [ ] @use "utilities/background/core-background-clip";
- [ ] @use "utilities/background/core-background-color";
- [ ] @use "utilities/background/core-background-position";
- [ ] @use "utilities/background/core-background-repeat";
- [ ] @use "utilities/background/core-background-size";
- [ ] @use "utilities/background/core-background";
- [ ] @use "utilities/border/extension-border-brighten";
- [ ] @use "utilities/border/extension-border-deepen";
- [ ] @use "utilities/border/extension-border-lighten";
- [ ] @use "utilities/border/extension-border-darken";
- [x] @use "utilities/border/extension-border-opacity";
- [ ] @use "utilities/border/extension-border-bottom-radius";
- [ ] @use "utilities/border/extension-border-left-radius";
- [ ] @use "utilities/border/extension-border-right-radius";
- [ ] @use "utilities/border/extension-border-top-radius";
- [ ] @use "utilities/border/core-border-bottom-left-radius";
- [ ] @use "utilities/border/core-border-bottom-right-radius";
- [ ] @use "utilities/border/core-border-top-left-radius";
- [ ] @use "utilities/border/core-border-top-right-radius";
- [ ] @use "utilities/border/core-border-radius";
- [ ] @use "utilities/border/core-border-bottom-width";
- [ ] @use "utilities/border/core-border-left-width";
- [ ] @use "utilities/border/core-border-right-width";
- [ ] @use "utilities/border/core-border-top-width";
- [ ] @use "utilities/border/core-border-width";
- [ ] @use "utilities/border/core-border-collapse";
- [ ] @use "utilities/border/core-border-color";
- [ ] @use "utilities/border/core-border-style";
- [ ] @use "utilities/composition/extension-clearfix";
- [ ] @use "utilities/composition/extension-ratio";
- [x] @use "utilities/composition/core-box-sizing";
- [ ] @use "utilities/composition/core-clear";
- [ ] @use "utilities/composition/core-float";
- [ ] @use "utilities/composition/core-object-fit";
- [ ] @use "utilities/composition/core-object-position";
- [ ] @use "utilities/composition/core-position";
- [ ] @use "utilities/composition/core-table-layout";
- [x] @use "utilities/overflow/core-overflow-x";
- [x] @use "utilities/overflow/core-overflow-y";
- [x] @use "utilities/overflow/core-overflow";
- [ ] @use "utilities/effect/core-box-shadow";
- [ ] @use "utilities/effect/core-filter";
- [ ] @use "utilities/effect/core-mix-blend-mode";
- [ ] @use "utilities/sizing/core-height";
- [ ] @use "utilities/sizing/core-width";
- [ ] @use "utilities/sizing/core-min-height";
- [ ] @use "utilities/sizing/core-min-width";
- [ ] @use "utilities/sizing/core-max-height";
- [ ] @use "utilities/sizing/core-max-width";
- [ ] @use "utilities/position/core-bottom";
- [ ] @use "utilities/position/core-left";
- [ ] @use "utilities/position/core-right";
- [ ] @use "utilities/position/core-top";
- [ ] @use "utilities/position/extension-x";
- [ ] @use "utilities/position/extension-y";
- [ ] @use "utilities/position/extension-xy";
- [ ] @use "utilities/position/extension-absolute-center";
- [ ] @use "utilities/position/core-z-index";
- [ ] @use "utilities/margin/core-margin-bottom";
- [ ] @use "utilities/margin/core-margin-left";
- [ ] @use "utilities/margin/core-margin-right";
- [ ] @use "utilities/margin/core-margin-top";
- [ ] @use "utilities/margin/extension-margin-x";
- [ ] @use "utilities/margin/extension-margin-y";
- [ ] @use "utilities/margin/core-margin";
- [ ] @use "utilities/padding/core-padding-bottom";
- [ ] @use "utilities/padding/core-padding-left";
- [ ] @use "utilities/padding/core-padding-right";
- [ ] @use "utilities/padding/core-padding-top";
- [ ] @use "utilities/padding/extension-padding-x";
- [ ] @use "utilities/padding/extension-padding-y";
- [ ] @use "utilities/padding/core-padding";
- [ ] @use "utilities/typography/extension-text-brighten";
- [ ] @use "utilities/typography/extension-text-deepen";
- [ ] @use "utilities/typography/extension-text-lighten";
- [ ] @use "utilities/typography/extension-text-darken";
- [x] @use "utilities/typography/extension-text-opacity";
- [ ] @use "utilities/typography/core-color";
- [ ] @use "utilities/typography/core-font-family";
- [ ] @use "utilities/typography/core-font-size";
- [ ] @use "utilities/typography/core-font-style";
- [ ] @use "utilities/typography/core-font-weight";
- [ ] @use "utilities/typography/core-letter-spacing";
- [ ] @use "utilities/typography/core-line-height";
- [ ] @use "utilities/typography/core-list-style-position";
- [ ] @use "utilities/typography/core-list-style-type";
- [ ] @use "utilities/typography/core-text-decoration";
- [ ] @use "utilities/typography/core-text-overflow";
- [ ] @use "utilities/typography/core-text-transform";
- [ ] @use "utilities/typography/core-white-space";
- [ ] @use "utilities/typography/core-word-break";
- [ ] @use "utilities/grid/core-grid-auto-flow";
- [ ] @use "utilities/grid/core-grid-column";
- [ ] @use "utilities/grid/core-grid-column-end";
- [ ] @use "utilities/grid/core-grid-column-start";
- [ ] @use "utilities/grid/core-grid-row";
- [ ] @use "utilities/grid/core-grid-row-end";
- [ ] @use "utilities/grid/core-grid-row-start";
- [ ] @use "utilities/grid/core-grid-template-columns";
- [ ] @use "utilities/grid/core-grid-template-rows";
- [ ] @use "utilities/flexbox/core-flex";
- [ ] @use "utilities/flexbox/core-flex-direction";
- [ ] @use "utilities/flexbox/core-flex-grow";
- [ ] @use "utilities/flexbox/core-flex-shrink";
- [ ] @use "utilities/flexbox/core-flex-wrap";
- [x] @use "utilities/flexbox/core-order";
- [ ] @use "utilities/gap/core-gap";
- [ ] @use "utilities/gap/core-column-gap";
- [ ] @use "utilities/gap/core-row-gap";
- [ ] @use "utilities/transform/extension-translate-x";
- [ ] @use "utilities/transform/extension-translate-y";
- [ ] @use "utilities/transform/extension-scale-x";
- [ ] @use "utilities/transform/extension-scale-y";
- [ ] @use "utilities/transform/extension-skew-x";
- [ ] @use "utilities/transform/extension-skew-y";
- [ ] @use "utilities/transform/extension-rotate";
- [ ] @use "utilities/transform/core-transform-origin";
- [ ] @use "utilities/transform/core-transform";
- [ ] @use "utilities/transition/core-transition-duration";
- [ ] @use "utilities/transition/core-transition-delay";
- [ ] @use "utilities/transition/core-transition-property";
- [ ] @use "utilities/transition/core-transition-timing-function";
- [ ] @use "utilities/transition/core-transition";
- [ ] @use "utilities/interactive/core-cursor";
- [ ] @use "utilities/interactive/core-pointer-events";
- [ ] @use "utilities/interactive/core-resize";
- [ ] @use "utilities/interactive/core-scrolling";
- [ ] @use "utilities/interactive/core-user-select";
- [ ] @use "utilities/svg/core-fill";
- [ ] @use "utilities/svg/core-stroke";
- [ ] @use "utilities/svg/core-stroke-width";
