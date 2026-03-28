import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ background: 'radial-gradient(ellipse at 50% -5%, rgba(211,47,47,0.15) 0%, transparent 65%), var(--navy)', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>About Vitto</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Built by people who've seen the inside of lending stacks
          </h1>
          <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 540, margin: '0 auto' }}>
            Vitto was founded after years of working inside and alongside Indian lending institutions — watching capable credit teams operate with inadequate infrastructure. We built the product we couldn't buy.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem', alignItems: 'start' }}>
          <div>
            <div className="section-label">Our Position</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>A decisioning system, not a transaction system</h2>
            <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Traditional LOS vendors record what happened. Vitto influences what happens. The distinction is architectural — not cosmetic.
            </p>
            <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              When a credit application enters a legacy LOS, the system records the data and routes it to a human. When it enters Vitto, the platform scores it, adjudicates it against policy, checks for fraud signals, flags any data inconsistencies, and either auto-approves, auto-declines, or refers with a structured recommendation — before any human touches it.
            </p>
            <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8 }}>
              The underwriter's role changes from data entry to exception review. The quality of review improves. The throughput of the credit function increases by orders of magnitude.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ padding: '2rem', borderLeft: '2px solid #D32F2F' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#EF5350', marginBottom: '0.25rem' }}>2021</div>
              <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>Founded in Mumbai with a focus on building AI-native lending infrastructure for the Indian market.</p>
            </div>
            <div style={{ padding: '2rem', borderLeft: '2px solid #D32F2F' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#EF5350', marginBottom: '0.25rem' }}>12</div>
              <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>Institutions live on the platform across NBFC, MFI, and Housing Finance segments.</p>
            </div>
            <div style={{ padding: '2rem', borderLeft: '2px solid #D32F2F' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#EF5350', marginBottom: '0.25rem' }}>₹4,200Cr</div>
              <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>Loan value processed through Vitto infrastructure in the last 12 months.</p>
            </div>
          </div>
        </div>

        {/* Why Vitto */}
        <div id="why">
          <div className="section-label">Why Vitto</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}>What we are — and what we are not</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { claim: 'We are infrastructure, not software', exp: 'Vitto is designed to be the decisioning engine under your existing brand, channels, and distribution — not to replace your customer interface.' },
              { claim: 'We are domain-specific, not general', exp: 'Every model, every rule, every prompt in the Agentic AI layer is calibrated for regulated Indian lending — not adapted from a generic ML platform.' },
              { claim: 'We are unified, not integrated', exp: 'One data model across the entire lending lifecycle. Not a suite of products that require integration work to share a customer record.' },
              { claim: 'We are explainable, not opaque', exp: 'Every AI decision produces a human-readable rationale. Every credit decline includes a factor breakdown aligned with RBI FAIR guidelines.' },
            ].map(({ claim, exp }) => (
              <div key={claim} className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.6rem', color: '#EF5350' }}>{claim}</h3>
                <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '0.875rem', lineHeight: 1.7 }}>{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '4rem 2rem', background: '#0A0A18' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Want to learn more?</h2>
        <p style={{ color: 'rgba(245,245,247,0.5)', marginBottom: '2rem' }}>Talk to our team about your institution's specific requirements.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/contact" className="btn-primary">Book a Demo</Link>
          <Link to="/platform" className="btn-secondary">Explore Platform</Link>
        </div>
      </section>
    </main>
  );
}
