<template>
  <div class="client-layout">
    <TopClient />
    <MenuClient />

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopClient from "../../layout/components/TopClient.vue";
import MenuClient from "../../layout/components/MenuClient.vue";

export default {
  name: "ClientLayout",
  components: { TopClient, MenuClient },
};
</script>

<style scoped>
.client-layout {
  min-height: 100vh;
}
</style>
