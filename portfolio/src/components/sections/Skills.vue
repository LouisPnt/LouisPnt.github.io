<template>
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">Mes Compétences</h2>
        
        <div class="skills-categories">
          <div class="skills-category">
            <h3 class="category-title">
              <i class="fas fa-code"></i> Développement Front-end
            </h3>
            <div class="skills-list">
              <div class="skill-item" v-for="(skill, index) in frontendSkills" :key="'fe-'+index">
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
                </div>
                <div class="skill-percentage">{{ skill.level }}%</div>
              </div>
            </div>
          </div>
          
          <div class="skills-category">
            <h3 class="category-title">
              <i class="fas fa-server"></i> Développement Back-end
            </h3>
            <div class="skills-list">
              <div class="skill-item" v-for="(skill, index) in backendSkills" :key="'be-'+index">
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
                </div>
                <div class="skill-percentage">{{ skill.level }}%</div>
              </div>
            </div>
          </div>
          
          <div class="skills-category">
            <h3 class="category-title">
              <i class="fas fa-paint-brush"></i> Design & Outils
            </h3>
            <div class="skills-list">
              <div class="skill-item" v-for="(skill, index) in designSkills" :key="'ds-'+index">
                <div class="skill-name">{{ skill.name }}</div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
                </div>
                <div class="skill-percentage">{{ skill.level }}%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="other-skills">
          <h3 class="category-title">Autres compétences</h3>
          <div class="tags-container">
            <span class="skill-tag" v-for="(skill, index) in otherSkills" :key="index">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SkillsSection',
    data() {
      return {
        frontendSkills: [
          { name: 'HTML/CSS', level: 90 },
          { name: 'JavaScript', level: 85 },
          { name: 'Vue.js', level: 80 },
          { name: 'React', level: 75 },
          { name: 'SASS/SCSS', level: 70 }
        ],
        backendSkills: [
          { name: 'Node.js', level: 75 },
          { name: 'Express', level: 70 },
          { name: 'MongoDB', level: 65 },
          { name: 'SQL', level: 60 },
          { name: 'PHP', level: 50 }
        ],
        designSkills: [
          { name: 'Figma', level: 75 },
          { name: 'Adobe XD', level: 70 },
          { name: 'Photoshop', level: 65 },
          { name: 'Illustrator', level: 60 }
        ],
        otherSkills: [
          'Git', 'GitHub', 'GitLab', 'Responsive Design', 'PWA', 'SEO', 
          'Agile/Scrum', 'Webpack', 'Babel', 'Netlify', 'Heroku', 'Firebase',
          'REST API', 'GraphQL', 'TypeScript', 'Jest', 'CI/CD'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .skills-section {
    padding: 5rem 0;
    background-color: white;
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
  
  .skills-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .skills-category {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .category-title {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    color: #333;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.5rem;
  }
  
  .category-title i {
    color: #42b883;
    margin-right: 0.5rem;
  }
  
  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  
  .skill-item {
    display: flex;
    align-items: center;
  }
  
  .skill-name {
    flex: 0 0 100px;
    font-weight: 500;
    color: #555;
  }
  
  .skill-bar {
    flex: 1;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 10px;
  }
  
  .skill-level {
    height: 100%;
    background-color: #42b883;
    border-radius: 5px;
  }
  
  .skill-percentage {
    flex: 0 0 40px;
    text-align: right;
    font-size: 0.85rem;
    color: #666;
  }
  
  .other-skills {
    text-align: center;
  }
  
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
    margin-top: 1.5rem;
  }
  
  .skill-tag {
    padding: 0.5rem 1rem;
    background-color: #f1f1f1;
    border-radius: 30px;
    font-size: 0.9rem;
    color: #555;
    transition: all 0.3s ease;
  }
  
  .skill-tag:hover {
    background-color: #42b883;
    color: white;
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    .skills-categories {
      grid-template-columns: 1fr;
    }
    
    .skill-item {
      flex-wrap: wrap;
    }
    
    .skill-name {
      flex: 0 0 100%;
      margin-bottom: 0.3rem;
    }
    
    .skill-bar {
      margin: 0 10px 0 0;
    }
  }
  </style>