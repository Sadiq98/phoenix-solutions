import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from "swiper/modules";

// Styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { itData } from '../../assets/data'; 

import {
  ArrowRight, CheckCircle2, ChevronDown, ArrowLeft, Play, Activity, MoveRight
} from "lucide-react";

// --- COMPONENTS ---
const SectionHeader = ({ title, subtitle, align = "center", dark = false }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`font-bold tracking-[0.3em] uppercase text-xs mb-4 block ${dark ? "text-cyan-400" : "text-cyan-700"}`}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight ${dark ? "text-white" : "text-slate-900"}`}
    >
      {title}
    </motion.h2>
  </div>
);

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

const ITServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Our technical team will contact you.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">

      {/* 1. HERO: Immersive Slider (Matches Home Style) */}
       <section className="relative h-200 w-full flex items-center justify-center overflow-hidden bg-black">
              
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
                  {itData.hero.images.map((src, index) => (
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
                      {itData.hero.badge}
                    </span>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tighter text-white">
                    {itData.hero.title.split(' ').slice(0, 3).join(' ')} <span className="font-serif italic text-orange-500">
                      {itData.hero.title.split(' ')[3]} 
                    </span>
                  </h1>
                </FadeIn>
      
                <FadeIn delay={0.4}>
                  <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
                    {itData.hero.subtitle}
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

      {/* 2. CORE CAPABILITIES (Floating Glass) */}
      <section id="features" className="relative z-20 -mt-32 px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1800px] mx-auto">
          {itData.strengths.slice(0, 4).map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-10 hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer shadow-2xl"
            >
              <feat.icon className="text-slate-400 group-hover:text-cyan-400 transition-colors mb-8" size={40} />
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SERVICES SHOWCASE */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
            <SectionHeader title="Comprehensive Solutions" subtitle="Our Expertise" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 flex flex-col gap-4">
              {itData.services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`text-left p-6 rounded-xl transition-all duration-300 border ${
                    activeService === idx 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl transform scale-105' 
                      : 'bg-slate-50 text-slate-600 border-transparent hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">{service.title}</span>
                    {activeService === idx && <ArrowRight size={20} className="text-cyan-400" />}
                  </div>
                  <p className={`text-sm ${activeService === idx ? 'text-slate-400' : 'text-slate-500'}`}>
                    {service.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200 relative overflow-hidden min-h-[500px] flex items-center">
              <div className="absolute -right-20 -bottom-20 text-slate-200 opacity-50">
                {React.createElement(itData.services[activeService].icon, { size: 400 })}
              </div>

              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full"
              >
                <div className="inline-block p-4 bg-white rounded-2xl shadow-sm mb-8">
                  {React.createElement(itData.services[activeService].icon, { size: 48, className: "text-cyan-600" })}
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-8">
                  {itData.services[activeService].title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {itData.services[activeService].list.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HARDWARE SHOWCASE (Masonry) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title="Infrastructure Gallery" subtitle="Enterprise Hardware" align="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itData.hardware.items.map((item, idx) => (
              <div key={idx} className={`group cursor-pointer relative ${idx % 2 === 0 ? 'mt-0' : 'lg:mt-24'}`}>
                <div className="aspect-[3/4] overflow-hidden relative mb-6 bg-white rounded-lg shadow-sm">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="flex justify-between items-start border-t border-slate-200 pt-4">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest block mb-1">{item.cat}</span>
                    <h4 className="text-2xl font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <MoveRight size={20} className="text-slate-400 group-hover:text-cyan-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VIDEO SECTION */}
      <section className="relative h-[80vh] w-full bg-slate-950 overflow-hidden flex items-center justify-center border-y border-white/10">
        <div className="absolute inset-0 opacity-40">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
             <source src={itData.video.source} type="video/mp4" />
           </video>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20" />
        
        <div className="relative z-10 text-center px-6">
           <div className="inline-block border border-cyan-500/30 bg-cyan-500/10 rounded-full p-5 mb-8 hover:scale-110 transition-transform cursor-pointer backdrop-blur-md group">
              <Play className="text-cyan-400 fill-cyan-400 ml-1 group-hover:text-white group-hover:fill-white transition-colors" size={32} />
           </div>
           <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">{itData.video.title}</h2>
           <div className="flex items-center justify-center gap-3 text-cyan-400">
              <Activity className="animate-pulse" size={20} />
              <p className="text-lg tracking-widest uppercase font-bold">{itData.video.subtitle}</p>
           </div>
        </div>
      </section>

      {/* 6. PROCESS TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-16">Our Approach</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-slate-100 -z-10" />
              
              {itData.process.map((step, idx) => (
                 <div key={idx} className="relative bg-white p-6">
                    <div className="w-16 h-16 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-xl border-4 border-white">
                       {step.step}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. CONTACT FORM */}
      <section ref={containerRef} id="contact" className="w-full flex flex-col lg:flex-row min-h-screen bg-white">
        <div className="lg:w-1/2 relative min-h-[600px] lg:min-h-full overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
             <img 
                src={itData.contact.image} 
                className="w-full h-full object-cover"
                alt="Server Room"
             />
          </motion.div>
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
          <div className="absolute bottom-12 left-12 p-10 bg-white/95 backdrop-blur-xl shadow-2xl max-w-md border-l-4 border-cyan-600">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">{itData.contact.intro.heading}</h3>
            <p className="text-slate-600 font-medium">{itData.contact.intro.desc}</p>
          </div>
        </div>

        <div className="lg:w-1/2 p-12 lg:p-32 flex flex-col justify-center bg-slate-50">
          <div className="max-w-lg mx-auto w-full">
            <SectionHeader title="Technical Audit" subtitle="Contact Us" align="left" />
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Company</label>
                <input 
                  type="text" name="name" 
                  value={formData.name} onChange={handleChange} 
                  className="w-full bg-white border border-slate-200 p-4 text-lg text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all rounded-lg" 
                  placeholder={itData.contact.form.name} required 
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Phone</label>
                  <input 
                    type="tel" name="phone" 
                    value={formData.phone} onChange={handleChange} 
                    className="w-full bg-white border border-slate-200 p-4 text-lg text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all rounded-lg" 
                    placeholder={itData.contact.form.phone} required 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Email</label>
                  <input 
                    type="email" name="email" 
                    value={formData.email} onChange={handleChange} 
                    className="w-full bg-white border border-slate-200 p-4 text-lg text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all rounded-lg" 
                    placeholder={itData.contact.form.email} required 
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Requirements</label>
                <textarea 
                  name="message" rows={4}
                  value={formData.message} onChange={handleChange} 
                  className="w-full bg-white border border-slate-200 p-4 text-lg text-slate-900 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all rounded-lg resize-none" 
                  placeholder={itData.contact.form.message} required 
                />
              </div>

              <button type="submit" className="w-full py-5 bg-slate-900 text-white font-bold tracking-[0.2em] uppercase hover:bg-cyan-600 transition-all duration-300 rounded-lg shadow-xl flex justify-between items-center px-8 group">
                <span>{itData.contact.form.submit}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ITServices;