import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ArrowRight,
  Send
} from "lucide-react";

import { footerData } from "../assets/data";
import PhoenixLogo from "./UI/Logo";

const iconMap = {
  Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-stone-300 relative overflow-hidden font-sans">
      
      {/* 1. TOP BORDER GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">

          {/* --- COLUMN 1: BRAND & NEWSLETTER (Spans 4 cols) --- */}
          <div className="md:col-span-5 lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-transparent text-stone-950 rounded-full flex items-center justify-center font-serif font-bold text-2xl group-hover:scale-110 transition-transform duration-500">
                <PhoenixLogo variant="icon" />
              </div>
              <span className="text-2xl font-serif text-white tracking-wide">
                {footerData.company.fullName}
              </span>
            </Link>

            <p className="text-stone-400 text-lg leading-relaxed font-light max-w-md">
              {footerData.company.description}
            </p>

            {/* Newsletter Input */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Join our inner circle</h4>
              <div className="flex border-b border-stone-700 focus-within:border-orange-500 transition-colors pb-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent w-full outline-none text-white placeholder-stone-600"
                />
                <button className="text-stone-500 hover:text-orange-500 transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              {footerData.company.social.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-orange-600 hover:bg-orange-600 transition-all duration-300"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* --- LINKS SECTION (Spans 8 cols) --- */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-serif text-xl mb-8">
                {footerData.titles?.quickLinks || "Explore"}
              </h3>
              <ul className="space-y-4">
                {footerData.quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2 text-stone-400 hover:text-orange-500 transition-colors text-sm tracking-wide uppercase"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-orange-500 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-white font-serif text-xl mb-8">
                {footerData.titles?.solutions || "Expertise"}
              </h3>
              <ul className="space-y-4">
                {footerData.solutions.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      className="block text-stone-400 hover:text-white transition-colors text-sm font-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-serif text-xl mb-8">
                {footerData.titles?.contact || "Concierge"}
              </h3>
              <ul className="space-y-6">
                {footerData.contact.map((item, i) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 text-stone-500 group-hover:text-orange-500 transition-colors">
                        {Icon && <Icon size={18} />}
                      </div>
                      <div className="flex flex-col">
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-stone-300 hover:text-white transition-colors text-sm leading-relaxed"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-stone-300 text-sm leading-relaxed">{item.text}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>

        {/* --- GIANT BACKGROUND TEXT (Luxury Element) --- */}
        <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] select-none pointer-events-none opacity-[0.03]">
          <h1 className="text-[20vw] font-serif leading-none text-white">{footerData.company.fullName.split(' ')[0]}</h1>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-stone-500 text-xs uppercase tracking-widest">
            © {currentYear} {footerData.company.fullName}.
          </p>

          <div className="flex gap-8">
            {footerData.legal.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-stone-500 hover:text-orange-500 transition-colors text-xs uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;