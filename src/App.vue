<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import AdminLayout from "./layout/components/AdminLayout.vue";
import ClientLayout from "./layout/components/ClientLayout.vue";

const default_layout = "client";

export default {
  components: {
    "admin-layout": AdminLayout,
    "client-layout": ClientLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>
