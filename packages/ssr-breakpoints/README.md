# @biodiversity-nuxtjs/ssr-breakpoints
[![npm (scoped with tag)](https://img.shields.io/npm/v/@biodiversity/ssr-breakpoints/latest.svg?style=flat-square)](https://npmjs.com/package/@biodiversity/ssr-breakpoints)
[![npm](https://img.shields.io/npm/dt/@biodiversity/ssr-breakpoints.svg?style=flat-square)](https://npmjs.com/package/@biodiversity/ssr-breakpoints)
[![CircleCI](https://img.shields.io/circleci/project/github/https://github.com/scbd/biodiversity-nuxtjs.git.svg?style=flat-square)](https://circleci.com/gh/https://github.com/scbd/biodiversity-nuxtjs.git)
[![Codecov](https://img.shields.io/codecov/c/github/https://github.com/scbd/biodiversity-nuxtjs.git.svg?style=flat-square)](https://codecov.io/gh/https://github.com/scbd/biodiversity-nuxtjs.git)
[![Dependencies](https://david-dm.org/https://github.com/scbd/biodiversity-nuxtjs.git/status.svg?style=flat-square)](https://david-dm.org/https://github.com/scbd/biodiversity-nuxtjs?path=packages/ssr-breakpoints)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Detect device and infer screen resolution on server or device and screen resolution breaks on client

[📖 **Release Notes**](./CHANGELOG.md)

## Features

1. get bulma breakpoints in js from server or client


## Setup
- Add `@biodiversity/ssr-breakpoints` dependency using yarn or npm to your project
```bash
  yarn add @biodiversity/ssr-breakpoints
```
```bash
  npm install @biodiversity/ssr-breakpoints
```

- Add `@biodiversity/ssr-breakpoints` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@biodiversity/ssr-breakpoints',

    // With options
    ['@biodiversity/ssr-breakpoints', { /* module options none yet*/ }],
 ]
}
```

## Usage

```html
<template>
	<section>
        <div v-if="$breakpoints.isDesktopHD">
          Desktop High Definition > 1408px
        </div>

        <div v-if="$breakpoints.isDesktopWS">
          Desktop Wide Screen 1216px from to 1407px
        </div>

        <div v-if="$breakpoints.isDesktop">
        	Desktop 1024px and until 1215px
        </div>

        <div v-if="$breakpoints.isTouch">
          Touch < 1024px
        </div>

        <div v-if="$breakpoint.isTablet">
        	Tablet 769px from to  1023px
        </div>

        <div v-if="$breakpoint.isMobile">
        	Mobile < 768px
        </div>
	</section>
</template>
```

## License

[MIT License](./LICENSE)

Copyright (c) Convention on Biological Diversity <it@cbd.int>
