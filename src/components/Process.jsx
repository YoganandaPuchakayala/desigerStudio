import { steps } from '../data/site';
export default function Process() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <h2 className="center">The Experience</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
