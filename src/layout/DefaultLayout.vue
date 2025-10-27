<template>
  <main>
    <Header />
    <router-view />
  </main>
</template>
<script>
import Header from "../components/Header/Header.vue";
import Home from "../pages/Home/Home.vue";
export default {
  components: {
    Header,
    Home,
  },
};
</script>
<style></style>
