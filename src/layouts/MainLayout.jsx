import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// El prop "children" es una característica especial de React.
// Representa cualquier cosa que pongas DENTRO de este componente cuando lo uses.
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;