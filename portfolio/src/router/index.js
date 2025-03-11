import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // Crée un composant pour la page d'accueil
import CVPage from '@/views/CVPage.vue';

const routes = [
  {
    path: '/', // Route de la page d'accueil
    name: 'Home',
    component: HomePage, // Nouveau composant pour la page principale
  },
  {
    path: '/cv',
    name: 'CV',
    component: CVPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Si l'URL contient une ancre (par exemple, /#about), défilez vers l'élément correspondant
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      // Si une position de défilement est sauvegardée, restaurez-la
      return savedPosition;
    } else {
      // Sinon, défilez vers le haut de la page
      return { top: 0 };
    }
  },
});

export default router;
