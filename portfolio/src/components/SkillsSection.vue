<template>
    <section id="skills" class="py-20 bg-secondary text-white">
      <h2 class="text-center text-4xl font-bold mb-8">Compétences</h2>
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(skill, index) in skills" :key="index" class="p-6 bg-primary rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">{{ skill.name }}</h3>
          <p class="text-sm mt-2">{{ skill.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
          { name: "Réaliser", description: "Développement d’applications" },
          { name: "Optimiser", description: "Algorithmes et performance" },
          { name: "Administrer", description: "Configuration de systèmes" },
          { name: "Gérer", description: "Bases de données et sécurité" },
          { name: "Conduire", description: "Gestion de projet" },
          { name: "Collaborer", description: "Travail en équipe IT" }
        ]
      };
    }
  };
  </script>
  