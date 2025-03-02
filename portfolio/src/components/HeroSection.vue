<template>
  <div class="flex flex-col items-center text-center p-10">
    <div 
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :enter="{ opacity: 1, y: 0 }"
      :transition="{ duration: 1 }"
    >
      <h1 class="text-5xl font-bold text-white">Bonjour, je suis Louis</h1>
      <p class="text-lg text-gray-400 mt-4">Développeur passionné en Vue.js & TailwindCSS</p>
    </div>
    <div 
      v-motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :enter="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.8, delay: 0.5 }"
      class="mt-6"
    >
      <img src="/profile.jpg" alt="Photo de profil" class="rounded-full w-40 border-4 border-gray-700 shadow-lg">
    </div>
  </div>
</template>
