import { useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const INSTITUTION_TYPES = ['Bank', 'NBFC', 'MFI', 'Housing Finance Company', 'Fintech NBFC'];
const LOAN_BOOK_SIZES = ['< ₹50 Cr', '₹50–250 Cr', '₹250–1,000 Cr', '₹1,000–5,000 Cr', '> ₹5,000 Cr'];

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sessionToken, setSessionToken] = useState('');


  const [contact, setContact] = useState({ email: '', phone: '' });
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpToken, setOtpToken] = useState('');

 
  const [org, setOrg] = useState({ institution_name: '', institution_type: '', city: '', loan_book_size: '' });

  
  const [leadId, setLeadId] = useState('');

  const inputStyle = {
    width: '100%', background: 'rgba(245,245,247,0.05)', border: '1px solid rgba(245,245,247,0.12)',
    borderRadius: 4, padding: '0.85rem 1rem', color: '#F5F5F7', fontSize: '0.9rem',
    fontFamily: 'var(--font-body)', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
  };

  const sendOtp = async () => {
    if (!contact.email && !contact.phone) { setError('Enter email or phone number'); return; }
    setLoading(true); setError('');
    try {
      const res = await axios.post(`${API_BASE}/api/auth/send-otp`, { email: contact.email, phone: contact.phone });
      setOtpToken(res.data.otpToken || '');
      setOtpSent(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP. Try again.');
    } finally { setLoading(false); }
  };

  const verifyOtp = async () => {
    if (!otp) { setError('Enter the OTP'); return; }
    setLoading(true); setError('');
    try {
      const res = await axios.post(`${API_BASE}/api/auth/verify-otp`, { email: contact.email, phone: contact.phone, otp });
      setSessionToken(res.data.token);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP. Please try again.');
    } finally { setLoading(false); }
  };

  const submitOrg = async () => {
    if (!org.institution_name || !org.institution_type || !org.city) { setError('Please fill all required fields'); return; }
    setLoading(true); setError('');
    try {
      const res = await axios.post(`${API_BASE}/api/leads`, {
        email: contact.email, phone: contact.phone,
        ...org,
      }, { headers: { Authorization: `Bearer ${sessionToken}` } });
      setLeadId(res.data.id || 'VIT-' + Math.random().toString(36).substr(2, 8).toUpperCase());
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed. Please try again.');
    } finally { setLoading(false); }
  };

  const StepIndicator = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '3rem' }}>
      {[1, 2, 3].map((s, i) => (
        <>
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: `2px solid ${step >= s ? '#D32F2F' : 'rgba(245,245,247,0.15)'}`, background: step > s ? '#D32F2F' : step === s ? 'rgba(211,47,47,0.15)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', color: step >= s ? (step > s ? '#fff' : '#EF5350') : 'rgba(245,245,247,0.35)', transition: 'all 0.3s' }}>
              {step > s ? '✓' : s}
            </div>
            <span style={{ fontSize: '0.72rem', color: step >= s ? 'rgba(245,245,247,0.7)' : 'rgba(245,245,247,0.25)', whiteSpace: 'nowrap' }}>{['Verify Identity', 'Your Organisation', 'Done'][s - 1]}</span>
          </div>
          {i < 2 && <div style={{ flex: 1, height: 1, background: step > s ? '#D32F2F' : 'rgba(245,245,247,0.1)', margin: '0 0.5rem', marginBottom: '1.25rem', transition: 'background 0.3s' }} />}
        </>
      ))}
    </div>
  );

  return (
    <main style={{ paddingTop: 68, minHeight: '100vh', background: 'radial-gradient(ellipse at 50% -10%, rgba(211,47,47,0.12) 0%, transparent 60%), var(--navy)' }}>
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 32, height: 32, background: '#D32F2F', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16 }}>V</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>Vitto</span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>Get started with Vitto</h1>
            <p style={{ color: 'rgba(245,245,247,0.5)', fontSize: '0.9rem', lineHeight: 1.65 }}>Create your institution account and our team will be in touch within 24 hours.</p>
          </div>

          <div style={{ background: 'rgba(245,245,247,0.03)', border: '1px solid rgba(245,245,247,0.08)', borderRadius: 12, padding: '2.5rem' }}>
            <StepIndicator />

            {error && (
              <div style={{ background: 'rgba(211,47,47,0.1)', border: '1px solid rgba(211,47,47,0.25)', borderRadius: 6, padding: '0.85rem 1rem', marginBottom: '1.5rem', color: '#EF5350', fontSize: '0.875rem' }}>
                {error}
              </div>
            )}

       
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Verify your identity</h2>
                <p style={{ color: 'rgba(245,245,247,0.45)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Enter your institutional email or phone number. We'll send you a verification code.</p>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem' }}>Institutional Email</label>
                  <input value={contact.email} onChange={e => setContact(p => ({ ...p, email: e.target.value }))} placeholder="you@institution.in" style={inputStyle} disabled={otpSent}
                    onFocus={e => e.target.style.borderColor = '#D32F2F'} onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: 1, background: 'rgba(245,245,247,0.08)' }} />
                  <span style={{ color: 'rgba(245,245,247,0.3)', fontSize: '0.8rem' }}>or</span>
                  <div style={{ flex: 1, height: 1, background: 'rgba(245,245,247,0.08)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem' }}>Phone Number</label>
                  <input value={contact.phone} onChange={e => setContact(p => ({ ...p, phone: e.target.value }))} placeholder="+91 98XXX XXXXX" style={inputStyle} disabled={otpSent}
                    onFocus={e => e.target.style.borderColor = '#D32F2F'} onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
                </div>
                {!otpSent ? (
                  <button className="btn-primary" onClick={sendOtp} disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Sending...' : 'Send Verification Code →'}
                  </button>
                ) : (
                  <>
                    <div style={{ background: 'rgba(76,175,80,0.08)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 6, padding: '0.75rem 1rem', fontSize: '0.85rem', color: '#4CAF50' }}>
                      ✓ Code sent. Check your email or phone.
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem' }}>Enter 6-digit OTP</label>
                      <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="000000" maxLength={6} style={{ ...inputStyle, fontSize: '1.2rem', letterSpacing: '0.3em', textAlign: 'center' }}
                        onFocus={e => e.target.style.borderColor = '#D32F2F'} onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
                    </div>
                    <button className="btn-primary" onClick={verifyOtp} disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Verifying...' : 'Verify & Continue →'}
                    </button>
                    <button onClick={() => { setOtpSent(false); setOtp(''); setError(''); }} style={{ background: 'none', border: 'none', color: 'rgba(245,245,247,0.4)', fontSize: '0.8rem', cursor: 'pointer' }}>
                      ← Change email or phone
                    </button>
                  </>
                )}
              </div>
            )}

       
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Your organisation</h2>
                <p style={{ color: 'rgba(245,245,247,0.45)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>This helps us route you to the right solution engineer.</p>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem' }}>Institution Name *</label>
                  <input value={org.institution_name} onChange={e => setOrg(p => ({ ...p, institution_name: e.target.value }))} placeholder="Aavas Financiers" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#D32F2F'} onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem' }}>Institution Type *</label>
                  <select value={org.institution_type} onChange={e => setOrg(p => ({ ...p, institution_type: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = '#D32F2F'} onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'}>
                    <option value="" style={{ background: '#1A1A2E' }}>Select type</option>
                    {INSTITUTION_TYPES.map(t => <option key={t} value={t} style={{ background: '#1A1A2E' }}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem' }}>Headquarters City *</label>
                  <input value={org.city} onChange={e => setOrg(p => ({ ...p, city: e.target.value }))} placeholder="Mumbai" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#D32F2F'} onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'rgba(245,245,247,0.55)', marginBottom: '0.4rem' }}>Approximate Loan Book Size</label>
                  <select value={org.loan_book_size} onChange={e => setOrg(p => ({ ...p, loan_book_size: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = '#D32F2F'} onBlur={e => e.target.style.borderColor = 'rgba(245,245,247,0.12)'}>
                    <option value="" style={{ background: '#1A1A2E' }}>Select range</option>
                    {LOAN_BOOK_SIZES.map(s => <option key={s} value={s} style={{ background: '#1A1A2E' }}>{s}</option>)}
                  </select>
                </div>
                <button className="btn-primary" onClick={submitOrg} disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Submitting...' : 'Complete Registration →'}
                </button>
              </div>
            )}

      
            {step === 3 && (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(76,175,80,0.15)', border: '2px solid rgba(76,175,80,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 1.5rem' }}>✓</div>
                <h2 style={{ fontWeight: 800, fontSize: '1.6rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>You're registered</h2>
                <p style={{ color: 'rgba(245,245,247,0.55)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Our team will reach out within 24 hours to schedule your platform walkthrough.
                </p>
                {leadId && (
                  <div style={{ background: 'rgba(245,245,247,0.04)', borderRadius: 6, padding: '0.85rem', marginBottom: '1.5rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'rgba(245,245,247,0.5)' }}>
                    Reference ID: <span style={{ color: '#EF5350' }}>{leadId}</span>
                  </div>
                )}
                <p style={{ color: 'rgba(245,245,247,0.35)', fontSize: '0.8rem' }}>
                  In the meantime, explore our <a href="/platform" style={{ color: '#EF5350' }}>platform documentation</a>.
                </p>
              </div>
            )}
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(245,245,247,0.3)', fontSize: '0.78rem', marginTop: '1.5rem', lineHeight: 1.6 }}>
            By signing up, you agree to Vitto's Terms of Service and Privacy Policy.<br />
            Your data is protected under SOC 2 Type II controls.
          </p>
        </div>
      </section>
    </main>
  );
}
