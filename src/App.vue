<template>
  <div class="app-container">
    <DefaultLayout />
  </div>
</template>

<script>
import DefaultLayout from "./layout/DefaultLayout.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
};
</script>

<style>
.app-container {
  height: 100vh;
  background: #000000;
}
</style>
