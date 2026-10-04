import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import BookSection from './components/BookSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Intro /><Services /><Gallery /><WhyUs /><Process /><Testimonials />
        <CtaBanner /><Contact /><BookSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
