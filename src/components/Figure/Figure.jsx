import './Figure.css';

// Ahora el componente espera 'alt' (descripción) y 'caption' (número de figura)
const Figure = ({ src, alt, caption }) => {
  return (
    <figure className="guide-figure">
      <img src={src} alt={alt} />
      <figcaption>
        {/* Primero mostramos la descripción (el texto 'alt') */}
        <span className="figure-description">{alt}</span>
        {/* Luego, si existe el caption (Fig 2.1), lo mostramos */}
        {caption && <span className="figure-caption">{caption}</span>}
      </figcaption>
    </figure>
  );
};

export default Figure;