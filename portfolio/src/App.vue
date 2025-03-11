<template>
  <div>
    <header class="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 p-4 z-50">
      <nav class="container mx-auto flex justify-center space-x-6">
        <router-link to="/#about" class="text-blue-400 hover:underline">À Propos</router-link>
        <router-link to="/#education" class="text-blue-400 hover:underline">Formation</router-link>
        <router-link to="/#skills" class="text-blue-400 hover:underline">Compétences</router-link>
        <router-link to="/#projets" class="text-blue-400 hover:underline">Projets</router-link>
        <router-link to="/#experience" class="text-blue-400 hover:underline">Expérience</router-link>
        <router-link to="/#interests" class="text-blue-400 hover:underline">Centres d'Intérêt</router-link>
        <router-link to="/cv" class="text-blue-400 hover:underline">Mon CV</router-link>
      </nav>
    </header>

    <!-- Zone dynamique où les pages sont affichées -->
    <router-view />
  </div>
</template>



