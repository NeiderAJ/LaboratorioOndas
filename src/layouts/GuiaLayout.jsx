// src/layouts/GuiaLayout.jsx

import React from 'react';
import Dedication from '../components/Dedication/Dedication'; // 1. Importar

import 'katex/dist/katex.min.css';
import './GuiaLayout.css';
import HtmlRenderer from '../components/HtmlRenderer/HtmlRenderer'; // 1. Importar nuestro nuevo componente

const GuiaLayout = ({ data }) => {
  if (!data) return <div>Cargando guía...</div>;
  
  return (
    <div className="guia-container">
      <h1 className="guia-main-title">{data.title}</h1>
      <div className="guia-body">
        <aside className="guia-sidebar">
          <nav>
            <ul>
              {data.sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
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
              {/* 2. Usar el nuevo renderer. ¡Así de simple! */}
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