import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaServer, FaCogs, FaDatabase, FaCheck } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bannerImage from '../assets/images/banner.jpg';
import orca from '../assets/images/orca.png';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef();

  useGSAP(() => {
    // Animação de Entrada na Hero
    const heroTl = gsap.timeline();
    heroTl.from('.hero-name', {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from('.hero-description', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.8")
    .from('.hero-buttons', {
      y: 15,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.7");

    // Stagger (Efeito cascata) nos Cards de Serviço
    gsap.from('.skill-item', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // Reveal em Scroll Genérico 
    const fadeElements = gsap.utils.toArray('.gsap-fade-up');
    fadeElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
    });

  }, { scope: container });

  return (
    <div className="home-page" ref={container}>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={10} className="hero-content">
              <span className="overline-text gsap-fade-up">Engenharia e Consultoria</span>
              <h1 className="hero-name">
                Engenheiro de Software
              </h1>
              <p className="hero-description mx-auto">
                Especializado em modernizar arquiteturas legadas, integrar fluxos de dados e implantar pipelines seguros para empresas que buscam soluções definitivas.
              </p>
              <div className="hero-buttons">
                <Link to="/contact">
                  <Button variant="light" className="me-3 mb-3 btn-minimal-primary">
                    Falar com Willian <FaArrowRight className="ms-2" />
                  </Button>
                </Link>
                <a href="#solucoes">
                  <Button variant="outline-light" className="mb-3 btn-minimal-secondary">Ver Especialidades</Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="solucoes" className="skills-section section-padding">
        <Container>
          <div className="section-header text-center mb-5 gsap-fade-up">
            <h2 className="section-title">Especialidades Técnicas</h2>
            <p className="section-subtitle mx-auto">Abordagem focada em resultados e redução de custos através de engenharia sólida.</p>
          </div>
          
          <Row className="justify-content-center g-4">
            <Col md={4} className="skill-item">
              <div className="minimal-card h-100 p-4">
                <div className="skill-icon">
                  <FaCogs />
                </div>
                <h3>Automação de Múltiplos Fluxos</h3>
                <p>Desenvolvimento focado em scripts e bots para varredura, triagem de tickets e aceleração de esteiras operacionais.</p>
              </div>
            </Col>
            <Col md={4} className="skill-item">
              <div className="minimal-card h-100 p-4">
                <div className="skill-icon">
                  <FaServer />
                </div>
                <h3>Arquitetura Cloud & N3</h3>
                <p>Otimização de servidores Linux/Windows. Redução de vulnerabilidades utilizando governança corporativa e DevOps.</p>
              </div>
            </Col>
            <Col md={4} className="skill-item">
              <div className="minimal-card h-100 p-4">
                <div className="skill-icon">
                  <FaDatabase />
                </div>
                <h3>Integração RAG Local</h3>
                <p>Sistemas robustos de busca semântica em base de dados fechadas (On-Premises), preservando a máxima segurança de dados.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section section-padding">
         <Container>
           <Row className="align-items-center">
             <Col lg={5} className="mb-5 mb-lg-0 gsap-fade-up">
               <div className="minimal-image-wrapper p-2">
                 <img 
                   src={bannerImage} 
                   alt="Willian Meireles" 
                   className="img-fluid w-100" 
                   style={{ borderRadius: '8px' }} 
                 />
               </div>
             </Col>
             <Col lg={7} className="ps-lg-5 gsap-fade-up">
                <h2 className="section-title mb-4">Experiência comprovada em Big Techs e Corporações.</h2>
                <p className="text-muted-modern mb-4">
                  Sou Willian Meireles, atuando no suporte crítico, engenharia de dados e desenvolvimento Fullstack por anos em gigantes do mercado como Stefanini e Global Hitss.
                </p>
                <p className="text-muted-modern mb-4">
                  O objetivo principal das minhas consultorias e entregáveis baseia-se em parar de apagar incêndios e aplicar melhorias que geram alta economia.
                </p>
                <ul className="stats-list list-unstyled">
                    <li className="mb-3"><FaCheck className="text-accent me-2" /> Entregas 10x mais eficientes em relação ao fluxo legado</li>
                    <li className="mb-3"><FaCheck className="text-accent me-2" /> Foco extremo em Data Privacy e escalabilidade</li>
                    <li className="mb-3"><FaCheck className="text-accent me-2" /> Domínio amplo em Python, Node.js e Infraestrutura</li>
                </ul>
             </Col>
           </Row>
         </Container>
      </section>

      <section className="featured-projects section-padding">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5 gsap-fade-up">
            <h2 className="section-title mb-0">Casos Documentados</h2>
            <Link to="/projects" className="view-all">
              Ver Todos <FaArrowRight className="ms-2" />
            </Link>
          </div>
          <Row>
            <Col lg={12} className="mb-5 gsap-fade-up">
              <div className="minimal-card featured-project-card overflow-hidden">
                <Row className="g-0 align-items-center">
                  <Col lg={7} className="p-4 p-md-5">
                    <div className="featured-project-content bg-transparent shadow-none">
                      <p className="project-overline">Solução Destaque</p>
                      <h3 className="featured-project-title">Sistema Operacional: OrcaFacil</h3>
                      <div className="featured-project-description minimal-card-inner">
                        <p>
                          Plataforma completa para geração e controle de orçamentos e serviços. Utiliza infraestrutura escalável que ajuda pequenos negócios a profissionalizarem o atendimento.
                        </p>
                      </div>
                      <ul className="featured-project-tech-list">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                        <li>Automação</li>
                      </ul>
                      <div className="featured-project-links mt-3">
                        <a href="https://orcafacil.site/" target="_blank" rel="noopener noreferrer" aria-label="Acessar plataforma" className="btn-minimal-link">
                           Ver Projeto em Produção <FaArrowRight className="ms-2"/>
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="featured-project-image h-100">
                      <div className="featured-image h-100 w-100" style={{ backgroundImage: `url(${orca})`, minHeight: '300px' }}></div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="gsap-fade-up">
              <div className="minimal-card p-5 text-center cta-card-minimal">
                <h2 className="cta-title mb-3">Sua operação precisa de maturidade técnica?</h2>
                <p className="cta-description mb-5 mx-auto">
                  Agende uma breve call para discutirmos os seus desafios de sistema e encontrarmos a arquitetura definitiva para o seu negócio.
                </p>
                <Link to="/contact">
                  <Button variant="light" size="lg" className="cta-button btn-minimal-primary">
                    Reservar Horário na Agenda
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;