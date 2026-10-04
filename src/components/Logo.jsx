export default function Logo({ full = false }) {
  return (
    <span className={`logo ${full ? 'logo-full' : ''}`}>
      <svg className="logo-gown" viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="30" cy="6" r="2.5" />
        <path d="M30 8.5V14M22 19Q26 14 30 18Q34 14 38 19L36 40H24ZM24 40Q18 70 6 94Q30 101 54 94Q42 70 36 40M30 40Q28 70 22 97M30 40Q32 70 38 97M27 22Q30 26 33 22" />
      </svg>
      <span className="logo-text">
        <span className="logo-the">THE</span>
        <span className="logo-name">DESIGNER<br />STUDIO</span>
        <span className="logo-by"><i />BY PRASANNA<i /></span>
        {full && (
          <>
            <svg className="logo-orn" viewBox="0 0 120 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
              <path d="M2 5H50M70 5H118M60 1L64 5 60 9 56 5Z" />
            </svg>
            <span className="script">Where Style<br />is Stitched to Perfection</span>
          </>
        )}
      </span>
    </span>
  );
}