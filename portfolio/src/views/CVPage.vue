<template>
  <div class="pt-20 min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">


    <!-- Conteneur pour le CV -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
      <!-- Titre -->
      <h2 class="text-2xl font-bold text-blue-400 mb-4">Mon CV</h2>

      <!-- Iframe pour afficher le PDF -->
      <iframe src="/CV-PENET.pdf" class="w-full h-[800px] rounded-lg mb-4" frameborder="0"></iframe>

      <!-- Bouton de téléchargement -->
      <a href="/CV-PENET.pdf" download class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
        Télécharger mon CV
      </a>
    </div>

    <br>
    <!-- Bouton pour retourner au portfolio -->
    <router-link to="/" class="mb-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
      Retour au portfolio
    </router-link>
  </div>
</template>
  
<script>
export default {
  name: 'CVPage',
};
</script>

<style scoped>
/* Styles spécifiques à la page */
</style>