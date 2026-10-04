import { waLink } from '../data/site';
export default function CtaBanner() {
  const wa = waLink();
  return (
    <section className="cta">
      <div className="wrap">
        <h2>Let's Create Something Beautiful For You</h2>
        <p>Ready for a design made just for you? Book an appointment and let's bring your vision to life.</p>
        <div className="btn-row center-row">
          <a href="#book" className="btn btn-gold">Book an Appointment</a>
          <a href="#contact" className="btn btn-light">Contact Us</a>
          {wa && <a href={wa} className="btn btn-light" target="_blank" rel="noreferrer">Chat on WhatsApp</a>}
        </div>
      </div>
    </section>
  );
}
