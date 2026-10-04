// Real photo when `src` is set; otherwise a branded line-art placeholder (demo mode).
const ART = {
  blouse: 'M30 26l12-8q8 8 16 0l12 8 10 22-10 6-4-10v38H34V44l-4 10-10-6z',
  dress: 'M42 16q8 8 16 0l3 30q-3 8 0 12l22 66H17l22-66q3-4 0-12z',
  lehenga: 'M38 18h24l6 24H32zM34 48h32l22 74H12zM46 48v74M54 48v74',
  custom: 'M50 34v-9a6 6 0 116 6M50 34L10 74h80z',
};
const kindOf = (t = '') => (/lehenga/i.test(t) ? 'lehenga' : /dress|anarkali|gown/i.test(t) ? 'dress' : /blouse/i.test(t) ? 'blouse' : 'custom');

export default function Img({ src, alt, label, className = '' }) {
  if (src) return <img className={`img ${className}`} src={src} alt={alt} loading="lazy" decoding="async" />;
  return (
    <div className={`img ph ${className}`} role="img" aria-label={alt}>
      <svg viewBox="0 0 100 130" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" aria-hidden="true">
        <path d={ART[kindOf(`${label} ${alt}`)]} />
      </svg>
      <span>{label || 'Add photo'}</span>
    </div>
  );
}
