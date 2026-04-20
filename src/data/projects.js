import bichinhos from '../assets/images/bichinhos.png';
import community from '../assets/images/Community.png';
import guia from '../assets/images/guia.png';
import market from '../assets/images/Market.jpg';
import analise from '../assets/images/analise.jpg';
import monitor from '../assets/images/monitor.jpg';
import pyteste from '../assets/images/pyteste.png';
import orca from '../assets/images/orca.png';
import nit from '../assets/images/nit.png';
import nitcontrole from '../assets/images/nitcontrole.png';

export const projects = [
  {
    id: 1,
    title: "Reconhecimento-Facial-para-Login",
    description: "Desenvolvi uma API de Reconhecimento Facial para Login, utilizando Python, pkl, OpenCV e Flask. A API permite autenticação segura por meio de reconhecimento facial.",
    image: "https://placehold.co/600x400?text=Reconhecimento+Facial",
    tags: ["Python", "OpenCV", "Flask", "pkl", "API"],
    github: "https://github.com/wmeireles/Reconhecimento-Facial-para-Login",
    demo: "",
    category: "Backend"
  },
  {
    id: 2,
    title: "Projeto de Análise de Marketplace",
    description: "Criei um projeto prático de análise de dados simulando as vendas de um marketplace. A ideia foi aplicar habilidades de Python, visualização de dados e estratégia comercial para extrair insights úteis como:",
    image: market,
    tags: ["Python", "matplotlib", "seaborn", "Jupyter Notebook", "pandas",],
    github: "https://github.com/wmeireles/marketplace-insights",
    demo: "",
    category: "Backend"
  },
  {
    id: 3,
    title: "Galaxy API - BackEnd Fusion Challenge",
    description: "Esta é uma API RESTful desenvolvida para o desafio BackEnd Fusion, onde criamos e gerenciamos uma galáxia inspirada no universo de Star Wars. A aplicação permite CRUD completo de planetas, sistemas estelares, personagens e naves espaciais, com autenticação JWT e controle de permissão por afiliação (Jedi, Sith, Rebelde, Admin).",
    image: "https://placehold.co/600x400?text=Galaxy+API",
    tags: ["Node.js", "Express", "TypeScript", "Prisma ORM", "SQLite", "JWT", "Postman"],
    github: "https://github.com/wmeireles/galaxy-api",
    demo: "",
    category: "Backend"
  },
  {
    id: 4,
    title: "Password Generator",
    description: "Desenvolvi um gerador de senhas seguro e personalizável, que permite aos usuários criar senhas fortes com base em critérios específicos.",
    image: "https://placehold.co/600x400?text=Password+Generator",
    tags: ["HTML", "CSS", "JavaScript",],
    github: "https://github.com/wmeireles/PasswordGenerator",
    demo: "https://github.com/wmeireles/PasswordGenerator",
    category: "Frontend"
  },
  {
    id: 5,
    title: "Pokemon Project",
    description: "Projeto interativo de Pokémon, onde os usuários podem explorar informações sobre diferentes Pokémon, incluindo suas habilidades e evoluções.",
    image: "https://placehold.co/600x400?text=Pokemon+Project",
    tags: ["HTML", "CSS", "JavaScript",],
    github: "https://github.com/wmeireles/PokemonProject",
    demo: "https://github.com/wmeireles/PokemonProject",
    category: "Frontend"
  },
  {
    id: 6,
    title: "OrcaFácil",
    description: "OrcaFácil é um sistema moderno e simplificado para geração de orçamentos, ideal para pequenos negócios que desejam agilizar o processo de atendimento ao cliente e controle de produtos e serviços.",
    image: orca,
    tags: ["React.js", "React Router", "Bootstrap", "FastAPI", "PostgreSQL", "SQLite", "JWT"],
    github: "https://github.com/wmeireles/OrcaFacil",
    demo: "https://orcafacil.site/",
    category: "Frontend"
  },
  {
    id: 7,
    title: "Campo-Minado",
    description: "Jogo clássico Campo Minado desenvolvido com Kotlin para Android, com interface intuitiva e jogabilidade fluida.",
    image: "https://placehold.co/600x400?text=Campo+Minado",
    tags: ["Kotlin", "Android Studio", "Game Development", "Mobile App"],
    github: "https://github.com/wmeireles/Campo-Minado",
    demo: "",
    category: "Mobile"
  },
   {
    id: 17,
    title: "MarioBrosNumeros",
    description: "Jogo de matemática interativo inspirado no Mario Bros, onde os jogadores resolvem problemas matemáticos para avançar nos níveis.",
    image: "https://placehold.co/600x400?text=MarioBros+Numeros",
    tags: ["Kotlin", "Android Studio", "Game Development", "Math Education"],
    github: "https://github.com/wmeireles/MarioBrosNumeros",
    demo: "",
    category: "Mobile"
  },
  {
    id: 10,
    title: "Redesign Bichinhos da T.I",
    description: "Redesign completo da experiência de usuário para uma comuidade de desenvolvedores",
    image: bichinhos,
    tags: ["Figma", "User Research", "Wireframing", "Prototyping", "Usability Testing"],
    github: "https://www.behance.net/gallery/190675319/Bichinhos-da-TI",
    demo: "https://www.behance.net/gallery/190675319/Bichinhos-da-TI",
    category: "UX/UI"
  },
  {
    id: 11,
    title: "Landing Page Community Gamers",
    description: "Sistema de design completo com componentes, guia de estilo e documentação para comunidade de games.",
    image: community,
    tags: ["Adobe XD", "Style Guide", "Component Library", "Documentation", "Accessibility"],
    github: "https://www.behance.net/gallery/202971307/COMMUNITY-GAMERS-Landing-Page-UI",
    demo: "https://www.behance.net/gallery/202971307/COMMUNITY-GAMERS-Landing-Page-UI",
    category: "UX/UI"
  },
  {
    id: 12,
    title: "Landing Page - Guias de Moteis",
    description: "Design de interface para de moteis com foco em acessibilidade e experiência do usuário",
    image: guia,
    tags: ["Sketch", "Interaction Design", "User Testing", "Motion Design", "Design Thinking"],
    github: "https://www.behance.net/gallery/202894573/GUIA-DE-MOTEIS-GO-Landing-Page-Redesign-UI",
    demo: "https://www.behance.net/gallery/202894573/GUIA-DE-MOTEIS-GO-Landing-Page-Redesign-UI",
    category: "UX/UI"
  },
    {
    id: 13,
    title: "Log Analyzer com Notificações via WhatsApp e Telegram",
    description: "Sistema de análise de logs em tempo real com alertas inteligentes via WhatsApp e Telegram.",
    image: analise,
    tags: ["WebSocket", "Python", "Chart.js", "JavaScript", "Regex patterns"],
    github: "https://github.com/wmeireles/Analisador-de-Logs-com-Alertas-Inteligentes",
    demo: "https://github.com/wmeireles/Analisador-de-Logs-com-Alertas-Inteligentes",
    category: "Automação"
  },
  {
    id: 14,
    title: "Monitor de Uso do PC com Python + n8n",
    description: "Este projeto automatiza o monitoramento de tempo de uso de um computador com Python e n8n, salvando os dados em Google Sheets e permitindo o envio de relatórios diários por e-mail.",
    image: monitor,
    tags: ["n8n", "Python", "Google Sheets", "Webhook"],
    github: "https://github.com/wmeireles/monitor-uso-pc-python-n8n",
    demo: "https://github.com/wmeireles/monitor-uso-pc-python-n8n",
    category: "Automação"
  },
    {
    id: 15,
    title: "Motivational Notifier",
    description: "Um aplicativo de notificações motivacionais criado com FastAPI + Python! sAs mensagens são exibidas no seu desktop para inspirar você todos os dias.",
    image: "https://placehold.co/600x400?text=Motivational+Notifier",
    tags: ["FastAPI", "Python", "SQLAlchemy", "Plyer", "PyInstaller"],
    github: "https://github.com/wmeireles/motivational-notifier",
    demo: "https://github.com/wmeireles/motivational-notifier",
    category: "Automação"
  },
    {
    id: 16,
    title: "Conversor-Documento",
    description: "Este projeto é um Conversor de Documentos desenvolvido em Python, que permite converter arquivos entre diferentes formatos de forma simples e eficiente.",
    image: "https://placehold.co/600x400?text=Conversor+Documento",
    tags: ["Tkinter", "Python", "pdf2docx", "pytesseract", "PIL"],
    github: "https://github.com/wmeireles/Conversor-Documento",
    demo: "https://github.com/wmeireles/Conversor-Documento",
    category: "Automação"
  },
   {
    id: 18,
    title: "PyAPI Tester",
    description: "PyAPI Tester é uma ferramenta desktop escrita em Python para realizar testes de APIs REST de forma simples, intuitiva e com interface moderna. Ideal para desenvolvedores, testadores e profissionais de T.I que precisam enviar requisições HTTP com facilidade.",
    image: pyteste,
    tags: ["Python", "requests", "ttkbootstrap", "tkinter"],
    github: "https://github.com/wmeireles/PyAPI-Tester",
    demo: "",
    category: "Backend"
  },
    {
    id: 19,
    title: "NIT Sorocaba",
    description: "é responsável por oferecer suporte técnico e orientação quanto ao uso das tecnologias educacionais, promovendo a integração entre os recursos tecnológicos e o processo de ensino-aprendizagem.",
    image: nit,
    tags: ["React.js", "React Router", "Bootstrap",],
    github: "https://github.com/wmeireles/NIT-SOROCABA",
    demo: "https://nit-sorocaba.vercel.app/",
    category: "Frontend"
  },
     {
    id: 20,
    title: "NIT Sorocaba",
    description: "é responsável por oferecer suporte técnico e orientação quanto ao uso das tecnologias educacionais, promovendo a integração entre os recursos tecnológicos e o processo de ensino-aprendizagem.",
    image: nitcontrole,
    tags: ["React.js", "React Router", "Bootstrap", "FastAPI", "PostgreSQL", "SQLite", "JWT"],
    github: "https://github.com/wmeireles/nit-controle-frontend",
    demo: "https://nit-controle-frontend-jnid.vercel.app/",
    category: "Frontend"
  },
];