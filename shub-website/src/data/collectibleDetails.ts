export interface CollectibleDetail {
  id: string;
  name: string;
  category: 'Programming' | 'Web Framework' | 'Backend' | 'Database' | 'Cloud' | 'Tools' | 'Achievement' | 'Project';
  description: string;
  experience: string;
  icon?: string;
}

export const collectibleDetails: Record<string, CollectibleDetail> = {
  // Programming Languages
  java: {
    id: 'java',
    name: 'Java',
    category: 'Programming',
    description: 'Object-oriented programming language used for enterprise applications and Android development.',
    experience: 'Proficient in Java with experience in building scalable applications, implementing design patterns, and working with Spring Boot framework.',
  },
  csharp: {
    id: 'csharp',
    name: 'C#',
    category: 'Programming',
    description: 'Modern, object-oriented programming language developed by Microsoft.',
    experience: 'Used C# to build the Agario multiplayer game client with real-time TCP socket communication and dynamic UI.',
  },
  cpp: {
    id: 'cpp',
    name: 'C++',
    category: 'Programming',
    description: 'High-performance programming language for system/software development.',
    experience: 'Strong foundation in low-level programming, memory management, and performance optimization.',
  },
  python: {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    description: 'Versatile language for web development, data science, and automation.',
    experience: 'Experienced in Python for backend development with FastAPI and Django frameworks.',
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming',
    description: 'Essential language for web development and interactive user interfaces.',
    experience: 'Expert in modern JavaScript (ES6+), DOM manipulation, and async programming.',
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming',
    description: 'Typed superset of JavaScript for building robust applications.',
    experience: 'Strong TypeScript skills with type safety, interfaces, and generics in React applications.',
  },

  // Web Frameworks
  react: {
    id: 'react',
    name: 'React',
    category: 'Web Framework',
    description: 'Popular JavaScript library for building user interfaces.',
    experience: 'Advanced React development with hooks, context, state management, and component architecture. Built multiple production applications including FreedomLedger and Chat Application.',
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Web Framework',
    description: 'React framework for production with server-side rendering and static generation.',
    experience: 'Built FreedomLedger using Next.js 15 with modern React 19 features, server components, and optimized performance.',
  },
  vue: {
    id: 'vue',
    name: 'Vue.js',
    category: 'Web Framework',
    description: 'Progressive JavaScript framework for building user interfaces.',
    experience: 'Proficient in Vue.js component composition, reactive data binding, and state management.',
  },

  // Backend Frameworks
  django: {
    id: 'django',
    name: 'Django',
    category: 'Backend',
    description: 'High-level Python web framework for rapid development.',
    experience: 'Experience with Django ORM, REST framework, authentication, and MVC architecture.',
  },
  spring: {
    id: 'spring',
    name: 'Spring Boot',
    category: 'Backend',
    description: 'Java framework for building enterprise applications and microservices.',
    experience: 'Built scalable microservices with Spring Boot, implementing RESTful APIs, service discovery, and API gateways.',
  },
  fastapi: {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend',
    description: 'Modern, fast Python web framework for building APIs.',
    experience: 'Developed FreedomLedger backend and Chat Application backend with FastAPI, implementing async operations, Pydantic validation, and 45+ API endpoints.',
  },

  // Databases
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Advanced open-source relational database system.',
    experience: 'Architected complex database systems with 15+ interconnected tables, implementing proper indexing, foreign keys, and optimized queries for sub-100ms response times in FreedomLedger.',
  },
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    description: 'NoSQL document database for flexible, scalable data storage.',
    experience: 'Experience with document modeling, aggregation pipelines, and NoSQL database design.',
  },

  // Cloud & Tools
  aws: {
    id: 'aws',
    name: 'AWS (EC2)',
    category: 'Cloud',
    description: 'Amazon Web Services cloud computing platform.',
    experience: 'Deployed and managed applications on AWS EC2, understanding cloud architecture and scalability.',
  },
  azure: {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'Cloud',
    description: 'Microsoft cloud computing platform and services.',
    experience: 'Experience with Azure services for cloud deployment and management.',
  },
  d3js: {
    id: 'd3js',
    name: 'D3.js',
    category: 'Tools',
    description: 'JavaScript library for creating dynamic data visualizations.',
    experience: 'Implemented advanced data visualization suite with D3.js custom charts in FreedomLedger, creating interactive donut, radar, bullet, and dumbbell charts with real-time updates.',
  },

  // Achievements
  'deans-list-1': {
    id: 'deans-list-1',
    name: "Dean's List - Spring 2021",
    category: 'Achievement',
    description: 'Academic excellence recognition for outstanding GPA.',
    experience: 'Achieved Dean\'s List honors in Spring 2021 at the University of Utah, demonstrating strong academic performance and dedication to Computer Science studies.',
  },
  'deans-list-2': {
    id: 'deans-list-2',
    name: "Dean's List - Fall 2021",
    category: 'Achievement',
    description: 'Academic excellence recognition for outstanding GPA.',
    experience: 'Achieved Dean\'s List honors in Fall 2021 at the University of Utah, maintaining consistent academic excellence.',
  },
  graduation: {
    id: 'graduation',
    name: 'Graduating December 2025',
    category: 'Achievement',
    description: 'Bachelor of Science in Computer Science from University of Utah.',
    experience: 'Completing Computer Science degree with coursework in Algorithms, Database Systems, Computer Networks, AI, and more.',
  },
};
