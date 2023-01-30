[![GitHub issues](https://img.shields.io/github/issues/HolaSoyGonZzA/vue-buzz-notify)](https://github.com/HolaSoyGonZzA/vue-buzz-notify/issues) [![GitHub forks](https://img.shields.io/github/forks/HolaSoyGonZzA/vue-buzz-notify)](https://github.com/HolaSoyGonZzA/vue-buzz-notify/network) [![GitHub stars](https://img.shields.io/github/stars/HolaSoyGonZzA/vue-buzz-notify)](https://github.com/HolaSoyGonZzA/vue-buzz-notify/stargazers)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# VueBuzzNotify

Small and Clean Toast Notifications

```js
import { BuzzNotify } from "vue-buzz-notify";
import "vue-buzz-notify/style.css";

const Vue = createApp(App);

// Define global options for all notifications.
Vue.use(BuzzNotify, {
    duration: 2000 // ms
});
...
```

Define the notification container:

```html
<template>
  <button @click="$buzzNotify({ title: 'My notification', type: 'danger' })">
    Notify
  </button>
  <BuzzNotifyContainer />
</template>
```

## Features

✨ Beautiful and easy to use
😊 Lightweight
❤️ Strongly typed

## Demo

https://buzz-notify-docs.vercel.app

## Install

```bash
npm install vue-buzz-notify
```

## Customization

### Customize the styles

```css
:root {
  --bzn-trans-cubic-bezier: cubic-bezier(0.215, 0.61, 0.455, 1);
  --bzn-trans-duration: 0.4s;
  --bzn-color-success: #155724;
  --bzn-background-color-success: #d4edda;
  --bzn-border-color-success: #c3e6cb;
  --bzn-color-danger: #721c24;
  --bzn-background-color-danger: #f8d7da;
  --bzn-border-color-danger: #f5c6cb;
  --bzn-color-warning: #856404;
  --bzn-background-color-warning: #fff3cd;
  --bzn-border-color-warning: #ffeeba;
}
```

## Options

```javascript
$buzzNotify({
  /**
   * Title of the notification
   */
  title: string;
  /**
   * Sets the HTML markup contained within the notification.
   */
  html?: string;
  /**
   * Sets the type of the notification.
   * @defaultvalue "success"
   */
  type?: Type;
  /**
   * Sets the position of the notification.
   * @defaultvalue "top-right"
   */
  position?: Position;
  /**
   * Auto close notification. Set in ms (milliseconds). If the duration is a negative number, the notification will not be removed.
   * @defaultvalue 3000
   */
  duration?: number;
  /**
   * Sets the transition effect.
   * @defaultvalue "fade"
   */
  transition?: Transition;
  /**
   * Sets the configuration of the notification.
   */
  config?: {
    /**
     * Override the default icons.
     */
    icons: Icons;
  } | null;
});
```

### Based on

https://github.com/euvl/vue-notification
