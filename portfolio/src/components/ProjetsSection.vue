<template>
  <section ref="sections" id="projets" class="min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-gray-900">
    <h2 class="text-4xl font-bold text-blue-400 mb-8">Mes Projets</h2>

    <div class="w-full max-w-4xl space-y-12">

    <!-- PROJETS VISUALISATION DONNEES -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        
        <!-- Conteneur FLEX : Aligne Bouton gauche - Image - Bouton droite -->
        <div class="flex items-center justify-center gap-2 md:gap-6 mb-6">
          
          <!-- Bouton Précédent (Flèche gauche) -->
          <button 
            @click="prevDataVisImage" 
            class="flex-shrink-0 bg-gray-700 hover:bg-gray-600 text-white p-2 md:p-3 rounded-full focus:outline-none transition-colors"
            aria-label="Image précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Conteneur de l'image (au centre) -->
          <div class="relative w-full max-w-2xl overflow-hidden rounded-lg shadow-sm">
            <!-- Image active affichée -->
            <img 
              :src="dataVisImages[currentIndexDataVis]" 
              alt="Projets de visualisation de données" 
              class="w-full h-auto object-cover rounded-lg transition-all duration-300" 
            />
          </div>

          <!-- Bouton Suivant (Flèche droite) -->
          <button 
            @click="nextDataVisImage" 
            class="flex-shrink-0 bg-gray-700 hover:bg-gray-600 text-white p-2 md:p-3 rounded-full focus:outline-none transition-colors"
            aria-label="Image suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        <!-- Description du projet -->
        <div class="text-center">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">Création d'indicateurs de données</h3>
          <p class="text-gray-300 mb-4">
            Durant mon master puis sur mon temps libre, j'ai eu l'occasion de réaliser des visualisations de données à l'aide du logiciel <strong>Tableau</strong> (projet universitaire accessible sur 
              <a href="https://public.tableau.com/views/Classeur_fifa/Histoire1?:language=fr-FR&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" class="text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors" target="_blank">Tableau Public</a>). 
            Pour réaliser ces deux séries d'indicateurs, je me suis basé sur des jeux de données libres ou réalisés par des amis.
          </p>
        </div>
      </div>

<!-- PROJET DE RECHERCHE -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        
        <!-- Conteneur FLEX : Aligne Bouton gauche - Image - Bouton droite -->
        <div class="flex items-center justify-center gap-2 md:gap-6 mb-6">
          
          <!-- Bouton Précédent -->
          <button 
            @click="prevRechercheImage" 
            class="flex-shrink-0 bg-gray-700 hover:bg-gray-600 text-white p-2 md:p-3 rounded-full focus:outline-none transition-colors"
            aria-label="Image précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Conteneur de l'image (au centre) -->
          <div class="relative w-full max-w-2xl overflow-hidden rounded-lg shadow-sm">
            <!-- Image active affichée -->
            <img 
              :src="rechercheImages[currentIndexRecherche]" 
              alt="Projets de recherche" 
              class="w-full h-auto object-cover rounded-lg transition-all duration-300" 
            />

            <!-- Indicateurs de position (points) -->
            <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
              <button 
                v-for="(img, index) in rechercheImages" 
                :key="index"
                @click="currentIndexRecherche = index"
                :class="['w-2.5 h-2.5 rounded-full shadow-md transition-colors', currentIndexRecherche === index ? 'bg-blue-400' : 'bg-white/60 hover:bg-white']"
                :aria-label="`Aller à l'image ${index + 1}`"
              ></button>
            </div>
          </div>

          <!-- Bouton Suivant -->
          <button 
            @click="nextRechercheImage" 
            class="flex-shrink-0 bg-gray-700 hover:bg-gray-600 text-white p-2 md:p-3 rounded-full focus:outline-none transition-colors"
            aria-label="Image suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
                
        <!-- Description du projet -->
        <div class="text-center">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">Projet de recherche de M1 : Comment faire de l'apprentissage de métriques éthique ?</h3>
          <p class="text-gray-300 mb-4">
            Durant quelques mois, j'ai découvert le monde de la recherche en travaillant en binôme sur un sujet primordial : l'apprentissage "éthique" de métriques en <strong> Machine Learning </strong>.
            En effet, le Machine Learning commence à être employé dans de nombreux domaines et il est important de réfléchir à la manière dont le modèle 
            considère les données qu'il reçoit lorsque cela concerne des informations sensibles comme le genre ou l'ethnie, afin de ne pas produire de manière
            inconsciente des stéréotypes discriminants.
          </p>
        </div>
      </div>


      <!-- Projet 1 : Développement d'une application web -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <!-- Image du projet -->
        <img src="/images/colis.webp" alt="Projet 1" class="w-full max-w-2xl mx-auto mb-6 rounded-lg" />
        <!-- Description du projet -->
        <div class="text-center">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">Développement d'une application web</h3>
          <p class="text-gray-300 mb-4">
            Ce projet a permis de développer une application web complète en utilisant des technologies modernes telles que <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>PHP</strong> et <strong>JavaScript</strong>. L'utilisation de <strong>Docker</strong> pour administrer une base de données locale a été un point clé de ce projet. Des réunions régulières avec le client et une gestion de projet en <strong>méthode agile</strong> avec <strong>GitHub</strong> ont été mises en place pour assurer une collaboration efficace.
          </p>
          <p class="text-sm text-gray-400">
            <span class="font-semibold">Compétences du BUT : </span>
            <a @click="openModal(1)" class="text-blue-400 hover:underline cursor-pointer">Réaliser un développement d'application (1)</a>,
            <a @click="openModal(2)" class="text-blue-400 hover:underline cursor-pointer">Optimiser des applications informatiques (2)</a>,
            <a @click="openModal(6)" class="text-blue-400 hover:underline cursor-pointer">Travailler dans une équipe informatique (6)</a>
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
            Ce projet consistait à créer un site web de e-commerce avec un panier fonctionnel et une gestion de compte utilisateur. Les technologies utilisées incluent <strong>HTML5</strong>, <strong>CSS3</strong> et <strong>PHP</strong>, ainsi que la conception et la création d'une base de données avec <strong>PHPMyAdmin</strong>. Ce projet a nécessité une collaboration étroite au sein d'une équipe de 4 personnes.
          </p>

          <p class="text-sm text-gray-400">
            <span class="font-semibold">Compétences du BUT : </span>
            <a @click="openModal(1)" class="text-blue-400 hover:underline cursor-pointer">Réaliser un développement d'application (1)</a>,
            <a @click="openModal(2)" class="text-blue-400 hover:underline cursor-pointer">Optimiser des applications informatiques (2)</a>,
            <a @click="openModal(3)" class="text-blue-400 hover:underline cursor-pointer">Administrer des systèmes informatiques communicants complexes (3)</a>,
            <a @click="openModal(4)" class="text-blue-400 hover:underline cursor-pointer">Gérer des données de l'information (4)</a>,
            <a @click="openModal(5)" class="text-blue-400 hover:underline cursor-pointer">Conduire un projet (5)</a>,
            <a @click="openModal(6)" class="text-blue-400 hover:underline cursor-pointer">Travailler dans une équipe informatique (6)</a>
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
            Ce projet a impliqué l'installation et la configuration d'un poste de travail sous <strong>Xubuntu</strong>. Les tâches comprenaient la configuration d'une machine virtuelle via <strong>VirtualBox</strong>, l'installation des logiciels requis (<strong>Java JDK/JRE</strong>, <strong>ProjectLibre</strong>, etc.), et la rédaction de scripts <strong>Bash</strong> pour l'automatisation des tâches. Ce projet a été réalisé en binôme, avec une attention particulière portée au paramétrage du système et à la résolution des problèmes techniques.
          </p>
          <p class="text-sm text-gray-400">
            <span class="font-semibold">Compétences du BUT : </span>
            <a @click="openModal(3)" class="text-blue-400 hover:underline cursor-pointer">Administrer des systèmes informatiques communicants complexes (3)</a>
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

      rechercheImages: [
        '/images/projet_recherche_1.png',
        '/images/projet_recherche_2.png',
        '/images/projet_recherche_3.png',
        '/images/projet_recherche_4.png',
        '/images/projet_recherche_5.png',
        '/images/projet_recherche_6.png'
      ],
      currentIndexRecherche: 0,

      // --- NOUVELLES VARIABLES POUR LE CARROUSEL ---
      dataVisImages: [
        '/images/projet_fifa.png',
        '/images/projet_fives.png'
      ],
      currentIndexDataVis: 0,
      // ---------------------------------------------

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
    // --- NOUVELLES METHODES POUR LE CARROUSEL ---
    nextDataVisImage() {
      this.currentIndexDataVis = (this.currentIndexDataVis + 1) % this.dataVisImages.length;
    },
    prevDataVisImage() {
      this.currentIndexDataVis = (this.currentIndexDataVis - 1 + this.dataVisImages.length) % this.dataVisImages.length;
    },
    nextRechercheImage() {
      this.currentIndexRecherche = (this.currentIndexRecherche + 1) % this.rechercheImages.length;
    },
    prevRechercheImage() {
      this.currentIndexRecherche = (this.currentIndexRecherche - 1 + this.rechercheImages.length) % this.rechercheImages.length;
    },
    // ---------------------------------------------

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