<template>
    <section id="knowledge" class="relative z-10 bg-gradient-to-b from-gray-900 to-black py-20 text-white">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <div class="mb-16 animate-fadeInUp">
                <h2
                    class="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Web Design & Development Skills
                </h2>
                <p class="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fadeInUp delay-300">
                    A collection of tools, languages, and methodologies that power modern web experiences.
                </p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
                <div v-for="(skill, index) in skills" :key="index"
                    class="bg-gray-800 p-6 rounded-lg hover:bg-green-500 transition duration-300 animate-fadeInUp"
                    :style="{ animationDelay: `${100 + index * 100}ms` }" :data-index="index">
                    <h3 class="text-lg font-semibold">{{ skill.title }}</h3>
                    <p class="text-sm opacity-80 animate-type multiline">{{ skill.description }}</p>
                    <div class="relative h-24 w-24 mx-auto mt-4">
                        <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                            <path class="text-gray-700" d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2" />
                            <path :stroke-dasharray="circumference"
                                :stroke-dashoffset="dashOffset(animatedValues[index])"
                                class="text-green-400 transition-all duration-300" d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2" />
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center text-xl font-bold text-green-400">
                            {{ animatedValues[index] }}%</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const skills = [
    { title: '⚡ Front-End Development', description: 'HTML5, CSS3, JavaScript, TypeScript, Vue.js, Astro', value: 95 },
    { title: '🎨 Styling & UI', description: 'SASS, Tailwind CSS, BEM, Flexbox, Flexbox Grid', value: 90 },
    { title: '🧠 Animations', description: 'GSAP, Scroll animations, Transition Effects', value: 85 },
    { title: '🔌 Tools & Version Control', description: 'Git, Bitbucket, Docker', value: 88 },
    { title: '🌐 CMS & Frameworks', description: 'WordPress, Drupal, PHP', value: 80 },
    { title: '📱 Responsive Design', description: 'Mobile-first, Media queries, Adaptive design', value: 92 },
    { title: '🎯 SEO & Performance', description: 'Technical SEO, Optimizations, Lighthouse', value: 75 },
    { title: '🧩 UI/UX Tools', description: 'Figma, Adobe XD, Photoshop, Illustrator', value: 85 },
    { title: '🌍 Languages', description: 'English (Fluent), Spanish (Native)', value: 100 },
    { title: '🧪 Testing & Debugging', description: 'Chrome DevTools, LambdaTest, QA', value: 83 },
    { title: '📋 Project Management', description: 'Jira, Basecamp, Trello, Teamwork', value: 90 },
    { title: '🎬 Director Of Development', description: 'Projects and production leadership, strategic execution', value: 90 },
];

const animatedValues = ref(skills.map(() => 0));
const circumference = 100;

const dashOffset = (value) => {
    return circumference - (value / 100) * circumference;
};

onMounted(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = +entry.target.getAttribute('data-index');
                let count = 0;
                const target = skills[index].value;
                const step = () => {
                    if (count <= target) {
                        animatedValues.value[index] = count;
                        count++;
                        requestAnimationFrame(step);
                    } else {
                        animatedValues.value[index] = target;
                    }
                };
                step();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));
});
</script>

<style scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes type {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-out both;
}

.animate-type {
    display: inline-block;
    overflow: hidden;
    animation: type 2.5s steps(30, end) both;
    white-space: normal;
    /* Allow multiline typing */
}
</style>