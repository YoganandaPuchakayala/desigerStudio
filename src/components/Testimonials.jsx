import { testimonials } from '../data/site';
export default function Testimonials() {
  return (
    <section className="section tint">
      <div className="wrap">
        <h2 className="center">What Our Clients Say</h2>
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="quote">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
