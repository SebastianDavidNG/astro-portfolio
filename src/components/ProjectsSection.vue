<template>
  <section id="projects" class="py-24 bg-white dark:bg-gray-900 text-black dark:text-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2
        class="text-4xl md:text-5xl font-bold text-center mb-12 relative animate-fade-in-up"
      >
        <span class="text-green-400">Featured</span> Projects
        <div class="h-1 w-24 bg-green-400 mx-auto mt-4 rounded-full"></div>
      </h2>

      <!-- Filter Buttons -->
      <div class="flex justify-center gap-4 mb-12 flex-wrap">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300',
            activeCategory === cat ? 'bg-green-400 text-black' : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-green-300'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <transition-group name="fade-scale" tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
        >
          <picture>
            <source :srcset="project.image.replace('.jpg', '.webp')" type="image/webp" />
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="w-full h-64 object-cover"
            />
          </picture>

          <div
            class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4"
          >
            <h3 class="text-2xl font-semibold text-green-400 mb-2 animate-fade-in-up">{{ project.title }}</h3>
            <p class="text-sm text-gray-300 mb-4 animate-fade-in-up delay-100">{{ project.description }}</p>
            <div class="flex flex-wrap justify-center gap-2 mb-4">
              <span
                v-for="(tag, i) in project.tags"
                :key="i"
                class="bg-green-400 text-black text-xs px-2 py-1 rounded-full animate-fade-in-up delay-200"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-4">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="text-sm text-white border border-green-400 px-3 py-1 rounded hover:bg-green-400 hover:text-black"
              >Live Demo</a>
              <a
                v-if="project.repo"
                :href="project.repo"
                target="_blank"
                class="text-sm text-white border border-green-400 px-3 py-1 rounded hover:bg-green-400 hover:text-black"
              >GitHub</a>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const categories = ['All', 'Web', 'CMS', 'UI/UX'];
const activeCategory = ref('All');

const projects = [
  {
    title: 'Landing Page Astro',
    description: 'Responsive Astro-based landing with animation and dark mode.',
    image: '/images/project-astro.jpg',
    tags: ['Astro', 'Tailwind', 'GSAP'],
    category: 'Web',
    demo: '#',
    repo: '#'
  },
  {
    title: 'Vue Dashboard',
    description: 'Admin dashboard with Vue 3, Pinia, and dynamic charts.',
    image: '/images/project-vue.jpg',
    tags: ['Vue.js', 'Chart.js', 'Dark Mode'],
    category: 'Web',
    demo: '#',
    repo: '#'
  },
  {
    title: 'WordPress Site',
    description: 'Custom WordPress theme built.',
    image: '/images/carnaval-narino-2021.jpg',
    tags: ['WordPress', 'PHP'],
    category: 'CMS',
    demo: 'https://web.archive.org/web/20210517202948/https://carnavaldepasto.org/'
  },
  {
    title: 'UI Component Library',
    description: 'Reusable Vue components styled with Tailwind CSS.',
    image: '/images/project-ui.jpg',
    tags: ['Vue.js', 'Tailwind'],
    category: 'UI/UX',
    demo: '#',
    repo: '#'
  },
  {
    title: 'Multilingual Blog',
    description: 'Personal blog built with Astro and i18n support.',
    image: '/images/project-blog.jpg',
    tags: ['Astro', 'i18n'],
    category: 'CMS',
    demo: '#',
    repo: '#'
  }
];

const filteredProjects = computed(() => {
  return activeCategory.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory.value);
});
</script>

<style scoped>
.group:hover img {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}

/* Fade-in animation for section */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}

/* Transition group animations */
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
