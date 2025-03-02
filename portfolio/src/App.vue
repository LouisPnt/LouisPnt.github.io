<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const title = ref(null);

onMounted(() => {
  gsap.from(title.value, { opacity: 0, y: -50, duration: 1 });
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 ref="title" class="text-5xl font-bold text-blue-400">
      Mon Portfolio 🚀
    </h1>
  </div>
</template>
