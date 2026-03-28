import { Link } from 'react-router-dom';
import { useState } from 'react';

const LAYERS = [
  {
    id: 'A',
    icon: '◈',
    name: 'Customer Acquisition',
    color: '#3F51B5',
    desc: 'Every origination channel — digital, assisted, partner, and employee — unified under one lead management layer with deduplication and attribution.',
    modules: [
      { name: 'Lead Management', desc: 'Centralised lead ingestion from web forms, APIs, partner referrals, and field agents. Real-time deduplication via UCIC matching.' },
      { name: 'Partner Onboarding', desc: 'Self-serve partner portal for DSAs, brokers, and connectors with commission tracking and performance dashboards.' },
      { name: 'DIY Journey', desc: 'End-to-end digital application — from eligibility check through document upload and KYC — without agent involvement.' },
      { name: 'Assisted Journey', desc: 'Agent-guided application flow with screen sharing, co-browsing, and document upload assistance built in.' },
      { name: 'Employee/Partner Journey', desc: 'White-labelled application flows for internal staff lending, HNI channels, and institutional partner origination.' },
    ],
  },
  {
    id: 'B',
    icon: '⬡',
    name: 'Underwriting & LOS',
    color: '#D32F2F',
    desc: 'The complete loan origination stack — from identity verification through credit assessment, policy adjudication, and disbursement — running on a unified data model.',
    modules: [
      { name: 'KYC — Individual & Entity', desc: 'Aadhaar OTP, PAN verification, face match, and liveness check for individuals. Entity KYC includes MCA21 fetch, GST verification, and director identity mapping.' },
      { name: 'UCIC & Deduplication', desc: 'Unified Customer Identifier creation on first contact. Fuzzy matching across name variants, PAN, Aadhaar, and phone to prevent duplicate applications.' },
      { name: 'Document Fetch & Analyzer', desc: 'AA framework pull for bank statements, GSTN portal fetch for returns, and ITR retrieval via DigiLocker. ML classifiers extract structured data from unstructured documents.' },
      { name: 'Rule Engine & AI Decisioning', desc: 'Three-layer decisioning: ML score → policy rules → override with full audit. Waterfall and parallel rule execution supported.' },
      { name: 'E-Sign & Disbursement', desc: 'Aadhaar-based e-sign for loan agreements. Disbursement via IMPS, NEFT, or direct NACH with reconciliation against the LMS ledger.' },
    ],
  },
  {
    id: 'C',
    icon: '◎',
    name: 'Collections',
    color: '#E65100',
    desc: 'Intelligence-driven collections — from propensity scoring through omni-channel outreach to field allocation and settlement — replacing manual prioritisation entirely.',
    modules: [
      { name: 'Allotment Engine', desc: 'Daily allotment of delinquent accounts to agents, agencies, and automated channels based on propensity-to-pay score, bucket, and outstanding balance.' },
      { name: 'PTP Capture', desc: 'Promise-to-pay recording across channels — voice, WhatsApp, field visit — with automated follow-up trigger on PTP date and breakage tracking.' },
      { name: 'Payment Gateway Integration', desc: 'In-conversation payment links via WhatsApp and SMS. Supports UPI, NEFT, debit card, and net banking. Real-time payment confirmation updates the LMS ledger.' },
      { name: 'Omni-Channel Automation', desc: 'AI-driven outreach across WhatsApp, SMS, email, AI voice, and IVR. Channel priority determined by previous response behaviour at contact-time.' },
      { name: 'Field Collections App', desc: 'Mobile app for field agents with geo-tagged visit logs, borrower account context, PTP recording, document capture, and route optimisation.' },
    ],
  },
  {
    id: 'D',
    icon: '⬢',
    name: 'Loan Management System',
    color: '#2E7D32',
    desc: 'The ledger layer — managing the financial lifecycle of every active loan from first disbursement through final closure or write-off.',
    modules: [
      { name: 'Ledger Creation', desc: 'Double-entry ledger created on disbursement. Tracks principal, interest, fee, and penalty components separately with day-count convention configuration.' },
      { name: 'Insurance Auto-Deduct', desc: 'Premium calculation and deduction at EMI level for credit life, property, and health insurance products. Integrations with major insurance providers.' },
      { name: 'Loan Closure', desc: 'Prepayment and foreclosure calculation with penal interest and lock-in enforcement. Closure certificate generation and NOC dispatch.' },
      { name: 'Debt Tagging', desc: 'Automated NPA classification per RBI prudential norms. Provision calculation at portfolio level with ageing bucket reports for regulatory submissions.' },
      { name: 'Restructuring & Rescheduling', desc: 'EMI restructuring with RBI-aligned documentation. Moratorium, step-up EMI, and bullet repayment schedules supported.' },
    ],
  },
  {
    id: 'E',
    icon: '◇',
    name: 'CRM & Communications',
    color: '#5C6BC0',
    desc: 'The operational intelligence layer — giving every team from credit to customer service a unified, real-time view of the customer and the tools to act on it.',
    modules: [
      { name: '360° Customer View', desc: 'Unified customer timeline across all touchpoints — application, disbursement, repayment, service requests, and collections — in a single interface.' },
      { name: 'Service Management', desc: 'Ticket creation and SLA tracking for service requests — statement downloads, NOCs, interest certificates, and dispute resolution.' },
      { name: 'Internal Hub', desc: 'Underwriter workbench, collections supervisor dashboard, and back-office operations interface with role-based access control and activity logging.' },
      { name: 'Campaign Management', desc: 'Targeted campaign execution for cross-sell, renewal, and retention. Segment builder with filters on bureau, repayment, and product attributes.' },
      { name: 'Reporting & Analytics', desc: 'Pre-built dashboards for portfolio health, collections efficiency, and channel performance. Scheduled report export to email and SFTP. Custom SQL access for data teams.' },
    ],
  },
];

export default function AutomationPage() {
  const [active, setActive] = useState('A');
  const layer = LAYERS.find(l => l.id === active);

  return (
    <main style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(211,47,47,0.15) 0%, transparent 70%), var(--navy)', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Full-Stack Automation</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            29+ operational modules.<br />5 clean layers.
          </h1>
          <p style={{ color: 'rgba(245,245,247,0.6)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            Every function in the lending lifecycle — from lead capture to loan closure — running on a single data model. No integration tax. No reconciliation overhead.
          </p>
        </div>
      </section>

      {/* Layer navigator */}
      <section style={{ padding: '2rem 2rem 0', borderBottom: '1px solid rgba(245,245,247,0.07)', background: '#0A0A18', position: 'sticky', top: 68, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {LAYERS.map(l => (
            <button key={l.id} onClick={() => setActive(l.id)} style={{
              background: 'none', border: 'none', color: active === l.id ? '#F5F5F7' : 'rgba(245,245,247,0.4)',
              padding: '1rem 1.5rem', fontSize: '0.85rem', fontWeight: active === l.id ? 700 : 500,
              borderBottom: active === l.id ? '2px solid #D32F2F' : '2px solid transparent',
              fontFamily: 'var(--font-body)', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s',
            }}>
              <span style={{ marginRight: '0.5rem', color: active === l.id ? '#D32F2F' : 'rgba(245,245,247,0.3)' }}>Layer {l.id}</span>
              {l.name}
            </button>
          ))}
        </div>
      </section>

      {/* Layer detail */}
      {layer && (
        <section style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ width: 60, height: 60, minWidth: 60, background: `${layer.color}20`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', color: layer.color, border: `1px solid ${layer.color}40` }}>{layer.icon}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: layer.color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Layer {layer.id}</div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>{layer.name}</h2>
                <p style={{ color: 'rgba(245,245,247,0.55)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 640 }}>{layer.desc}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {layer.modules.map(({ name, desc }) => (
                <div key={name} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: layer.color, flexShrink: 0 }} />
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{name}</h3>
                  </div>
                  <p style={{ color: 'rgba(245,245,247,0.55)', fontSize: '0.85rem', lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All layers overview */}
      <section style={{ padding: '3rem 2rem 5rem', background: '#0A0A18' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label">Overview</div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '-0.03em' }}>All five layers at a glance</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {LAYERS.map((l, i) => (
              <div key={l.id} onClick={() => setActive(l.id)} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '1.5rem', alignItems: 'center',
                padding: '1.5rem 0', borderBottom: '1px solid rgba(245,245,247,0.06)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = '0.5rem'}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: l.color, letterSpacing: '0.15em' }}>Layer {l.id}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{l.name}</h3>
                  <p style={{ color: 'rgba(245,245,247,0.4)', fontSize: '0.85rem' }}>{l.modules.length} modules</p>
                </div>
                <div style={{ color: l.color, fontSize: '1.2rem' }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
