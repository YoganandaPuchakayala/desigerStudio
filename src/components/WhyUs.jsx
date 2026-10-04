import Icon from './Icon';
import { why } from '../data/site';
export default function WhyUs() {
  return (
    <section id="why" className="section tint">
      <div className="wrap">
        <h2 className="center">Crafted With Care. Designed For You.</h2>
        <div className="grid-4">
          {why.map((w) => (
            <div key={w.title} className="feature">
              <Icon name={w.icon} />
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
