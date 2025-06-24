<template>
  <section
    id="hero"
    class="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden pt-24"
  >
    <!-- Background: Matrix + Particles -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <canvas id="code-bg" class="w-full h-full"></canvas>
      <!-- <div id="particles-js" class="absolute inset-0"></div> -->
    </div>

    <!-- Foreground Content -->
    <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 dark:text-green-400">
        Hello, I'm <span class="text-green-400 dark:text-white">Sebastián Niño</span>
      </h1>
      <p class="text-xl md:text-2xl text-green-300 h-10 mb-2 dark:text-white">
        <span ref="typewriter" class="inline-block whitespace-nowrap"></span><span class="animate-pulse">|</span>
      </p>
      <p class="text-sm md:text-base text-white italic animate-fadeIn mb-6 dark:text-green-400">
        Graphic Designer and Publisher, focus on Web Development
      </p>
      <div ref="ctaButtons" class="flex justify-center gap-4 opacity-0">
        <a
          href="#projects"
          class="px-6 py-3 bg-green-400 text-black font-semibold rounded-full hover:bg-green-300 hover:scale-105 transform transition duration-300 dark:text-black dark:bg-white dark:hover:bg-green-500"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black hover:scale-105 transform transition duration-300 dark:border-white dark:text-white dark:hover:bg-green-500"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>

  <!-- WhatsApp Button -->
  <div
    class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[200] w-20 h-20 cursor-pointer animate-float"
    @click="openWhatsApp"
    aria-label="Chat on WhatsApp"
  >
    <div ref="lottieBtn" class="absolute inset-0 scale-150"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <svg
        class="w-10 h-10 text-[#25D366]"
        fill="currentColor"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0C7.164 0 0 6.961 0 15.552c0 2.742.745 5.36 2.164 7.688L0 32l9.08-2.453C11.268 30.36 13.6 31.104 16 31.104c8.836 0 16-6.961 16-15.552S24.836 0 16 0zm0 28.736c-2.145 0-4.267-.574-6.124-1.688l-.439-.256-5.388 1.453 1.44-5.027-.287-.48c-1.264-2.08-1.932-4.452-1.932-6.944 0-7.137 6.164-12.944 13.76-12.944s13.76 5.807 13.76 12.944-6.164 12.944-13.76 12.944z"/>
        <path d="M24.12 20.56l-3.4-1.44c-.44-.192-.92-.08-1.2.272l-.6.768c-.28.36-.72.456-1.12.288-1.52-.624-3.04-2.12-4.04-3.72-.24-.376-.2-.848.104-1.176l.6-.648c.28-.312.36-.8.2-1.2l-1.44-3.44c-.24-.56-.92-.8-1.48-.584l-.56.216c-.8.304-1.36 1.032-1.36 1.872.016 1.36.528 3.112 1.56 4.928 1.44 2.56 3.6 4.68 6.24 5.72.976.392 2.032.6 3.056.6.944 0 1.864-.312 2.584-.872l.472-.352c.472-.352.64-1 .408-1.576z"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import lottie from 'lottie-web';

const typewriter = ref(null);
const ctaButtons = ref(null);
const lottieBtn = ref(null);


const skills = [
  'Front-End Developer',
  'Vue.js & GSAP',
  'Astro & TypeScript',
  'SASS',
  'Tailwind',
  'UI/UX',
  'Responsive Interfaces'
];

let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentSkill = skills[skillIndex];
  const currentText = isDeleting
    ? currentSkill.substring(0, charIndex--)
    : currentSkill.substring(0, charIndex++);

  if (typewriter.value) {
    typewriter.value.textContent = currentText;
  }

  let delay = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentSkill.length + 1) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    skillIndex = (skillIndex + 1) % skills.length;
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

function drawCodeRain() {
  const canvas = document.getElementById("code-bg");
  const ctx = canvas.getContext("2d");

  if (!canvas || !ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = "01<>/[]{}#%$@=+*~".split("");
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];

      const gradient = ctx.createLinearGradient(0, drops[i] * fontSize - fontSize, 0, drops[i] * fontSize);
      gradient.addColorStop(0, "#4ade80");
      gradient.addColorStop(1, "#4ade80");
      ctx.fillStyle = gradient;

      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 33);
}

function openWhatsApp() {
  window.open('https://wa.me/573112382256', '_blank');
}

onMounted(() => {
  gsap.from("h1", { opacity: 0, y: -30, duration: 1, ease: "power3.out" });
  gsap.from("p", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
  gsap.to(ctaButtons.value, { opacity: 1, y: 0, duration: 1, delay: 1.5 });

  typeEffect();
  drawCodeRain();

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/particles.js';
  script.onload = () => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: '#ffffff' },
        line_linked: { enable: true, color: '#ffffff' },
        move: { enable: true, speed: 1 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'repulse' },
        }
      }
    });
  };
  document.body.appendChild(script);

  // Load WhatsApp Lottie Animation
  lottie.loadAnimation({
    container: lottieBtn.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/0cbf409e-a187-419a-8705-9061a9d326a3/rRymn0M4Rm.json'
  });
});
</script>

<style scoped>
.animate-pulse {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

canvas#code-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

@keyframes fadeIn {
  from {
    opacity: 1;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0.7);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.animate-zoom-in {
  animation: zoomIn 0.6s ease-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-float {
  animation: float 2.5s ease-in-out infinite;
}
</style>
