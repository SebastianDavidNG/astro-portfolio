<template>
  <button @click="toggle" class="p-2 rounded bg-gray-700 text-white dark:bg-yellow-400 dark:text-black">
    {{ isDark ? '☀️ Light Mode' : '🌙 Dark Mode' }}
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
const isDark = ref(false);

const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const toggle = () => {
  isDark.value = !isDark.value;
  applyTheme();
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  isDark.value = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  applyTheme();
});
</script>