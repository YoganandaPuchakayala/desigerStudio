import Icon from './Icon';
import { waLink } from '../data/site';
// Mobile: sticky bottom bar (Book + WhatsApp). Desktop: floating WhatsApp pill.
export default function FloatingActions() {
  const wa = waLink();
  const waProps = wa ? { href: wa, target: '_blank', rel: 'noreferrer' } : { href: '#contact', title: 'WhatsApp number not added yet' };
  return (
    <div className="float">
      <a href="#book" className="btn btn-gold float-book">Book an Appointment</a>
      <a className="btn float-wa" {...waProps}><Icon name="wa" size={20} /> Chat on WhatsApp</a>
    </div>
  );
}
