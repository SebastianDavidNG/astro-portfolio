<template>
  <footer ref="footerRef" class="bg-black text-green-400 py-12 mt-16">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Enlaces -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">Links</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#hero" class="hover:underline">Home</a></li>
          <li><a href="#knowledge" class="hover:underline">Skills</a></li>
          <li><a href="#projects" class="hover:underline">Projects</a></li>
          <li><a href="#contact" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <!-- Social -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">Social Links</h3>
        <ul class="flex gap-4 items-center">
          <!-- GitHub -->
          <li>
            <a
              href="https://github.com/SebastianDavidNG"
              target="_blank"
              aria-label="GitHub"
              class="social-icon transition-transform duration-300 hover:scale-125 hover:text-gray-300"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.387c.6.111.82-.261.82-.577v-2.02c-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.933 0-1.311.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.505 11.505 0 016 0c2.29-1.554 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.222 0 4.61-2.807 5.628-5.479 5.922.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </li>

          <!-- LinkedIn -->
          <li>
            <a
              href="https://www.linkedin.com/in/sebastian-david-nino-gonzalez"
              target="_blank"
              aria-label="LinkedIn"
              class="social-icon transition-transform duration-300 hover:scale-125 hover:text-[#0A66C2]"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5v15H0v-15zM7.5 8.5h4.7v2.1h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.3 6.3 7.5v8.1h-5v-7.2c0-1.7 0-4-2.5-4s-2.9 1.9-2.9 3.9v7.3h-5v-15z" />
              </svg>
            </a>
          </li>

          <!-- Email -->
          <li>
            <a
              href="mailto:sebastiandavidn@gmail.com"
              aria-label="Email"
              class="social-icon transition-transform duration-300 hover:scale-125 hover:text-[#EA4335]"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13 20 6.01V6H4zm0 12h16V8l-8 7L4 8v10z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <!-- Copyright -->
      <div class="md:text-right text-sm text-green-300">
        <p>© {{ new Date().getFullYear() }} Sebastián Niño</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.social-icon', {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out'
  });
});
</script>
