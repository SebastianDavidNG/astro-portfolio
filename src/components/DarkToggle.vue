<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full bg-gray-700 dark:bg-yellow-400 text-white dark:text-black transition-colors duration-300"
    aria-label="Toggle dark mode"
    :aria-pressed="isDark.toString()"
  >
    <span v-if="isDark">☀️</span>
    <span v-else>🌙</span>
  </button>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

// Aplica modo oscuro/claro
const applyTheme = (dark) => {
  isDark.value = dark;
  const html = document.documentElement;

  if (dark) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const toggleDarkMode = () => {
  applyTheme(!isDark.value);
};

// Detectar tema actual al montar
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme === 'dark');
  } else {
    // Opción: usar preferencia del sistema si no hay guardado
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark);
  }
});
</script>
