import { useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', institution: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await axios.post(`${API_BASE}/api/contact`, form);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit. Please email us directly at hello@vitto.ai');
    } finally { setLoading(false); }
  };

  const inputStyle = {
    width: '100%', background: 'rgba(245,245,247,0.05)', border: '1px solid rgba(245,245,247,0.12)',
    borderRadius: 4, padding: '0.85rem 1rem', color: '#F5F5F7', fontSize: '0.9rem',
    fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ background: 'radial-gradient(ellipse at 50% -5%, rgba(211,47,47,0.15) 0%, transparent 65%), var(--navy)', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Book a Demo</h1>
          <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.75 }}>
            A 45-minute technical walkthrough with our solution engineering team. We'll run a live demo on your use case.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: 700, margin: '0 auto' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✓</div>
            <h2 style={{ fontWeight: 800, fontSize: '1.8rem', marginBottom: '1rem' }}>We'll be in touch</h2>
            <p style={{ color: 'rgba(245,245,247,0.55)', lineHeight: 1.7 }}>Our team typically responds within 4 business hours. We'll send a calendar invite once we confirm availability.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem', fontWeight: 500 }}>Full Name *</label>
                <input name="name" value={form.name} onChange={handle} required placeholder="Rajesh Menon" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#D32F2F'}
                  onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem', fontWeight: 500 }}>Institutional Email *</label>
                <input name="email" type="email" value={form.email} onChange={handle} required placeholder="rajesh@yourbank.in" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#D32F2F'}
                  onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem', fontWeight: 500 }}>Phone</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98XXX XXXXX" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#D32F2F'}
                  onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem', fontWeight: 500 }}>Institution Name *</label>
                <input name="institution" value={form.institution} onChange={handle} required placeholder="Aavas Financiers" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#D32F2F'}
                  onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem', fontWeight: 500 }}>Your Role</label>
              <select name="role" value={form.role} onChange={handle} style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={e => e.target.style.borderColor = '#D32F2F'}
                onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'}>
                <option value="" style={{ background: '#1A1A2E' }}>Select your role</option>
                {['CTO / CIO', 'CRO / Head of Credit', 'Head of Collections', 'Digital Transformation Lead', 'Operations Head', 'Other'].map(r => <option key={r} value={r} style={{ background: '#1A1A2E' }}>{r}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem', fontWeight: 500 }}>What would you like to explore?</label>
              <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="e.g. We're looking to replace our existing LOS and want to see how Vitto handles MSME underwriting..." style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={e => e.target.style.borderColor = '#D32F2F'}
                onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
            </div>
            {error && <p style={{ color: '#EF5350', fontSize: '0.875rem' }}>{error}</p>}
            <button type="submit" className="btn-primary" disabled={loading} style={{ alignSelf: 'flex-start', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Submitting...' : 'Book a Demo →'}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
