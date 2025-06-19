<template>
  <nav class="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <a href="#hero" class="text-2xl font-bold text-green-400">Sebastián Niño</a>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-6">
        <li><a href="#hero" class="hover:text-green-400">Home</a></li>
        <li><a href="#knowledge" class="hover:text-green-400">Skills</a></li>
        <li><a href="#projects" class="hover:text-green-400">Projects</a></li>
        <li><a href="#contact" class="hover:text-green-400">Contact</a></li>
        <DarkToggle class="ml-4" />
      </ul>

      <!-- Hamburger Menu -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-white text-2xl focus:outline-none"
        aria-label="Toggle navigation"
      >
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade-slide">
      <div v-if="isOpen" class="md:hidden bg-gray-900 px-6 pb-6 space-y-4">
        <a href="#hero" class="block hover:text-green-400" @click="closeMenu">Home</a>
        <a href="#knowledge" class="block hover:text-green-400" @click="closeMenu">Skills</a>
        <a href="#projects" class="block hover:text-green-400" @click="closeMenu">Projects</a>
        <a href="#contact" class="block hover:text-green-400" @click="closeMenu">Contact</a>
        <DarkToggle />
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import DarkToggle from './DarkToggle.vue';

const isOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
