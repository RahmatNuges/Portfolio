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
