---
title: Form
description: Learn about the Form module and how you can customize it.
date: 1000-01-02
---

## About Form Module

The form module is an optional pre-built component that can be useful for dealing with user input related fields on a page.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Form Module

The Form module is an optional pre-built component that provides customizable styling of input text fieds, checkboxes, select dropdown etc.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <form>
    <div class="mb-20 last.mb-0">
      <label class="label mb-8">Email</label>
      <input class="input" placeholder="Email" value="Placeholder Text">
    </div>
    <div class="mb-20 last.mb-0">
      <label class="inline-flex align-items-center">
        <input class="checkbox mr-10" type="checkbox" checked required />
        Checkbox
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <label class="inline-flex align-items-center mr-16">
        <input class="radio mr-10" type="radio" name="radio" checked />
        Radio
      </label>
      <label class="inline-flex align-items-center">
        <input class="radio mr-10" type="radio" name="radio" />
        Radio
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <label class="toggle">
        <input type="checkbox" checked />
        <div class="toggle__switch"></div>
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <div class="select">
        <select>
          <option selected>Selected</option>
          <option>Option</option>
          <option>Option</option>
        </select>
      </div>
    </div>
  </form>
</div>

```html
<label class="label mb-8">Email</label>
<input class="input" placeholder="Email" value="Placeholder Text">

<label class="inline-flex align-items-center">
  <input class="checkbox mr-10" type="checkbox" checked required />
  Checkbox
</label>

<label class="inline-flex align-items-center mr-16">
  <input class="radio mr-10" type="radio" name="radio" checked />
  Radio
</label>
<label class="inline-flex align-items-center">
  <input class="radio mr-10" type="radio" name="radio" />
  Radio
</label>

<label class="toggle">
  <input type="checkbox" checked />
  <div class="toggle__switch"></div>
</label>

<div class="select">
  <select>
    <option selected>Selected</option>
    <option>Option</option>
    <option>Option</option>
  </select>
</div>
```

---

## Labels and Textfields

To add a required asterisk append the class `is-required` to your label.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <label class="label is-required mb-8">Email</label>
  <input class="input" placeholder="Email" value="Placeholder Text" required>
</div>

```html
<label class="label is-required mb-8">Email</label>
<input class="input" placeholder="Email" value="Placeholder Text" required>
```

### Customizing Input

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --label-font-size: ...;
  --label-font-weight: ...;
  --label-color: ...;
  --label-tracking: ...;
  --label-text-transform: ...;
  --label-required-color: ...;

  --input-height: ...;
  --input-padding: ...;
  --input-bg: ...;
  --input-border: ...;
  --input-radius: ...;
  --input-shadow: ...;
  --input-transition: ...;

  --input-hover-border: ...;
  --input-hover-shadow: ...;

  --input-focus-border: ...;
  --input-focus-shadow: ...;
}
```

---

## Input field sizes

Text fields come in **5 sizes**.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <input class="input input-xs mb-8 last.mb-0" placeholder="Full name">
  <input class="input input-sm mb-8 last.mb-0" placeholder="Full name">
  <input class="input input-md mb-8 last.mb-0" placeholder="Full name">
  <input class="input input-lg mb-8 last.mb-0" placeholder="Full name">
  <input class="input input-xl mb-8 last.mb-0" placeholder="Full name">
</div>

```html
<input class="input input-xs" placeholder="Full name">
<input class="input input-sm" placeholder="Full name">
<input class="input input-md" placeholder="Full name">
<input class="input input-lg" placeholder="Full name">
<input class="input input-xl" placeholder="Full name">
```

### Customizing Input Sizes

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --input-xs-height: ...;
  --input-xs-padding: ...;
  --input-xs-font-size: ...;

  --input-sm-height: ...;
  --input-sm-padding: ...;
  --input-sm-font-size: ...;

  --input-md-height: ...;
  --input-md-padding: ...;
  --input-md-font-size: ...;

  --input-lg-height: ...;
  --input-lg-padding: ...;
  --input-lg-font-size: ...;

  --input-xl-height: ...;
  --input-xl-padding: ...;
  --input-xl-font-size: ...;
}
```

---

## Select Fields

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <div class="select">
    <select>
      <option selected>Selected</option>
      <option>Option</option>
      <option>Option</option>
    </select>
  </div>
</div>

```html
<div class="select">
  <select>
    <option selected>Selected</option>
    <option>Option</option>
    <option>Option</option>
  </select>
</div>
```

### Customizing Select Field

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --select-height: ...;
  --select-padding: ...;
  --select-bg: ...;
  --select-border: ...;
  --select-radius: ...;
  --select-shadow: ...;
  --select-font-size: ...;
  --select-transition: ...;

  --select-hover-border: ...;
  --select-hover-shadow: ...;
  --select-focus-border: ...;
  --select-focus-shadow: ...;
  --select-disabled-bg: ...;
  --select-disabled-color: ...;

  --select-angle-color: ...;
  --select-hover-angle-color: ...;
  --select-hover-focus-color: ...;
  
  --select-success-border: ...;
  --select-focus-success-shadow: ...;
  --select-warning-border: ...;
  --select-focus-warning-shadow: ...;
  --select-danger-border: ...;
  --select-focus-danger-shadow: ...;
}
```

---

## Select field sizes

Select fields come in **5 sizes**.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <div class="select select-xs mb-8 last.mb-0">
    <select>
      <option selected>Selected</option>
      <option>Option</option>
      <option>Option</option>
    </select>
  </div>

  <div class="select select-sm mb-8 last.mb-0">
    <select>
      <option selected>Selected</option>
      <option>Option</option>
      <option>Option</option>
    </select>
  </div>

  <div class="select select-md mb-8 last.mb-0">
    <select>
      <option selected>Selected</option>
      <option>Option</option>
      <option>Option</option>
    </select>
  </div>

  <div class="select select-lg mb-8 last.mb-0">
    <select>
      <option selected>Selected</option>
      <option>Option</option>
      <option>Option</option>
    </select>
  </div>

  <div class="select select-xl mb-8 last.mb-0">
    <select>
      <option selected>Selected</option>
      <option>Option</option>
      <option>Option</option>
    </select>
  </div>
</div>

```html
<div class="select select-xs">...</div>
<div class="select select-sm">...</div>
<div class="select select-md">...</div>
<div class="select select-lg">...</div>
<div class="select select-xl">...</div>
```

### Customizing Select Sizes

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --select-xs-height: ...;
  --select-xs-padding: ...;
  --select-xs-font-size: ...;

  --select-sm-height: ...;
  --select-sm-padding: ...;
  --select-sm-font-size: ...;

  --select-md-height: ...;
  --select-md-padding: ...;
  --select-md-font-size: ...;

  --select-lg-height: ...;
  --select-lg-padding: ...;
  --select-lg-font-size: ...;

  --select-xl-height: ...;
  --select-xl-padding: ...;
  --select-xl-font-size: ...;
}
```


---

## Responsive Text and Select Sizes

Both text and select field sizes can vary depending on breakpoint.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <input class="input input-xs lg.input-xl" placeholder="Resize browser to see change">
</div>

```html
<input class="input input-xs lg.input-xl" placeholder="Resize browser to see change">
```

---

## Input States

Text, select, and textarea fields come in *4* different states.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <input class="input mb-8 last.mb-0" placeholder="Disabled" disabled>
  <input class="input is-success mb-8 last.mb-0" placeholder="Success">
  <input class="input is-warning mb-8 last.mb-0" placeholder="Warning">
  <input class="input is-danger mb-8 last.mb-0" placeholder="Danger">
  <textarea class="textarea is-warning leading-8" rows="4">Warning textarea</textarea>
</div>

```html
<input class="input" placeholder="Success" disabled>
<input class="input is-success" placeholder="Success">
<input class="input is-warning" placeholder="Warning">
<input class="input is-danger" placeholder="Danger">
<textarea class="textarea is-warning leading-8" rows="4">Warning textarea</textarea>
```

### Customizing Input States

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --input-disabled-bg: ...;
  --input-disabled-color: ...;

  --input-success-border: ...;
  --input-focus-success-shadow: ...;

  --input-warning-border: ...;
  --input-focus-warning-shadow: ...;

  --input-danger-border: ...;
  --input-focus-danger-shadow: ...;
}
```


---

## Radio and Checkboxes

Text and select input fields come in **5 sizes**.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <div class="mb-20">
    <label class="inline-flex align-items-center mr-16">
      <input class="radio mr-10" type="radio" name="radio" checked />
      Radio
    </label>
    <label class="inline-flex align-items-center">
      <input class="radio mr-10" type="radio" name="radio" checked />
      Radio
    </label>
  </div>
  <div>
    <label class="inline-flex align-items-center">
      <input class="checkbox mr-10" type="checkbox" checked required />
      I agree to the terms and agreement.
    </label>
  </div>
</div>

```html
<label class="inline-flex align-items-center mr-16">
  <input class="radio mr-10" type="radio" name="radio" checked />
  Radio
</label>
<label class="inline-flex align-items-center">
  <input class="radio mr-10" type="radio" name="radio" checked />
  Radio
</label>

<label class="inline-flex align-items-center">
  <input class="checkbox mr-10" type="checkbox" checked required />
  I agree to the terms and agreement.
</label>
```

### Customizing Basic Button

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --checkbox-size: ...;
  --checkbox-radius: ...;
  --checkbox-bg: ...;
  --checkbox-border: ...;
  --checkbox-radius: ...;
  --checkbox-transition: ...;
  --checkbox-hover-border: ...;
  --checkbox-checked-border: ...;
  --checkbox-checked-bg: ...;
  --checkbox-disabled-border: ...;
  --checkbox-disabled-bg: ...;

  --radio-size: ...;
  --radio-radius: ...;
  --radio-bg: ...;
  --radio-border: ...;
  --radio-radius: ...;
  --radio-transition: ...;
  --radio-hover-border: ...;
  --radio-checked-border: ...;
  --radio-checked-bg: ...;
  --radio-disabled-border: ...;
  --radio-disabled-bg: ...;
}
```


---

## Toggle switch

Checkboxes can also be transformed into a toggle switch.

<div class="bg-white border-1 border-silver-200 radius-md p-20 align-center">
  <label class="toggle">
    <input type="checkbox" checked />
    <div class="toggle__switch"></div>
  </label>
</div>

```html
<label class="toggle">
  <input type="checkbox" checked />
  <div class="toggle__switch"></div>
</label>
```

### Customizing Toggle Switch

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --toggle-width: ...;
  --toggle-height: ...;
  --toggle-bg: ...;
  --toggle-transition: ...;
  --toggle-radius: ...;
  --toggle-hover-bg: ...;
  --toggle-checked-bg: ...;
  --toggle-checked-translate: ...;
  --toggle-disabled-bg: ...;
}
```


---

## Textarea

Textarea fields are similar to text input fields but supports multi-lines.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <textarea class="textarea leading-8" rows="4">Ask your question here</textarea>
</div>

```html
<textarea class="textarea leading-8" rows="4">Ask your question here</textarea>
```

### Customizing Textarea

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --textarea-hover-border: ...;
  --textarea-hover-shadow: ...;
  --textarea-focus-border: ...;
  --textarea-focus-shadow: ...;
  --textarea-disabled-bg: ...;
  --textarea-disabled-color: ...;
  --textarea-success-border: ...;
  --textarea-focus-success-shadow: ...;
  --textarea-warning-border: ...;
  --textarea-focus-warning-shadow: ...;
  --textarea-danger-border: ...;
  --textarea-focus-danger-shadow: ...;
}
```

---

## Slider

Slider provides interactive range value inputs.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <input type="range" min="0" max="360" value="186" class="slider">
</div>

```html
 <input type="range" min="0" max="360" value="186" class="slider">
```

### Customizing Slider

The following CSS variable hooks are available to customize.

```css
/* styles.css */
:root {
  --slider-track-height: ...;
  --slider-track-color: ...;

  --slider-size: ...;
  --slider-color: ...;
  --slider-radius: ...;
  --slider-hover-color: ...;
}
```

---

## Disabled form fields

All form field elements can be disabled with assigning the `disabled` attribute.

<div class="bg-white border-1 border-silver-200 radius-md p-20">
  <form>
    <div class="mb-20 last.mb-0">
      <label class="label mb-8">Email</label>
      <input class="input" placeholder="Email" value="Placeholder Text" disabled>
    </div>
    <div class="mb-20 last.mb-0">
      <label class="inline-flex align-items-center">
        <input class="checkbox mr-10" type="checkbox" checked required disabled />
        Checkbox
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <label class="inline-flex align-items-center mr-16">
        <input class="radio mr-10" type="radio" name="radio" checked disabled />
        Radio
      </label>
      <label class="inline-flex align-items-center">
        <input class="radio mr-10" type="radio" name="radio" disabled />
        Radio
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <label class="toggle">
        <input type="checkbox" checked disabled />
        <div class="toggle__switch"></div>
      </label>
    </div>
    <div class="mb-20 last.mb-0">
      <div class="select">
        <select disabled>
          <option selected>Selected</option>
          <option>Option</option>
          <option>Option</option>
        </select>
      </div>
    </div>
  </form>
</div>


---

## How to Disable this Module

By default, all modules are enabled. To disable this form module, pass `module-form` to the `excludes` setting in your configuration.

```scss
@use "uniform" as * with (
  $config: (
    excludes: (
      module-form
    )
  )
);
```