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
} from "lucide-react";

import { footerData } from "../assets/data";

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-8xl mx-auto px-12 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {footerData.company.shortName}
                </span>
              </div>
              <span className="text-white font-bold text-lg">
                {footerData.company.fullName}
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              {footerData.company.description}
            </p>

            {/* Social */}
            <div className="flex space-x-4">
              {footerData.company.social.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={i}
                    href={item.link}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {footerData.titles?.quickLinks || "Quick Links"}
            </h3>

            <ul className="space-y-2">
              {footerData.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {footerData.titles?.solutions || "Our Solutions"}
            </h3>

            <ul className="space-y-2">
              {footerData.solutions.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {footerData.titles?.contact || "Contact Us"}
            </h3>

            <ul className="space-y-3">
              {footerData.contact.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <li key={i} className="flex items-start space-x-3">
                    {Icon && <Icon size={18} className="text-orange-500 mt-1" />}

                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">{item.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {footerData.company.fullName}. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {footerData.legal.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-gray-400 hover:text-white transition-colors text-sm"
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
