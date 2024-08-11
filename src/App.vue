<script setup>
import Header from "./views/layouts/Header.vue";
import Footer from "./views/layouts/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Add any additional styling here */
</style>
