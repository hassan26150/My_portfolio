import {
  FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa';
import {
  SiTypescript, SiScikitlearn, SiPandas, SiNumpy, SiFastapi,
  SiMongodb, SiRedis, SiExpress, SiPostman, SiJsonwebtokens,
  SiReact
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import { BsLightningChargeFill, BsBraces, BsDatabase, BsShieldLock, BsTools } from 'react-icons/bs';

const skills = [
  {
    category: 'Languages',
    icon: BsBraces,
    color: '#00D4FF',
    items: [
      { name: 'Python', icon: FaPython, level: 90 },
      { name: 'JavaScript', icon: FaJs, level: 88 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
    ]
  },
  {
    category: 'Machine Learning',
    icon: BsLightningChargeFill,
    color: '#8B5CF6',
    items: [
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 85 },
      { name: 'Pandas', icon: SiPandas, level: 85 },
      { name: 'NumPy', icon: SiNumpy, level: 85 },
      { name: 'Model Training', level: 82 },
      { name: 'Feature Engineering', level: 80 },
      { name: 'Synthetic Data Gen', level: 78 },
    ]
  },
  {
    category: 'Generative AI / LLMs',
    icon: TbBrandOpenai,
    color: '#FF6B6B',
    items: [
      { name: 'LLaMA 3.3 70B (Groq)', level: 88 },
      { name: 'Hugging Face API', level: 82 },
      { name: 'Stable Diffusion XL', level: 78 },
      { name: 'FLUX.1', level: 78 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Output Validation (Zod)', level: 85 },
    ]
  },
  {
    category: 'Backend & APIs',
    icon: FaNodeJs,
    color: '#00D4FF',
    items: [
      { name: 'Node.js', icon: FaNodeJs, level: 90 },
      { name: 'Express.js', icon: SiExpress, level: 88 },
      { name: 'FastAPI', icon: SiFastapi, level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 85 },
    ]
  },
  {
    category: 'Databases & Caching',
    icon: BsDatabase,
    color: '#8B5CF6',
    items: [
      { name: 'MongoDB Atlas', icon: SiMongodb, level: 90 },
      { name: 'Mongoose / Aggregation', level: 88 },
      { name: 'Redis', icon: SiRedis, level: 80 },
      { name: 'Text Search / TF-IDF', level: 82 },
    ]
  },
  {
    category: 'Frontend & Mobile',
    icon: FaReact,
    color: '#00D4FF',
    items: [
      { name: 'React / React Native', icon: SiReact, level: 85 },
      { name: 'Expo', level: 82 },
      { name: 'HTML / CSS', level: 88 },
      { name: 'Socket.io / WebRTC', level: 78 },
    ]
  },
  {
    category: 'Security & Reliability',
    icon: BsShieldLock,
    color: '#FF6B6B',
    items: [
      { name: 'JWT Auth', icon: SiJsonwebtokens, level: 88 },
      { name: 'bcrypt / Helmet', level: 85 },
      { name: 'Rate Limiting', level: 82 },
      { name: 'Error Handling', level: 88 },
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: BsTools,
    color: '#8B5CF6',
    items: [
      { name: 'Git', icon: FaGitAlt, level: 88 },
      { name: 'GitHub', icon: FaGithub, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 85 },
      { name: 'Cloudinary', level: 80 },
    ]
  }
];

export default skills;
