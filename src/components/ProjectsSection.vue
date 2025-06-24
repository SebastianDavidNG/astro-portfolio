<template>
    <section id="projects" class="py-24 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 relative animate-fade-in-up">
                <span class="text-green-400">Featured</span> Projects
                <div class="h-1 w-24 bg-green-400 mx-auto mt-4 rounded-full"></div>
            </h2>

            <!-- Filter Buttons -->
            <div class="flex justify-center gap-4 mb-12 flex-wrap">
                <button v-for="cat in categories" :key="cat" @click="activeCategory = cat" :class="[
                    'px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300',
                    activeCategory === cat ? 'bg-green-400 text-black' : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-green-300'
                ]">
                    {{ cat }}
                </button>
            </div>

            <transition-group name="fade-scale" tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(project, index) in filteredProjects" :key="project.title"
                    class="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                    <picture>
                        <source
                            :srcset="`
                                ${project.image.replace('.jpg', '-640.webp')} 640w,
                                ${project.image.replace('.jpg', '-1024.webp')} 1024w,
                                ${project.image.replace('.jpg', '.webp')} 1920w
                            `"
                            type="image/webp"
                        />
                            <img
                                :src="project.image"
                                :alt="project.title"
                                loading="lazy"
                                decoding="async"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                class="w-full h-64 object-cover"
                            />
                    </picture>

                    <div
                        class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                        <h3 class="text-2xl font-semibold text-green-400 mb-2 animate-fade-in-up">{{ project.title }}
                        </h3>
                        <p class="text-sm text-gray-300 mb-4 animate-fade-in-up delay-100">{{ project.description }}</p>
                        <div class="flex flex-wrap justify-center gap-2 mb-4">
                            <span v-for="(tag, i) in project.tags" :key="i"
                                class="bg-green-400 text-black text-xs px-2 py-1 rounded-full animate-fade-in-up delay-200">
                                {{ tag }}
                            </span>
                        </div>
                        <div class="flex gap-4">
                            <a v-if="project.demo" :href="project.demo" target="_blank"
                                class="text-sm text-white border border-green-400 px-3 py-1 rounded hover:bg-green-400 hover:text-black">Live
                                Demo</a>
                            <a v-if="project.repo" :href="project.repo" target="_blank"
                                class="text-sm text-white border border-green-400 px-3 py-1 rounded hover:bg-green-400 hover:text-black">GitHub</a>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const categories = ['All', 'Web', 'CMS', 'Landing Page'];
const activeCategory = ref('All');

const projects = [
    {
        title: 'Landing Page Astro',
        description: 'Responsive Astro-based landing with animation.',
        image: '/images/my-porfolio.jpg',
        tags: ['Astro', 'Tailwind', 'GSAP'],
        category: 'Web',
        demo: 'https://sebastiandng.com/',
        repo: 'https://github.com/SebastianDavidNG/astro-portfolio'
    },
    {
        title: 'Drupal Site',
        description: 'Template adjusted to the approved design along with views and blocks for displaying and loading content and responsive.',
        image: '/images/revista-policia.jpg',
        tags: ['Drupal', 'PHP'],
        category: 'CMS',
        demo: 'https://revista.policia.gov.co:8000/'
    },
    {
        title: 'WordPress Site',
        description: 'Custom WordPress theme built.',
        image: '/images/lacaro.jpg',
        tags: ['WordPress', 'PHP'],
        category: 'CMS',
        demo: 'https://web.archive.org/web/20231020061324/http://lacaro.com.co/'
    },
    {
        title: 'HTML Web',
        description: 'Responsive website.',
        image: '/images/etiquetayeventos.jpg',
        tags: ['HTML', 'CSS', 'Jquery', 'JavaScript'],
        category: 'Web',
        demo: 'https://web.archive.org/web/20140517054946/http://etiquetayeventos.com/'
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
        title: 'Wordpress Site',
        description: 'Admin dashboard with Vue 3, Pinia, and dynamic charts.',
        image: '/images/nicolas-laverde.jpg',
        tags: ['WordPress', 'PHP'],
        category: 'CMS',
        demo: 'https://web.archive.org/web/20200430075438/http://nicolaslaverde.com/'
    },
    {
        title: 'WordPress Site',
        description: 'Custom WordPress theme built.',
        image: '/images/restaurante-carnaval.jpg',
        tags: ['WordPress', 'PHP'],
        category: 'CMS',
        demo: 'https://web.archive.org/web/20181118125558/http://restaurantecarnaval.com/'
    },
    {
        title: 'WordPress Site',
        description: 'Custom WordPress theme built.',
        image: '/images/flor-mantel.jpg',
        tags: ['WordPress', 'PHP'],
        category: 'CMS',
        demo: 'https://web.archive.org/web/20190101142609/http://florymantel.com/'
    },
    {
        title: 'HTML Web',
        description: 'Responsive website.',
        image: '/images/sombreros-p.jpg',
        tags: ['CSS', 'HTML', 'Jquery', 'JavaScript'],
        category: 'Web',
        demo: 'https://web.archive.org/web/20181228150102/http://sombrerospublicitarios.com/'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/geneys-lp.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/GEN/gen-avtex-partner-roadshow-q2-2022/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/geneys-lp-2.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/GEN/gen-reseller-partner-recruitment-q3-2022/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/geneys-lp-3.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/GEN/gen-partner-conference-roadshow-q3-22/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/cisco-lp.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/CIS/csco-cisco-live-europe-q4-22/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/cisco-lp-2.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/CIS/csco-cisco-live-europe-oct-16th-q4-22/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/cisco-lp-3.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/CIS/csco-2024ocpglobalsummit-emily-q3-24/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/motorola-lp.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/MOT/mimc-plte-abm-lp-media-campaign-q1-22/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/zebra-lp-1.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/ZEB/zgl_ev_battery_lead_generation_campaign_q2-24/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/zebra-lp-2.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/ZEB/zgl-usps-abm-campaign/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3.',
        image: '/images/zebra-lp-3.jpg',
        tags: ['Vue', 'SCSS',],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/ZEB/zch-tablet-and-territory-assets-q2-24/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with HTML and GSAP.',
        image: '/images/dfin-lp-1.jpg',
        tags: ['HTML', 'JavaScript', 'SCSS', 'GSAP'],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/DF/dfin-2023-ipo-handbook/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with HTML and GSAP.',
        image: '/images/dfin-lp-2.jpg',
        tags: ['HTML', 'JavaScript', 'SCSS', 'GSAP'],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/DF/dfin-2024-more-is-more-q1-24/index-activedisclosure-monster.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with HTML and GSAP and hero variations if URL changes. ?segment=man, ?segment=office, ?segment=typography, ?segment=balance',
        image: '/images/dfin-lp-3.jpg',
        tags: ['HTML', 'JavaScript', 'SCSS', 'GSAP'],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/DF/dfin-2024-more-is-more-q1-24/index-activedisclosure-campaing.html?segment=office'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with Vue 3 and GSAP animations.',
        image: '/images/choice-lp.jpg',
        tags: ['Vue', 'SCSS', 'GSAP', 'Slick Slider'],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/CHOIC/chh-upscale-by-choice/dist/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with GSAP animations.',
        image: '/images/imi-lp-1.jpg',
        tags: ['HTML', 'SCSS', 'GSAP'],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/QVI/imi-motion-control-awareness/index.html'
    },
    {
        title: 'Landing Page',
        description: 'Responsive Landing Page with GSAP animations.',
        image: '/images/imi-lp-2.jpg',
        tags: ['HTML', 'SCSS', 'GSAP'],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/QVI/imi-nas-lp/index.html'
    },
    {
        title: 'Microsite',
        description: 'Responsive Microsite Page with GSAP animations.',
        image: '/images/imi-lp-3.jpg',
        tags: ['HTML', 'SCSS', 'GSAP'],
        category: 'Landing Page',
        demo: 'https://devbox.rabinovicionline.com/projects/QVI/imi-fluid-control-microsite/index.html'
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
.fade-scale-enter-active,
.fade-scale-leave-active {
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
