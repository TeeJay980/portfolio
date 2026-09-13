// SPURX Full-Stack Web Developer & Creative Technologist Portfolio Data

export const PROJECTS = [
  {
    id: 'proj-oriflame',
    title: 'Oriflame Abuja — Swedish Beauty & Cosmetics',
    category: 'E-Commerce',
    tagline: 'Luxury cosmetics storefront with interactive product catalogue drawer',
    description: 'High-aesthetic Swedish beauty & luxury fragrance storefront featuring an interactive slide-out product catalogue, real-time consultation booking, and fast mobile navigation.',
    longDescription: 'Architected responsive luxury storefront with custom typography, modal product views, dynamic category filters, and seamless WhatsApp order dispatch for Abuja flagship store.',
    stats: {
      lighthouse: '100',
      activeUsers: '10K+',
      speedIndex: '0.6s'
    },
    techStack: ['JavaScript', 'CSS3', 'Glassmorphism', 'Catalogue Drawer API', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://saved-cancel.vercel.app/',
    githubUrl: 'https://github.com/TeeJay980',
    featured: true,
    year: '2025'
  },
  {
    id: 'proj-edu-admin',
    title: 'EduPortal — School Management Admin System',
    category: 'Full-Stack SaaS',
    tagline: 'Comprehensive school admin dashboard with PCB circuit UI & Cloudflare Turnstile',
    description: 'Full-featured academic management dashboard for administrators and staff, handling student grading, attendance tracking, fee invoicing, and secure bot-protected login.',
    longDescription: 'Engineered an interactive dashboard application featuring SVG PCB circuit traces, modular view transitions, Cloudflare Turnstile bot verification, and data table filtering.',
    stats: {
      lighthouse: '99',
      activeUsers: '5K+',
      uptime: '99.9%'
    },
    techStack: ['JavaScript', 'Dashboard Architecture', 'Cloudflare Turnstile', 'SVG Animations', 'Data Tables'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://school-portal-two-mu.vercel.app/',
    githubUrl: 'https://github.com/TeeJay980',
    featured: true,
    year: '2025'
  },
  {
    id: 'proj-edu-student',
    title: 'EduPortal — Student Self-Service Portal',
    category: 'Web Applications',
    tagline: 'Mobile-first student portal for academic grades, timetables & tuition billing',
    description: 'Dedicated student portal enabling students to check exam results, download course materials, view class schedules, and review fee statements with PWA capabilities.',
    longDescription: 'Crafted with dark-mode aesthetic, manifest-enabled PWA features, secure authentication with Cloudflare Turnstile, and responsive timetable views.',
    stats: {
      lighthouse: '100',
      speedIndex: '0.5s',
      testCoverage: '95%'
    },
    techStack: ['PWA', 'JavaScript', 'CSS Design System', 'Cloudflare Security', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://school-portal-ecxr.vercel.app/',
    githubUrl: 'https://github.com/TeeJay980',
    featured: true,
    year: '2025'
  },
  {
    id: 'proj-ivoterngo',
    title: 'ivoterngo — Volunteer Onboarding Portal',
    category: 'Web Applications',
    tagline: 'Community cleaning initiative with country-code phone picker & automated onboarding',
    description: 'Volunteer recruitment and application portal for community cleaning initiatives across orphanages, public spaces, and auditoriums with international phone validation.',
    longDescription: 'Developed bespoke volunteer onboarding platform with warm editorial typography, intl-tel-input country phone formatting, Cloudflare Turnstile protection, and step validation.',
    stats: {
      lighthouse: '100',
      conversionRate: '+45%',
      speedIndex: '0.4s'
    },
    techStack: ['JavaScript', 'Intl-Tel-Input', 'Cloudflare Turnstile', 'Editorial UI', 'Form Architecture'],
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://legendary-system-psi.vercel.app/',
    githubUrl: 'https://github.com/TeeJay980',
    featured: true,
    year: '2024'
  }
];

export const SKILLS_MATRIX = [
  {
    category: 'Frontend Engineering',
    description: 'High-performance, type-safe interfaces built with modern UI frameworks and 60fps micro-interactions.',
    skills: [
      { name: 'React 19 / Next.js 15', level: 95 },
      { name: 'TypeScript & JavaScript (ESNext)', level: 92 },
      { name: 'Tailwind CSS & Design Systems', level: 96 },
      { name: 'PWA & Web Performance (Lighthouse 100)', level: 94 }
    ]
  },
  {
    category: 'Backend & Cloud Infrastructure',
    description: 'Scalable APIs, distributed database schemas, caching layers, and serverless edge functions.',
    skills: [
      { name: 'Node.js / Express & REST APIs', level: 88 },
      { name: 'PostgreSQL & Prisma ORM', level: 86 },
      { name: 'Redis Caching & Cloudflare Turnstile', level: 85 },
      { name: 'Vercel, AWS & CI/CD Pipelines', level: 90 }
    ]
  },
  {
    category: 'Creative Tech & UI Systems',
    description: 'Bespoke design token systems, canvas rendering, and high-conversion UX architecture.',
    skills: [
      { name: 'UI/UX Architecture & Figma-to-Code', level: 95 },
      { name: 'SVG Circuits & Web Animations', level: 90 },
      { name: 'Security (Cloudflare, CSP & Auth)', level: 88 },
      { name: 'Cross-Browser & Mobile Touch UX', level: 96 }
    ]
  }
];

export const SERVICES = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Applications & SaaS',
    tagline: 'End-to-end web products engineered for high concurrency, security, and scale.',
    priceStarting: '$2,500',
    timeline: '2-3 Weeks',
    popular: true,
    features: [
      'Next.js 15 & React full-stack architecture',
      'PostgreSQL, Redis & REST / GraphQL APIs',
      'Cloudflare security & Turnstile integration',
      'Automated testing & CI/CD deployment'
    ]
  },
  {
    id: 'frontend',
    title: 'Creative Frontend & UI/UX Engineering',
    tagline: 'Transform Figma designs into buttery-smooth, interactive web experiences.',
    priceStarting: '$1,500',
    timeline: '1-2 Weeks',
    popular: false,
    features: [
      'Pixel-perfect translation of complex UI layouts',
      'Fluid micro-interactions & SVG animations',
      'Tailwind CSS design token system',
      'Flawless cross-browser & mobile touch responsiveness'
    ]
  },
  {
    id: 'mvp',
    title: 'Rapid Startup MVP Builder',
    tagline: 'Launch your product to market in record time without cutting technical corners.',
    priceStarting: '$3,200',
    timeline: '10-14 Days',
    popular: false,
    features: [
      'High-velocity delivery for founders & startups',
      'Full product spec & modular code structure',
      'Integrated authentication & database layer',
      'Deployment on Vercel / AWS with CI/CD'
    ]
  },
  {
    id: 'optimization',
    title: 'Performance & SEO Revamp',
    tagline: 'Slash page load times, boost Google Core Web Vitals, and scale conversion.',
    priceStarting: '$900',
    timeline: '3-5 Days',
    popular: false,
    features: [
      'Deep Lighthouse & Core Web Vitals diagnostic report',
      'Bundle size reduction & image optimization',
      'Technical SEO & semantic structured data',
      'Edge CDN acceleration & caching'
    ]
  }
];

export const EXPERIENCE = [
  {
    period: '2025 - PRESENT',
    role: 'Lead Full-Stack Architect',
    company: 'Oriflame Abuja (Swedish Beauty)',
    projectUrl: 'https://saved-cancel.vercel.app/',
    location: 'Abuja, Nigeria',
    techStack: ['JavaScript', 'CSS3', 'Catalogue Drawer API', 'Responsive UI'],
    description: 'Architected and deployed the official Oriflame Abuja luxury storefront. Built custom slide-out catalogue drawers, responsive consultation booking flows, and optimized performance to sub-second load times.'
  },
  {
    period: '2025',
    role: 'Full-Stack Software Engineer',
    company: 'EduPortal — School Admin System',
    projectUrl: 'https://school-portal-two-mu.vercel.app/',
    location: 'Production Deployment',
    techStack: ['JavaScript', 'Dashboard Architecture', 'Cloudflare Turnstile', 'Data Tables'],
    description: 'Engineered comprehensive school management software for administrative operations. Built PCB circuit design interface, automated grade reporting, student billing tables, and Cloudflare Turnstile anti-bot security.'
  },
  {
    period: '2025',
    role: 'Frontend Engineer & UI Architect',
    company: 'EduPortal — Student Portal',
    projectUrl: 'https://school-portal-ecxr.vercel.app/',
    location: 'Production Deployment',
    techStack: ['PWA', 'JavaScript', 'CSS Design System', 'Cloudflare Turnstile'],
    description: 'Designed and built the student self-service portal with mobile-first PWA capabilities. Enabled real-time grade checking, course timetables, tuition statements, and seamless student authentication.'
  },
  {
    period: '2024 - 2025',
    role: 'Lead Web Developer',
    company: 'ivoterngo Community Initiative',
    projectUrl: 'https://legendary-system-psi.vercel.app/',
    location: 'Abuja, Nigeria',
    techStack: ['JavaScript', 'Intl-Tel-Input', 'Cloudflare Turnstile', 'Editorial UI'],
    description: 'Built the volunteer recruitment and onboarding web platform for community cleaning operations. Integrated international phone number validation, automated volunteer dispatch flow, and responsive editorial UX.'
  }
];

export const STATS = [
  { value: '50+', label: 'Projects Shipped', sub: 'SaaS, Storefronts & Portals' },
  { value: '100/100', label: 'Lighthouse Score', sub: 'Core Web Vitals Optimized' },
  { value: '5+ Yrs', label: 'Production Experience', sub: 'React, Next.js & Full-Stack' },
  { value: '99.9%', label: 'Uptime & Reliability', sub: 'Enterprise Cloud Deployments' }
];

export const CLIENT_LOGOS = [
  { name: 'Oriflame', label: 'ORIFLAME ABUJA' },
  { name: 'EduPortal Admin', label: 'EDUPORTAL ADMIN' },
  { name: 'EduPortal Student', label: 'EDUPORTAL STUDENT' },
  { name: 'ivoterngo', label: 'IVOTERNGO' }
];
