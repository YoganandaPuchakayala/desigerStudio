const P = {
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
  tape: 'M3 8h18v8H3zM7 8v4M11 8v3M15 8v4M19 8v3',
  check: 'M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6zM9 12l2 2 4-4',
  clock: 'M12 4a8 8 0 100 16 8 8 0 000-16zM12 8v4l3 2',
  wa: 'M4 20l1.2-4A8 8 0 1112 20a8 8 0 01-3.8-1zM9 9c0 3 3 6 6 6l1-1.5-2-1-1 .5c-1-.5-2-1.5-2.5-2.5l.5-1-1-2z',
};
export default function Icon({ name, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name]} />
    </svg>
  );
}
