import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SalesSection from './components/SalesSection';

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <SalesSection />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
