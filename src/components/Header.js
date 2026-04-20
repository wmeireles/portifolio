import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica se há uma preferência salva no localStorage
    const savedTheme = localStorage.getItem('darkMode');
    // Se não houver, usa o tema escuro como padrão
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });
  const location = useLocation();
  
  // Função para alternar entre tema claro e escuro
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Salva a preferência no localStorage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fechar o menu ao clicar em um link
  useEffect(() => {
    setExpanded(false);
  }, [location]);
  
  // Aplicar o tema ao carregar a página ou quando mudar
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Navbar 
      expand="lg" 
      className={`fixed-top ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          <span className="logo-text">WM</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              <span className="nav-number">01.</span> Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              <span className="nav-number">02.</span> Casos de Sucesso
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <span className="nav-number">03.</span> Sobre Mim
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              <span className="nav-number">04.</span> Agendar Call
            </Nav.Link>
            <Nav.Link 
              href="curriculo Willian Meireles.pdf" 
              target="_blank" 
              className="resume-button"
            >
              Currículo
            </Nav.Link>
            <Nav.Link 
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={darkMode ? "Mudar para tema claro" : "Mudar para tema escuro"}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;