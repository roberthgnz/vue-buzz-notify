<script setup>
import { inject, onMounted, ref } from "vue";
import { optionsKey } from "./main";
import "@reliutg/buzz-notify/dist/buzz-notify.css";

const options = inject(optionsKey);

const notify = ref(null);

const defineOptionsAttrs = (options, el) => {
  for (const key in options) {
    const value = options[key];
    el.setAttribute(`data-notify-${key}`, value);
  }
};

onMounted(() => {
  defineOptionsAttrs(options, notify.value);
});
</script>

<template>
  <div ref="notify" data-notify></div>
</template>
