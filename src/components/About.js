import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Sobre Mim</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-image text-center mb-4">
              <div 
                style={{
                  width: '250px',
                  height: '250px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '50%',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: '#007bff'
                }}
              >
                🚀
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <h3 className="mb-4">Desenvolvedor Full Stack</h3>
              <p className="lead mb-4">
                Sou um desenvolvedor apaixonado por tecnologia e inovação. 
                Especializado em desenvolvimento web moderno com foco em 
                performance e experiência do usuário.
              </p>
              <p className="mb-4">
                Com experiência em React, Node.js, JavaScript, TypeScript e 
                outras tecnologias modernas, busco sempre criar soluções 
                eficientes e escaláveis.
              </p>
              <div className="skills">
                <h5 className="mb-3">Tecnologias:</h5>
                <div className="d-flex flex-wrap gap-2">
                  {['React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git'].map(skill => (
                    <span key={skill} className="badge bg-primary me-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
