export const profile = {
  name: "Muhammad Hamizan Bin Borhan",
  roles: [
    "IT Support Specialist",
    "Infrastructure Engineer",
    "DevOps & Automation",
    "Web Developer",
  ],
  location: "Bukit Jelutong, Shah Alam, Selangor",
  phone: "+60 14-266 5643",
  intro:
    "Results-driven IT Support Specialist and Infrastructure Engineer with 3+ years of hands-on experience in network administration, server management, virtualization, and system security. Proven ability to maintain high system availability, manage IT infrastructure, and collaborate with cross-functional teams and vendors on technology upgrades. In parallel, I design and deploy personal web projects — including this portfolio — using React, Next.js, Tailwind CSS, and Vercel.",
  about:
    "Results-driven IT professional with hands-on experience in network administration, server management, and virtualization. Pursuing DevOps practices through homelab projects and automation, while also building modern, responsive web applications with React, Next.js, and AI-assisted development workflows.",
  email: "hamizan.borhan2000@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-hamizan-borhan",
  github: "https://github.com/hamizan24",
  whatsapp: "https://wa.me/60142665643",
  resumeUrl: "/resume.pdf",
  footerTagline:
    "Building reliable infrastructure, automating workflows, and shipping modern web applications.",
  tagline: "Bridging Infrastructure, DevOps & Modern Web Development",
} as const;

export const socialProof = [
  "Foxboro (M) Sdn Bhd",
  "Barika Technology",
  "ILP Network Technology",
  "UITM Puncak Alam",
] as const;

export const stats = [
  { value: "3+", label: "Years IT Experience" },
  { value: "99%", label: "Server Uptime Target" },
  { value: "20+", label: "Homelab Containers" },
  { value: "10+", label: "Virtual Machines Managed" },
  { value: "5+", label: "Personal Dev Projects" },
] as const;

export const skillCategories = [
  {
    title: "Infrastructure & Systems",
    icon: "server",
    skills: [
      { name: "Linux Administration", level: 88 },
      { name: "Windows Server", level: 90 },
      { name: "Active Directory", level: 85 },
      { name: "VMware vSphere", level: 87 },
      { name: "Hyper-V", level: 85 },
      { name: "Server Configuration", level: 90 },
      { name: "Patch Management", level: 88 },
      { name: "Performance Monitoring", level: 86 },
    ],
  },
  {
    title: "Networking & Security",
    icon: "network",
    skills: [
      { name: "TCP/IP & OSI Model", level: 88 },
      { name: "VLANs & Routing", level: 85 },
      { name: "Fiber Optic Cabling", level: 82 },
      { name: "Structured Cabling", level: 84 },
      { name: "Ethernet Switching", level: 86 },
      { name: "OTDR & Power Meter", level: 80 },
      { name: "Endpoint Security", level: 83 },
      { name: "Ekahau Site Survey", level: 78 },
    ],
  },
  {
    title: "DevOps & Automation",
    icon: "devops",
    skills: [
      { name: "Bash / Shell Scripting", level: 65 },
      { name: "CI/CD Concepts", level: 58 },
      { name: "Docker (Foundational)", level: 55 },
      { name: "Git Version Control", level: 62 },
      { name: "GitHub", level: 65 },
      { name: "Jenkins", level: 50 },
      { name: "GitHub Actions", level: 52 },
      { name: "Infrastructure-as-Code Concepts", level: 48 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "monitor",
    skills: [
      { name: "Ticketing & Asset Management", level: 85 },
      { name: "IT Budgeting", level: 78 },
      { name: "Vendor Coordination", level: 88 },
      { name: "PPM Scheduling", level: 86 },
      { name: "CCTV Systems", level: 82 },
      { name: "Access Control", level: 84 },
      { name: "Barrier Gate Systems", level: 80 },
      { name: "Log Analysis", level: 75 },
    ],
  },
  {
    title: "Development",
    icon: "code",
    skills: [
      { name: "HTML & CSS", level: 70 },
      { name: "JavaScript", level: 58 },
      { name: "React.js", level: 62 },
      { name: "Next.js", level: 65 },
      { name: "TypeScript", level: 55 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Node.js", level: 52 },
      { name: "AI-Assisted Development", level: 58 },
      { name: "Vercel Deployment", level: 60 },
      { name: "WordPress", level: 65 },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 55 },
      { name: "PostgreSQL", level: 48 },
      { name: "Supabase", level: 45 },
    ],
  },
] as const;

export const homelab = {
  title: "Homelab Study",
  subtitle:
    "Self-development activities building DevOps and full stack skills on top of a solid infrastructure foundation.",
  studyTracks: [
    {
      id: "devops",
      label: "DevOps & Automation",
      description:
        "Linux command-line, Bash scripting, Docker containerization, Git & GitHub, and CI/CD pipeline concepts (Jenkins, GitHub Actions).",
      accent: "#1e40af",
      categories: [
        {
          title: "Virtualization",
          items: ["VMware ESXi", "Hyper-V", "Virtual Machines"],
        },
        {
          title: "Containerization",
          items: ["Docker", "Docker Compose"],
        },
        {
          title: "CI/CD",
          items: ["Jenkins", "GitHub Actions", "GitLab CI/CD"],
        },
        {
          title: "Monitoring",
          items: ["Grafana", "Prometheus", "Log Analysis"],
        },
        {
          title: "Version Control",
          items: ["Git", "GitHub", "GitLab"],
        },
      ],
      projects: [
        "Personal DevOps Lab",
        "Network Monitoring Dashboard",
        "Automated Deployment Pipeline",
      ],
      nodes: [
        { id: "esxi", label: "VMware ESXi", x: 50, y: 12, color: "#607078" },
        { id: "hyperv", label: "Hyper-V", x: 85, y: 12, color: "#0078D4" },
        { id: "docker", label: "Docker", x: 15, y: 45, color: "#2496ED" },
        { id: "jenkins", label: "Jenkins", x: 50, y: 45, color: "#D24939" },
        { id: "gitlab", label: "GitLab CI", x: 85, y: 45, color: "#FC6D26" },
        { id: "grafana", label: "Grafana", x: 25, y: 78, color: "#F46800" },
        { id: "prom", label: "Prometheus", x: 60, y: 78, color: "#E6522C" },
        { id: "github", label: "GitHub", x: 90, y: 78, color: "#ffffff" },
      ],
      connections: [
        ["esxi", "docker"],
        ["hyperv", "docker"],
        ["docker", "jenkins"],
        ["jenkins", "gitlab"],
        ["docker", "grafana"],
        ["grafana", "prom"],
        ["jenkins", "github"],
      ],
    },
    {
      id: "fullstack",
      label: "Full Stack Developer",
      description:
        "Personal and homelab projects exploring modern web development alongside core infrastructure skills.",
      accent: "#3b82f6",
      categories: [
        {
          title: "Frontend",
          items: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express.js", "REST API"],
        },
        {
          title: "Database",
          items: ["MySQL", "PostgreSQL", "Supabase"],
        },
        {
          title: "CMS & Tools",
          items: ["WordPress", "Elementor", "Git", "GitHub"],
        },
      ],
      projects: [
        "Online Portfolio & Resume Website",
        "React Full Stack Applications",
        "FSM Management System",
        "WordPress Business Websites",
      ],
      nodes: [
        { id: "react", label: "React", x: 20, y: 20, color: "#61DAFB" },
        { id: "node", label: "Node.js", x: 50, y: 20, color: "#339933" },
        { id: "express", label: "Express", x: 80, y: 20, color: "#ffffff" },
        { id: "mysql", label: "MySQL", x: 35, y: 55, color: "#4479A1" },
        { id: "supabase", label: "Supabase", x: 65, y: 55, color: "#3FCF8E" },
        { id: "api", label: "REST API", x: 50, y: 78, color: "#3b82f6" },
      ],
      connections: [
        ["react", "node"],
        ["node", "express"],
        ["express", "mysql"],
        ["express", "supabase"],
        ["express", "api"],
        ["react", "api"],
      ],
    },
  ],
} as const;

export const education = [
  {
    degree: "Diploma Kemahiran Malaysia — Network Technology",
    school: "Institut Latihan Perindustrian (ILP)",
    period: "Jan 2020 — Jun 2022",
    highlights: [
      "Server configuration and management",
      "Router and routing protocol configuration",
      "Computer system and network procurement",
    ],
  },
  {
    degree: "Sijil Kemahiran Malaysia — Network Cabling & Infrastructure",
    school: "Institut Latihan Perindustrian (ILP) — Tangkak",
    period: "Jun 2018 — Dec 2019",
    highlights: [
      "Fiber optic installation, termination, and testing",
      "Structured cabling design (TIA/EIA standards)",
      "Network fundamentals and Ethernet switching",
    ],
  },
] as const;

export const experience = [
  {
    company: "Foxboro (M) Sdn Bhd",
    location: "Bukit Jelutong",
    role: "IT Technical Support Engineer",
    period: "Nov 2023 — Present",
    achievements: [
      "Delivered Tier-1 and Tier-2 IT support across all departments within defined SLAs",
      "Administered Windows/Linux servers with 99%+ uptime through proactive maintenance and patching",
      "Managed VMware and Hyper-V environments, provisioning VMs for business applications",
      "Led vendor coordination for IT hardware and software upgrades on schedule and within budget",
      "Operated endpoint security and antivirus platforms with proactive log analysis",
      "Contributed to IT asset lifecycle management — procurement through decommissioning",
      "Supported IT budget planning and resource allocation with cost-saving opportunities",
    ],
  },
  {
    company: "Barika Technology",
    location: "UITM Puncak Alam (Deployed)",
    role: "IT Technician",
    period: "Jan 2022 — Oct 2023",
    achievements: [
      "Maintained campus network infrastructure with minimal downtime across multi-building facilities",
      "Executed PPM schedule for barrier gates, CCTV, and access control systems",
      "Troubleshot fiber optic networks using OTDR and power meter testing equipment",
      "Managed and audited access card systems for secure facility entry",
      "Produced technical reports supporting equipment replacement and procurement decisions",
      "Monitored and enhanced CCTV system performance across campus premises",
    ],
  },
] as const;

export const projects = [
  {
    featured: true,
    personal: true,
    name: "Online Portfolio & Resume Website",
    subtitle: "Professional Portfolio — This Site",
    description:
      "Built with React and Next.js using an AI-assisted development workflow for faster delivery, code optimization, and enhanced productivity. Features responsive design, SEO optimization, and Vercel deployment.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Responsive corporate UI",
      "SEO & metadata optimized",
      "Resume PDF download",
      "AI-assisted dev workflow",
    ],
    github: "https://github.com/hamizan24/Hamizan_Resume",
    demo: null,
  },
  {
    featured: true,
    personal: true,
    name: "FSM Pro",
    subtitle: "Field Service Management System",
    description:
      "Personal full stack project — enterprise-style field service platform for work order management, technician tracking, and customer operations.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    features: [
      "Work Order Management",
      "Technician Tracking",
      "Dashboard Analytics",
      "Customer Management",
    ],
    github: null,
    demo: null,
  },
  {
    featured: true,
    personal: true,
    name: "Homelab DevOps Environment",
    subtitle: "Personal Infrastructure Lab",
    description:
      "Self-hosted lab for learning containerization, CI/CD pipeline concepts, and monitoring — available to demonstrate upon request.",
    tech: ["Docker", "Jenkins", "GitHub", "Grafana", "Prometheus", "Linux"],
    features: [],
    github: null,
    demo: null,
  },
  {
    featured: true,
    personal: true,
    name: "Business Website Development",
    subtitle: "Client & Personal Web Projects",
    description:
      "WordPress and custom web solutions with responsive layouts and tailored functionality for business clients.",
    tech: ["WordPress", "Elementor", "HTML", "CSS"],
    features: [],
    github: null,
    demo: null,
  },
] as const;

export const careerGoals = [
  "DevOps Engineer",
  "Infrastructure Engineer",
  "Cloud Engineer",
  "IT Support Engineer",
] as const;

export const devopsReadiness = [
  {
    title: "Linux & Scripting",
    year: "Self-Development",
    items: ["Linux CLI", "Bash Scripting", "Task Automation"],
  },
  {
    title: "Containerization",
    year: "Self-Development",
    items: ["Docker Fundamentals", "Docker Compose", "Container Concepts"],
  },
  {
    title: "Version Control & CI/CD",
    year: "Self-Development",
    items: ["Git & GitHub", "Jenkins Concepts", "GitHub Actions"],
  },
  {
    title: "Web Development",
    year: "Personal Projects",
    items: [
      "HTML & CSS",
      "React.js & Next.js",
      "TypeScript",
      "AI-Assisted Development",
      "Vercel Deployment",
    ],
  },
] as const;

export const techStack = [
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Jenkins", slug: "jenkins", color: "#D24939" },
  { name: "Grafana", slug: "grafana", color: "#F46800" },
  { name: "Prometheus", slug: "prometheus", color: "#E6522C" },
  { name: "GitHub", slug: "github", color: "#ffffff" },
  { name: "Linux", slug: "linux", color: "#FCC624" },
  { name: "VMware", slug: "vmware", color: "#607078" },
  { name: "Hyper-V", slug: "microsoft", color: "#0078D4" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#000000" },
  { name: "Node.js", slug: "nodedotjs", color: "#339933" },
  { name: "Vercel", slug: "vercel", color: "#000000" },
  { name: "MySQL", slug: "mysql", color: "#4479A1" },
  { name: "WordPress", slug: "wordpress", color: "#21759B" },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#homelab", label: "Homelab Study" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const seoKeywords = [
  "DevOps Engineer Malaysia",
  "Infrastructure Engineer Malaysia",
  "IT Support Engineer Malaysia",
  "Network Engineer Malaysia",
  "Muhammad Hamizan Bin Borhan",
  "IT Technician Shah Alam",
  "VMware Hyper-V Malaysia",
  "Homelab DevOps",
] as const;
