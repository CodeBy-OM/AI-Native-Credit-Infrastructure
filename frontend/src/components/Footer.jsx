import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer style={{ background: '#07070F', borderTop: '1px solid rgba(245,245,247,0.06)', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: 32, height: 32, background: '#D32F2F', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16 }}>V</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>Vitto</span>
            </div>
            <p style={{ color: 'rgba(245,245,247,0.5)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.5rem' }}>
              AI-native digital credit infrastructure for Banks, NBFCs, and Microfinance Institutions.
            </p>
            <form onSubmit={handleSubscribe}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Your institutional email"
                  style={{ flex: 1, background: 'rgba(245,245,247,0.06)', border: '1px solid rgba(245,245,247,0.12)', borderRadius: 4, padding: '0.65rem 0.85rem', color: '#F5F5F7', fontSize: '0.85rem', outline: 'none' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}>
                  {subscribed ? '✓' : '→'}
                </button>
              </div>
              {subscribed && <p style={{ color: '#EF5350', fontSize: '0.8rem', marginTop: '0.5rem' }}>You're on the list.</p>}
            </form>
          </div>

          {/* Pages */}
          <div>
            <h6 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,245,247,0.4)', marginBottom: '1.25rem' }}>Pages</h6>
            {[['Home', '/'], ['Platform', '/platform'], ['Automation', '/automation'], ['Collections', '/collections'], ['Agentic AI', '/agentic-ai'], ['API', '/api-infrastructure']].map(([l, to]) => (
              <Link key={to} to={to} style={{ display: 'block', color: 'rgba(245,245,247,0.6)', fontSize: '0.875rem', marginBottom: '0.6rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#F5F5F7'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,245,247,0.6)'}
              >{l}</Link>
            ))}
          </div>

          {/* Platform */}
          <div>
            <h6 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,245,247,0.4)', marginBottom: '1.25rem' }}>Platform</h6>
            {[['AI Underwriting', '/platform'], ['Collections AI', '/collections'], ['Fraud Intelligence', '/platform'], ['LOS / LMS', '/automation'], ['Agentic AI', '/agentic-ai'], ['API Docs', '/api-infrastructure']].map(([l, to]) => (
              <Link key={l} to={to} style={{ display: 'block', color: 'rgba(245,245,247,0.6)', fontSize: '0.875rem', marginBottom: '0.6rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#F5F5F7'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,245,247,0.6)'}
              >{l}</Link>
            ))}
          </div>

          {/* Partners */}
          <div>
            <h6 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,245,247,0.4)', marginBottom: '1.25rem' }}>Company</h6>
            {[['About Vitto', '/about'], ['Why Vitto', '/about#why'], ['Contact', '/contact'], ['Request Demo', '/contact'], ['Sign Up', '/signup'], ['Careers', '#']].map(([l, to]) => (
              <Link key={l} to={to} style={{ display: 'block', color: 'rgba(245,245,247,0.6)', fontSize: '0.875rem', marginBottom: '0.6rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#F5F5F7'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,245,247,0.6)'}
              >{l}</Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(245,245,247,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(245,245,247,0.35)', fontSize: '0.8rem' }}>© 2025 Vitto Technologies Pvt. Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Security'].map(l => (
              <a key={l} href="#" style={{ color: 'rgba(245,245,247,0.35)', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#F5F5F7'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,245,247,0.35)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </footer>
  );
}
