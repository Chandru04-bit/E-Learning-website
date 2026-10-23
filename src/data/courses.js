export const categories = [
  'All',
  'Web Development',
  'UI/UX Design',
  'Programming',
  'Data Science',
  'Digital Marketing'
];

export const courses = [
  {
    id: 'course-1',
    title: 'Modern Full-Stack Web Development: React, Node & MongoDB',
    category: 'Web Development',
    instructor: {
      name: 'Dr. Sarah Mitchell',
      role: 'Principal Engineer & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 2840,
    studentsCount: 14200,
    duration: '38 hours',
    lessonsCount: 14,
    price: 84.99,
    originalPrice: 149.99,
    level: 'Beginner to Advanced',
    isPopular: true,
    isFeatured: true,
    isRecent: false,
    shortDescription: 'Master modern frontend and backend development by building 4 production-grade full-stack applications with React 18 and Node.js.',
    fullDescription: 'Become a complete full-stack web developer ready for today’s tech industry. In this comprehensive masterclass, you will build robust, reactive applications from scratch. You will learn modern JavaScript (ES6+), functional React with custom hooks, Node.js REST APIs, database design with MongoDB, authentication systems with JWT, and complete deployment pipelines on cloud infrastructure.',
    learningOutcomes: [
      'Build scalable single-page web applications with modern React 18',
      'Design RESTful web APIs using Node.js, Express, and modern middleware',
      'Model and query NoSQL databases using MongoDB and Mongoose',
      'Implement secure user authentication, authorization, and session management',
      'Deploy full-stack applications with automated CI/CD and cloud hosting',
      'Optimize web performance, accessibility, and SEO best practices'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: Modern JavaScript & Frontend Foundations',
        lessons: [
          { id: 'c1-l1', title: 'Modern ES6+ Syntax, Modules, and Asynchronous JS', duration: '24 min', type: 'video' },
          { id: 'c1-l2', title: 'DOM Manipulation & Event-Driven Architecture', duration: '32 min', type: 'video' },
          { id: 'c1-l3', title: 'Hands-on Exercise: Interactive Expense Tracker', duration: '45 min', type: 'project' }
        ]
      },
      {
        moduleTitle: 'Module 2: Deep Dive into React 18 & Hooks',
        lessons: [
          { id: 'c1-l4', title: 'Component Architecture & Props vs State', duration: '35 min', type: 'video' },
          { id: 'c1-l5', title: 'Mastering useEffect, useMemo, and useCallback', duration: '40 min', type: 'video' },
          { id: 'c1-l6', title: 'State Management with Context API & Reducers', duration: '50 min', type: 'video' },
          { id: 'c1-l7', title: 'React Quiz: Advanced State & Component Lifecycle', duration: '20 min', type: 'quiz' }
        ]
      },
      {
        moduleTitle: 'Module 3: Backend REST APIs with Node.js & Express',
        lessons: [
          { id: 'c1-l8', title: 'Node.js Runtime & Building HTTP Servers', duration: '30 min', type: 'video' },
          { id: 'c1-l9', title: 'Express Routing, Middleware, and Error Handling', duration: '42 min', type: 'video' },
          { id: 'c1-l10', title: 'JWT Authentication and Password Hashing', duration: '48 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Database Integration & Cloud Deployment',
        lessons: [
          { id: 'c1-l11', title: 'MongoDB Atlas Setup & Schema Modeling', duration: '38 min', type: 'video' },
          { id: 'c1-l12', title: 'Connecting React Client to Node Backend with Axios', duration: '55 min', type: 'video' },
          { id: 'c1-l13', title: 'Production Security, Environment Variables & CORS', duration: '30 min', type: 'video' },
          { id: 'c1-l14', title: 'Capstone Project: Complete SaaS Application Deployment', duration: '65 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    title: 'UI/UX Design Masterclass: From Wireframe to Interactive Prototype',
    category: 'UI/UX Design',
    instructor: {
      name: 'Elena Rostova',
      role: 'Staff Product Designer at Meta',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 1950,
    studentsCount: 9800,
    duration: '26 hours',
    lessonsCount: 12,
    price: 69.99,
    originalPrice: 119.99,
    level: 'All Levels',
    isPopular: true,
    isFeatured: true,
    isRecent: false,
    shortDescription: 'Learn user research, design thinking, wireframing, component design systems, and high-fidelity prototyping in Figma.',
    fullDescription: 'Step into the footwear of a senior product designer. This course takes you through the entire user experience lifecycle. You will learn how to conduct user interviews, translate user insights into user journeys, construct low-fidelity wireframes, establish modern auto-layout component systems in Figma, and build interactive micro-interactions that impress hiring managers and stakeholders.',
    learningOutcomes: [
      'Conduct empathetic user research and distill key user personas',
      'Construct high-converting user journey maps and information architectures',
      'Create production-grade Figma design systems with components and variants',
      'Design accessible, high-contrast visual interfaces adhering to WCAG 2.1',
      'Build realistic interactive micro-interactions and animated prototypes',
      'Prepare comprehensive design handoffs for software development teams'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: User Research & Design Thinking Fundamentals',
        lessons: [
          { id: 'c2-l1', title: 'The 5 Stages of Design Thinking', duration: '22 min', type: 'video' },
          { id: 'c2-l2', title: 'Conducting User Interviews and Persona Mapping', duration: '35 min', type: 'video' },
          { id: 'c2-l3', title: 'Competitive Analysis & Problem Statement Synthesis', duration: '28 min', type: 'reading' }
        ]
      },
      {
        moduleTitle: 'Module 2: Wireframing & Information Architecture',
        lessons: [
          { id: 'c2-l4', title: 'Card Sorting & Site Mapping Strategies', duration: '30 min', type: 'video' },
          { id: 'c2-l5', title: 'Low-Fidelity Sketching to Digital Wireframes', duration: '40 min', type: 'video' },
          { id: 'c2-l6', title: 'Interactive Flow Testing with InVision & Figma', duration: '25 min', type: 'quiz' }
        ]
      },
      {
        moduleTitle: 'Module 3: Figma Mastery & Scalable Design Systems',
        lessons: [
          { id: 'c2-l7', title: 'Mastering Auto-Layout, Constraints, and Grid Systems', duration: '45 min', type: 'video' },
          { id: 'c2-l8', title: 'Typography Scales, Color Palettes & Accessibility Contrast', duration: '36 min', type: 'video' },
          { id: 'c2-l9', title: 'Building Reusable Components, Variants, and Tokens', duration: '50 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Advanced Prototyping & Developer Handoff',
        lessons: [
          { id: 'c2-l10', title: 'Smart Animate, Micro-Interactions & Transitions', duration: '40 min', type: 'video' },
          { id: 'c2-l11', title: 'Usability Testing Sessions and Iteration Feedback', duration: '35 min', type: 'video' },
          { id: 'c2-l12', title: 'Final Project: End-to-End Mobile Banking App Case Study', duration: '60 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    title: 'Python for Data Science, Machine Learning & AI Applications',
    category: 'Data Science',
    instructor: {
      name: 'Marcus Vance',
      role: 'Chief Data Scientist & Author',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 3410,
    studentsCount: 18700,
    duration: '42 hours',
    lessonsCount: 13,
    price: 94.99,
    originalPrice: 159.99,
    level: 'Intermediate',
    isPopular: true,
    isFeatured: true,
    isRecent: false,
    shortDescription: 'Master NumPy, Pandas, Scikit-Learn, and statistical modeling to build intelligent predictive models and extract actionable business insights.',
    fullDescription: 'Data science is transforming every modern industry. In this in-depth course, Marcus Vance demystifies the statistical principles and machine learning algorithms that drive artificial intelligence today. Starting from exploratory data analysis in Jupyter Notebooks to training predictive classifiers, random forests, and gradient-boosted trees, you will gain the practical skills needed to analyze multi-gigabyte datasets.',
    learningOutcomes: [
      'Perform data wrangling and cleaning using Pandas and NumPy',
      'Create high-impact data visualizations with Matplotlib and Seaborn',
      'Train supervised learning models: linear regressions, SVMs, decision trees',
      'Implement unsupervised clustering algorithms and dimensionality reduction',
      'Evaluate model performance with ROC-AUC, precision-recall, and cross-validation',
      'Deploy machine learning models as production inference REST APIs'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: Scientific Python Ecosystem',
        lessons: [
          { id: 'c3-l1', title: 'NumPy Arrays, Broadcasting & Vectorized Computation', duration: '32 min', type: 'video' },
          { id: 'c3-l2', title: 'Pandas DataFrames: Filtering, Grouping & Aggregations', duration: '48 min', type: 'video' },
          { id: 'c3-l3', title: 'Cleaning Messy Real-World Data & Handling Nulls', duration: '35 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Exploratory Data Analysis & Visualization',
        lessons: [
          { id: 'c3-l4', title: 'Visual Storytelling with Matplotlib and Seaborn', duration: '40 min', type: 'video' },
          { id: 'c3-l5', title: 'Statistical Distributions, Hypothesis Testing & P-Values', duration: '42 min', type: 'video' },
          { id: 'c3-l6', title: 'Practical Lab: Analyzing 1 Million Real Estate Transactions', duration: '50 min', type: 'project' }
        ]
      },
      {
        moduleTitle: 'Module 3: Scikit-Learn Supervised Algorithms',
        lessons: [
          { id: 'c3-l7', title: 'Linear & Logistic Regression with Cost Functions', duration: '45 min', type: 'video' },
          { id: 'c3-l8', title: 'Decision Trees, Random Forests & Ensemble Learning', duration: '55 min', type: 'video' },
          { id: 'c3-l9', title: 'Hyperparameter Tuning with GridSearch and Cross-Validation', duration: '38 min', type: 'video' },
          { id: 'c3-l10', title: 'Quiz: Machine Learning Classification Metrics', duration: '20 min', type: 'quiz' }
        ]
      },
      {
        moduleTitle: 'Module 4: Model Deployment & Real-World Projects',
        lessons: [
          { id: 'c3-l11', title: 'Customer Churn Prediction Model Pipeline', duration: '52 min', type: 'video' },
          { id: 'c3-l12', title: 'Saving Model Artifacts with Joblib & ONNX', duration: '28 min', type: 'video' },
          { id: 'c3-l13', title: 'Building a FastAPI Microservice to Serve Predictions', duration: '45 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    title: 'The Complete JavaScript & TypeScript Engineering Bootcamp',
    category: 'Programming',
    instructor: {
      name: 'Alex Turner',
      role: 'Staff Software Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1516116211227-bbc13c7341fe?auto=format&fit=crop&w=800&q=80',
    rating: 4.85,
    reviewsCount: 2210,
    studentsCount: 11300,
    duration: '32 hours',
    lessonsCount: 11,
    price: 74.99,
    originalPrice: 139.99,
    level: 'Beginner to Intermediate',
    isPopular: true,
    isFeatured: false,
    isRecent: false,
    shortDescription: 'Deep dive into JavaScript engines, closures, prototypes, asynchronous paradigms, and static typing with TypeScript.',
    fullDescription: 'Stop guessing how JavaScript works under the hood. In this engineering bootcamp, you will dissect JavaScript execution contexts, call stacks, memory heaps, event loops, and prototypes. Then, we transition into enterprise-grade TypeScript, mastering generics, utility types, unions, type narrowing, and strict configuration.',
    learningOutcomes: [
      'Understand JavaScript engine internals: V8, execution contexts, and event loops',
      'Master functional programming concepts: currying, closures, and immutability',
      'Write robust asynchronous code with Promises, async/await, and error boundaries',
      'Type-check complex applications with TypeScript generics and conditional types',
      'Refactor legacy JavaScript codebases into modern TypeScript architecture',
      'Adopt test-driven development (TDD) using Vitest and Jest'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: JavaScript Engine Internals',
        lessons: [
          { id: 'c4-l1', title: 'Execution Contexts, Hoisting, and Scope Chains', duration: '28 min', type: 'video' },
          { id: 'c4-l2', title: 'Closures and Memory Management Explained', duration: '35 min', type: 'video' },
          { id: 'c4-l3', title: 'The Event Loop, Microtasks vs Macrotasks', duration: '40 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Object-Oriented & Functional JS',
        lessons: [
          { id: 'c4-l4', title: 'Prototypes, Prototypal Inheritance & Class Syntax', duration: '34 min', type: 'video' },
          { id: 'c4-l5', title: 'Pure Functions, Map/Filter/Reduce & Immutability', duration: '38 min', type: 'video' },
          { id: 'c4-l6', title: 'Coding Challenge: Building an Observable Reactive Store', duration: '45 min', type: 'project' }
        ]
      },
      {
        moduleTitle: 'Module 3: Enterprise TypeScript Foundations',
        lessons: [
          { id: 'c4-l7', title: 'Type Inference, Interfaces vs Type Aliases', duration: '30 min', type: 'video' },
          { id: 'c4-l8', title: 'Generics, Constraints & Utility Types (Partial, Pick, Omit)', duration: '48 min', type: 'video' },
          { id: 'c4-l9', title: 'Discriminated Unions and Type Guards', duration: '32 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Production Best Practices',
        lessons: [
          { id: 'c4-l10', title: 'TSConfig Strict Options and Build Tooling', duration: '25 min', type: 'reading' },
          { id: 'c4-l11', title: 'Final Project: Building a Fully Typed Data Validation Library', duration: '55 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    title: 'Digital Marketing & Growth Hacking Mastery 2026',
    category: 'Digital Marketing',
    instructor: {
      name: 'Jessica Lin',
      role: 'Growth Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    rating: 4.75,
    reviewsCount: 1680,
    studentsCount: 8400,
    duration: '22 hours',
    lessonsCount: 10,
    price: 59.99,
    originalPrice: 109.99,
    level: 'Beginner',
    isPopular: false,
    isFeatured: true,
    isRecent: false,
    shortDescription: 'Drive sustainable customer acquisition with SEO, Google Ads, Meta Ads, content funnels, and data-driven marketing analytics.',
    fullDescription: 'In today’s competitive digital landscape, intuition alone is not enough. This digital marketing masterclass equips you with actionable growth strategies used by top unicorn startups. Learn how to craft customer acquisition funnels, run profitable paid ad campaigns on Meta and Google, rank on page one of search engines with semantic SEO, and calculate customer acquisition cost (CAC) and lifetime value (LTV).',
    learningOutcomes: [
      'Architect full-funnel digital marketing campaigns that drive conversions',
      'Optimize on-page and technical SEO to rank organically on Google',
      'Launch and scale profitable Google Search and Meta Ads campaigns',
      'Implement conversion rate optimization (CRO) through A/B testing',
      'Analyze campaign performance with Google Analytics 4 (GA4)',
      'Automate email marketing sequences that nurture leads into loyal buyers'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: The Modern Growth Marketing Blueprint',
        lessons: [
          { id: 'c5-l1', title: 'Understanding the AARRR Pirate Funnel Metrics', duration: '25 min', type: 'video' },
          { id: 'c5-l2', title: 'Defining Target Buyer Personas and Value Propositions', duration: '30 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Search Engine Optimization (SEO)',
        lessons: [
          { id: 'c5-l3', title: 'Keyword Research & Search Intent Mapping', duration: '38 min', type: 'video' },
          { id: 'c5-l4', title: 'On-Page SEO and Content Optimization Frameworks', duration: '40 min', type: 'video' },
          { id: 'c5-l5', title: 'Technical SEO: Core Web Vitals and Site Crawlability', duration: '35 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: Paid Advertising (Meta & Google)',
        lessons: [
          { id: 'c5-l6', title: 'Meta Ads Manager: Audience Targeting and Creatives', duration: '45 min', type: 'video' },
          { id: 'c5-l7', title: 'Google Ads: High-Intent Search Bidding Strategies', duration: '42 min', type: 'video' },
          { id: 'c5-l8', title: 'Retargeting Campaigns & Pixel Tracking Setup', duration: '30 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Analytics & CRO Testing',
        lessons: [
          { id: 'c5-l9', title: 'GA4 Event Tracking and Conversion Attribution', duration: '35 min', type: 'video' },
          { id: 'c5-l10', title: 'Capstone Project: Scaling a DTC Brand from 0 to 100k Visitors', duration: '50 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    title: 'Next.js 15 & React Server Components: Enterprise Web Applications',
    category: 'Web Development',
    instructor: {
      name: 'Dr. Sarah Mitchell',
      role: 'Principal Engineer & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviewsCount: 1890,
    studentsCount: 7600,
    duration: '30 hours',
    lessonsCount: 11,
    price: 89.99,
    originalPrice: 149.99,
    level: 'Advanced',
    isPopular: true,
    isFeatured: false,
    isRecent: true,
    shortDescription: 'Master the Next.js App Router, React Server Components (RSC), Server Actions, streaming SSR, and edge deployment.',
    fullDescription: 'Next.js has become the gold standard for production React development. This course dives straight into the App Router architecture. You will harness Server Components for zero-bundle-size rendering, optimize database queries directly in components, handle form mutations cleanly with Server Actions, and implement dynamic routing with instant page transitions and loading skeletons.',
    learningOutcomes: [
      'Master the Next.js App Router architecture and folder conventions',
      'Leverage React Server Components (RSC) to maximize client performance',
      'Implement Server Actions for form submissions without boilerplate APIs',
      'Implement incremental static regeneration (ISR) and server-side caching',
      'Integrate authentication with NextAuth / Auth.js and Postgres database',
      'Deploy resilient edge applications on Vercel with streaming suspense'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: The Next.js App Router Revolution',
        lessons: [
          { id: 'c6-l1', title: 'App Router vs Pages Router Architecture', duration: '28 min', type: 'video' },
          { id: 'c6-l2', title: 'Layouts, Templates, and Route Groups', duration: '34 min', type: 'video' },
          { id: 'c6-l3', title: 'Client vs Server Components: Boundary Decisions', duration: '40 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Data Fetching, Mutations & Caching',
        lessons: [
          { id: 'c6-l4', title: 'Fetch Caching, Revalidation & ISR Strategies', duration: '36 min', type: 'video' },
          { id: 'c6-l5', title: 'Server Actions, useActionState, and Optimistic UI', duration: '45 min', type: 'video' },
          { id: 'c6-l6', title: 'Streaming with Suspense and Loading Skeletons', duration: '30 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: Database & Security Integration',
        lessons: [
          { id: 'c6-l7', title: 'Prisma ORM with PostgreSQL in Server Components', duration: '42 min', type: 'video' },
          { id: 'c6-l8', title: 'Session Management with Auth.js v5', duration: '38 min', type: 'video' },
          { id: 'c6-l9', title: 'Middleware for Protected Routes and Geo-Routing', duration: '26 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Full-Stack Real World Project',
        lessons: [
          { id: 'c6-l10', title: 'E-Commerce Platform with Stripe Checkout Integration', duration: '60 min', type: 'project' },
          { id: 'c6-l11', title: 'Vercel Deployment, Edge Caching and Analytics', duration: '25 min', type: 'reading' }
        ]
      }
    ]
  },
  {
    id: 'course-7',
    title: 'Data Visualization & Business Intelligence with Power BI & SQL',
    category: 'Data Science',
    instructor: {
      name: 'Marcus Vance',
      role: 'Chief Data Scientist & Author',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 1420,
    studentsCount: 6500,
    duration: '24 hours',
    lessonsCount: 10,
    price: 64.99,
    originalPrice: 114.99,
    level: 'Beginner to Intermediate',
    isPopular: false,
    isFeatured: false,
    isRecent: true,
    shortDescription: 'Transform raw enterprise databases into dynamic, interactive dashboards with complex DAX measures and advanced SQL queries.',
    fullDescription: 'Business Intelligence analysts translate confusing datasets into clear executive dashboards. This course covers everything from complex SQL window functions, aggregations, and CTEs to designing professional Power BI reports with DAX calculations, dimensional star-schema modeling, and automated report refreshes.',
    learningOutcomes: [
      'Write multi-table SQL joins, subqueries, and window functions',
      'Design relational star schemas and snowflake data warehouses',
      'Formulate powerful DAX calculations: CALCULATE, ALL, and time-intelligence',
      'Create executive Power BI dashboards with drill-downs and cross-filtering',
      'Publish and manage automated cloud data refreshes in Power BI Service'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: Advanced SQL for Analytics',
        lessons: [
          { id: 'c7-l1', title: 'Complex Joins, Group By, and Aggregation Patterns', duration: '32 min', type: 'video' },
          { id: 'c7-l2', title: 'Window Functions: ROW_NUMBER, RANK, and Running Totals', duration: '40 min', type: 'video' },
          { id: 'c7-l3', title: 'Common Table Expressions (CTEs) & Subqueries', duration: '35 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Data Modeling in Power BI',
        lessons: [
          { id: 'c7-l4', title: 'Connecting to SQL Sources & Power Query Transformation', duration: '30 min', type: 'video' },
          { id: 'c7-l5', title: 'Star Schema Design, Relationships, and Cardinality', duration: '38 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: DAX Calculations & Time Intelligence',
        lessons: [
          { id: 'c7-l6', title: 'Calculated Columns vs Measures', duration: '28 min', type: 'video' },
          { id: 'c7-l7', title: 'The CALCULATE Function & Context Transition', duration: '45 min', type: 'video' },
          { id: 'c7-l8', title: 'Year-over-Year & Month-to-Date Time Calculations', duration: '35 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Dashboard UX & Enterprise Publishing',
        lessons: [
          { id: 'c7-l9', title: 'Visual Hierarchy, Color Guidelines, and KPI Cards', duration: '30 min', type: 'video' },
          { id: 'c7-l10', title: 'Capstone Dashboard: Executive Sales & Profit Analytics', duration: '55 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-8',
    title: 'Mobile App Development with React Native & Expo',
    category: 'Programming',
    instructor: {
      name: 'Kavita Patel',
      role: 'Mobile Engineering Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    rating: 4.88,
    reviewsCount: 1730,
    studentsCount: 8900,
    duration: '34 hours',
    lessonsCount: 12,
    price: 79.99,
    originalPrice: 139.99,
    level: 'Intermediate',
    isPopular: true,
    isFeatured: false,
    isRecent: false,
    shortDescription: 'Build native iOS and Android apps using React Native, Expo Router, device cameras, push notifications, and gestures.',
    fullDescription: 'Leverage your existing React knowledge to build high-performance native iOS and Android applications. In this course, you will work with Expo Router for file-based navigation, implement smooth animations using React Native Reanimated, integrate camera and location hardware, and compile standalone binary builds for App Store and Google Play publication.',
    learningOutcomes: [
      'Build cross-platform mobile apps for iOS and Android from one codebase',
      'Use Expo Router for deep linking and stack/tabs navigation',
      'Create 60 FPS gesture-driven animations with Reanimated 3',
      'Access native device capabilities: camera, GPS location, and haptic feedback',
      'Handle offline state and optimistic caching with TanStack Query',
      'Deploy and automate app store builds using EAS (Expo Application Services)'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: React Native & Expo Setup',
        lessons: [
          { id: 'c8-l1', title: 'Expo Managed Workflow & Development Environment', duration: '25 min', type: 'video' },
          { id: 'c8-l2', title: 'Core Native Components: View, Text, Image, FlatList', duration: '35 min', type: 'video' },
          { id: 'c8-l3', title: 'Responsive Styling with Flexbox on Mobile Screens', duration: '30 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Navigation & Native Features',
        lessons: [
          { id: 'c8-l4', title: 'Expo Router: Tab Navigation, Stacks, and Modals', duration: '40 min', type: 'video' },
          { id: 'c8-l5', title: 'Accessing Camera, Photo Picker, and Local Storage', duration: '45 min', type: 'video' },
          { id: 'c8-l6', title: 'Geolocation & MapView Integration', duration: '38 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: Animations & Gestures',
        lessons: [
          { id: 'c8-l7', title: 'React Native Gesture Handler & Touch Events', duration: '32 min', type: 'video' },
          { id: 'c8-l8', title: 'Fluid 60fps Animations with Reanimated 3', duration: '48 min', type: 'video' },
          { id: 'c8-l9', title: 'Quiz: Mobile Performance Bottlenecks and Solutions', duration: '18 min', type: 'quiz' }
        ]
      },
      {
        moduleTitle: 'Module 4: Real-World App & Distribution',
        lessons: [
          { id: 'c8-l10', title: 'Building a Food Delivery Marketplace App', duration: '55 min', type: 'project' },
          { id: 'c8-l11', title: 'Push Notifications Setup with Expo Server SDK', duration: '35 min', type: 'video' },
          { id: 'c8-l12', title: 'Publishing to Apple App Store & Google Play Console', duration: '40 min', type: 'reading' }
        ]
      }
    ]
  },
  {
    id: 'course-9',
    title: 'Design Systems & Component Libraries with Figma and Storybook',
    category: 'UI/UX Design',
    instructor: {
      name: 'Elena Rostova',
      role: 'Staff Product Designer at Meta',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    rating: 4.82,
    reviewsCount: 1120,
    studentsCount: 5200,
    duration: '20 hours',
    lessonsCount: 10,
    price: 69.99,
    originalPrice: 124.99,
    level: 'Intermediate to Advanced',
    isPopular: false,
    isFeatured: false,
    isRecent: true,
    shortDescription: 'Bridge the design-to-code gap by creating unified design tokens, component libraries, and interactive documentation in Storybook.',
    fullDescription: 'Design systems allow organizations to scale digital products seamlessly with absolute visual harmony. This course teaches the bridge between design and code. You will construct token architectures in Figma, export tokens using Style Dictionary, and construct pixel-perfect React components documented with Storybook and automated visual regression testing.',
    learningOutcomes: [
      'Define semantic design tokens: spacing, typography, and color themes',
      'Sync Figma design variables with coded repository tokens',
      'Build fully accessible headless components using Radix UI / ARIA',
      'Document component states, props, and accessibility in Storybook',
      'Run automated visual regression tests using Chromatic'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: Design Tokens Architecture',
        lessons: [
          { id: 'c9-l1', title: 'What Makes a Scalable Design System?', duration: '22 min', type: 'video' },
          { id: 'c9-l2', title: 'Color Palettes, Contrast Ratios, and Dark Mode Logic', duration: '34 min', type: 'video' },
          { id: 'c9-l3', title: 'Token Naming Conventions and JSON Structure', duration: '30 min', type: 'reading' }
        ]
      },
      {
        moduleTitle: 'Module 2: Figma to Code Synchronization',
        lessons: [
          { id: 'c9-l4', title: 'Figma Variables & Modes in Practice', duration: '36 min', type: 'video' },
          { id: 'c9-l5', title: 'Exporting Tokens with Style Dictionary into CSS Variables', duration: '40 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: Building Components in React & Storybook',
        lessons: [
          { id: 'c9-l6', title: 'Setting Up Storybook 8 with React & Tailwind CSS', duration: '35 min', type: 'video' },
          { id: 'c9-l7', title: 'Writing Stories, Controls, and Args for Buttons & Inputs', duration: '42 min', type: 'video' },
          { id: 'c9-l8', title: 'Compound Components: Dropdowns, Modals, and Accordions', duration: '48 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Governance & Distribution',
        lessons: [
          { id: 'c9-l9', title: 'Publishing as an NPM Package for Engineering Teams', duration: '32 min', type: 'video' },
          { id: 'c9-l10', title: 'Capstone Project: Enterprise UI Component Kit', duration: '50 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-10',
    title: 'Content Strategy, Copywriting & Conversion Funnels',
    category: 'Digital Marketing',
    instructor: {
      name: 'Jessica Lin',
      role: 'Growth Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    rating: 4.79,
    reviewsCount: 1340,
    studentsCount: 6700,
    duration: '18 hours',
    lessonsCount: 9,
    price: 49.99,
    originalPrice: 89.99,
    level: 'Beginner',
    isPopular: false,
    isFeatured: false,
    isRecent: false,
    shortDescription: 'Write high-converting sales pages, email drip sequences, and social media hooks that turn casual visitors into paying customers.',
    fullDescription: 'Copywriting is the most undervalued leverage in marketing. Even the prettiest website fails without compelling words that trigger action. In this hands-on course, you will learn the psychological triggers behind buyer decisions, copywriting formulas like PAS and AIDA, how to write irresistible headlines, and how to structure landing pages that double conversion rates.',
    learningOutcomes: [
      'Master persuasion frameworks: PAS (Problem-Agitate-Solve), AIDA, and FAB',
      'Craft magnetic headlines, hooks, and call-to-actions that drive clicks',
      'Write high-converting SaaS landing pages and e-commerce product pages',
      'Structure email onboarding sequences with high open and click-through rates',
      'Conduct customer voice research to uncover actual pain points'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: The Psychology of Persuasive Writing',
        lessons: [
          { id: 'c10-l1', title: 'Why People Buy: Emotional Triggers and Justifications', duration: '24 min', type: 'video' },
          { id: 'c10-l2', title: 'Voice-of-Customer Mining from Reviews and Forums', duration: '30 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Landing Page Copywriting',
        lessons: [
          { id: 'c10-l3', title: 'The Anatomy of a 10x Converting Above-the-Fold Section', duration: '36 min', type: 'video' },
          { id: 'c10-l4', title: 'Writing Benefit-Driven Feature Bullets & Social Proof', duration: '32 min', type: 'video' },
          { id: 'c10-l5', title: 'Overcoming Friction and Crafting Guarantees', duration: '28 min', type: 'reading' }
        ]
      },
      {
        moduleTitle: 'Module 3: Email Marketing & Retention Campaigns',
        lessons: [
          { id: 'c10-l6', title: 'Subject Lines that Generate 40%+ Open Rates', duration: '26 min', type: 'video' },
          { id: 'c10-l7', title: 'The 5-Day Welcome Drip Sequence Blueprint', duration: '40 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Practical Copy Audits & Projects',
        lessons: [
          { id: 'c10-l8', title: 'Live Teardown: Rewriting 3 Real-World Startup Landing Pages', duration: '45 min', type: 'video' },
          { id: 'c10-l9', title: 'Final Assignment: End-to-End Product Launch Sales Letter', duration: '50 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-11',
    title: 'Go (Golang) Microservices: High-Concurrency Backend Architecture',
    category: 'Programming',
    instructor: {
      name: 'Alex Turner',
      role: 'Staff Software Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 1540,
    studentsCount: 7100,
    duration: '35 hours',
    lessonsCount: 12,
    price: 84.99,
    originalPrice: 144.99,
    level: 'Advanced',
    isPopular: false,
    isFeatured: true,
    isRecent: true,
    shortDescription: 'Build blazingly fast distributed microservices using Go, Goroutines, Channels, gRPC, Docker, and PostgreSQL.',
    fullDescription: 'Go powers the modern cloud infrastructure behind Kubernetes, Docker, and Twitch. In this advanced backend course, you will master Go concurrency patterns with goroutines, worker pools, and channels. Then, you will construct distributed microservices communicating via gRPC and Protocol Buffers with distributed tracing, Docker containerization, and SQL connection pools.',
    learningOutcomes: [
      'Write idiomatic Go code following standard project layout patterns',
      'Master Go concurrency: Goroutines, sync.WaitGroup, Mutex, and Channels',
      'Build ultra-low latency gRPC microservices with Protocol Buffers',
      'Design relational schemas and connection pools with Postgres and pgx',
      'Containerize services with multi-stage Dockerfiles and Docker Compose',
      'Implement distributed logging and health checks for production readiness'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: Core Go Syntax & Idioms',
        lessons: [
          { id: 'c11-l1', title: 'Go Memory Model, Pointers, Structs, and Interfaces', duration: '32 min', type: 'video' },
          { id: 'c11-l2', title: 'Error Handling as Values & Custom Sentinel Errors', duration: '28 min', type: 'video' },
          { id: 'c11-l3', title: 'Writing Unit Tests and Benchmarks with testing package', duration: '35 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Concurrency & Asynchronous Patterns',
        lessons: [
          { id: 'c11-l4', title: 'Goroutines, Channels & Select Statements', duration: '40 min', type: 'video' },
          { id: 'c11-l5', title: 'Building a Resilient Concurrent Worker Pool', duration: '48 min', type: 'video' },
          { id: 'c11-l6', title: 'Race Conditions and sync.Mutex Synchronization', duration: '30 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: Microservices Communication & Storage',
        lessons: [
          { id: 'c11-l7', title: 'Defining Protocol Buffers and Generating gRPC Stubs', duration: '36 min', type: 'video' },
          { id: 'c11-l8', title: 'PostgreSQL Transactions and Database Migrations', duration: '42 min', type: 'video' },
          { id: 'c11-l9', title: 'Structured Logging with slog and Prometheus Metrics', duration: '30 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Deployment & Resiliency',
        lessons: [
          { id: 'c11-l10', title: 'Containerizing Microservices with Minimal Alpine Images', duration: '34 min', type: 'video' },
          { id: 'c11-l11', title: 'Graceful Shutdowns and Circuit Breaker Patterns', duration: '28 min', type: 'video' },
          { id: 'c11-l12', title: 'Capstone: Order Processing Distributed Microservice', duration: '60 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-12',
    title: 'Applied Deep Learning & Neural Networks with PyTorch',
    category: 'Data Science',
    instructor: {
      name: 'Marcus Vance',
      role: 'Chief Data Scientist & Author',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    rating: 4.93,
    reviewsCount: 2050,
    studentsCount: 9100,
    duration: '45 hours',
    lessonsCount: 14,
    price: 99.99,
    originalPrice: 169.99,
    level: 'Advanced',
    isPopular: true,
    isFeatured: false,
    isRecent: true,
    shortDescription: 'Train Convolutional Neural Networks (CNNs), Transformers, and LLMs using PyTorch, GPU acceleration, and Hugging Face.',
    fullDescription: 'Deep learning is the engine behind modern generative AI and computer vision. In this mathematically rigorous and code-heavy course, you will implement backpropagation from first principles before building CNNs for computer vision, Recurrent Networks for sequence modeling, and Attention mechanisms for Transformer architectures using PyTorch and Hugging Face.',
    learningOutcomes: [
      'Understand forward propagation, loss functions, and backpropagation gradients',
      'Build and train Deep Neural Networks with PyTorch nn.Module and optimizers',
      'Implement Computer Vision models using CNNs, ResNets, and Transfer Learning',
      'Demystify Self-Attention, Multi-Head Attention, and Transformer models',
      'Fine-tune open-source Large Language Models (LLMs) with LoRA and PEFT',
      'Accelerate training with mixed precision (FP16/BF16) and multi-GPU setups'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: Foundations of Deep Neural Networks',
        lessons: [
          { id: 'c12-l1', title: 'Tensors, Autograd, and Computational Graphs in PyTorch', duration: '35 min', type: 'video' },
          { id: 'c12-l2', title: 'Building a Multi-Layer Perceptron (MLP) from Scratch', duration: '45 min', type: 'video' },
          { id: 'c12-l3', title: 'Activation Functions: ReLU, GELU, Sigmoid, and Softmax', duration: '28 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Computer Vision with CNNs',
        lessons: [
          { id: 'c12-l4', title: 'Convolutions, Pooling, and Feature Maps', duration: '40 min', type: 'video' },
          { id: 'c12-l5', title: 'Modern Architectures: ResNet, EfficientNet, and ConvNeXt', duration: '42 min', type: 'video' },
          { id: 'c12-l6', title: 'Transfer Learning and Data Augmentation Techniques', duration: '38 min', type: 'video' },
          { id: 'c12-l7', title: 'Lab: Medical Image Classification with 98% Accuracy', duration: '50 min', type: 'project' }
        ]
      },
      {
        moduleTitle: 'Module 3: Transformers & Natural Language Processing',
        lessons: [
          { id: 'c12-l8', title: 'Tokenization, Embeddings, and Positional Encodings', duration: '35 min', type: 'video' },
          { id: 'c12-l9', title: 'Scaled Dot-Product and Multi-Head Attention Mechanism', duration: '55 min', type: 'video' },
          { id: 'c12-l10', title: 'The Transformer Architecture: Encoder and Decoder Stacks', duration: '48 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Generative AI & Fine-Tuning LLMs',
        lessons: [
          { id: 'c12-l11', title: 'Hugging Face Transformers and Datasets Libraries', duration: '38 min', type: 'video' },
          { id: 'c12-l12', title: 'Fine-Tuning Llama / Mistral Models using LoRA & QLoRA', duration: '60 min', type: 'video' },
          { id: 'c12-l13', title: 'Model Evaluation, Perplexity, and Benchmark Datasets', duration: '30 min', type: 'reading' },
          { id: 'c12-l14', title: 'Capstone: End-to-End Domain-Specific AI Assistant', duration: '70 min', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-13',
    title: 'CSS Architecture, Tailwind CSS & Modern Animation',
    category: 'Web Development',
    instructor: {
      name: 'Dr. Sarah Mitchell',
      role: 'Principal Engineer & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    rating: 4.86,
    reviewsCount: 1210,
    studentsCount: 6800,
    duration: '21 hours',
    lessonsCount: 10,
    price: 54.99,
    originalPrice: 99.99,
    level: 'Beginner to Intermediate',
    isPopular: false,
    isFeatured: false,
    isRecent: true,
    shortDescription: 'Master modern CSS Grid, Flexbox, subgrid, container queries, CSS variables, and fluid responsive design.',
    fullDescription: 'Stop fighting with CSS layout bugs. In this styling deep dive, you will gain an intuitive mental model for Flexbox, CSS Grid, container queries, subgrid, modern color spaces (OKLCH), responsive typography (clamp), and fluid micro-animations that make web applications feel premium.',
    learningOutcomes: [
      'Master CSS Grid, subgrid, and auto-fit/auto-fill layout techniques',
      'Use CSS Container Queries for truly modular, component-based responsiveness',
      'Implement dark mode, themes, and design tokens using modern CSS Custom Properties',
      'Build butter-smooth GPU-accelerated CSS transforms and keyframe animations',
      'Optimize layout performance and eliminate Cumulative Layout Shift (CLS)'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: Modern CSS Layout Engines',
        lessons: [
          { id: 'c13-l1', title: 'The Flexbox Mental Model: Main & Cross Axis Tricks', duration: '26 min', type: 'video' },
          { id: 'c13-l2', title: 'CSS Grid & Subgrid: Solving Complex Two-Dimensional Layouts', duration: '38 min', type: 'video' },
          { id: 'c13-l3', title: 'Container Queries: The Future of Modular Web Design', duration: '32 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Modern Units & Fluid Typography',
        lessons: [
          { id: 'c13-l4', title: 'Fluid Typography & Spacing with clamp(), min(), and max()', duration: '30 min', type: 'video' },
          { id: 'c13-l5', title: 'Color Spaces: OKLCH, Color-Mix, and Dynamic Themes', duration: '28 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: Animations & Transitions',
        lessons: [
          { id: 'c13-l6', title: 'GPU Acceleration, will-change, and 60fps Web Performance', duration: '34 min', type: 'video' },
          { id: 'c13-l7', title: 'Keyframe Choreography and Staggered Reveal Effects', duration: '36 min', type: 'video' },
          { id: 'c13-l8', title: 'Scroll-Driven Animations with Pure CSS', duration: '25 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Real-World Responsive Projects',
        lessons: [
          { id: 'c13-l9', title: 'Building a Full Modern SaaS Landing Page from Scratch', duration: '55 min', type: 'project' },
          { id: 'c13-l10', title: 'CSS Quiz: Layout, Specificity, and Rendering Pipeline', duration: '20 min', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'course-14',
    title: 'Product Management Fundamentals: Agile, Roadmaps & Metrics',
    category: 'UI/UX Design',
    instructor: {
      name: 'Elena Rostova',
      role: 'Staff Product Designer at Meta',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    rating: 4.81,
    reviewsCount: 990,
    studentsCount: 4800,
    duration: '19 hours',
    lessonsCount: 9,
    price: 59.99,
    originalPrice: 109.99,
    level: 'Beginner',
    isPopular: false,
    isFeatured: false,
    isRecent: false,
    shortDescription: 'Learn product discovery, PRD writing, sprint planning, feature prioritization frameworks, and North Star metrics.',
    fullDescription: 'Lead multidisciplinary engineering, design, and marketing teams to ship products customers love. This practical guide covers writing crisp Product Requirement Documents (PRDs), prioritizing features using RICE and MoSCoW, managing sprint backlogs in Jira, tracking North Star KPIs, and launching Minimum Viable Products (MVPs).',
    learningOutcomes: [
      'Write clear, actionable Product Requirement Documents (PRDs)',
      'Apply prioritization models: RICE, MoSCoW, and Kano',
      'Define North Star metrics and input KPIs for product health',
      'Run effective Agile ceremonies: sprint planning, standups, and retrospectives',
      'Lead customer discovery interviews and feature hypothesis tests'
    ],
    curriculum: [
      {
        moduleTitle: 'Module 1: The Product Discovery Process',
        lessons: [
          { id: 'c14-l1', title: 'The Role of a PM: Strategy, Execution, and Leadership', duration: '22 min', type: 'video' },
          { id: 'c14-l2', title: 'Identifying Market Opportunities and Problem Spaces', duration: '30 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 2: Feature Prioritization & Roadmapping',
        lessons: [
          { id: 'c14-l3', title: 'The RICE Framework in Action: Reach, Impact, Confidence, Effort', duration: '35 min', type: 'video' },
          { id: 'c14-l4', title: 'Building Outcome-Based vs Feature-Based Product Roadmaps', duration: '32 min', type: 'video' },
          { id: 'c14-l5', title: 'Writing Bulletproof PRDs (Product Requirement Documents)', duration: '40 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 3: Agile Execution & Cross-Functional Collaboration',
        lessons: [
          { id: 'c14-l6', title: 'Partnering Effectively with Engineering and UX Design', duration: '28 min', type: 'video' },
          { id: 'c14-l7', title: 'Managing Sprint Backlogs and Grooming User Stories', duration: '34 min', type: 'video' }
        ]
      },
      {
        moduleTitle: 'Module 4: Product Analytics & Case Study',
        lessons: [
          { id: 'c14-l8', title: 'Defining North Star Metrics and Cohort Retention Curves', duration: '32 min', type: 'video' },
          { id: 'c14-l9', title: 'Capstone Project: Comprehensive Product Launch Case Study', duration: '45 min', type: 'project' }
        ]
      }
    ]
  }
];

export const testimonials = [
  {
    id: 't1',
    name: 'Michael Chen',
    role: 'Junior Frontend Developer at Shopify',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    content: 'The Full-Stack React & Node course completely transformed my career trajectory. Within 3 months of completing the curriculum, I landed my first software engineering job. The modular lessons and hands-on projects were unmatched!',
    rating: 5,
    courseTitle: 'Modern Full-Stack Web Development'
  },
  {
    id: 't2',
    name: 'Sophia Anderson',
    role: 'Product Designer at Canva',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'Elena’s UI/UX masterclass gave me the exact confidence and design system portfolio I needed. The auto-layout and prototyping lessons are top-tier. Highly recommended for any aspiring designer!',
    rating: 5,
    courseTitle: 'UI/UX Design Masterclass'
  },
  {
    id: 't3',
    name: 'David O’Connor',
    role: 'Data Analyst at FinTech Corp',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    content: 'The Python for Data Science and Machine Learning curriculum is so structured. The interactive lesson checklist allowed me to pace my learning and track my daily progress effortlessly.',
    rating: 5,
    courseTitle: 'Python for Data Science & ML'
  }
];

export const platformStats = [
  { label: 'Active Students', value: '45,000+' },
  { label: 'Expert Courses', value: '150+' },
  { label: 'Course Completion Rate', value: '94%' },
  { label: 'Instructor Rating', value: '4.9 / 5.0' }
];

export const platformFeatures = [
  {
    title: 'Industry-Vetted Curriculum',
    description: 'Learn in-demand modern skills taught by senior engineers and designers from top global tech companies.'
  },
  {
    title: 'Self-Paced Interactive Progress',
    description: 'Track lesson-by-lesson completions, resume anytime, and visualize your mastery percentage on any device.'
  },
  {
    title: 'Real-World Production Projects',
    description: 'Build enterprise-grade portfolio applications that impress hiring managers and prove your real competence.'
  },
  {
    title: 'Lifetime Access & Updates',
    description: 'Enroll once and enjoy permanent access to course lectures, updated materials, code repositories, and community.'
  }
];
