import { title } from "framer-motion/client";

import {
Zap, Server, Smartphone, Mic, Wifi, Settings,Briefcase, Users, Layers, Lightbulb, DollarSign, Cpu, User
} from "lucide-react";





export const navData = {
  // 1. MAIN
  "/": {
    theme: "dark",
    containerClass: "bg-stone-950/90 backdrop-blur-md border-b border-white/10 text-white",
    linkClass: "text-stone-300 hover:text-orange-500",
    logoColor: "text-white",
    cta: {
      text: "Get Started",
      class: "bg-white text-stone-900 hover:bg-orange-600 hover:text-white"
    },
    links: [
      { name: "Phoenix", path: "/" },
      { name: "Smart Home", path: "/automation" },
      { name: "IT Services", path: "/services" },
      { name: "About", path: "#about" } 
    ]
  },

  // 2. AUTOMATION
  "/automation": {
    theme: "dark",
    containerClass: "bg-stone-950/90 backdrop-blur-md border-b border-white/10 text-white",
    linkClass: "text-stone-300 hover:text-orange-500",
    logoColor: "text-orange-500",
    cta: {
      text: "Book Demo",
      class: "bg-orange-600 text-white hover:bg-white hover:text-black"
    },
    links: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/automation" },
      { name: "Products", path: "/automation#products" },
      { name: "Gallery", path: "/automation#gallery" }
    ]
  },

  // 3. IT SERVICES 
  "/services": {
    theme: "cyber",
    containerClass: "bg-black/90 backdrop-blur-md border-b border-cyan-900/50 text-cyan-50 font-mono",
    linkClass: "text-cyan-200/70 hover:text-cyan-400",
    logoColor: "text-cyan-400",
    cta: {
      text: "Secure Network",
      class: "bg-cyan-900/50 border border-cyan-500 text-cyan-400 hover:bg-cyan-400 hover:text-black"
    },
    links: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Security", path: "/services#security" },
    ]
  }
};

export const phoenixData = {
  hero: {
    // badge: "Phoenix Solutions",
    // title: "The Art of Invisible Intelligence.",
    // subtitle: "Orchestrating lifestyle & logic.",
    badge: "Est. 2009 • Mumbai",
    title: "Empowering Innovation Through Technology",
    subtitle: "Bridging the gap between Smart Living & IT Services.",
    description: "Founded in 2009 in Mumbai. Phoenix Solutions is a premier provider of high-end automation ecosystems and enterprise-grade IT logistics. Sales along with the best After Sales Service is our Strength.",
    cta: "Explore",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    ]
  },
  stats: [
    { value: "15+", label: "Years of Excellence" },
    { value: "500+", label: "Premium Estates" },
    { value: "24/7", label: "Global Support" },
    { value: "100%", label: "Uptime Guarantee" }
  ],
  features: [
    { 
      icon: Settings, 
      title: "Retrofit Design", 
      desc: "Fits behind your existing switchboards. No rewiring needed." 
    },
    { 
      icon: Wifi, 
      title: "Wireless Control", 
      desc: "Control your appliances from anywhere via the Phoenix App." 
    },
    { 
      icon: Mic, 
      title: "Voice Command", 
      desc: "Works seamlessly with Alexa, Google Assistant & Siri." 
    },
    { 
      icon: Smartphone, 
      title: "Scene Creation", 
      desc: "Customize moods for Morning, Movie Night, or Sleep." 
    }
  ],
  philosophy: {
    title: "Our Philosophy",
    heading: "Technology that feels like Magic.",
    description: "We believe true luxury is the absence of friction. Phoenix Solutions integrates lighting, climate, and security into a unified, intuitive ecosystem that anticipates your needs before you even speak them.",
    badges: ["Global Standards", "Military Grade"]
  },
  divisions: [
    {
      id: 1,
      title: "Phoenix Home",
      subtitle: "Residential Automation",
      desc: "Transforming residences into living entities. Lighting, climate, and security that anticipate your rhythm.",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2134&auto=format&fit=crop",
      link: "/automation",
      icon: Zap,
      cta: "Enter Division",
      color: "text-orange-600"
    },
    {
      id: 2,
      title: "Phoenix Cyber",
      subtitle: "Enterprise Infrastructure",
      desc: "Fortifying the digital backbone of modern business. Cloud architecture, cybersecurity, and logistics.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      link: "/services",
      icon: Server,
      cta: "Enter Division",
      color: "text-blue-600"
    }
  ],
  collection: {
    title: "Curated Ecosystems",
    subtitle: "The Collection",
    items: [
      { id: 1, title: "Luminous Touch", cat: "Hardware", img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=2065&auto=format&fit=crop" },
      { id: 2, title: "Secure Perimeter", cat: "Security", img: "https://images.unsplash.com/photo-1558036117-15db5275252b?q=80&w=2070&auto=format&fit=crop" },
      { id: 3, title: "Cloud Mesh", cat: "Networking", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" },
      { id: 4, title: "Silent Motion", cat: "Curtains", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" }
    ]
  },
  video: {
    title: "Living in Motion",
    subtitle: "Watch the Experience",
    source: "https://videos.pexels.com/video-files/3205937/3205937-hd_1920_1080_25fps.mp4"
  },
  // --- BLOG DATA ---
  journal: {
    title: "Insights & Innovations",
    subtitle: "The Journal",
    posts: [
      {
        id: 1,
        category: "Design",
        date: "Oct 24, 2024",
        title: "The Death of the Light Switch",
        excerpt: "How ambient computing is removing wall clutter and integrating intelligence directly into architecture.",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 2,
        category: "Security",
        date: "Nov 08, 2024",
        title: "Fortifying the Digital Estate",
        excerpt: "Why physical walls are no longer enough. A deep dive into enterprise-grade cybersecurity for private residences.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 3,
        category: "Wellness",
        date: "Dec 01, 2024",
        title: "Circadian Rhythms at Home",
        excerpt: "Using tunable white lighting to improve sleep quality and daily energy levels naturally.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  // --- TESTIMONIALS DATA ---
  testimonials: {
    title: "Client Stories",
    subtitle: "Trusted by the Elite",
    items: [
      {
        id: 1,
        name: "Rajesh Mehta",
        role: "Architect, Mumbai",
        quote: "Phoenix transformed my villa into a living organism. The lighting scenes are pure magic.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: 2,
        name: "Sarah Jenkins",
        role: "CTO, TechFlow",
        quote: "Their enterprise networking is flawless. We haven't had a second of downtime in 3 years.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: 3,
        name: "David Chen",
        role: "Interior Designer",
        quote: "Finally, technology that respects aesthetics. The switch panels are jewelry for walls.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
      }
    ]
  },
  contact: {
    title: "Concierge Service",
    subtitle: "Get in Touch",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    intro: {
      heading: "Ready to Upgrade?",
      desc: "Book a private consultation with our lead architects."
    },
    form: {
      name: "Your Name",
      phone: "Phone",
      email: "Email",
      message: "Tell us about your vision...",
      submit: "Request Consultation"
    }
  }
};
// // import homeAutomationVideo from '../assets/images/homeAutomationVideo2.mp4';
// // import glasSwitch from '../assets/images/glass-switch.webp';
// // ... imports
// export const homeAutomationData = {
//   hero: {
//     badge: "Phoenix Living",
//     title: "Orchestrating Light & Atmosphere.",
//     subtitle: "Transform your home into a responsive sanctuary with invisible technology.",
//     cta: "Explore Collection",
//     videoUrl: homeAutomationVideo
//   },
//   categories: [
//     {
//       id: "lighting",
//       title: "Luminous Intelligence",
//       desc: "Tunable white lighting that mimics the sun's rhythm. From energizing daylight to warm sunset hues.",
//       image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop",
//       features: ["Circadian Rhythms", "0-100% Dimming", "RGB Moods"]
//     },
//     {
//       id: "touch",
//       title: "Glass & Metal Interfaces",
//       desc: "Replace cluttered switchboards with single, elegant capacitive touch panels. Customized icons, haptic feedback.",
//       image: glasSwitch,
//       features: ["Tempered Glass", "Multi-Touch", "Backlit Feedback"]
//     },
//     {
//       id: "shading",
//       title: "Silent Shading",
//       desc: "Curtains and blinds that glide silently in sync with the time of day or your privacy needs.",
//       image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
//       features: ["Ultra-Quiet Motors", "Sun-Tracking", "Voice Activation"]
//     }
//   ],
// import homeAutomationVideo from '../assets/images/homeAutomationVideo2.mp4';
// import glasSwitch from '../assets/images/glass-switch.webp';
// ... imports
export const homeAutomationData = {
  hero: {
    badge: "Phoenix Living",
    title: "Orchestrating Light & Atmosphere.",
    subtitle: "Transform your home into a responsive sanctuary with invisible technology.",
    cta: "Explore Collection",
    videoUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
  },
  categories: [
    {
      id: "lighting",
      title: "Luminous Intelligence",
      desc: "Tunable white lighting that mimics the sun's rhythm. From energizing daylight to warm sunset hues.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop",
      features: ["Circadian Rhythms", "0-100% Dimming", "RGB Moods"]
    },
    {
      id: "touch",
      title: "Glass & Metal Interfaces",
      desc: "Replace cluttered switchboards with single, elegant capacitive touch panels. Customized icons, haptic feedback.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
      features: ["Tempered Glass", "Multi-Touch", "Backlit Feedback"]
    },
    {
      id: "shading",
      title: "Silent Shading",
      desc: "Curtains and blinds that glide silently in sync with the time of day or your privacy needs.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
      features: ["Ultra-Quiet Motors", "Sun-Tracking", "Voice Activation"]
    }
  ],
  scenes: [
    {
      id: 1,
      title: "Morning Rise",
      desc: "Curtains part slowly, lights fade up to warm 3000K, soft jazz begins.",
      video: "https://videos.pexels.com/video-files/3205937/3205937-hd_1920_1080_25fps.mp4"
    },
    {
      id: 2,
      title: "Cinema Mode",
      desc: "Blackout shades lower, lights dim to 10%, projector activates.",
      video: "https://videos.pexels.com/video-files/4010131/4010131-hd_1920_1080_25fps.mp4"
    }
  ],
  products: [
    { title: "Smart Retrofit Module", price: "Invisible", img: "https://images.unsplash.com/photo-1558002038-1091a16627d3?q=80&w=2000&auto=format&fit=crop" },
    { title: "Touch Panel Pro", price: "Glass Finish", img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=2065&auto=format&fit=crop" },
    { title: "Motion Sensor", price: "High Sensitivity", img: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=2000&auto=format&fit=crop" },
    { title: "Voice Gateway", price: "AI Powered", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" }
  ]
};



export const itData = {
  hero: {
    badge: "Phoenix Cyber",
    title: "The Digital Backbone of Modern Enterprise.",
    subtitle: "A virtual one-stop place for Security, Computer Hardware & Network Solutions.",
    cta: "Explore Services",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Network
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop", // Servers
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"  // Security
    ],
    description: "Founded in 2009 in the heart of Mumbai. We are an aggressive and dynamic company distributing high-end computer solutions."
  },
  stats: [
    { value: "99.99%", label: "Uptime Guaranteed" },
    { value: "2PB+", label: "Data Secured" },
    { value: "24/7", label: "NOC Monitoring" },
    { value: "150+", label: "Enterprise Clients" }
  ],
  philosophy: {
    title: "Our Philosophy",
    heading: "Sales along with the best After Sales Service is our Strength.",
    description: "We have developed a solid technical base that assures growth. We look forward to future challenges with the same professionalism and enthusiasm that have proven successful in the past.",
    mission: "To distribute, market & sell latest premium quality computer hardware & software solutions."
  },
  strengths: [
    { id: 1, title: "Full-Cycle Development", desc: "From analysis to maintenance.", icon: Layers },
    { id: 2, title: "Custom Solutions", desc: "Tailored for unique business needs.", icon: User },
    { id: 3, title: "Professional Outsourcing", desc: "Unified standards and transparency.", icon: Briefcase },
    { id: 4, title: "Innovative Thinking", desc: "New tech for complex issues.", icon: Lightbulb },
    { id: 5, title: "Cost Effective", desc: "On-time, within-budget delivery.", icon: DollarSign }
  ],
  services: [
    {
      id: 1,
      title: "System Integration",
      description: "Custom-configured systems for all size organizations.",
      icon: Cpu,
      list: ["Customized PC Assembly", "Video Rendering Stations", "CCTV (Analog & Digital)", "Biometric Access Control"]
    },
    {
      id: 2,
      title: "Network Integration",
      description: "Robust networking infrastructure for 24/7 connectivity.",
      icon: Wifi,
      list: ["Networking Equipment", "LAN Setup & Cabling", "Remote Connectivity", "Wireless Mesh"]
    },
    {
      id: 3,
      title: "Maintenance Contracts",
      description: "Component level repair and AMC services.",
      icon: Settings,
      list: ["Comprehensive AMC", "Non-Comprehensive AMC", "Remote Support", "On-Site Debugging"]
    }
  ],
  hardware: {
    title: "Enterprise Hardware",
    subtitle: "Tier-1 Equipment Supply",
    items: [
      { title: "High-Performance Servers", img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1470&auto=format&fit=crop", cat: "Data Center" },
      { title: "Biometric Access Control", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop", cat: "Security" },
      { title: "Surveillance Systems", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop", cat: "CCTV" },
      { title: "Networking Gear", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop", cat: "Connectivity" }
    ]
  },
  video: {
    title: "Command Center Ops",
    subtitle: "See our infrastructure in action.",
    source: "https://videos.pexels.com/video-files/1181358/1181358-hd_1920_1080_25fps.mp4"
  },
  process: [
    { step: "01", title: "Audit", desc: "We analyze your current infrastructure vulnerabilities." },
    { step: "02", title: "Architect", desc: "Designing a custom roadmap for scalability." },
    { step: "03", title: "Deploy", desc: "Seamless integration with zero downtime." },
    { step: "04", title: "Maintain", desc: "24/7 monitoring and AMC support." }
  ],
  contact: {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    intro: {
      heading: "Scale with Confidence.",
      desc: "Schedule a technical audit with our senior engineers."
    },
    form: {
      name: "Company Name",
      phone: "Phone",
      email: "Work Email",
      message: "Describe your infrastructure needs...",
      submit: "Request Audit"
    }
  },
  sectors: [
    "Banking & Finance", "Insurance Industry", "Government Organizations", 
    "Retail & Wholesale", "Hotels & Hospitality", "Hospitals & Healthcare"
  ]
};


export const footerData = {
  company: {
    shortName: "PS",
    fullName: "Phoenix Solutions",
    description:
      "Leading IT innovation since 2009. Providing cutting-edge technology solutions across western India.",
    social: [
      { icon: "Instagram", link: "#" },
      { icon: "Twitter", link: "#" },
      { icon: "Facebook", link: "#" },
    ],
  },

  quickLinks: [
    { label: "Home", to: "/" },
    { label: "Services", to: "/#services" },
    { label: "Projects", to: "/#projects" },
    { label: "Testimonials", to: "/#testimonials" },
  ],

  solutions: [
    { label: "Home Automation", to: "/home-automation" },
    { label: "IT Services & Software", to: "/services" },
    { label: "System Integration", to: "#" },
    { label: "Networking Solutions", to: "#" },
  ],

  contact: [
    { icon: "MapPin", text: "Mumbai, Maharashtra, India" },
    { icon: "Phone", text: "+91 74105 22017", link: "tel:+917410522017" },
    {
      icon: "Mail",
      text: "thm.phoenix@gmail.com",
      link: "mailto:thm.phoenix@gmail.com",
    },
  ],

  legal: [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Service", link: "#" },
  ],
};
