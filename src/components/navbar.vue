<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <RouterLink to="/"><h2>🎮 farhan Store</h2></RouterLink>
      </div>
      <ul class="nav-menu" :class="{ active: isMenuOpen }" id="nav-menu">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" @click="emit('close-menu')">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/products" class="nav-link" @click="emit('close-menu')">Games</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link" @click="emit('close-menu')">About</RouterLink>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link" @click="handleContactClick">Contact</a>
        </li>
      </ul>
      <div class="nav-toggle" @click="emit('toggle-menu')" :aria-expanded="isMenuOpen ? 'true' : 'false'" aria-controls="nav-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';

const props = defineProps({
  isMenuOpen: Boolean
});

const emit = defineEmits(['toggle-menu', 'close-menu']);

const router = useRouter();

const handleContactClick = () => {
  emit('close-menu');
  // Jika sedang tidak di halaman utama, pindah dulu baru scroll
  if (router.currentRoute.value.path !== '/') {
    router.push('/#contact');
  }
}
</script>

<style scoped>
.nav-logo a {
  text-decoration: none;
  color: inherit;
}
.router-link-exact-active {
  color: #667eea; /* Memberi highlight pada link yang aktif */
}
</style>