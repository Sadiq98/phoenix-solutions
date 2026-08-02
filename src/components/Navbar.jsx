import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navData } from "../assets/data";
import PhoenixLogo from "../assets/Logo/Logo.png";

export const BASE_PATH = import.meta.env.VITE_SITE_PATH || "";

/* ---------------- DESKTOP NAV ---------------- */

const DesktopNav = ({ config }) => (
  <nav className="hidden md:flex items-center gap-1">
    {config.links.map((link, index) => (
      <Link
        key={index}
        to={link.path}
        className={`
          relative px-6 
          font-serif text-[18px] uppercase tracking-[0.28em]
          transition-all duration-300
          after:absolute after:left-1/2 after:-bottom-1 after:h-[1px]
          after:w-0 after:-translate-x-1/2 after:transition-all after:duration-300
          hover:after:w-8
          ${config.linkClass} ${config.underline}
        `}
      >
        {link.name}
      </Link>
    ))}
  </nav>
);

/* ---------------- MOBILE MENU ---------------- */

const MobileMenu = ({ isOpen, config, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="absolute top-full left-0 w-full h-screen md:hidden
                   bg-black/95 backdrop-blur-2xl border-t border-white/10"
      >
        <div className="flex flex-col items-center justify-center gap-10 h-[80vh]">
          {config.links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={onClose}
              className="text-4xl font-serif tracking-wide text-white hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to={`${BASE_PATH}/#contact`}
            onClick={onClose}
            className={`mt-10 px-14 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-sm transition-all ${config.cta.class}`}
          >
            {config.cta.text}
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ---------------- MAIN NAVBAR ---------------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const config = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith(`${BASE_PATH}/automation`)) return navData[`${BASE_PATH}/automation`];
    if (path.startsWith(`${BASE_PATH}/services`)) return navData[`${BASE_PATH}/services`];
    return navData[`${BASE_PATH}/`];
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled ? "bg-gradient-to-b from-black to-gray-900 backdrop-blur-xl border-b border-white/10" : "bg-gradient-to-b from-black to-black/60"}
      `}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-[88px] flex items-center justify-between">

        {/* LOGO */}
        <Link  to={`${BASE_PATH}/`} onClick={() => setIsOpen(false)} className="relative z-50">
          <img
            src={PhoenixLogo}
            alt="Phoenix Logo"
            className="
              w-[78px]
              transition-transform duration-300
              hover:scale-110
              drop-shadow-[0_6px_18px_rgba(255,120,40,0.6)]
            "
          />
        </Link>

        {/* DESKTOP NAV */}
        <DesktopNav config={config} />

        {/* CTA + MOBILE TOGGLE */}
        <div className="flex items-center gap-6">
          <Link
            to={`${BASE_PATH}/#contact`}
            className={`
              hidden md:flex px-8 py-3 rounded-full
              text-xs font-bold uppercase tracking-[0.3em]
              transition-all duration-500
              ${config.cta.class}
            `}
          >
            {config.cta.text}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} config={config} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Navbar;
