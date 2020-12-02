---
title: Build Scripts
date: 1000-01-02
---


### Build Scripts

At its core, Uniform only requires Sass to compile. However, if you would like to auto-prefix for vendor support and run minification, you can do so by running the following build commands. The following **npm build commands** help perform and automate these tasks.

> By default, the build scripts will automatically input `styles.scss` and output files into the root directory. You can modify the output location inside `package.json` to change this default behavior.

---

#### uniform

The following command will compile Sass and run deep optimizations to your CSS. This is the command you should run when outputting for **production**.

```bash
npm run uniform
```

---

#### uniform:compile

The following command will only compile `styles.scss` and output `styles.css`.

```bash
npm run uniform:compile
```

---

#### uniform:watch

The following command will compile `styles.scss` file and watch for changes.

```bash
npm run uniform:watch
```

---

#### uniform:autoprefix

The following command will automatically apply **vendor prefixes** to your CSS. 

```bash
npm run uniform:autoprefix
```

> Default browserlist queries are applied (`> 0.5%, last 2 versions, Firefox ESR, not dead`). To learn more about browserlist queries <a class="hover.underline" href="https://github.com/browserslist/browserslist">click here</a>. 

---

#### uniform:groupmedia

A quality of life build script that will group multiple instances of the same media queries together and put them at the end of your stylesheet in the order of breakpoint pixel size.

```bash
npm run uniform:groupmedia
```

---

#### uniform:cleancss

The following command will run deep `level 2` minification using CleanCSS.

```bash
npm run uniform:cleancss
```
