## `justify-content`

`justify-content`, along with [`align-items`], are two of the most essential classes for working with [Flexbox]. In the context of a Flexbox row, `flex row`, `justify-content` justifies children elements across the x-axis (left-to-right). In the context of a Flexbox column, `flex col`, `justify-content` justifies children elements across the y-axis (top-to-bottom).

[`align-items`] is converse to `justify-content`.

[You can learn more about `justify-content` at the MDN documentation here.](TODO)

`justify-content` supports the following values:

+---------------------------+
| `stretch` | `stretch`\* |
| `start` | `flex-start` |
| `center` | `center` |
| `end` | `flex-end` |
| `baseline` | `baseline` | \*\*TODO: Check if this is true.
+---------------------------+

\*`justify-content` defaults to `stretch` when unspecified.

## `align-items`

`align-items`, along with [`justify-content`], are two of the most essential classes for working with [Flexbox]. In the context of a Flexbox column, `flex col`, `align-items` aligns children elements across the y-axis (top-to-bottom). In the context of a Flexbox column, `flex col`, `align-items` aligns children elements across the x-axis (left-to-right).

[`justify-content`] is converse to `align-items`.

[You can learn more about `align-items` at the MDN documentation here.](TODO)

`align-items` supports the following values:

+---------------------------+
| `stretch` | `stretch`\* |
| `start` | `flex-start` |
| `center` | `center` |
| `end` | `flex-end` |
| `baseline` | `baseline` | \*\*TODO: Check if this is true.
+---------------------------+

\*`align-items` defaults to `stretch` when unspecified.

## `text-opacity`

`text-opacity` controls text opacity, that is, the transparency of an element’s text. `text-opacity-0` makes an element’s text completely transparent and `opacity-100` makes an element’s text completely opaque.

Note that `text-opacity` does not apply to nested element text; `text-opacity` _only_ applies to the current element’s text.

Other opacity utilities include [`text-opacity`], [`background-opacity`], and [`border-opacity`]. Other utilities to consider are [`display-none`] and [`invisible`].

[You can learn more about `opacity` at the MDN documentation here.](TODO)

## `text-opacity`

`text-opacity` controls the transparency of an element’s text. `text-opacity-0` makes an element’s text completely transparent and `text-opacity-100` makes an element’s text completely opaque.

Note that `text-opacity` does not apply to nested children elements; `text-opacity` _only_ applies to the current element.

Other opacity utilities include [`text-opacity`], [`background-opacity`], and [`border-opacity`]. Other utilities to consider are [`display-none`] and [`invisible`].

[You can learn more about `opacity` at the MDN documentation here.](TODO)

+--------------------------+
| text-opacity-0 | 0% |
| text-opacity-20 | 20% |
| text-opacity-40 | 40% |
| text-opacity-60 | 60% |
| text-opacity-80 | 80% |
| text-opacity-100 | 100%\* |
+--------------------------+

\*`text-opacity` defaults to `100%` when unspecified.

## `background-opacity`

`background-opacity` controls the transparency of an element’s `background-color` and or `background-image`. `background-opacity-0` makes an element’s background completely transparent and `background-opacity-100` makes an element’s background completely opaque.

Note that `background-opacity` does not apply to nested children elements; `background-opacity` _only_ applies to the current element.

`background-opacity` is also useful in combination with [`background-blur`].

Other opacity utilities include [`text-opacity`], [`background-opacity`], and [`border-opacity`]. Other utilities to consider are [`display-none`] and [`invisible`].

[You can learn more about `opacity` at the MDN documentation here.](TODO)

+------------------------+
| bg-opacity-0 | 0% |
| bg-opacity-20 | 20% |
| bg-opacity-40 | 40% |
| bg-opacity-60 | 60% |
| bg-opacity-80 | 80% |
| bg-opacity-100 | 100%\* |
+------------------------+

\*`bg-opacity` defaults to `100%` when unspecified.

## `border-opacity`

`border-opacity` controls the transparency of an element’s border. `border-opacity-0` makes an element’s border completely transparent and `border-opacity-100` makes an element’s border completely opaque.

Note that `border-opacity` does not apply to nested children elements; `border-opacity` _only_ applies to the current element.

Other opacity utilities include [`text-opacity`], [`background-opacity`], and [`border-opacity`]. Other utilities to consider are [`display-none`] and [`invisible`].

[You can learn more about `border-opacity` at the MDN documentation here.](TODO)

+--------------------------+
| border-opacity-0 | 0% |
| border-opacity-20 | 20% |
| border-opacity-40 | 40% |
| border-opacity-60 | 60% |
| border-opacity-80 | 80% |
| border-opacity-100 | 100%\* |
+--------------------------+

\*`border-opacity` defaults to `100%` when unspecified.

## `opacity`

`opacity` controls the transparency of an element. `opacity-0` makes an element completely transparent and `opacity-100` makes an element completely opaque.

Other opacity utilities include [`text-opacity`], [`background-opacity`], and [`border-opacity`]. Other utilities to consider are [`display-none`] and [`invisible`].

[You can learn more about `opacity` at the MDN documentation here.](TODO)

+---------------------+
| opacity-0 | 0% |
| opacity-20 | 20% |
| opacity-40 | 40% |
| opacity-60 | 60% |
| opacity-80 | 80% |
| opacity-100 | 100%\* |
+---------------------+

\*`opacity` defaults to `100%` when unspecified.

- [ ] @use "utilities/alignment/core-align-content";
- [x] @use "utilities/alignment/core-align-items";
- [ ] @use "utilities/alignment/core-align-self";
- [x] @use "utilities/alignment/core-justify-content";
- [ ] @use "utilities/alignment/core-text-align";
- [ ] @use "utilities/alignment/core-vertical-align";
- [ ] @use "utilities/appearance/core-display";
- [x] @use "utilities/appearance/core-opacity";
- [ ] @use "utilities/appearance/core-outline";
- [ ] @use "utilities/appearance/core-visibility";
- [ ] @use "utilities/appearance/extension-appearance";
- [ ] @use "utilities/appearance/extension-font-smooth";
- [ ] @use "utilities/background/extension-background-brighten";
- [ ] @use "utilities/background/extension-background-deepen";
- [ ] @use "utilities/background/extension-background-lighten";
- [ ] @use "utilities/background/extension-background-darken";
- [ ] @use "utilities/background/extension-background-opacity";
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
- [ ] @use "utilities/composition/core-box-sizing";
- [ ] @use "utilities/composition/core-clear";
- [ ] @use "utilities/composition/core-float";
- [ ] @use "utilities/composition/core-object-fit";
- [ ] @use "utilities/composition/core-object-position";
- [ ] @use "utilities/composition/core-position";
- [ ] @use "utilities/composition/core-table-layout";
- [ ] @use "utilities/overflow/core-overflow-x";
- [ ] @use "utilities/overflow/core-overflow-y";
- [ ] @use "utilities/overflow/core-overflow";
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
- [ ] @use "utilities/typography/extension-text-opacity";
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
- [ ] @use "utilities/flexbox/core-order";
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
