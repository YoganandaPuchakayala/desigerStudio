import { useState } from 'react';
import { site, serviceOptions, waLink, buildBookingMessage } from '../data/site';

const empty = { name: '', phone: '', email: '', date: '', time: '', service: '', occasion: '', notes: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your full name.';
  if (!/^[+\d][\d\s-]{7,14}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.';
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (!v.date) e.date = 'Choose a preferred date.';
  if (!v.service) e.service = 'Select a service.';
  return e;
}

// Defined outside the form so inputs keep focus while typing.
function Field({ id, label, optional, error, children }) {
  return (
    <div className={`field ${error ? 'bad' : ''}`}>
      <label htmlFor={id}>{label}{optional && <small> (optional)</small>}</label>
      {children}
      {error && <span className="err" id={`${id}-e`}>{error}</span>}
    </div>
  );
}

export default function AppointmentForm() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const a = (id) => ({ id, value: v[id], onChange: (e) => setV({ ...v, [id]: e.target.value }), 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `${id}-e` : undefined });
  const f = (id, label, opts = {}) => ({ id, label, error: errors[id], ...opts });

  function submit(ev) {
    ev.preventDefault();
    const err = validate(v);
    setErrors(err);
    if (Object.keys(err).length) return;
    // Optional extra copy to a backend/Formspree (fire-and-forget).
    if (site.bookingEndpoint) {
      fetch(site.bookingEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) }).catch(() => {});
    }
    // Opens WhatsApp with the details pre-filled; the visitor taps Send.
    const link = waLink(buildBookingMessage(v));
    if (link) window.open(link, '_blank', 'noopener');
    setDone(true);
  }

  if (done) {
    const link = waLink(buildBookingMessage(v));
    return (
      <div className="thanks" role="status">
        <h3>Thank you for choosing The Designer Studio by Prasanna.</h3>
        <p>Your appointment request is ready. Tap Send in WhatsApp to deliver it to us, and we will contact you to confirm your appointment.</p>
        {link
          ? <a className="btn btn-gold" href={link} target="_blank" rel="noreferrer">Open WhatsApp to send</a>
          : <p className="placeholder">Add the WhatsApp number in site.js to enable sending.</p>}
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <Field {...f('name', 'Full Name')}><input {...a('name')} autoComplete="name" /></Field>
      <Field {...f('phone', 'Phone Number')}><input {...a('phone')} type="tel" autoComplete="tel" inputMode="tel" /></Field>
      <Field {...f('email', 'Email', { optional: true })}><input {...a('email')} type="email" autoComplete="email" /></Field>
      <Field {...f('service', 'Service Required')}>
        <select {...a('service')}><option value="">Select a service</option>{serviceOptions.map((s) => <option key={s}>{s}</option>)}</select>
      </Field>
      <Field {...f('date', 'Preferred Date')}><input {...a('date')} type="date" min={today} /></Field>
      <Field {...f('occasion', 'Occasion', { optional: true })}><input {...a('occasion')} /></Field>
      <div className="full"><Field {...f('notes', 'Additional Requirements / Design Notes', { optional: true })}><textarea {...a('notes')} rows="4" /></Field></div>
      <div className="full"><button className="btn btn-gold" disabled={busy}>{busy ? 'Sending…' : 'Request Appointment'}</button></div>
    </form>
  );
}
