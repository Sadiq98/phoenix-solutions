// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { navData } from '../assets/data'; 
// // import {PhoenixLogo} from '../assets/data';

// export const PhoenixLogo = ({ className = "text-orange-600" }) => {
//   return (
//     <div className={`flex items-center gap-2 ${className}`}>
//       <svg 
//         width="40" 
//         height="40" 
//         viewBox="0 0 40 40" 
//         fill="none" 
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-8 h-8 md:w-10 md:h-10"
//       >
//         <path 
//           d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z" 
//           fill="currentColor" 
//           fillOpacity="0.1"
//         />
//         <path 
//           d="M20 8c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm-2 18c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm6-6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" 
//           fill="currentColor"
//         />
//         <path 
//           d="M20 10L15 25H25L20 10Z" 
//           fill="currentColor"
//         />
//       </svg>
//       <span className="text-2xl md:text-2xl font-bold uppercase hidden sm:block">
//         Phoenix
//       </span>
//     </div>
//   );
// };
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Default to "/" if path not found exactly
//   const config = navData[location.pathname] || navData["/"];

//   // 2. Scroll Effect Listener
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled ? "py-2 bg-gradient-to-b from-gray-900 to-black/20" : "py-4 bg-gradient-to-b from-gray-900 to-black/0"
//       }`}
//     >
//       {/* Background Container (Applies the blur/color) */}
//       <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? config.containerClass : "bg-transparent"}`} />

//       <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        
//         {/* --- LEFT: LOGO --- */}
//         <Link to="/" className="relative z-50">
//           <PhoenixLogo className={config.logoColor} />
//         </Link>

//         {/* --- CENTER: DESKTOP LINKS (Floating Pill Design) --- */}
//         <nav className="hidden md:flex items-center gap-1">
//           {config.links.map((link, index) => (
//             <Link 
//               key={index} 
//               to={link.path}
//               className={`px-5 py-2 rounded-full text-md font-bold uppercase tracking-wider transition-all duration-300 ${config.linkClass}`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* --- RIGHT: CTA & MOBILE TOGGLE --- */}
//         <div className="flex items-center gap-4">
//           {/* CTA Button */}
//           <Link 
//             to="/contact"
//             className={`hidden md:flex px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${config.cta.class}`}
//           >
//             {config.cta.text}
//           </Link>

//           {/* Mobile Toggle Button */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)} 
//             className={`md:hidden p-2 rounded-full ${config.logoColor} hover:bg-white/10 transition-colors`}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* --- MOBILE MENU (Full Screen Overlay) --- */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className={`absolute top-full left-0 w-full h-screen md:hidden border-t border-white/10 ${config.containerClass}`}
//           >
//             <div className="flex flex-col p-8 gap-6 text-center mt-10">
//               {config.links.map((link, index) => (
//                 <Link 
//                   key={index} 
//                   to={link.path} 
//                   onClick={() => setIsOpen(false)}
//                   className={`text-2xl font-bold ${config.linkClass}`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Link 
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`mt-8 w-full py-4 rounded-xl font-bold uppercase text-xl ${config.cta.class}`}
//               >
//                 {config.cta.text}
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navData } from '../assets/data'; 
import PhoenixLogo from '../components/UI/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const config = navData[location.pathname] || navData["/"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 shadow-sm" : "py-6 bg-gradient-to-b from-gray-800 to-black/5"
      }`}
    >
      <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? config.containerClass : "bg-transparent"}`} />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        
        {/* --- LOGO --- */}
        <Link to="/" className="relative z-50 group">
          <PhoenixLogo 
            className={`transition-colors duration-300 ${
              scrolled ? config.logoColor : "text-white" 
            }`} 
          />
        </Link>

        {/* --- CENTER LINKS --- */}
        <nav className="hidden md:flex items-center gap-2  px-3 py-2">
          {config.links.map((link, index) => (
            <Link 
              key={index} 
              to={link.path}
              className={`px-6 py-2 text-md font-bold uppercase tracking-widest transition-all duration-300 ${config.linkClass}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* --- RIGHT ACTIONS --- */}
        <div className="flex items-center gap-6">
          <Link 
            to="/contact"
            className={`hidden md:flex px-8 py-3 rounded-sm text-md font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
              scrolled 
                ? "border-transparent " + config.cta.class 
                : "border-white/30 text-white hover:bg-white hover:text-black"
            }`}
          >
            {config.cta.text}
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-2 ${scrolled ? config.logoColor : "text-white"}`}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full h-screen md:hidden border-t border-white/10 ${config.containerClass}`}
          >
            <div className="flex flex-col p-10 gap-8 text-center mt-10">
              {config.links.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-serif ${config.linkClass}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`mt-8 w-full py-5 rounded-sm font-bold uppercase tracking-widest text-sm ${config.cta.class}`}
              >
                {config.cta.text}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;