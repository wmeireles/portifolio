import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <div className="social-links">
              <a href="https://github.com/wmeireles" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/willian-meireles/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:willianmeireles2021@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
            <p className="copyright">
              Desenvolvido com <span className="heart">❤</span> por WMeireles © {currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;