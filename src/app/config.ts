import {
  AbouData,
  Educations,
  Experiences,
  NavBarList,
  Projects,
  SkillCategories,
  SkillData,
} from './interfaces/main';

/* ===================== SKILLS ===================== */
export const skillCategories: SkillCategories[] = [
  {
    categoryName: 'Frontend',
    skills: [
      {
        skillName: 'HTML5',
        skillColor: '#E44D26',
        iconClass: 'devicon-html5-plain colored',
      },
      {
        skillName: 'CSS3',
        skillColor: '#1572B6',
        iconClass: 'devicon-css3-plain colored',
      },
      {
        skillName: 'JavaScript (ES6+)',
        skillColor: '#F7DF1E',
        iconClass: 'devicon-javascript-plain colored',
      },
      {
        skillName: 'TypeScript',
        skillColor: '#3178C6',
        iconClass: 'devicon-typescript-plain colored',
      },
      {
        skillName: 'React',
        skillColor: '#61DAFB',
        iconClass: 'devicon-react-original colored',
      },
      {
        skillName: 'Angular',
        skillColor: '#DD0031',
        iconClass: 'devicon-angularjs-plain colored',
      },
      {
        skillName: 'Next.js (Basic)',
        skillColor: '#000000',
        iconClass: 'devicon-nextjs-plain',
      },
      {
        skillName: 'Tailwind CSS',
        skillColor: '#06B6D4',
        iconClass: 'devicon-tailwindcss-plain colored',
      },
      {
        skillName: 'Bootstrap',
        skillColor: '#7952B3',
        iconClass: 'devicon-bootstrap-plain colored',
      },
    ],
  },

  {
    categoryName: 'Backend',
    skills: [
      {
        skillName: 'Node.js',
        skillColor: '#8CC84B',
        iconClass: 'devicon-nodejs-plain colored',
      },
      {
        skillName: 'Express.js',
        skillColor: '#000000',
        iconClass: 'devicon-express-original',
      },
      {
        skillName: 'REST APIs',
        skillColor: '#4CAF50',
        iconClass: 'devicon-express-original',
      },
      {
        skillName: 'JWT Authentication',
        skillColor: '#6C63FF',
        iconClass: 'devicon-nodejs-plain',
      },
    ],
  },

  {
    categoryName: 'State & APIs',
    skills: [
      {
        skillName: 'Redux Toolkit',
        skillColor: '#764ABC',
        iconClass: 'devicon-redux-original',
      },
      {
        skillName: 'Context API',
        skillColor: '#61DAFB',
        iconClass: 'devicon-react-original',
      },
    ],
  },

  {
    categoryName: 'Databases',
    skills: [
      {
        skillName: 'MongoDB',
        skillColor: '#47A248',
        iconClass: 'devicon-mongodb-plain colored',
      },
      {
        skillName: 'PostgreSQL (Basic)',
        skillColor: '#336791',
        iconClass: 'devicon-postgresql-plain colored',
      },
    ],
  },

  {
    categoryName: 'Tools & Platforms',
    skills: [
      {
        skillName: 'Git',
        skillColor: '#F05032',
        iconClass: 'devicon-git-plain colored',
      },
      {
        skillName: 'GitHub',
        skillColor: '#181717',
        iconClass: 'devicon-github-original',
      },
      {
        skillName: 'Postman',
        skillColor: '#FF6C37',
        iconClass: 'devicon-postman-plain colored',
      },
      {
        skillName: 'Netlify',
        skillColor: '#00C7B7',
        iconClass: 'devicon-netlify-plain colored',
      },
      {
        skillName: 'Render',
        skillColor: '#46E3B7',
        iconClass: 'devicon-docker-plain',
      },
      {
        skillName: 'Figma',
        skillColor: '#A259FF',
        iconClass: 'devicon-figma-plain',
      },
      {
        skillName: 'Adobe Photoshop',
        skillColor: '#31A8FF',
        iconClass: 'devicon-photoshop-plain',
      },
      {
        skillName: 'Adobe Illustrator',
        skillColor: '#FF9A00',
        iconClass: 'devicon-illustrator-plain',
      },
    ],
  },
];

export const skillsData: SkillData[] = [
  /* ===== Frontend ===== */
  {
    skillName: 'HTML5',
    skillColor: '#E44D26',
    iconClass: 'devicon-html5-plain colored',
  },
  {
    skillName: 'CSS3',

    skillColor: '#1572B6',
    iconClass: 'devicon-css3-plain colored',
  },
  {
    skillName: 'JavaScript (ES6+)',

    skillColor: '#F7DF1E',
    iconClass: 'devicon-javascript-plain colored',
  },
  {
    skillName: 'TypeScript',

    skillColor: '#3178C6',
    iconClass: 'devicon-typescript-plain colored',
  },
  {
    skillName: 'React',

    skillColor: '#61DAFB',
    iconClass: 'devicon-react-original colored',
  },
  {
    skillName: 'Angular',

    skillColor: '#DD0031',
    iconClass: 'devicon-angularjs-plain colored',
  },
  {
    skillName: 'Next.js (Basic)',

    skillColor: '#000000',
    iconClass: 'devicon-nextjs-plain',
  },
  {
    skillName: 'Tailwind CSS',

    skillColor: '#06B6D4',
    iconClass: 'devicon-tailwindcss-plain colored',
  },
  {
    skillName: 'Bootstrap',

    skillColor: '#7952B3',
    iconClass: 'devicon-bootstrap-plain colored',
  },

  /* ===== State Management ===== */
  {
    skillName: 'Redux Toolkit',
    skillColor: '#764ABC',
    iconClass: 'devicon-redux-original',
  },
  {
    skillName: 'Context API',

    skillColor: '#61DAFB',
    iconClass: 'devicon-react-original',
  },

  /* ===== Backend ===== */
  {
    skillName: 'Node.js',

    skillColor: '#8CC84B',
    iconClass: 'devicon-nodejs-plain colored',
  },
  {
    skillName: 'Express.js',

    skillColor: '#000000',
    iconClass: 'devicon-express-original',
  },
  {
    skillName: 'RESTful APIs',

    skillColor: '#4CAF50',
    iconClass: 'devicon-nodejs-plain',
  },
  {
    skillName: 'JWT Authentication',

    skillColor: '#000000',
    iconClass: 'devicon-nodejs-plain',
  },

  /* ===== Databases ===== */
  {
    skillName: 'MongoDB',

    skillColor: '#47A248',
    iconClass: 'devicon-mongodb-plain colored',
  },
  {
    skillName: 'PostgreSQL (Basic)',

    skillColor: '#336791',
    iconClass: 'devicon-postgresql-plain colored',
  },

  /* ===== Tools & Platforms ===== */
  {
    skillName: 'Git',

    skillColor: '#F05032',
    iconClass: 'devicon-git-plain colored',
  },
  {
    skillName: 'GitHub',

    skillColor: '#181717',
    iconClass: 'devicon-github-original',
  },
  {
    skillName: 'Postman',

    skillColor: '#FF6C37',
    iconClass: 'devicon-postman-plain colored',
  },
  {
    skillName: 'Netlify',

    skillColor: '#00C7B7',
    iconClass: 'devicon-netlify-plain colored',
  },
  {
    skillName: 'Render',

    skillColor: '#46E3B7',
    iconClass: 'devicon-docker-plain',
  },

  /* ===== UI / Design ===== */
  {
    skillName: 'Figma',

    skillColor: '#A259FF',
    iconClass: 'devicon-figma-plain',
  },
  {
    skillName: 'Adobe Photoshop',

    skillColor: '#31A8FF',
    iconClass: 'devicon-photoshop-plain',
  },
  {
    skillName: 'Adobe Illustrator',

    skillColor: '#FF9A00',
    iconClass: 'devicon-illustrator-plain',
  },
];

/* ===================== NAVBAR ===================== */

export const navBarList: NavBarList[] = [
  { title: 'home', label: 'HOME' },
  { title: 'about', label: 'ABOUT' },
  { title: 'skills', label: 'SKILLS' },
  { title: 'project', label: 'PROJECTS' },
  { title: 'education', label: 'CAREER' },
  { title: 'contact', label: 'CONTACT' },
];

/* ===================== ABOUT ===================== */

export const aboutData: AbouData[] = [
  {
    title: 'Frontend Development',
    content:
      'I build responsive, accessible, and modern user interfaces using React, Angular, and Tailwind CSS with clean component architecture.',
  },
  {
    title: 'Full Stack Development',
    content:
      'I develop full-stack applications using MERN and MEAN stacks, working with REST APIs, authentication, and database integration.',
  },
  {
    title: 'UI & Performance',
    content:
      'I focus on performance, accessibility, and smooth user experience with modern UI patterns and optimized workflows.',
  },
];

/* ===================== PROJECTS ===================== */

export const projects: Projects[] = [
  {
    title: 'FinMate – Expense Tracker Application',
    techStack: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'ApexCharts',
      'Tailwind CSS',
    ],
    description:
      'A full-stack expense tracking and analytics application that allows users to securely manage expenses, visualize spending patterns, and export financial data through an intuitive dashboard.',
    features: [
      'Secure JWT-based authentication with protected routes',
      'User profile management with edit and delete account options',
      'Add, edit, and delete expenses with category and payment type',
      'Monthly expense analytics with bar charts',
      'Category-wise expense breakdown using donut charts',
      'CSV import for bulk expense upload',
      'CSV export for expense reporting',
      'Responsive dashboard with real-time updates',
    ],
    github: 'https://github.com/kirandinesh/Expense-tracker-MEAN.git',
    liveDemo: 'https://finmate-expense.netlify.app',
  },
  {
    title: 'Kannur University Kalolsavam – Result Publishing Platform',
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],
    description:
      'A real-world university-level result publishing and championship management platform built for the Kannur University Union Arts Festival to display event results, college-wise points, and championship standings.',
    features: [
      'Admin-controlled event and result publishing',
      'Result updates available on page refresh',
      'Overall championship leaderboard with ranks and points',
      'College-wise and event-wise point aggregation',
      'Latest results and published results sections',
      'Achievements and championship highlights display',
      'Responsive UI optimized for large public access',
      'Role-based access for admin and public users',
    ],
    github: 'https://github.com/kirandinesh/Kannur-university-kalolsavam.git',
    liveDemo: 'https://kannur-university-kalolsavam-2wto.onrender.com',
  },
  {
    title: 'MERN E-Commerce Website',
    techStack: [
      'React',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PayPal Sandbox API',
      'Bootstrap',
    ],
    description:
      'A full-stack e-commerce web application that allows users to browse products, manage a shopping cart, and complete orders using a secure checkout flow with PayPal Sandbox integration.',
    features: [
      'User authentication with login and logout',
      'Product listing and product detail pages',
      'Shopping cart with quantity management and item removal',
      'Multi-step checkout flow (cart → checkout → order completion)',
      'Shipping address and order summary handling',
      'PayPal Sandbox payment gateway integration for testing payments',
      'Responsive UI optimized for desktop and mobile',
    ],
    github: 'https://github.com/kirandinesh/mern-e-commerce-website.git',
    liveDemo: 'https://mern-e-commerce-website-1-v5bp.onrender.com',
  },

  {
    title: 'Socially – Social Media App (Learning Project)',
    techStack: ['Next.js', 'React', 'Prisma', 'Clerk Auth'],
    description:
      'A learning-focused social media application built while exploring Next.js fundamentals.',
    features: [
      'Authentication using Clerk',
      'Post creation and user interactions',
      'Modern UI with Tailwind CSS',
    ],
    github: 'https://github.com/kirandinesh/nextjs-socially.git',
    liveDemo: '',
  },
  {
    title: 'Personal Portfolio Website (React)',
    techStack: ['React', 'Vite', 'Tailwind CSS'],
    description:
      'A modern and responsive portfolio website showcasing projects, skills, and experience.',
    features: [
      'Responsive and accessible design',
      'Smooth navigation and animations',
      'Live demos and GitHub links',
    ],
    github: 'https://github.com/kirandinesh/KIRAN-PORTFOLIO.git',
    liveDemo: 'https://kirandineshportfolio.netlify.app',
  },
  {
    title: 'Personal Portfolio Website (Angular)',
    techStack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    description:
      'An Angular-based portfolio created to practice component architecture and routing.',
    features: [
      'Component-based architecture',
      'Angular routing and forms',
      'Responsive layout',
    ],
    github: 'https://github.com/kirandinesh/KIRAN-PORTFOLIO-MEAN.git',
    liveDemo: '',
  },
];

/* ===================== EDUCATION ===================== */

export const educationList: Educations[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution:
      'St. Thomas College of Engineering and Technology, Kannur, Kerala',
    duration: '08/2020 - 05/2024',
    year: 2024,
  },
];

/* ===================== EXPERIENCE ===================== */

export const experiences: Experiences[] = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'Zoople Technologies',
    location: 'Kochi',
    duration: '11/2024 - 12/2024',
    responsibilities: [
      'Developed responsive frontend components using React and Tailwind CSS.',
      'Integrated frontend applications with backend REST APIs.',
      'Optimized UI performance and ensured cross-device compatibility.',
    ],
    year: 2024,
  },
  {
    title: 'MEAN Stack Developer Intern',
    company: 'Inmakes Infotech',
    location: 'Kerala',
    duration: '02/2025 - 05/2025',
    responsibilities: [
      'Built Angular-based dashboards and reusable UI components.',
      'Worked on REST API integration, JWT authentication, and data visualization.',
    ],
    year: 2025,
  },
];
