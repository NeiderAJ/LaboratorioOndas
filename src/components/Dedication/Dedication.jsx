import './Dedication.css';

// El componente recibe el nombre del autor como prop para ser reutilizable
const Dedication = ({ authorName }) => {
  if (!authorName) return null;

  return (
    <div className="dedication-box">
      <p className="dedication-text">
        Con gratitud y respeto, dedicamos esta versión digital al profesor <strong>{authorName}</strong>, 
        autor de las guías de laboratorio originales que han formado a generaciones de estudiantes. 
        Su trabajo es la base fundamental de este proyecto.
      </p>
      <p className="rights-text">
        Los derechos morales de la obra original son de su autoría.
      </p>
    </div>
  );
};

export default Dedication;