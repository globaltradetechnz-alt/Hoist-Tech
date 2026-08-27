import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import WhyChooseUs from '../sections/WhyChooseUs';
import ServiceAreas from '../sections/ServiceAreas';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <ServiceAreas />
      <Contact />
      <Footer />
    </div>
  );
}
