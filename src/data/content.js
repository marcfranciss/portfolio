import {
  Cloud,
  Code2,
  BookOpen,
  Rocket,
  Server,
  Database,
  Zap,
  Network,
  FolderOpen,
  HardDrive,
  Shield,
  Wrench,
  Linkedin,
  Mail,
  Github,
} from "lucide-react";

export const NAV_LINKS = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Blog",
  "Certification",
  "Resume",
  "Contact",
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: "http://www.linkedin.com/in/marcfrancissurban",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "http://www.github.com/marcfranciss",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:marcfrancissurban@gmail.com",
    label: "Mail",
  },
];

export const FOOTER_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Blog",
  "Certification",
  "Resume",
];

export const FEATURES = [
  {
    icon: Cloud,
    title: "Cloud Enthusiast",
    desc: "Always exploring and learning new Azure technologies.",
  },
  {
    icon: Code2,
    title: "Problem Solver",
    desc: "I love solving real-world problems with the cloud.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    desc: "Always improving my skills and staying updated.",
  },
  {
    icon: Rocket,
    title: "Future Builder",
    desc: "Aiming to build secure, scalable and efficient cloud solutions.",
  },
];

export const SKILLS = [
  {
    icon: Cloud,
    title: "Cloud",
    items: ["Microsoft Azure", "Azure Portal", "Azure Resource Manager"],
  },
  {
    icon: Server,
    title: "Compute",
    items: ["Virtual Machines", "App Service", "Azure Functions"],
  },
  {
    icon: Network,
    title: "Networking",
    items: ["Virtual Networks", "NSG", "Load Balancer", "DNS"],
  },
  {
    icon: FolderOpen,
    title: "Storage",
    items: ["Blob Storage", "File Storage", "Storage Accounts"],
  },
  {
    icon: Shield,
    title: "Identity & Security",
    items: ["Microsoft Entra ID", "RBAC", "Security Best Practices"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    items: ["Git & GitHub", "GitHub Actions", "Azure CLI", "PowerShell"],
  },
];

export const PROJECTS = [
  {
    tag: "Networking",
    icon: Network,
    title: "Azure Virtual Network Design",
    desc: "Designed a secure and scalable VNet architecture with subnets, NSGs and route tables.",
  },
  {
    tag: "Compute",
    icon: Server,
    title: "Azure VM Deployment",
    desc: "Step-by-step guide to deploy Windows VM with public IP, NSG and monitoring.",
  },
  {
    tag: "Storage",
    icon: HardDrive,
    title: "Azure Storage Account",
    desc: "Configured storage account, blob containers and lifecycle management policy.",
  },
  {
    tag: "Security",
    icon: Shield,
    title: "Identity & Access Management",
    desc: "Implemented users, groups and role-based access control in Microsoft Entra ID.",
  },
  {
    tag: "Cost Management",
    icon: Database,
    title: "Azure Pricing Calculator",
    desc: "Estimated cost for different Azure services for a startup project.",
  },
];

export const POSTS = [
  {
    date: "May 20, 2024",
    read: "5 min read",
    title: "What I Learned from AZ-900 Certification",
    accent: "from-sky-500 to-blue-700",
  },
  {
    date: "May 15, 2024",
    read: "6 min read",
    title: "Understanding Azure Resource Groups",
    accent: "from-slate-600 to-slate-800",
  },
  {
    date: "May 10, 2024",
    read: "4 min read",
    title: "Azure Blob Storage Explained",
    accent: "from-cyan-600 to-slate-800",
  },
  {
    date: "May 05, 2024",
    read: "6 min read",
    title: "RBAC in Azure: A Beginner's Guide",
    accent: "from-blue-600 to-indigo-900",
  },
];

// Orbit graphic nodes for the hero section
export const ORBIT_NODES = [
  {
    icon: Server,
    label: "Virtual\nMachines",
    iconBg: "bg-blue-600",
    className: "top-2 left-6",
  },
  {
    icon: FolderOpen,
    label: "Storage\nAccounts",
    iconBg: "bg-blue-700",
    className: "top-2 right-2",
  },
  {
    icon: Database,
    label: "Azure SQL",
    iconBg: "bg-sky-600",
    className: "top-1/2 left-0 -translate-y-1/2",
  },
  {
    icon: Zap,
    label: "Azure\nFunctions",
    iconBg: "bg-yellow-500",
    className: "top-1/2 right-0 -translate-y-1/2",
  },
  {
    icon: Network,
    label: "Virtual Network",
    iconBg: "bg-teal-500",
    className: "bottom-0 left-1/2 -translate-x-1/2",
  },
];
