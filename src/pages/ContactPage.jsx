// src/pages/ContactPage.jsx

import './ContactPage.css';
import Button from '../components/Button/Button'; // Reutilizaremos nuestro elegante botón

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="section-title">Contacto del Docente</h1>
      
      <div className="contact-card">
        <div className="info-section">
          <h3>Anyeres Neider Atehortúa Jiménez, PhD</h3>
          <p>
            Profesor del curso de servicios "Física de Ondas" (Física III) para el 
            Instituto de Química de la Facultad de Ciencias Exactas y Naturales (FCEN).
          </p>
          <p className="email-contact">
            <strong>Email:</strong> <a href="mailto:anyeres.atehortua@udea.edu.co">anyeres.atehortua@udea.edu.co</a>
          </p>
        </div>

        <div className="links-section">
          <Button href="http://storage.googleapis.com/neiderjimenez/index.html">
            CV Online
          </Button>
          <Button href="https://github.com/NeiderAJ">
            GitHub
          </Button>
          <Button href="https://www.linkedin.com/in/anyeresaj">
            LinkedIn
          </Button>
        </div>
      </div>

      <h2 className="section-title">Otros Proyectos Destacados</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Mecadigital</h3>
          <p>Una aplicación web para el curso de física mecánica de la facultad de ingeniería.</p>
          <a href="https://mecadigital-19.web.app" className="project-link" target="_blank" rel="noopener noreferrer">Visitar Proyecto →</a>
        </div>

        <div className="project-card">
          <h3>QUANTHASLAB</h3>
          <p>Laboratorio virtual de análisis cuantitativos en crypto finanzas.</p>
          <a href="https://neideraj.github.io/quanthashlab/" className="project-link" target="_blank" rel="noopener noreferrer">Visitar Proyecto →</a>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;