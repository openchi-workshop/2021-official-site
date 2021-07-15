<template>
  <div>
    <app-footer-map />
    <app-footer-contact />
  </div>
</template>

<script>
import AppFooterContact from "./AppFooterContact.vue";
import AppFooterMap from "./AppFooterMap";

export default {
  components: {
    AppFooterContact,
    AppFooterMap,
  },
};
</script>