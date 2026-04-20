import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
      });
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-page section-padding">
      <Container>
        <div className="page-header text-center mb-5">
          <h1 className="page-title fade-in">Entre em Contato</h1>
          <p className="page-description fade-in delay-1">
            Tem um projeto em mente? Vamos conversar e transformar suas ideias em realidade.
          </p>
        </div>
        
        <Row>
          <Col lg={5} className="mb-5 mb-lg-0">
            <div className="contact-info fade-in">
              <h2 className="section-title mb-4">Informações de Contato</h2>
              <p className="contact-text">
                Estou disponível para trabalhos freelance, oportunidades de emprego ou apenas para trocar ideias sobre tecnologia e design.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-content">
                    <h3>Email</h3>
                    <p><a href="mailto:willianmeireles2021@gmail.com">willianmeireles2021@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-content">
                    <h3>Telefone</h3>
                    <p><a href="tel:+5511999999999">+55 (13) 98802-4990</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-content">
                    <h3>Localização</h3>
                    <p>Sorocaba, Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-social">
                <h3>Me encontre nas redes</h3>
                <div className="social-links">
                  <a href="https://github.com/wmeireles" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className="contact-form-container fade-in delay-2">
              <h2 className="section-title mb-4">Envie uma Mensagem</h2>
              
              {formStatus.submitted && (
                <Alert variant={formStatus.success ? 'success' : 'danger'} className="mb-4">
                  {formStatus.message}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="name">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Seu nome" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Seu email" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4" controlId="subject">
                  <Form.Label>Assunto</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Assunto da mensagem" 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Sua mensagem" 
                    required 
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="submit-button">
                  Enviar Mensagem
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;