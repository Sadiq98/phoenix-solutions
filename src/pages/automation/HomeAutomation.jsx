// import React from 'react';
// import { Link } from 'react-router-dom';
// import { homeAutomationData } from '../../assets/data';
// import { Zap, Shield, Thermometer, Mic, Home, ArrowRight, Play } from 'lucide-react';

// const HomeAutomation = () => {
//   return (
//     <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      
//       {/* 1. HERO: Immersive Video/Image */}
//       <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={homeAutomationData.hero.image}
//             alt="Smart Home Luxury"
//             className="w-full h-full object-cover scale-105 animate-pan-slow"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
//         </div>

//         <div className="relative z-10 text-center px-6">
//           <div className="mb-6 inline-block border border-white/20 backdrop-blur-md px-6 py-2 rounded-full">
//             <span className="text-xs font-bold tracking-[0.3em] uppercase text-white">Phoenix Home</span>
//           </div>
//           <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tighter">
//             Live <span className="font-serif italic text-orange-500">Intelligently.</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto font-light mb-12">
//             {homeAutomationData.hero.description}
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <Link
//               to="/home-automation/solutions"
//               className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold tracking-widest uppercase text-xs transition-all duration-500"
//             >
//               Explore Solutions
//             </Link>
//             <Link
//               to="/home-automation/products"
//               className="px-10 py-4 bg-transparent border border-white/30 hover:bg-white hover:text-black text-white font-bold tracking-widest uppercase text-xs transition-all duration-500 backdrop-blur-sm"
//             >
//               Browse Catalog
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 2. FEATURES: Glass Cards */}
//       <section className="relative z-20 -mt-24 px-6 md:px-12 lg:px-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { icon: Zap, title: "Energy", desc: "Adaptive Optimization" },
//             { icon: Shield, title: "Security", desc: "Biometric & Surveillance" },
//             { icon: Thermometer, title: "Climate", desc: "Precision Ambiance" },
//             { icon: Mic, title: "Control", desc: "Voice & Gesture" }
//           ].map((item, idx) => (
//             <div key={idx} className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 hover:border-orange-500/50 transition-colors duration-500 group cursor-pointer">
//               <item.icon className="text-stone-400 group-hover:text-orange-500 transition-colors mb-6" size={32} />
//               <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//               <p className="text-sm text-stone-500 uppercase tracking-wider">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3. PRODUCT SHOWCASE: Masonry / Editorial */}
//       <section className="py-32 bg-stone-950">
//         <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
//           <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
//             <h2 className="text-5xl font-light">Curated <span className="font-serif italic text-stone-500">Experiences</span></h2>
//             <Link to="/home-automation/solutions" className="text-orange-500 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">View All</Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//             {homeAutomationData.solutions.slice(0, 4).map((solution, idx) => (
//               <div key={solution.id} className={`group relative overflow-hidden ${idx === 0 || idx === 3 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
//                 <img
//                   src={solution.image}
//                   alt={solution.title}
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
//                 <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full">
//                   <div className="overflow-hidden mb-2">
//                     <h3 className="text-3xl md:text-5xl font-bold text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">{solution.title}</h3>
//                   </div>
//                   <p className="text-stone-300 max-w-lg text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{solution.description}</p>
                  
//                   <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
//                     <span className="h-[1px] w-12 bg-orange-500" />
//                     <span className="text-xs font-bold uppercase tracking-widest">Discover</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. LUXURY CTA */}
//       <section className="py-32 bg-black relative border-t border-white/10">
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
//         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//           <h2 className="text-5xl md:text-7xl font-light mb-8">Elevate Your <span className="text-orange-600 font-serif italic">Sanctuary.</span></h2>
//           <p className="text-xl text-stone-400 mb-12 font-light">
//             Book a private consultation with our automation architects.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <Link
//               to="/home-automation/contact"
//               className="px-12 py-5 bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-orange-600 hover:text-white transition-all duration-300"
//             >
//               Consultation
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomeAutomation;





import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { homeAutomationData } from '../../assets/data';
// import Footer from '../components/Footer';
import { 
  Zap, Shield, Thermometer, Mic, Home, ArrowRight, Play, 
  Sun, Moon, Wind, ArrowLeft, Check, MoveRight 
} from 'lucide-react';

// --- ANIMATION UTILS ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const HomeAutomation = () => {
  const [activeScene, setActiveScene] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-orange-200 selection:text-orange-900">
      


       {/* 1. HERO: Immersive Video/Image */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video 
      src={homeAutomationData.hero.videoUrl} 
      autoPlay 
      loop 
      muted 
      className="w-full h-full object-cover"
    />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="mb-6 inline-block border border-white/20 backdrop-blur-md px-6 py-2 rounded-full">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white">{homeAutomationData.hero.badge}</span>
          </div>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tighter text-white">
                              {homeAutomationData.hero.title.split(' ').slice(0, 3).join(' ')} <span className="font-serif italic text-orange-500">
                                {homeAutomationData.hero.title.split(' ')[3]} 
                              </span>
                            </h1>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto font-light mb-12">
            {homeAutomationData.hero.description}
          </p>
{/*           
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
          </div> */}
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE (Apple Style - Alternating) */}
      <section id="showcase" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1800px] mx-auto space-y-40">
          
          {homeAutomationData.categories.map((cat, idx) => (
            <div key={cat.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Side */}
              <div className="lg:w-1/2">
                <FadeIn>
                  <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 leading-tight">
                    {cat.title}
                  </h2>
                  <p className="text-xl text-stone-500 leading-relaxed mb-10 font-light">
                    {cat.desc}
                  </p>
                  <div className="space-y-4">
                    {cat.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-4 border-b border-stone-100 pb-4">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                          <Check size={16} />
                        </div>
                        <span className="text-stone-800 font-medium tracking-wide uppercase text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Image Side (Parallax-like) */}
              <div className="lg:w-1/2">
                <FadeIn delay={0.2}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/50">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]" 
                    />
                    {/* Glass Badge */}
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-xl rounded-xl border border-white/50">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-stone-900">Phoenix Series</span>
                        <ArrowRight size={16} className="text-orange-600" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. INTERACTIVE SCENES (Video Tabs) */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Live Experience</span>
            <h2 className="text-4xl md:text-6xl font-serif">Set the Scene.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video 
                key={activeScene} // Key forces reload on change
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover"
              >
                <source src={homeAutomationData.scenes[activeScene].video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Scene Selectors */}
            <div className="space-y-4">
              {homeAutomationData.scenes.map((scene, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveScene(idx)}
                  className={`p-8 rounded-xl cursor-pointer transition-all duration-300 border ${
                    activeScene === idx 
                      ? 'bg-white text-stone-900 border-white scale-105 shadow-xl' 
                      : 'bg-white/5 text-stone-400 border-white/5 hover:bg-white/10'
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT GALLERY (Horizontal Scroll) */}
      <section ref={targetRef} className="py-32 bg-[#FAFAF9] overflow-hidden">
        <div className="px-6 md:px-12 lg:px-24 mb-12 flex justify-between items-end">
          <div>
            <span className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs mb-2 block">The Hardware</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Designed to Disappear</h2>
          </div>
          <div className="flex gap-4 text-stone-400">
            <MoveRight size={32} />
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-24 w-max">
          {homeAutomationData.products.map((prod, idx) => (
            <div key={idx} className="w-[300px] md:w-[400px] group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm mb-6 relative">
                <img 
                  src={prod.img} 
                  alt={prod.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-serif text-stone-900">{prod.title}</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mt-1">{prod.price}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 5. LUXURY CTA */}
      <section className="py-32 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8">
            Your Home, <span className="italic text-orange-600">Reimagined.</span>
          </h2>
          <p className="text-xl text-stone-500 mb-12 font-light max-w-2xl mx-auto">
            Book a private consultation with our automation architects to discuss your bespoke requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="px-12 py-5 bg-stone-900 text-white font-bold tracking-[0.2em] uppercase hover:bg-orange-600 transition-all duration-300 shadow-2xl"
            >
              Schedule Visit
            </Link>
            <button className="px-12 py-5 bg-white border border-stone-200 text-stone-900 font-bold tracking-[0.2em] uppercase hover:bg-stone-50 transition-all duration-300">
              Download Lookbook
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeAutomation;