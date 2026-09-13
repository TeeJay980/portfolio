// SPURX Full-Stack Web Developer & Creative Technologist Portfolio Data

export const PROJECTS = [
  {
    id: 'proj-1',
    title: 'SYNAPSE AI - Realtime Agentic Workspace',
    category: 'Full-Stack SaaS',
    tagline: 'Collaborative AI agent orchestrator with WebSockets & Canvas execution',
    description: 'An enterprise-grade platform allowing multi-agent AI collaboration with real-time stream processing, canvas graph editing, and custom tool invocations.',
    longDescription: 'Engineered a full-stack SaaS platform utilizing Next.js 15 App Router, React Server Components, Tailwind CSS, TypeScript, and Node.js microservices. Integrated WebSockets for bi-directional live agent telemetry, PostgreSQL with Prisma ORM, and Redis for distributed caching.',
    stats: {
      lighthouse: '100',
      activeUsers: '45K+',
      latency: '<40ms',
      uptime: '99.99%'
    },
    techStack: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://example.com/synapse-demo',
    githubUrl: 'https://github.com/TeeJay980',
    featured: true,
    year: '2025'
  },
  {
    id: 'proj-2',
    title: 'AURA LUXE - 3D High-Fashion E-Commerce',
    category: 'E-Commerce',
    tagline: 'Three.js interactive 3D product visualizer & headless Shopify store',
    description: 'Ultra-fast headless luxury storefront with custom WebGL shaders, fluid micro-interactions, and instant checkout.',
    longDescription: 'Architected with Astro, React, Three.js / React Three Fiber, and Tailwind CSS. Connected to Shopify Storefront GraphQL API with localized currency, dynamic cart drawer, and sub-second page transitions.',
    stats: {
      lighthouse: '99',
      conversionRate: '+38%',
      fps: '60 FPS 3D',
      speedIndex: '0.8s'
    },
    techStack: ['Astro', 'React', 'Three.js', 'TailwindCSS', 'Shopify GraphQL', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://example.com/aura-luxe',
    githubUrl: 'https://github.com/TeeJay980',
    featured: true,
    year: '2025'
  },
  {
    id: 'proj-3',
    title: 'NEXUS PAY - Web3 Fintech & Cross-Border Vault',
    category: 'Fintech & Web3',
    tagline: 'Multi-currency settlement dashboard with biometrics & crypto rails',
    description: 'Modern financial operating system with instant fiat-to-crypto bridging, automated invoice generation, and bank-grade encryption.',
    longDescription: 'Developed responsive dashboard interfaces with React 19, Vite, TanStack Query, and Tailwind. Built high-concurrency Node.js / Go backend handlers for blockchain event indexing and Stripe Connect payouts.',
    stats: {
      lighthouse: '100',
      volumeProcessed: '$12M+',
      apiResponse: '28ms',
      testCoverage: '98%'
    },
    techStack: ['React', 'Vite', 'TypeScript', 'Go', 'TailwindCSS', 'Stripe', 'Docker'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://example.com/nexus-pay',
    githubUrl: 'https://github.com/TeeJay980',
    featured: true,
    year: '2024'
  },
  {
    id: 'proj-4',
    title: 'KINESIS - Open Source Design System',
    category: 'Design Systems',
    tagline: 'Accessible, token-driven component library with zero-runtime CSS',
    description: 'A modular React component library powering over 20+ commercial applications with dark mode, keyboard navigation, and WCAG AAA compliance.',
    longDescription: 'Crafted with React, Tailwind CSS, Radix UI primitives, and Storybook. Features automated visual regression testing with Playwright and NPM registry package publishing.',
    stats: {
      lighthouse: '100',
      npmDownloads: '120K+',
      components: '64+',
      accessibility: 'AAA Rated'
    },
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Radix UI', 'Storybook', 'Vite'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://example.com/kinesis-ui',
    githubUrl: 'https://github.com/TeeJay980',
    featured: false,
    year: '2025'
  },
  {
    id: 'proj-5',
    title: 'PULSE STREAM - Audio Streaming & Analytics',
    category: 'Full-Stack SaaS',
    tagline: 'Real-time creator analytics and lossless audio streaming engine',
    description: 'High-throughput music streaming platform with dynamic audio waveforms, real-time royalty trackers, and listener heatmaps.',
    longDescription: 'Engineered using Next.js 15, Web Audio API, Canvas 2D spectrum rendering, PostgreSQL, and AWS S3/CloudFront CDN streaming.',
    stats: {
      lighthouse: '98',
      monthlyPlays: '2.4M',
      cdnHitRatio: '99.4%',
      p95Latency: '65ms'
    },
    techStack: ['Next.js', 'React', 'Web Audio API', 'PostgreSQL', 'TailwindCSS', 'AWS'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://example.com/pulse-stream',
    githubUrl: 'https://github.com/TeeJay980',
    featured: false,
    year: '2024'
  },
  {
    id: 'proj-6',
    title: 'DEVFORGE - Collaborative Cloud IDE',
    category: 'Developer Tools',
    tagline: 'Browser-based code editor with WebAssembly compilation & container sandboxing',
    description: 'Full-featured developer IDE running directly in the browser with Monaco Editor, terminal integration, and zero-config deployment.',
    longDescription: 'Built with React, Monaco Editor, WebAssembly, Web Workers, and Dockerized micro-containers for remote code execution.',
    stats: {
      lighthouse: '99',
      languages: '18+',
      bootTime: '1.2s',
      stars: '3.8K'
    },
    techStack: ['React', 'TypeScript', 'Monaco Editor', 'WebAssembly', 'Docker', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://example.com/devforge-ide',
    githubUrl: 'https://github.com/TeeJay980',
    featured: false,
    year: '2025'
  }
];

export const SKILLS_MATRIX = [
  {
    category: 'Frontend & Architecture',
    description: 'Pixel-perfect, ultra-fast user interfaces & micro-interactions',
    skills: [
      { name: 'React 18 / 19 & Next.js', level: 98 },
      { name: 'Astro & Static Site Gen', level: 95 },
      { name: 'TypeScript & JavaScript (ESNext)', level: 96 },
      { name: 'Tailwind CSS & Vanilla CSS', level: 99 },
      { name: 'Three.js / WebGL / Canvas', level: 88 },
      { name: 'Framer Motion & Micro-Animations', level: 94 }
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'High-concurrency microservices, real-time data & clean REST/GraphQL',
    skills: [
      { name: 'Node.js & Express / NestJS', level: 92 },
      { name: 'Go (Golang)', level: 85 },
      { name: 'PostgreSQL & Prisma / Drizzle', level: 90 },
      { name: 'Redis & Distributed Caching', level: 88 },
      { name: 'GraphQL & RESTful Architectures', level: 94 },
      { name: 'WebSockets & Server-Sent Events', level: 91 }
    ]
  },
  {
    category: 'Cloud, DevOps & Tooling',
    description: 'Bulletproof automated CI/CD pipelines & zero-downtime deployments',
    skills: [
      { name: 'Docker & Containerization', level: 89 },
      { name: 'AWS (S3, Lambda, CloudFront)', level: 87 },
      { name: 'Vercel, Netlify & Cloudflare Edge', level: 96 },
      { name: 'Git, GitHub Actions CI/CD', level: 95 },
      { name: 'Vite, Turborepo & Webpack', level: 92 },
      { name: 'Jest, Playwright & Vitest', level: 90 }
    ]
  }
];

export const SERVICES = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web App Development',
    tagline: 'End-to-end modern SaaS, customer portals & scalable web systems from scratch.',
    priceStarting: '$2,500',
    timeline: '2-4 Weeks',
    features: [
      'Next.js 15 / React / Astro frontend with server-side rendering',
      'Robust database architecture (PostgreSQL, Redis, Supabase)',
      'Authentication, RBAC & payment integration (Stripe, LemonSqueezy)',
      '100/100 Lighthouse performance & responsive perfection'
    ],
    popular: true
  },
  {
    id: 'frontend',
    title: 'Creative Frontend & UI/UX Engineering',
    tagline: 'Transform Figma designs into buttery-smooth, interactive web experiences.',
    priceStarting: '$1,500',
    timeline: '1-2 Weeks',
    features: [
      'Pixel-perfect translation of complex UI layouts',
      'Fluid micro-interactions, scroll animations & 3D WebGL',
      'Tailwind CSS design token system & reusable components',
      'Flawless cross-browser & mobile touch responsiveness'
    ]
  },
  {
    id: 'mvp',
    title: 'Rapid Startup MVP Builder',
    tagline: 'Launch your product to market in record time without cutting technical corners.',
    priceStarting: '$3,200',
    timeline: '10-14 Days',
    features: [
      'High-velocity delivery tailored for venture-backed founders',
      'Full product spec consultation & architectural roadmap',
      'Clean, modular code structure ready for future scaling',
      'Deployment on Vercel / AWS with automated CI/CD'
    ]
  },
  {
    id: 'optimization',
    title: 'Performance & SEO Audit / Revamp',
    tagline: 'Slash page load times, boost Google Core Web Vitals, and scale conversion.',
    priceStarting: '$900',
    timeline: '3-5 Days',
    features: [
      'Deep Lighthouse & Core Web Vitals diagnostic report',
      'Bundle size reduction, code-splitting & image optimization',
      'Technical SEO, OpenGraph metadata & semantic structured data',
      'Database query caching & edge CDN acceleration'
    ]
  }
];

export const EXPERIENCE = [
  {
    period: '2024 - PRESENT',
    role: 'Lead Full-Stack Architect',
    company: 'SPURX Studio / Freelance',
    location: 'Remote (Abuja / Global)',
    description: 'Architecting cutting-edge web applications, design systems, and high-conversion landing pages for international startups and venture studios.'
  },
  {
    period: '2022 - 2024',
    role: 'Senior Frontend Engineer',
    company: 'Nexus Tech Global',
    location: 'Abuja / Remote',
    description: 'Led a team of 6 engineers building enterprise financial dashboards. Boosted page speed by 64% and established company-wide React component standards.'
  },
  {
    period: '2020 - 2022',
    role: 'Full-Stack Developer',
    company: 'Veloce Digital Media',
    location: 'Abuja, Nigeria',
    description: 'Developed over 25+ client web platforms using React, Node.js, and headless CMS solutions with 99.9% client satisfaction rating.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "SPURX is the rare developer who combines elite visual taste with rock-solid architectural skills. Our SaaS MVP was shipped 2 weeks ahead of schedule with 100/100 Lighthouse performance.",
    author: "Elena Rostova",
    role: "Founder & CEO, Synapse AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Working with SPURX on our 3D e-commerce storefront completely transformed our conversion rate. The fluid Three.js animations and sub-second load times blew our investors away.",
    author: "Marcus Vance",
    role: "Head of Product, Aura Luxe Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Exceptional code quality, clean documentation, and incredible communication. SPURX is our go-to engineer for all critical full-stack initiatives.",
    author: "David Chen",
    role: "CTO, Nexus Pay Technologies",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
  }
];

export const STATS = [
  { value: '50+', label: 'Projects Shipped', sub: 'SaaS, Storefronts & Tools' },
  { value: '100/100', label: 'Lighthouse Score', sub: 'Core Web Vitals Optimized' },
  { value: '5+ Yrs', label: 'Production Experience', sub: 'React, Next.js & Full-Stack' },
  { value: '99.9%', label: 'Uptime & Reliability', sub: 'Enterprise Cloud Deployments' }
];

export const CLIENT_LOGOS = [
  { name: 'Synapse AI', label: 'SYNAPSE.AI' },
  { name: 'Aura Luxe', label: 'AURA LUXE' },
  { name: 'Nexus Pay', label: 'NEXUS PAY' },
  { name: 'Kinesis UI', label: 'KINESIS' },
  { name: 'Veloce Labs', label: 'VELOCE' },
  { name: 'DevForge', label: 'DEVFORGE' }
];
