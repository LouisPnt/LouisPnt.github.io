<template>
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">À propos de moi</h2>
        <div class="about-content">
          <div class="about-image">
            <img src="@/assets/images/test.png" alt="Photo de profil" />
          </div>
          <div class="about-text">
            <p>
              Bienvenue sur mon portfolio ! Je suis un développeur web passionné 
              avec une expertise en création d'applications modernes et réactives.
            </p>
            <p>
              Mon parcours a débuté en [année] et depuis, j'ai travaillé sur divers 
              projets allant des sites vitrines aux applications complexes.
            </p>
            <p>
              Je suis toujours à la recherche de nouveaux défis et opportunités 
              pour développer mes compétences et créer des expériences web innovantes.
            </p>
            <div class="about-details">
              <div class="detail-item">
                <span class="detail-label">Nom:</span>
                <span class="detail-value">Votre Nom</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Email:</span>
                <span class="detail-value">votre.email@exemple.com</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Localisation:</span>
                <span class="detail-value">Votre Ville, Pays</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Disponibilité:</span>
                <span class="detail-value">Disponible pour freelance</span>
              </div>
            </div>
            <a href="@/assets/docs/CV.pdf" download class="download-cv">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection'
  }
  </script>
  
  <style scoped>
  .about-section {
    padding: 5rem 0;
    background-color: #ffffff;
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
  
  .about-content {
    display: flex;
    gap: 3rem;
    align-items: center;
  }
  
  .about-image {
    flex: 0 0 300px;
  }
  
  .about-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .about-text {
    flex: 1;
  }
  
  .about-text p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
    color: #555;
  }
  
  .about-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  .detail-item {
    display: flex;
  }
  
  .detail-label {
    font-weight: bold;
    margin-right: 0.5rem;
    color: #333;
  }
  
  .detail-value {
    color: #666;
  }
  
  .download-cv {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: #42b883;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .download-cv:hover {
    background-color: #3aa876;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
      text-align: center;
    }
  
    .about-image {
      flex: 0 0 250px;
      margin-bottom: 2rem;
    }
  
    .about-details {
      grid-template-columns: 1fr;
      text-align: left;
    }
  }
  </style>