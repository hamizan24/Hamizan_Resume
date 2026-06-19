export const profile = {
  name: "Muhammad Hamizan Bin Borhan",
  roles: ["Infrastructure", "DevOps Enthusiast", "Junior Developer"],
  intro:
    "Results-driven IT Support Specialist and Infrastructure Engineer with over 3 years of experience in network administration, virtualization, server management, system security, and enterprise IT support. Passionate about DevOps, automation, cloud technologies, and modern web development.",
  about:
    "An Infrastructure Engineer transitioning into DevOps and Full Stack Development. Experienced in Linux administration, Windows Server, VMware, Hyper-V, networking, cybersecurity, Docker, Git, Jenkins, Grafana, and modern web technologies.",
  email: "hamizan.borhan@email.com",
  linkedin: "https://linkedin.com/in/muhammad-hamizan-borhan",
  github: "https://github.com/hamizanborhan",
  whatsapp: "https://wa.me/60123456789",
  resumeUrl: "/resume.pdf",
  footerTagline:
    "Building reliable infrastructure, automating workflows, and creating modern digital solutions.",
} as const;

export const stats = [
  { value: "20+", label: "Docker Containers" },
  { value: "10+", label: "Virtual Machines" },
  { value: "3+", label: "Years Infrastructure Experience" },
  { value: "5+", label: "DevOps Projects" },
  { value: "99%", label: "Uptime Monitoring" },
] as const;

export const skillCategories = [
  {
    title: "Infrastructure",
    icon: "server",
    skills: [
      "Windows Server",
      "Linux Administration",
      "VMware",
      "Hyper-V",
      "Active Directory",
      "DNS",
      "DHCP",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Networking",
    icon: "network",
    skills: [
      "Cisco Switching",
      "VLAN",
      "Routing",
      "TCP/IP",
      "Fiber Optic",
      "Structured Cabling",
      "Network Security",
      "Ekahau Site Survey",
    ],
  },
  {
    title: "DevOps",
    icon: "devops",
    skills: [
      "Docker",
      "Jenkins",
      "Git",
      "GitHub",
      "GitLab",
      "CI/CD",
      "Bash Scripting",
      "Linux",
      "Monitoring",
    ],
  },
  {
    title: "Monitoring & Observability",
    icon: "monitor",
    skills: [
      "Grafana",
      "Prometheus",
      "Log Analysis",
      "System Monitoring",
    ],
  },
  {
    title: "Development",
    icon: "code",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "REST API",
      "WordPress",
      "Elementor",
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["MySQL", "PostgreSQL", "Supabase"],
  },
] as const;

export const homelab = {
  title: "Home Lab Infrastructure",
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
      items: ["Grafana", "Prometheus"],
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
    "React Full Stack Applications",
    "FSM Management System",
    "WordPress Business Websites",
  ],
} as const;

export const experience = [
  {
    company: "Foxboro (M) Sdn Bhd",
    role: "IT Technical Support Engineer",
    period: "Nov 2023 — Present",
    achievements: [
      "Server administration",
      "Linux and Windows management",
      "VMware and Hyper-V virtualization",
      "Security monitoring",
      "IT infrastructure support",
      "Vendor coordination",
    ],
  },
  {
    company: "Barika Technology",
    role: "IT Technician",
    period: "Jan 2022 — Oct 2023",
    achievements: [
      "Campus network infrastructure",
      "Fiber optic troubleshooting",
      "CCTV systems",
      "Access control systems",
      "Preventive maintenance",
    ],
  },
] as const;

export const projects = [
  {
    featured: true,
    name: "FSM Pro",
    subtitle: "Field Service Management System",
    description:
      "Enterprise field service platform for work order management, technician tracking, and customer operations.",
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
    name: "Homelab DevOps Environment",
    subtitle: "Personal Infrastructure Lab",
    description:
      "Self-hosted DevOps environment with containerized services, CI/CD pipelines, and full-stack monitoring stack.",
    tech: ["Docker", "Jenkins", "GitHub", "Grafana", "Prometheus", "Linux"],
    features: [],
    github: null,
    demo: null,
  },
  {
    featured: true,
    name: "Business Website Development",
    subtitle: "Client Web Solutions",
    description:
      "Custom business websites with modern design, responsive layouts, and tailored functionality for clients.",
    tech: ["WordPress", "Elementor", "Custom Development"],
    features: [],
    github: null,
    demo: null,
  },
] as const;

export const careerGoals = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Infrastructure Engineer",
  "Full Stack Developer",
] as const;

export const certifications = [
  {
    title: "Infrastructure & Virtualization",
    year: "2022 — Present",
    items: ["VMware ESXi", "Hyper-V", "Windows Server", "Linux Administration"],
  },
  {
    title: "Networking & Security",
    year: "2022 — Present",
    items: ["Cisco Switching", "VLAN & Routing", "Network Security", "Ekahau Site Survey"],
  },
  {
    title: "DevOps & Automation",
    year: "2023 — Present",
    items: ["Docker & Containers", "Jenkins CI/CD", "Git & GitHub", "Grafana & Prometheus"],
  },
  {
    title: "Full Stack Development",
    year: "2024 — Present",
    items: ["React.js", "Node.js & Express", "REST API", "MySQL & PostgreSQL"],
  },
] as const;

export const techStack = [
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Jenkins", slug: "jenkins", color: "#D24939" },
  { name: "Grafana", slug: "grafana", color: "#F46800" },
  { name: "Prometheus", slug: "prometheus", color: "#E6522C" },
  { name: "GitHub", slug: "github", color: "#ffffff" },
  { name: "GitLab", slug: "gitlab", color: "#FC6D26" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Node.js", slug: "nodedotjs", color: "#339933" },
  { name: "Linux", slug: "linux", color: "#FCC624" },
  { name: "VMware", slug: "vmware", color: "#607078" },
  { name: "Hyper-V", slug: "microsoft", color: "#0078D4" },
  { name: "MySQL", slug: "mysql", color: "#4479A1" },
  { name: "Supabase", slug: "supabase", color: "#3FCF8E" },
  { name: "WordPress", slug: "wordpress", color: "#21759B" },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#homelab", label: "Homelab" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export const seoKeywords = [
  "DevOps Engineer Malaysia",
  "Infrastructure Engineer Malaysia",
  "IT Support Engineer Malaysia",
  "Full Stack Developer Malaysia",
  "Network Engineer Malaysia",
  "Muhammad Hamizan Borhan",
  "DevOps Enthusiast",
  "Homelab Engineer",
] as const;
