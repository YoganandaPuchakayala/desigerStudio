import { site, waLink } from '../data/site';
import Logo from './Logo';

export default function Footer() {
  const links = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Our Work', '#work'], ['Contact', '#contact'], ['Book an Appointment', '#book']];
  const social = [['Instagram', site.social.instagram], ['WhatsApp', site.social.whatsapp || waLink()]];
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <div>
          <p className="brand foot-brand">{site.name}</p>
          <p className="script small">Where Style is Stitched to Perfection</p><p>{site.tagline}</p>
          <p>Ramnagar, ATP</p>
        </div>
        <nav aria-label="Footer"><ul>{links.map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}</ul></nav>
        <ul>
          {social.map(([l, u]) => <li key={l}>{u ? <a href={u} target="_blank" rel="noreferrer">{l}</a> : <span className="placeholder">{l} (add link)</span>}</li>)}
        </ul>
      </div>
      <p className="copy">© 2026 The Designer Studio by Prasanna. All rights reserved.</p>
    </footer>
  );
}
