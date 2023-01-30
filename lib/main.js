import { Notify } from "@reliutg/buzz-notify";

import BuzzNotifyContainer from "./BuzzNotifyContainer.vue";

export const optionsKey = Symbol();

export function BuzzNotify(app, options) {
  app.provide(optionsKey, {
    ...options,
  });

  app.component("BuzzNotifyContainer", BuzzNotifyContainer);

  app.config.globalProperties.$buzzNotify = Notify;

  console.log("hello", options);
}
