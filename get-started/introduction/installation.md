---
title: Installation
description: Learn how to install and get started with Uniform CSS.
date: 1000-01-02
---

## Getting up and running

Uniform is super easy to get started and setup, you can either:

1. Use **npm** to install the Uniform package.
2. Use the **jsDelivr CDN** to link directly to the Uniform stylesheet.
3. Clone or download the project **directly** from the GitHub repository.

{% include shortcodes/video, id: 'GUQqC8abh6Y' %}

---

## Native installation

The native installation is the recommended way to get setup. Native setups provide the full functionality of Uniform CSS giving you access to customization, extendability, and useful helper functions.

<div class="mb-10"></div>

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">1</span> Clone and install dependencies</h4>

Make sure you have <a class="hover.underline" href="https://nodejs.org/en/"  target="_black">Node.js</a> installed. Clone the latest version of Uniform and install its dependencies.

```bash
# Clone project
git clone https://github.com/ThinkUniform/UniformCSS

# Install dependencies
npm install
```

<div class="mb-10"></div>

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">2</span> Include Uniform in sass project</h4>

Ensure the Uniform folder is in the same directory as your `styles.scss` file. Add the following line to your main sass stylesheet.

```bash
// styles.scss
@use "uniform" as *;
```

<div class="mb-10"></div>

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">3</span> Compile and watch for changes</h4>

Compile your sass file using your own build setup or optionally, you can run the following command to build your first `uniform.css`. The Uniform package also comes with default build scripts to help you compile, minify, and watch for changes, refer to the build scripts section for more information.

```bash
npm run uniform:compile
```

> By default Uniform **npm build scripts** will output to the root directory. To change the output destination, specify the location in `package.json`. For more info on other build commands refer to the page on <a class="hover.underline" href="/get-started/build-scripts/">build scripts</a>.

<div class="mb-10"></div>

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">4</span> Add compiled stylesheet</h4>

Import the compiled stylesheet and you will now have access to all the Uniform goodness, it's that simple!

```html
<link rel="stylesheet" href="styles.css" />
```

<div class="mb-10"></div>

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">3</span> Configure Uniform (optional)</h4>

You can customize Uniform directly in your sass stylesheet. For more information on what can be customized, visit the page on <a class="hover.underline" href="/get-started/configuration/">configuration</a>.

```scss
// styles.scss
@use "uniform" as * with (
  $config: (
    build: (
      important: true,
      prefix: myProject,
    ),
    theme: (
      colors: (
        custom-color-1: red,
        custom-color-2: blue
      ),
    )
    ...
  )
);
```

> If you're unfamiliar with the `@use` rule or configuring modules in this way, you can learn more about the new Sass module system <a class="hover.underline" href="https://sass-lang.com/blog/the-module-system-is-launched" target="_black">here.</a>

---

## Using the jsDelivr CDN

For a even quicker way to get started, simply add the following in the head of your project.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/uniformcss@1.0.0/uniform.css"
/>
```

> Unlike the native installation, using the pre-packaged version of Uniform will only allow for customizations for attributes such as fonts, sizes and colors, you will not get access to more advanced customization options such as prefixing, custom variants, and adding of custom breakpoints.

---

## Install with NPM

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">1</span> Install the UniformCSS node package</h4>

Run the following command to install Uniform as a package.

```bash
npm i uniformcss
```

<div class="mb-10"></div>

<h4><span class="w-24 h-24 mr-8 inline-flex align-items-center justify-content-center font-sm font-600 leading-0 bg-silver-200 leading-0 text-black radius-round">2</span> Include Uniform in sass project</h4>

Ensure the Uniform folder is in the same directory as your `styles.scss` file. Add the following line to your main sass stylesheet.

```bash
@use "../node_modules/uniformcss/uniform" as *;
```

<div class="mb-10"></div>

---

## Download Project Directly

To download the project directly, please visit the Github repository.

<a class="font-semibold hover.underline" href="https://github.com/ThinkUniform/UniformCSS" target="_blank">Visit Github Repository</a>
