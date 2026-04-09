export const siteContent = {
  hero: {
    company: "HH CONSULTING ARCHITECTS & ENGINEERS PLC.",
    subtitle: "WORLDWIDE CONSULTING ",
    headline: "Engineered Excellence",
    description:
      "For any international projects, we are your dedicated global partner in design and construction supervision",
    ctaLabel: "Explore Projects",
    ctaHref: "#projects",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Modern architectural facade hero image",
  },
  about: {
    eyebrow: "About Company",
    title: "Who We Are",
    description:
      "HH Consulting Architects & Engineers PLC is a multidisciplinary consulting company specializing in architectural design, engineering solutions, infrastructure planning, and construction supervision across Ethiopia and international markets.",
    image: "/asset/hero-modern-building.svg",
    imageAlt: "Modern office and building illustration for HH Consulting",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "100+", label: "Projects" },
      { value: "50+", label: "Experts" },
      { value: "Global", label: "International Clients" },
    ],
  },
  services: {
    eyebrow: "Expertise",
    title: "Our Expertise",
    items: [
      {
        title: "Architectural Design",
        description: "Thoughtful building concepts shaped for function, clarity, and lasting value.",
        icon: "architectural-design",
      },
      {
        title: "Structural Engineering",
        description: "Safe, efficient structural systems engineered for performance and durability.",
        icon: "structural-engineering",
      },
      {
        title: "Urban Planning",
        description: "Integrated planning approaches for organized, livable, and future-ready places.",
        icon: "urban-planning",
      },
      {
        title: "Infrastructure Design",
        description: "Practical infrastructure solutions that support growth and connectivity.",
        icon: "infrastructure-design",
      },
      {
        title: "Irrigation & Water Engineering",
        description: "Reliable water systems designed for efficient delivery and sustainable use.",
        icon: "water-engineering",
      },
      {
        title: "Feasibility Study",
        description: "Clear project assessments that inform smart decisions before delivery begins.",
        icon: "feasibility-study",
      },
    ],
  },
  projects: {
    eyebrow: "Featured Work",
    title: "Recent Projects",
    viewAllLabel: "View All",
    viewAllHref: "#projects",
    items: [
      {
        title: "Skyline Residences",
        location: "Manhattan, New York",
        category: "Residential",
        description: "Luxury residential tower featuring sustainable design and smart building technology",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=80",
        imageAlt: "Modern residential building project",
        href: "#",
      },
      {
        title: "Harbor Bridge Extension",
        location: "San Francisco, CA",
        category: "Infrastructure",
        description: "State-of-the-art bridge infrastructure connecting key metropolitan areas",
        image:
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1300&q=80",
        imageAlt: "Bridge infrastructure project",
        href: "#",
      },
      {
        title: "Tech Innovation Hub",
        location: "Seattle, WA",
        category: "Commercial",
        description: "Modern corporate campus designed for collaboration and innovation",
        image:
          "https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=1300&q=80",
        imageAlt: "Commercial innovation hub project",
        href: "#",
      },
    ],
  },
  team: {
    eyebrow: "Our Team",
    title: "Expert Professionals Driving Innovation",
    members: [
      {
        name: "Michael Chen",
        role: "Chief Engineer",
        specialty: "Structural Engineering",
        image:
          "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Portrait of Michael Chen",
        linkedinHref: "#",
        emailHref: "mailto:michael@hh-consulting.com",
      },
      {
        name: "Sarah Williams",
        role: "Lead Architect",
        specialty: "Sustainable Design",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Portrait of Sarah Williams",
        linkedinHref: "#",
        emailHref: "mailto:sarah@hh-consulting.com",
      },
      {
        name: "David Anderson",
        role: "Project Director",
        specialty: "Infrastructure Planning",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22731f1f9f?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Portrait of David Anderson",
        linkedinHref: "#",
        emailHref: "mailto:david@hh-consulting.com",
      },
      {
        name: "Emily Rodriguez",
        role: "Environmental Lead",
        specialty: "Sustainability Consulting",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Portrait of Emily Rodriguez",
        linkedinHref: "#",
        emailHref: "mailto:emily@hh-consulting.com",
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    title: "Let's Build Something Great Together",
    description:
      "Ready to start your next project? Our team is here to help bring your vision to life.",
    contacts: [
      {
        type: "phone",
        label: "Phone",
        value: "+1 (555) 123-4567",
      },
      {
        type: "email",
        label: "Email",
        value: "info@apexengineering.com",
      },
      {
        type: "address",
        label: "Address",
        value: "123 Engineering Plaza, Suite 500",
        subValue: "New York, NY 10001",
      },
    ],
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    footer: {
      copyright: "© 2026 APEX Engineering. All rights reserved.",
      privacyLabel: "Privacy Policy",
      privacyHref: "#",
      termsLabel: "Terms of Service",
      termsHref: "#",
    },
  },
  stickyActions: [
    { label: "Chat Now", href: "#contact", variant: "default" },
    { label: "Request Quote", href: "#contact", variant: "active" },
  ],
};
