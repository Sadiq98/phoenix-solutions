
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from "swiper/modules";

import { phoenixData } from '../assets/data';
import { HeroSection, SectionHeader, FadeIn, LazyVideo, ContactForm, OfficeMap } from '../components/Common';
import { ArrowRight, Globe, Shield, Calendar, Star, Quote, Play, CheckCircle2, MoveRight } from "lucide-react";
import { Link } from 'react-router-dom';
export const BASE_PATH = import.meta.env.SITE_PATH || "";


const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans overflow-x-hidden selection:bg-orange-200 selection:text-orange-900">

      {/* 1. HERO */}
      <HeroSection data={phoenixData.hero} scrollId="divisions" theme="orange-600" />
      {/* 2. STATS BAR */}
      <section className="relative z-30">
        <div
          className="
      /* Mobile: Remove absolute positioning to prevent overlap */
      relative mt-[-8rem] md:absolute md:bottom-0 md:left-0 md:w-full 
      md:translate-y-1/2 px-4
    "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1400px] mx-auto relative"
          >
            {/* Added shadow and rounded corners for mobile 'floating' effect */}
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl md:rounded-t-2xl overflow-hidden">
              {phoenixData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="py-6 md:py-12 px-2 md:px-12 text-center border-b border-r border-stone-50 last:border-none"
                >
                  <div className="text-2xl md:text-5xl font-serif text-stone-800 hover:text-orange-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[8px] md:text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PHILOSOPHY */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <div className="w-full lg:w-1/2 order-1">
              <FadeIn>
                <span className="text-orange-600 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
                  {phoenixData.philosophy.title}
                </span>
                <h2 className="text-3xl md:text-6xl font-serif text-stone-900 leading-tight mb-6">
                  {phoenixData.philosophy.heading}
                </h2>
                <p className="text-base md:text-xl text-stone-600 leading-relaxed mb-8 font-light max-w-lg">
                  {phoenixData.philosophy.description}
                </p>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 border-t border-stone-100 pt-8">
                {phoenixData.philosophy.badges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-orange-600">
                      {i === 0 ? <Globe size={20} /> : <Shield size={20} />}
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-800">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="w-full lg:w-1/2 order-2 lg:order-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-auto md:h-[500px]">
                <img
                  src={phoenixData.philosophy.image}
                  alt="Interior Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES / DIVISIONS */}
      <section id="divisions" className="py-20 px-6 md:px-12 lg:px-24 bg-stone-50">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeader title="Our Expertise" subtitle="Divisions" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mt-12">
            {phoenixData.divisions.map((div) => {
              const Icon = div.icon;
              return (
                <Link
                  to={div.link}
                  key={div.id}
                  className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-lg flex flex-col min-h-[350px] md:min-h-[450px]"
                >
                  {/* Background Image */}
                  <img src={div.image} alt={div.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="relative z-10 flex-grow flex flex-col justify-between p-6 md:p-12">
                    <div className="flex justify-between items-start">
                      <span className={`px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border ${div.badge}`}>
                        {div.category}
                      </span>
                      <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl md:text-5xl font-serif text-white mb-3">{div.title}</h3>
                      <p className="text-stone-300 text-xs md:text-base mb-6 font-light line-clamp-3 md:line-clamp-none">
                        {div.desc}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${div.color}`}>{div.cta}</span>
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COLLECTION */}
      <section className="py-24" ref={containerRef} id='products'>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title={phoenixData.collection.title} subtitle={phoenixData.collection.subtitle} align="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phoenixData.collection.automation.map((item, idx) => (
              <Link
                to={`${BASE_PATH}/automation/products`}              >
                <div className={`group cursor-pointer relative ${idx % 2 === 0 ? 'mt-0' : 'lg:mt-24'}`}>
                  <div className="aspect-[3/4] overflow-hidden relative mb-6 bg-stone-200">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover duration-700 "
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="flex justify-between items-start border-t border-stone-300 pt-4">
                    <div>
                      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block mb-1">{item.cat}</span>
                      <h4 className="text-2xl font-serif text-stone-900">{item.title}</h4>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                                    <MoveRight size={20} className="text-stone-900 group-hover:text-orange-600 transition-colors" />
                      
                    </div>
                  </div>
                </div>
              </Link>

            ))}
            {phoenixData.collection.services.map((item, idx) => (
              <Link
                to={`${BASE_PATH}/services/products`}              >
                <div key={idx} delay={idx * 0.1} className={`group cursor-pointer relative ${idx % 2 === 0 ? 'mt-0' : 'lg:mt-24'}`}>
                  <div className="aspect-[3/4] overflow-hidden relative mb-6 bg-stone-200">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover transition-transform duration-700 "
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="flex justify-between items-start border-t border-stone-300 pt-4">
                    <div>
                      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block mb-1">{item.cat}</span>
                      <h4 className="text-2xl font-serif text-stone-900">{item.title}</h4>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                        <MoveRight size={20} className="text-stone-900 group-hover:text-cyan-600 transition-colors" />

                    </div>
                  </div>
                </div>
              </Link>

            ))}
          </div>
        </div>
      </section>

      {/* 6. VIDEO INTERLUDE */}
      <section className="relative h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <LazyVideo src={phoenixData.video.videoUrl} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        {/* <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-8xl font-serif text-white/40 mb-6 tracking-tight">{phoenixData.video.title}</h2>
        </div> */}
      </section>

      {/* 7. BLOG */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <SectionHeader title={phoenixData.journal.title} subtitle={phoenixData.journal.subtitle} align="left" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {phoenixData.journal.posts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
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
                <p className="text-stone-500 text-sm leading-relaxed overflow-hidden whitespace-nowrap text-ellipsis mb-6">
                  {post.excerpt}
                </p>
                <Link
                  to={`${BASE_PATH}/blog/${post.id}`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-200 pb-1 w-max group-hover:border-orange-600 transition-colors">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      {/* <section className=" pt-16" id='testimonial'>

        <div className="mb-16">
          <SectionHeader
            title={phoenixData.testimonials.title}
            subtitle={phoenixData.testimonials.subtitle}
          />
        </div>

        <div className="relative py-24 overflow-hidden">

          <img
            src={phoenixData.testimonials.image}
            alt="Testimonials background"
            className="absolute inset-0 bg-black/20 w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              loop
              spaceBetween={50}
              slidesPerView={1}
              className="w-full max-w-4xl mx-auto"
            >
              {phoenixData.testimonials.items.map((item) => (
                <SwiperSlide key={item.id}>

                  <div className='bg-blur shadow-xl'>

                    <div className="flex justify-center gap-1 mb-10 text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={22} fill="currentColor" />
                      ))}
                    </div>

                    <Quote className="mx-auto text-orange-200 w-14 h-14 mb-8" />

                    <p className="text-2xl md:text-4xl font-serif text-white 
                            leading-relaxed italic mb-14">
                      “{item.quote}”
                    </p>


                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={item.image}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-orange-100"
                        alt={item.name}
                      />
                      <div>
                        <div className="font-bold text-white text-xl">
                          {item.name}
                        </div>
                        <div className="text-xs text-center uppercase tracking-widest text-orange-600">
                          {item.role}
                        </div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section> */}



      {/* 9.Clients*/}
      {/* <section className="w-full py-16 bg-white overflow-hidden">

        <div
          className="
      flex flex-wrap items-center justify-center gap-8 md:gap-16
      px-6
    "
        >
          {phoenixData.clients.list.map((item) => (
            <div
              key={item.id}
              className="
          flex items-center gap-4
          opacity-50 hover:opacity-100
          transition-all duration-500
          cursor-pointer
          grayscale hover:grayscale-0
          hover:scale-105
        "
            >
              {item.img ? (
                <img src={item.img} alt={item.name} className="h-8 md:h-12 w-auto object-contain" />
              ) : (
                <CheckCircle2 size={24} className="text-orange-600" />
              )}

              <span className="text-lg md:text-xl font-serif text-stone-800 tracking-widest uppercase">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section> */}
      {/* 10. CONTACT */}
      <section
  ref={containerRef}
  id="contact"
  className="w-full flex flex-col lg:flex-row bg-white"
>
  {/* MAP */}
  <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:min-h-[700px] overflow-hidden">
          <motion.div
            // style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y : 0 }} 
            className="absolute inset-0 h-full w-full"
          >
            <OfficeMap data={phoenixData} />
          </motion.div>

          <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />


        </div>



        {/* FORM CONTAINER */}
        <div className="w-full lg:w-1/2 bg-white px-24 py-8 md:px-16 md:py-8 lg:px-20 lg:py-8 flex items-center">
    <div className="max-w-lg mx-auto w-full">
            <SectionHeader
              title={phoenixData.contact.title}
              subtitle={phoenixData.contact.subtitle}
              align="left"
            />
              <ContactForm />
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;

