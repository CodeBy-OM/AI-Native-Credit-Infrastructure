import { Link } from 'react-router-dom';

export default function CollectionsPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ background: 'radial-gradient(ellipse at 50% -5%, rgba(230,81,0,0.18) 0%, transparent 65%), var(--navy)', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Collections Intelligence</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            From reactive calling<br />to predictive recovery
          </h1>
          <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 540, margin: '0 auto' }}>
            Collections teams that operate without propensity models are recovering a fraction of what the portfolio can yield. Vitto scores every delinquent account daily and routes it to the right channel at the right time.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <div className="section-label">The Problem</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>DPD bucket ≠ recovery priority</h2>
            <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The industry default is to sort by DPD and work from the top. The result: high-probability-to-pay accounts in later buckets get abandoned while resources are spent chasing structural write-offs in early buckets.
            </p>
            <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8 }}>
              Vitto's propensity engine inverts this. Every account is scored on its probability to repay this month — not on how old the delinquency is. The DPD bucket is an input, not the output.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Propensity Score Inputs', items: ['Repayment history pattern', 'UPI transaction activity', 'Bureau update signals', 'Previous PTP behaviour', 'Contact response history'] },
              { label: 'Channel Routing Logic', items: ['High propensity + low balance → WhatsApp AI', 'High propensity + high balance → AI voice', 'Low propensity + high balance → field agent', 'Structural NPA → legal workflow'] },
            ].map(({ label, items }) => (
              <div key={label} className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.85rem', color: '#EF5350' }}>{label}</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {items.map(i => <li key={i} style={{ color: 'rgba(245,245,247,0.6)', fontSize: '0.85rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: '#D32F2F' }}>→</span>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Channels */}
        <div className="section-label">Omni-Channel Automation</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '-0.03em' }}>Every channel. One orchestration layer.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '5rem' }}>
          {[
            { ch: 'WhatsApp AI', icon: '💬', desc: 'Conversational collections with payment link delivery, PTP recording, and dispute flagging. Works within the borrower\'s preferred channel.' },
            { ch: 'SMS Automation', icon: '📱', desc: 'Template-based outreach for early delinquency with personalised EMI amounts and payment links. Delivery receipt tracking.' },
            { ch: 'AI Voice Calls', icon: '📞', desc: 'Natural language IVR calls with live PTP capture. Calls are transcribed and intent-classified within 30 seconds of disconnect.' },
            { ch: 'Field Collections', icon: '🗺️', desc: 'Mobile app with daily beat list, geo-tagged visit logs, offline mode, and supervisor visibility on collection progress in real time.' },
          ].map(({ ch, icon, desc }) => (
            <div key={ch} className="card" style={{ padding: '1.75rem' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>{icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{ch}</h3>
              <p style={{ color: 'rgba(245,245,247,0.55)', fontSize: '0.85rem', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Impact metrics */}
        <div style={{ background: 'linear-gradient(135deg, rgba(211,47,47,0.1) 0%, rgba(230,81,0,0.05) 100%)', border: '1px solid rgba(211,47,47,0.2)', borderRadius: 12, padding: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em', textAlign: 'center' }}>Collections outcomes that move the needle</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { val: '3×', label: 'Recovery Rate Uplift', sub: 'vs. DPD-sorted manual prioritisation' },
              { val: '62%', label: 'Reduction in Field Visits', sub: 'AI channels resolve before field escalation' },
              { val: '91%', label: 'PTP Accuracy', sub: 'Propensity score prediction on monthly recovery' },
            ].map(({ val, label, sub }) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, color: '#EF5350', letterSpacing: '-0.04em', marginBottom: '0.25rem' }}>{val}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{label}</div>
                <div style={{ color: 'rgba(245,245,247,0.45)', fontSize: '0.8rem' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '4rem 2rem', background: '#0A0A18' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>See the collections module live</h2>
        <p style={{ color: 'rgba(245,245,247,0.5)', marginBottom: '2rem' }}>We'll run the propensity model on a sample of your delinquent portfolio.</p>
        <Link to="/contact" className="btn-primary">Request Demo →</Link>
      </section>
    </main>
  );
}
