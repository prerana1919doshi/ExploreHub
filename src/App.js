/*import React from 'react'
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Footer from './components/Footer';
import Testmonials from './components/Testmonials';

export default function App() {
  return (
    
    <><Navbar />
    <ScrollToTop />
    <Hero />
    <Services />
    <Recommend />
    
    <Testmonials />
    <Footer />
    </>
  )
}
*/

import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testmonials";
import scrollreveal from "scrollreveal";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </div>
  );
}