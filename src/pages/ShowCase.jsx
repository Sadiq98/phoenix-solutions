

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { commonData } from '../data';
import { ArrowRight, Check } from 'lucide-react';
import { LazyVideo } from '../components/Common';
import { motion, AnimatePresence } from "framer-motion";
import {FullscreenViewer} from '../components/Common';

export const BASE_PATH = import.meta.env.VITE_SITE_PATH || "";



const ShowcasePage = ({ type = "gallery" }) => {
  const location = useLocation();
  const mode = location.pathname.includes('services') ? 'services' : 'automation';

  const contentSource = commonData[mode][type];

  const allItems = contentSource.data || [];
const [activeItem, setActiveItem] = useState(null);

  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(allItems.map(item => item.category))];

  const filteredItems = filter === "All"
    ? allItems
    : allItems.filter(item => item.category === filter);

  const theme = mode === 'automation' ? {
    bg: "bg-stone-100",
    text: "text-stone-900",
    accent: "text-orange-600",
    border: "border-orange-600",
    button: "bg-orange-600 hover:bg-stone-800",
    pill: "bg-orange-50 text-orange-700"
  } : {
    bg: "bg-stone-100",
    text: "text-slate-900",
    accent: "text-cyan-600",
    border: "border-cyan-600",
    button: "bg-cyan-600 hover:bg-stone-900",
    pill: "bg-cyan-50 text-cyan-700"
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-black selection:text-white ${theme.bg} ${theme.text}`}>

      {/* 1. HEADER  */}
      <div className="pt-20 pb-16 px-6 md:px-12 lg:px-24">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 capitalize pt-16">
          {contentSource.title}
        </h1>
        <p className="text-xl opacity-60 max-w-2xl font-light">
          {contentSource.subtitle}
        </p>
      </div>

      {/* 2. FILTERS */}
      {type === "products" ? <div className="px-6 md:px-12 lg:px-24 mb-12 flex flex-wrap gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${filter === cat
              ? `${theme.button} text-white border-transparent`
              : "bg-transparent border-stone-200 hover:border-stone-400 opacity-60 hover:opacity-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div> : ""}


      {/* 3. GRID CONTENT */}
      <div className="px-6 md:px-12 lg:px-24 pb-32 min-h-[30vh]">
        <motion.div
          layout
          className={`grid gap-8 ${type === 'gallery' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={item.id}
              className="group cursor-pointer"
            >
              {/* --- GALLERY VIEW --- */}
              {type === 'gallery' && (
                <div className="flex flex-col gap-2">
                  <div
                    className="relative aspect-[4/4] overflow-hidden rounded-sm bg-stone-200 cursor-zoom-in"
                    onHover={() => setActiveItem(item)}
                  >
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover mix-blend-multiply hover:scale-110 transition-transform duration-700"
                        onClick={() => setActiveItem(item)} />
                    ) : (
                      <LazyVideo
                        src={item.videoUrl || item.src}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="flex justify-between items-start">
                    {/* <div>
                      <h4 className="text-xl font-serif">{item.title}</h4>
                      <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${theme.accent}`}>
                        {item.category}
                      </p>
                    </div> */}
                  </div>
                </div>
              )}

              {/* --- PRODUCT VIEW --- */}
              {type === 'products' && (
                <div className={`flex flex-col md:flex-row bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-500 h-full hover:shadow-xl hover:border-transparent`}>
                  <div className="md:w-2/5 relative overflow-hidden bg-stone-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover mix-blend-multiply hover:scale-110 transition-transform duration-700"
                      onClick={() => setActiveItem(item)} />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 ${theme.pill}`}>
                        {item.subCategory || item.category}
                      </div>
                      <h3 className="text-3xl font-serif mb-3">{item.name}</h3>
                      <p className="text-sm opacity-70 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="space-y-2 mb-8">
                        {item.specs && item.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide opacity-80">
                            <Check size={14} className={theme.accent} /> {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link to={`${BASE_PATH}/#contact`}
                      className="block">
                      <div className="flex items-center justify-between border-t border-stone-100 pt-6">
                        <span className="font-bold text-lg">{item.price}</span>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-[-45deg] ${theme.button}`}>
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
  {activeItem && (
    <FullscreenViewer
      item={activeItem}
      onClose={() => setActiveItem(null)}
    />
  )}
</AnimatePresence>

    </div>
    
  );

  
};

export default ShowcasePage;




// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Check, Loader2, Play } from "lucide-react";
// import { commonData } from "../assets/data";


// const GOOGLE_SCRIPT_API_URL =
//   "";


// const MediaItem = React.memo(({ src, title, showPlay }) => {
//   const isVideo = /\.(mp4|webm|mov)$/i.test(src);

//   if (isVideo) {
//     return (
//       <div className="relative w-full h-full">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="metadata"
//           className="w-full h-full object-cover"
//         >
//           <source src={src} />
//         </video>

//         {showPlay && (
//           <div className="absolute top-4 right-4 bg-black/60 p-2 rounded-full">
//             <Play size={14} className="text-white fill-white" />
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <img
//       src={src}
//       alt={title}
//       loading="lazy"
//       decoding="async"
//       className="w-full h-full object-cover"
//     />
//   );
// });


// const ShowcasePage = ({ type = "gallery" }) => {
//   const location = useLocation();
//   const mode = location.pathname.includes("services")
//     ? "services"
//     : "automation";

//   const localData = commonData[mode][type];

//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("All");

//   /* ===============================
//      DATA LOADING
//   ================================ */
//   useEffect(() => {
//     let active = true;

//     const loadData = async () => {
//       setLoading(true);

//       try {
//         if (type === "gallery") {
//           const res = await fetch(
//             `${GOOGLE_SCRIPT_API_URL}?mode=${mode}&type=gallery`
//           );
//           const data = await res.json();

//           if (active) setItems(Array.isArray(data) ? data : []);
//         } else {
//           // PRODUCTS → LOCAL JSON ONLY
//           if (active) setItems(localData.data || []);
//         }
//       } catch (err) {
//         if (active) setItems([]);
//       } finally {
//         if (active) setLoading(false);
//       }
//     };

//     loadData();
//     return () => (active = false);
//   }, [mode, type, localData]);

//   /* ===============================
//      FILTERS (PRODUCTS)
//   ================================ */
//   const categories = useMemo(() => {
//     if (type !== "products") return [];
//     return ["All", ...new Set(items.map(i => i.category))];
//   }, [items, type]);

//   const filteredItems = useMemo(() => {
//     if (type !== "products") return items;
//     return filter === "All"
//       ? items
//       : items.filter(i => i.category === filter);
//   }, [items, filter, type]);

//   /* ===============================
//      UI
//   ================================ */
//   return (
//     <div className="min-h-screen bg-stone-50 text-stone-900">
//       {/* HEADER */}
//       <header className="pt-32 pb-12 px-6 md:px-12 lg:px-24">
//         <h1 className="text-5xl md:text-7xl font-serif mb-4">
//           {localData.title}
//         </h1>
//         <p className="text-xl opacity-60 max-w-2xl">
//           {localData.subtitle}
//         </p>
//       </header>

//       {/* FILTERS — PRODUCTS */}
//       {!loading && type === "products" && (
//         <div className="px-6 md:px-12 lg:px-24 mb-12 flex flex-wrap gap-3">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition
//                 ${
//                   filter === cat
//                     ? "bg-orange-600 text-white border-transparent"
//                     : "border-gray-300 opacity-60 hover:opacity-100"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* CONTENT */}
//       <section className="px-6 md:px-12 lg:px-24 pb-32">
//         {loading ? (
//           <div className="flex justify-center py-32">
//             <Loader2 className="animate-spin w-8 h-8 text-orange-600" />
//           </div>
//         ) : (
//           <AnimatePresence>
//             {/* GALLERY */}
//             {type === "gallery" && (
//               <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
//                 {items.map((item, idx) => (
//                   <motion.div
//                     key={item.id || idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="break-inside-avoid group"
//                   >
//                     <div className="relative overflow-hidden rounded-xl">
//                       <MediaItem
//                         src={item.src}
//                         title={item.title}
//                         showPlay
//                       />
//                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
//                       <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
//                         <p className="text-xs uppercase tracking-widest text-white/70">
//                           {item.category}
//                         </p>
//                         <h4 className="text-xl font-serif text-white">
//                           {item.title}
//                         </h4>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}

//             {/* PRODUCTS */}
//             {type === "products" && (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {filteredItems.map(item => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition"
//                   >
//                     <div className="flex flex-col md:flex-row h-full">
//                       <div className="md:w-2/5 bg-gray-50">
//                         <MediaItem src={item.image} title={item.name} />
//                       </div>

//                       <div className="md:w-3/5 p-8 flex flex-col">
//                         <span className="text-xs uppercase tracking-widest text-orange-600 mb-2">
//                           {item.category}
//                         </span>
//                         <h3 className="text-3xl font-serif mb-4">
//                           {item.name}
//                         </h3>
//                         <p className="text-sm opacity-70 mb-6">
//                           {item.description}
//                         </p>

//                         <div className="space-y-2 mb-6">
//                           {item.specs?.slice(0, 3).map((s, i) => (
//                             <div
//                               key={i}
//                               className="flex items-center gap-2 text-xs uppercase font-bold opacity-70"
//                             >
//                               <Check size={14} className="text-orange-600" />
//                               {s}
//                             </div>
//                           ))}
//                         </div>

//                         <Link
//                           to=`${BASE_PATH}/#contact`
//                           className="mt-auto flex items-center justify-between border-t pt-4"
//                         >
//                           <span className="font-bold">{item.price}</span>
//                           <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center">
//                             <ArrowRight size={18} />
//                           </div>
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </AnimatePresence>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShowcasePage;






