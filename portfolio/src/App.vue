<script setup>
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';

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
        <a href="#skills" class="text-blue-400 hover:underline">Compétences</a>
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
    <section ref="sections" id="about" class="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 class="text-4xl font-bold text-blue-400 mb-4">À Propos de Moi</h2>
      <div class="flex flex-col items-center md:flex-row md:space-x-10">
        <img src="/profile.jpg" alt="Photo de profil" class="w-40 h-40 rounded-full border-4 border-blue-400 object-cover" />
        <div class="mt-4 md:mt-0">
          <p class="text-lg">👋 Bonjour, je suis <span class="text-blue-400 font-semibold">Louis Penet</span>.</p>
          <p class="text-lg">📍 Je vis à <span class="text-blue-400 font-semibold">Toulouse</span>.</p>
          <p class="text-lg">🎂 J’ai <span class="text-blue-400 font-semibold">20 ans</span>.</p>
          <p class="text-lg">📧 Contact : <span class="text-blue-400 font-semibold">louispenet2004@gmail.com</span></p>
          <p class="text-lg">🗣️ Langues : Anglais (B2 - TOEIC 920/990), Espagnol (B1)</p>
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



    <!-- Section Compétences -->
    <section id="skills" class="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 class="text-4xl font-bold text-blue-400 mb-8">Compétences</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <!-- Boucle sur les catégories -->
        <div v-for="(skill, index) in skills" :key="index" class="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ skill.category }}</h3>

          <!-- Conteneur du carrousel -->
          <div class="relative overflow-hidden w-full">
            <div class="flex space-x-8 carousel" :class="'carousel-' + index">
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
      <h2 class="text-4xl font-bold text-blue-400 mb-4">Expérience Professionnelle</h2>
      <div class="bg-gray-800 p-6 rounded-lg w-full max-w-2xl">
        <p class="text-lg"><span class="text-blue-400 font-semibold">2024 :</span> Stage de développement (Désirade, Toulouse)</p>
        <p class="text-md">Développement en ASP.NET, SQL et collaboration avec Airbus & Thalès</p>
        <p class="mt-4 text-lg"><span class="text-blue-400 font-semibold">2024 :</span> AGH Autumn School on Space Resources and Robotics (Cracovie, Pologne)</p>
        <p class="text-md">Collaboration internationale sur la robotique spatiale</p>
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
