
import { 
  Zap, Server, Smartphone, Mic, Wifi, Settings, 
  ArrowRight, CheckCircle2, Play, Shield, Sun, Wind, 
  Globe, Lock, Calendar, Cpu, Star, User,
  Database, Activity, Layers, Briefcase, DollarSign, Lightbulb,
  Layout, HardDrive, Quote,Heart,Home
} from 'lucide-react';
export const BASE_PATH = import.meta.env.VITE_SITE_PATH || "";



import LAN from '../public/assets/Images/services/LAN.jpeg';
import homeAutomation from '../public/assets/Images/automation/automated-home.jpg';
import homeMotionVideo from '../public/assets/Video/automation/homeAutomationVideo2.mp4';
import RenderingPC from '../public/assets/Images/services/RenderingPC.jpeg';
import CCTV from '../public/assets/Images/services/CCTV.jpg';
import Biometric from '../public/assets/Images/services/Biometric.jpg';
import Contract from '../public/assets/Images/services/Contract.jpg';
import CobLight from '../public/assets/Images/automation/lights/CobLight.jpg';
import VoiceControlImg from '../public/assets/Images/automation/VoiceControl.jpeg';
import colorAutomation from '../public/assets/Images/automation/switches/colorAutomation.jpeg';
import TouchCurtain from '../public/assets/Images/automation/switches/TouchCurtain.jpeg';
import SmartSwitch from '../public/assets/Images/automation/switches/Switch2.jpeg';

import RetroDesign from '../public/assets/Video/automation/media4.mp4';
// import VoiceControl from '.../public/assets/assets/Video/automation/VoiceControl.mp4';
import wifiControl from '../public/assets/Video/automation/media3.mp4';
import Scene from '../public/assets/Video/automation/SceneCreation.mp4';

import LivingInMotion from '../public/assets/Video/automation/LivingInMotion.mp4';
import servicesVideo from '../public/assets/Video/services/Services.mp4';
import TouchControlHome from '../public/assets/Video/automation/TouchControl.mp4';
import Morning from '../public/assets/Video/automation/Morning.mp4';

import TRACKLIGHT from '../public/assets/Images/automation/lights/TRACK-COB-LIGHT.jpg'
import DELTALIGHT from '../public/assets/Images/automation/lights/DELTA_COB_LIGHT.jpg'
import DCLIGHT from '../public/assets/Images/automation/lights/DC-FLOOD-LIGHT.jpg'
import OVALLIGHT from '../public/assets/Images/automation/lights/OVAL-LENS-STREET-LIGHT.jpg'
import VITALIGHT from '../public/assets/Images/automation/lights/VITA-LENS-STREET-LIGHT.jpg'
import SLIMLIGHT from '../public/assets/Images/automation/lights/SLIM-DOWN-LIGHT.jpg'
import HIGHBAYLIGHT from '../public/assets/Images/automation/lights/HIGHBAY.jpg'
import TouchDimmer from '../public/assets/Images/automation/switches/TouchDimmer.jpg'
import VoiceControlGoogle from '../public/assets/Images/automation/VoiceControlGoogle.jpg'
import About from '../public/assets/Images/automation/About.jpg'
import SceneCreation from '../public/assets/Images/automation/switches/SceneControl.jpg'
import ModeSwitch from '../public/assets/Images/automation/switches/ModeSwitch.jpeg'
import LightOnOf from '../public/assets/Images/automation/switches/LightOnOf.jpeg'
import HomeSwitch from '../public/assets/Images/automation/switches/HomeSwitch.jpeg'
import Switch4 from '../public/assets/Images/automation/switches/Switch4.jpeg'
import TouchFan from '../public/assets/Images/automation/switches/TouchFan.jpeg'
import RoomSwitch from '../public/assets/Images/automation/switches/RoomSwitch.jpeg'
import LampSwitch from '../public/assets/Images/automation/switches/LampSwitch.jpeg'
import MultipleSwitch from '../public/assets/Images/automation/switches/MultipleSwitch.jpeg'



//automation/gallery
// import Lounge from '.../public/assets/assets/Images/Lounge.jpg'
// import LivingRoom from '.../public/assets/assets/Images/LivingRoom.jpg'
// import Bedroom from '.../public/assets/assets/Images/Bedroom.jpg'
// import Exterior from '.../public/assets/assets/Images/Exterior.jpg'

import Lounge from '../public/assets/Video/automation/media6.mp4'
import LivingRoom from '../public/assets/Video/automation/media16.mp4'
import VoiceControl from '../public/assets/Video/automation/media16L.mp4'
import Bedroom from '../public/assets/Video/automation/TouchControl.mp4'
import Exterior from '../public/assets/Video/automation/media3.mp4'


import glasSwitch from '../public/assets/Images/automation/switches/glass-switch.webp';
import Curtains from '../public/assets/Images/automation/Curtains.jpg';

import homeLight from '../public/assets/Images/automation/homeLight.jpg';

import PanelLight from '../public/assets/Images/automation/lights/PanelLight.webp';



export const navData = {
  [`${BASE_PATH}/`]: {
    theme: "dark",
    containerClass: "bg-stone-950/90 backdrop-blur-md border-b border-white/10",
    linkClass: "text-stone-300 hover:text-orange-500",
    underline: "after:bg-orange-500",
    logoColor: "text-white",
    cta: {
      text: "Contact Us",
      class: "bg-white text-stone-900 hover:bg-orange-600 hover:text-white"
    },
    links: [
      { name: "Phoenix", path: `${BASE_PATH}/`},
      { name: "Automation", path: `${BASE_PATH}/automation` },
      { name: "Services", path: `${BASE_PATH}/services` },
      { name: "About", path: `${BASE_PATH}/about` }
    ]
  },
  [`${BASE_PATH}/automation`]: {
    theme: "dark",
    containerClass: "bg-stone-950/90 backdrop-blur-md border-b border-white/10",
    linkClass: "text-stone-300 hover:text-orange-500",
    underline: "after:bg-orange-500",
    logoColor: "text-orange-500",
    cta: {
      text: "Book Demo",
      class: "bg-white text-stone-900 hover:bg-orange-600 hover:text-white"
    },
    links: [
      { name: "Home", path: `${BASE_PATH}/automation` },
      { name: "OUR Products", path: `${BASE_PATH}/automation/products` },
      { name: "Automation IN Action", path: `${BASE_PATH}/automation/gallery`}
    ]
  },

  [`${BASE_PATH}/services`]: {
    theme: "cyber",
    containerClass: "bg-black/90 backdrop-blur-md border-b border-cyan-900/50",
    linkClass: "text-white hover:text-cyan-400",
    underline: "after:bg-cyan-600",
    logoColor: "text-cyan-400",
    cta: {
      text: "Book Service",
      class:
        "bg-white text-stone-900 hover:bg-cyan-600 hover:text-white"
    },
    links: [
      { name: "Home", path: `${BASE_PATH}/services` },
      { name: "Our Services", path: `${BASE_PATH}/services/products` },
      { name: "Our Projects", path: `${BASE_PATH}/services/gallery` }
    ]
  }
};

export const footerData = {
  company: {
    shortName: "PS",
    fullName: "Phoenix Solutions",
    description:
      "Leading IT innovation since 2009. Providing cutting-edge technology solutions across western India.",
    social: [
      { icon: "Instagram", link: "https://www.instagram.com/psolutions.co.in?igsh=MXRrZzJnOHcycDdsdA%3D%3D&utm_source=qr" },
      { icon: "Linkedin", link: "https://www.linkedin.com/company/psolutions-mumbai/?viewAsMember=true" },
      // { icon: "Facebook", link: "#" },
    ],
  },

  quickLinks: [
    { label: "Home", to: `${BASE_PATH}` },
    { label: "Services", to: `${BASE_PATH}/#divisions` },
    { label: "Prodcuts", to: `${BASE_PATH}/#products` },
    { label: "Testimonials", to: `${BASE_PATH}/#testimonial`},
  ],

  solutions: [
    { label: "Home Automation", to: `${BASE_PATH}/automation` },
    { label: "IT Services & Software", to: `${BASE_PATH}/services`},
    { label: "System Integration", to: `${BASE_PATH}/services` },
    { label: "Networking Solutions", to: `${BASE_PATH}/sevices` },
  ],

  contact: [
    { icon: "MapPin", text: "Mumbai, Maharashtra, India", link: "https://maps.app.goo.gl/iaTfwtrgBc3GQDUK8" },
    { icon: "Phone", text: "+91 74105 22017", link: "tel:+917410522017" },
    {
      icon: "Mail",
      text: "thm.phoenix@gmail.com",
      link: "mailto:thm.phoenix@gmail.com",
    },
  ],

  legal: [
    { label: "HightechBirds", link: "https://hightechbirds.com/" },
  ],
};


// --- MAIN HOME PAGE DATA ---
export const phoenixData = {
  hero: {
    badge: "Est. 2009 • Mumbai",
    title: "Empowering Innovation Through Technology",
    subtitle: "Bridging the gap between Smart Living & IT Services.",
    // cta: "Explore Divisions",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    ]
  },
  stats: [
    { value: "18+", label: "Years of Excellence" },
    { value: "20K+", label: "Happy Clients" },
    { value: "50+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" }
  ],
  philosophy: {
    title: "Our Philosophy",
    heading: "Technology that feels like Magic.",
    description: "We believe true luxury is the absence of friction. Phoenix Solutions integrates lighting, climate, and security into a unified, intuitive ecosystem that anticipates your needs before you even speak them.",
    badges: ["Global Standards", "Military Grade"],
    image:About
  },
  divisions: [
    {
      id: "automation",
      category: "Automation",
      title: "Smart Living",
      desc: "Design-led automation systems that blend seamlessly into your lifestyle.",
      cta: "Explore Automation",
      link: `${BASE_PATH}/automation`,
      image: homeAutomation,
      icon: Home,
      color: "text-orange-500",
      badge: "bg-orange-500/20 text-orange-300 border-orange-400/50",
      dot: "bg-orange-500",
      glow: "bg-orange-500/10",
      highlights: [
        "Lighting & Scene Control",
        "Voice & App Automation",
        "Security & Surveillance",
        "Energy Optimization"
      ]
    },
    {
      id: "it-services",
      category: "Services",
      title: "Technology Services",
      desc: "Scalable, secure, and reliable IT solutions designed for digital infrastructure.",
      cta: "Explore IT Services",
      link: `${BASE_PATH}/services`,
      image: LAN,
      icon: Server,
      color: "text-cyan-500",
      badge: "bg-cyan-500/20 text-cyan-200 border-cyan-400/50",
      dot: "bg-cyan-500",
      glow: "bg-cyan-500/10",
      highlights: [
        "IT Infrastructure & Networking",
        "Cloud & Server Management",
        "Cybersecurity & Compliance",
        "Managed IT & Support Services"
      ]
    }

  ],
  collection: {
    title: "Curated Ecosystems",
    subtitle: "The Collection",
    automation: [
      // ---- EXISTING (UNCHANGED) ----
      { id: 1, title: "Panel Light", cat: "Home Automation", img: PanelLight },
      { id: 2, title: "Voice Control", cat: "Home Automation", img: VoiceControlImg },

      { id: 3, title: "Silent Motion", cat: "Home Automation", img: TouchCurtain },


    ],
    services: [
      // ---- NETWORK INTEGRATION ----
      {
        id: 4,
        title: "LAN & Structured Cabling",
        cat: "IT Services",
        img: LAN
      },

      // ---- SYSTEM INTEGRATION ----

      {
        id: 5,
        title: "High-End Rendering PCs",
        cat: "IT Services",
        img: RenderingPC
      },

      // ---- SECURITY & SURVEILLANCE ----
      {
        id: 6,
        title: "CCTV Surveillance",
        cat: "Security Systems",
        img: CCTV
      },
      {
        id: 7,
        title: "Biometric Access Control",
        cat: "Security Systems",
        img: Biometric
      },




      // ---- MAINTENANCE & SUPPORT ----
      {
        id: 8,
        title: "Annual Maintenance Contracts",
        cat: "Support Services",
        img: Contract
      },
    ]

  },
  video: {
    title: "Living in Motion",
    subtitle: "Watch the Experience",
    videoUrl: LivingInMotion
  },
// Blog Data
    journal: {
    title: "Insights & Innovations",
    subtitle: "The Journal",
    posts: [
      {
        id: 1,
        category: "Home Automation",
        date: "April 07, 2024",
        title: "Embracing Energy Efficiency with Lumins LED Solutions",
        excerpt: "As we become more conscious of our environmental impact, finding ways to reduce our carbon footprint is more important than ever. Lumins' LED lighting solutions…",
        image: "https://www.lumins.in/wp-content/uploads/2024/04/blog-2.webp"
      },
      {
        id: 2,
        category: "Home Automation",
        date: "Nov 08, 2024",
        title: "Brightening Your World: The Power of Smart Lighting",
        excerpt: "In today's world, technology is not just about gadgets that make our lives easier; it's about creating an environment that aligns with our lifestyle and…",
        image: "https://www.lumins.in/wp-content/uploads/2024/04/blogs-2.webp"
      },

      {
        id: 3,
        category: "IT Services",
        date: "October 25, 2024",
        title: "Why Managed IT Services are Essential for Business",
        excerpt: "Small and mid-sized businesses often struggle to keep up with the pace of technology. Discover how partnering with a Managed Service Provider (MSP) offers predictable costs, 24/7 proactive monitoring, and expert-level cybersecurity.",
        image: "https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg"
      }

    ]
  },
  // Testimonials Data
  testimonials: {
    title: "Client Stories",
    subtitle: "Trusted by the Elite",
        image: homeLight,

    items: [
      {
        id: 1,
        name: "Rajshri Mehta",
        role: "Architect, Mumbai",
        quote: "Phoenix transformed my villa into a living organism. The lighting scenes are pure magic.",
        image: "https://www.shutterstock.com/image-photo/head-shot-portrait-beautiful-indian-260nw-2595362193.jpg"
      },
      {
        id: 2,
        name: "Yusuf Ibrahimi",
        role: "CTO, TechFlow",
        quote: "Their enterprise networking is flawless. We haven't had a second of downtime in 3 years.",
        image: "https://images.unsplash.com/photo-1729157661483-ed21901ed892?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHwwp"
      },
      {
        id: 3,
        name: "Suraj Sawant",
        role: "Interior Designer",
        quote: "Finally, technology that respects aesthetics. The switch panels are jewelry for walls.",
        image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?semt=ais_hybrid&w=740&q=80"
      }
    ]
  },
  clients:{
list:[
  {
    id:1,
    name:"Client 1",
    img:""
  },
  {
    id:2,
    name:"Client 2",
    img:""
  },
  {
    id:3,
    name:"Client 3",
    img:""
  },
  {
    id:4,
    name:"Client 4",
    img:""
  },
  {
    id:5,
    name:"Client 5",
    img:""
  },
  {
    id:6,
    name:"Client 6",
    img:""
  }
]
  },
  contact: {
    title: "Concierge Service",
    subtitle: "Get in Touch",
    mapData: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.114795693619!2d72.82984407466273!3d18.970536955275918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf69e7bc9633%3A0x916dad92e61e0d64!2sPhoenix%20Solutions!5e0!3m2!1sen!2sin!4v1770659665945!5m2!1sen!2sin",
    mapView: "https://www.google.com/maps?q=19.188128,72.846933&z=18&output=embed"

  },
  
  
};

// --- AUTOMATION PAGE DATA ---
export const homeAutomationData = {
  hero: {
    badge: "Phoenix Living",
    title: "Orchestrating Light & Atmosphere.",
    subtitle: "Transform your home into a responsive sanctuary with invisible technology.",
    // cta: "Explore Collection",
    videoUrl: homeMotionVideo
  },
   features: [
    {
      icon: "Home",
      title: "Retrofit Design",
      desc: "Fits behind your existing switchboards. No rewiring needed.",
      image: glasSwitch,
      videoUrl: RetroDesign
    },
    {
      icon: "Wifi",
      title: "Wireless Control",
      desc: "Control your appliances from anywhere via the Phoenix App.",
      image: colorAutomation,
      videoUrl: wifiControl
    },
    {
      icon: "Mic",
      title: "Voice Command",
      desc: "Works seamlessly with Alexa, Google Assistant & Siri.",
      image: VoiceControlImg,
      videoUrl: VoiceControl
    },
    {
      icon: "Lightbulb",
      title: "Scene Creation",
      desc: "Customize moods for Morning, Movie Night, or Sleep.",
      image: SceneCreation,
      videoUrl: TouchControlHome
    }
  ],
  categories: [
    {
      id: "lighting",
      title: "Luminous Intelligence",
      desc: "Tunable white lighting that mimics the sun's rhythm. From energizing daylight to warm sunset hues.",
      image: CobLight,
      button: "Light Series",
      features: ["Circadian Rhythms", "0-100% Dimming", "RGB Moods"]
    },
    {
      id: "touch",
      title: "Glass & Metal Interfaces",
      desc: "Replace cluttered switchboards with single, elegant capacitive touch panels.",
      image: glasSwitch,
      button: "Glass Series",
      features: ["Tempered Glass", "Multi-Touch", "Backlit Feedback"]
    },
    {
      id: "shading",
      title: "Silent Shading",
      desc: "Curtains and blinds that glide silently in sync with the time of day.",
      image: Curtains,
      button: "Curtain Series",
      features: ["Ultra-Quiet Motors", "Sun-Tracking", "Voice Activation"]
    }
  ],
  scenes: {
    title: "Live Experience",
    subtitle: "Set the Scene.",
    items: [
      { 
        id: 1, 
        title: "Touch Control", 
        desc: "Seamless interaction. Precision-engineered touch panels give you tactile command over every room.", 
        videoUrl: TouchControlHome 
      },
  { 
    id: 2, 
    title: "Voice Control", 
    desc: "Hands-free mastery. Alexa activates 'Cinema Mood' or 'Dining Mode' with a single intuitive command.", 
    videoUrl: VoiceControl 
  },

    ]
  },
   products: {
    title:"The Hardware",
    subtitle:"Designed to Disappear",
    items:[

      {
        title: "Lumins Crystal Touch",
        price: "Capacitive Interface",
        description: "4-Gang smart switch with haptic feedback and tempered glass finish.",
        img: colorAutomation
      },
      {
        title: "Architectural COB Spot",
        price: "Museum Grade CRI 98+",
        description: "Precision-focused beam for art galleries and luxury retail spaces.",
        img: CobLight
      },
      {
        title: "Voice Control",
        price: "Voice Automation",
        description: "Seamless infinite linear profiles that adapt to your circadian rhythm.",
        img: VoiceControlImg
      },
      {
        title: "Smart Panel Pro",
        price: "Central Command",
        description: "10-inch wall-mounted interface for total home orchestration.",
        img: TouchCurtain
      }
    ]
  }
};

// --- IT SERVICES DATA ---
export const itData = {

  hero: {
  badge: "Phoenix Services",
  title: "Digital Backbone of Modern Enterprise.",
  subtitle: "A virtual one-stop place for Security, Computer Hardware & Network Solutions.",
    // cta: "Explore Services",
    // videoUrl: servicesVideo
  images: [
    "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg", 
    "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg", 
    "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",  
    "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop"
  ],
},
 features: [
  { 
    id: 1, 
    title: "Full-Cycle Dev", 
    desc: "Analysis to maintenance.", 
    icon: Layers,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg" 
  },
  { 
    id: 2, 
    title: "Custom Solutions", 
    desc: "Tailored business needs.", 
    icon: User,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  { 
    id: 3, 
    title: "Professionalism", 
    desc: "Unified standards.", 
    icon: Briefcase,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  { 
    id: 4, 
    title: "Innovation", 
    desc: "New tech approaches.", 
    icon: Lightbulb,
    image: "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg"
  }
],
  services: [
    {
      id: 1,
      title: "System Integration",
      description: "Custom-configured systems for all size organizations.",
      icon: Cpu,
      image: RenderingPC,
      list: ["Customized PC Assembly", "Video Rendering Stations", "CCTV Systems", "Biometric Access"]
    },
    {
      id: 2,
      title: "Network Integration",
      description: "Robust networking infrastructure for 24/7 connectivity.",
      icon: Wifi,
      image: LAN,
      list: ["Networking Equipment", "LAN Setup", "Remote Connectivity", "Wireless Mesh"]
    },
    {
      id: 3,
      title: "Maintenance",
      description: "Component level repair and AMC services.",
      icon: Settings,
      image: Contract,
      list: ["Comprehensive AMC", "Remote Support", "On-Site Debugging", "Health Checks"]
    }
  ],
  hardware: {
    title: "Enterprise Hardware",
    subtitle: "Tier-1 Equipment",
    items: [
      { title: "Custom PCs", img: RenderingPC, cat: "Desktop" },
      { title: "Biometric Access", img: Biometric, cat: "Security" },
      { title: "Surveillance", img: CCTV, cat: "CCTV" },
      { title: "Networking", img: LAN, cat: "Connectivity" }
    ]
  },
  video: {
    title: "Command Center Ops",
    subtitle: "Infrastructure in action.",
    source: servicesVideo
  },
  process: [
    { step: "01", title: "Audit", desc: "Analyze vulnerabilities." },
    { step: "02", title: "Architect", desc: "Design custom roadmap." },
    { step: "03", title: "Deploy", desc: "Seamless integration." },
    { step: "04", title: "Maintain", desc: "24/7 monitoring." }
  ],

};

//Blog Page
export const journalData = {
  post: [
    {
      id: 1,
      title: "Embracing Energy Efficiency with LED Solutions",
      category: "Home Automation",
      date: "April 7, 2024",

      coverImage: {
        src: "https://www.lumins.in/wp-content/uploads/2024/04/blog-2.webp",
        alt: "Energy efficient LED lighting in modern interiors"
      },

      content: [
        {
          type: "paragraph",
          text:
            "As we become more conscious of our environmental impact, finding ways to reduce our carbon footprint is more important than ever. Lumins’ LED lighting solutions stand at the forefront of this mission."
        },
        {
          type: "heading",
          text: "The Bright Side of LED Lighting"
        },
        {
          type: "paragraph",
          text:
            "LED lights are known for their longevity and efficiency. They emit less heat, are mercury-free, and provide superior light quality."
        },
        {
          type: "keypoints",
          items: [
            "Long life span",
            "Reduced energy consumption",
            "Mercury free",
            "Low heat emission"
          ]
        },
        {
          type: "heading",
          text: "Cost-Effective Lighting"
        },
        {
          type: "paragraph",
          text:
            "With a longer lifespan and lower energy consumption, LED lights drastically reduce both replacement costs and electricity bills."
        },
        {
          type: "heading",
          text: "A Greener Choice"
        },
        {
          type: "paragraph",
          text:
            "By choosing LED lighting, you actively reduce your environmental footprint and contribute to a healthier planet."
        },
        {
          type: "conclusion",
          text:
            "Switching to LED lighting is not just an upgrade—it’s a commitment to sustainability, efficiency, and superior lighting quality."
        }
      ]
    },
    {
      id: 2,
      title: "Brightening Your World: The Power of Smart Lighting",
      category: "Home Automation",
      date: "April 7, 2024",

      coverImage: {
        src: "https://www.lumins.in/wp-content/uploads/2024/04/blogs-2.webp",
        alt: "Energy efficient LED lighting in modern interiors"
      },

      content: [
        {
          type: "paragraph",
          text:
            "In today’s world, technology is not just about gadgets that make our lives easier; it’s about creating an environment that aligns with our lifestyle and values. Lumins’ Smart Lighting Solutions represent a leap forward in how we think about lighting our spaces. This blog explores the benefits and capabilities of smart lighting, showcasing why it’s not just a product but a lifestyle enhancement."
        },
        {
          type: "heading",
          text: "Easy to Use and Control"
        },
        {
          type: "paragraph",
          text:
            "One of the main advantages of Lumins’ smart lighting solutions is their ease of use. With features like remote control access and customisable schedules, managing your home’s lighting has never been more convenient. Whether you’re at home or away, you can adjust your lighting with just a few taps on your smartphone."
        },
        {
          type: "keypoints",
          items: [
            "Long life span",
            "Reduced energy consumption",
            "Mercury free",
            "Low heat emission"
          ]
        },
        {
          type: "heading",
          text: "Cost-Effective Lighting"
        },
        {
          type: "paragraph",
          text:
            "With a longer lifespan and lower energy consumption, LED lights drastically reduce both replacement costs and electricity bills."
        },
        {
          type: "heading",
          text: "A Greener Choice"
        },
        {
          type: "paragraph",
          text:
            "By choosing LED lighting, you actively reduce your environmental footprint and contribute to a healthier planet."
        },
        {
          type: "conclusion",
          text:
            "Switching to LED lighting is not just an upgrade—it’s a commitment to sustainability, efficiency, and superior lighting quality."
        }
      ]
    }
  ]
};

//About Page
export const aboutData = {
  hero: {
    badge: "Since 2009",
    title: "Architects of the Invisible.",
    subtitle: "We don't just install technology. We curate experiences that breathe life into your sanctuary.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  story: {
    heading: "The Phoenix Origin",
    p1: "Founded in the heart of Mumbai in 2009, Phoenix Solutions began with a singular obsession: to bridge the gap between complex industrial technology and the serene comfort of home.",
    p2: "What started as a boutique distribution firm for high-end hardware has evolved into India's premier automation consultancy. We realized that true luxury isn't about having more gadgets; it's about having technology that disappears, leaving only comfort and peace of mind.",
    quote: "Technology should feel like magic. You shouldn't have to think about it; it should just know what you need.",
    founder: "Huzaifa & Team",
    signature: "The Phoenix Founders"
  },
  values: [
    {
      id: 1,
      title: "Aesthetic First",
      desc: "We prioritize design. Our interfaces, switches, and sensors are chosen to complement, not clutter, your interior design.",
      icon: Lightbulb
    },
    {
      id: 2,
      title: "Reliability",
      desc: "We use industrial-grade protocols (KNX, DALI) ensuring your home runs smoothly for decades, not just years.",
      icon: Shield
    },
    {
      id: 3,
      title: "Human Centric",
      desc: "We program homes for people, not users. Scenes are tuned to your circadian rhythm and lifestyle patterns.",
      icon: Heart
    }
  ],
  stats: [
    { value: "15+", label: "Years of Excellence" },
    { value: "50K+", label: "Happy Clients" },
    { value: "200+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" }
  ],
  team: {
    title:"Leadership",
    subtitle:"The Architects",

    list:[
 {
      id: 1,
      name: "Huzaifa Motorwala",
      role: "Principal Architect",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Tasneem Motorwala",
      role: "Head of Experience",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Technical Director",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
    }
    ]
   
  }
};

//Products And Gallery Page
export const commonData = {
  automation: {
    gallery: {
      title:"Visual Experience",
      subtitle:"A curated showcase of our deployed environments. Uploaded dynamically from our archives.",
      data:[

        {
          id: 1,
          videoUrl: Lounge,
          // category: "Living",
          // title: "The Onyx Lounge"
        },
        {
          id: 2,
          videoUrl: LivingRoom,
          // category: "Lighting",
          // title: "Ambient Hallway"
        },
        {
          id: 3,
          videoUrl: Bedroom,
          // category: "Bedroom",
          // title: "Master Suite Shading"
        },
        {
          id: 4,
          videoUrl: Exterior,
          // category: "Exterior",
          // title: "Perimeter Security"
        },
        {
          id: 5,
          videoUrl: LivingInMotion,
          // category: "Exterior",
          // title: "Perimeter Security"
        },
        {
          id: 6,
          videoUrl: RetroDesign,
          // category: "Exterior",
          // title: "Perimeter Security"
        }
      ]
    },

    products: {

title:"Hardware Collection",
      subtitle:"Precision-engineered hardware designed for performance and aesthetics.",
      data:[


      /* =========================
         RESIDENTIAL LIGHTING
      ========================== */

      {
        id: "r-cob-1",
        name: "Delta COB Light",
        category: "Residential Lighting",
        subCategory: "COB Light",
        image: DELTALIGHT,
        price: "Request Quote",
        description: "Compact COB lighting solution delivering focused illumination for modern residential interiors.",
        specs: [
          "High CRI",
          "Focused Beam",
          "Low Heat Emission",
          "Elegant Finish",
          "Energy Efficient"
        ]
      },
      {
        id: "r-cob-2",
        name: "Track COB Light",
        category: "Residential Lighting",
        subCategory: "COB Light",
        image: TRACKLIGHT,
        price: "Request Quote",
        description: "Adjustable track-mounted COB lighting ideal for accent lighting, galleries, and modern living spaces.",
        specs: [
          "Track Mounted",
          "Adjustable Direction",
          "High Lumen Efficiency",
          "Minimalist Design",
          "Long Life LEDs"
        ]
      },
      {
        id: "r-panel-1",
        name: "Slim Down Light",
        category: "Residential Lighting",
        subCategory: "Panel Light",
        image: SLIMLIGHT,
        price: "Request Quote",
        description: "Ultra-slim recessed downlight designed for uniform ambient lighting in homes and apartments.",
        specs: [
          "Slim Profile",
          "Uniform Light Distribution",
          "Easy Installation",
          "Low Power Consumption",
          "Modern Finish"
        ]
      },

      /* =========================
         HOME AUTOMATION
      ========================== */

      {
        id: "ha-voice-alexa",
        name: "Voice Control – Alexa",
        category: "Home Automation",
        subCategory: "Voice Control",
        image: VoiceControlImg,
        price: "Request Quote",
        description: "Hands-free smart home automation powered by Amazon Alexa for seamless voice-based control of devices.",
        specs: [
          "Alexa Compatible",
          "Voice Activated Control",
          "Smart Device Integration",
          "Mobile App Support",
          "Secure Cloud Connectivity"
        ]
      },
      {
        id: "ha-voice-google",
        name: "Voice Control – Google",
        category: "Home Automation",
        subCategory: "Voice Control",
        image: VoiceControlGoogle,
        price: "Request Quote",
        description: "Google Assistant–enabled automation system allowing natural voice commands for complete home control.",
        specs: [
          "Google Assistant Support",
          "Multi-Device Control",
          "Voice Scenes",
          "Cloud Based",
          "Mobile & Tablet Control"
        ]
      },
      {
        id: "ha-switch-16",
        name: "Touch 16 Switch",
        category: "Home Automation",
        subCategory: "Touch Switch",
        image: colorAutomation,
        price: "Request Quote",
        description: "Premium capacitive touch switch panel supporting up to 16 controls with smart automation compatibility.",
        specs: [
          "Tempered Glass Panel",
          "Capacitive Touch",
          "Multi-Scene Support",
          "Backlit Indicators",
          "Smart App Control"
        ]
      },
      {
        id: "ha-curtain",
        name: "Touch Curtain Controller",
        category: "Home Automation",
        subCategory: "Curtain Control",
        image: TouchCurtain,
        price: "Request Quote",
        description: "Motorized curtain automation controller enabling smooth open-close operation via touch or mobile app.",
        specs: [
          "Silent Motor Control",
          "Touch & App Control",
          "Timer Scheduling",
          "Manual Override",
          "Smart Home Integration"
        ]
      },
      {
        id: "ha-socket",
        name: "Smart Socket (6A)",
        category: "Home Automation",
        subCategory: "Socket",
        image: SmartSwitch,
        price: "Request Quote",
        description: "Smart 6A socket allowing remote control, scheduling, and energy monitoring of connected appliances.",
        specs: [
          "Remote On/Off",
          "App Controlled",
          "Energy Monitoring",
          "Overload Protection",
          "Child Safety Shutter"
        ]

        
      },
   


  {
    id: "ha-touch-1",
    name: "Scene Touch Panel",
    category: "Home Automation",
    subCategory: "Touch Switch",
    image: ModeSwitch, // Living / Movie / Leisure
    price: "Request Quote",
    description:
      "Premium capacitive touch panel with customizable scene modes for effortless control of lighting and ambience.",
    specs: [
      "Scene-Based Controls",
      "Capacitive Touch Glass",
      "Custom Engraving Options",
      "Soft LED Backlight",
      "Smart Home Compatible"
    ]
  },

  {
    id: "ha-touch-2",
    name: "Dual Touch Light Switch",
    category: "Home Automation",
    subCategory: "Touch Switch",
    image: LightOnOf, // Lights / Chandelier
    price: "Request Quote",
    description:
      "Minimal dual-button touch switch designed for lighting and chandelier control in modern interiors.",
    specs: [
      "Dual Touch Zones",
      "Scratch Resistant Glass",
      "Silent Operation",
      "Low Power Consumption",
      "Elegant Matte Finish"
    ]
  },

  {
    id: "ha-touch-3",
    name: "Multi-Function Room Panel",
    category: "Home Automation",
    subCategory: "Touch Panel",
    image: HomeSwitch, // Living, Kitchen, Bathroom etc.
    price: "Request Quote",
    description:
      "All-in-one room control panel enabling centralized control of multiple spaces and functions.",
    specs: [
      "Multi-Room Control",
      "Custom Labels",
      "Premium Finish",
      "Backlit Icons",
      "Smart Integration Ready"
    ]
  },

  {
    id: "ha-touch-4",
    name: "4-Gang Modular Touch Switch",
    category: "Home Automation",
    subCategory: "Touch Switch",
    image: Switch4, // Black / White / Grey / Gold
    price: "Request Quote",
    description:
      "Sleek modular touch switch available in multiple finishes to complement any interior design.",
    specs: [
      "4-Gang Configuration",
      "Multiple Color Options",
      "Flush Wall Mount",
      "Durable Toughened Glass",
      "Modern Minimal Design"
    ]
  },

  {
    id: "ha-touch-5",
    name: "Smart Touch Fan Controller",
    category: "Home Automation",
    subCategory: "Fan Controller",
    image: TouchFan,
    price: "Request Quote",
    description:
      "Advanced touch-based fan controller with smooth speed regulation and silent operation.",
    specs: [
      "Touch Speed Control",
      "Soft LED Indicators",
      "Energy Efficient",
      "No Mechanical Noise",
      "Smart Home Ready"
    ]
  },

  {
    id: "ha-touch-6",
    name: "Multi-Utility Touch Panel",
    category: "Home Automation",
    subCategory: "Touch Panel",
    image: MultipleSwitch,
    price: "Request Quote",
    description:
      "Versatile touch panel designed for controlling lights, fans, curtains, and scenes from a single interface.",
    specs: [
      "Lights + Fan + Scenes",
      "Custom Icons",
      "Glass Touch Surface",
      "Premium Build Quality",
      "Compatible with Automation Systems"
    ]
  },

  {
    id: "ha-touch-7",
    name: "Lamp Control Touch Switch",
    category: "Home Automation",
    subCategory: "Touch Switch",
    image: LampSwitch,
    price: "Request Quote",
    description:
      "Elegant single-purpose touch switch designed specifically for bedside and decorative lamp control.",
    specs: [
      "Single Touch Control",
      "Minimal Icon Design",
      "Soft Backlight",
      "Premium Glass Finish",
      "Ideal for Bedrooms & Lounges"
    ]
  },

  {
    id: "ha-touch-8",
    name: "Room Scene Selector Panel",
    category: "Home Automation",
    subCategory: "Scene Panel",
    image: RoomSwitch,
    price: "Request Quote",
    description:
      "Dedicated room-based scene selector panel allowing instant switching between living modes.",
    specs: [
      "Predefined Room Scenes",
      "Laser Etched Labels",
      "Matte Glass Surface",
      "Low Voltage Operation",
      "Smart Scene Automation"
    ]
  },




      /* =========================
         COLOR AUTOMATION
      ========================== */

      {
        id: "ca-scene",
        name: "Touch Scene Controller",
        category: "Color Automation",
        subCategory: "Scene Control",
        image: SceneCreation,
        price: "Request Quote",
        description: "Scene controller designed to manage multiple lighting moods and color profiles with a single touch.",
        specs: [
          "Multi-Scene Support",
          "RGB Lighting Control",
          "Touch Interface",
          "Custom Presets",
        ]
      },
      {
        id: "ca-dimmer",
        name: "Touch Dimmer",
        category: "Color Automation",
        subCategory: "Dimmer",
        image: TouchDimmer,
        price: "Request Quote",
        description: "Precision touch dimmer enabling smooth brightness control for color and white lighting systems.",
        specs: [
          "Smooth Dimming",
          "Touch Sensitive Panel",
          "Flicker-Free Output",
          "Scene Compatible",
          "Elegant Glass Finish"
        ]
      },
      /* =========================
         COMMERCIAL LIGHTING
      ========================== */

      {
        id: "c-street-1",
        name: "Vita Lens Street Light",
        category: "Commercial Lighting",
        subCategory: "Street Light",
        image: VITALIGHT,
        price: "Request Quote",
        description: "High-efficiency outdoor street lighting designed for long operational life, superior lumen output, and uniform road illumination.",
        specs: [
          "High Lumen Output",
          "Weatherproof IP65",
          "Energy Efficient LEDs",
          "Wide Beam Lens",
          "Long Life >50,000 Hours"
        ]
      },
      {
        id: "c-street-2",
        name: "Oval Lens Street Light",
        category: "Commercial Lighting",
        subCategory: "Street Light",
        image: OVALLIGHT,
        price: "Request Quote",
        description: "Precision oval-lens street light optimized for highways and urban roads, delivering balanced illumination with minimal glare.",
        specs: [
          "Oval Optics Lens",
          "Uniform Light Spread",
          "Surge Protection",
          "Low Power Consumption",
          "Outdoor Rated Housing"
        ]
      },
      {
        id: "c-flood-1",
        name: "DC Flood Light",
        category: "Commercial Lighting",
        subCategory: "Flood Light",
        image: DCLIGHT,
        price: "Request Quote",
        description: "Powerful DC flood lighting solution for outdoor areas, warehouses, and perimeter lighting applications.",
        specs: [
          "High Brightness LEDs",
          "Wide Area Coverage",
          "DC Power Compatible",
          "Weather Resistant",
          "Industrial Grade Build"
        ]
      },
      {
        id: "c-flood-2",
        name: "Highbay Light",
        category: "Commercial Lighting",
        subCategory: "Industrial",
        image: HIGHBAYLIGHT,
        price: "Request Quote",
        description: "Industrial highbay lighting designed for factories, warehouses, and large commercial spaces with high ceilings.",
        specs: [
          "High Intensity Output",
          "Aluminium Heat Sink",
          "Low Maintenance",
          "Wide Beam Angle",
          "Industrial Rated"
        ]
      },
      ]

    },

  },
  services: {
    gallery: {
    title: "Infrastructure Portfolio",
    subtitle: "A visual chronicle of our enterprise deployments—from high-density server environments to integrated security operations.",
      data:[

        { id: 1, src: LAN, category: "Network", title: "Fiber Optic Hub" },
        { id: 2, src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop", category: "Security", title: "NOC Monitoring" },
        { id: 3, src: Biometric, category: "Access", title: "Biometric Entry" },
        { id: 4, src: RenderingPC, category: "Office", title: "Smart Workspace" }
      ]
    },
 products: {
    title: "Enterprise Hardware",
    subtitle: "Mission-critical components selected for reliability. High-performance servers and networking.",
      data:[
      {
        id: "it1",
        name: "Phoenix Blade Server",
        category: "Servers",
        price: "Configure",
        image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1470&auto=format&fit=crop",
        description: "High-density blade server for enterprise virtualization and database management.",
        specs: ["Dual Xeon", "2TB RAM", "Hot-Swap Bays", "Redundant PSU"]
      },
      {
        id: "it2",
        name: "Cisco Catalyst 9000",
        category: "Networking",
        price: "Configure",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop",
        description: "Enterprise-class switch for seamless campus-wide connectivity and security.",
        specs: ["48-Port PoE+", "Layer 3", "10G Uplink", "DNA Center Ready"]
      },
      {
        id: "it3",
        name: "Retina Biometric Scanner",
        category: "Security",
        price: "Configure",
        image: Biometric,
        description: "Top-tier access control with retina and fingerprint dual-authentication.",
        specs: ["< 0.1s Scan", "Anti-Spoofing", "Networked", "Log Storage"]
      },
      {
        id: "it4",
        name: "AI Surveillance Dome",
        category: "CCTV",
        price: "Configure",
        image: CCTV,
        description: "360-degree PTZ camera with built-in AI for person and vehicle detection.",
        specs: ["4K Resolution", "30x Zoom", "Night Vision", "Motion Tracking"]
      }
    ]
  }
  }
};

//Contact Form
export const contactConfig = {
  form: {
    labels: { name: "Name", phone: "Phone", email: "Email", message: "Message" },
    placeholders: { name: "Your Name", phone: "+91...", email: "name@company.com", message: "Tell us about your project..." },
    submitBtn: "Request Consultation",
    successTitle: "Message Sent",
    successMsg: "Thank you. Our concierge team will contact you shortly."
  },
};


// All Pages CTA
export const ctaSecData = {
  automation: {
    title: "Your Home, Reimagined.",
    subtitle: "Book a private consultation with our automation architects to discuss your bespoke requirements.",
    cta1: "Schedule Visit",
    cta2: "View Lookbook",
    accent: "text-orange-600",
    buttonColor: "bg-orange-600",
    galleryLink: `${BASE_PATH}/automation/gallery`
  },
  services: {
    title: "Your Business, Secured and Optimized.",
    subtitle: "Ready to enhance your network security, integrate new systems, or secure reliable 24/7 IT support?",
    cta1: "Book Consultation",
    cta2: "Explore Our Services",
    accent: "text-cyan-600",
    buttonColor: "bg-cyan-600",
    galleryLink: `${BASE_PATH}/services/gallery`
  }

};

