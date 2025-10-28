<template>
  <div class="app-container">
    <Events />
    <Center />
  </div>
</template>

<script>
import Events from "./pages/Events/Events.vue";
import Center from "./pages/center/ContactPage.vue"

export default {
  name: "App",
  components: {
    Events,
    Center,
  },
};
</script>

<style scoped></style>
