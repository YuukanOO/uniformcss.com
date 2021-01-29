---
title: Build Scripts
description: Everything there is to know about build Uniform CSS.
date: 1000-01-02
---

## Build Scripts

At its core, Uniform only requires Sass to compile. However, if you would like to auto-prefix for vendor support and run minification, you can do so by running the following built-in build commands. The following **npm build commands** help perform and automate these tasks.

> By default, the build scripts will automatically input `styles.scss` and output files into the root directory. You can modify the output location inside `package.json` to change this default behavior.

{% include shortcodes/video, id: 'tLqqi5gyxQg' %}

---

### uniform

The following command will compile Sass and run deep optimizations to your CSS. This is the command you should run when outputting for **production**.

```bash
npm run uniform
```

---

### uniform:compile

The following command will only compile `styles.scss` and output `styles.css`.

```bash
npm run uniform:compile
```

---

### uniform:watch

The following command will compile `styles.scss` file and watch for changes.

```bash
npm run uniform:watch
```
