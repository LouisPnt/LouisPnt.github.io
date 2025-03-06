<template>
    <section ref="sections" id="projets" class="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900">
      <h2 class="text-4xl font-bold text-blue-400 mb-8">Mes Projets</h2>
  
      <div class="w-full max-w-4xl space-y-6">
        <!-- Projet 1 -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-blue-400 mb-2">Projet 1</h3>
          <p class="text-gray-300">
            Description du projet 1.
          </p>
          <p class="text-sm text-gray-400 mt-2">Compétences liées : Compétence 1, Compétence 2</p>
        </div>
  
        <!-- Projet 2 -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-blue-400 mb-2">Projet 2</h3>
          <p class="text-gray-300">
            Description du projet 2.
          </p>
          <p class="text-sm text-gray-400 mt-2">Compétences liées : Compétence 3, Compétence 4</p>
        </div>
  
        <!-- Projet 3 -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold text-blue-400 mb-2">Projet 3</h3>
          <p class="text-gray-300">
            Description du projet 3.
          </p>
          <p class="text-sm text-gray-400 mt-2">Compétences liées : Compétence 5, Compétence 6</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjetsSection',
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant */
  </style>