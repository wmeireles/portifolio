import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com React e Node.js, incluindo sistema de pagamentos e gestão de estoque.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicação de gerenciamento de tarefas com interface moderna e funcionalidades avançadas de organização.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      image: '📋'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard de previsão do tempo com visualizações interativas e dados em tempo real.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      image: '🌤️'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Dashboard para gerenciamento de redes sociais com analytics e agendamento de posts.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      image: '📊'
    }
  ];

  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Meus Projetos</h2>
            <p className="lead">Alguns dos projetos que desenvolvi recentemente</p>
          </Col>
        </Row>
        <Row>
          {projects.map(project => (
            <Col lg={6} md={6} className="mb-4" key={project.id}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>
                    {project.image}
                  </div>
                  <Card.Title className="h4">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.technologies.map(tech => (
                      <span key={tech} className="badge bg-secondary me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline-primary" size="sm">
                    Ver Detalhes
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
