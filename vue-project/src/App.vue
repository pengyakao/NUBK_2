<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/home/Home.vue'
import Footer from './components/global/footer/index.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/search">Search</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <Footer />

</template>

<style scoped>


@media (min-width: 1024px) {
  
}
</style>
