import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          William Meireles
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              Sobre
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
              Projetos
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contato
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
