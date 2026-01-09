import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: 'Syed Mawahid Hussain',
        tagline: 'DevOps Intern @ The Botss / CS Student @ FAST NUCES Karachi',
        intro: 'A passionate Computer Science student and aspiring Software Engineer with a knack for solving complex problems and building efficient solutions.',
        email: 'hafizmawahid2775@gmail.com',
        phone: '+923104999443',
        socials: [
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/syed-mawahid-hussain-ab951b180/', // User didn't provide URL, using placeholder
                icon: Linkedin,
            },

            {
                name: 'GitHub',
                url: 'https://github.com/SMAWAHID',
                icon: Github,
            },

            {
                name: 'Email',
                url: 'mailto:hafizmawahid2775@gmail.com',
                icon: Mail,
            },

            {
                name: 'Phone',
                url: 'tel:+923378289306',
                icon: Phone,
            },
        ],
    },
    skills: {
        languages: ['Python', 'C', 'C++', 'Java', 'JavaScript/TypeScript'],
        frameworks: ['React.js', 'Next.js', 'Node.js', 'FastAPI'],
        tools: ['Git', 'VS Code', 'MS Office', 'Graphic Designing', 'Video Editing'],
        concepts: [
            'Graph Theory',
            'OOP',
            'Data Structures',
            'AI Framework',
            'Agents',
            'RAG',
            'Task Automation',
        ],
        softSkills: ['Problem Solving', 'Teamwork', 'Communication Skills'],
        spokenLanguages: ['English (Fluent)', 'Urdu (Native)'],
    },
    education: [
        {
            institution: 'FAST NUCES Karachi',
            degree: 'BS Computer Science',
            year: '2024 - 2028',
        },
        {
            institution: 'Generations School',
            degree: 'O Levels and A Levels',
            year: '2019-2024', // User didn't provide specific years
        },
    ],
    extracurricular: [
        {
            role: 'VP',
            organization: 'Nasheed Society',
        },
        {
            role: 'Security Head',
            organization: 'Entrepreneur’s Society',
        },
        {
            role: 'Volunteer',
            organization: 'Idara Al-Khair, Indus Hospital',
        },
        {
            role: 'Competitor',
            organization: 'Code Sprint, Procom, CEATS, Envirography, KGS GRAMA',
        },
    ],
    projects: [
        {
            title: 'Sports Management System',
            description: 'A comprehensive system to manage sports events and player records.',
            techStack: ['C', 'C++'],
            date: 'Oct 2024 – Nov 2024',
        },
        {
            title: 'FAST NUCES Campus Navigation System',
            description: 'An efficient navigation tool using graph algorithms to find optimal paths on campus.',
            techStack: ['Data Structures', 'Graph Theory'],
            date: 'Oct 2025 – Dec 2024', // Note: Date seems future/past mixed, keeping as provided or assuming typo. Oct 2024 - Dec 2024 likely.
        },
        {
            title: 'Snakes and Ladder Game',
            description: 'A classic board game implementation applying Object-Oriented Principles.',
            techStack: ['OOP'],
            date: 'Jan 2025 - Mar 2025',
        },
        {
            title: 'Parking Management System',
            description: 'Low-level system for managing parking slots and billing.',
            techStack: ['Assembly Language'],
            date: 'Oct 2025 – Dec 2024',
        },
        {
            title: 'Voice Emotion Recognition System',
            description: 'AI-powered system to detect emotions from voice inputs.',
            techStack: ['Python', 'React'],
            date: 'Sept 2024 - Jan 2025',
        },
        {
            title: 'RAG Chatbot Prototype',
            description: 'Retrieval-Augmented Generation chatbot utilizing OpenAI API for context-aware responses.',
            techStack: ['FastAPI', 'OpenAI API'],
            date: 'Jan 2025 - Mar 2025',
        },
    ],
};
