import { createApp } from 'vue';
import App from './App.vue';
import "./assets/main.css";
import router from './router'; // Importez le router

const app = createApp(App);
app.use(router); // Utilisez le router
app.mount('#app');