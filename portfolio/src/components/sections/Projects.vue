<template>
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">Mes Projets</h2>
        <div class="projects-filter">
          <button 
            v-for="category in categories" 
            :key="category"
            :class="['filter-btn', activeCategory === category ? 'active' : '']"
            @click="filterProjects(category)"
          >
            {{ category }}
          </button>
        </div>
        <div class="projects-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id" 
            class="project-card"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-links">
                  <a :href="project.demoLink" target="_blank" class="project-link">
                    <i class="fas fa-eye"></i> Démo
                  </a>
                  <a :href="project.codeLink" target="_blank" class="project-link">
                    <i class="fas fa-code"></i> Code
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span 
                  v-for="(tech, index) in project.technologies" 
                  :key="index" 
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProjectsSection',
    data() {
      return {
        activeCategory: 'Tous',
        categories: ['Tous', 'Web', 'Mobile', 'Design'],
        projects: [
          {
            id: 1,
            title: 'Portfolio Personnel',
            description: 'Mon site portfolio personnel créé avec Vue.js et déployé sur GitHub Pages.',
            image: require('@/assets/images/projects/test.png'),
            demoLink: 'https://votre-nom-utilisateur.github.io',
            codeLink: 'https://github.com/votre-nom-utilisateur/nom-de-votre-depot',
            technologies: ['Vue.js', 'CSS3', 'GitHub Pages'],
            category: 'Web'
          },
          {
            id: 2,
            title: 'Application Météo',
            description: 'Application météo en temps réel utilisant une API externe.',
            image: require('@/assets/images/projects/test.png'),
            demoLink: '#',
            codeLink: '#',
            technologies: ['JavaScript', 'API', 'CSS3'],
            category: 'Web'
          },
          {
            id: 3,
            title: 'Application Mobile de Fitness',
            description: 'Application de suivi d\'exercices et de nutrition pour mobiles.',
            image: require('@/assets/images/projects/test.png'),
            demoLink: '#',
            codeLink: '#',
            technologies: ['React Native', 'Firebase', 'Redux'],
            category: 'Mobile'
          },
          {
            id: 4,
            title: 'Refonte de Logo',
            description: 'Redesign du logo d\'une entreprise locale de café.',
            image: require('@/assets/images/projects/test.png'),
            demoLink: '#',
            codeLink: null,
            technologies: ['Photoshop', 'Illustrator'],
            category: 'Design'
          }
        ]
      }
    },
    computed: {
      filteredProjects() {
        if (this.activeCategory === 'Tous') {
          return this.projects;
        } else {
          return this.projects.filter(project => project.category === this.activeCategory);
        }
      }
    },
    methods: {
      filterProjects(category) {
        this.activeCategory = category;
      }
    }
  }
  </script>
  
  <style scoped>
  .projects-section {
    padding: 5rem 0;
    background-color: #f9f9f9;
  }
  
  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #333;
    position: relative;
  }
  
  .section-title::after {
    content: '';
    display: block;
    width: 70px;
    height: 3px;
    background-color: #42b883;
    margin: 1rem auto 0;
  }
  
  .projects-filter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1.5rem;
    background: none;
    border: 1px solid #ddd;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }
  
  .filter-btn:hover, .filter-btn.active {
    background-color: #42b883;
    color: white;
    border-color: #42b883;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }
  
  .project-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background-color: white;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
  }
  
  .project-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.1);
  }
  
  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(66, 184, 131, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover .project-overlay {
    opacity: 1;
  }
  
  .project-links {
    display: flex;
    gap: 1rem;
  }
  
  .project-link {
    padding: 0.5rem 1rem;
    background-color: white;
    color: #42b883;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .project-link:hover {
    background-color: #333;
    color: white;
  }
  
  .project-info {
    padding: 1.5rem;
  }
  
  .project-title {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #333;
  }
  
  .project-description {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-tag {
    padding: 0.3rem 0.6rem;
    background-color: #f1f1f1;
    border-radius: 20px;
    font-size: 0.75rem;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>