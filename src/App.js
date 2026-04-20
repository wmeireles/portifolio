import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './theme.css';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  // Aplicar a classe de tema salva no localStorage ao iniciar
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const isDarkMode = savedTheme !== null ? JSON.parse(savedTheme) : true;
    
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;