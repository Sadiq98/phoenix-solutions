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
    title: "Smart Home Automation",
    subtitle: "Transform Your Living Space",
    description: "Experience the future of home living with intelligent automation solutions that enhance comfort, security, and energy efficiency.",
    image: "https://images.unsplash.com/photo-1707733260992-73ff6dbed163?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxob21lJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NjM1Nzc1NzV8MA&ixlib=rb-4.1.0&q=85"
  },
  solutions: [
    {
      id: 1,
      title: "Smart Lighting",
      description: "Voice-controlled and automated lighting systems that adapt to your lifestyle.",
      image: "https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxob21lJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NjM1Nzc1NzV8MA&ixlib=rb-4.1.0&q=85",
      features: ["Voice Control", "Scheduling", "Energy Saving", "Remote Access"]
    },
    {
      id: 2,
      title: "Security Systems",
      description: "Advanced security with smart locks, cameras, and motion sensors.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxob21lJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NjM1Nzc1NzV8MA&ixlib=rb-4.1.0&q=85",
      features: ["Smart Locks", "HD Cameras", "Motion Detection", "Real-time Alerts"]
    },
    {
      id: 3,
      title: "Climate Control",
      description: "Intelligent temperature and air quality management for optimal comfort.",
      image: "https://images.unsplash.com/photo-1712599609774-172848255a9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxJb1QlMjBkZXZpY2VzfGVufDB8fHx8MTc2MzU3NzU3MHww&ixlib=rb-4.1.0&q=85",
      features: ["Smart Thermostats", "Air Quality Monitoring", "Auto-adjustment", "Energy Reports"]
    },
    {
      id: 4,
      title: "Voice Assistants",
      description: "Seamless integration with Google Home, Alexa, and Siri.",
      image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxzbWFydCUyMGhvbWV8ZW58MHx8fHwxNzYzNTc3NTY0fDA&ixlib=rb-4.1.0&q=85",
      features: ["Multi-platform Support", "Natural Commands", "Scene Control", "Routine Automation"]
    }
  ],
  products: [
    { id: 1, name: "Smart Hub Pro", category: "Control Center", price: "₹15,999" },
    { id: 2, name: "WiFi Smart Bulb Pack", category: "Lighting", price: "₹2,499" },
    { id: 3, name: "Smart Door Lock", category: "Security", price: "₹12,999" },
    { id: 4, name: "HD Security Camera", category: "Security", price: "₹8,999" },
    { id: 5, name: "Smart Thermostat", category: "Climate", price: "₹9,999" },
    { id: 6, name: "Motion Sensor Pack", category: "Automation", price: "₹3,999" }
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
