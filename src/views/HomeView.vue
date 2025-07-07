<template>
  <section id="home" class="hero">
    <div class="hero-gradient" :style="{ background: currentGradient }"></div>
    <div class="hero-bg-elements">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
      <div class="floating-shape shape-5"></div>
      <div class="floating-shape shape-6"></div>
    </div>
    <div class="particles">
      <div class="particle" v-for="n in 30" :key="n" :style="getParticleStyle()"></div>
    </div>
    <div class="hero-main">
      <div class="hero-content">
        <div class="welcome-badge" :class="{ visible: welcomeVisible }">
          <span class="badge-icon">🎯</span>
          <span class="badge-text">Welcome to the Future of Gaming</span>
        </div>
        <h1 class="hero-title">
          <span class="title-main">Discover Your Next</span>
          <span class="title-highlight">{{ typedText }}</span>
          <span class="cursor" :class="{ blink: cursorBlink }">|</span>
        </h1>
        <p class="hero-description">
          Yuk, jelajahi dunia penuh kemungkinan seru! Dari petualangan seru sampai teka-teki yang bikin mikir, temukan game favoritmu di koleksi premium pilihan kami.
        </p>
        <div class="hero-stats">
          <div class="stat-card" v-for="(stat, index) in heroStats" :key="index" :class="{ visible: statsVisible }" :style="{ animationDelay: index * 0.2 + 's' }">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-info">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div class="hero-actions">
          <button class="cta-btn primary" @click="exploreGames">
            <span class="btn-text">Explore Games</span>
            <span class="btn-icon">🚀</span>
          </button>
          <button class="cta-btn secondary" @click="watchTrailer">
            <span class="btn-icon">▶️</span>
            <span class="btn-text">Watch Trailer</span>
          </button>
        </div>
      </div>
      <div class="hero-visual">
         </div>
    </div>
    <div class="scroll-indicator" :class="{ visible: scrollIndicatorVisible }">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span class="scroll-text">Scroll to explore more</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// State for animations and dynamic content
const welcomeVisible = ref(false);
const statsVisible = ref(false);
const scrollIndicatorVisible = ref(false);
const typedText = ref('');
const cursorBlink = ref(true);
const currentGradient = ref('linear-gradient(135deg, #667eea 0%, #764ba2 100%)');

// Static data
const heroStats = ref([
  { icon: '🎮', number: '1000+', label: 'Games Available' },
  { icon: '👥', number: '50K+', label: 'Active Players' },
  { icon: '⭐', number: '4.9', label: 'Average Rating' },
  { icon: '🏆', number: '100+', label: 'Awards Won' }
]);

const typeTexts = ['Epic Adventure', 'Thrilling Experience', 'Gaming Journey'];
let currentTypeText = 0;
let typeIndex = 0;

// Methods
const initializeAnimations = () => {
  setTimeout(() => welcomeVisible.value = true, 500);
  setTimeout(() => statsVisible.value = true, 1000);
  setTimeout(() => scrollIndicatorVisible.value = true, 2000);
};

const startTypeWriter = () => {
  const type = () => {
    const currentText = typeTexts[currentTypeText];
    if (typeIndex < currentText.length) {
      typedText.value += currentText.charAt(typeIndex);
      typeIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  };

  const erase = () => {
    if (typedText.value.length > 0) {
      typedText.value = typedText.value.slice(0, -1);
      setTimeout(erase, 50);
    } else {
      currentTypeText = (currentTypeText + 1) % typeTexts.length;
      typeIndex = 0;
      setTimeout(type, 500);
    }
  };
  
  type();
  setInterval(() => cursorBlink.value = !cursorBlink.value, 500);
};

const exploreGames = () => {
  router.push('/products');
};

const watchTrailer = () => {
  alert('Trailer functionality coming soon!');
};

const getParticleStyle = () => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    fontSize: `${Math.random() * 10 + 5}px`
  };
};

onMounted(() => {
  initializeAnimations();
  startTypeWriter();
});
</script>