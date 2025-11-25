import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { phoenixData } from '../assets/data';

import {
  ArrowRight, CheckCircle2, Play, ChevronDown, MoveRight, 
  Globe, Shield, Calendar, Star, Quote,
  Zap, Server, Smartphone, Mic, Wifi, Settings // Icons for features
} from "lucide-react";

// --- ICON MAPPING FOR DYNAMIC DATA ---
const iconMap = {
  Settings: Settings,
  Wifi: Wifi,
  Mic: Mic,
  Smartphone: Smartphone,
  Zap: Zap,
  Server: Server,
  Shield: Shield
};

// --- COMPONENTS ---

const SectionHeader = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.1]"
    >
      {title}
    </motion.h2>
  </div>
);

const PartnerMarquee = () => (
  <div className="w-full overflow-hidden bg-stone-50 border-t border-stone-200 py-16">
    <div className="flex gap-32 items-center animate-scroll whitespace-nowrap min-w-full">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer grayscale hover:grayscale-0 hover:scale-110">
          <CheckCircle2 size={28} className="text-orange-600" />
          <span className="text-2xl font-serif text-stone-800 tracking-widest uppercase">Trust Partner {i + 1}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- ANIMATION UTILS ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  
  // Parallax Logic
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Our concierge will contact you.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans overflow-x-hidden selection:bg-orange-200 selection:text-orange-900">

      {/* 1. HERO */}
      <section className="relative h-250 w-full flex items-center justify-center overflow-hidden bg-black">
        
        {/* Background Slider */}
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, EffectFade, Parallax]}
            effect="fade"
            speed={2500}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {phoenixData.hero.images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    src={src} 
                    alt="Luxury Background" 
                    className="w-full h-full object-cover opacity-80" 
                  />
                  {/* Cinematic Gradients from your request */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-8 inline-block border border-white/20 backdrop-blur-md px-8 py-2 rounded-full shadow-2xl">
              <span className="text-md font-bold tracking-[0.4em] uppercase text-white">
                {phoenixData.hero.badge}
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tighter text-white">
              {phoenixData.hero.title.split(' ').slice(0, 3).join(' ')} <span className="font-serif italic text-orange-500">
                {phoenixData.hero.title.split(' ')[3]} 
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
              {phoenixData.hero.subtitle}
            </p>
          </FadeIn>
          
          {/* <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => document.getElementById("divisions").scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold tracking-widest uppercase text-xs transition-all duration-500 shadow-lg shadow-orange-900/50"
              >
                {phoenixData.hero.cta}
              </button>
              <button
                className="px-10 py-4 bg-transparent border border-white/30 hover:bg-white hover:text-black text-white font-bold tracking-widest uppercase text-xs transition-all duration-500 backdrop-blur-sm"
              >
                View Showreel
              </button>
            </div>
          </FadeIn> */}
                {/* Floating Stats - Glassmorphism */}
       {/* <div className="absolute bottom-0 right-0 left-0 z-20 border-t border-white/5 bg-stone-50/40 backdrop-blur-xl">          <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-10">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-12 md:gap-24">
                {phoenixData.stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="text-3xl md:text-4xl font-light text-stone-900 mb-2 font-serif">{stat.value}</div>
                    <div className="text-[10px] text-white uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>
              <ChevronDown className="animate-bounce text-stone-500 hidden md:block" size={32} />
            </div>
          </div>
        </div> */}

        
        </div>
      </section>


      {/* 2. FEATURES: Floating Tiles */}
      <section className="relative z-30 -mt-32 px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phoenixData.features.map((feat, idx) => {

              const IconComponent = iconMap[feat.icon.displayName]; 

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-b-4 border-transparent hover:border-orange-600 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-8 group-hover:bg-orange-50 transition-colors">
                    <IconComponent className="text-stone-400 group-hover:text-orange-600 transition-colors" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {feat.title}
                  </h3>
                  
                  <p className="text-sm text-stone-500 leading-relaxed font-medium tracking-wide">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FAFAF9] overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             
             {/* Left: Text */}
             <div className="order-2 lg:order-1">
                <FadeIn>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-12 bg-orange-600"></div>
                    <span className="text-orange-600 font-bold text-xs tracking-[0.3em] uppercase">
                      {phoenixData.philosophy.title}
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.1] mb-8">
                    {phoenixData.philosophy.heading.split("Magic").shift()} 
                    <span className="italic text-stone-400 font-light">Magic.</span>
                  </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-xl text-stone-600 leading-relaxed mb-10 font-light max-w-lg">
                    {phoenixData.philosophy.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
                     {phoenixData.philosophy.badges.map((badge, i) => (
                       <div key={i} className="flex items-start gap-4 group cursor-pointer">
                          <div className="mt-1 text-stone-300 group-hover:text-orange-500 transition-colors">
                            {i === 0 ? <Globe size={24} /> : <Shield size={24} />}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">{badge}</h4>
                            <p className="text-xs text-stone-500">Certified Excellence</p>
                          </div>
                       </div>
                     ))}
                  </div>
                </FadeIn>
             </div>

             {/* Right: Image */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="order-1 lg:order-2 relative"
             >
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                    alt="Philosophy Interior" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </div>                
               
             </motion.div>

          </div>
        </div>
      </section>

  
      {/* 4. SERVICES */}
      <section id="divisions" className="py-24 bg-white">
        <div className="px-6 md:px-12 lg:px-24">
          {phoenixData.divisions.map((div, idx) => (
            <Link to={div.link} key={div.id} className="group block relative mb-16 last:mb-0">
              <div className="relative h-[70vh] w-full overflow-hidden">
                <img 
                  src={div.image} 
                  alt={div.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20">
                   <div className={`w-20 h-20 mb-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md text-white`}>
                      <div.icon size={36} />
                   </div>
                   <h3 className="text-6xl md:text-8xl font-serif text-white mb-4">{div.title}</h3>
                   <p className="text-xl text-stone-300 max-w-lg mb-8 font-light">{div.desc}</p>
                   
                   <div className="flex items-center gap-4 group-hover:gap-8 transition-all duration-500">
                      <span className={`text-sm font-bold uppercase tracking-[0.3em] ${div.color}`}>{div.cta}</span>
                      <ArrowRight className="text-white" />
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. COLLECTION */}
      <section className="py-32 bg-[#F5F5F4]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title={phoenixData.collection.title} subtitle={phoenixData.collection.subtitle} align="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phoenixData.collection.items.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className={`group cursor-pointer relative ${idx % 2 === 0 ? 'mt-0' : 'lg:mt-24'}`}>
                <div className="aspect-[3/4] overflow-hidden relative mb-6 bg-stone-200">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="flex justify-between items-start border-t border-stone-300 pt-4">
                  <div>
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block mb-1">{item.cat}</span>
                    <h4 className="text-2xl font-serif text-stone-900">{item.title}</h4>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                    <MoveRight size={20} className="text-stone-900" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CINEMATIC VIDEO */}
      <section className="relative h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-60">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
             <source src={phoenixData.video.source} type="video/mp4" />
           </video>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-6">
           <div className="inline-block border border-white/30 rounded-full p-4 mb-8 hover:scale-110 transition-transform cursor-pointer backdrop-blur-md">
              <Play className="text-white fill-white ml-1" size={32} />
           </div>
           <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tight">{phoenixData.video.title}</h2>
           <p className="text-stone-300 text-lg tracking-widest uppercase">{phoenixData.video.subtitle}</p>
        </div>
      </section>

      {/* 7. BLOG */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title={phoenixData.journal.title} subtitle={phoenixData.journal.subtitle} align="left" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {phoenixData.journal.posts.map((post) => (
              <FadeIn key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-8 bg-stone-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  <span className="text-stone-400">{post.category}</span>
                </div>
                <h3 className="text-3xl font-serif text-stone-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight">{post.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-200 pb-1 w-max group-hover:border-orange-600 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER */}
      <section className="py-32 bg-[#FDFCFB] border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionHeader title={phoenixData.testimonials.title} subtitle={phoenixData.testimonials.subtitle} />
          
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full max-w-4xl mx-auto mt-16"
          >
            {phoenixData.testimonials.items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center">
                  <div className="flex gap-2 mb-8 text-orange-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                  </div>
                  <Quote className="text-stone-200 w-16 h-16 mb-6" />
                  <p className="text-2xl md:text-4xl font-serif text-stone-800 leading-relaxed mb-10 italic">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={item.image} className="w-16 h-16 rounded-full object-cover" alt={item.name} />
                    <div className="text-left">
                      <div className="font-bold text-stone-900 text-lg">{item.name}</div>
                      <div className="text-xs uppercase tracking-widest text-orange-600">{item.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <PartnerMarquee />

      {/* 9. CONTACT */}
      <section ref={containerRef} id="contact" className="w-full flex flex-col lg:flex-row min-h-screen bg-white">
        
        {/* Left: Parallax Image */}
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-full overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
             <img 
                src={phoenixData.contact.image} 
                className="w-full h-full object-cover"
                alt="Concierge"
             />
          </motion.div>
          <div className="absolute inset-0 bg-stone-900/20" />
          <div className="absolute bottom-12 left-12 p-10 bg-white/90 backdrop-blur-xl shadow-2xl max-w-md">
            <h3 className="text-3xl font-serif text-stone-900 mb-2">{phoenixData.contact.intro.heading}</h3>
            <p className="text-stone-500 font-light">{phoenixData.contact.intro.desc}</p>
          </div>
        </div>

        {/* Right: Clean Form */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-32 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full">
            <SectionHeader title={phoenixData.contact.title} subtitle={phoenixData.contact.subtitle} align="left" />
            
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="group">
                <input 
                  type="text" name="name" 
                  value={formData.name} onChange={handleChange} 
                  className="w-full border-b border-stone-300 py-4 text-2xl font-serif text-stone-900 focus:border-orange-600 focus:outline-none transition-colors bg-transparent placeholder:text-stone-300 placeholder:font-sans" 
                  placeholder={phoenixData.contact.form.name} required 
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <input 
                  type="tel" name="phone" 
                  value={formData.phone} onChange={handleChange} 
                  className="w-full border-b border-stone-300 py-4 text-lg text-stone-900 focus:border-orange-600 focus:outline-none transition-colors bg-transparent placeholder:text-stone-300" 
                  placeholder={phoenixData.contact.form.phone} required 
                />
                <input 
                  type="email" name="email" 
                  value={formData.email} onChange={handleChange} 
                  className="w-full border-b border-stone-300 py-4 text-lg text-stone-900 focus:border-orange-600 focus:outline-none transition-colors bg-transparent placeholder:text-stone-300" 
                  placeholder={phoenixData.contact.form.email} required 
                />
              </div>
              <div>
                <textarea 
                  name="message" rows={3}
                  value={formData.message} onChange={handleChange} 
                  className="w-full border-b border-stone-300 py-4 text-xl text-stone-900 focus:border-orange-600 focus:outline-none transition-colors bg-transparent placeholder:text-stone-300 resize-none" 
                  placeholder={phoenixData.contact.form.message} required 
                />
              </div>

              <button type="submit" className="group w-full py-6 bg-stone-900 text-white font-bold tracking-[0.2em] uppercase hover:bg-orange-600 transition-all duration-500 flex justify-between items-center px-8">
                <span>{phoenixData.contact.form.submit}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade, Parallax } from "swiper/modules";

// // Ensure Swiper CSS is imported in your main.jsx or App.jsx
// import 'swiper/css';
// import 'swiper/css/effect-fade';

// import { mainSiteData } from '../assets/data';
// import Footer from '../components/Footer'; 

// import {
//   Code, Settings, Briefcase, Lightbulb, DollarSign, Shield,
//   Package, Network, Server, Truck, Monitor, Headphones,
//   Star, ArrowRight, CheckCircle2, Home as HomeIcon, Cpu, Globe, TrendingUp, Users,
//   MapPin, Mail, Phone, Play, Zap, Activity, ChevronDown
// } from "lucide-react";

// const iconMap = {
//   Code, Settings, Briefcase, Lightbulb, DollarSign, Shield,
//   Package, Network, Server, Truck, Monitor, Headphones,
//   Star, ArrowRight, CheckCircle2, HomeIcon, Cpu, Globe, TrendingUp, Users,
//   MapPin, Mail, Phone, Play, Zap, Activity
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
// };

// // --- LUXURY MARQUEE ---
// const PartnerMarquee = () => (
//   <div className="w-full bg-stone-50 border-y border-white/5 py-16 overflow-hidden relative">
//     <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-transparent to-stone-50 z-10 pointer-events-none" />
//     <div className="flex gap-24 items-center animate-scroll whitespace-nowrap min-w-full">
//       {[...Array(10)].map((_, i) => (
//         <div key={i} className="flex items-center gap-4 text-stone-500 hover:text-orange-400 transition-all duration-500 cursor-pointer opacity-50 hover:opacity-100 group">
//           <CheckCircle2 size={18} className="group-hover:scale-110 transition-transform" />
//           <span className="text-xl font-light tracking-[0.2em] uppercase">Client {i + 1}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Home = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-stone-50 text-stone-900 font-sans overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-100">

//       {/* 1. HERO SECTION: Cinematic Luxury */}
//       <section className="relative h-screen w-full overflow-hidden">
//         <Swiper
//           modules={[Autoplay, EffectFade, Parallax]}
//           effect="fade"
//           speed={2000}
//           autoplay={{ delay: 6000, disableOnInteraction: false }}
//           loop={true}
//           className="w-full h-full"
//         >
//           {mainSiteData.hero.images.map((src, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-full">
//                 {/* Slow Zoom Effect via CSS in global styles or inline scale animation */}
//                 <motion.img 
//                   initial={{ scale: 1.1 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 8, ease: "linear" }}
//                   src={src} 
//                   alt="Luxury Background" 
//                   className="w-full h-full object-cover" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-stone-50/70 via-black/20 to-stone-50/90" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Content Overlay */}
//         <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
//           <motion.div 
//             initial="hidden" 
//             animate="visible" 
//             variants={fadeInUp}
//             className="max-w-5xl pointer-events-auto"
//           >
//             <div className="flex items-center gap-4 mb-8">
//                <div className="h-[1px] w-16 bg-orange-500" />
//                <span className="text-orange-500 font-medium tracking-[0.4em] uppercase text-xs">
//                 {mainSiteData.hero.badge}
//               </span>
//             </div>

//             <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.9] text-stone-900 tracking-tight">
//               {mainSiteData.hero.title.split(' ').map((word, i) => (
//                 <span key={i} className={i === 1 ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500" : ""}>
//                   {word} <br className="hidden md:block"/>
//                 </span>
//               ))}
//             </h1>

//             <p className="text-xl md:text-2xl text-stone-600 font-light mb-12 max-w-2xl leading-relaxed">
//               {mainSiteData.hero.subtitle}
//             </p>

//             <button
//               onClick={() => document.getElementById("solutions").scrollIntoView({ behavior: "smooth" })}
//               className="group relative px-12 py-6 bg-transparent overflow-hidden border border-white/20 rounded-none transition-all duration-500 hover:border-orange-500/50"
//             >
//               <div className="absolute inset-0 w-0 bg-orange-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10" />
//               <div className="flex items-center gap-4">
//                 <span className="relative text-sm font-bold tracking-[0.2em] uppercase">{mainSiteData.hero.cta}</span>
//                 <ArrowRight size={18} className="text-orange-500 group-hover:translate-x-2 transition-transform" />
//               </div>
//             </button>
//           </motion.div>
//         </div>

//         {/* Floating Stats - Glassmorphism */}
//         <div className="absolute bottom-0 right-0 left-0 z-20 border-t border-white/5 bg-stone-50/40 backdrop-blur-xl">
//           <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-10">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//               <div className="flex gap-12 md:gap-24">
//                 {mainSiteData.stats.map((stat, index) => (
//                   <div key={index} className="text-left">
//                     <div className="text-3xl md:text-4xl font-light text-stone-900 mb-2 font-serif">{stat.value}</div>
//                     <div className="text-[10px] text-stone-400 uppercase tracking-[0.2em]">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//               <ChevronDown className="animate-bounce text-stone-500 hidden md:block" size={32} />
//             </div>
//           </div>
//         </div>
//       </section>
      

//       {/* 2. PRESTIGE DIVISIONS (Split Screen) */}
//       <section id="solutions" className="bg-stone-50">
//         <div className="grid md:grid-cols-2 w-full">
//           {mainSiteData.solutions.cards.map((card, idx) => {
//             const Icon = iconMap[card.icon];
//             const isOrange = card.color === "orange";

//             return (
//               <Link to={card.link} key={card.id} className="group relative h-[80vh] md:h-screen w-full overflow-hidden block">
//                 <motion.img
//                   initial={{ scale: 1 }}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 1.2 }}
//                   src={card.image}
//                   alt={card.title}
//                   className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/40 to-transparent" />
                
//                 <div className="absolute inset-0 p-12 lg:p-24 flex flex-col justify-end items-start">
//                    <div className="mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
//                       <Icon size={48} className={isOrange ? "text-orange-500" : "text-blue-500"} />
//                    </div>
                   
//                    <h3 className="text-5xl md:text-7xl font-light text-stone-900 mb-6 tracking-tight">
//                     {card.title.split(' ')[0]} <span className="font-bold">{card.title.split(' ')[1]}</span>
//                    </h3>
                   
//                    <p className="text-stone-600 text-lg max-w-md mb-10 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
//                     {card.description}
//                    </p>
                   
//                    <div className="flex items-center gap-4">
//                       <div className={`h-[1px] w-12 transition-all duration-500 ${isOrange ? 'bg-orange-500 group-hover:w-24' : 'bg-blue-500 group-hover:w-24'}`} />
//                       <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-900">Explore</span>
//                    </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </section>

//       {/* 3. STRENGTHS: Editorial Black & Gold */}
//       <section className="py-32 bg-white relative overflow-hidden">
//         {/* Subtle texture */}
//         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

//         <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
//           <div className="flex flex-col lg:flex-row gap-20 items-start">
            
//             {/* Left Header */}
//             <div className="lg:w-1/3 sticky top-32">
//               <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Expertise</span>
//               <h2 className="text-5xl md:text-7xl font-light text-stone-900 mb-8 leading-none">
//                 Engineering <br /> <span className="font-bold text-stone-700">Perfection.</span>
//               </h2>
//               <p className="text-stone-400 text-lg leading-relaxed mb-12">
//                 We blend aesthetic intelligence with robust infrastructure. Whether it's the warmth of a home or the data flow of a corporation, we engineer the invisible.
//               </p>
//               <div className="h-[1px] w-full bg-white/10" />
//             </div>

//             {/* Right Grid */}
//             <div className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-20">
//               {mainSiteData.strengths.items.map((item, idx) => {
//                 const Icon = iconMap[item.icon];
//                 return (
//                   <div key={idx} className="group">
//                     <div className="w-16 h-16 border border-stone-200 rounded-full flex items-center justify-center mb-8 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-500">
//                       <Icon size={28} className="text-stone-600 group-hover:text-orange-500 transition-colors" />
//                     </div>
//                     <h4 className="text-2xl font-light text-stone-900 mb-4 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h4>
//                     <p className="text-stone-500 leading-relaxed font-light">{item.description}</p>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. CONTACT: The "Concierge" Form */}
//       <section id="contact" className="py-32 bg-stone-50 border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <div className="grid lg:grid-cols-2 gap-20">
            
//             <div>
//               <h2 className="text-6xl md:text-8xl font-light text-stone-900 mb-12 tracking-tight">
//                 Let's <span className="font-bold text-orange-600">Begin.</span>
//               </h2>
//               <p className="text-xl text-stone-400 mb-16 max-w-md">
//                 Experience the pinnacle of automation and IT services. Schedule a private consultation.
//               </p>
              
//               <div className="space-y-12">
//                 {mainSiteData.contact.info.map((item, index) => {
//                   const Icon = iconMap[item.icon];
//                   return (
//                     <div key={index} className="flex items-center gap-8 group cursor-pointer">
//                       <div className="p-4 rounded-full border border-stone-200 group-hover:border-orange-500 transition-colors">
//                         <Icon className="text-stone-900 w-6 h-6" />
//                       </div>
//                       <div>
//                         <div className="text-xs text-stone-500 uppercase tracking-widest mb-1">{item.title}</div>
//                         <div className="text-2xl text-stone-900 font-light group-hover:text-orange-500 transition-colors">{item.desc}</div>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>

//             <div className="bg-stone-900/30 p-10 md:p-16 border border-white/5 backdrop-blur-sm">
//               <form onSubmit={handleSubmit} className="space-y-10">
//                 <div className="space-y-2 group">
//                   <label className="text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">Name</label>
//                   <input 
//                     type="text" 
//                     name="name" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     required 
//                     className="w-full bg-transparent border-b border-stone-700 py-4 text-xl text-stone-900 focus:border-orange-500 focus:outline-none transition-colors placeholder:text-stone-800" 
//                     placeholder="John Doe" 
//                   />
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-8">
//                   <div className="space-y-2 group">
//                     <label className="text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">Phone</label>
//                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-transparent border-b border-stone-700 py-4 text-xl text-stone-900 focus:border-orange-500 focus:outline-none transition-colors placeholder:text-stone-800" placeholder="+91..." />
//                   </div>
//                   <div className="space-y-2 group">
//                     <label className="text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">Email</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-b border-stone-700 py-4 text-xl text-stone-900 focus:border-orange-500 focus:outline-none transition-colors placeholder:text-stone-800" placeholder="@company.com" />
//                   </div>
//                 </div>

//                 <div className="space-y-2 group">
//                   <label className="text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">Message</label>
//                   <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} className="w-full bg-transparent border-b border-stone-700 py-4 text-xl text-stone-900 focus:border-orange-500 focus:outline-none transition-colors placeholder:text-stone-800 resize-none" placeholder="Tell us about your requirements..."></textarea>
//                 </div>

//                 <button type="submit" className="w-full py-6 bg-white text-black font-bold tracking-[0.2em] uppercase hover:bg-orange-600 hover:text-stone-900 transition-colors duration-500 mt-8">
//                   {mainSiteData.contact.form.submitButton}
//                 </button>
//               </form>
//             </div>

//           </div>
//         </div>
//       </section>
      
//       <PartnerMarquee />
//       <Footer />
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from "swiper/modules";

// import { mainSiteData } from '../assets/data';
// import Footer from '../components/Footer'; 

// // --- ICON MAPPING ---
// import {
//   Code, Settings, Briefcase, Lightbulb, DollarSign, Shield,
//   Package, Network, Server, Truck, Monitor, Headphones,
//   Star, ArrowRight, CheckCircle2, Home as HomeIcon, Cpu, Globe, TrendingUp, Users,
//   MapPin, Mail, Phone, Play, Zap, Activity
// } from "lucide-react";

// const iconMap = {
//   Code, Settings, Briefcase, Lightbulb, DollarSign, Shield,
//   Package, Network, Server, Truck, Monitor, Headphones,
//   Star, ArrowRight, CheckCircle2, HomeIcon, Cpu, Globe, TrendingUp, Users,
//   MapPin, Mail, Phone, Play, Zap, Activity
// };

// // --- ANIMATION VARIANTS ---
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };


// // --- PARTNER LOGO SCROLL COMPONENT ---
// const PartnerMarquee = () => (
//   <div className="w-full overflow-hidden  py-10 bg-white/60 backdrop-blur-md p-8   hover:orange-500/50 transition-all duration-300">
//     <div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full">
//       {[...Array(10)].map((_, i) => (
//         <div key={i} className="flex items-center gap-2 text-stone-400 font-bold text-xl uppercase tracking-wider hover:text-orange-600 transition-colors cursor-default">
//           <CheckCircle2 size={20} />
//           <span>Client {i + 1}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Home = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for contacting Phoenix Solutions. We will reach out shortly.');
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     // Light Theme Base: bg-stone-50, Text Dark
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-900 text-stone-900 font-sans overflow-x-hidden selection:bg-orange-200 selection:text-orange-900 ">

//       {/* 1. Hero Section */}
//   <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-black">
        
//        {/* Background Slider */}
//         <div className="absolute inset-0 z-0">
//           <Swiper
//             modules={[Autoplay, EffectFade]}
//             effect="fade"
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             loop={true}
//             speed={1000}
//             className="w-full h-full"
//           >
//             {mainSiteData.hero.images.map((src, index) => (
//               <SwiperSlide key={index}>
//                 <div className="relative w-full h-full">
//                   <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover opacity-90" />
//                   {/* Gradient Overlay: Cinematic Fade */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Hero Content - Left Aligned, Wide Padding */}
//         <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-20 flex-grow flex items-center">
//           <motion.div 
//             initial="hidden" 
//             animate="visible" 
//             variants={fadeInUp}
//             className="max-w-6xl"
//           >
//             <div className="flex items-center gap-3 mb-8">
//                <div className="h-[1px] w-12 bg-orange-500"></div>
//                <span className="text-orange-400 font-bold tracking-[0.2em] uppercase text-sm">
//                 {mainSiteData.hero.badge}
//               </span>
//             </div>

//             <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[0.95] text-stone-900 tracking-tight">
//               {mainSiteData.hero.title}
//             </h1>

//             <p className="text-2xl md:text-3xl text-slate-300 font-light mb-12 max-w-2xl leading-snug">
//               {mainSiteData.hero.subtitle}
//             </p>

//             <button
//               onClick={() => document.getElementById("solutions").scrollIntoView({ behavior: "smooth" })}
//               className="w-80 py-5 bg-orange-600 hover:bg-stone-900 text-stone-900 font-bold rounded-xl transition-all transform hover:-translate-y-1 uppercase flex items-center justify-center gap-4  group"
//             >
//               <span>{mainSiteData.hero.cta}</span>
//               <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
//             </button>
//           </motion.div>
//         </div>

//         {/* Fluid Stats Bar */}
//         <div className="relative z-20 w-full  bg-black/5 backdrop-blur-lg">
//           <div className="w-full px-6 md:px-12 lg:px-24 py-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//               {mainSiteData.stats.map((stat, index) => (
//                 <div key={index} className="text-left">
//                   <div className="text-3xl md:text-5xl font-bold text-white mb-1 tracking-tighter">{stat.value}</div>
//                   <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Solutions  */}
     

//    <section id="strengths" >
//   <div className="max-w-8xl mx-auto px-12 lg:px-12 space-y-32 pb-20">


//     {/* BLOCK 1 — SMARTER WORKFLOW */}
//     <div className="grid lg:grid-cols-2 gap-16 items-center py-24">
      
//       {/* LEFT TEXT */}
//       <div className="order-2 lg:order-1">
//         <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
//           <Globe className="text-blue-600" size={28} />
//         </div>

//         <h2 className="text-5xl md:text-5xl font-bold mb-6 text-white">
//           {mainSiteData.strengths.title1} <br />
//           <span className="text-stone-600">{mainSiteData.strengths.subtitle1}</span>
//         </h2>

//         <p className="text-lg text-stone-400 mb-8 leading-relaxed">
//           {mainSiteData.strengths.description1}
//         </p>

//         {/* 3 strengths */}
//         <div className="space-y-6 border-t border-stone-100 pt-8">
//           {mainSiteData.strengths.items.slice(0, 3).map((item, idx) => {
//             const Icon = iconMap[item.icon];
//             return (
//               <div key={idx} className="flex gap-4">
//                 <div className="mt-1">
//                   <Icon size={20} className="text-blue-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-white">{item.title}</h4>
//                   <p className="text-md text-stone-400 mt-1">{item.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* RIGHT CARD*/}
//       <div className="order-1 lg:order-2 relative">

//           {/* Background visual */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />

//           {(() => {
//             const card = mainSiteData.solutions.cards[1];
//             const Icon = iconMap[card.icon];
//             const isOrange = card.color === "orange";

//             return (
//               <Link to={card.link} className="group relative z-10 block">
//                 <div
//                   className={`relative h-[600px] rounded-3xl overflow-hidden border-2 transition-all duration-500 shadow-xl
//                     ${
//                       isOrange
//                         ? "border-white hover:border-orange-500 shadow-orange-500/10 hover:shadow-orange-500/20"
//                         : "border-white hover:border-cyan-500 shadow-cyan-500/10 hover:shadow-cyan-500/20"
//                     } bg-white`}
//                 >
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-stone-50/80 via-black/20 to-transparent" />

//                   <div className="absolute inset-0 p-10 flex flex-col justify-end">
//                     <div className="mb-auto">
//                       <div className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/30">
//                         {Icon && <Icon size={40} className="text-white" />}
                                           
//                       </div>
                      
//                     </div>
// <div className="flex items-center justify-between">

//   {/* Left Side – Text */}
//   <div className="flex flex-col">
//     <h3 className="text-4xl font-bold mb-4 text-white">
//       {card.title}
//     </h3>
//     <p className="text-stone-400 text-lg mb-8 max-w-md">
//       {card.description}
//     </p>
//   </div>

//   {/* Right Side – Icon */}
//   <div
//     className={`w-16 h-16 rounded-full flex items-center justify-center border border-white/30 
//                 text-white group-hover:bg-cyan-400 group-hover:text-black 
//                 transition-all duration-500`}
//   >
//     <ArrowRight 
//       size={24} 
//       className="-rotate-45 group-hover:rotate-0 hover:text-white transition-transform duration-500" 
//     />
//   </div>

// </div>


//                   </div>
//                 </div>
//               </Link>
//             );
//           })()}
//       </div>
//     </div>

//     {/* BLOCK 2 — UNLEASH CREATIVITY */}
//     <div className="grid lg:grid-cols-2 gap-16 items-center">

//       <div className="relative">

//           {/* SECOND card */}
//           {(() => {
//             const card = mainSiteData.solutions.cards[0];
//             const Icon = iconMap[card.icon];
//             const isOrange = card.color === "orange";

//             return (
//               <Link to={card.link} className="group relative z-10 block">
//                 <div
//                   className={`relative h-[600px] rounded-3xl overflow-hidden border-2 transition-all duration-500 shadow-xl 
//                     ${
//                       isOrange
//                         ? "border-white hover:border-orange-500 shadow-orange-500/10 hover:shadow-orange-500/20"
//                         : "border-white hover:border-cyan-500 shadow-cyan-500/10 hover:shadow-cyan-500/20"
//                     } bg-white`}
//                 >
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-stone-50/80 via-black/20 to-transparent" />

//                   <div className="absolute inset-0 p-10 flex flex-col justify-end">
//                     <div className="mb-auto">
//                       <div className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/30">
//                         {Icon && <Icon size={40} className="text-white" />}
//                       </div>
//                     </div>

//                    <div className="flex items-center justify-between">

//   {/* Left Side – Text */}
//   <div className="flex flex-col">
//     <h3 className="text-4xl font-bold mb-4 text-white">
//       {card.title}
//     </h3>
//     <p className="text-stone-200 text-lg mb-8 max-w-md">
//       {card.description}
//     </p>
//   </div>

//   {/* Right Side – Icon */}
//   <div
//     className={`w-16 h-16 rounded-full flex items-center justify-center border border-white/30 
//                 text-white group-hover:bg-orange-600 group-hover:text-black 
//                 transition-all duration-500`}
//   >
//     <ArrowRight 
//       size={24} 
//       className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" 
//     />
//   </div>

// </div>


//                   </div>
//                 </div>
//               </Link>
//             );
//           })()}
        
//       </div>

//       {/* RIGHT TEXT BLOCK */}
//       <div>
//         <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
//           <Cpu className="text-orange-600" size={28} />
//         </div>

//         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-200">
//           {mainSiteData.strengths.title2} <br />
//           <span className="text-stone-600">{mainSiteData.strengths.subtitle2}</span>
//         </h2>

//         <p className="text-lg text-stone-400 mb-8 leading-relaxed">
//           {mainSiteData.strengths.description2}
//         </p>

//         {/* 3 strengths */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {mainSiteData.strengths.items.slice(3, 6).map((item, idx) => {
//             const Icon = iconMap[item.icon];
//             return (
//               <div
//                 key={idx}
//                 className="p-6 rounded-2xl bg-white border border-orange-100 hover:border-orange-400 hover:shadow-lg transition-all group bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-stone-200 hover:border-orange-500/50 transition-all duration-300"
//               >
//                 <Icon size={24} className="text-orange-600 mb-3 transition-colors" />
//                 <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
//                 <p className="text-md text-stone-500 leading-relaxed">{item.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//     </div>

//   </div>
// </section>


//       {/* 4. Live Showcase (Videos) */}
//       <section className="py-24 ">
//         <div className="max-w-8xl mx-auto px-12 lg:px-12">
//             <div className="flex flex-col md:flex-row justify-between items-end mb-12">
//               <div>
//                 <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{mainSiteData.liveShowcase.title}</h2>
//                 <p className="text-xl text-stone-500 mt-2">{mainSiteData.liveShowcase.subtitle}</p>
//               </div>
//               <Link to="/automation" className="text-xl text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2">
//                 {mainSiteData.liveShowcase.cta} <ArrowRight size={16}/>
//               </Link>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {mainSiteData.liveShowcase.items.map((item) => (
//                     <div key={item.id} className="relative group rounded-2xl overflow-hidden aspect-[9/12] shadow-lg cursor-pointer bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-stone-200 hover:border-orange-500/50 transition-all duration-300">
//                         <video 
//                             autoPlay loop muted playsInline 
//                             className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//                         >
//                             <source src={item.video} type="video/mp4" />
//                         </video>
//                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        
//                         <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-50/80 to-transparent text-white">
//                             <span className="text-xs font-bold uppercase tracking-wider opacity-75">{item.category}</span>
//                             <h3 className="text-xl font-bold mt-1">{item.title}</h3>
//                         </div>
                        
//                         <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
//                            <Play size={16} className="fill-white text-white" />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//       </section>

//       {/* 5. Auto-Scrolling  */}
//       <section className="py-24 overflow-hidden">
//         <div className="max-w-8xl mx-auto px-12 lg:px-12 mb-12">
//            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{mainSiteData.projects.title}</h2>
//            <p className="text-xl text-stone-500">{mainSiteData.projects.subtitle}</p>
//         </div>

//         <div className="w-full">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1.2}
//             breakpoints={{
//               640: { slidesPerView: 2.2 },
//               1024: { slidesPerView: 3.5 },
//             }}
//             loop={true}
//             speed={5000} // Slow constant speed
//             autoplay={{
//               delay: 0,
//               disableOnInteraction: false,
//             }}
//             allowTouchMove={true}
//             className="swiper-linear" // Add css for linear timing function if needed
//           >
//             {/* Mix of real data and mock to fill the marquee */}
//             {[...mainSiteData.projects.items, ...mainSiteData.projects.items, ...mainSiteData.projects.items].map((project, idx) => (
//               <SwiperSlide key={`${project.id}-${idx}`}>
//                 <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative group border border-stone-200">
//                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-stone-50/80 via-transparent to-transparent opacity-80" />
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-bold">{project.category}</span>
//                     </div>
//                     <h3 className="text-xl font-bold">{project.title}</h3>
//                     <p className="text-sm text-stone-600 line-clamp-2 mt-1">{project.description}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
        
//         {/* Custom CSS for linear swiper */ }
//         <style>{`
//           .swiper-wrapper {
//             transition-timing-function: linear !important;
//           }
//         `}</style>
//       </section>


//       {/* 6. Testimonials */}
//          <section id="testimonials" className="py-24 bg-gradient-to-b relative overflow-hidden">
//         {/* <div className="absolute inset-0 opacity-10">
//           <img
//             src={mainSiteData.testimonials[0].image}
//             alt="Background"
//             className="w-full h-full object-cover"
//           />
//         </div> */}
//         <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8">
//           <div className=" mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">{mainSiteData.testimonials.title}</h2>
//             <p className="text-xl text-gray-400">{mainSiteData.testimonials.subtitle}</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
//             {mainSiteData.testimonials.items.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-stone-200 hover:border-orange-500/50 transition-all duration-300"
//               >
//                 <div className="flex space-x-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
//                   ))}
//                 </div>
//                 <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
//                     <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
//                   </div>
//                   <div>
//                     <div className="font-bold text-white">{testimonial.name}</div>
//                     <div className="text-sm text-gray-400">{testimonial.position}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* 7. Contact Section */}
//       <section id="contact" className="py-32 ">
//         <div className="max-w-8xl mx-auto px-12 lg:px-12">
//           <div className=" rounded-[3rem] p-8 md:p-16 shadow-2xloverflow-hidden relative">
//             {/* Background Decoration */}
//             {/* <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-[100px] opacity-60" /> */}
            
//             <div className="grid lg:grid-cols-2 gap-16 relative z-10">
//               <div>
//                 <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{mainSiteData.contact.title}</h2>
//                 <p className="text-xl text-stone-500 mb-10">
//                   {mainSiteData.contact.subtitle}
//                 </p>
//                 <div className="space-y-6">
//                   {mainSiteData.contact.info.map((item, index) => {
//                     const Icon = iconMap[item.icon];
//                     return (
//                       <div className="flex items-center gap-4 group" key={index}>
//                         <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
//                           <Icon size={24} />
//                         </div>
//                         <div>
//                           <h4 className="text-xl font-bold text-white">{item.title}</h4>
//                           <p className="text-md text-stone-500">{item.desc}</p>
//                         </div>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-5 bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-stone-200 transition-all duration-300 p-8 rounded-3xl border border-stone-100">
//                 <div className="grid grid-cols-2 gap-4">
//                   {["name", "phone"].map((key, idx) => (
//                     <div className="space-y-2" key={idx}>
//                       <label className="text-md font-bold text-stone-400 uppercase ml-2">
//                         {mainSiteData.contact.form.labels[key]}
//                       </label>
//                       <input
//                         type={key === "phone" ? "tel" : "text"}
//                         name={key}
//                         value={formData[key]}
//                         onChange={handleChange}
//                         required
//                         className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-white placeholder:text-stone-300"
//                         placeholder={mainSiteData.contact.form.placeholders[key]}
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-md font-bold text-stone-400 uppercase ml-2">
//                     {mainSiteData.contact.form.labels.email}
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-white placeholder:text-stone-300"
//                     placeholder={mainSiteData.contact.form.placeholders.email}
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-md font-bold text-stone-400 uppercase ml-2">
//                     {mainSiteData.contact.form.labels.message}
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-white placeholder:text-stone-300 resize-none"
//                     placeholder={mainSiteData.contact.form.placeholders.message}
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-5 bg-orange-600 hover:bg-stone-900 text-white font-bold rounded-xl transition-all  transform hover:-translate-y-1 hover:bg-black"
//                 >
//                   {mainSiteData.contact.form.submitButton}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//             <PartnerMarquee />

//       <Footer />
     
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade } from "swiper/modules";

// // Ensure you have these css imports in your main file or here
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/autoplay';

// import { mainSiteData } from '../assets/data';
// import Footer from '../components/Footer'; 

// // --- ICON MAPPING ---
// import {
//   Code, Settings, Briefcase, Lightbulb, DollarSign, Shield,
//   Package, Network, Server, Truck, Monitor, Headphones,
//   Star, ArrowRight, CheckCircle2, Home as HomeIcon, Cpu, Globe, TrendingUp, Users,
//   MapPin, Mail, Phone, Play, Zap, Activity
// } from "lucide-react";

// const iconMap = {
//   Code, Settings, Briefcase, Lightbulb, DollarSign, Shield,
//   Package, Network, Server, Truck, Monitor, Headphones,
//   Star, ArrowRight, CheckCircle2, HomeIcon, Cpu, Globe, TrendingUp, Users,
//   MapPin, Mail, Phone, Play, Zap, Activity
// };

// // --- ANIMATION VARIANTS ---
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
// };

// const PartnerMarquee = () => (
//   <div className="w-full overflow-hidden bg-slate-50 border-y border-slate-200 py-12">
//     <div className="flex gap-24 items-center animate-scroll whitespace-nowrap min-w-full">
//       {[...Array(10)].map((_, i) => (
//         <div key={i} className="flex items-center gap-3 text-slate-400 font-bold text-xl uppercase tracking-widest hover:text-orange-600 transition-colors cursor-default opacity-70 hover:opacity-100">
//           <CheckCircle2 size={24} />
//           <span>Partner {i + 1}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Home = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for contacting Phoenix Solutions. We will reach out shortly.');
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden selection:bg-orange-500 selection:text-white">

//       {/* 1. HERO SECTION: Cinematic & Deep */}
//       <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-cyan-950">
        
//         {/* Background Slider */}
//         <div className="absolute inset-0 z-0">
//           <Swiper
//             modules={[Autoplay, EffectFade]}
//             effect="fade"
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             loop={true}
//             speed={1500}
//             className="w-full h-full"
//           >
//             {mainSiteData.hero.images.map((src, index) => (
//               <SwiperSlide key={index}>
//                 <div className="relative w-full h-full">
//                   <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover opacity-80" />
//                   {/* Heavy Color Grading Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-cyan-950/40 to-cyan-900/20" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-transparent to-transparent" />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32 flex-grow flex items-center">
//           <motion.div 
//             initial="hidden" 
//             animate="visible" 
//             variants={fadeInUp}
//             className="max-w-4xl"
//           >
//             <div className="flex items-center gap-4 mb-8">
//                <div className="h-[2px] w-16 bg-orange-500"></div>
//                <span className="text-orange-400 font-bold tracking-[0.25em] uppercase text-sm shadow-black drop-shadow-md">
//                 {mainSiteData.hero.badge}
//               </span>
//             </div>

//             <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[0.95] text-white tracking-tight drop-shadow-xl">
//               {mainSiteData.hero.title}
//             </h1>

//             <p className="text-2xl md:text-3xl text-cyan-100/90 font-light mb-12 max-w-2xl leading-snug">
//               {mainSiteData.hero.subtitle}
//             </p>

//             <button
//               onClick={() => document.getElementById("solutions").scrollIntoView({ behavior: "smooth" })}
//               className="group px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] flex items-center gap-4"
//             >
//               <span>{mainSiteData.hero.cta}</span>
//               <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
//             </button>
//           </motion.div>
//         </div>

//         {/* Glass Stats Bar */}
//         <div className="relative z-20 w-full border-t border-stone-200 bg-cyan-950/30 backdrop-blur-md">
//           <div className="w-full px-6 md:px-12 lg:px-24 py-10">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//               {mainSiteData.stats.map((stat, index) => (
//                 <div key={index} className="text-left border-l border-white/20 pl-6">
//                   <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tighter">{stat.value}</div>
//                   <div className="text-xs text-cyan-200 uppercase tracking-widest font-semibold">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. SOLUTIONS: Vivid Split Layout */}
//       <section id="solutions" className="py-0 w-full bg-slate-50">
//         <div className="grid md:grid-cols-2 w-full">
//           {mainSiteData.solutions.cards.map((card, idx) => {
//             const Icon = iconMap[card.icon];
//             const isOrange = card.color === "orange";

//             return (
//               <Link to={card.link} key={card.id} className="group block w-full overflow-hidden relative h-[80vh] md:h-screen">
//                 {/* Background Image */}
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
//                 />
                
//                 {/* Color Overlay */}
//                 <div className={`absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-90 ${
//                     isOrange 
//                     ? "bg-gradient-to-b from-slate-900/60 to-orange-900/90" 
//                     : "bg-gradient-to-b from-slate-900/60 to-cyan-900/90"
//                 }`} />

//                 {/* Content */}
//                 <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end items-start z-10">
//                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 text-white ${isOrange ? 'bg-orange-600/20' : 'bg-cyan-600/20'}`}>
//                       <Icon size={40} />
//                    </div>
                   
//                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">{card.title}</h3>
//                    <p className="text-white/80 text-xl max-w-lg mb-10 leading-relaxed font-light">{card.description}</p>
                   
//                    <div className="flex items-center gap-4 group-hover:gap-6 transition-all">
//                       <span className={`text-sm font-bold uppercase tracking-[0.2em] ${isOrange ? 'text-orange-400' : 'text-cyan-400'}`}>
//                         {card.cta}
//                       </span>
//                       <div className={`w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white`}>
//                         <ArrowRight size={20} />
//                       </div>
//                    </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </section>

//       {/* 3. STRENGTHS: Editorial Zig-Zag */}
//       <section id="strengths" className="w-full bg-slate-50">
        
//         {/* Logistics Block */}
//         <div className="flex flex-col lg:flex-row w-full">
//           <div className="lg:w-1/2 p-12 lg:p-32 flex flex-col justify-center bg-white">
//              <div className="mb-10">
//                 <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Logistics Infrastructure</span>
//                 <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">Smarter <br/>Global Reach.</h2>
//                 <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
//                   {mainSiteData.strengths.description1}
//                 </p>
//              </div>
//              <div className="space-y-6">
//                 {mainSiteData.strengths.items.slice(0, 3).map((item, idx) => {
//                     const Icon = iconMap[item.icon];
//                     return (
//                         <div key={idx} className="flex gap-6 items-start">
//                             <div className="mt-1 p-3 bg-blue-50 rounded-lg text-blue-600"><Icon size={24} /></div>
//                             <div>
//                                 <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
//                                 <p className="text-slate-500 mt-1">{item.description}</p>
//                             </div>
//                         </div>
//                     )
//                 })}
//              </div>
//           </div>
//           <div className="lg:w-1/2 relative min-h-[500px]">
//              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Logistics" />
//              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
//           </div>
//         </div>

//         {/* Automation Block */}
//         <div className="flex flex-col lg:flex-row w-full">
//           <div className="lg:w-1/2 relative min-h-[500px] order-2 lg:order-1 bg-slate-900">
//              <img src="https://images.unsplash.com/photo-1558002038-1091a16627d3?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Smart Home" />
//              <div className="absolute bottom-0 left-0 p-12 lg:p-24 w-full bg-gradient-to-t from-stone-50/90 to-transparent">
//                 <div className="flex items-center gap-4 text-white mb-2">
//                   <Activity className="text-orange-500" />
//                   <span className="font-mono text-sm">SYSTEM OPTIMIZED</span>
//                 </div>
//                 <h3 className="text-4xl font-bold text-white">Intelligent Environments</h3>
//              </div>
//           </div>
//           <div className="lg:w-1/2 p-12 lg:p-32 flex flex-col justify-center bg-slate-100 order-1 lg:order-2">
//              <div className="mb-10">
//                 <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">Automation Ecosystems</span>
//                 <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">Unleash <br/>Creativity.</h2>
//                 <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
//                    {mainSiteData.strengths.description2}
//                 </p>
//              </div>
//              <div className="grid grid-cols-2 gap-4">
//                 {mainSiteData.strengths.items.slice(3, 6).map((item, idx) => {
//                    const Icon = iconMap[item.icon];
//                    return (
//                     <div key={idx} className="p-6 bg-white border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all rounded-xl">
//                         <Icon className="text-slate-400 mb-4 w-8 h-8" />
//                         <h4 className="font-bold text-slate-900">{item.title}</h4>
//                     </div>
//                    )
//                 })}
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. LIVE SHOWCASE: Dark Mode Contrast */}
//       <section className="py-32 w-full px-6 md:px-12 lg:px-24 bg-slate-900">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16">
//            <div>
//              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Live Implementations</h2>
//              <p className="text-slate-400 text-lg">Real-time systems in action.</p>
//            </div>
//            <Link to="/automation" className="text-orange-500 font-bold text-lg hover:text-white transition-colors flex items-center gap-2">
//              View All Demos <ArrowRight size={20} />
//            </Link>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
//             {mainSiteData.liveShowcase.items.map((item) => (
//                 <div key={item.id} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-black">
//                     <video 
//                         autoPlay loop muted playsInline 
//                         className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
//                     >
//                         <source src={item.video} type="video/mp4" />
//                     </video>
                    
//                     <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-stone-50/90 via-transparent to-transparent">
//                         <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">{item.category}</span>
//                         <h3 className="text-2xl font-bold text-white">{item.title}</h3>
//                     </div>
                    
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
//                        <Play size={28} className="fill-white text-white ml-1" />
//                     </div>
//                 </div>
//             ))}
//         </div>
//       </section>

//       {/* 5. PROJECTS: Tight Slider (Small Cards) */}
//       <section className="py-24 bg-white overflow-hidden">
//         <div className="px-6 md:px-12 lg:px-24 mb-12 flex items-baseline justify-between">
//            <h2 className="text-3xl font-bold text-slate-900">Recent Case Studies</h2>
//            <span className="hidden md:block text-slate-400 text-sm font-bold uppercase tracking-widest">Innovation Delivered</span>
//         </div>

//         <div className="w-full">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={30}
//             // Reduced sizes here to make cards smaller as requested
//             slidesPerView={2}
//             breakpoints={{
//               768: { slidesPerView: 3.5 },
//               1280: { slidesPerView: 4.5 },
//               1600: { slidesPerView: 5.5 },
//             }}
//             loop={true}
//             speed={6000}
//             autoplay={{ delay: 0, disableOnInteraction: false }}
//             className="swiper-linear pb-12"
//           >
//             {[...mainSiteData.projects.items, ...mainSiteData.projects.items].map((project, idx) => (
//               <SwiperSlide key={`${project.id}-${idx}`}>
//                 <div className="w-full aspect-[4/5] relative group overflow-hidden rounded-xl bg-slate-100">
//                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-100" />
//                   <div className="absolute bottom-0 left-0 p-6">
//                     <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
//                     <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       <PartnerMarquee />

//       {/* 6. CONTACT: Full Width Split */}
//       <section id="contact" className="w-full flex flex-col lg:flex-row bg-white">
        
//         {/* Left: Brand Info (Deep Gradient) */}
//         <div className="lg:w-1/2 bg-gradient-to-br from-cyan-950 to-slate-900 text-white p-12 lg:p-32 flex flex-col justify-center relative overflow-hidden">
//            {/* Abstract Orbs */}
//            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
           
//            <div className="relative z-10">
//               <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">{mainSiteData.contact.title}</h2>
//               <p className="text-xl text-cyan-100 mb-16 max-w-md font-light">{mainSiteData.contact.subtitle}</p>
              
//               <div className="space-y-10">
//                  {mainSiteData.contact.info.map((item, index) => {
//                     const Icon = iconMap[item.icon];
//                     return (
//                       <div key={index} className="flex items-start gap-6">
//                          <div className="p-3 bg-white/10 rounded-lg backdrop-blur-md">
//                            <Icon className="text-orange-400 w-6 h-6" />
//                          </div>
//                          <div>
//                             <h4 className="text-lg font-bold tracking-wide">{item.title}</h4>
//                             <p className="text-cyan-200/70 text-lg">{item.desc}</p>
//                          </div>
//                       </div>
//                     )
//                  })}
//               </div>
//            </div>
//         </div>

//         {/* Right: Form (Clean Light) */}
//         <div className="lg:w-1/2 p-12 lg:p-32 bg-slate-50 flex flex-col justify-center">
//             <div className="max-w-xl mx-auto w-full">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
//                 <form onSubmit={handleSubmit} className="space-y-8">
//                    <div className="grid grid-cols-2 gap-8">
//                       <div className="space-y-3">
//                         <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Name</label>
//                         <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-orange-600 focus:outline-none transition-colors text-xl font-medium text-slate-900 placeholder:text-slate-300" placeholder="John Doe" />
//                       </div>
//                       <div className="space-y-3">
//                         <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</label>
//                         <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-orange-600 focus:outline-none transition-colors text-xl font-medium text-slate-900 placeholder:text-slate-300" placeholder="+91..." />
//                       </div>
//                    </div>
//                    <div className="space-y-3">
//                       <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
//                       <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-orange-600 focus:outline-none transition-colors text-xl font-medium text-slate-900 placeholder:text-slate-300" placeholder="john@company.com" />
//                    </div>
//                    <div className="space-y-3">
//                       <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
//                       <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-orange-600 focus:outline-none transition-colors text-xl font-medium text-slate-900 placeholder:text-slate-300 resize-none" placeholder="Project details..."></textarea>
//                    </div>
    
//                    <button type="submit" className="w-full py-6 bg-slate-900 text-white font-bold text-lg hover:bg-orange-600 transition-colors mt-8 flex justify-between px-8 items-center group">
//                       <span>{mainSiteData.contact.form.submitButton}</span>
//                       <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//                    </button>
//                 </form>
//             </div>
//         </div>
//       </section>

//       <Footer />
     
//       {/* CSS for Linear Swiper */}
//       <style>{`
//         .swiper-linear .swiper-wrapper {
//           transition-timing-function: linear !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;