<template>
  <section id="hero" class="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
    <!-- Background: Matrix + Particles -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <canvas id="code-bg" class="w-full h-full"></canvas>
      <div id="particles-js" class="absolute inset-0"></div>
    </div>

    <!-- Foreground Content -->
    <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Hello, I'm <span class="text-green-400">Sebastián Niño</span>
      </h1>
      <p class="text-xl md:text-2xl text-green-300 h-10 mb-2">
        <span ref="typewriter" class="inline-block whitespace-nowrap"></span><span class="animate-pulse">|</span>
      </p>
      <p class="text-sm md:text-base text-white italic animate-fadeIn mb-6">
        Graphic Designer and Publisher, focus on Web Development
      </p>
      <div ref="ctaButtons" class="flex justify-center gap-4 opacity-0">
        <a href="#projects" class="px-6 py-3 bg-green-400 text-black font-semibold rounded-full hover:bg-green-300 hover:scale-105 transform transition duration-300">
          View Projects
        </a>
        <a href="#contact" class="px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black hover:scale-105 transform transition duration-300">
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const typewriter = ref(null);
const ctaButtons = ref(null);

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

onMounted(() => {
  // Animate elements in order
  gsap.from("h1", { opacity: 0, y: -30, duration: 1, ease: "power3.out" });
  gsap.from("p", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
  gsap.to(ctaButtons.value, { opacity: 1, y: 0, duration: 1, delay: 1.5 });

  // Start animations
  typeEffect();
  drawCodeRain();

  // Load particles.js
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
});
</script>

<style scoped>
.animate-pulse {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
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
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 2.5s;
}
</style>
