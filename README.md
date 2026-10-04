# The Designer Studio by Prasanna

Setup: `npm install` then `npm run dev` (http://localhost:5173). Production: `npm run build`.

- Edit ALL business content (phone, WhatsApp, hours, social links, services, gallery, testimonials) in `src/data/site.js`.
- Replace placeholder photos: put files in `public/images/` and set `src: '/images/name.jpg'` in `site.js`.
- Booking: set `bookingEndpoint` in `site.js` (Formspree/your API). Until then the form only shows the confirmation message; nothing is sent.

Booking: the form opens WhatsApp (`site.whatsapp`) with the details pre-filled; the visitor must tap Send. Fully automatic delivery needs the WhatsApp Business API or a backend.
Logo: `public/images/logo-reference.png` is the client's reference; the navbar recreates it in text. Add a transparent PNG/SVG later if you want the exact artwork.
