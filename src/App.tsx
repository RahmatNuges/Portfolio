import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhyWebsite from './components/WhyWebsite';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import AuditSection from './components/AuditSection';
import ForWhoSection from './components/ForWhoSection';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ThankYou from './components/ThankYou';

declare global {
  interface Window {
    AOS: {
      init: (options?: Record<string, unknown>) => void;
      refresh: () => void;
    };
  }
}

export default function App() {
  const [isThankYou, setIsThankYou] = useState(false);

  useEffect(() => {
    // Check path, search queries, or hash parameters for thank-you
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    
    if (path.includes('thank-you') || hash.includes('thank-you') || search.includes('thank-you')) {
      setIsThankYou(true);
    }

    // Initialize AOS after mount
    if (window.AOS) {
      window.AOS.init({
        duration: 400,
        easing: 'ease-out',
        once: true,
        offset: 60,
      });
    }

    // Handle hash scrolling on page load (e.g. #harga, #audit, #layanan)
    const scrollToHash = (behavior: ScrollBehavior = 'smooth') => {
      const currentHash = window.location.hash;
      if (!currentHash) return;
      const targetId = decodeURIComponent(currentHash.replace('#', ''));
      if (!targetId) return;

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior });
      }
    };

    if (window.location.hash) {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }

      // Initial scroll attempts to compensate for SPA mounting & image loading
      scrollToHash('auto');
      const t1 = setTimeout(() => scrollToHash('smooth'), 120);
      const t2 = setTimeout(() => scrollToHash('smooth'), 450);
      const t3 = setTimeout(() => scrollToHash('smooth'), 900);

      const onLoad = () => scrollToHash('smooth');
      window.addEventListener('load', onLoad);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        window.removeEventListener('load', onLoad);
      };
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (!currentHash) return;
      const targetId = decodeURIComponent(currentHash.replace('#', ''));
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isThankYou) {
    return <ThankYou />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WhyWebsite />
        <Services />
        <Portfolio />
        <Pricing />
        <HowItWorks />
        <AuditSection />
        <ForWhoSection />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
