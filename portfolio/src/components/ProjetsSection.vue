<template>
  <section ref="sections" id="projets" class="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900">
    <h2 class="text-4xl font-bold text-blue-400 mb-8">Mes Projets</h2>

    <div class="w-full max-w-4xl space-y-12">
      <!-- Projet 1 : Développement d'une application web -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <!-- Image du projet -->
        <img src="/images/colis.webp" alt="Projet 1" class="w-full max-w-2xl mx-auto mb-6 rounded-lg" />
        <!-- Description du projet -->
        <div class="text-center">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">Développement d'une application web</h3>
          <p class="text-gray-300 mb-4">
            Ce projet a permis de développer une application web complète en utilisant des technologies modernes telles que HTML5, CSS3, PHP et JavaScript. L'utilisation de Docker pour administrer une base de données locale a été un point clé de ce projet. Des réunions régulières avec le client et une gestion de projet en méthode agile avec GitHub ont été mises en place pour assurer une collaboration efficace.
          </p>
          <p class="text-sm text-gray-400">
            <span class="font-semibold">Compétences du BUT : </span>
            <a @click="openModal(1)" class="text-blue-400 hover:underline cursor-pointer">Réaliser un développement d'application (1)</a>,
            <a @click="openModal(2)" class="text-blue-400 hover:underline cursor-pointer">Optimiser des applications informatiques (2)</a>,
            <a @click="openModal(6)" class="text-blue-400 hover:underline cursor-pointer">Travailler dans une équipe informatique (6)</a>.
          </p>
        </div>
      </div>

      <!-- Projet 2 : Création d'un site web de e-commerce -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <!-- Image du projet -->
        <img src="/images/greenbloom.png" alt="Projet 2" class="w-full max-w-2xl mx-auto mb-6 rounded-lg" />
        <!-- Description du projet -->
        <div class="text-center">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">Création d'un site web de e-commerce</h3>
          <p class="text-gray-300 mb-4">
            Ce projet consistait à créer un site web de e-commerce avec un panier fonctionnel et une gestion de compte utilisateur. Les technologies utilisées incluent HTML5, CSS3 et PHP, ainsi que la conception et la création d'une base de données avec PHPMyAdmin. Ce projet a nécessité une collaboration étroite au sein d'une équipe de 4 personnes.
          </p>
          <p class="text-sm text-gray-400">
            <span class="font-semibold">Compétences du BUT : </span>
            <a @click="openModal(1)" class="text-blue-400 hover:underline cursor-pointer">Réaliser un développement d'application (1)</a>,
            <a @click="openModal(2)" class="text-blue-400 hover:underline cursor-pointer">Optimiser des applications informatiques (2)</a>,
            <a @click="openModal(3)" class="text-blue-400 hover:underline cursor-pointer">Administrer des systèmes informatiques communicants complexes (3)</a>,
            <a @click="openModal(4)" class="text-blue-400 hover:underline cursor-pointer">Gérer des données de l'information (4)</a>,
            <a @click="openModal(5)" class="text-blue-400 hover:underline cursor-pointer">Conduire un projet (5)</a>,
            <a @click="openModal(6)" class="text-blue-400 hover:underline cursor-pointer">Travailler dans une équipe informatique (6)</a>.
          </p>
        </div>
      </div>

      <!-- Projet 3 : Installation et configuration d'un poste de travail sous Xubuntu -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <!-- Image du projet -->
        <img src="/images/xubuntuSAE.png" alt="Projet 3" class="w-full max-w-2xl mx-auto mb-6 rounded-lg" />
        <!-- Description du projet -->
        <div class="text-center">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">Installation et configuration d'un poste de travail sous Xubuntu</h3>
          <p class="text-gray-300 mb-4">
            Ce projet a impliqué l'installation et la configuration d'un poste de travail sous Xubuntu. Les tâches comprenaient la configuration d'une machine virtuelle via VirtualBox, l'installation des logiciels requis (Java JDK/JRE, ProjectLibre, etc.), et la rédaction de scripts Bash pour l'automatisation des tâches. Ce projet a été réalisé en binôme, avec une attention particulière portée au paramétrage du système et à la résolution des problèmes techniques.
          </p>
          <p class="text-sm text-gray-400">
            <span class="font-semibold">Compétences du BUT : </span>
            <a @click="openModal(3)" class="text-blue-400 hover:underline cursor-pointer">Administrer des systèmes informatiques communicants complexes (3)</a>.
          </p>
        </div>
      </div>
    </div>

    <!-- Fenêtre modale pour afficher les détails des compétences -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ selectedCompetence.title }}</h3>
        <p class="text-gray-300 mb-4">{{ selectedCompetence.description }}</p>
        <button @click="closeModal" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Fermer
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjetsSection',
  data() {
    return {
      isModalOpen: false,
      selectedCompetence: {},
      competences: [
        {
          id: 1,
          title: "1. Réaliser un développement d'application",
          description: "Concevoir, coder, tester et intégrer des solutions informatiques pour répondre aux besoins des clients. Cela inclut l'application de principes algorithmiques, la garantie de la qualité du code et de sa documentation, ainsi que le choix des ressources techniques adaptées."
        },
        {
          id: 2,
          title: "2. Optimiser des applications informatiques",
          description: "Proposer des solutions optimisées en fonction de critères spécifiques tels que le temps d'exécution, la précision et la consommation de ressources. Cela implique la modélisation de situations complexes, l'utilisation d'algorithmes adaptés et la validation rigoureuse des résultats."
        },
        {
          id: 3,
          title: "3. Administrer des systèmes informatiques communicants complexes",
          description: "Installer, configurer et maintenir des infrastructures, services et réseaux pour optimiser le système informatique d'une organisation. Cela inclut la sécurisation des systèmes, l'application des normes en vigueur et la garantie d'une qualité de service optimale."
        },
        {
          id: 4,
          title: "4. Gérer des données de l'information",
          description: "Concevoir, gérer et exploiter les données pour fournir des informations utiles au pilotage de l'entreprise. Cela implique le respect des réglementations sur la protection des données, la prise en compte des enjeux économiques et écologiques, et l'assurance de la cohérence et de la qualité des données."
        },
        {
          id: 5,
          title: "5. Conduire un projet",
          description: "Organiser et piloter des projets informatiques en utilisant des méthodes classiques ou agiles pour répondre aux besoins des utilisateurs. Cela inclut une démarche proactive, le respect des aspects juridiques, une communication efficace et une gestion éthique et durable."
        },
        {
          id: 6,
          title: "6. Travailler dans une équipe informatique",
          description: "Acquérir et développer les aptitudes nécessaires pour collaborer efficacement au sein d'une équipe pluridisciplinaire. Cela inclut l'intégration dans des équipes, l'accompagnement des évolutions informatiques et la promotion d'une communication collaborative."
        }
      ]
    };
  },
  methods: {
    openModal(competenceId) {
      this.selectedCompetence = this.competences.find(c => c.id === competenceId);
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>