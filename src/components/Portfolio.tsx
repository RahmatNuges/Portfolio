import React, { useState } from 'react';
import { ExternalLink, Eye, Code, Smartphone, Globe, ArrowRight, Star, Zap } from 'lucide-react';
import { portfolioItems } from './PortfolioList';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'company profile':
        return <Globe className="w-5 h-5" />;
      case 'landing page':
        return <Smartphone className="w-5 h-5" />;
      case 'e-commerce':
        return <Code className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'company profile':
        return 'from-blue-500 to-blue-600';
      case 'landing page':
        return 'from-purple-500 to-purple-600';
      case 'e-commerce':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-purple-100 to-transparent rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-full mb-6 shadow-lg">
            <Eye className="w-4 h-4 mr-2" />
            Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Portfolio <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mengagumkan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Setiap project adalah bukti dedikasi saya dalam menciptakan digital experience 
            yang tidak hanya indah, tetapi juga memberikan hasil yang measurable.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => window.open(item.route, '_blank')}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                {/* Actual Screenshot Image */}
                {item.screenshot ? (
                  <img 
                    src={item.screenshot} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback jika gambar gagal load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                
                {/* Fallback Placeholder */}
                <div className={`w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${item.screenshot ? 'hidden' : 'flex'}`}>
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(item.category)}
                    </div>
                    <p className="text-sm font-medium">Portfolio Image</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">View Project</span>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`inline-flex items-center px-3 py-2 bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-bold rounded-full shadow-lg`}>
                    {getCategoryIcon(item.category)}
                    <span className="ml-2">{item.category}</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {item.description}
                </p>
                
                /* {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'TypeScript', 'Tailwind'].map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300">
                    Lihat Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:ml-3 transition-all duration-200" />
                  </button>
                  
                  {/* Stats */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      <span>2.5k</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-400" />
                      <span>4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getCategoryColor(item.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <Zap className="w-5 h-5 mr-2" />
            Lihat Semua Project
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
