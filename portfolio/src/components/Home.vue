<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Bonjour, je suis <span class="highlight">Votre Nom</span></h1>
        <h2>Développeur Web & Designer</h2>
        <p class="intro-text">
          Je crée des expériences web élégantes et fonctionnelles.
        </p>
        <div class="cta-buttons">
          <button class="btn primary" @click="scrollToProjects">Voir mes projets</button>
          <button class="btn secondary" @click="scrollToContact">Me contacter</button>
        </div>
      </div>
    </section>

    <about-section id="about" />
    
    <projects-section id="projects" />
    
    <skills-section id="skills" />
    
    <contact-section id="contact" />
  </div>
</template>

<script>
import AboutSection from '@/components/sections/About.vue'
import ProjectsSection from '@/components/sections/Projects.vue'
import SkillsSection from '@/components/sections/Skills.vue'
import ContactSection from '@/components/sections/Contact.vue'

export default {
  name: 'HomePage',
  components: {
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ContactSection
  },
  methods: {
    scrollToProjects() {
      document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
    scrollToContact() {
      document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  margin-bottom: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #666;
}

.highlight {
  color: #42b883; /* Couleur Vue.js */
}

.intro-text {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary {
  background-color: #42b883;
  color: white;
}

.primary:hover {
  background-color: #3aa876;
}

.secondary {
  background-color: transparent;
  border: 2px solid #42b883;
  color: #42b883;
}

.secondary:hover {
  background-color: rgba(66, 184, 131, 0.1);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
  
  .btn {
    width: 100%;
  }
}
</style>