import React from 'react';
import { Link } from 'react-router-dom';
import { homeAutomationData } from '../../assets/data';
import { Zap, Shield, Thermometer, Mic, Home, ArrowRight, Play } from 'lucide-react';

const HomeAutomation = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      
      {/* 1. HERO: Immersive Video/Image */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeAutomationData.hero.image}
            alt="Smart Home Luxury"
            className="w-full h-full object-cover scale-105 animate-pan-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="mb-6 inline-block border border-white/20 backdrop-blur-md px-6 py-2 rounded-full">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white">Phoenix Home</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tighter">
            Live <span className="font-serif italic text-orange-500">Intelligently.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto font-light mb-12">
            {homeAutomationData.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/home-automation/solutions"
              className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold tracking-widest uppercase text-xs transition-all duration-500"
            >
              Explore Solutions
            </Link>
            <Link
              to="/home-automation/products"
              className="px-10 py-4 bg-transparent border border-white/30 hover:bg-white hover:text-black text-white font-bold tracking-widest uppercase text-xs transition-all duration-500 backdrop-blur-sm"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES: Glass Cards */}
      <section className="relative z-20 -mt-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: "Energy", desc: "Adaptive Optimization" },
            { icon: Shield, title: "Security", desc: "Biometric & Surveillance" },
            { icon: Thermometer, title: "Climate", desc: "Precision Ambiance" },
            { icon: Mic, title: "Control", desc: "Voice & Gesture" }
          ].map((item, idx) => (
            <div key={idx} className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 hover:border-orange-500/50 transition-colors duration-500 group cursor-pointer">
              <item.icon className="text-stone-400 group-hover:text-orange-500 transition-colors mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-stone-500 uppercase tracking-wider">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE: Masonry / Editorial */}
      <section className="py-32 bg-stone-950">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
            <h2 className="text-5xl font-light">Curated <span className="font-serif italic text-stone-500">Experiences</span></h2>
            <Link to="/home-automation/solutions" className="text-orange-500 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">View All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {homeAutomationData.solutions.slice(0, 4).map((solution, idx) => (
              <div key={solution.id} className={`group relative overflow-hidden ${idx === 0 || idx === 3 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full">
                  <div className="overflow-hidden mb-2">
                    <h3 className="text-3xl md:text-5xl font-bold text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">{solution.title}</h3>
                  </div>
                  <p className="text-stone-300 max-w-lg text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{solution.description}</p>
                  
                  <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    <span className="h-[1px] w-12 bg-orange-500" />
                    <span className="text-xs font-bold uppercase tracking-widest">Discover</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LUXURY CTA */}
      <section className="py-32 bg-black relative border-t border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-light mb-8">Elevate Your <span className="text-orange-600 font-serif italic">Sanctuary.</span></h2>
          <p className="text-xl text-stone-400 mb-12 font-light">
            Book a private consultation with our automation architects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/home-automation/contact"
              className="px-12 py-5 bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAutomation;