// ============================================================================
//  PORTFOLIO DATA — edit everything about "you" here in one place.
//  Links marked TODO are placeholders; drop in your real URLs anytime.
// ============================================================================

export const profile = {
  name: 'Shubham Paithane',
  fullName: 'Shubham Manoj Paithane',
  role: 'Software Developer',
  titles: ['Software Developer', 'Full-Stack Engineer', 'AI Enthusiast', 'Problem Solver'],
  location: 'Nashik, Maharashtra',
  email: 'shubhampaithane04@gmail.com',
  phone: '+91 9699613559',
  // Drop a square photo at public/profile.jpg to replace the initials avatar.
  photo: '/profile.jpg',
  initials: 'SP',
  summary:
    "Hi, I'm Shubham — a Computer Science student from Nashik, Maharashtra, pursuing B.Tech at Parul University. I'm passionate about Data Structures & Algorithms and building innovative projects to solve real-world problems.",
  summary2:
    "I've solved 300+ DSA problems across Arrays, Graphs, Trees, Linked Lists, and more on LeetCode. I enjoy working on full-stack projects, exploring AI technologies, and continuously learning to improve my problem-solving skills.",
}

export const links = {
  github: 'https://github.com/ShubhamPaithane04',
  linkedin: 'https://www.linkedin.com/in/shubham-paithane-3b9909374/',
  leetcode: 'https://leetcode.com/u/shubham_0_4_/',
  email: 'mailto:shubhampaithane04@gmail.com',
  music: 'https://music.apple.com/', // TODO: your Apple Music / playlist link
  resume: '/resume.pdf',
}

export const wallpapers = [
  {
    id: 'toji-default',
    name: 'Toji Ink',
    accent: '#a8b5c8',   // cool steel-blue — readable against dark ink wallpaper
    background: 'url(/wallpapers/toji-default.jpg) center / cover no-repeat',
  },
  {
    id: 'kung-fu-panda',
    name: 'Dragon Warrior',
    accent: '#2fc4e8',   // vivid sky-blue to match the dragon-warrior palette
    background: 'url(/wallpapers/kung-fu-panda.jpg) center / cover no-repeat',
  },
  {
    id: 'luffy-night',
    name: 'Luffy Night',
    accent: '#ff4d6d',   // punchy red-pink — Luffy's signature straw-hat energy
    background: 'url(/wallpapers/luffy-night.jpg) center / cover no-repeat',
  },
  {
    id: 'aurora',
    name: 'Aurora Glass',
    accent: '#64d2ff',   // cyan aurora
    background:
      'radial-gradient(90% 80% at 18% 12%, rgba(100,210,255,0.55), transparent 52%), radial-gradient(70% 70% at 78% 20%, rgba(191,90,242,0.48), transparent 58%), radial-gradient(80% 65% at 70% 88%, rgba(48,209,88,0.28), transparent 60%), linear-gradient(135deg, #06111f 0%, #10131f 46%, #05060a 100%)',
  },
]

// "What I'm doing" widget
export const services = [
  {
    icon: 'code',
    title: 'DSA Problem Solving',
    text: 'Solving algorithmic challenges on LeetCode across Arrays, Graphs, Trees, and Dynamic Programming.',
  },
  {
    icon: 'dev',
    title: 'Full-Stack Projects',
    text: 'Building web applications using React, Node.js, and databases to bring ideas to life.',
  },
  {
    icon: 'graduation',
    title: 'Learning & Growth',
    text: 'Exploring new technologies, frameworks, and best practices to become a better developer.',
  },
]

export const stats = [
  { number: '300+', label: 'DSA Problems Solved' },
  { number: '4+', label: 'Projects Completed' },
  { number: 'Top 1%', label: 'NPTEL Certification' },
  { number: '2027', label: 'Expected Graduation' },
]

export const achievements = [
  {
    icon: 'trophy',
    title: 'Top 1% Nationally',
    description: 'Elite + Silver in NPTEL Computer Networks & Internet Protocol, IIT Kharagpur.',
    color: '#FFD700',
  },
  {
    icon: 'code',
    title: '300+ DSA Problems',
    description: 'Solved on LeetCode across Arrays, Graphs, Trees, Linked Lists, and Dynamic Programming.',
    color: '#3b82f6',
  },
  {
    icon: 'award',
    title: 'PU Hackathon 2025',
    description: 'Built an AI-powered solution under 24 hours at Parul University.',
    color: '#10b981',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Trust_Ledger',
    year: '2025',
    icon: 'robot',
    description:
      'Full-stack blockchain-based trust verification and digital identity platform ensuring secure, transparent, and tamper-proof credential management.',
    highlights: [
      'Built secure blockchain ledger for tamper-proof credential verification',
      'Implemented decentralized identity management with cryptographic validation',
      'Achieved 99.9% uptime with distributed consensus mechanism',
      'Integrated smart contracts for automated trust scoring and verification',
    ],
    tech: ['React.js', 'Node.js', 'Solidity', 'Ethereum', 'Web3.js', 'MongoDB', 'Express', 'IPFS'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    github: 'https://github.com/ShubhamPaithane04',
    live: '#',
  },
  {
    id: 2,
    title: 'Vulcan-Pro Vulnerability Scanner',
    year: 'Jul 2025 - Sep 2025',
    icon: 'chess',
    description:
      'Advanced full-stack security platform integrating open-source tools like Nmap, Nikto, SQLmap, and WhatWeb for comprehensive vulnerability scanning with real-time visualization.',
    highlights: [
      'Integrated Nmap, Nikto, SQLmap, and WhatWeb for comprehensive security analysis',
      'Real-time scan visualization with severity-based threat categorization',
      'Secure email OTP verification for authenticated access',
      'Generated structured PDF reports with actionable remediation insights',
    ],
    tech: ['React.js', 'Tailwind CSS', 'PHP', 'Express.js', 'Nmap', 'Nikto', 'SQLmap', 'WhatWeb', 'Node.js'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    github: 'https://github.com/ShubhamPaithane04',
    live: '#',
  },
  {
    id: 3,
    title: 'Agentic AI: Intelligent Task Execution System',
    year: '2026',
    icon: 'robot',
    description:
      'Autonomous AI-driven system that improves task automation efficiency by 40% through intelligent planning and execution using the OpenAI API.',
    highlights: [
      'Improved task automation efficiency by 40% via autonomous AI planning',
      'Handled 500+ API requests through optimized pipelines',
      'Reduced manual effort by 35% via intelligent task delegation',
      'Full-stack: React.js frontend with a FastAPI backend, deployed on Vercel',
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'FastAPI', 'OpenAI API', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    github: 'https://github.com/ShubhamPaithane04',
    live: '#',
  },
  {
    id: 4,
    title: 'AI-Powered Chess Coach',
    year: '2025',
    icon: 'chess',
    description:
      'Intelligent chess coaching system delivering real-time move suggestions with 95% accuracy using the Stockfish engine and python-chess.',
    highlights: [
      'Real-time move suggestions with 95% accuracy (Stockfish + python-chess)',
      'Improved player win rate by 30%',
      'Reduced blunder rate by 25% in guided sessions',
      'Interactive UI with chessboard.js and a Flask REST API',
    ],
    tech: ['Python', 'Flask', 'JavaScript', 'HTML/CSS', 'Stockfish', 'python-chess', 'chessboard.js'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    github: 'https://github.com/ShubhamPaithane04',
    live: '#',
  },
]

export const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'Next.js', 'FastAPI', 'Flask', 'Node.js'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'AI / APIs',
    skills: ['OpenAI API', 'LangChain', 'Stockfish Engine'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Vercel', 'Render', 'Git', 'GitHub', 'VS Code', 'Android Studio'],
  },
]

// Experience / timeline — built from education, certs and milestones.
export const experience = [
  {
    year: '2023 — 2027',
    role: 'B.Tech, Computer Science Engineering',
    org: 'Parul University, Gujarat',
    text: 'Pursuing a Computer Science degree with a focus on full-stack development, data structures and AI. Expected graduation: 2027.',
    tag: 'Education',
  },
  {
    year: '2026',
    role: 'Agentic AI — Intelligent Task Execution System',
    org: 'Personal Project',
    text: 'Designed and shipped an autonomous AI system that improved task automation efficiency by 40% and handled 500+ API requests.',
    tag: 'Project',
  },
  {
    year: '2025',
    role: 'PU Hackathon 2025',
    org: 'Parul University',
    text: 'Built an AI-powered solution under 24 hours in a competitive hackathon environment.',
    tag: 'Hackathon',
  },
  {
    year: '2025',
    role: 'AI-Powered Chess Coach',
    org: 'Personal Project',
    text: 'Developed a real-time chess coaching engine with 95% move accuracy using Stockfish and python-chess.',
    tag: 'Project',
  },
]

export const certifications = [
  'AWS Cloud Practitioner Essentials — Amazon Web Services',
  'Elite + Silver | Top 1% Nationally — Computer Networks & Internet Protocol, NPTEL (IIT Kharagpur)',
  'Agentic AI Course — Completion Certified',
]

export const musicTracks = [
  {
    title: 'Sunflower',
    artist: 'Post Malone & Swae Lee',
    src: '/music/song-1.mp3',
    cover: '/cover.jpg',
  },
  {
    title: 'Sweater Weather',
    artist: 'The Neighbourhood',
    src: '/music/song-2.mp3',
    cover: '/cover.jpg',
  },
  {
    title: 'Fired Up',
    artist: 'Unknown Artist',
    src: '/music/song-3.mp3',
    cover: '/cover.jpg',
  },
  {
    title: 'Never Enough',
    artist: 'Loren Allred',
    src: '/music/song-4.mp3',
    cover: '/cover.jpg',
  },
]
