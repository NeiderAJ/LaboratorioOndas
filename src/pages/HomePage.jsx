import './HomePage.css';

import Button from '../components/Button/Button'; // 1. Importar el componente


const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <video 
          className="hero-video" 
          src={`${import.meta.env.BASE_URL}hero-video.mp4`} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Física de Ondas y Laboratorio</h1>
          <p className="hero-subtitle">Explorando los principios fundamentales del universo a través de las ondas.</p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Bienvenido</h2>
        <p>
          Este es el espacio digital del curso de servicios "Física de Ondas (Física III), Código: 032154"" en la Facultad de Ciencias Exactas y Naturales. 
          Aquí encontrarás las guías de laboratorio interactivas, simulaciones y recursos necesarios para tu aprendizaje.
        </p>
        <p>
          Navega a través del menú "Lab de Ondas FIII" para acceder a las diferentes prácticas.
        </p>

        {/* 2. Añadir la sección de botones */}
        <div className="button-container">
          <Button href="/clase-a-clase.pdf" download>
            Descargar Clase a Clase
          </Button>
          <Button href="/microcurriculo.pdf" download>
            Descargar Micro Currículum
          </Button>
        </div>


      </section>
    </div>
  );
};

export default HomePage;