import { Link } from 'react-router-dom';

export default function AgenticAIPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ background: 'radial-gradient(ellipse at 50% -5%, rgba(63,81,181,0.2) 0%, transparent 65%), var(--navy)', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Agentic AI</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            AI agents that know<br />your credit policy
          </h1>
          <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 540, margin: '0 auto' }}>
            Not a generic chatbot with a BFSI skin. Domain-trained Small Language Models grounded in your institution's policy documents, running inside your compliance boundary.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
        {/* Why not ChatGPT */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="section-label">The Grounding Problem</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', maxWidth: 560 }}>Why public LLMs cannot operate in regulated lending</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(211,47,47,0.06)', border: '1px solid rgba(211,47,47,0.15)', borderRadius: 8, padding: '1.75rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#EF5350' }}>Generic LLM</h3>
              {['Trained on internet text — not your credit policy', 'No access to your product terms or eligibility criteria', 'Will hallucinate clause references and regulatory citations', 'Cannot produce auditable, citation-backed responses', 'No guarantee of consistency across identical queries', 'Sends query data to external API — data residency risk'].map(p => (
                <div key={p} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span style={{ color: '#D32F2F', flexShrink: 0, marginTop: '0.15rem' }}>✗</span>
                  <span style={{ color: 'rgba(245,245,247,0.55)', fontSize: '0.875rem', lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.15)', borderRadius: 8, padding: '1.75rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#4CAF50' }}>Vitto SLM</h3>
              {['RAG pipeline retrieves the relevant policy clause before responding', 'Answers are grounded — no hallucinated policy references', 'Every response cites the source document and clause number', 'Deterministic: same query + same policy version = same answer', 'Deployed on-premise or in your VPC — no external data transfer', 'Model retraining on policy updates within 48 hours'].map(p => (
                <div key={p} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span style={{ color: '#4CAF50', flexShrink: 0, marginTop: '0.15rem' }}>✓</span>
                  <span style={{ color: 'rgba(245,245,247,0.55)', fontSize: '0.875rem', lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How RAG works */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="section-label">Architecture</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>RAG pipeline + domain SLM</h2>
          <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 640 }}>
            The Vitto Agentic AI layer uses a Retrieval-Augmented Generation architecture. A borrower query — "Am I eligible for a top-up loan?" — triggers a vector search against the institution's policy corpus. The top-k policy chunks are retrieved and passed to the SLM as context. The SLM generates a response grounded in those chunks. The response includes citations. The entire pipeline runs in under 2 seconds.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['Query received', '→', 'Vector search on policy corpus', '→', 'Top-k chunks retrieved', '→', 'SLM generates response', '→', 'Citation attached', '→', 'Response delivered'].map((s, i) => (
              s === '→'
                ? <span key={i} style={{ color: '#D32F2F', fontSize: '1.2rem' }}>→</span>
                : <div key={i} style={{ background: 'rgba(245,245,247,0.05)', border: '1px solid rgba(245,245,247,0.1)', borderRadius: 4, padding: '0.5rem 0.85rem', fontSize: '0.8rem', color: 'rgba(245,245,247,0.7)' }}>{s}</div>
            ))}
          </div>
        </div>

        {/* Three agents */}
        <div>
          <div className="section-label">Three Agents</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '-0.03em' }}>One SLM. Three operational contexts.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { agent: 'Borrower Agent', persona: 'End borrower via WhatsApp or web', role: 'Self-service query resolution without call centre involvement.', caps: ['Loan status and outstanding balance', 'Repayment schedule and next EMI date', 'Document upload and KYC status tracking', 'Restructuring eligibility check', 'Complaint registration and escalation', 'Payment link delivery and confirmation'], color: '#3F51B5' },
              { agent: 'Field Agent', persona: 'On-ground collections executive', role: 'Real-time account context for agents in the field.', caps: ['Full account history before the visit', 'PTP recording with date and amount', 'Dispute flagging with supporting notes', 'Settlement offer authorisation within policy', 'Geo-tagged visit log creation', 'Daily beat list and route optimisation'], color: '#E65100' },
              { agent: 'Underwriter Agent', persona: 'Credit analyst or underwriting manager', role: 'Instant policy Q&A without policy document hunting.', caps: ['Product eligibility criteria lookup', 'Maximum LTV by property and segment', 'Override justification template generation', 'Regulatory guideline and circular reference', 'Rate card and fee structure confirmation', 'Deviation approval requirement check'], color: '#D32F2F' },
            ].map(({ agent, persona, role, caps, color }) => (
              <div key={agent} style={{ background: 'rgba(245,245,247,0.03)', border: `1px solid ${color}30`, borderRadius: 10, padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, background: `radial-gradient(${color}20, transparent)`, borderRadius: '0 10px 0 0' }} />
                <div style={{ background: `${color}20`, borderRadius: 4, display: 'inline-block', padding: '0.3rem 0.65rem', marginBottom: '0.75rem' }}>
                  <span style={{ color, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>{agent}</span>
                </div>
                <p style={{ color: 'rgba(245,245,247,0.4)', fontSize: '0.78rem', marginBottom: '0.5rem' }}>Persona: {persona}</p>
                <p style={{ color: 'rgba(245,245,247,0.65)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{role}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {caps.map(c => (
                    <li key={c} style={{ color: 'rgba(245,245,247,0.55)', fontSize: '0.82rem', display: 'flex', gap: '0.5rem', lineHeight: 1.5 }}>
                      <span style={{ color, flexShrink: 0 }}>→</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '4rem 2rem', background: '#0A0A18' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Ready to deploy agents on your policy?</h2>
        <p style={{ color: 'rgba(245,245,247,0.5)', marginBottom: '2rem' }}>Vitto ingests your policy documents and has the SLM grounded in 5 working days.</p>
        <Link to="/contact" className="btn-primary">Talk to Our Team →</Link>
      </section>
    </main>
  );
}
