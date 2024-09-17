import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SalesSection from './components/SalesSection';
import ServiceSection from './components/ServiceSection';
import TestimonialSection from './components/TestimonialSection';

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <SalesSection />
      <ServiceSection />
      <ContactSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default App;
