import {
  AbouData,
  Educations,
  Experiences,
  NavBarList,
  Projects,
  SkillData,
} from './interfaces/main';

export const skillsData: SkillData[] = [
  {
    skillName: 'HTML',
    degree: 95,
    skillColor: '#E44D26',
    iconClass: 'devicon-html5-plain colored',
  },
  {
    skillName: 'JavaScript',
    degree: 75,
    skillColor: '#F7DF1E',
    iconClass: 'devicon-javascript-plain colored',
  },
  {
    skillName: 'ReactJs',
    degree: 80,
    skillColor: '#61DAFB',
    iconClass: 'devicon-react-original colored',
  },
  {
    skillName: 'AngularJs',
    degree: 80,
    skillColor: '#61DAFB',
    iconClass: 'devicon-angularjs-plain colored',
  },
  {
    skillName: 'CSS3',
    degree: 95,
    skillColor: '#1572B6',
    iconClass: 'devicon-css3-plain colored',
  },
  {
    skillName: 'Bootstrap',
    degree: 65,
    skillColor: '#563D7C',
    iconClass: 'devicon-bootstrap-plain colored',
  },
  {
    skillName: 'TailwindCSS',
    degree: 85,
    skillColor: '#06B6D4',
    iconClass: 'devicon-tailwindcss-plain colored',
  },
  {
    skillName: 'ReduxToolkit',
    degree: 60,
    skillColor: '#764ABC',
    iconClass: 'devicon-redux-original',
  },
  {
    skillName: 'Node.js',
    degree: 65,
    skillColor: '#8CC84B',
    iconClass: 'devicon-nodejs-plain colored',
  },
  {
    skillName: 'Express.js',
    degree: 60,
    skillColor: '#4D4D4D',
    iconClass: 'devicon-express-original',
  },
  {
    skillName: 'MongoDB',
    degree: 55,
    skillColor: '#47A248',
    iconClass: 'devicon-mongodb-plain colored',
  },
  {
    skillName: 'GitHub',
    degree: 70,
    skillColor: '#F1502F',
    iconClass: 'devicon-github-original',
  },
  {
    skillName: 'RESTfulAPIs',
    degree: 65,
    skillColor: '#659B41',
    iconClass: 'devicon-fastapi-plain colored',
  },
  {
    skillName: 'Photoshop',
    degree: 65,
    skillColor: '#31A8FF',
    iconClass: 'devicon-photoshop-plain',
  },
];

export const navBarList: NavBarList[] = [
  { title: 'home', label: 'HOME' },
  { title: 'about', label: 'ABOUT' },
  { title: 'skills', label: 'SKILLS' },
  { title: 'project', label: 'PROJECT' },
  { title: 'education', label: 'CAREER' },
  { title: 'contact', label: 'CONTACT' },
];

export const aboutData: AbouData[] = [
  {
    title: 'Frontend Development',
    content:
      'I create modern, responsive, and dynamic user interfaces using React.js, Tailwind CSS, and Redux Toolkit.',
  },
  {
    title: 'Backend Development',
    content:
      'I build robust and scalable APIs with Node.js, Express.js, and MongoDB, ensuring smooth data flow and security.',
  },
  {
    title: 'Full-Stack Web Applications',
    content:
      'I develop end-to-end applications, integrating both frontend and backend for optimal performance.',
  },
];

//project

export const projects: Projects[] = [
  {
    title: 'Personal Expense Tracker Application',
    techStack: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'A full-featured expense tracker for managing daily expenses with authentication and visualization.',
    features: [
      'User login, signup & auto logout',
      'Expense tracking with Bar & Pie charts',
      'CSV import functionality',
      'Profile and category management',
    ],
    github: '#',
    liveDemo: 'https://finmate-expense.netlify.app',
  },
  {
    title: 'Kannur University Kalolsavam Website (Live Project)',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Context API'],
    description:
      'A dynamic web app for real-time result publishing and point tracking for Kannur University’s arts festival.',
    features: [
      'Live event result updates',
      'College and event-wise point tracking',
      'Admin-only access for managing results and schedules',
      'PWA support for mobile installation',
    ],
    github: '#',
    liveDemo: 'https://kannur-university-kalolsavam-2wto.onrender.com',
  },
  {
    title: 'MERN LMS Website',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'A Learning Management System (LMS) that allows students to access courses, track progress, and interact with instructors.',
    features: [
      'User Authentication (JWT, Firebase)',
      'Admin Dashboard for managing courses and users',
      'Live Chat & Discussion Forums',
      'Progress Tracking & Certifications',
    ],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'E-Commerce Website (MERN Stack)',
    techStack: [
      'React.js',
      'Express.js',
      'Redux Toolkit',
      'Node.js',
      'MongoDB',
    ],
    description:
      'A full-stack e-commerce platform with a modern UI, shopping cart, and payment gateway.',
    features: [
      'User Authentication & Secure Payments',
      'Product Management & Order Tracking',
      'Redux Toolkit for State Management',
    ],
    github: '#',
    liveDemo: 'https://mern-e-commerce-website-1-v5bp.onrender.com',
  },
  {
    title: 'Personal Portfolio Website (Angular)',
    techStack: ['Angular', 'Tailwind CSS', 'TypeScript', 'HTML5', 'CSS'],
    description:
      'A clean and modern portfolio website built using Angular to showcase my projects, skills, and contact details.',
    features: [
      'Modular architecture with reusable components.',
      'Responsive design with Tailwind CSS.',
      'Angular routing for smooth navigation.',
      'Dynamic project section powered by TypeScript.',
    ],
    github: '#',
    liveDemo: 'https://portfolio-kiran1.netlify.app',
  },
  {
    title: 'Personal Portfolio Website (React)',
    techStack: ['React.js', 'Tailwind CSS', 'Shdcn UI'],
    description:
      'A fully responsive personal portfolio to showcase projects, skills, and experience.',
    features: [
      'Modern UI & Responsive Design',
      'Interactive Project Showcase',
      'Contact Form Integration',
    ],
    github: '#',
    liveDemo: 'https://kirandineshportfolio.netlify.app',
  },
];

export const educationList: Educations[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution:
      'St. Thomas College of Engineering and Technology, Kannur, Kerala',
    duration: '08/2020 - 05/2024',
    year: 2024,
  },
  {
    degree: 'Plus Two',
    institution: 'St. Joseph’s Higher Secondary School, Thalassery, Kerala',
    duration: '06/2018 - 05/2020',
    year: 2020,
  },
];

export const experiences: Experiences[] = [
  {
    title: 'MERN Stack Intern',
    company: 'Zoople Technologies',
    location: 'Kochi',
    duration: '07/2024 - 10/2024',
    responsibilities: [
      'Developed dynamic and responsive websites.',
      'Built and maintained backend modules using Node.js and MongoDB.',
    ],
    year: 2024,
  },
];
