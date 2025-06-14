<template>
  <div>
    <FilterBar @filter="setCategory" />
    <div class="grid gap-4 md:grid-cols-2 mt-4">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import ProjectCard from './ProjectCard.vue';
import FilterBar from './FilterBar.vue';

const props = defineProps({
  projects: Array
});

const selected = ref('All');

const setCategory = (category) => {
  selected.value = category;
};

const filteredProjects = computed(() =>
  selected.value === 'All'
    ? props.projects
    : props.projects.filter(p => p.category === selected.value)
);
</script>