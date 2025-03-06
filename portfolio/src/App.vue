<script setup>
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import ButCompetences from './components/ButCompetences.vue';
import ProjetsSection from './components/ProjetsSection.vue';

const skills = ref([
  {
    category: 'Programmation',
    logos: ['/icons/java.svg', '/icons/python.svg', '/icons/c.svg', '/icons/sql.svg'],
  },
  {
    category: 'Développement Web',
    logos: ['/icons/html.svg', '/icons/css.svg', '/icons/php.svg', '/icons/angular.svg', '/icons/symfony.svg'],
  },
  {
    category: 'Conteneurisation & Systèmes',
    logos: ['/icons/docker.svg', '/icons/linux.svg', '/icons/bash.svg', '/icons/ubuntu.svg'],
  },
  {
    category: 'Logiciels',
    logos: ['/icons/vscode.svg', '/icons/eclipse.svg', '/icons/androidstudio.svg', '/icons/github.svg', '/icons/gitlab.svg'],
  },
]);

onMounted(() => {

  skills.value.forEach((skill, index) => {
    const carousel = document.querySelector(`.carousel-${index}`);
    const logos = carousel.querySelectorAll('img'); // Sélectionne toutes les images du carrousel

    // Calculer la largeur totale des logos originaux (une seule série)
    let totalWidth = 0;
    logos.forEach((logo, logoIndex) => {
      if (logoIndex < skill.logos.length) { // Ne prendre en compte que la première série de logos
        totalWidth += logo.offsetWidth + 24; // Largeur du logo + espacement (24px)
      }
    });

    // Animation GSAP
    gsap.to(`.carousel-${index}`, {
      x: `-=${totalWidth}`, // Défilement de la largeur totale des logos originaux
      duration: 10, // Durée du défilement (ajustez selon vos besoins)
      repeat: -1, // Boucle infinie
      ease: 'none', // Accélération et décélération progressive
      modifiers: {
        x: gsap.utils.unitize((x) => {
          // Ajuster la position pour une boucle parfaite
          return parseFloat(x) % totalWidth;
        }),
      },
    });
  });
});
</script>


<template>
  <div class="font-sans bg-gray-900 text-white">
    <!-- Navigation -->
    <header class="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 p-4 z-50">
      <nav class="container mx-auto flex justify-center space-x-6">
        <a href="#about" class="text-blue-400 hover:underline">À Propos</a>
        <a href="#education" class="text-blue-400 hover:underline">Formation</a>
        <a href="#but-competences" class="text-blue-400 hover:underline">Compétences du BUT</a>
        <a href="#projets" class="text-blue-400 hover:underline">Projets</a>
        <a href="#skills" class="text-blue-400 hover:underline">Compétences Techniques</a>
        <a href="#experience" class="text-blue-400 hover:underline">Expérience</a>
        <a href="#interests" class="text-blue-400 hover:underline">Centres d'Intérêt</a>
      </nav>
    </header>

    <!-- Hero 
    <section class="h-screen flex items-center justify-center">
      <h1 class="text-5xl font-bold text-blue-400">
        Mon Portfolio 🚀
      </h1>
    </section> -->

    <!-- À Propos -->
    <section ref="sections" id="about" class="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-gray-800 to-gray-900">
      <div id="particles-js" class="absolute inset-0 z-0"></div>
      
      <!-- Conteneur principal -->
      <div class="relative z-10 flex flex-col items-center text-center space-y-6">
        <!-- Photo de profil -->
        <img src="/profile.jpg" alt="Photo de profil" class="w-56 h-56 rounded-full border-4 border-blue-400 object-cover shadow-lg hover:scale-105 transition-transform duration-300" />

        <!-- Titre et sous-titre -->
        <div class="space-y-4">
          <h1 class="text-5xl font-bold text-blue-400">Louis Penet</h1>
          <p class="text-2xl text-gray-300">Étudiant en informatique</p>
        </div>

        <!-- Texte d'introduction -->
        <p class="text-lg text-gray-400 max-w-2xl">
          Passionné par le développement web et les nouvelles technologies, je suis actuellement en formation pour devenir développeur full-stack. Basé à Toulouse, je recherche des opportunités pour mettre mes compétences en pratique et contribuer à des projets innovants.
        </p>

        <!-- Informations supplémentaires (optionnel) -->
        <div class="flex space-x-4 text-gray-400">
          <p class="flex items-center space-x-2">
            <img src="/icons/pin.svg" alt="Localisation" class="w-5 h-5" />
            <span>Toulouse</span>
          </p>
          <p class="flex items-center space-x-2">
            <img src="/icons/mail.svg" alt="E-mail" class="w-5 h-5" />
            <span>louispenet2004@gmail.com</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Formation -->
    <section ref="sections" id="education" class="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 class="text-4xl font-bold text-blue-400 mb-8">Formation</h2>
      
      <div class="relative w-full max-w-3xl">
        <!-- Ligne de la timeline -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400"></div>
        
        
        <!-- Carte BUT Informatique (à gauche) -->
        <div class="relative flex items-center justify-between mb-8">
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-5/12 text-right">
            <p class="text-blue-400 font-semibold">2022 - 2025</p>
            <h3 class="text-2xl font-bold">BUT Informatique</h3>
            <p>IUT Blagnac - Université Toulouse Jean Jaurès II</p>
          </div>
          <div class="w-8 h-8 bg-blue-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          <div class="w-5/12"></div> <!-- Espace vide pour équilibrer -->
        </div>

        <!-- Carte Bac (à droite) -->
        <div class="relative flex items-center justify-between">
          <div class="w-5/12"></div> <!-- Espace vide pour équilibrer -->
          <div class="w-8 h-8 bg-blue-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-5/12 text-left">
            <p class="text-blue-400 font-semibold">2022</p>
            <h3 class="text-2xl font-bold">Baccalauréat Mention Bien</h3>
            <p>Lycée Théodore Ozenne - Toulouse (31)</p>
          </div>
        </div>
      </div>
    </section>

    <ButCompetences />
    
    <ProjetsSection />



    <!-- Section Compétences -->
    <section id="skills" class="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 class="text-4xl font-bold text-blue-400 mb-8">Compétences</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <!-- Boucle sur les catégories -->
        <div v-for="(skill, index) in skills" :key="index" class="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ skill.category }}</h3>

          <!-- Conteneur du carrousel -->
          <div class="relative overflow-hidden w-full">
            <div class="flex space-x-6 carousel" :class="'carousel-' + index">
              <!-- Boucle sur les icônes (originales + dupliquées 2 fois) -->
              <div v-for="(logo, logoIndex) in [...skill.logos, ...skill.logos, ...skill.logos]" :key="logoIndex" class="flex flex-col items-center">
                <img :src="logo" class="w-16 h-16 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expérience -->
    <section ref="sections" id="experience" class="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 class="text-4xl font-bold text-blue-400 mb-8">Expérience Professionnelle</h2>

      <div class="w-full max-w-4xl space-y-6">
        <!-- Carte pour l'événement AGH Autumn School -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-start space-x-6">
          <!-- Logo de l'événement (si disponible) -->
          <img src="/icons/agh-logo.jpeg" alt="Logo AGH Autumn School" class="w-32 h-32 object-contain bg-white p-2 rounded-lg" />
          <div>
            <p class="text-lg text-blue-400 font-semibold">2024 : AGH Autumn School on Space Resources and Robotics</p>
            <p class="text-gray-300">Cracovie, Pologne</p>
            <p class="text-sm text-gray-400 mt-2">Collaboration internationale sur la robotique spatiale</p>
          </div>
        </div>

        <!-- Carte pour le stage chez Desirade -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-start space-x-6">
          <!-- Logo de Desirade -->
          <img src="/icons/desirade.png" alt="Logo Desirade" class="w-32 h-32 object-contain bg-white p-2 rounded-lg" />
          <div>
            <p class="text-lg text-blue-400 font-semibold">2024 : Stage de développement</p>
            <p class="text-gray-300">Désirade, Toulouse</p>
            <p class="text-sm text-gray-400 mt-2">Développement en ASP.NET, SQL et collaboration avec Airbus & Thalès</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Centres d'Intérêt -->
    <section ref="sections" id="interests" class="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 class="text-4xl font-bold text-blue-400 mb-4">Centres d'Intérêt</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-800 p-4 rounded-lg text-center">🥋 Aïkido (10+ ans de pratique)</div>
        <div class="bg-gray-800 p-4 rounded-lg text-center">🎶 Musique Assistée par Ordinateur (Beatmaking)</div>
        <div class="bg-gray-800 p-4 rounded-lg text-center">🎬 Cinéma</div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 text-center bg-gray-800">
      <p class="text-gray-400">© 2025 Louis Penet - Tous droits réservés</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  mounted() {
    // Initialisation de Particles.js après le chargement du DOM
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', function() {
        console.log('Animation de particules chargée !');
      });
    }
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.carousel {
  display: flex;
  white-space: nowrap;
  width: max-content;
}

/* Assurez-vous que le conteneur du carrousel masque le débordement */
.relative {
  overflow: hidden;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%); /* Défilement de 50% pour un effet infini */
  }
}
</style>
