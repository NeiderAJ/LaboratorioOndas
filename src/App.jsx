import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import OndasEnCuerdaPage from './pages/guias/OndasEnCuerdaPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
           {/* 2. Añade la ruta para la guía */}
          <Route path="/lab/ondas-cuerda" element={<OndasEnCuerdaPage />} />          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;