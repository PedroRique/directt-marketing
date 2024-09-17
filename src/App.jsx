import Header from './components/Header';
import MainSection from './components/MainSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SalesSection from './components/SalesSection';
import ServiceSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <SalesSection />
      <ServiceSection />
      <ContactSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
