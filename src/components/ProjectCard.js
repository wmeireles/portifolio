import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, github, demo, category } = project;

  return (
    <Card className="project-card">
      <div className="project-image-container">
        {typeof image === 'string' ? (
          <Card.Img variant="top" src={image} className="project-image" alt={title} />
        ) : (
          <div className="project-image-custom" style={{ backgroundImage: `url(${image})` }}></div>
        )}
        <div className="project-category">{category}</div>
      </div>
      <Card.Body className="project-content">
        <Card.Title className="project-title">{title}</Card.Title>
        <Card.Text className="project-description">{description}</Card.Text>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
              <FaGithub />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;