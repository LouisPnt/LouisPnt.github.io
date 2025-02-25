<template>
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">Contactez-moi</h2>
        
        <div class="contact-container">
          <div class="contact-info">
            <h3 class="info-title">Informations de contact</h3>
            <p class="info-description">
              N'hésitez pas à me contacter pour discuter de vos projets ou 
              pour toute autre question. Je suis disponible et je vous 
              répondrai dans les plus brefs délais.
            </p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="info-content">
                  <h4>Localisation</h4>
                  <p>Votre Ville, Pays</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="info-content">
                  <h4>Email</h4>
                  <p>votre.email@exemple.com</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="info-content">
                  <h4>Téléphone</h4>
                  <p>+33 6 12 34 56 78</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-link" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="social-link" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div class="contact-form">
            <h3 class="form-title">Envoyez-moi un message</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  placeholder="Votre nom"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  placeholder="Votre email"
                />
              </div>
              
              <div class="form-group">
                <label for="subject">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="5"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>
              
              <div v-if="formStatus.show" :class="['form-status', formStatus.isError ? 'error' : 'success']">
                {{ formStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        isSubmitting: false,
        formStatus: {
          show: false,
          isError: false,
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        this.isSubmitting = true;
        
        // Simuler l'envoi du formulaire (à remplacer par votre logique d'envoi)
        setTimeout(() => {
          // Simulation d'un succès (dans un cas réel, vous utiliseriez Axios ou Fetch)
          this.formStatus = {
            show: true,
            isError: false,
            message: 'Votre message a été envoyé avec succès! Je vous répondrai bientôt.'
          };
          
          // Réinitialiser le formulaire
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
          
          this.isSubmitting = false;
          
          // Cacher le message après 5 secondes
          setTimeout(() => {
            this.formStatus.show = false;
          }, 5000);
          
          /* 
          // En cas d'erreur, vous feriez plutôt :
          this.formStatus = {
            show: true,
            isError: true,
            message: "Une erreur s'est produite. Veuillez réessayer."
          };
          this.isSubmitting = false;
          */
        }, 2000);
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-section {
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
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .contact-info {
    padding: 3rem;
    background-color: #42b883;
    color: white;
  }
  
  .info-title, .form-title {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  
  .info-description {
    margin-bottom: 2rem;
    line-height: 1.6;
    opacity: 0.9;
  }
  
  .info-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .info-item {
    display: flex;
    align-items: flex-start;
  }
  
  .info-icon {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex
  }
  </style>