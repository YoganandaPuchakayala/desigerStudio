import AppointmentForm from './AppointmentForm';
export default function BookSection() {
  return (
    <section id="book" className="section tint">
      <div className="wrap narrow">
        <h2 className="center">Book Your Appointment</h2>
        <p className="center lead">Tell us what you have in mind. We'll contact you to confirm a time.</p>
        <AppointmentForm />
      </div>
    </section>
  );
}
