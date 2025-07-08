// src/layouts/GuiaLayout.jsx

import React from 'react';
import 'katex/dist/katex.min.css';
import './GuiaLayout.css';
import HtmlRenderer from '../components/HtmlRenderer/HtmlRenderer';
import Dedication from '../components/Dedication/Dedication';

const GuiaLayout = ({ data }) => {
  if (!data) return <div>Cargando guía...</div>;

  // --- ¡AQUÍ ESTÁ LA NUEVA LÓGICA! ---
  const handleScroll = (event, targetId) => {
    // 1. Prevenimos el comportamiento por defecto del enlace (que es cambiar la URL)
    event.preventDefault();

    // 2. Buscamos el elemento de la sección por su ID
    const element = document.getElementById(targetId);

    // 3. Si el elemento existe, nos desplazamos suavemente hacia él
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Animación de desplazamiento suave
        block: 'start'      // Alinea la parte superior de la sección con la parte superior de la vista
      });
    }
  };
  
  return (
    <div className="guia-container">
      <h1 className="guia-main-title">{data.title}</h1>
      <div className="guia-body">
        <aside className="guia-sidebar">
           <nav>
            <ul>
              {data.sections.map(section => (
                <li key={section.id}>
                  {/* Modificamos el enlace para que llame a nuestra nueva función */}
                  <a 
                    href={`#${section.id}`}
                    onClick={(e) => handleScroll(e, section.id)}
                  >
                    <span className="sidebar-icon">{section.icon}</span> 
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <article className="guia-content">
          {data.sections.map(section => (
            <section key={section.id} id={section.id} className="guia-section">
              <h2 className="section-title">{section.title}</h2>
              <HtmlRenderer htmlString={section.content} />
            </section>
          ))}
        </article>
      </div>

      {data.author && <Dedication authorName={data.author} />}
    </div>
  );
};

export default GuiaLayout;