import React from 'react';
import { ExternalLink, Globe, Smartphone, Code, ArrowUpRight } from 'lucide-react';
import { portfolioItems } from './PortfolioList';

const Portfolio = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'company profile':
        return <Globe className="w-4 h-4" />;
      case 'landing page':
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan untuk klien dari berbagai industri.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <a
              key={idx}
              href={item.route}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                {item.screenshot ? (
                  <img
                    src={item.screenshot}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}

                {/* Fallback */}
                <div className={`w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center ${item.screenshot ? 'hidden' : 'flex'}`}>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    {getCategoryIcon(item.category)}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full shadow-sm">
                    {getCategoryIcon(item.category)}
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-slate-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* View Link */}
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  <span>Lihat Website</span>
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
