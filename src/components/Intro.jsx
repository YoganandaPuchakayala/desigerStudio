import Img from './Img';
import { images } from '../data/site';

export default function Intro() {
  return (
    <section id="about" className="section">
      <div className="wrap split">
        <Img className="tall" src={images.craft.src} alt={images.craft.alt} label="Craftsmanship photo" />
        <div>
          <h2>Where Your Style Meets Perfect Fit</h2>
          <p>At The Designer Studio by Prasanna, we believe every outfit should feel as beautiful as it looks. From elegant blouses and designer dresses to lehengas and custom creations, every piece is thoughtfully designed and tailored to complement you.</p>
          <p>With personalized attention to measurements, fabric, design and finishing, we create outfits that are uniquely yours.</p>
          <a href="#book" className="btn btn-line">Book an Appointment</a>
        </div>
      </div>
    </section>
  );
}
