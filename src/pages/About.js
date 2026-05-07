import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaCode, FaServer, FaMobile, FaPencilRuler } from 'react-icons/fa';
import bannersobre from '../assets/images/Bannersobre.jpeg';
import './About.css';

const About = () => {
  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Python", percentage: 75 },
    { name: "Arquitetura de Software", percentage: 90 },
    { name: "Cloud (AWS/Azure)", percentage: 85 }
  ];

  const experiences = [
    {
      title: "Analista de Suporte de T.I Nivel 2",
      company: "STEFANINI",
      period: "03/2025 - Presente",
      description: "Suporte técnico avançado para sistemas de informação, resolução de problemas complexos e otimização de processos internos. e inovação em soluções tecnológicas."
    },
    {
      title: "Analista de Suporte de T.I",
      company: "Claro Brasil",
      period: "2022 - 2024",
      description: "suporte técnico de nível 1 e 2, resolução de problemas de software e hardware, atendimento ao cliente e manutenção de sistemas."
    },
    {
      title: "Assistente Administrativo",
      company: "Sitel Do Brasil",
      period: "2020 - 2022",
      description: "Desenvolvimento de soluções administrativas, suporte a equipes de vendas e atendimento ao cliente, além de otimização de processos internos. aprimorar artigos ultilizando HTML, CSS e JavaScript."
    }
  ];

  const education = [
    {
      degree: "Curso de inglês",
      institution: "Cultura Inglesa",
      period: "2025 - até o momento",
      description: "Curso de inglês avançado, com foco em conversação, escrita e compreensão auditiva."
    },
    {
      degree: "Pós-Graduação em Engenharia de Software",
      institution: "Anhanguera",
      period: "2023 - 2025",
      description: "Formação avançada em desenvolvimento de software, com foco em metodologias ágeis e arquitetura de sistemas."
    },
    {
      degree: "Graduação em Analise de desenvolvimento de Sistemas",
      institution: "Uninove",
      period: "2021-2023",
      description: "Formação sólida em desenvolvimento de software, com foco em tecnologias web e mobile."
    }
  ];

  return (
    <div className="about-page section-padding">
      <Container>
        <div className="page-header text-center mb-5">
          <h1 className="page-title fade-in">Sobre Mim</h1>
          <p className="page-description fade-in delay-1">
            Conheça mais sobre minha jornada, habilidades e experiências.
          </p>
        </div>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-image-container fade-in">
              <div className="about-image-wrapper">
                <div className="about-image" style={{ backgroundImage: `url(${bannersobre})` }}></div>
                <div className="about-image-border"></div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content fade-in delay-2">
              <h2 className="section-title">Quem sou eu</h2>
              <p>
                Olá! Sou Engenheiro de Software com paixão por construir experiências digitais que unem design refinado e soluções tecnológicas robustas.
              </p>
              <p>
                Com mais de 3 anos de experiência na área de tecnologia, atuei em projetos diversos — desde aplicativos móveis até sistemas web complexos. Meu foco é desenvolver produtos acessíveis, eficientes e centrados no usuário, garantindo usabilidade e desempenho.
              </p>
              <p>
                Tenho especialização em tecnologias modernas como React, Node.js, React Native, além de domínio em ferramentas de design como Figma e Adobe XD. Estou sempre em busca de inovação, aprendendo continuamente e acompanhando as melhores práticas do mercado.
              </p>
              <p>
                Seja no frontend, backend ou na experiência do usuário, meu compromisso é entregar soluções de alto impacto com qualidade e propósito.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="section-title text-center mb-5 fade-in">Minhas Especialidades</h2>
          </Col>
          <Col md={3} className="mb-4 fade-in">
            <div className="specialty-card">
              <div className="specialty-icon">
                <FaCode />
              </div>
              <h3>Frontend</h3>
              <p>
                Desenvolvimento de interfaces responsivas e interativas utilizando React, 
                Vue.js, HTML5, CSS3 e JavaScript moderno.
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-4 fade-in delay-1">
            <div className="specialty-card">
              <div className="specialty-icon">
                <FaServer />
              </div>
              <h3>Backend</h3>
              <p>
                Criação de APIs robustas e escaláveis com Node.js, Express, Python, 
                bancos de dados SQL e NoSQL.
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-4 fade-in delay-2">
            <div className="specialty-card">
              <div className="specialty-icon">
                <FaMobile />
              </div>
              <h3>Mobile</h3>
              <p>
                Desenvolvimento de aplicativos móveis nativos e híbridos com React Native, 
                Flutter e integração com APIs.
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-4 fade-in delay-3">
            <div className="specialty-card">
              <div className="specialty-icon">
                <FaPencilRuler />
              </div>
              <h3>Arquitetura de Software</h3>
              <p>
                Desenho de soluções técnicas de alta performance e escalabilidade, 
                focando na integração entre sistemas e padrões de projeto.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="section-title text-center mb-5 fade-in">Habilidades</h2>
          </Col>
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="mb-4 fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="skill-item">
                <div className="d-flex justify-content-between mb-2">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <ProgressBar now={skill.percentage} variant="custom" />
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="section-title mb-4 fade-in">Experiência</h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-item fade-in" key={index} style={{ animationDelay: `${0.2 * index}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <p className="timeline-meta">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <h2 className="section-title mb-4 fade-in">Educação</h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="timeline-item fade-in" key={index} style={{ animationDelay: `${0.2 * index}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{edu.degree}</h3>
                    <p className="timeline-meta">
                      {edu.institution} | {edu.period}
                    </p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;