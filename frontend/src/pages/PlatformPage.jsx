import { Link } from 'react-router-dom';

const MODULES = [
  {
    id: 'data-assessment',
    icon: '◈',
    name: 'Data-Based Assessment',
    tagline: 'Multi-source financial signal extraction in real time.',
    detail: `Vitto's data layer connects directly to CIBIL, Experian, CRIF, and CKYC registries via API — not batch file transfers. Bank statement analysis runs through a proprietary cash flow classifier that segments income, expense patterns, and EMI obligations at transaction level. GST return parsing extracts revenue seasonality and GST-to-invoice discrepancy signals that bureau data cannot surface.\n\nAlternative data integrations include account aggregator (AA) framework pull, UPI transaction history, and telecom data — all processed within the underwriting request lifecycle, not as offline supplements.`,
    specs: ['Bureau: CIBIL, Experian, CRIF, CKYC', 'Bank Statement: Rule-based + ML classifier', 'AA Framework: Account aggregator pull', 'GST: Revenue & discrepancy signals', 'Response SLA: < 800ms p99'],
  },
  {
    id: 'ml-model',
    icon: '⬡',
    name: 'ML Model Layer',
    tagline: 'Gradient boosting and transformer models trained on Indian credit data.',
    detail: `Generic ML APIs are not credit models. Vitto's underwriting models are trained on labelled outcomes from Indian BFSI portfolios — including bureau behaviour at different DPD buckets, cash flow signals specific to GST-registered SMEs, and repayment patterns from microfinance cohorts. \n\nThe model layer supports segment-specific model selection: MSME, consumer, microfinance, and housing each have separate model pipelines calibrated to their risk profiles. Model outputs include a probability of default (PD), expected loss (EL), and a set of contributing factor weights — not a black-box score.\n\nModels are retrained monthly on live portfolio data and validated against a holdout set before deployment. A/B shadow deployment mode allows new model versions to run alongside production without affecting live decisions.`,
    specs: ['Algorithms: XGBoost, LightGBM, Transformer ensembles', 'Segments: MSME, Consumer, MFI, Housing', 'Output: PD, EL, contributing factors', 'Retraining: Monthly with holdout validation', 'Shadow mode: A/B deployment available'],
  },
  {
    id: 'rule-engine',
    icon: '⬢',
    name: 'Rule Engine & Decisioning',
    tagline: 'Policy-aware rules that learn from outcomes.',
    detail: `Most rule engines enforce policy. Vitto's rule engine enforces policy and learns from it. Rules are authored in a structured DSL with versioning, rollback capability, and impact simulation before deployment. A rule change can be tested against the last 90 days of applications in sandbox before going live.\n\nDecisioning is a three-layer pipeline: first the ML score, then policy rules, then an override layer with full audit capture. Overrides require structured justification and are tracked at underwriter level for performance attribution.\n\nThe engine supports waterfall and parallel rule execution, conditional branching, and score band routing. All decisioning events are written to an immutable audit log for regulatory reporting.`,
    specs: ['DSL-based rule authoring', 'Version control + rollback', 'Sandbox simulation on historical data', 'Override capture with justification', 'Immutable audit log for RBI/NHB'],
  },
  {
    id: 'fraud-intelligence',
    icon: '◇',
    name: 'Fraud Intelligence',
    tagline: 'Network graph analysis and device signals at underwriting speed.',
    detail: `Fraud detection in lending fails when it operates as a separate system from underwriting. By the time a fraud flag reaches the credit file, the decision may have already been made. Vitto's fraud intelligence runs within the underwriting request — not as a post-decisioning check.\n\nNetwork graph analysis maps applicant identity against a knowledge graph built from past applications, bureau identities, device fingerprints, and address clusters. Common fraud patterns — synthetic identity rings, mule account networks, and first-party fraud indicators — are detected at graph query time.\n\nDevice fingerprinting captures browser, mobile, and application-layer signals. Velocity checks run across IP, device, phone number, and PAN to catch rapid-fire applications that indicate organised fraud.`,
    specs: ['Graph DB: Neo4j-based identity network', 'Device fingerprinting: browser + mobile', 'Velocity: IP, device, PAN, phone', 'Fraud patterns: Synthetic ID, mule accounts', 'Output: Risk signal (not binary block)'],
  },
  {
    id: 'collection-intelligence',
    icon: '◎',
    name: 'Collection Intelligence',
    tagline: 'Propensity scoring and omni-channel automation.',
    detail: `Collections teams that operate without propensity models are flying blind. The DPD bucket determines the priority — not the borrower's actual likelihood to repay. Vitto's collections module scores every delinquent account daily on propensity-to-pay, preferred contact channel, and optimal contact time.\n\nScoring inputs include payment history pattern, UPI activity, location data (for field collections), and bureau update signals. High-propensity accounts are routed to AI-driven WhatsApp and SMS outreach. Low-propensity accounts with high balance are escalated to field agents with full account context on the Vitto Field Agent mobile app.\n\nAI voice calls handle payment reminders and PTP captures at scale. Recorded calls are transcribed and intent-classified to feed back into the propensity model.`,
    specs: ['Daily propensity scoring', 'Omni-channel: WhatsApp, SMS, AI voice, field', 'PTP capture and tracking', 'Field agent mobile app with account context', 'Call transcription + intent classification'],
  },
  {
    id: 'agentic-ai',
    icon: '⬟',
    name: 'Agentic AI Layer',
    tagline: 'Domain-trained SLMs for borrowers, field agents, and underwriters.',
    detail: ``,
    isAgentic: true,
  },
];

function AgenticSection() {
  return (
    <div>
      <div style={{ background: 'rgba(211,47,47,0.08)', border: '1px solid rgba(211,47,47,0.2)', borderRadius: 8, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.75rem', color: '#EF5350' }}>Why generic LLMs cannot operate in regulated lending</h4>
        <p style={{ color: 'rgba(245,245,247,0.65)', fontSize: '0.9rem', lineHeight: 1.75 }}>
          A general-purpose language model — GPT-4, Gemini, or similar — has no concept of your credit policy, your RBI-aligned documentation requirements, or the specific regulatory constraints that govern a credit decline explanation. It will hallucinate policy clauses, fabricate regulatory references, and produce explanations that cannot be used in a customer dispute. The problem is not intelligence. The problem is domain grounding.
        </p>
      </div>
      <p style={{ color: 'rgba(245,245,247,0.65)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Vitto deploys Small Language Models (SLMs) — purpose-trained on your institution's credit policy documents, product guidelines, and regulatory framework. The SLM is grounded via a Retrieval-Augmented Generation (RAG) pipeline that retrieves the relevant policy section before generating any response. If the answer is not in the policy corpus, the SLM says so — it does not speculate.
      </p>
      <p style={{ color: 'rgba(245,245,247,0.65)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
        Outputs are deterministic by design: the same query against the same policy version produces the same response. This is a regulatory requirement — not a feature. Every response includes a citation to the specific policy clause that grounded it.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {[
          { agent: 'Borrower Agent', role: 'Self-service queries via WhatsApp and web chat', caps: ['Loan status and repayment schedule', 'EMI calculation and restructuring options', 'Document upload and KYC status', 'Escalation to human agent with context'] },
          { agent: 'Field Agent', role: 'Assisted collections for on-ground teams', caps: ['Account summary and DPD history', 'PTP recording with next action', 'Route optimisation for field visits', 'Dispute flagging and escalation'] },
          { agent: 'Underwriter Agent', role: 'Policy Q&A for credit analysts', caps: ['Policy clause retrieval and citation', 'Product eligibility criteria lookup', 'Override justification assistance', 'Regulatory guideline reference'] },
        ].map(({ agent, role, caps }) => (
          <div key={agent} className="card" style={{ padding: '1.5rem' }}>
            <div style={{ background: 'rgba(211,47,47,0.12)', borderRadius: 6, padding: '0.4rem 0.75rem', display: 'inline-block', marginBottom: '0.85rem' }}>
              <span style={{ color: '#EF5350', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>{agent}</span>
            </div>
            <p style={{ color: 'rgba(245,245,247,0.5)', fontSize: '0.8rem', marginBottom: '1rem', lineHeight: 1.6 }}>{role}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {caps.map(c => (
                <li key={c} style={{ color: 'rgba(245,245,247,0.65)', fontSize: '0.8rem', display: 'flex', gap: '0.5rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#D32F2F', flexShrink: 0 }}>→</span>{c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(245,245,247,0.04)', borderRadius: 6, border: '1px solid rgba(245,245,247,0.08)' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {['RAG Pipeline', 'Policy-grounded', 'Hallucination-controlled', 'Explainable outputs', 'Audit trail'].map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(245,245,247,0.55)', fontSize: '0.8rem' }}>
              <span style={{ color: '#4CAF50' }}>✓</span>{s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(211,47,47,0.18) 0%, transparent 70%), var(--navy)', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>AI-First Platform</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Six modules. One decisioning intelligence.
          </h1>
          <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 2rem' }}>
            Each module is independently deployable. Together, they form a complete AI-native credit stack that no patched legacy system can replicate.
          </p>
          <Link to="/contact" className="btn-primary">Request Platform Demo →</Link>
        </div>
      </section>

      {/* Modules */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {MODULES.map(({ id, icon, name, tagline, detail, specs, isAgentic }) => (
            <div key={id} id={id} style={{ scrollMarginTop: 90 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 52, height: 52, background: 'rgba(211,47,47,0.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: '#D32F2F', border: '1px solid rgba(211,47,47,0.2)' }}>{icon}</div>
                <div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{name}</h2>
                  <p style={{ color: 'rgba(245,245,247,0.5)', fontSize: '0.9rem' }}>{tagline}</p>
                </div>
              </div>
              <div style={{ borderLeft: '2px solid rgba(211,47,47,0.3)', paddingLeft: '2rem' }}>
                {isAgentic ? <AgenticSection /> : (
                  <>
                    {detail.split('\n\n').map((p, i) => (
                      <p key={i} style={{ color: 'rgba(245,245,247,0.65)', fontSize: '0.925rem', lineHeight: 1.8, marginBottom: '1rem' }}>{p}</p>
                    ))}
                    {specs && (
                      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                        {specs.map(s => (
                          <div key={s} style={{ background: 'rgba(245,245,247,0.05)', border: '1px solid rgba(245,245,247,0.1)', borderRadius: 4, padding: '0.35rem 0.75rem', fontSize: '0.78rem', color: 'rgba(245,245,247,0.6)', fontFamily: 'monospace' }}>{s}</div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div style={{ height: 1, background: 'rgba(245,245,247,0.06)', marginTop: '3rem' }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', background: '#0A0A18' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Ready to see it in action?</h2>
        <p style={{ color: 'rgba(245,245,247,0.5)', marginBottom: '2rem' }}>45-minute technical walkthrough with live data.</p>
        <Link to="/contact" className="btn-primary">Book a Demo →</Link>
      </section>
    </main>
  );
}
