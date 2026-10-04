import { useState } from 'react';
import { nav } from '../data/site';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="brand" onClick={close} aria-label="The Designer Studio by Prasanna, home"><Logo /></a>
        <nav id="menu" className={`menu ${open ? 'open' : ''}`} aria-label="Main">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={close}>{n.label}</a>)}
          <a href="#book" className="btn btn-gold menu-cta" onClick={close}>Book an Appointment</a>
        </nav>
        <a href="#book" className="btn btn-gold nav-cta">Book an Appointment</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
