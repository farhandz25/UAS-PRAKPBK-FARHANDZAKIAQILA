<template>
  <section id="games" class="featured-games">
    <div class="container">
      <h2 class="section-title">Featured Games</h2>
      
      <div v-if="store.isLoading" class="loading">Loading games... 🎲</div>
      <div v-if="store.error" class="error">{{ store.error }}</div>

      <div v-if="!store.isLoading && !store.error" class="games-grid">
        <div class="game-card" v-for="game in store.allGames" :key="game.id">
          <div class="card-image">
            <div class="game-thumbnail">{{ game.icon }}</div>
            <div class="card-overlay">
              <button class="play-btn">Play Now</button>
            </div>
          </div>
          <div class="card-content">
            <h3 class="game-title">{{ game.title }}</h3>
            <p class="game-genre">{{ game.genre }}</p>
            <div class="game-rating">
              <span class="stars">{{ game.rating }}</span>
              <span class="price">Rp{{ game.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';

const store = useProductStore();

onMounted(() => {
  // Hanya fetch jika data games di store masih kosong
  if (store.games.length === 0) {
    store.fetchGames();
  }
});
</script>

<style scoped>
.loading, .error {
  text-align: center;
  font-size: 1.5rem;
  padding: 4rem 0;
}
.error {
  color: #f5576c;
}
</style>