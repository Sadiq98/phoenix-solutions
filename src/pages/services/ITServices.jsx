



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { itData } from '../../assets/data';
import { HeroSection, FeatureGrid, FadeIn, SectionHeader, LazyVideo, CtaSec } from '../../components/Common';
import { ArrowRight, CheckCircle2, Play, Activity, MoveRight } from "lucide-react";
import { Link } from 'react-router-dom'
export const BASE_PATH = import.meta.env.SITE_PATH || "";


const ITServices = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans ">

      {/* 1. HERO */}
      <HeroSection data={itData.hero} scrollId="services" theme="cyan-600" />

      {/* 2. CAPABILITIES */}
      <FeatureGrid features={itData.features} theme="cyan-600" />

      {/* 3. SERVICES TABS */}
      <section id="services" className="py-24 ">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title="Comprehensive Solutions" subtitle="Enterprise Ready" theme="cyan-600" />

          <div className="grid lg:grid-cols-12 gap-12 mt-16">
            <div className="lg:col-span-4 flex flex-col gap-4">
              {itData.services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`text-left p-6 rounded-xl transition-all border ${activeService === idx ? 'bg-slate-900 text-white shadow-xl scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-100 border-transparent'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{service.title}</span>
                    {activeService === idx && <ArrowRight size={20} className="text-cyan-600" />}
                  </div>
                  <p className={`text-sm ${activeService === idx ? 'text-slate-400' : 'text-slate-500'}`}>{service.description}</p>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-slate-900 rounded-3xl overflow-hidden relative min-h-[500px] shadow-2xl">
              <motion.div
                key={activeService}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <img src={itData.services[activeService].image} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Service" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">{itData.services[activeService].title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {itData.services[activeService].list.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                        <CheckCircle2 size={18} className="text-cyan-600" />
                        <span className="text-slate-300 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. PROCESS TIMELINE */}
 <section className="py-32 bg-stone-100 relative overflow-hidden">
  <motion.div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <SectionHeader title="How We Work" subtitle="Our Approach" align="center" theme='cyan-600' />

    <div className="relative mt-16">
      <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-stone-200">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {itData.process.map((val, idx) => (
          <FadeIn key={idx} delay={idx * 0.2}>
            <div className="relative flex flex-col group">

              {/* CARD */}
              <div className="bg-white p-10 h-full rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-cyan-200 group-hover:-translate-y-2 relative overflow-hidden  bg-[linear-gradient(45deg,rgba(0,0,0,0.04)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.04)_50%,rgba(0,0,0,0.04)_75%,transparent_75%,transparent)] 
                bg-[length:8px_8px]">
                
                <span className="absolute -top-4 -right-2 text-7xl font-bold text-stone-100 opacity-40 group-hover:opacity-10 transition-opacity">
                  {val.step}
                </span>

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mb-8 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
                   {val.icon ? <val.icon size={28} /> : <span className="text-xl font-bold">{val.step}</span>}
                </div>

                <h3 className="text-xl font-serif text-stone-900 mb-4 flex items-center gap-2">
                  <span className="lg:hidden text-cyan-500 font-sans text-sm font-bold">{val.step}.</span>
                  {val.title}
                </h3>
                
                <p className="text-stone-500 leading-relaxed text-sm">
                  {val.desc}
                </p>

              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* 4. VIDEO */}
      <section className="relative h-[80vh] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <LazyVideo src={itData.video.source} className="w-full h-full" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">{itData.video.title}</h2>
          <div className="flex items-center justify-center gap-3 text-cyan-600">
            <Activity className="animate-pulse" size={20} />
            <p className="text-lg tracking-widest uppercase font-bold">{itData.video.subtitle}</p>
          </div>
        </div>
      </section>

      {/* 6. HARDWARE SHOWCASE */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title="Infrastructure Gallery" subtitle="Enterprise Hardware" align="left" theme='cyan-600' />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itData.hardware.items.map((item, idx) => (
              <div key={idx} className={`group cursor-pointer relative ${idx % 2 === 0 ? 'mt-0' : 'lg:mt-24'}`}>
                <div className="aspect-[3/4] overflow-hidden relative mb-6 bg-white rounded-lg shadow-sm">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover transition-transform duration-700 "
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex justify-between items-start border-t border-slate-200 pt-4">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest block mb-1">{item.cat}</span>
                    <h4 className="text-2xl font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <Link
                    to={`${BASE_PATH}/services/products`}
                  ><MoveRight size={20} className="text-slate-400 group-hover:text-cyan-600 transition-colors" /></Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSec mode="services" />
    </div>
  );
};

export default ITServices;