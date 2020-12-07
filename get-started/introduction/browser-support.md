---
title: Browser Support
description: Learn about Uniform's browser support standard.
date: 1000-01-04
---


## Browser Support

Out of the box, Uniform CSS looks and performs great on all the latest version of modern browsers. Uniform CSS is tested and built to support the latest stable version of **Chrome**, **Firefox**, **Edge**, and **Safari**. Uniform CSS does not support any version of IE, including IE 11.

---

## Vendor Prefixes

Uniform provides build scripts that uses the Autoprefixer package to automatically handle vendor prefixes. It uses the the following default browserlist setting (can be overwritten by modifying the npm build scripts).

To learn more about browserlist queries <a class="hover.underline" href="https://github.com/browserslist/browserslist">click here</a>.

```bash
> 0.5%, last 2 versions, Firefox ESR, not dead
```
