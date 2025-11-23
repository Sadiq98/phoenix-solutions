import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getNavStyle = () => {
    switch(location.pathname) {
      case '/automation': return 'bg-stone-900/80 border-stone-800 text-orange-50';
      case '/services': return 'bg-black/90 border-cyan-900/50 text-cyan-50 font-mono';
      default: return 'bg-slate-950/80 border-slate-800 text-slate-50';
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 duration-500 ${getNavStyle()}`}>
      <div className=" mx-auto px-10 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <div className="text-8xl font-bold" />
          Phoenix Solutions
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <Link to="/automation" className="hover:text-orange-400 transition-colors">Smart Home</Link>
          <Link to="/services" className="hover:text-orange-400  transition-colors">IT Services</Link>
          <Link to="/" className="hover:text-orange-400 transition-colors">About Us</Link>
          <button className="px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-colors">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link to="/" onClick={() => setIsOpen(false)}>Hub</Link>
              <Link to="/automation" onClick={() => setIsOpen(false)}>Smart Home</Link>
              <Link to="/services" onClick={() => setIsOpen(false)}>IT Services</Link>
              <Link to="/" onClick={() => setIsOpen(false)}>About Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;