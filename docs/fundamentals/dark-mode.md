---
title: Dark Mode
description: Learn how to apply dark mode colors
date: 1000-01-08
---

## About Dark Mode

All color properties such as `background-color` and `border-color` can be applied conditionally based on dark mode.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Enabling Dark Mode

Dark mode is disabled by default, to enable, pass `true` to the `dark-mode` setting in your configuration.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    dark-mode: true
  )
);
```


---

## Basic Usage

To apply conditional dark mode colors, simply append `dark` at the beginning of your property. When you assign the class `is-dark` to your body or parent container, the dark styling will be applied.

<div class="flex align-items-center justify-content-center px-20 pb-0 pt-48 bg-primary-800 bg-deepen-3 radius-lg">
  <div>
    <div class="bg-white dark.bg-primary-900 transition-200 radius-lg overflow-hidden w-100p max-w-288">
      <img src="/assets/img/apartment.webp" class="cursor-pointer">
      <div class="relative px-20 py-24">
        <div class="flex align-items-center justify-content-center absolute t-0 r-0 mr-24 mt-n20 bg-pink bg-brighten-9 bg-lighten-3 hover.bg-lighten-1 transition-200 cursor-pointer radius-round w-40 h-40">
          <svg class="fill-current text-white w-auto h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
        </div>
        <div class="mb-20 font-lg font-bold text-pink text-brighten-9 text-lighten-1">
          $450
          <span class="text-primary-300 dark.text-primary-500 dark.text-deepen-4 transition-200 font-sm">/mo</span>
          <span class="bg-teal dark.bg-brighten-4 bg-opacity-20 dark.bg-opacity-20 text-cyan text-darken-4 dark.text-darken-2 text-brighten-9 dark.text-brighten-9 transition-200 ml-8 px-10 py-6 radius-sm font-2xs">10% discount</span>
        </div>
        <h3 class="text-black dark.text-white transition-200 font-base font-bold mb-16 cursor-pointer">
          Elizabeth Street Apartments
        </h3>
        <div class="text-primary-400 text-deepen-6 dark.text-primary-500 dark.text-deepen-4 transition-200 flex align-items-center font-xs font-semibold mb-24">
          <svg class="fill-current w-auto h-12 mr-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
          Riccarton, Christchurch
        </div>
        <div class="grid grid-cols-3">
          <div class="text-primary-400 text-deepen-6 dark.text-primary-500 dark.text-deepen-4 transition-200 flex align-items-center font-xs font-semibold">
            <svg class="text-cyan text-brighten-1 dark.text-brighten-3 fill-current w-12 h-12 mr-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488 352h-40V96c0-17.67-14.33-32-32-32H192v96h160v328c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24v-40h40c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24zM160 24c0-13.26-10.75-24-24-24H88C74.75 0 64 10.74 64 24v40H24C10.75 64 0 74.74 0 88v48c0 13.25 10.75 24 24 24h40v256c0 17.67 14.33 32 32 32h224v-96H160V24z"></path></svg>
            32 sqm
          </div>
          <div class="text-primary-400 text-deepen-6 dark.text-primary-500 dark.text-deepen-4 transition-200 flex align-items-center font-xs font-semibold">
            <svg class="fill-current text-cyan text-brighten-1 dark.text-brighten-3 w-12 h-12 mr-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80,160a32,32,0,0,1,32-32h96a32,32,0,0,1,32,32v32h32V160a32,32,0,0,1,32-32h96a32,32,0,0,1,32,32v32h48V64a32,32,0,0,0-32-32H64A32,32,0,0,0,32,64V192H80Zm368,64H64A64,64,0,0,0,0,288V464a16,16,0,0,0,16,16H48a16,16,0,0,0,16-16V416H448v48a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V288A64,64,0,0,0,448,224Z"></path></svg>
            2 rooms
          </div>
          <div class="text-primary-400 text-deepen-6 dark.text-primary-500 dark.text-deepen-4 transition-200 flex align-items-center font-xs font-semibold">
            <svg class="fill-current text-cyan text-brighten-1 dark.text-brighten-3 w-12 h-12 mr-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0,160V48A48,48,0,0,1,48,0H336a48,48,0,0,1,48,48V160H320V72a8,8,0,0,0-8-8H296a8,8,0,0,0-8,8v88Zm320,32V376a8,8,0,0,1-8,8H296a8,8,0,0,1-8-8V192H0V464a48,48,0,0,0,48,48H336a48,48,0,0,0,48-48V192Z"></path></svg>
            1 kitchen
          </div>
        </div>
      </div>
    </div>
    <div class="py-40 align-center">
      <div class="inline-flex align-items-center bg-white radius-round p-8 py-6">
        <svg class="fill-current text-black w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
        <label class="toggle mx-8">
          <input type="checkbox" class="js-home-dark-switcher">
          <div class="toggle__switch"></div>
        </label>
        <svg class="fill-current text-black w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
      </div>
    </div>
  </div>
</div>

```html
<div class="bg-white dark.bg-primary-900 transition-200 ...">
  ...
</div>
```

---

## Toggling Dark Mode

The `is-dark` class can be applied to the body or any parent element. This class will trigger all dark mode specific styling to be triggered. 

```html
<body class="is-dark">
  <div class="bg-white dark.bg-primary-900 transition-200 ...">
    ...
  </div>
</body>
```

