'use client'
import { useState, useRef, ChangeEvent } from 'react'
import styles from './HowItWorks.module.css'

function EmployerForm() {
  const [submitted, setSubmitted] = useState(false)
  if (submitted) return (
    <div className={styles.success}>
      <div className={styles.successIcon}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <h4>Request Received!</h4>
      <p>Thanks for reaching out. A member of the Hireo team will contact you within one business day.</p>
    </div>
  )
  return (
    <div>
      <div className="form-row">
        <div className="form-group"><label>Company Name *</label><input type="text" placeholder="e.g. ABC Construction" /></div>
        <div className="form-group"><label>Contact Name *</label><input type="text" placeholder="Your full name" /></div>
      </div>
      <div className="form-row">
        <div className="form-group"><label>Phone *</label><input type="tel" placeholder="04XX XXX XXX" /></div>
        <div className="form-group"><label>Email *</label><input type="email" placeholder="you@company.com.au" /></div>
      </div>
      <div className="form-group">
        <label>Trade / Role Required *</label>
        <select defaultValue="">
          <option value="" disabled>Select a trade...</option>
          {['General Labourer','Carpenter','Electrician','Plumber','Concretor','Scaffolder','Civil / Infrastructure','Site Supervisor','Multiple Roles','Other'].map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="form-row">
        <div className="form-group"><label>Number of Workers</label><input type="number" placeholder="e.g. 3" min="1" /></div>
        <div className="form-group"><label>Start Date (approx.)</label><input type="date" /></div>
      </div>
      <div className="form-group"><label>Additional Details</label><textarea placeholder="Project location, specific certifications needed, duration..." /></div>
      <button className="form-submit" onClick={() => setSubmitted(true)}>Submit Workforce Request →</button>
    </div>
  )
}

function SeekerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name)
  }

  if (submitted) return (
    <div className={styles.success}>
      <div className={styles.successIcon}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <h4>You&apos;re Registered!</h4>
      <p>A Hireo career advisor will reach out within 2 business days to discuss your next steps.</p>
    </div>
  )
  return (
    <div>
      <div className="form-row">
        <div className="form-group"><label>First Name *</label><input type="text" placeholder="First name" /></div>
        <div className="form-group"><label>Last Name *</label><input type="text" placeholder="Last name" /></div>
      </div>
      <div className="form-row">
        <div className="form-group"><label>Phone *</label><input type="tel" placeholder="04XX XXX XXX" /></div>
        <div className="form-group"><label>Email *</label><input type="email" placeholder="you@email.com" /></div>
      </div>
      <div className="form-group">
        <label>Your Trade / Skill Area *</label>
        <select defaultValue="">
          <option value="" disabled>Select your trade...</option>
          {['General Labourer','Carpenter','Electrician','Plumber','Concretor','Scaffolder','Civil / Infrastructure','Site Supervisor / Foreman','Apprentice','Other'].map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Years of Experience</label>
          <select defaultValue="">
            <option value="" disabled>Select...</option>
            {['Currently studying / apprentice','0–2 years','2–5 years','5–10 years','10+ years'].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Services Interested In</label>
          <select defaultValue="">
            <option value="" disabled>Select...</option>
            {['Job placement only','Career counselling','Training / certifications','Job fair access','Industry tour','All of the above'].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label>Upload Résumé (optional)</label>
        <div className={styles.uploadArea} onClick={() => fileRef.current?.click()}>
          <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFile} style={{ display: 'none' }} />
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" width="28" height="28">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <p><span>Click to upload</span> or drag &amp; drop your résumé</p>
          <small>PDF, DOC, DOCX — max 5MB</small>
        </div>
        {fileName && <p className={styles.fileName}>📄 {fileName}</p>}
      </div>
      <div className="form-group"><label>Anything Else?</label><textarea placeholder="Availability, location preferences, certifications you already hold..." /></div>
      <button className="form-submit" onClick={() => setSubmitted(true)}>Submit My Details →</button>
    </div>
  )
}

const employerSteps = [
  { num: '01', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, title: 'Tell Us What You Need', desc: 'Submit your workforce requirements — role type, project timeline, certifications needed, and headcount. Takes less than 5 minutes.' },
  { num: '02', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, title: 'We Source & Screen', desc: 'Our team taps into Melbourne\'s trades network. We vet experience, check references, and confirm every certification before presenting anyone.' },
  { num: '03', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Your Worker Starts', desc: 'We handle all compliance and onboarding. Your hire arrives certified, compliant, and ready on day one.' },
]

const seekerServices = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: '1-on-1 Career Counselling', desc: 'Personalised résumé assistance and career direction advice from our trades-specialist advisors. We help you build a clear pathway plan.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: 'Job Fair Opportunities', desc: 'Access exclusive Hireo job fairs where Melbourne\'s top trades employers come to meet you. Walk out with leads — or an offer on the spot.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: 'Industry Visit Tours', desc: 'Get behind the scenes on real Melbourne construction sites. Our tours connect you with employers informally — a great way in the door.' },
]

export default function HowItWorks() {
  const [tab, setTab] = useState<'employers' | 'jobseekers'>('employers')

  return (
    <section id="how" className={styles.section}>
      <div className="section-tag">Get Started</div>
      <h2 className="section-heading">How It <span>Works</span></h2>
      <p className="section-intro">Whether you&apos;re a business looking for workers, or a tradie looking for your next opportunity — Hireo has a pathway for you.</p>

      {/* Tab buttons */}
      <div className={styles.tabs}>
        <button className={`${styles.tabBtn} ${tab === 'employers' ? styles.active : ''}`} onClick={() => setTab('employers')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          For Employers
        </button>
        <button className={`${styles.tabBtn} ${tab === 'jobseekers' ? styles.active : ''}`} onClick={() => setTab('jobseekers')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          For Job Seekers
        </button>
      </div>

      {/* EMPLOYER TAB */}
      {tab === 'employers' && (
        <div className={styles.layout}>
          <div className={styles.steps}>
            {employerSteps.map(s => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className={styles.stepBar} />
              </div>
            ))}
          </div>
          <div className={styles.formBox}>
            <h3>Submit a <span>Workforce Request</span></h3>
            <p className={styles.formSubtitle}>Tell us what your business needs. No commitment required at this stage.</p>
            <EmployerForm />
          </div>
        </div>
      )}

      {/* JOB SEEKER TAB */}
      {tab === 'jobseekers' && (
        <div className={styles.layout}>
          <div>
            <div className="section-tag">What We Offer Job Seekers</div>
            <p style={{ fontSize: '0.92rem', color: 'var(--light)', fontWeight: 300, lineHeight: 1.8, marginBottom: '1.75rem' }}>
              Hireo isn&apos;t just for businesses. If you&apos;re a tradie looking for your next role — or wanting to upskill — we have a range of services to help you get there.
            </p>
            <div className={styles.services}>
              {seekerServices.map(s => (
                <div key={s.title} className={styles.serviceCard}>
                  <div className={styles.svcIcon}>{s.icon}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.seekerNote}>
              🎓 <strong>Partner Discounts:</strong> Registered job seekers get access to our negotiated TAFE and RTO pricing — White Cards, trade certs, and HRW licences at significantly reduced rates through us.
            </div>
          </div>
          <div className={styles.formBox}>
            <h3>Register Your <span>Interest</span></h3>
            <p className={styles.formSubtitle}>Fill in your details and upload your résumé. We&apos;ll match you with opportunities that suit your skills.</p>
            <SeekerForm />
          </div>
        </div>
      )}
    </section>
  )
}
