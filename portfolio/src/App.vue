<template>
  <div>
    <header class="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 p-4 z-50">
      <nav class="container mx-auto flex justify-center space-x-6">
        <a href="#about" class="text-blue-400 hover:underline">À Propos</a>
        <a href="#education" class="text-blue-400 hover:underline">Formation</a>
        <a href="#skills" class="text-blue-400 hover:underline">Compétences</a>
        <a href="#projets" class="text-blue-400 hover:underline">Projets</a>
        <a href="#experience" class="text-blue-400 hover:underline">Expérience</a>
        <a href="#interests" class="text-blue-400 hover:underline">Centres d'Intérêt</a>
        <router-link to="/cv" class="text-blue-400 hover:underline">Mon CV</router-link>
      </nav>
    </header>

    <!-- Zone dynamique où les pages sont affichées -->
    <router-view />
  </div>
</template>
