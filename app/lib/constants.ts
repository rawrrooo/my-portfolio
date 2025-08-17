import { 
  FiGithub, FiTwitter, FiLinkedin, FiMail, FiCode, 
  FiLayers, FiSmartphone, FiDatabase, FiCpu 
} from 'react-icons/fi'

import { 
  FaReact, FaNodeJs, FaJava 
} from 'react-icons/fa'

import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb 
} from 'react-icons/si'

export const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
];

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/rawrrooo', icon: FiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/roopali-singh-tech/', icon: FiLinkedin },
    { name: 'Email', url: 'mailto:roopalisingh784@gmail.com', icon: FiMail },
]

export const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: FiLayers },   // Express has no official icon, FiLayers is a good abstract fit
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Java', icon: FaJava },
  { name: 'SQL', icon: FiDatabase },
]


export const projects = [
    {
        name: 'Pustak, an E-Book Store', 
        image: '/images/pustak.png',
        description: 'A modern e-commerce platform for buying and reselling books in affordable prices with a user-friendly interface.',
        technologies: ['React.js', 'Express.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Netlify'],
        githubUrl: 'https://github.com/rawrrooo/Pustak-App',
    },
    {
        name: 'Customer Behavior Analysis using AI-Driven Recommendations',
        image: '/images/Customer-behaviour.png',
        description: 'Analyze customer behavior with AI-driven recommendations. Visualize data with charts and graphs.',
        technologies: ['Python', 'ML', 'Frontend','SQL', 'Flask', 'Bootstrap'],
        githubUrl: 'https://github.com/rawrrooo/Customer-Behaviour-Analysis-using-AI-Driven-Recommendations',
    },
    {
        name: 'AskMeAI',
        image: '/images/askmeai.png',
        description: 'An AI-powered question-answering system that provides accurate and relevant answers to user queries. Similar to Gemini AI.',
        technologies: ['React.js', 'HTML', 'Tailwind CSS', 'Gemini API', 'Node.js'],
        githubUrl: 'https://github.com/rawrrooo/AskME-AI',
    }
]


export const services = [
    {
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies for optimal performance.',
        icon: FiCode
    },
    {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement.',
        icon: FiLayers
    },
    {
        title: 'Backend Development',
        description: 'Robust server-side solutions with scalable architecture and secure APIs.',
        icon: FiDatabase
    },
]