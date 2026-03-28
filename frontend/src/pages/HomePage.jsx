import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

/* ── Dashboard Mockup SVG ── */
function DashboardMockup() {
  return (
    <div style={{ position: 'relative', perspective: '1000px' }}>
      <div style={{
        transform: 'rotateX(8deg) rotateY(-6deg)',
        transformOrigin: 'center center',
        transition: 'transform 0.5s ease',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid rgba(245,245,247,0.12)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(211,47,47,0.15)',
      }}>
        {/* Mockup Header */}
        <div style={{ background: '#0D0D1A', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(245,245,247,0.08)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#D32F2F', opacity: 0.8 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#C9A84C', opacity: 0.6 }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4CAF50', opacity: 0.4 }} />
          <span style={{ color: 'rgba(245,245,247,0.3)', fontSize: '0.75rem', marginLeft: '0.5rem', fontFamily: 'var(--font-body)' }}>Vitto Intelligence Dashboard</span>
        </div>
        {/* Grid */}
        <div style={{ background: '#111120', padding: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
          {[
            { label: 'Applications Today', val: '2,847', change: '+12.4%', up: true },
            { label: 'Auto-Decisioned', val: '94.2%', change: '+3.1%', up: true },
            { label: 'Avg Decision Time', val: '1.8s', change: '-0.4s', up: true },
          ].map(({ label, val, change, up }) => (
            <div key={label} style={{ background: 'rgba(245,245,247,0.04)', borderRadius: 6, padding: '0.85rem', border: '1px solid rgba(245,245,247,0.07)' }}>
              <p style={{ color: 'rgba(245,245,247,0.45)', fontSize: '0.65rem', marginBottom: '0.35rem', fontFamily: 'var(--font-body)' }}>{label}</p>
              <p style={{ color: '#F5F5F7', fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '0.25rem' }}>{val}</p>
              <p style={{ color: up ? '#4CAF50' : '#D32F2F', fontSize: '0.65rem', fontFamily: 'var(--font-body)' }}>{change}</p>
            </div>
          ))}
        </div>
        {/* Chart area */}
        <div style={{ background: '#111120', padding: '0 1.25rem 1.25rem' }}>
          <div style={{ background: 'rgba(245,245,247,0.03)', borderRadius: 6, padding: '1rem', border: '1px solid rgba(245,245,247,0.07)', height: 100, position: 'relative', overflow: 'hidden' }}>
            <p style={{ color: 'rgba(245,245,247,0.35)', fontSize: '0.65rem', marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>Portfolio Risk Score (30d)</p>
            <svg viewBox="0 0 300 60" style={{ width: '100%', height: 60 }}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D32F2F" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D32F2F" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,45 C30,40 60,30 90,35 C120,40 150,20 180,25 C210,30 240,15 270,10 L300,8 L300,60 L0,60Z" fill="url(#g1)" />
              <path d="M0,45 C30,40 60,30 90,35 C120,40 150,20 180,25 C210,30 240,15 270,10 L300,8" fill="none" stroke="#D32F2F" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        {/* Status row */}
        <div style={{ background: '#0D0D1A', padding: '0.75rem 1.25rem', borderTop: '1px solid rgba(245,245,247,0.06)', display: 'flex', gap: '1.5rem' }}>
          {[['ML Models', 'Active', '#4CAF50'], ['Fraud Engine', 'Scanning', '#C9A84C'], ['Agentic AI', 'Online', '#4CAF50']].map(([l, s, c]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: c, boxShadow: `0 0 6px ${c}` }} />
              <span style={{ color: 'rgba(245,245,247,0.45)', fontSize: '0.65rem', fontFamily: 'var(--font-body)' }}>{l}</span>
              <span style={{ color: c, fontSize: '0.65rem', fontFamily: 'var(--font-body)' }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Glow */}
      <div style={{ position: 'absolute', inset: -40, background: 'radial-gradient(ellipse at center, rgba(211,47,47,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: -1 }} />
    </div>
  );
}

const PROBLEMS = [
  { num: '01', title: 'Fragmented Systems', desc: 'Siloed LOS, LMS, and CRM stacks with no unified data layer. Every decisioning event requires manual reconciliation across systems that were never designed to speak to each other.' },
  { num: '02', title: 'Non-AI Native Vendors', desc: 'AI bolted on top of legacy rule engines. The model sits outside the data pipeline, operating on batch exports rather than real-time transaction streams. The decisioning is as stale as the last sync.' },
  { num: '03', title: 'Reactive Collections', desc: 'No predictive capability. Collections teams operate on account age rather than propensity scores. Manual prioritization means recoverable accounts get abandoned while resources chase write-offs.' },
  { num: '04', title: 'Static Rule Engines', desc: 'Hardcoded rules that require six-week IT cycles to update. The credit policy from 2019 is still running your portfolio today. These engines cannot learn, cannot adapt, and cannot improve.' },
];

const MODULES = [
  { name: 'Data-Based Assessment', desc: 'Multi-bureau pull, alternative data ingestion, and real-time financial signal extraction from bank statements and GST returns.', icon: '◈', to: '/platform' },
  { name: 'ML Model Layer', desc: 'Domain-trained gradient boosting and transformer models calibrated on BFSI credit data. Not a generic ML API — trained specifically for Indian lending.', icon: '⬡', to: '/platform' },
  { name: 'Rule Engine & Decisioning', desc: 'Dynamic, policy-aware rule engine that learns from outcomes. Rules are version-controlled, auditable, and can be hot-updated without a deployment cycle.', icon: '⬢', to: '/platform' },
  { name: 'Fraud Intelligence', desc: 'Network graph analysis, device fingerprinting, and velocity checks running in parallel with the underwriting pipeline. Fraud signals inform — not block — the decision.', icon: '◇', to: '/platform' },
  { name: 'Collection Intelligence', desc: 'Propensity-to-pay scoring updated daily. Omni-channel outreach automation via WhatsApp, SMS, and AI voice with agent allocation based on predicted recovery probability.', icon: '◎', to: '/collections' },
  { name: 'Agentic AI Layer', desc: 'Domain-trained Small Language Models deployed as Borrower Agent, Field Agent, and Underwriter Agent. Explainable, policy-compliant, and hallucination-controlled.', icon: '⬟', to: '/agentic-ai' },
];

const IMPACT = [
  { stat: '< 2s', label: 'Credit Decision Time', sub: 'From days to sub-second. Automated underwriting with full audit trail.' },
  { stat: '40%', label: 'Reduction in NPA', sub: 'Portfolio risk reduction through predictive early warning signals.' },
  { stat: '3×', label: 'Recovery Rate Uplift', sub: 'Collections intelligence drives targeted outreach over scatter-shot calling.' },
  { stat: '200+', label: 'Pre-Built Integrations', sub: 'Bureau, bank statement, GST, e-sign, payment gateway, and more.' },
];

const PARTNERS = ['HDFC Bank', 'Aavas', 'Muthoot', 'Arohan', 'Spandana', 'UGRO Capital'];

const TESTIMONIALS = [
  {
    quote: "We reduced our underwriting team's processing backlog by 78% in the first quarter. The decisioning depth is unlike anything we evaluated from legacy LOS vendors.",
    name: 'Rajesh Menon', designation: 'Chief Risk Officer', institution: 'Aavas Financiers'
  },
  {
    quote: "The collections propensity model helped us reallocate field agents to accounts with the highest recovery probability. Recovery rates improved significantly within 60 days of going live.",
    name: 'Priya Nair', designation: 'Head of Collections', institution: 'Arohan Financial Services'
  },
];

export default function HomePage() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMouse = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 40;
      const y = (e.clientY - top - height / 2) / 40;
      el.style.setProperty('--mx', `${x}deg`);
      el.style.setProperty('--my', `${-y}deg`);
    };
    window.addEventListener('mousemove', onMouse);
    return () => window.removeEventListener('mousemove', onMouse);
  }, []);

  return (
    <main>
      {/* ── SECTION A: Hero ── */}
      <section ref={heroRef} style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(211,47,47,0.15) 0%, transparent 70%), var(--navy)',
        padding: '8rem 2rem 4rem', position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid bg */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(245,245,247,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,247,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ animation: 'fadeUp 0.8s ease forwards' }}>
            <div className="section-label">AI-Native Credit Infrastructure</div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              AI-First Infrastructure<br />
              <span style={{ color: '#D32F2F' }}>for Modern</span><br />
              Financial Services
            </h1>
            <p style={{ color: 'rgba(245,245,247,0.65)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '0.75rem', maxWidth: 480 }}>
              Not retrofitted AI. Not fragmented vendors. Not generic tooling adapted for BFSI.
            </p>
            <p style={{ color: 'rgba(245,245,247,0.5)', fontSize: '0.925rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 480 }}>
              Vitto is lending infrastructure built from the ground up for Banks, NBFCs, and Microfinance Institutions — where every module, every model, and every API endpoint was designed for regulated credit operations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Book a Demo →</Link>
              <Link to="/platform" className="btn-secondary">Explore Platform</Link>
            </div>

            {/* Proof chips */}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {['RBI-Aligned Decisioning', 'SOC 2 Type II', '200+ Integrations'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(245,245,247,0.5)', fontSize: '0.8rem' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4CAF50' }} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div style={{ animation: 'fadeUp 0.8s 0.2s ease both' }}>
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ── SECTION B: Problems ── */}
      <section className="section" style={{ background: '#0A0A18' }}>
        <div className="container">
          <div className="section-label">The Reality of Today</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, marginBottom: '0.75rem', maxWidth: 560, letterSpacing: '-0.03em' }}>
            The Reality of Today's Lending Technology
          </h2>
          <p style={{ color: 'rgba(245,245,247,0.5)', marginBottom: '3rem', maxWidth: 560, lineHeight: 1.7 }}>
            Most lending stacks are a patchwork of decisions made a decade apart. The consequences are predictable.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {PROBLEMS.map(({ num, title, desc }) => (
              <div key={num} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: '#D32F2F', letterSpacing: '0.1em', marginBottom: '1rem' }}>{num}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{title}</h3>
                <p style={{ color: 'rgba(245,245,247,0.55)', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION C: Solution ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">The Vitto Difference</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
                AI-native decisioning meets full-stack operational automation
              </h2>
              <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Vitto doesn't add AI to lending software. Vitto's architecture begins with machine learning models at the core and builds operational layers — LOS, LMS, Collections, CRM — that feed those models and respond to their outputs in real time.
              </p>
              <Link to="/platform" className="btn-primary">See How It Works →</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: '⬡', title: 'Domain-Trained Models', desc: 'Models trained on Indian credit behaviour, not on generic financial datasets. Bureau patterns, cash flow signatures, and repayment behaviour from millions of BFSI data points.' },
                { icon: '◈', title: 'Unified Architecture', desc: 'One data layer across LOS, LMS, Collections, and CRM. No ETL pipelines between decisioning systems. Every event is immediately available to every model.' },
                { icon: '◎', title: 'Explainability by Design', desc: 'Every decision produces a human-readable rationale with contributing factor weights. RBI FAIR-aligned explanations on every credit decline.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, minWidth: 44, background: 'rgba(211,47,47,0.12)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#D32F2F' }}>{icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{title}</h4>
                    <p style={{ color: 'rgba(245,245,247,0.55)', fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION D: Modules ── */}
      <section className="section" style={{ background: '#0A0A18' }}>
        <div className="container">
          <div className="section-label">The AI Layer</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>Six Modules. One Intelligence Layer.</h2>
          <p style={{ color: 'rgba(245,245,247,0.5)', marginBottom: '3rem', maxWidth: 520, lineHeight: 1.7 }}>Each module operates independently and contributes to a unified decisioning context.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {MODULES.map(({ name, desc, icon, to }) => (
              <div key={name} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.85rem', color: '#D32F2F' }}>{icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{name}</h3>
                <p style={{ color: 'rgba(245,245,247,0.5)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1rem' }}>{desc}</p>
                <Link to={to} style={{ color: '#EF5350', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em' }}>Explore →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: Impact ── */}
      <section className="section">
        <div className="container">
          <div className="section-label">Business Impact</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '3rem', letterSpacing: '-0.03em' }}>Measurable from Day One</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {IMPACT.map(({ stat, label, sub }) => (
              <div key={label} style={{ borderLeft: '2px solid #D32F2F', paddingLeft: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: '#F5F5F7', marginBottom: '0.25rem', letterSpacing: '-0.04em' }}>{stat}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>{label}</div>
                <div style={{ color: 'rgba(245,245,247,0.45)', fontSize: '0.8rem', lineHeight: 1.6 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION F: Social Proof ── */}
      <section className="section" style={{ background: '#0A0A18' }}>
        <div className="container">
          {/* Partner logos */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ color: 'rgba(245,245,247,0.3)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>Trusted by India's lending institutions</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
              {PARTNERS.map(p => (
                <div key={p} style={{ color: 'rgba(245,245,247,0.3)', fontSize: '0.875rem', fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'rgba(245,245,247,0.7)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(245,245,247,0.3)'}
                >{p}</div>
              ))}
            </div>
          </div>
          {/* Testimonials */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {TESTIMONIALS.map(({ quote, name, designation, institution }) => (
              <div key={name} className="card" style={{ padding: '2rem' }}>
                <div style={{ color: '#D32F2F', fontSize: '2rem', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>"</div>
                <p style={{ color: 'rgba(245,245,247,0.75)', fontSize: '0.925rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>{quote}</p>
                <div style={{ borderTop: '1px solid rgba(245,245,247,0.08)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{name}</div>
                  <div style={{ color: 'rgba(245,245,247,0.45)', fontSize: '0.8rem' }}>{designation}, {institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION G: CTA Banner ── */}
      <section style={{ background: '#B71C1C', padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(0,0,0,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '1.25rem' }}>Ready to modernise your credit stack?</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Discover the key to grow<br />your business
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            Schedule a 45-minute platform walkthrough with our solution engineers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#fff', color: '#B71C1C', padding: '0.9rem 2rem', borderRadius: 4, fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.background='#F5F5F7'; e.target.style.transform='translateY(-1px)'; }}
              onMouseLeave={e => { e.target.style.background='#fff'; e.target.style.transform='translateY(0)'; }}
            >Book a Demo</Link>
            <Link to="/platform" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '0.9rem 2rem', borderRadius: 4, fontWeight: 600, fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.25)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.background='rgba(255,255,255,0.2)'; }}
              onMouseLeave={e => { e.target.style.background='rgba(255,255,255,0.12)'; }}
            >Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
