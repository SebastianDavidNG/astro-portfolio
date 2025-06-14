<template>
  <div class="mb-4 flex gap-4">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="$emit('filter', cat)"
      class="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
    >
      {{ cat }}
    </button>
  </div>
</template>
<script setup>
const categories = ['All', 'Vue', 'GSAP', 'Astro'];
</script>