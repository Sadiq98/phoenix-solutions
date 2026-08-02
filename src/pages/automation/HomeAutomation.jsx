import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { homeAutomationData } from '../../assets/data';
import { HeroSection, FeatureGrid, SectionHeader, LazyVideo, FadeIn, CtaSec } from '../../components/Common';
import {
  ArrowRight, Play, Check, MoveRight,
} from 'lucide-react';
export const BASE_PATH = import.meta.env.SITE_PATH || "";


const { hero, features, scenes, products, categories } = homeAutomationData

const HomeAutomation = () => {
  const [activeScene, setActiveScene] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-orange-200 selection:text-orange-900">

      {/* 1. HERO */}
      <HeroSection data={hero} scrollId="showcase" theme="orange-600" />

      {/* 2. FEATURES */}
      <FeatureGrid features={features} theme="orange-600" />


      {/* 3. PRODUCT SHOWCASE */}
      <section id="showcase" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1800px] mx-auto space-y-40">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 leading-tight">
                  {cat.title}
                </h2>
                <p className="text-xl text-stone-500 leading-relaxed mb-10 font-light">
                  {cat.desc}
                </p>
                <div className="space-y-4">
                  {cat.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 border-b border-stone-200 pb-4">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                        <Check size={16} />
                      </div>
                      <span className="text-stone-800 font-medium tracking-wide uppercase text-sm">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:w-140 w-full">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/50 group">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  />

                  {/* Glass CTA */}
                  <Link  to={`${BASE_PATH}/automation/products`} className="absolute bottom-8 left-8 right-8">
                    <div className="p-6 bg-white/80 backdrop-blur-xl rounded-xl border border-white/50 transition-all duration-300 group-hover:bg-white group-hover:shadow-2xl">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-stone-900">
                          {cat.button}
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-orange-600 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE SCENES */}
      <section className="py-32 bg-stone-100 text-stone-300 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            title={scenes.subtitle}
            subtitle={scenes.title}
            dark={true}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <LazyVideo
                key={activeScene}
                src={scenes.items[activeScene].videoUrl}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            {/* Scene Selectors */}
            <div className="space-y-4">
              {scenes.items.map((scene, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div
                    onClick={() => setActiveScene(idx)}
                    className={`p-8 rounded-xl cursor-pointer transition-all duration-300 border ${activeScene === idx
                      ? 'bg-white text-stone-900 border-stone-100 shadow-xl scale-105'
                      : 'bg-stone-200 text-stone-500 border-white/10 hover:bg-white/10'
                      }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-2xl font-serif">{scene.title}</h4>
                      {activeScene === idx && <Play size={20} className="text-orange-600 fill-orange-600" />}
                    </div>
                    <p className={`text-sm ${activeScene === idx ? 'text-stone-600' : 'text-stone-500'}`}>
                      {scene.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT GALLERY */}
      <section ref={targetRef} className="py-32  overflow-hidden ">
        <div className="px-6 md:px-12 lg:px-24 mb-12 flex justify-between items-end">
          <div>
            <span className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
              {products.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
              {products.subtitle}
            </h2>
          </div>

          <Link 
            to={`${BASE_PATH}/automation/products`}
            className="inline-flex items-center gap-3 font-bold text-xs tracking-[0.2em] uppercase cursor-pointer group text-stone-400"
          >
                              <MoveRight size={32} className="text-stone-600 group-hover:text-orange-600 transition-colors" />
          </Link>
        </div>

        {/* 6. SCROLL CONTAINER */}
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div
            style={{ x }}
            className="flex gap-8 pl-6 md:pl-24 w-max"
          >
            {products.items.map((prod, idx) => (
              <Link
                key={idx}
                to={`${BASE_PATH}/automation/products`}
                className="group"
              >
                <div className="w-[300px] md:w-[400px] cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-black shadow-sm mb-6 relative">
                    <img
                      src={prod.img}
                      alt={prod.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 "
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">
                        {prod.title}
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mt-1">
                        {prod.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* 7. LUXURY CTA */}
      <CtaSec mode="automation" />

    </div>
  );
};

export default HomeAutomation;

