import { site, waLink, mapsQuery } from '../data/site';

const Row = ({ label, value, href, ph }) => (
  <div className="row">
    <dt>{label}</dt>
    <dd>{value ? (href ? <a href={href}>{value}</a> : value) : <span className="placeholder">{ph}</span>}</dd>
  </div>
);

export default function Contact() {
  const wa = waLink();
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <h2 className="center">Visit Our Studio</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>{site.name}</h3>
            <address>{site.address.map((l) => <span key={l}>{l}<br /></span>)}</address>
            <dl>
              <Row label="Phone" value={site.phone && site.phoneDisplay} href={`tel:${site.phone}`} ph="Add phone number" />
              <Row label="Hours" value={site.hours} ph="Add business hours" />
            </dl>
            <a className="btn btn-gold" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}>Get Directions</a>
          </div>
          <iframe title="Studio location map" className="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`} />
        </div>
      </div>
    </section>
  );
}
