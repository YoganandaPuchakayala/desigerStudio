// ALL business content lives here. Edit this file, not the components.
// Empty strings = "not provided yet": the UI shows a placeholder and hides the link.
export const site = {
  name: 'The Designer Studio by Prasanna',
  tagline: 'Perfect Fit. Premium Fabrics. Elegant Designs.',
  address: ['Opposite to Ibacco,', 'Beside Yadav Function Hall,', 'Ramnagar, ATP'],
  phone: '+919392442583',
  phoneDisplay: '+91 93924 42583', // shown on the site
  whatsapp: '919392442583', // digits with country code
  email: '',
  hours: 'Monday - Saturday, 9am - 8pm | Sunday: 10am - 2pm',          // e.g. 'Mon–Sat, 10am–8pm'
  social: { instagram: '', facebook: '', whatsapp: '' }, // full URLs
  bookingEndpoint: '', // optional POST URL (Formspree, your API...). Empty = request is not sent anywhere yet.
  whatsappMessage: 'Hi, I would like to know more about The Designer Studio by Prasanna and book an appointment.',
};

export const waLink = (text = site.whatsappMessage) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}` : '';

export const mapsQuery = encodeURIComponent('The Designer Studio by Prasanna, Ramnagar, Ananthapuramu');


export const images = {
  hero: { src: 'https://images.pexels.com/photos/35441227/pexels-photo-35441227.jpeg', alt: 'Woman wearing an embroidered designer lehenga' },
  craft: { src: 'https://images.unsplash.com/photo-1756483510802-37ddf3dd13b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Tailor marking fabric for a custom blouse' },
  
};

export const services = [
  { title: 'Designer Blouses', text: 'Beautifully crafted blouses designed to complement your saree and personal style.', src: 'https://images.pexels.com/photos/37439026/pexels-photo-37439026.jpeg' },
  { title: 'Custom Blouse Stitching', text: 'Personalized stitching with attention to measurements, comfort and finishing.', src: 'https://images.pexels.com/photos/18776770/pexels-photo-18776770.jpeg' },
  { title: 'Designer Dresses', text: 'Elegant custom dresses created for celebrations, occasions and special moments.', src: 'https://images.pexels.com/photos/20370059/pexels-photo-20370059.jpeg' },
  { title: 'Lehengas', text: 'Custom-designed lehengas combining traditional elegance with contemporary style.', src: 'https://images.pexels.com/photos/28867966/pexels-photo-28867966.jpeg' },
  { title: 'Custom Stitching', text: 'Your idea, your measurements, your style — transformed into a perfectly tailored outfit.', src: 'https://images.pexels.com/photos/8526972/pexels-photo-8526972.jpeg' },
];

export const categories = ['All', 'Blouses', 'Dresses', 'Lehengas', 'Custom Designs'];
export const gallery = [
  { category: 'Blouses', title: 'Embroidered back-neck blouse', src: 'https://images.pexels.com/photos/10347062/pexels-photo-10347062.jpeg' },
  { category: 'Lehengas', title: 'Zari lehenga set', src: 'https://images.pexels.com/photos/35533303/pexels-photo-35533303.jpeg' },
  { category: 'Dresses', title: 'Evening occasion dress', src: 'https://images.pexels.com/photos/15751106/pexels-photo-15751106.jpeg' },
  { category: 'Custom Designs', title: 'Made-to-measure ensemble', src: 'https://images.pexels.com/photos/17589362/pexels-photo-17589362.jpeg' },
  { category: 'Blouses', title: 'Sleeve detail blouse', src: 'https://images.pexels.com/photos/20754324/pexels-photo-20754324.jpeg' },
  { category: 'Lehengas', title: 'Bridal lehenga', src: 'https://images.pexels.com/photos/12696381/pexels-photo-12696381.jpeg' },
  { category: 'Dresses', title: 'Festive anarkali dress', src: 'https://images.pexels.com/photos/37962387/pexels-photo-37962387.jpeg' },
  { category: 'Custom Designs', title: 'Client-sketched design', src: 'https://images.pexels.com/photos/36965765/pexels-photo-36965765.jpeg' },
];

export const why = [
  { icon: 'spark', title: 'Exclusive Designs', text: 'Unique designs thoughtfully created to reflect your personal style.' },
  { icon: 'tape', title: 'Personalized Fitting', text: 'Measurements and tailoring customized for your comfort and perfect fit.' },
  { icon: 'check', title: 'Quality Assured', text: 'Premium fabrics, careful stitching and attention to every detail.' },
  { icon: 'clock', title: 'On-Time Delivery', text: 'We value your time and strive to deliver your outfits as promised.' },
];

export const steps = [
  { title: 'Consultation', text: 'Share your style, occasion and design preferences.' },
  { title: 'Design & Fabric', text: 'Choose your design, fabric and finishing details.' },
  { title: 'Personalized Fitting', text: 'We take precise measurements and tailor your outfit specifically for you.' },
  { title: 'Final Delivery', text: 'Your finished outfit is carefully checked and delivered on time.' },
];

// PLACEHOLDERS: replace with real client reviews.
export const testimonials = [
  { quote: 'Absolutely loved the fitting and finishing. The blouse was exactly how I imagined it.', name: 'Placeholder client' },
  { quote: 'The attention to detail was amazing. The design and fit were perfect for my occasion.', name: 'Placeholder client' },
  { quote: 'Beautiful work and very personalized service. I will definitely come back again.', name: 'Placeholder client' },
];

export const serviceOptions = ['Designer Blouse', 'Custom Blouse Stitching', 'Designer Dress', 'Lehenga', 'Custom Stitching', 'Other'];

export const nav = [
  { label: 'Home', href: '#home' }, { label: 'About', href: '#about' }, { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' }, { label: 'Why Us', href: '#why' }, { label: 'Contact', href: '#contact' },
];

// Text sent to the studio's WhatsApp when a visitor submits the booking form.
export const buildBookingMessage = (v) => [
  'Hi, I would like to request an appointment at The Designer Studio by Prasanna.',
  '',
  `Name: ${v.name}`,
  `Phone: ${v.phone}`,
  v.email ? `Email: ${v.email}` : null,
  `Service: ${v.service}`,
  `Preferred date: ${v.date}`,
  v.occasion ? `Occasion: ${v.occasion}` : null,
  v.notes ? `Notes: ${v.notes}` : null,
].filter((l) => l !== null).join('\n');
