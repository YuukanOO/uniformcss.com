---
title: Build Scripts
description: Everything there is to know about build Uniform CSS.
date: 1000-01-02
---

## Build Scripts

Sass preprocessor is the only thing you need to get up and running. Uniform CSS comes with a predefined build commands in the `package.json`. The following **npm build commands** are available.

> By default, the following build scripts will automatically input `styles.scss` and output files into the root directory. You can modify `package.json` to change the output location.

{% include shortcodes/video, id: 'tLqqi5gyxQg' %}

---

### uniform

The following command will compile your Sass with `--style compressed` enabled. This is the command you should run when outputting for **production**.

```bash
npm run uniform
```

---

### uniform:compile

The following command will compile `styles.scss` and output `styles.css`.

```bash
npm run uniform:compile
```

---

### uniform:watch

The following command will compile `styles.scss` file and watch for changes.

```bash
npm run uniform:watch
```

---

## Build Performance

Uniform CSS requires `dart-sass` version `1.27.0` and up. Using the Javascript version of Sass is slower than the stand-alone `dart` executable, therefore using the native `dart` version is recommended for fastest build time.