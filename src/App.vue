<script>
import { RouterLink, RouterView } from "vue-router";
import Home from "./views/home/Home.vue";
import Footer from "./components/global/footer/index.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
#app{
  display: block;
}
</style>
