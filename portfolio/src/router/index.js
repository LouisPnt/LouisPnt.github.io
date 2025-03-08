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
});

export default router;
