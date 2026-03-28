import { Link } from 'react-router-dom';

const ENDPOINTS = [
  { method: 'POST', path: '/v1/applications', desc: 'Submit a new loan application with applicant data and document references.' },
  { method: 'GET', path: '/v1/applications/:id', desc: 'Retrieve application status, decisioning output, and contributing factor weights.' },
  { method: 'POST', path: '/v1/bureau/pull', desc: 'Trigger a multi-bureau credit report pull. Returns structured JSON with tradeline data.' },
  { method: 'POST', path: '/v1/kyc/verify', desc: 'Aadhaar OTP, PAN, and face-match verification in a single API call.' },
  { method: 'POST', path: '/v1/decisions/run', desc: 'Execute the decisioning engine on a pre-ingested application. Returns decision, score, and rationale.' },
  { method: 'GET', path: '/v1/loans/:id/schedule', desc: 'Retrieve amortisation schedule, outstanding balance, and next EMI for an active loan.' },
  { method: 'POST', path: '/v1/collections/score', desc: 'Trigger propensity scoring on one or more delinquent accounts.' },
  { method: 'POST', path: '/v1/webhooks', desc: 'Register a webhook endpoint for decisioning events, disbursement confirmations, and payment receipts.' },
];

const CODE = `// Trigger AI decisioning on an application
const response = await fetch('https://api.vitto.ai/v1/decisions/run', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <your_api_key>',
    'Content-Type': 'application/json',
    'X-Institution-Id': '<your_institution_id>',
  },
  body: JSON.stringify({
    application_id: 'app_9f2k3m',
    decision_mode: 'auto',   // 'auto' | 'refer' | 'manual'
    include_factors: true,
  }),
});

const { decision, score, factors, rationale } = await response.json();
// decision: 'approved' | 'referred' | 'declined'
// score: 0-1000 (Vitto credit score)
// factors: [{ name, weight, direction }]
// rationale: human-readable explanation`;

export default function APIPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section style={{ background: 'radial-gradient(ellipse at 50% -5%, rgba(92,107,192,0.2) 0%, transparent 65%), var(--navy)', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>API Infrastructure</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            REST API built for<br />regulated financial systems
          </h1>
          <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 540, margin: '0 auto 2rem' }}>
            Every Vitto capability is available as a versioned, documented API endpoint. Build your origination workflow, integrate with existing core banking, or compose entirely new lending products.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/signup" className="btn-primary">Get API Access →</Link>
            <Link to="/contact" className="btn-secondary">Talk to Engineering</Link>
          </div>
        </div>
      </section>

      {/* Code example */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }}>
          <div>
            <div className="section-label">Integration</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>One API. The entire credit stack.</h2>
            <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Vitto's API follows RESTful conventions with predictable resource URLs, JSON request/response bodies, and standard HTTP status codes. All endpoints are versioned at the path level — no breaking changes without a version increment.
            </p>
            <p style={{ color: 'rgba(245,245,247,0.6)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Authentication is Bearer token with institution-scoped API keys. Rate limits are per-endpoint, not per-account. Webhook events cover every decisioning state transition.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Versioned endpoints (v1, v2)', 'Bearer token auth + HMAC webhook signing', 'JSON:API response format', 'Idempotency-Key support on POST requests', 'p99 latency SLA < 1.2s for decisioning', 'Sandbox environment with synthetic data'].map(f => (
                <div key={f} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#4CAF50' }}>✓</span>
                  <span style={{ color: 'rgba(245,245,247,0.65)', fontSize: '0.875rem' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#07070F', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(245,245,247,0.08)' }}>
            <div style={{ background: '#0D0D1A', padding: '0.75rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', borderBottom: '1px solid rgba(245,245,247,0.06)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D32F2F' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C9A84C' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4CAF50' }} />
              <span style={{ color: 'rgba(245,245,247,0.3)', fontSize: '0.75rem', marginLeft: '0.5rem' }}>decisions.js</span>
            </div>
            <pre style={{ padding: '1.5rem', fontSize: '0.78rem', color: 'rgba(245,245,247,0.75)', overflowX: 'auto', lineHeight: 1.7, fontFamily: "'Courier New', monospace" }}>{CODE}</pre>
          </div>
        </div>

        {/* Endpoints */}
        <div className="section-label">Endpoints</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}>Core API reference</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid rgba(245,245,247,0.08)', borderRadius: 8, overflow: 'hidden' }}>
          {ENDPOINTS.map(({ method, path, desc }, i) => (
            <div key={path} style={{ display: 'grid', gridTemplateColumns: '90px 240px 1fr', gap: '1.5rem', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: i < ENDPOINTS.length - 1 ? '1px solid rgba(245,245,247,0.06)' : 'none', background: i % 2 === 0 ? 'rgba(245,245,247,0.02)' : 'transparent' }}>
              <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700, color: method === 'GET' ? '#4CAF50' : '#C9A84C', background: method === 'GET' ? 'rgba(76,175,80,0.1)' : 'rgba(201,168,76,0.1)', padding: '0.2rem 0.5rem', borderRadius: 3, textAlign: 'center' }}>{method}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'rgba(245,245,247,0.8)' }}>{path}</div>
              <div style={{ color: 'rgba(245,245,247,0.5)', fontSize: '0.85rem' }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '4rem 2rem', background: '#0A0A18' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Ready to integrate?</h2>
        <p style={{ color: 'rgba(245,245,247,0.5)', marginBottom: '2rem' }}>Sandbox credentials provisioned within 1 business day.</p>
        <Link to="/signup" className="btn-primary">Get API Access →</Link>
      </section>
    </main>
  );
}
