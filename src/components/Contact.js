import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Entre em Contato</h2>
            <p className="lead">Vamos conversar sobre seu próximo projeto!</p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert variant="success" className="mb-4">
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </Alert>
            )}
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button type="submit" variant="primary" size="lg">
                      Enviar Mensagem
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <h4 className="mb-4">Ou me encontre em:</h4>
            <div className="d-flex justify-content-center gap-4">
              <a href="mailto:contato@williammeireles.com" className="text-decoration-none">
                <div className="d-flex align-items-center">
                  <span className="me-2">📧</span>
                  <span>contato@williammeireles.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/williammeireles" className="text-decoration-none">
                <div className="d-flex align-items-center">
                  <span className="me-2">💼</span>
                  <span>LinkedIn</span>
                </div>
              </a>
              <a href="https://github.com/williammeireles" className="text-decoration-none">
                <div className="d-flex align-items-center">
                  <span className="me-2">🐙</span>
                  <span>GitHub</span>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
