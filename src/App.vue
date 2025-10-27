<template>
  <div class="app-container">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Events from "./pages/Events/Events.vue";

export default {
  name: "App",
  components: {
    Events,
    Header,
  },
};
</script>

<style>
.app-container {
  height: 100vh;
  background: #000000;
}
</style>
