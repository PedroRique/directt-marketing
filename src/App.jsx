import Header from './components/Header';
import MainSection from './components/MainSection';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SalesSection from './components/SalesSection';
import ServiceSection from './components/ServiceSection';

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <SalesSection />
      <ServiceSection />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
