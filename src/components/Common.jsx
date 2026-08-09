import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'
import { ctaSecData, contactConfig, phoenixData } from '../data';
import {
  Zap, Server, Smartphone, Mic, Wifi, Settings,
  ArrowRight, CheckCircle2, Play, Shield, Sun, Wind,
  Globe, Lock, Calendar, Cpu, Star, User,
  Database, Activity, Layers, Briefcase, DollarSign, Lightbulb,
  Layout, HardDrive, Quote, Heart, Home, Users, MoveRight, Check, ArrowUp, ArrowUpRight,XCircle
} from 'lucide-react';
export const BASE_PATH = import.meta.env.VITE_SITE_PATH || "";
    export const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;
     export const web3FormsUrl = import.meta.env.VITE_WEB3FORMS_URL;



// 1. FadeIn Animation Wrapper
export const FadeIn = ({ children, delay = 0, className = "" }) => (
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

// 2. Standard Section Header
export const SectionHeader = ({ title, subtitle, align = "center", theme = "orange-600" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <FadeIn>
      <span className={`font-bold tracking-[0.3em] uppercase text-xs mb-4 block text-${theme}`}>
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1]  text-stone-900">
        {title}
      </h2>
    </FadeIn>
  </div>
);

// 3. Cinematic Video Section
export const CinematicVideo = ({ videoUrl, title, subtitle, overlayOpacity = 0.6 }) => {
  return (
    <section className="relative h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center">
      <div className={`absolute inset-0 opacity-${overlayOpacity * 100}`}>
        <VideoPlayer src={videoUrl} />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6">
        <FadeIn>
          <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tight">{title}</h2>
          <p className="text-stone-300 text-lg tracking-widest uppercase">{subtitle}</p>
        </FadeIn>
      </div>
    </section>
  );
};

// 4. Optimized Video Player (Auto-play only when in view)
export const VideoPlayer = ({ src, className = "w-full h-full object-cover" }) => (
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    className={className}
  >
    <source src={src} type="video/mp4" />
  </video>
);


export const CtaSec = ({ mode = 'automation' }) => {
  const data = ctaSecData[mode];

  const titleParts = data.title.split(", ");
  const firstPart = titleParts[0];
  const secondPart = titleParts[1];

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8">
          {firstPart}, <span className={`italic ${data.accent}`}>{secondPart}</span>
        </h2>

        <p className="text-xl text-stone-500 mb-12 font-light max-w-2xl mx-auto">
          {data.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to={`${BASE_PATH}/#contact`} className={`px-12 py-5 ${data.buttonColor} text-white font-bold tracking-[0.2em] uppercase hover:bg-stone-800 transition-all duration-300 `}
          >
            {data.cta1}
          </Link>

          <Link to={data.galleryLink}>
            <button className="w-full px-12 py-5 bg-white border border-stone-400 text-stone-900 font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all duration-300">
              {data.cta2}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};


// --- ICON MAPPER ---
export const IconRenderer = ({ iconName, size = 24, className = "" }) => {
  const icons = {
    Settings, Wifi, Mic, Smartphone, Zap, Server, Shield, Home, Lightbulb,
    Users, Briefcase, DollarSign, Layers, Cpu, Globe
  };
  const Icon = icons[iconName] || Settings;
  return <Icon size={size} className={className} />;
};


// --- OPTIMIZED VIDEO COMPONENT  ---
export const LazyVideo = ({ src, className, poster, active }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {isInView ? (
        <video
          key={active}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-gray-900 animate-pulse" />
      )}
    </div>
  );
};

// --- 1. HERO SECTION ---

export const HeroBackground = ({ videoUrl, images = [], slideDelay = 5000 }) => {
  const [index, setIndex] = useState(0);
  const isVideo = Boolean(videoUrl);

  useEffect(() => {
    if (isVideo || images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, slideDelay);

    return () => clearInterval(interval);
  }, [images, slideDelay, isVideo]);

  /* ---------- VIDEO MODE ---------- */
  if (isVideo) {
    return (
      <>
        <LazyVideo
          src={videoUrl}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
      </>
    );
  }

  /* ---------- IMAGE SLIDESHOW MODE ---------- */
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
    </>
  );
};


export const HeroSection = ({ data, scrollId, theme }) => {
  return (
    <section className="relative h-screen pt-16 w-full flex items-center justify-center overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <HeroBackground
          videoUrl={data.videoUrl}
          images={data.images}
          slideDelay={data.slideDelay}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <FadeIn>
          <div className="mb-6 inline-block border border-white/20 backdrop-blur-md px-6 py-2 rounded-full">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white">
              {data.badge}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-light mb-8 tracking-tighter text-white leading-[0.95]">
            {data.title.split(" ").slice(0, 3).join(" ")}
            <br className="hidden md:block" />
            <span className={`font-serif italic bg-${theme} bg-clip-text text-transparent`}>
              {data.title.split(" ").slice(3).join(" ")}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto font-light mb-12">
            {data.subtitle}
          </p>
        </FadeIn>

        {data.cta && (
          <FadeIn delay={0.6}>
            <button
              onClick={() =>
                document.getElementById(scrollId)?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-10 py-4 bg-${theme} text-white font-bold tracking-widest uppercase text-xs transition-all duration-500 rounded-full`}
            >
              {data.cta}
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  );
};


// --- 2.  FEATURE GRID ---
export const FeatureGrid = ({ features, theme }) => {

  return (
    <section className="relative z-30 -mt-24 px-6 md:px-8 lg:px-12 pb-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative min-h-[240px] lg:h-[240px] rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-stone-900 border border-white/10"
            >
              {/* IMAGE — DEFAULT */}
              <img
                src={feat.image}
                alt={feat.title}
                loading="lazy"
                className="
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-700
              group-hover:opacity-0 z-0
            "
              />

              {/* VIDEO — HOVER */}
              {feat.videoUrl && (
                <LazyVideo
                  src={feat.videoUrl}
                  className="
                absolute inset-0 w-full h-full object-cover
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700 z-10
              "
                />
              )}

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 z-20" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
                {/* ICON CONTAINER */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md  bg-black/20 border-white/10 text-white">
                  {typeof feat.icon === "string" ? (
                    <IconRenderer iconName={feat.icon} size={20} />
                  ) : (
                    <feat.icon size={20} />
                  )}
                </div>

                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div
                    className="h-[2px] w-12 mb-4 origin-left group-hover:w-full transition-all duration-700"
                    style={{ backgroundColor: theme === 'orange' ? '#ea580c' : '#ffffff' }}
                  />

                  <h3 className="text-xl font-serif font-bold text-white mb-2 leading-tight">
                    {feat.title}
                  </h3>

                  <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const regex = {
    name: /^[A-Za-z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9]{10}$/
  };

  const validate = () => {
    if (!regex.name.test(formData.name.trim())) {
      setErrorMessage("Please enter a valid name.");
      return false;
    }

    if (!regex.phone.test(formData.phone.trim())) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!regex.email.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage("Message should contain at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 4000);

      return;
    }
    setLoading(true);
    setResult("Sending...");

    try {
      const data = new FormData();
  

      data.append("access_key", web3FormsKey);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("message", formData.message);

      // Optional
      data.append("subject", "New Contact Form Submission");
      data.append("from_name", "Phoenix Solutions");

      const response = await fetch(web3FormsUrl, {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      if (res.success) {
        setResult("Success");

        setShowSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        setResult(res.message || "Something went wrong.");
        setErrorMessage(res.message || "Unable to submit your enquiry.");
        setShowError(true);

        setTimeout(() => {
          setShowError(false);
        }, 4000);
      }
    } catch (err) {
      console.error(err);
      setResult("Network Error");
      setErrorMessage("Unable to connect to the server. Please try again.");
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const inputClass =
    "w-full border-b border-stone-300 py-3 text-base md:text-lg focus:border-orange-600 focus:outline-none bg-transparent placeholder:text-stone-400 font-serif transition-colors";
  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={contactConfig.form.placeholders.name} required className={inputClass} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={contactConfig.form.placeholders.phone} required className={inputClass} />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={contactConfig.form.placeholders.email} required className={inputClass} />
        </div>
        <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder={contactConfig.form.placeholders.message} required className={`${inputClass} resize-none`} />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-5 bg-stone-900 text-white font-bold uppercase tracking-[0.25em] hover:bg-orange-600 transition-all duration-500 flex items-center justify-between px-8 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>
            {loading ? "Sending..." : contactConfig.form.submitBtn}
          </span>

          {!loading && <ArrowRight />}
        </button>
      </form>
      {showSuccess && (
        // <div className="absolute inset-0 flex items-center justify-center bg-white  h-50 backdrop-blur-sm z-50 border border-1 border-stone-100 rounded-xl shadow-xl">
        //   <div className="text-center">
        //     <CheckCircle2 className="text-green-500 w-16 h-16 mx-auto mb-4" />
        //     <h3 className="text-stone-900 text-2xl font-serif mb-2">{contactConfig.form.successTitle}</h3>
        //     <p className="text-stone-600">{contactConfig.form.successMsg}</p>
        //   </div>
        // </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}

        >
          <div className="
  absolute inset-0 z-50 
  flex items-center justify-center 
">
            <div className="
    relative 
    max-w-md w-full mx-6
    rounded-2xl 
    border border-stone-300 
    bg-white backdrop-blur-xl 
    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
    p-4
    text-center
  ">
              {/* Icon */}
              <div className="
      w-16 h-16 mx-auto mb-6 
      rounded-full 
      flex items-center justify-center
      bg-green-500/10
      border border-green-500/20
    ">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-3">
                {contactConfig.form.successTitle}
              </h3>

              {/* Message */}
              <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                {contactConfig.form.successMsg}
              </p>

              {/* Accent line */}
              <div className="mt-6 h-[2px] w-12 mx-auto bg-orange-500/80 rounded-full" />
            </div>
          </div>

        </motion.div>

      )}
      {showError && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="absolute inset-0 z-50 flex items-center justify-center">

            <div className="relative max-w-md w-full mx-6 rounded-2xl border border-red-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 text-center">

              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">

                <XCircle className="w-8 h-8 text-red-600" />

              </div>

              <h3 className="font-serif text-2xl text-stone-900">
                Validation Error
              </h3>

              <p className="mt-3 text-stone-600">
                {errorMessage}
              </p>

              <button
                onClick={() => setShowError(false)}
                className="mt-6 rounded-xl bg-stone-900 px-6 py-3 text-white transition hover:bg-orange-600"
              >
                Close
              </button>

            </div>

          </div>
        </motion.div>
      )}
    </div>
  );
};




export const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  }, [hash]);

  return null;
};


export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-28 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        bg-white-200 text-orange-600 hover:text-white hover:bg-orange-600 border border-white/20 backdrop-blur-sm
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </button>
  );
};






export const OfficeMap = ({ data }) => {
  return (
    <div className="w-full h-full overflow-hidden shadow-lg border border-stone-200">

      <iframe
        src={data.contact.mapData}
        width="100%" height="100%" style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />


    </div>
  );
};


export const FullscreenViewer = ({ item, onClose }) => {
  if (!item) return null;

  const isVideo = item.videoUrl && !item.src;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 text-white text-4xl"
        onClick={onClose}
      >
        ×
      </button>

      {/* Media */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="max-w-[95vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <video
            src={item.videoUrl}
            controls
            autoPlay
            className="max-h-[90vh] rounded-lg"
          />
        ) : (
          <img
            src={item.src || item.image}
            alt={item.title || item.name}
            className="max-h-[90vh] rounded-lg object-contain"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

