import { title } from "framer-motion/client";


const homeAutomationImage = '/assets/Images/home.jpg'

export const mainSiteData = {
  hero: {
    badge: "Est. 2009 • Mumbai",
    title: "Empowering Innovation Through Technology",
    subtitle: "Bridging the gap between Smart Living & Cyber Infrastructure.",
    description: "Founded in 2009 in Mumbai. Phoenix Solutions is a premier provider of high-end automation ecosystems and enterprise-grade IT logistics. Sales along with the best After Sales Service is our Strength.",
    cta: "Explore Solutions",
    images: [
      "https://images.unsplash.com/photo-1558002038-1091a16627d3?q=80&w=2000&auto=format&fit=crop", // Smart Home
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Cyber
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"  // Tech
    ]
  },
  stats: [
    { value: "2009", label: "Established" },
    { value: "500+", label: "Projects Done" },
    { value: "24/7", label: "Active Support" },
    { value: "Mumbai", label: "Headquarters" }
  ],
  solutions: {
    title: "Our Expertise",
    subtitle: "Two distinct divisions. One unified standard of excellence.",
    cards: [
      {
        id: 1,
        title: "Smart Living",
        description: "Next-gen automation for residential luxury. Lighting, Climate, and Security unified.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        link: "/automation",
        color: "orange",
        icon: "HomeIcon",
        cta: "Explore Division"
      },
      {
        id: 2,
        title: "IT Infrastructure",
        description: "Corporate logistics, cloud architecture for the modern enterprise.",
        image: "https://www.freepik.com/free-photo/standard-quality-control-concept-m_36027736.htm#fromView=keyword&page=1&position=0&uuid=385ecea2-0fe9-4338-9767-21def0a86ed1&query=It+services",
        link: "/services",
        color: "cyan",
        icon: "Server",
        cta: "Explore Division"
      }
    ]
  },

    strengths: {
    title1: "Smarter Workflows.",
    subtitle1: "Global Reach.",
    description1: "Phoenix Solutions optimizes your logistical backbone. From full-cycle development to advanced warehousing in Western India, we ensure your infrastructure moves as fast as your business.",
    title2: "Unleash Creativity.",
    subtitle2: "Intelligent Living.",
    description2: "Transform your environment. Our IoT solutions blend seamlessly into your lifestyle, offering adaptive lighting, climate control, and security that thinks before you do.",
    items: [
      {
        id: 1,
        title: "Full-Cycle Development",
        description:
          "From analysis to support, we deliver end-to-end software solutions.",
        icon: "Code",
      },
      {
        id: 2,
        title: "Tailored Solutions",
        description:
          "Meeting unique business needs with customized, scalable tech.",
        icon: "Settings",
      },
      {
        id: 3,
        title: "Professional Environment",
        description:
          "Transparent, standardized workflows ensure quality and control.",
        icon: "Briefcase",
      },
      {
        id: 4,
        title: "Innovative Approach",
        description:
          "Leveraging new tech and creative thinking to solve complex problems.",
        icon: "Lightbulb",
      },
      {
        id: 5,
        title: "Cost Efficiency",
        description:
          "Delivering reliable solutions on time and within budget.",
        icon: "DollarSign",
      },
      {
        id: 6,
        title: "Security & Reliability",
        description:
          "Prioritizing confidentiality, stability, and seamless operation.",
        icon: "Shield",
      },
    ],
  },
  projects: {

        title: "Featured Projects",
    subtitle: "Excellence delivered across sectors",
    cta: "View All Work",

    items: [
    {
      id: 1,
      title: "Nexus Tower Network",
      client: "Nexus Corp",
      category: "Infrastructure",
      description: "Fiber-optic backbone for a 50-story commercial complex.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Villa Serenity",
      client: "Private Client",
      category: "Automation",
      description: "Full IoT integration including biometric security.",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 1,
      title: "Nexus Tower Network",
      client: "Nexus Corp",
      category: "Infrastructure",
      description: "Fiber-optic backbone for a 50-story commercial complex.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Villa Serenity",
      client: "Private Client",
      category: "Automation",
      description: "Full IoT integration including biometric security.",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 1,
      title: "Nexus Tower Network",
      client: "Nexus Corp",
      category: "Infrastructure",
      description: "Fiber-optic backbone for a 50-story commercial complex.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Villa Serenity",
      client: "Private Client",
      category: "Automation",
      description: "Full IoT integration including biometric security.",
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop"
    }
  ]
},
  testimonials: {
    title: "Client Testimonials",
    subtitle: "Feedback from our Dealers & Corporate Clients",
    items: [
    {
      id: 1,
      name: "Rajesh Iyer",
      position: "Procurement Head",
      content: "Phoenix Solutions delivers on their promise of after-sales service. Unmatched in Mumbai.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      position: "CTO, TechFlow",
      content: "Their innovative thinking solved our complex networking issues efficiently.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Chen",
      position: "Homeowner",
      content: "My home feels alive. The automation is subtle, powerful, and reliable.",
      rating: 5,
    }
  ],
},

     contact: {
    title: "Start Your Next Project",
    subtitle:
      "Ready to elevate your digital presence? Contact our team today for a detailed consultation.",
    info: [
      { title: "Mumbai", desc: "123 Andheri, Mumbai, 400001", icon: "MapPin" },
      { title: "Email Us", desc: "thm.phoenix@gmail.com", icon: "Mail" },
      { title: "Call Direct", desc: "+91 7410522017" , icon: "Phone" },
    ],

    form: {
      labels: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Project Details",
      },
      placeholders: {
        name: "Enter your full name",
        email: "e.g., your@email.com",
        phone: "e.g., +91 111 222 3333",
        message: "Tell us about your project...",
      },
      submitButton: "Send Inquiry",
      successMessage:
        "Thank you for your inquiry! We have received your message and will be in touch shortly.",
    },
  },

  liveShowcase: {
    title: "Live Product Experience",
    subtitle: "Explore Our Cutting-Edge Solutions in Action",
cta: "View All Demos",
    items:[
  {
    id: 1,
    category: "Home Automation",
    title: "Adaptive Lighting Control",
    video: "https://videos.pexels.com/video-files/3205937/3205937-hd_1920_1080_25fps.mp4", // Free stock video placeholder
    desc: "Seamless ambiance adjustment."
  },
  {
    id: 2,
    category: "IT Infrastructure",
    title: "Server Health Monitoring",
    video: "https://videos.pexels.com/video-files/1181358/1181358-hd_1920_1080_25fps.mp4", // Free stock video placeholder
    desc: "Real-time data visualization."
  },
  {
    id: 3,
    category: "Security",
    title: "Smart Lock Integration",
    video: "https://videos.pexels.com/video-files/7036496/7036496-hd_1920_1080_25fps.mp4", // Free stock video placeholder
    desc: "Biometric entry systems."
  }
    ]

  }

};

export const homeAutomationData = {
  hero: {
    badge: "Phoenix Private",
    title: "The Art of Invisible Luxury",
    subtitle: "Orchestrate your sanctuary with a single touch.",
    description: "Experience the seamless convergence of architectural design and artificial intelligence. We transform residences into living entities that anticipate your needs, adapting lighting, climate, and security to your rhythm of life.",
    cta: "Begin Your Journey",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" // High-end dark modern living room
  },
  
  features: [
    {
      id: 1,
      title: "Circadian Lighting",
      description: "Lighting that mimics the sun, adjusting automatically to enhance your mood and sleep cycles.",
      icon: "Zap"
    },
    {
      id: 2,
      title: "Biometric Security",
      description: "Fortress-grade protection with facial recognition and perimeter AI analytics.",
      icon: "Shield"
    },
    {
      id: 3,
      title: "Climate Intelligence",
      description: "Hyper-localized temperature control that learns your preferences per room.",
      icon: "Thermometer"
    },
    {
      id: 4,
      title: "Immersive Audio",
      description: "Invisible speakers embedded into walls for concert-hall acoustics without the clutter.",
      icon: "Mic" // Using Mic icon for voice/audio context
    }
  ],

  solutions: [
    {
      id: 1,
      title: "Moodscaping",
      description: "Transform your atmosphere instantly. From 'Dinner Party' warmth to 'Cinema' darkness, control a thousand lights as one.",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2134&auto=format&fit=crop", // Luxury chandelier/lighting
      link: "/home-automation/lighting"
    },
    {
      id: 2,
      title: "Private Cinema",
      description: "4K laser projection, Dolby Atmos sound, and acoustic isolation. The ultimate theater experience, at home.",
      image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1779&auto=format&fit=crop", // Home theater
      link: "/home-automation/cinema"
    },
    {
      id: 3,
      title: "Perimeter Defense",
      description: "Integrated gate control, license plate recognition, and night-vision surveillance for absolute peace of mind.",
      image: "https://images.unsplash.com/photo-1558036117-15db5275252b?q=80&w=2070&auto=format&fit=crop", // Modern gate/exterior
      link: "/home-automation/security"
    },
    {
      id: 4,
      title: "Curated Climate",
      description: "Invisible HVAC systems that purify air quality and maintain humidity levels for art preservation and comfort.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", // Clean modern interior
      link: "/home-automation/climate"
    }
  ],

  showcase: {
    title: "Elegance in Motion",
    subtitle: "See how our systems blend into the finest interiors.",
    video: "https://videos.pexels.com/video-files/7578544/7578544-uhd_2160_3840_25fps.mp4" // Placeholder luxury interior video
  },

  cta: {
    title: "Elevate Your Living Standard",
    subtitle: "Our architects are ready to design your bespoke ecosystem.",
    button: "Book Private Consultation"
  }
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
    { label: "IT Services & Software", to: "/it-services" },
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
