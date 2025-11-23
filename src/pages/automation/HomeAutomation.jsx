import React from 'react';
import { Link } from 'react-router-dom';
import { homeAutomationData } from '../../assets/data';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import { Zap, Shield, Thermometer, Mic, Home, ArrowRight } from 'lucide-react';

const HomeAutomation = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeAutomationData.hero.image}
            alt="Smart Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-600 rounded-full mb-6">
              <span className="text-orange-500 font-semibold text-sm">Phoenix Home Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {homeAutomationData.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-orange-500 font-semibold mb-6">
              {homeAutomationData.hero.subtitle}
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {homeAutomationData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/home-automation/solutions"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View Solutions</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/home-automation/products"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <Zap className="text-orange-500" size={24} />
                <span className="text-sm font-medium">Energy Efficient</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-orange-500" size={24} />
                <span className="text-sm font-medium">Secure & Safe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mic className="text-orange-500" size={24} />
                <span className="text-sm font-medium">Voice Control</span>
              </div>
              <div className="flex items-center space-x-3">
                <Home className="text-orange-500" size={24} />
                <span className="text-sm font-medium">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Smart Home Automation?</h2>
            <p className="text-xl text-gray-400">Transform your home into an intelligent living space</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Energy Savings</h3>
              <p className="text-gray-400">Reduce energy consumption by up to 30% with intelligent automation and scheduling.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enhanced Security</h3>
              <p className="text-gray-400">Monitor and control your home security from anywhere with smart locks and cameras.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Thermometer size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Comfort Control</h3>
              <p className="text-gray-400">Maintain perfect temperature and ambiance with automated climate control.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Mic size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Voice Commands</h3>
              <p className="text-gray-400">Control everything with simple voice commands through Alexa, Google, or Siri.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-400">Comprehensive smart home automation systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeAutomationData.solutions.slice(0, 4).map((solution) => (
              <div key={solution.id} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-video relative">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <Link
                    to="/home-automation/solutions"
                    className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/home-automation/solutions"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Automate Your Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and discover how smart home automation can transform your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/home-automation/contact"
              className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/home-automation/products"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default HomeAutomation;