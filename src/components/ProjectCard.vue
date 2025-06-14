<template>
  <div class="bg-gray-800 p-4 rounded-xl shadow-lg" ref="card">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-300">{{ description }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  title: String,
  description: String
});

const card = ref(null);

onMounted(() => {
  gsap.from(card.value, {
    opacity: 0,
    y: 20,
    duration: 0.6
  });
});
</script>