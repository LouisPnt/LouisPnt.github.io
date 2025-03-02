<template>
  <div class="container mx-auto px-4 py-20">
    <h2 class="text-4xl font-semibold text-center mb-10">Mes Projets</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(projet, index) in projets" 
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: index * 0.2 }"
        class="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
      >
        <h3 class="text-xl font-bold">{{ projet.nom }}</h3>
        <p class="text-gray-400">{{ projet.description }}</p>
        <a :href="projet.lien" target="_blank" class="text-accent hover:underline">Voir le projet</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const projets = [
  { nom: "Portfolio Vue.js", description: "Un portfolio moderne en Vue.js et TailwindCSS", lien: "#" },
  { nom: "Application TODO", description: "Une app Vue avec Firebase", lien: "#" },
  { nom: "Jeu en JS", description: "Un petit jeu interactif en JS", lien: "#" },
];
</script>
