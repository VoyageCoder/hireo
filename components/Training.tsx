import styles from './Training.module.css'

const certs = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, name: 'White Card (CPCWHS1001)', desc: 'General Construction Induction — mandatory for all site workers' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, name: 'High Risk Work Licences', desc: 'Scaffolding, rigging, forklift, EWP, crane operation' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, name: 'Trade Certificates', desc: 'Certificate III/IV in electrical, plumbing, carpentry & more' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>, name: 'First Aid & Safety', desc: 'HLTAID011 First Aid, CPR, and site safety compliance' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, name: 'Asbestos Awareness', desc: 'Mandatory for demolition, renovation, and maintenance works' },
]

const partners = ['RMIT TAFE', 'Chisholm', 'Melbourne Poly', 'Box Hill Inst.', 'Swinburne', 'Gordon TAFE']
const tags = ['SafeWork VIC', 'RTO Accredited', 'ASQA Compliant', 'CITB Approved', 'VBA Registered']

export default function Training() {
  return (
    <section id="training" className={styles.section}>
      <div className={styles.grid}>
        <div className="reveal">
          <div className="section-tag">One-Stop Shop</div>
          <h2 className="section-heading">Training &amp;<br /><span>Certifications</span></h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--light)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2rem' }}>
            We don&apos;t just find workers. We make sure they have every card, ticket, and licence your site demands — coordinated through our TAFE and RTO partnerships, billed through us.
          </p>
          <div className={styles.certList}>
            {certs.map(c => (
              <div key={c.name} className={styles.certItem}>
                <div className={styles.certIcon}>{c.icon}</div>
                <div>
                  <div className={styles.certName}>{c.name}</div>
                  <div className={styles.certDesc}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className={styles.partnerBox}>
            <h3>Our Training <span>Partners</span></h3>
            <p>We&apos;ve negotiated bulk rates with leading Victorian TAFEs and RTOs. You get access to these prices — plus our coordination — rolled into a simple service fee.</p>
            <div className={styles.partnerGrid}>
              {partners.map(p => <div key={p} className={styles.partnerTile}>{p}</div>)}
            </div>
            <div className={styles.tags}>
              {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
