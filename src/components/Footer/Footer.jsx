import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Universidad de Antioquia - Laboratorio de Física de Ondas</p>
    </footer>
  );
};

export default Footer;