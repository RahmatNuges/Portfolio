import React, { useState, useEffect } from 'react';
import { Eye, MessageCircle, Code, Zap, ArrowRight, Play, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "Website yang Mengubah Game",
    "Digital Experience yang Memukau",
    "Brand yang Tak Terlupakan"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes - Responsive sizing */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-32 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl sm:blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern - Responsive opacity */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px sm:50px 50px'
          }}></div>
        </div>

        {/* Animated Lines - Responsive positioning */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            {/* Badge - Responsive sizing */}
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium animate-fade-in">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-400" />
              Web Developer Professional
            </div>

            {/* Dynamic Hero Text - Responsive typography */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                <span className="block">Buat Website</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {heroTexts[currentText]}
                </span>
              </h1>
            </div>

            {/* Subtitle - Responsive text sizing */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
              Saya tidak hanya membuat website, saya menciptakan digital experience yang 
              <span className="text-yellow-400 font-semibold"> mengubah cara dunia melihat brand Anda</span>
            </p>

            {/* Social Proof - Responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center">
                <div className="flex -space-x-1 sm:-space-x-2 mr-2 sm:mr-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border border-slate-700"></div>
                  ))}
                </div>
                <span>Ready to Impress</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg mr-2 animate-pulse"></div>
                <span>Modern Tech Stack</span>
              </div>
            </div>

            {/* CTA Buttons - Responsive sizing and layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Lihat Portfolio
                  <Eye className="ml-2 group-hover:ml-3 transition-all duration-200 w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-400/50 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              >
                <span className="flex items-center justify-center">
                  Mulai Proyek
                  <ArrowRight className="ml-2 group-hover:ml-3 transition-all duration-200 w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>

            {/* Trust Indicators - Responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400 px-4 sm:px-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Free Consultation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse delay-500"></div>
                Money Back Guarantee
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Visual - Responsive sizing */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] flex items-center justify-center">
              
              {/* Main Floating Card - Responsive sizing */}
              <div className="relative w-64 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-64 bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl animate-float-smooth">
                {/* Browser Header - Responsive padding */}
                <div className="flex items-center px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-t-2xl sm:rounded-t-3xl border-b border-white/10">
                  <div className="flex space-x-1 sm:space-x-2 mr-2 sm:mr-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-700/50 rounded-lg px-2 py-1 sm:px-3 sm:py-1 text-xs text-gray-300">
                    naikin.xyz
                  </div>
                </div>
                
                {/* Content Preview - Responsive spacing */}
                <div className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="w-24 h-4 sm:w-28 sm:h-5 lg:w-32 lg:h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded animate-pulse"></div>
                  <div className="w-36 h-3 sm:w-40 sm:h-3 lg:w-48 lg:h-4 bg-gray-600 rounded"></div>
                  <div className="w-28 h-3 sm:w-32 sm:h-3 lg:w-36 lg:h-4 bg-gray-600 rounded"></div>
                  <div className="flex space-x-2 sm:space-x-3 mt-3 sm:mt-4 lg:mt-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg sm:rounded-xl animate-bounce"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg sm:rounded-xl"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg sm:rounded-xl animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements - Responsive positioning and sizing */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl animate-float-delayed">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>

              <div className="absolute top-8 -left-3 sm:top-12 sm:-left-4 lg:top-16 lg:-left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl animate-float-slow">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>

              {/* Updated Caption - Responsive sizing */}
              <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3 lg:px-6 lg:py-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-xs sm:text-sm">Portfolio Showcase</span>
                  <span className="text-lg sm:text-xl lg:text-2xl">✨</span>
                </div>
              </div>

              {/* Additional Floating Elements - Responsive sizing */}
              <div className="absolute top-4 right-1/4 sm:top-6 lg:top-8 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg animate-float-slow">
                <Star className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>

              <div className="absolute bottom-12 right-1/3 sm:bottom-16 lg:bottom-20 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg animate-float-delayed">
                <Play className="w-3 h-3 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" />
              </div>

              {/* Animated Particles - Responsive positioning */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full animate-ping"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          .animate-float-smooth {
            animation: floatSmooth 6s ease-in-out infinite;
          }
          @keyframes floatSmooth {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
          }
          .animate-float-delayed {
            animation: floatDelayed 6s ease-in-out infinite;
            animation-delay: 2s;
          }
          @keyframes floatDelayed {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-2deg); }
          }
          .animate-float-slow {
            animation: floatSlow 8s ease-in-out infinite;
            animation-delay: 4s;
          }
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(1deg); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;