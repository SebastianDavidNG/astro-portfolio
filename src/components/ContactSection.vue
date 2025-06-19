<template>
  <section id="contact" class="py-20 bg-white text-white relative z-10 dark:bg-black dark:text-black">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 animate-fadeInUp text-black dark:text-white">
        <span class="text-green-400 black:text-green-400">Get in</span> Touch
      </h2>
      <p class="text-lg text-black mb-12 animate-fadeInUp delay-200 dark:text-gray-300">
        Have a project in mind, a question, or just want to say hello? Drop me a message.
      </p>

      <form @submit.prevent="handleSubmit"
            class="grid gap-6 max-w-2xl mx-auto text-left animate-fadeInUp delay-300">
        <input
          type="text"
          placeholder="Your Name"
          v-model="form.name"
          required
          class="bg-gray-800 border border-gray-600 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          v-model="form.email"
          required
          class="bg-gray-800 border border-gray-600 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          placeholder="Your Message"
          v-model="form.message"
          required
          rows="5"
          class="bg-gray-800 border border-gray-600 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>

        <!-- reCAPTCHA -->
        <div class="g-recaptcha" :data-sitekey="recaptchaSiteKey"></div>

        <button
          type="submit"
          :disabled="loading"
          class="bg-green-400 text-black font-semibold px-6 py-3 rounded hover:bg-green-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <p v-if="submitted" class="text-green-400 text-center mt-4">
          ✅ Thank you! I’ll get back to you soon.
        </p>
        <p v-if="hasError" class="text-red-400 text-center mt-2">
          ❌ Something went wrong. Please try again later.
        </p>
      </form>
    </div>

    <transition name="fade-slide">
      <div
        v-if="submitted"
        class="fixed bottom-6 right-6 bg-green-500 text-black px-4 py-2 rounded-lg shadow-lg z-50"
      >
        ✅ Message sent successfully!
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const recaptchaSiteKey = '6LedWGQrAAAAACL3VePRG0e1IQ2gCskvS_JcsroE';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitted = ref(false);
const loading = ref(false);
const hasError = ref(false);

async function handleSubmit() {
  if (loading.value) return;

  loading.value = true;
  submitted.value = false;
  hasError.value = false;

  // Validate reCAPTCHA
  const token = grecaptcha.getResponse();
  if (!token) {
    hasError.value = true;
    loading.value = false;
    return;
  }

  try {
    const response = await fetch('https://formspree.io/f/xblykgrn', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        'g-recaptcha-response': token
      })
    });

    if (response.ok) {
      submitted.value = true;
      form.value = { name: '', email: '', message: '' };
      grecaptcha.reset();
      setTimeout(() => {
        submitted.value = false;
      }, 5000);
    } else {
      hasError.value = true;
    }
  } catch (err) {
    hasError.value = true;
  } finally {
    loading.value = false;
  }
}
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

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out both;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
