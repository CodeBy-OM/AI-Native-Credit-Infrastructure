import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Platform', to: '/platform' },
  { label: 'Automation', to: '/automation' },
  { label: 'Collections', to: '/collections' },
  { label: 'Agentic AI', to: '/agentic-ai' },
  { label: 'API', to: '/api-infrastructure' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(13,13,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,245,247,0.06)' : '1px solid transparent',
      transition: 'all 0.4s ease',
      padding: '0 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: 32, height: 32, background: '#D32F2F', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: '#fff',
          }}>V</div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>Vitto</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontSize: '0.875rem', fontWeight: 500,
              color: location.pathname === l.to ? '#EF5350' : 'rgba(245,245,247,0.7)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#F5F5F7'}
            onMouseLeave={e => e.target.style.color = location.pathname === l.to ? '#EF5350' : 'rgba(245,245,247,0.7)'}
            >{l.label}</Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link to="/contact" className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>Book a Demo</Link>
          <Link to="/signup" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>Sign Up →</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', color: '#F5F5F7', fontSize: 24, cursor: 'pointer' }} className="hamburger">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(13,13,26,0.98)', padding: '1.5rem 2rem', borderTop: '1px solid rgba(245,245,247,0.08)' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} style={{ display: 'block', padding: '0.75rem 0', fontSize: '0.95rem', color: 'rgba(245,245,247,0.85)', borderBottom: '1px solid rgba(245,245,247,0.06)' }}>{l.label}</Link>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <Link to="/contact" className="btn-secondary" style={{ flex: 1, justifyContent: 'center', padding: '0.7rem' }}>Book a Demo</Link>
            <Link to="/signup" className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '0.7rem' }}>Sign Up</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (max-width: 600px) {
          nav > div > div:last-child:not(.hamburger) { display: none; }
        }
      `}</style>
    </nav>
  );
}
