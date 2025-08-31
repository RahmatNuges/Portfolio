import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Layout utama untuk halaman utama
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Hero />
              <About />
              <Portfolio />
              {/* <Services />
              <Testimonials /> */}
              <Contact />
            </MainLayout>
          }
        />
        {/* Halaman contoh TIDAK menggunakan MainLayout */}
      </Routes>
    </Router>
  );
}

export default App;
