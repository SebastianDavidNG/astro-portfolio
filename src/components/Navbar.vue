<template>
  <nav class="bg-gray-900 text-white px-6 py-4 fixed w-full z-50 top-0 shadow-lg">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#hero" class="text-2xl font-bold text-green-400">Sebastián Niño</a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex gap-6">
        <li><a href="#hero" class="hover:text-green-400">Home</a></li>
        <li><a href="#knowledge" class="hover:text-green-400">Skills</a></li>
        <li><a href="#projects" class="hover:text-green-400">Projects</a></li>
        <li><a href="#contact" class="hover:text-green-400">Contact</a></li>
      </ul>

      <!-- Dark mode toggle -->
      <div class="hidden md:block ml-4">
        <DarkToggle />
      </div>

      <!-- Mobile menu toggle -->
      <button class="md:hidden" @click="isOpen = !isOpen">
        <span v-if="!isOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden mt-4 space-y-3 px-6">
      <a href="#hero" class="block hover:text-green-400">Home</a>
      <a href="#knowledge" class="block hover:text-green-400">Skills</a>
      <a href="#projects" class="block hover:text-green-400">Projects</a>
      <a href="#contact" class="block hover:text-green-400">Contact</a>
      <DarkToggle />
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
// import DarkToggle from './DarkToggle.vue';

const isOpen = ref(false);
</script>