import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutData } from '../../public/assets/data';
import { CtaSec, FadeIn, SectionHeader } from '../components/Common';
import { ArrowLeft, ChevronDown, Quote } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* 1. HERO: Parallax Editorial */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-60">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={aboutData.hero.image}
            alt="About Phoenix"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />

        <div className="relative z-10 text-center px-6 pt-16 max-w-4xl">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
              {aboutData.hero.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
              {aboutData.hero.subtitle}
            </p>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-orange-500 pt-8">
          <ChevronDown size={36} />
        </div>
      </section>

      {/* 2. THE STORY: Sticky Layout */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Sticky Left Title */}
          <div className="lg:sticky lg:top-32">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8">
                {aboutData.story.heading}
              </h2>
              <div className="h-[2px] w-24 bg-orange-600 mb-8" />
              <div className="relative p-8 bg-stone-50 rounded-r-2xl border-l-4 border-orange-600">
                <Quote className="text-stone-300 w-12 h-12 absolute -top-4 -left-4 bg-white rounded-full p-2" />
                <p className="text-xl font-serif italic text-stone-800 leading-relaxed relative z-10">
                  "{aboutData.story.quote}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-stone-300" />
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-500">{aboutData.story.signature}</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Scrolling Right Text */}
          <div className="space-y-12 text-lg md:text-xl text-stone-600 font-light leading-relaxed">
            <FadeIn delay={0.2}>
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-stone-900 first-letter:mr-3 first-letter:float-left">
                {aboutData.story.p1}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>{aboutData.story.p2}</p>
            </FadeIn>
            
            {/* Embedded Stats in Text */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-100">
              {aboutData.stats.map((stat, idx) => (
                <FadeIn key={idx} delay={0.4 + (idx * 0.1)}>
                  <div className="text-4xl font-serif text-stone-900 mb-1">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-orange-600">{stat.label}</div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES: Floating Cards */}
      <section ref={containerRef} className="py-32 bg-stone-100 relative overflow-hidden">
        <motion.div style={{ y }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader title="Built on Principles" subtitle="Our Ethos" align="center" />

          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.values.map((val, idx) => (
              <FadeIn key={val.id} delay={idx * 0.2}>
                <div className="bg-white p-10 h-full rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 border border-transparent hover:border-orange-100 group">
                  <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-8 text-stone-400 group-hover:text-orange-600 group-hover:bg-orange-50 transition-colors">
                    <val.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">{val.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">
                    {val.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM: Minimalist Portraits */}
      {/* <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs mb-2 block">{aboutData.team.title}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900">{aboutData.team.subtitle}</h2>
            </div>
            <div className="hidden md:block h-[1px] flex-grow ml-12 bg-stone-200 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutData.team.list.map((member, idx) => (
              <FadeIn key={member.id} delay={idx * 0.2} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[3/4] mb-6 relative bg-stone-100">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-1">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600">{member.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}


    </div>
  );
};

export default About;