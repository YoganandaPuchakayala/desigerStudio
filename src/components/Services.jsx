import ServiceCard from './ServiceCard';
import { services } from '../data/site';
export default function Services() {
  return (
    <section id="services" className="section tint">
      <div className="wrap">
        <h2 className="center">What We Create</h2>
        <div className="grid-services">{services.map((s) => <ServiceCard key={s.title} {...s} />)}</div>
      </div>
    </section>
  );
}
