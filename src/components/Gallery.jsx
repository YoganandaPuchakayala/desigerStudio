import { useEffect, useState } from 'react';
import Img from './Img';
import { gallery, categories } from '../data/site';

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const [active, setActive] = useState(null);
  const items = gallery.filter((g) => cat === 'All' || g.category === cat);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((a) => (a + 1) % items.length);
      if (e.key === 'ArrowLeft') setActive((a) => (a - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, items.length]);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <h2 className="center">Our Designs</h2>
        <div className="filters" role="group" aria-label="Filter designs">
          {categories.map((c) => (
            <button key={c} className={c === cat ? 'on' : ''} aria-pressed={c === cat} onClick={() => { setCat(c); setActive(null); }}>{c}</button>
          ))}
        </div>
        <div className="masonry">
          {items.map((g, i) => (
            <button key={g.title} className="tile" onClick={() => setActive(i)} aria-label={`Open ${g.title}`}>
              <Img src={g.src} alt={g.title} label={g.title} />
            </button>
          ))}
        </div>
      </div>
      {active !== null && items[active] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[active].title} onClick={() => setActive(null)}>
          <button className="lb-close" aria-label="Close" onClick={() => setActive(null)}>×</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Img src={items[active].src} alt={items[active].title} label={items[active].title} />
            <figcaption>{items[active].title}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
