export type Language = "pt" | "en";

export const translations = {
  pt: {
    navbar: {
      about: "Sobre",
      services: "Serviços",
      work: "Projetos",
      contact: "Contato",
      hire: "Contratar",
    },
    hero: {
      available: "Disponível para novos projetos",
      title: "Sedenir Vitorino",
      subtitle: "Desenvolvedor Full Stack",
      description:
        "Desenvolvo sistemas personalizados, plataformas SaaS, dashboards e aplicações empresariais que ajudam empresas a automatizar processos e escalar operações.",
      cta1: "Ver Projetos",
      cta2: "Entrar em Contato",
    },
    about: {
      label: "Sobre",
      heading: "Mentalidade de engenharia,\nsoftware de alto nível.",
      p1: "Sou estudante de Engenharia Civil e Desenvolvedor Full Stack com profundo entendimento de como as empresas operam — não apenas tecnicamente, mas estrutural e operacionalmente.",
      p2: "Essa combinação me dá uma vantagem real: não escrevo apenas código. Analiso fluxos de trabalho, identifico gargalos e projeto sistemas que resolvem problemas operacionais com precisão e clareza.",
      p3: "De plataformas SaaS a ferramentas de gestão interna, construo softwares que se integram à forma como seu negócio realmente funciona — e não o contrário.",
      highlights: [
        { label: "Formação", value: "Engenharia Civil + Desenvolvimento de Software" },
        { label: "Foco", value: "Sistemas Empresariais e Plataformas SaaS" },
        { label: "Abordagem", value: "Desenvolvimento orientado à engenharia" },
        { label: "Setor", value: "Construção, Empresas e Tecnologia" },
      ],
    },
    services: {
      label: "Serviços",
      heading: "O que eu construo",
      subtext: "Do conceito à produção — cubro todo o ciclo de desenvolvimento.",
      items: [
        {
          title: "Plataformas SaaS",
          description:
            "Desenvolvimento SaaS completo com autenticação, billing, multi-tenancy e arquitetura escalável.",
        },
        {
          title: "Sistemas de Gestão Empresarial",
          description:
            "Soluções personalizadas estilo ERP para gerenciar operações, estoque, finanças e fluxos de trabalho.",
        },
        {
          title: "Tecnologia para Construção",
          description:
            "Software especializado para construtoras — controle de obras, orçamentos e gestão de recursos.",
        },
        {
          title: "Dashboards Administrativos",
          description:
            "Painéis de controle ricos em dados com KPIs em tempo real, relatórios e visibilidade operacional.",
        },
        {
          title: "Ferramentas Internas",
          description:
            "Sistemas internos sob medida que substituem planilhas e eliminam processos manuais.",
        },
        {
          title: "Aplicações Web Personalizadas",
          description:
            "Aplicações web sob medida, projetadas e desenvolvidas do zero para atender suas necessidades exatas.",
        },
      ],
    },
    work: {
      label: "Projetos Selecionados",
      heading: "Projetos que entregaram resultados",
      subtext: "Cada projeto é a solução para um problema real de negócio.",
      projects: [
        {
          category: "Tecnologia para Construção",
          title: "Plataforma de Gestão de Obras",
          description:
            "Plataforma web para centralizar planejamento, orçamentos, controle financeiro e gestão operacional de projetos de construção.",
          tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
        },
        {
          category: "Operações Empresariais",
          title: "Sistema de Gestão Empresarial",
          description:
            "Solução personalizada para otimizar fluxos de trabalho, aumentar a produtividade e centralizar dados da empresa entre departamentos.",
          tags: ["React", "NestJS", "PostgreSQL", "TypeScript"],
        },
        {
          category: "Aplicação Web",
          title: "Plataforma Competitiva",
          description:
            "Aplicação web escalável focada em rankings, estatísticas, gestão de usuários e organização de eventos.",
          tags: ["Next.js", "TypeScript", "Node.js", "MySQL"],
        },
        {
          category: "Dashboard Empresarial",
          title: "Dashboard Executivo",
          description:
            "Dashboard de gestão com KPIs, relatórios e visibilidade operacional para tomada de decisões estratégicas.",
          tags: ["React", "TypeScript", "PostgreSQL", "Docker"],
        },
      ],
    },
    techStack: {
      label: "Tecnologias",
      heading: "Construído com as ferramentas certas",
      subtext:
        "Uma stack moderna e testada em produção, escolhida pela confiabilidade e escala.",
    },
    process: {
      label: "Processo",
      heading: "Como eu trabalho",
      subtext:
        "Uma abordagem estruturada que entrega resultados previsíveis e de alta qualidade.",
      steps: [
        {
          number: "01",
          title: "Descoberta",
          description:
            "Entendimento do seu negócio, objetivos e desafios para definir o escopo e os requisitos certos.",
        },
        {
          number: "02",
          title: "Planejamento",
          description:
            "Design de arquitetura, roadmap técnico e cronograma do projeto antes de uma única linha de código.",
        },
        {
          number: "03",
          title: "Desenvolvimento",
          description:
            "Desenvolvimento iterativo com atualizações frequentes, código limpo e ciclos contínuos de feedback.",
        },
        {
          number: "04",
          title: "Implantação",
          description:
            "Lançamento em produção com infraestrutura adequada, monitoramento e otimização de performance.",
        },
        {
          number: "05",
          title: "Suporte Contínuo",
          description:
            "Manutenção contínua, novas funcionalidades e suporte técnico para manter seu sistema funcionando.",
        },
      ],
    },
    contact: {
      label: "Contato",
      heading: "Vamos construir\nalgo juntos.",
      subtext:
        "Tem um projeto em mente? Me conte e responderei em até 24 horas.",
      nameLabel: "Nome",
      emailLabel: "E-mail",
      messageLabel: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      messagePlaceholder: "Me conte sobre seu projeto...",
      submit: "Solicitar um Projeto",
      sending: "Enviando...",
      sent: "Mensagem enviada ✓",
      error: "Erro ao enviar. Tente novamente.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },

  en: {
    navbar: {
      about: "About",
      services: "Services",
      work: "Work",
      contact: "Contact",
      hire: "Hire Me",
    },
    hero: {
      available: "Available for new projects",
      title: "Sedenir Vitorino",
      subtitle: "Full Stack Developer",
      description:
        "I develop custom systems, SaaS platforms, dashboards, and business applications that help companies automate processes and scale operations.",
      cta1: "View Work",
      cta2: "Contact Me",
    },
    about: {
      label: "About",
      heading: "Engineering mindset,\nsoftware expertise.",
      p1: "I'm a Civil Engineering student and Full Stack Developer with a deep understanding of how businesses operate — not just technically, but structurally and operationally.",
      p2: "This combination gives me an edge: I don't just write code. I analyze workflows, identify bottlenecks, and design systems that solve real operational problems with precision and clarity.",
      p3: "From SaaS platforms to internal management tools, I build software that integrates into the way your business actually works — not the other way around.",
      highlights: [
        { label: "Background", value: "Civil Engineering + Software Development" },
        { label: "Focus", value: "Business Systems & SaaS Platforms" },
        { label: "Approach", value: "Engineering-driven, problem-first thinking" },
        { label: "Industry", value: "Construction, Business & Technology" },
      ],
    },
    services: {
      label: "Services",
      heading: "What I build",
      subtext: "From idea to production — I cover the full development lifecycle.",
      items: [
        {
          title: "SaaS Platforms",
          description:
            "End-to-end SaaS development with authentication, billing, multi-tenancy, and scalable architecture.",
        },
        {
          title: "Business Management Systems",
          description:
            "Custom ERP-style solutions to manage operations, inventory, finance, and team workflows.",
        },
        {
          title: "Construction Technology",
          description:
            "Specialized software for construction companies — project tracking, budgeting, and resource management.",
        },
        {
          title: "Administrative Dashboards",
          description:
            "Data-rich control panels with real-time KPIs, reporting, and full operational visibility.",
        },
        {
          title: "Internal Company Tools",
          description:
            "Purpose-built internal systems that replace spreadsheets and eliminate manual processes.",
        },
        {
          title: "Custom Web Applications",
          description:
            "Bespoke web applications designed and built from scratch to fit your exact requirements.",
        },
      ],
    },
    work: {
      label: "Selected Work",
      heading: "Projects that delivered results",
      subtext: "Each project is a solution to a real business problem.",
      projects: [
        {
          category: "Construction Technology",
          title: "Construction Management Platform",
          description:
            "A web platform designed to centralize planning, budgeting, financial control, and operational management for construction projects.",
          tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
        },
        {
          category: "Business Operations",
          title: "Business Operations System",
          description:
            "A custom solution developed to streamline workflows, improve productivity, and centralize company data across departments.",
          tags: ["React", "NestJS", "PostgreSQL", "TypeScript"],
        },
        {
          category: "Web Application",
          title: "Competitive Platform",
          description:
            "A scalable web application focused on rankings, statistics, user management, and event organization.",
          tags: ["Next.js", "TypeScript", "Node.js", "MySQL"],
        },
        {
          category: "Enterprise Dashboard",
          title: "Enterprise Dashboard",
          description:
            "A management dashboard providing KPIs, reporting, and operational visibility for executive decision-making.",
          tags: ["React", "TypeScript", "PostgreSQL", "Docker"],
        },
      ],
    },
    techStack: {
      label: "Technologies",
      heading: "Built with the right tools",
      subtext:
        "A modern, production-tested stack chosen for reliability and scale.",
    },
    process: {
      label: "Process",
      heading: "How I work",
      subtext:
        "A structured approach that delivers predictable, high-quality results.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Understanding your business, goals, and challenges to define the right scope and requirements.",
        },
        {
          number: "02",
          title: "Planning",
          description:
            "Architecture design, technical roadmap, and project timeline before a single line of code is written.",
        },
        {
          number: "03",
          title: "Development",
          description:
            "Iterative development with regular updates, clean code, and continuous feedback loops.",
        },
        {
          number: "04",
          title: "Deployment",
          description:
            "Production launch with proper infrastructure, monitoring, and performance optimization.",
        },
        {
          number: "05",
          title: "Continuous Support",
          description:
            "Ongoing maintenance, feature additions, and technical support to keep your system running smoothly.",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's build\nsomething together.",
      subtext:
        "Have a project in mind? Tell me about it and I'll get back to you within 24 hours.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      submit: "Request a Project",
      sending: "Sending...",
      sent: "Message sent ✓",
      error: "Failed to send. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export type T = typeof translations.pt;
