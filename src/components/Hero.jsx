import Img from './Img';
import { images } from '../data/site';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <h1>Designed for You.<br /><em>Tailored to Perfection.</em></h1>
          <p className="lead">Elegant designs, personalized fitting, and premium craftsmanship — created especially for you.</p>
          <div className="btn-row">
            <a href="#book" className="btn btn-gold">Book an Appointment</a>
            <a href="#work" className="btn btn-line">Explore Our Designs</a>
          </div>
          <p className="script">Where Style is Stitched to Perfection</p>
        </div>
        <Img className="hero-img" src={images.hero.src} alt={images.hero.alt} label="Hero photo: model in designer lehenga" />
      </div>
      <a href="#about" className="scroll" aria-label="Scroll to next section"><span /></a>
    </section>
  );
}
