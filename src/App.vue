<template>
  <div id="app-container">
    <Navbar 
      :is-menu-open="isMenuOpen" 
      @toggle-menu="toggleMenu"
      @close-menu="closeMenu"
    />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
main {
  /* Memberi ruang agar konten tidak tertutup navbar fixed */
  padding-top: 65px; 
}
</style>