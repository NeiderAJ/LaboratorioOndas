import './Button.css';

// Este componente es muy flexible. Acepta:
// - children: El texto que aparecerá en el botón.
// - href: La URL o archivo a donde apuntará.
// - download: Si es true, indica al navegador que descargue el archivo.
const Button = ({ children, href, download = false }) => {
  return (
    <a 
      className="custom-button" 
      href={href} 
      // Si download es true, se añade el atributo 'download' al enlace
      {...(download && { download: true })}
      // Para enlaces externos, es bueno añadir estos atributos por seguridad
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;