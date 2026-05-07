import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="fade-in-up">
            <h1 className="display-4 fw-bold mb-4">
              Olá, eu sou <span className="text-primary">William Meireles</span>
            </h1>
            <h2 className="h3 mb-4 text-muted">Engenheiro de Software</h2>
            <p className="lead mb-4">
              Apaixonado por tecnologia e desenvolvimento de software. 
              Especializado em React, Node.js e soluções web modernas.
            </p>
            <div className="d-flex gap-3">
              <Button as={Link} to="/projects" variant="primary" size="lg">
                Ver Projetos
              </Button>
              <Button as={Link} to="/contact" variant="outline-primary" size="lg">
                Entre em Contato
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div className="hero-image">
              <div 
                style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '50%',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: '#007bff'
                }}
              >
                👨‍💻
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
