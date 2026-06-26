const projects = [
  {
    id: 'easycar',
    title: 'Easy Car',
    subtitle: 'AI/ML Automotive Diagnostics Platform',
    category: 'AI/ML',
    featured: true,
    description: 'A microservices-powered mobile platform for AI-driven vehicle diagnostics, featuring real-time ML predictions, conversational AI troubleshooting, and generative AI vehicle customization.',
    longDescription: `Architected a full microservices system decoupling a Python/FastAPI ML inference service from the main Node.js/Express backend to serve real-time vehicle diagnostics predictions. The platform integrates 3 trained Scikit-learn models, a conversational AI assistant powered by LLaMA 3.3 70B, and a generative AI customization pipeline using FLUX.1 and Stable Diffusion XL.`,
    stack: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas', 'NumPy', 'Groq API', 'LLaMA 3.3 70B', 'Hugging Face', 'React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB Atlas'],
    features: [
      '3 trained ML models — Random Forest Classifier (risk level), Gradient Boosting Classifier (failing component), Random Forest Regressor (health score 0–100)',
      'Conversational diagnostics assistant powered by LLaMA 3.3 70B — translates OBD-II fault codes into plain-language explanations & repair recommendations',
      'Generative AI vehicle customization — photorealistic 3D modification previews from natural-language prompts (FLUX.1, Stable Diffusion XL)',
      'Real-time vehicle dashboard with live engine telemetry data',
      'Synthetic data generation pipeline using NumPy statistical distributions (5,000 records)',
      'Production FastAPI server with Pydantic validation & /predict REST endpoint',
      'Exponential backoff for model cold-starts & rate-limiting for generation endpoints',
      'Service booking, service history, video tutorials, AR repair guides',
      '16+ screens in the mobile application'
    ],
    technicalHighlights: [
      'Microservices architecture — Python ML service decoupled from Node.js backend',
      'Automated ML training pipeline with 80/20 split, accuracy score & MAE evaluation',
      'Dynamic prompt engineering grounded in live vehicle state data',
      'Fault-tolerant API handling with retry/backoff logic'
    ],
    github: 'https://github.com/hassan26150/easyCarV4.git',
    color: '#00D4FF',
  },
  {
    id: 'pennywise',
    title: 'Penny Wise',
    subtitle: 'AI-Powered Price Discovery Engine',
    category: 'AI/ML',
    featured: true,
    description: 'A cross-platform price comparison engine with an AI-powered conversational shopping assistant, smart product matching, and personalized recommendations across 80,000+ products.',
    longDescription: `Built an end-to-end price discovery platform that combines conversational AI (LLaMA 3.3 70B via Groq), fuzzy string matching, and personalized recommendation systems. The platform scrapes and matches products across multiple e-commerce platforms, offering users real-time price comparisons and AI-powered shopping assistance.`,
    stack: ['Python', 'FastAPI', 'RapidFuzz', 'Groq API', 'LLaMA 3.3 70B', 'Redis', 'React Native', 'Expo', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'BeautifulSoup4'],
    features: [
      'AI Shopping Assistant — LLaMA 3.3 70B chatbot with intent extraction, multi-turn memory (Redis), structured JSON output (Zod)',
      'Cross-platform product matching — fuzzy string matching (RapidFuzz, Levenshtein) + Jaccard Index token-matching',
      'Personalized recommendation engine — per-user category affinity scores, pre-cached for O(1) reads',
      'Full-text relevance search across 80,000+ product catalog (MongoDB Text Indexes, TF-IDF textScore)',
      'Decoupled scraper microservice (Python, FastAPI, BeautifulSoup4, httpx, APScheduler)',
      'Multi-role system — Buyer, Seller, Admin dashboards',
      'Shopping cart, checkout, favorites, price alerts, order management',
      'Dispute resolution & seller/product approval workflows'
    ],
    technicalHighlights: [
      '3-tier microservices architecture — Node.js API → Python ML/Scraper → MongoDB + Redis',
      'NLP intent extraction into structured JSON validated with Zod',
      'Batch-computed recommendation scores with pre-caching for instant reads',
      'High-IO scraper service decoupled from core API for platform availability'
    ],
    github: 'https://github.com/hassan26150/PennyWiseProject.git',
    color: '#8B5CF6',
  },
  {
    id: 'video-conferencing',
    title: 'Video Conferencing Platform',
    subtitle: 'Real-Time Collaboration Suite',
    category: 'Full Stack',
    featured: false,
    description: 'Production-ready video conferencing platform inspired by Zoom & Google Meet, with multi-user video calls, screen sharing, collaborative whiteboard, and real-time messaging.',
    longDescription: 'Built during the CodeAlpha internship, this platform features WebRTC-powered multi-user video calls, Socket.io real-time messaging, screen sharing, collaborative whiteboard, file sharing, and secure authentication.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'Multi-user video calls with WebRTC peer connections',
      'Screen sharing & collaborative whiteboard',
      'Real-time chat with Socket.io',
      'File sharing & secure authentication',
      'Responsive design inspired by Zoom & Google Meet'
    ],
    github: 'https://github.com/hassan26150/CodeAlpha_ProductionReady_VideoConfrencingApp_full_stack_internProject.git',
    color: '#00D4FF',
  },
  {
    id: 'social-media',
    title: 'Social Media Platform',
    subtitle: 'Full-Stack Social Network',
    category: 'Full Stack',
    featured: false,
    description: 'Full-stack social media platform with user profiles, posts, image uploads, likes, comments, follow system, notifications, and user search.',
    longDescription: 'A scalable social media application built during the CodeAlpha internship, featuring complete social networking capabilities with a secure, scalable architecture.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'User profiles with image uploads',
      'Posts with likes & comments',
      'Follow system & notifications',
      'User search & secure authentication',
      'Scalable architecture'
    ],
    github: '#',
    color: '#8B5CF6',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Shopping Experience',
    category: 'Full Stack',
    featured: false,
    description: 'Production-ready e-commerce platform with product catalog, shopping cart, order management, admin dashboard, and secure checkout workflows.',
    longDescription: 'A complete e-commerce solution built during the CodeAlpha internship, featuring user authentication, product management, search & filtering, shopping cart, and admin capabilities.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'Product catalog with search & filtering',
      'Shopping cart & secure checkout',
      'Order management system',
      'Admin dashboard with product management',
      'Image uploads via Cloudinary'
    ],
    github: '#',
    color: '#00D4FF',
  }
];

export default projects;
