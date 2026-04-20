import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// Dados dos projetos (simulados)
import { projects } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase()));
    }
  }, [activeCategory]);

  return (
    <div className="projects-page section-padding">
      <Container>
        <div className="page-header text-center mb-5">
          <h1 className="page-title fade-in">Meus Projetos</h1>
          <p className="page-description fade-in delay-1">
            Uma coleção dos meus trabalhos recentes em desenvolvimento e design.
          </p>
        </div>
        
        <Nav className="project-filter justify-content-center mb-5 fade-in delay-2">
          <Nav.Item>
            <Nav.Link 
              className={activeCategory === 'all' ? 'active' : ''} 
              onClick={() => setActiveCategory('all')}
            >
              Todos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              className={activeCategory === 'backend' ? 'active' : ''} 
              onClick={() => setActiveCategory('backend')}
            >
              Backend
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              className={activeCategory === 'frontend' ? 'active' : ''} 
              onClick={() => setActiveCategory('frontend')}
            >
              Frontend
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              className={activeCategory === 'mobile' ? 'active' : ''} 
              onClick={() => setActiveCategory('mobile')}
            >
              Mobile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              className={activeCategory === 'ux/ui' ? 'active' : ''} 
              onClick={() => setActiveCategory('ux/ui')}
            >
              UX/UI
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              className={activeCategory === 'Automação' ? 'active' : ''} 
              onClick={() => setActiveCategory('Automação')}
            >
              Automação
            </Nav.Link>
          </Nav.Item>
        </Nav>
        
        <Row>
          {filteredProjects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4 project-item fade-in" key={index}>
              <ProjectCard project={project} />
            </Col>
          ))}
          
          {filteredProjects.length === 0 && (
            <Col xs={12} className="text-center py-5">
              <p className="no-projects">Nenhum projeto encontrado nesta categoria.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;