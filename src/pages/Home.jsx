import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";

import { mainSiteData } from '../assets/data';
import Footer from '../components/Footer'; 

// --- ICON MAPPING ---
import {
  Code, Settings, Briefcase, Lightbulb, DollarSign, Shield,
  Package, Network, Server, Truck, Monitor, Headphones,
  Star, ArrowRight, CheckCircle2, Home as HomeIcon, Cpu, Globe, TrendingUp, Users,
  MapPin, Mail, Phone, Play, Zap, Activity
} from "lucide-react";

const iconMap = {
  Code, Settings, Briefcase, Lightbulb, DollarSign, Shield,
  Package, Network, Server, Truck, Monitor, Headphones,
  Star, ArrowRight, CheckCircle2, HomeIcon, Cpu, Globe, TrendingUp, Users,
  MapPin, Mail, Phone, Play, Zap, Activity
};

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};


// --- PARTNER LOGO SCROLL COMPONENT ---
const PartnerMarquee = () => (
  <div className="w-full overflow-hidden  py-10 bg-white/5 backdrop-blur-md p-8   hover:orange-500/50 transition-all duration-300">
    <div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center gap-2 text-stone-400 font-bold text-xl uppercase tracking-wider hover:text-orange-600 transition-colors cursor-default">
          <CheckCircle2 size={20} />
          <span>Client {i + 1}</span>
        </div>
      ))}
    </div>
  </div>
);

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Phoenix Solutions. We will reach out shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // Light Theme Base: bg-stone-50, Text Dark
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-900 text-white font-sans overflow-x-hidden selection:bg-orange-200 selection:text-orange-900 ">

      {/* 1. Hero Section */}
  <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-black">
        
       {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            className="w-full h-full"
          >
            {mainSiteData.hero.images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover opacity-90" />
                  {/* Gradient Overlay: Cinematic Fade */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Hero Content - Left Aligned, Wide Padding */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-20 flex-grow flex items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="max-w-6xl"
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="h-[1px] w-12 bg-orange-500"></div>
               <span className="text-orange-400 font-bold tracking-[0.2em] uppercase text-sm">
                {mainSiteData.hero.badge}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[0.95] text-white tracking-tight">
              {mainSiteData.hero.title}
            </h1>

            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-12 max-w-2xl leading-snug">
              {mainSiteData.hero.subtitle}
            </p>

            <button
              onClick={() => document.getElementById("solutions").scrollIntoView({ behavior: "smooth" })}
              className="w-80 py-5 bg-orange-600 hover:bg-stone-900 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 uppercase flex items-center justify-center gap-4  group"
            >
              <span>{mainSiteData.hero.cta}</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Fluid Stats Bar */}
        <div className="relative z-20 w-full  bg-black/5 backdrop-blur-lg">
          <div className="w-full px-6 md:px-12 lg:px-24 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {mainSiteData.stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-1 tracking-tighter">{stat.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solutions  */}
     

   <section id="strengths" >
  <div className="max-w-8xl mx-auto px-12 lg:px-12 space-y-32 pb-20">


    {/* BLOCK 1 — SMARTER WORKFLOW */}
    <div className="grid lg:grid-cols-2 gap-16 items-center py-24">
      
      {/* LEFT TEXT */}
      <div className="order-2 lg:order-1">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
          <Globe className="text-blue-600" size={28} />
        </div>

        <h2 className="text-5xl md:text-5xl font-bold mb-6 text-white">
          {mainSiteData.strengths.title1} <br />
          <span className="text-stone-600">{mainSiteData.strengths.subtitle1}</span>
        </h2>

        <p className="text-lg text-stone-400 mb-8 leading-relaxed">
          {mainSiteData.strengths.description1}
        </p>

        {/* 3 strengths */}
        <div className="space-y-6 border-t border-stone-100 pt-8">
          {mainSiteData.strengths.items.slice(0, 3).map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={idx} className="flex gap-4">
                <div className="mt-1">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-md text-stone-400 mt-1">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT CARD*/}
      <div className="order-1 lg:order-2 relative">

          {/* Background visual */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />

          {(() => {
            const card = mainSiteData.solutions.cards[1];
            const Icon = iconMap[card.icon];
            const isOrange = card.color === "orange";

            return (
              <Link to={card.link} className="group relative z-10 block">
                <div
                  className={`relative h-[600px] rounded-3xl overflow-hidden border-2 transition-all duration-500 shadow-xl
                    ${
                      isOrange
                        ? "border-white hover:border-orange-500 shadow-orange-500/10 hover:shadow-orange-500/20"
                        : "border-white hover:border-cyan-500 shadow-cyan-500/10 hover:shadow-cyan-500/20"
                    } bg-white`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="mb-auto">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/30">
                        {Icon && <Icon size={40} className="text-white" />}
                                           
                      </div>
                      
                    </div>
<div className="flex items-center justify-between">

  {/* Left Side – Text */}
  <div className="flex flex-col">
    <h3 className="text-4xl font-bold mb-4 text-white">
      {card.title}
    </h3>
    <p className="text-stone-400 text-lg mb-8 max-w-md">
      {card.description}
    </p>
  </div>

  {/* Right Side – Icon */}
  <div
    className={`w-16 h-16 rounded-full flex items-center justify-center border border-white/30 
                text-white group-hover:bg-cyan-400 group-hover:text-black 
                transition-all duration-500`}
  >
    <ArrowRight 
      size={24} 
      className="-rotate-45 group-hover:rotate-0 hover:text-white transition-transform duration-500" 
    />
  </div>

</div>


                  </div>
                </div>
              </Link>
            );
          })()}
      </div>
    </div>

    {/* BLOCK 2 — UNLEASH CREATIVITY */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div className="relative">

          {/* SECOND card */}
          {(() => {
            const card = mainSiteData.solutions.cards[0];
            const Icon = iconMap[card.icon];
            const isOrange = card.color === "orange";

            return (
              <Link to={card.link} className="group relative z-10 block">
                <div
                  className={`relative h-[600px] rounded-3xl overflow-hidden border-2 transition-all duration-500 shadow-xl 
                    ${
                      isOrange
                        ? "border-white hover:border-orange-500 shadow-orange-500/10 hover:shadow-orange-500/20"
                        : "border-white hover:border-cyan-500 shadow-cyan-500/10 hover:shadow-cyan-500/20"
                    } bg-white`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="mb-auto">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/30">
                        {Icon && <Icon size={40} className="text-white" />}
                      </div>
                    </div>

                   <div className="flex items-center justify-between">

  {/* Left Side – Text */}
  <div className="flex flex-col">
    <h3 className="text-4xl font-bold mb-4 text-white">
      {card.title}
    </h3>
    <p className="text-stone-200 text-lg mb-8 max-w-md">
      {card.description}
    </p>
  </div>

  {/* Right Side – Icon */}
  <div
    className={`w-16 h-16 rounded-full flex items-center justify-center border border-white/30 
                text-white group-hover:bg-orange-600 group-hover:text-black 
                transition-all duration-500`}
  >
    <ArrowRight 
      size={24} 
      className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" 
    />
  </div>

</div>


                  </div>
                </div>
              </Link>
            );
          })()}
        
      </div>

      {/* RIGHT TEXT BLOCK */}
      <div>
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
          <Cpu className="text-orange-600" size={28} />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-200">
          {mainSiteData.strengths.title2} <br />
          <span className="text-stone-600">{mainSiteData.strengths.subtitle2}</span>
        </h2>

        <p className="text-lg text-stone-400 mb-8 leading-relaxed">
          {mainSiteData.strengths.description2}
        </p>

        {/* 3 strengths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mainSiteData.strengths.items.slice(3, 6).map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-orange-100 hover:border-orange-400 hover:shadow-lg transition-all group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <Icon size={24} className="text-orange-600 mb-3 transition-colors" />
                <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                <p className="text-md text-stone-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

    </div>

  </div>
</section>


      {/* 4. Live Showcase (Videos) */}
      <section className="py-24 ">
        <div className="max-w-8xl mx-auto px-12 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{mainSiteData.liveShowcase.title}</h2>
                <p className="text-xl text-stone-500 mt-2">{mainSiteData.liveShowcase.subtitle}</p>
              </div>
              <Link to="/automation" className="text-xl text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2">
                {mainSiteData.liveShowcase.cta} <ArrowRight size={16}/>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mainSiteData.liveShowcase.items.map((item) => (
                    <div key={item.id} className="relative group rounded-2xl overflow-hidden aspect-[9/12] shadow-lg cursor-pointer bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                        <video 
                            autoPlay loop muted playsInline 
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        >
                            <source src={item.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-75">{item.category}</span>
                            <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                        </div>
                        
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                           <Play size={16} className="fill-white text-white" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Auto-Scrolling  */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-8xl mx-auto px-12 lg:px-12 mb-12">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{mainSiteData.projects.title}</h2>
           <p className="text-xl text-stone-500">{mainSiteData.projects.subtitle}</p>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
            loop={true}
            speed={5000} // Slow constant speed
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={true}
            className="swiper-linear" // Add css for linear timing function if needed
          >
            {/* Mix of real data and mock to fill the marquee */}
            {[...mainSiteData.projects.items, ...mainSiteData.projects.items, ...mainSiteData.projects.items].map((project, idx) => (
              <SwiperSlide key={`${project.id}-${idx}`}>
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative group border border-stone-200">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-bold">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-stone-300 line-clamp-2 mt-1">{project.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Custom CSS for linear swiper */ }
        <style>{`
          .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}</style>
      </section>


      {/* 6. Testimonials */}
         <section id="testimonials" className="py-24 bg-gradient-to-b relative overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10">
          <img
            src={mainSiteData.testimonials[0].image}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8">
          <div className=" mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{mainSiteData.testimonials.title}</h2>
            <p className="text-xl text-gray-400">{mainSiteData.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {mainSiteData.testimonials.items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. Contact Section */}
      <section id="contact" className="py-32 ">
        <div className="max-w-8xl mx-auto px-12 lg:px-12">
          <div className=" rounded-[3rem] p-8 md:p-16 shadow-2xloverflow-hidden relative">
            {/* Background Decoration */}
            {/* <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-[100px] opacity-60" /> */}
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{mainSiteData.contact.title}</h2>
                <p className="text-xl text-stone-500 mb-10">
                  {mainSiteData.contact.subtitle}
                </p>
                <div className="space-y-6">
                  {mainSiteData.contact.info.map((item, index) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div className="flex items-center gap-4 group" key={index}>
                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          <p className="text-md text-stone-500">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 transition-all duration-300 p-8 rounded-3xl border border-stone-100">
                <div className="grid grid-cols-2 gap-4">
                  {["name", "phone"].map((key, idx) => (
                    <div className="space-y-2" key={idx}>
                      <label className="text-md font-bold text-stone-400 uppercase ml-2">
                        {mainSiteData.contact.form.labels[key]}
                      </label>
                      <input
                        type={key === "phone" ? "tel" : "text"}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-white placeholder:text-stone-300"
                        placeholder={mainSiteData.contact.form.placeholders[key]}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-md font-bold text-stone-400 uppercase ml-2">
                    {mainSiteData.contact.form.labels.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-white placeholder:text-stone-300"
                    placeholder={mainSiteData.contact.form.placeholders.email}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-md font-bold text-stone-400 uppercase ml-2">
                    {mainSiteData.contact.form.labels.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-stone-800 border border-stone-600 rounded-xl px-4 py-4 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-white placeholder:text-stone-300 resize-none"
                    placeholder={mainSiteData.contact.form.placeholders.message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-orange-600 hover:bg-stone-900 text-white font-bold rounded-xl transition-all  transform hover:-translate-y-1 hover:bg-black"
                >
                  {mainSiteData.contact.form.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
            <PartnerMarquee />

      <Footer />
     
    </div>
  );
};

export default Home;


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
//         <div className="relative z-20 w-full border-t border-white/10 bg-cyan-950/30 backdrop-blur-md">
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
//              <div className="absolute bottom-0 left-0 p-12 lg:p-24 w-full bg-gradient-to-t from-black/90 to-transparent">
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
                    
//                     <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-transparent to-transparent">
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