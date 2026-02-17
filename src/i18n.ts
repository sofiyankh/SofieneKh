import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        contact: "Contact"
      },
      hero: {
        title: "Sofiene Ben Khalifa - Full Stack Developer",
        subtitle: "React & Node.js",
        description: "Passionate full-stack developer with expertise in modern web technologies. I create scalable, user-friendly applications that solve real-world problems.",
        getInTouch: "Get In Touch",
        downloadCV: "Download CV"
      },
      about: {
        heading: "About Me",
        subheading: "Junior Full Stack Web Developer",
        description1: "I am a junior full stack web developer with more than four years of hands-on coding experience, which I started well before obtaining my Licence degree in Computer Science at ISI Mahdia. This early exposure allowed me to build strong technical foundations and disciplined problem-solving skills.",
        description2: "Throughout my academic journey, I consistently combined theoretical learning with practical application, developing web applications using modern front-end and back-end technologies. I am particularly interested in building reliable, well-structured systems that follow clean code and software engineering principles.",
        description3: "My objective is to continue my studies in a rigorous academic environment, deepen my expertise in software engineering and web technologies, and contribute to innovative projects through research, collaboration, and continuous improvement.",
        interestsHeading: "Interests & Technical Focus",
        focusAreas: [
          "Web Development",
          "Software Engineering",
          "Databases",
          "Cloud Basics",
          "DevOps Fundamentals",
          "UI/UX",
          "Open Source",
          "AI & Emerging Tech"
        ],
        highlights: {
          foundations_title: "Strong Foundations",
          foundations_desc: "Solid understanding of algorithms, data structures, and web fundamentals",
          collaborative_title: "Collaborative Mindset",
          collaborative_desc: "Comfortable working in teams, following best practices and clean workflows",
          learner_title: "Continuous Learner",
          learner_desc: "Quickly adapting to new tools, frameworks, and development standards",
          balance_title: "Academic & Practical Balance",
          balance_desc: "Combining university studies with consistent hands-on development"
        }
      },
      skills: {
        heading: "Skills & Expertise",
        subtitle: "A comprehensive overview of my technical skills and proficiency levels",
        techHeading: "Technologies I Work With",
        frontend: { heading: "Frontend Development" },
        backend: { heading: "Backend Development" },
        devops: { heading: "DevOps & Tools" }
      },
      experience: {
        heading: "Work Experience & Stages",
        subtitle: "Practical roles, internships and project experience aligned with my full-stack profile",
        jobs: [
          {
            role: "Backend Developer (Current)",
            company: "QuetraTech",
            description: [
              "Designing and implementing backend services and REST/GraphQL APIs to support web applications",
              "Building scalable data models and integrations with PostgreSQL and MongoDB",
              "Improving reliability with containerization (Docker) and CI/CD pipelines",
              "Collaborating with frontend and design teams to deliver performant, production-ready features"
            ]
          },
          {
            role: "Backend Developer",
            company: "Elyos Digital (Monastir)",
            description: [
              "Developed server-side APIs and services for agency web projects and client platforms",
              "Integrated third-party services and payment gateways; worked on API security and rate-limiting",
              "Optimized database queries and data access patterns to improve response times",
              "Participated in design reviews, sprint planning and handoffs with frontend teams"
            ]
          },
          {
            role: "Frontend Developer (Next.js) — Stage / Junior",
            company: "RB IT Solutions (Téboulba)",
            description: [
              "Built responsive, component-driven user interfaces using React and Next.js",
              "Worked on performance tuning, accessibility improvements and cross-browser testing",
              "Collaborated with mentors to convert designs into reusable UI components",
              "Contributed to documentation and supported trainees during workshops and bootcamps"
            ]
          },
          {
            role: "Full Stack Projects / Freelance",
            company: "Personal & Academic Projects",
            description: [
              "Multiple personal and academic web applications (front-end + back-end) demonstrating end-to-end skills",
              "Open-source contributions and collaborative projects used to practice best practices and testing",
              "Project-wide responsibilities: requirements, deployment, monitoring, and user feedback loops"
            ]
          }
        ]
      },
      projects: {
        heading: "Selected Projects — Full Stack, Security & Deployments",
        subtitle: "End-to-end projects I designed, implemented (frontend & backend), secured and deployed — curated for academic review and professional evaluation.",
        role: "Role",
        keyFeatures: "Key Features",
        demo: "Demo",
        preview: "Preview",
        video: "Video",
        viewGithub: "View More on GitHub",
        openTab: "Open in new tab",
        close: "Close",
        videoDemo: "Video Demo",
        livePreview: "Live Preview",
        loading: "Loading…",
        wipNotice: "Sofiene is still working on this project — demo & repo coming soon!",
        noPreviewNotice: "No live preview available — screenshots & source code on GitHub.",
        inProgress: "In Progress"
      },
      education: {
        heading: "Education & Certifications",
        subtitle: "My academic background and professional certifications that shape my expertise",
        educationTitle: "Education",
        certificationsTitle: "Certifications",
        keyCoursework: "Key Coursework",
        achievements: "Achievements",
        skillsValidated: "Skills Validated",
        credentialId: "Credential ID",
        continuousLearning: "Continuous Learning",
        continuousDesc: "Always expanding my knowledge through online courses, workshops, and tech conferences"
      },
      contact: {
        heading: "Get In Touch",
        subtitle: "Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.",
        contactInfo: "Contact Information",
        quickActions: "Quick Actions",
        available: "Available for Projects",
        availableDesc: "Currently accepting new projects and collaborations. Response time: 24 hours.",
        sendMessage: "Send Message",
        fullName: "Full Name",
        emailAddress: "Email Address",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your.email@example.com",
        subjectPlaceholder: "What's this about?",
        messagePlaceholder: "Tell me about your project, timeline, budget, or any questions you have...",
        send: "Send Message",
        tip: "Tip",
        tipText: "Include details about your project timeline, budget range, and specific requirements to help me provide you with the most accurate response.",
        email: "Email",
        phone: "Phone",
        whatsapp: "WhatsApp",
        location: "Location",
        videoCall: "Video Call",
        videoCallDesc: "Let's have a quick 15-minute video call",
        scheduleCall: "Schedule Call",
        consultation: "Consultation",
        consultationDesc: "Discuss your project requirements",
        bookMeeting: "Book Meeting",
        directMessage: "Direct Message",
        directMessageDesc: "Drop me a detailed message",
        sendEmail: "Send Email"
      },
      footer: {
        copy: "© 2025 Sofiene Ben Khalifa. Made with React",
        madeWith: "Made with",
        and: "and React",
        lastUpdated: "Last updated: December 15, 2025",
        quickLinks: "Quick Links",
        getInTouch: "Get In Touch",
        description: "Full-stack web & backend developer — focused on secure, production-ready applications. I design, build and deploy end-to-end projects with strong attention to security and scalability.",
        available: "Available for projects"
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        experience: "Expérience",
        projects: "Projets",
        education: "Éducation",
        contact: "Contact"
      },
      hero: {
        title: "Sofiene Ben Khalifa - Développeur Full Stack",
        subtitle: "React & Node.js",
        description: "Développeur full-stack passionné, expert en technologies web modernes. Je crée des applications évolutives et conviviales qui résolvent des problèmes réels.",
        getInTouch: "Contactez-moi",
        downloadCV: "Télécharger CV"
      },
      about: {
        heading: "À propos de moi",
        subheading: "Développeur Web Full Stack Junior",
        description1: "Je suis un développeur full stack junior avec plus de quatre ans d'expérience pratique en codage, que j'ai commencé bien avant l'obtention de ma Licence en Informatique à l'ISI Mahdia. Cette exposition précoce m'a permis de construire des bases techniques solides et des compétences en résolution de problèmes.",
        description2: "Tout au long de mon parcours académique, j'ai constamment combiné l'apprentissage théorique avec la pratique, en développant des applications web avec des technologies modernes front-end et back-end. Je suis particulièrement intéressé par la construction de systèmes fiables et bien structurés qui suivent les principes du clean code.",
        description3: "Mon objectif est de poursuivre mes études dans un environnement académique rigoureux, d'approfondir mon expertise en génie logiciel et technologies web, et de contribuer à des projets innovants à travers la recherche, la collaboration et l'amélioration continue.",
        interestsHeading: "Intérêts & Axes Techniques",
        focusAreas: [
          "Développement Web",
          "Ingénierie Logicielle",
          "Bases de données",
          "Notions de Cloud",
          "Fondamentaux DevOps",
          "UI/UX",
          "Open Source",
          "IA & Technologies émergentes"
        ],
        highlights: {
          foundations_title: "Bases Solides",
          foundations_desc: "Bonne compréhension des algorithmes, structures de données et fondamentaux web",
          collaborative_title: "Esprit Collaboratif",
          collaborative_desc: "À l'aise en équipe, suivant les bonnes pratiques et les workflows propres",
          learner_title: "Apprentissage Continu",
          learner_desc: "Adaptation rapide aux nouveaux outils, frameworks et standards de développement",
          balance_title: "Équilibre Académique & Pratique",
          balance_desc: "Combinaison des études universitaires avec un développement pratique constant"
        }
      },
      skills: {
        heading: "Compétences & Expertise",
        subtitle: "Une vue d'ensemble complète de mes compétences techniques et niveaux de maîtrise",
        techHeading: "Technologies que j'utilise",
        frontend: { heading: "Développement Frontend" },
        backend: { heading: "Développement Backend" },
        devops: { heading: "DevOps & Outils" }
      },
      experience: {
        heading: "Expérience Professionnelle & Stages",
        subtitle: "Rôles pratiques, stages et expériences de projets alignés avec mon profil full-stack",
        jobs: [
          {
            role: "Développeur Backend (Actuel)",
            company: "QuetraTech",
            description: [
              "Conception et mise en œuvre des services backend et des API REST/GraphQL pour les applications web",
              "Construction de modèles de données évolutifs et d'intégrations avec PostgreSQL et MongoDB",
              "Amélioration de la fiabilité avec la conteneurisation (Docker) et les pipelines CI/CD",
              "Collaboration avec les équipes frontend et design pour livrer des fonctionnalités performantes"
            ]
          },
          {
            role: "Développeur Backend",
            company: "Elyos Digital (Monastir)",
            description: [
              "Développement des API côté serveur et des services pour les projets web et les plateformes clients",
              "Intégration de services tiers et passerelles de paiement ; sécurité des API et limitation de débit",
              "Optimisation des requêtes de base de données et des modèles d'accès aux données",
              "Participation aux revues de conception, planification des sprints et transferts avec les équipes frontend"
            ]
          },
          {
            role: "Développeur Frontend (Next.js) — Stage / Junior",
            company: "RB IT Solutions (Téboulba)",
            description: [
              "Création d'interfaces utilisateur réactives et basées sur des composants avec React et Next.js",
              "Travail sur l'optimisation des performances, l'accessibilité et les tests cross-browser",
              "Collaboration avec les mentors pour convertir les maquettes en composants UI réutilisables",
              "Contribution à la documentation et soutien aux stagiaires lors d'ateliers et bootcamps"
            ]
          },
          {
            role: "Projets Full Stack / Freelance",
            company: "Projets Personnels & Académiques",
            description: [
              "Plusieurs applications web personnelles et académiques (front-end + back-end) démontrant des compétences de bout en bout",
              "Contributions open-source et projets collaboratifs pour pratiquer les bonnes pratiques et les tests",
              "Responsabilités globales : exigences, déploiement, surveillance et retours utilisateurs"
            ]
          }
        ]
      },
      projects: {
        heading: "Projets Sélectionnés — Full Stack, Sécurité & Déploiements",
        subtitle: "Projets de bout en bout que j'ai conçus, implémentés (frontend & backend), sécurisés et déployés — sélectionnés pour évaluation académique et professionnelle.",
        role: "Rôle",
        keyFeatures: "Fonctionnalités Clés",
        demo: "Démo",
        preview: "Aperçu",
        video: "Vidéo",
        viewGithub: "Voir plus sur GitHub",
        openTab: "Ouvrir dans un nouvel onglet",
        close: "Fermer",
        videoDemo: "Démo Vidéo",
        livePreview: "Aperçu en Direct",
        loading: "Chargement…",
        wipNotice: "Sofiene travaille encore sur ce projet — démo & dépôt bientôt disponibles !",
        noPreviewNotice: "Pas d'aperçu disponible — captures d'écran et code source sur GitHub.",
        inProgress: "En cours"
      },
      education: {
        heading: "Formation & Certifications",
        subtitle: "Mon parcours académique et mes certifications professionnelles qui façonnent mon expertise",
        educationTitle: "Formation",
        certificationsTitle: "Certifications",
        keyCoursework: "Cours Clés",
        achievements: "Réalisations",
        skillsValidated: "Compétences Validées",
        credentialId: "ID de Certification",
        continuousLearning: "Apprentissage Continu",
        continuousDesc: "Toujours en train d'élargir mes connaissances grâce aux cours en ligne, ateliers et conférences tech"
      },
      contact: {
        heading: "Contactez-moi",
        subtitle: "Prêt à démarrer votre prochain projet ? Discutons de la façon dont nous pouvons travailler ensemble pour concrétiser vos idées.",
        contactInfo: "Informations de Contact",
        quickActions: "Actions Rapides",
        available: "Disponible pour des Projets",
        availableDesc: "J'accepte actuellement de nouveaux projets et collaborations. Délai de réponse : 24 heures.",
        sendMessage: "Envoyer un Message",
        fullName: "Nom Complet",
        emailAddress: "Adresse Email",
        subject: "Sujet",
        message: "Message",
        namePlaceholder: "Votre nom complet",
        emailPlaceholder: "votre.email@exemple.com",
        subjectPlaceholder: "À propos de quoi ?",
        messagePlaceholder: "Parlez-moi de votre projet, délai, budget ou toute question...",
        send: "Envoyer le Message",
        tip: "Conseil",
        tipText: "Incluez des détails sur le calendrier de votre projet, la fourchette budgétaire et les exigences spécifiques pour m'aider à vous fournir la réponse la plus précise.",
        email: "Email",
        phone: "Téléphone",
        whatsapp: "WhatsApp",
        location: "Localisation",
        videoCall: "Appel Vidéo",
        videoCallDesc: "Faisons un rapide appel vidéo de 15 minutes",
        scheduleCall: "Planifier un Appel",
        consultation: "Consultation",
        consultationDesc: "Discutons de vos besoins de projet",
        bookMeeting: "Réserver une Réunion",
        directMessage: "Message Direct",
        directMessageDesc: "Envoyez-moi un message détaillé",
        sendEmail: "Envoyer un Email"
      },
      footer: {
        copy: "© 2025 Sofiene Ben Khalifa. Réalisé avec React",
        madeWith: "Réalisé avec",
        and: "et React",
        lastUpdated: "Dernière mise à jour : 15 décembre 2025",
        quickLinks: "Liens Rapides",
        getInTouch: "Me Contacter",
        description: "Développeur web full-stack & backend — axé sur des applications sécurisées et prêtes pour la production. Je conçois, construis et déploie des projets de bout en bout.",
        available: "Disponible pour des projets"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    initImmediate: false,
  });

export default i18n;