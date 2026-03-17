import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofBar from './components/SocialProofBar';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

declare global {
  interface Window {
    AOS: {
      init: (options?: Record<string, unknown>) => void;
      refresh: () => void;
    };
  }
}

export default function App() {
  useEffect(() => {
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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
