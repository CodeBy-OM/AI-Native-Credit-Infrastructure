export default function ArticlePage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ background: 'radial-gradient(ellipse at 50% -5%, rgba(211,47,47,0.12) 0%, transparent 65%), var(--navy)', padding: '5rem 2rem 3rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Thought Leadership</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Retrofit AI vs AI-Native Infrastructure in BFSI
          </h1>
          <p style={{ color: 'rgba(245,245,247,0.45)', fontSize: '0.875rem' }}>Vitto Research · 2025 · 8 min read</p>
        </div>
      </section>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem', lineHeight: 1.85, fontSize: '1rem' }}>
        <p style={{ color: 'rgba(245,245,247,0.75)', marginBottom: '1.75rem', fontSize: '1.05rem' }}>
          Every CTO at a mid-sized NBFC has heard some version of this pitch in the last three years: "We've added AI to our platform." The question worth asking — before signing any order form — is where exactly the AI sits, and what it can actually access.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', marginTop: '2.5rem' }}>The retrofit pattern</h2>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          Retrofit AI follows a predictable architectural pattern. A legacy LOS — built on relational schemas designed in the mid-2000s — accumulates loan data over years. At some point, a data engineering team extracts a subset of that data on a nightly or weekly schedule. A machine learning model is trained on that extract. The model's output is surfaced as a "risk score" or "AI recommendation" on the underwriter's screen. The underwriter then makes the actual decision — the same way they did before.
        </p>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          The AI is real. The limitation is structural. The model is operating on yesterday's data, extracted from a system that was not built to feed it. It cannot see real-time bank statement signals. It cannot incorporate the last three months of GST filing behaviour. It cannot account for what the borrower's UPI transaction history revealed this morning. The model's inputs are bounded by what the legacy schema decided to capture — years ago.
        </p>

        {/* Comparison table */}
        <div style={{ overflowX: 'auto', marginBottom: '2rem', marginTop: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.85rem 1rem', background: 'rgba(245,245,247,0.06)', borderBottom: '2px solid rgba(211,47,47,0.4)', color: 'rgba(245,245,247,0.5)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Dimension</th>
                <th style={{ textAlign: 'left', padding: '0.85rem 1rem', background: 'rgba(245,245,247,0.06)', borderBottom: '2px solid rgba(211,47,47,0.4)', color: 'rgba(245,245,247,0.5)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Retrofit AI</th>
                <th style={{ textAlign: 'left', padding: '0.85rem 1rem', background: 'rgba(245,245,247,0.06)', borderBottom: '2px solid rgba(211,47,47,0.4)', color: 'rgba(245,245,247,0.5)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>AI-Native</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Data access', 'Batch extract from legacy schema', 'Real-time event stream across all modules'],
                ['Model inputs', 'Fields the old system chose to capture', 'All signals — bureau, bank statement, GST, UPI, device'],
                ['Decision latency', 'Hours to days (human in loop)', 'Sub-second (automated with structured refer flow)'],
                ['Explainability', 'Score with no factor breakdown', 'PD, EL, contributing factors, RBI-aligned rationale'],
                ['Model freshness', 'Quarterly or annual retraining', 'Monthly retraining on live portfolio outcomes'],
                ['Policy integration', 'External to the decisioning engine', 'Rules and models co-authored in the same layer'],
                ['Collections intelligence', 'DPD-based prioritisation', 'Daily propensity scoring on each delinquent account'],
              ].map(([dim, retro, native], i) => (
                <tr key={dim} style={{ background: i % 2 === 0 ? 'rgba(245,245,247,0.02)' : 'transparent' }}>
                  <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid rgba(245,245,247,0.06)', color: 'rgba(245,245,247,0.8)', fontWeight: 500 }}>{dim}</td>
                  <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid rgba(245,245,247,0.06)', color: 'rgba(245,245,247,0.45)' }}>{retro}</td>
                  <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid rgba(245,245,247,0.06)', color: 'rgba(245,245,247,0.7)' }}>{native}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', marginTop: '2.5rem' }}>The long-term cost of patching</h2>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          The case for retrofit AI is typically made on cost. Replacing a core system is expensive and disruptive. Adding an AI layer to what exists is cheaper in year one. The calculation reverses by year three.
        </p>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          A patched stack accumulates integration debt. Every new data source requires a new ETL pipeline into the legacy schema. Every model iteration requires a new extract. Every regulatory change — and the RBI's digital lending guidelines have changed materially in each of the last four years — requires changes at multiple points in the stack rather than in one place. The institution that chose retrofit AI in year one is managing three separate vendor contracts, a data engineering team dedicated to keeping feeds alive, and a model that is operating on signals from 18 months ago.
        </p>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          There is also a talent cost that rarely appears in the initial analysis. The engineers who can maintain an AI layer grafted onto a legacy system are a different — and smaller — pool than those who work on native AI infrastructure. Retention is harder. Knowledge transfer when they leave is more expensive.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', marginTop: '2.5rem' }}>The decisioning depth problem</h2>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          The most significant limitation of retrofit AI is not cost — it's decisioning depth. A model that cannot access the data layer cannot make decisions that reflect reality at the time of application.
        </p>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          Consider a small business loan application. The applicant is a GST-registered trader with a 780 CIBIL score. Retrofit AI sees the bureau data and approves. An AI-native system also pulls the applicant's last six months of GSTN returns — and notices that declared revenue has declined 45% quarter-over-quarter while the credit score has held steady. The bureau hasn't caught up yet. The AI-native system refers the application with a structured flag. The retrofit system approves.
        </p>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          This is not a hypothetical. It is the category of loss that manifests as NPA 12 to 18 months after disbursement — when the credit cycle catches up with signals the bureau couldn't see but the data layer could. The institution with retrofit AI will attribute this to market conditions. The institution with AI-native infrastructure will know exactly which signal it missed and will have already retrained the model.
        </p>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', marginTop: '2.5rem' }}>The rearchitecture imperative</h2>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          The question for institutional leadership is not whether to adopt AI in lending operations. That decision has effectively been made by competitive and regulatory pressure. The question is whether to adopt it in a way that extends the useful life of infrastructure that was never designed for it — or to build on a foundation that was.
        </p>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          Rearchitecting does not mean ripping out core banking on day one. It means replacing the origination and decisioning layer — where AI's leverage is highest and legacy constraints are most limiting — with infrastructure that can actually deliver on the promise. The core banking system processes what was decided. The decisioning system decides. These are separable problems, and the latter is where AI-native infrastructure creates competitive advantage that compounds over time.
        </p>
        <p style={{ color: 'rgba(245,245,247,0.65)', marginBottom: '1.5rem' }}>
          Institutions that make this shift in the next 18 to 24 months will have two to three years of model learning and operational refinement ahead of those that continue to patch. In a market where credit decisions are converging on automation and risk differentiation is the last remaining lever for portfolio quality, that lead is not recoverable.
        </p>

        <div style={{ borderLeft: '3px solid #D32F2F', paddingLeft: '1.5rem', marginTop: '2.5rem', marginBottom: '2rem' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'rgba(245,245,247,0.85)', lineHeight: 1.6, letterSpacing: '-0.01em' }}>
            "A traditional LOS is a transaction system. Vitto is a decisioning system. The distinction is architectural — and it determines the quality of every credit decision your institution makes from today forward."
          </p>
        </div>
      </article>
    </main>
  );
}
