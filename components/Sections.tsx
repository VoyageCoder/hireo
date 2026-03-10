import styles from './Sections.module.css'

/* ──────────────────────────────────────
   PARTNERS
────────────────────────────────────── */
const partnerCards = [
  { name: 'RMIT TAFE', region: 'Melbourne CBD', discount: 'Up to 20% off' },
  { name: 'Chisholm Institute', region: 'South-East VIC', discount: 'Up to 18% off' },
  { name: 'Melbourne Poly', region: 'Multiple Campuses', discount: 'Up to 15% off' },
  { name: 'Box Hill Institute', region: 'Eastern Suburbs', discount: 'Up to 17% off' },
  { name: 'Swinburne TAFE', region: 'Hawthorn & beyond', discount: 'Up to 15% off' },
  { name: 'Gordon TAFE', region: 'Geelong / Regional VIC', discount: 'Up to 20% off' },
  { name: 'WorkSafe VIC RTOs', region: 'High Risk Work Licences', discount: 'Group Rates' },
  { name: 'First Aid Partners', region: 'VIC-Wide Delivery', discount: 'Up to 25% off' },
]

export function Partners() {
  return (
    <section id="partners" className={styles.partners}>
      <div className={styles.partnersIntro}>
        <div className="reveal">
          <div className="section-tag">Exclusive Partnerships</div>
          <h2 className="section-heading">Our Business <span>Partners</span></h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--light)', fontWeight: 300, lineHeight: 1.8 }}>
            We&apos;ve built direct partnerships with Victoria&apos;s leading TAFEs and Registered Training Organisations, giving our clients access to discounted training rates you can&apos;t get by going direct.
          </p>
        </div>
        <div className="reveal">
          <p style={{ fontSize: '0.95rem', color: 'var(--light)', fontWeight: 300, lineHeight: 1.8, marginBottom: '1.5rem' }}>
            We negotiate volume agreements on your behalf, then coordinate enrolment, scheduling, and certification delivery. One invoice through Hireo — transparent pricing, always.
          </p>
          <div className={styles.tagRow}>
            {['TAFE Victoria','ASQA Accredited','RTO Registered','VBA Approved'].map(t => (
              <span key={t} className={styles.orangeTag}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.partnerCardGrid + ' reveal'}>
        {partnerCards.map(p => (
          <div key={p.name} className={styles.partnerCard}>
            <div className={styles.partnerCardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div className={styles.partnerCardName}>{p.name}</div>
            <div className={styles.partnerCardRegion}>{p.region}</div>
            <div className={styles.partnerCardDiscount}>{p.discount}<span>negotiated rate</span></div>
          </div>
        ))}
      </div>

      <div className={styles.partnersNote + ' reveal'}>
        💡 <strong>How our partner pricing works:</strong> Hireo negotiates volume rates with training providers — rates that individual businesses and workers can&apos;t access alone. We pass on those savings with a small, transparent coordination margin. In almost every case, you still pay less than going direct — and we handle all scheduling, enrolment, and compliance verification.
      </div>
    </section>
  )
}

/* ──────────────────────────────────────
   INDUSTRIES
────────────────────────────────────── */
const industries = [
  { icon: '🏗️', name: 'Construction', desc: 'Residential, commercial, and high-rise. Labourers, formworkers, concretes, and site supervisors.' },
  { icon: '⚡', name: 'Electrical', desc: 'Licensed electricians, apprentices, and electrical contractors for all project scales.' },
  { icon: '🔧', name: 'Plumbing', desc: 'VBA-licensed plumbers for commercial fitouts, residential builds, and civil drainage.' },
  { icon: '🪵', name: 'Carpentry', desc: 'Frame and truss, fit-out carpenters, cabinet makers, and formwork specialists.' },
  { icon: '🛣️', name: 'Civil & Infrastructure', desc: 'Road crews, bridge workers, utilities, and civil plant operators across Victoria.' },
  { icon: '🏠', name: 'Fit-Out & Renovation', desc: 'Painters, tilers, plasterers, and general trades for commercial and residential fit-outs.' },
]

export function Industries() {
  return (
    <section id="industries" className={styles.industries}>
      <div className="section-tag">Industries Served</div>
      <h2 className="section-heading">Built for <span>Trades</span></h2>
      <p className="section-intro reveal">From residential builds to major civil infrastructure — if your site needs skilled hands, Hireo finds them.</p>
      <div className={styles.industryGrid + ' reveal'}>
        {industries.map(i => (
          <div key={i.name} className={styles.industryCard}>
            <span className={styles.indIcon}>{i.icon}</span>
            <h3>{i.name}</h3>
            <p>{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ──────────────────────────────────────
   PRICING
────────────────────────────────────── */
const prices = [
  { label: 'Placement Fee', num: 'Fixed', desc: 'A one-time placement fee per worker successfully placed. Charged only when you confirm a start date — no success, no charge.', featured: false },
  { label: 'Training & Certs', num: 'Cost+', desc: 'We secure bulk-negotiated TAFE rates and add a small service margin. You still pay less than going direct — and we do all the admin.', featured: true },
  { label: 'Ongoing Support', num: 'Flex', desc: 'Need ongoing workforce management or bulk hiring across a project? Ask us about project-based partnership rates.', featured: false },
]

export function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="section-tag">Transparent Fees</div>
      <h2 className="section-heading">How We <span>Charge</span></h2>
      <p className="section-intro reveal">No hidden fees. No lock-in contracts. Hireo charges businesses — never the workers.</p>
      <div className={styles.priceGrid + ' reveal'}>
        {prices.map(p => (
          <div key={p.label} className={`${styles.priceCard} ${p.featured ? styles.featured : ''}`}>
            <div className={styles.priceLabel}>{p.label}</div>
            <div className={styles.priceNum}>{p.num}</div>
            <div className={styles.priceDesc}>{p.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.priceNote + ' reveal'}>
        💡 <strong>How the training margin works:</strong> We negotiate with TAFEs and RTOs for discounted group rates. We pass on those savings and add a transparent coordination fee — disclosed upfront. You&apos;ll always know exactly what you&apos;re paying for, and it&apos;ll still beat going direct.
      </div>
    </section>
  )
}

/* ──────────────────────────────────────
   WHY HIREO
────────────────────────────────────── */
const whyItems = [
  { title: 'B2B Only', desc: 'We serve employers, not candidates. No job board noise — dedicated workforce solutions for your business.' },
  { title: 'Melbourne Local', desc: 'We know Victorian compliance, VBA requirements, and the local trades market inside-out.' },
  { title: 'All-In-One Service', desc: 'Find them. Train them. Certify them. One provider, one invoice, one point of contact.' },
  { title: 'Compliance Guaranteed', desc: 'Every placement is fully compliant — White Cards, HRW licences, and all Victorian certifications verified before day one.' },
]

export function WhyHireo() {
  return (
    <section id="why" className={styles.why}>
      <div className={styles.whyContent + ' reveal'}>
        <div className="section-tag">Why Hireo</div>
        <h2 className="section-heading">Built for<br /><span>Businesses.</span><br />Not Job Seekers.</h2>
        <p style={{ fontSize: '0.92rem', color: 'var(--light)', fontWeight: 300, lineHeight: 1.8, marginBottom: '0.5rem' }}>
          Every decision we make is through the lens of the business hiring — not the individual looking for work.
        </p>
        <div className={styles.whyList}>
          {whyItems.map(w => (
            <div key={w.title} className={styles.whyItem}>
              <div className={styles.whyCheck}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.whyVisual}>
        <div className={styles.whyVisualInner}>
          <span className={styles.whyBig}>VIC</span>
          <span className={styles.whyBigSub} style={{ color: 'var(--white)' }}>TRADES</span>
          <span className={styles.whyBigSub} style={{ color: 'var(--orange)' }}>WORKFORCE</span>
          <span className={styles.whyLabel}>Melbourne, Victoria, Australia</span>
          <div className={styles.complianceBadges}>
            {['✓ SafeWork VIC Aligned','✓ VBA Compliance Ready','✓ ASQA Registered RTOs Only'].map(b => (
              <div key={b} className={styles.complianceBadge}>{b}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────
   ABOUT
────────────────────────────────────── */
export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutGrid}>
        <div className="reveal">
          <div className={styles.melbBadge}>
            <span style={{ fontSize: '2rem' }}>🇦🇺</span>
            <div>
              <strong>Proudly Melbourne-Based</strong>
              <span>Victoria&apos;s local trades workforce partner</span>
            </div>
          </div>
          <div className="section-tag">About Hireo</div>
          <h2 className="section-heading">Local Knowledge.<br /><span>Real Results.</span></h2>
          <p className={styles.aboutText}>Hireo was built by people who know Melbourne&apos;s construction industry — not by recruiters who treat every city the same. We understand Victorian compliance, the pace of project timelines, and the real cost of a vacant site role.</p>
          <p className={styles.aboutText}>We started with a simple idea: businesses shouldn&apos;t have to manage five different suppliers just to get someone on site. So we built a single service covering sourcing, vetting, training, and certification — all under one roof.</p>
          <a href="#how" className="btn-primary" style={{ marginTop: '1.2rem', display: 'inline-block' }}>Partner with Hireo</a>
        </div>
        <div className={styles.skylineBox + ' reveal'}>
          <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet" className={styles.skylineSvg}>
            <g fill="var(--orange)" opacity="0.55">
              <rect x="55" y="30" width="30" height="270"/><rect x="60" y="18" width="20" height="18"/><rect x="66" y="8" width="10" height="14"/>
              <rect x="105" y="78" width="35" height="222"/><rect x="110" y="58" width="25" height="26"/>
              <rect x="155" y="48" width="28" height="252"/><rect x="190" y="68" width="22" height="232"/>
              <rect x="228" y="88" width="30" height="212"/>
              <rect x="268" y="118" width="40" height="182"/><rect x="318" y="98" width="25" height="202"/>
              <rect x="352" y="138" width="35" height="162"/><rect x="398" y="78" width="28" height="222"/>
              <rect x="438" y="108" width="45" height="192"/><rect x="492" y="128" width="30" height="172"/>
              <rect x="532" y="148" width="40" height="152"/><rect x="582" y="118" width="25" height="182"/>
              <rect x="618" y="158" width="50" height="142"/><rect x="678" y="98" width="30" height="202"/>
              <rect x="718" y="138" width="40" height="162"/>
              {/* cranes */}
              <rect x="248" y="108" width="4" height="78"/><rect x="218" y="113" width="34" height="3"/>
              <rect x="498" y="118" width="4" height="58"/><rect x="476" y="123" width="26" height="3"/>
              <rect x="646" y="98" width="4" height="68"/><rect x="628" y="103" width="22" height="3"/>
            </g>
            <rect x="0" y="295" width="800" height="5" fill="var(--orange)" opacity="0.25"/>
          </svg>
          <span className={styles.skylineLabel}>Melbourne Skyline</span>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────
   CTA BANNER
────────────────────────────────────── */
export function CtaBanner() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.ctaText}>
        <h2 className="section-heading" style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Ready to Fill<br />Your Roster?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>Tell us what your business needs. We&apos;ll get to work immediately.</p>
      </div>
      <div className={styles.ctaActions}>
        <a href="mailto:hello@hireo.com.au" className="btn-dark">Contact Us Today</a>
        <p style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>hello@hireo.com.au · Melbourne, VIC</p>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────
   FOOTER
────────────────────────────────────── */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <a href="#" className={styles.footerLogo}>Hire<span>o</span></a>
          <p className={styles.footerTagline}>Melbourne&apos;s trades workforce engine. We find, train, and certify the workers your business needs.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {[['#how','Workforce Placement'],['#training','Training & Certs'],['#industries','Industries'],['#pricing','Pricing']].map(([h,l]) => <li key={l}><a href={h}>{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {[['#about','About Hireo'],['#why','Why Hireo'],['#partners','Our Partners'],['#','Compliance']].map(([h,l]) => <li key={l}><a href={h}>{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@hireo.com.au">hello@hireo.com.au</a></li>
            <li><a href="tel:1300000000">1300 XXX XXX</a></li>
            <li><a href="#">Melbourne, VIC</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2025 Hireo Pty Ltd. ABN XX XXX XXX XXX. Melbourne, Victoria, Australia.</p>
        <div className={styles.footerLegal}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Compliance</a>
        </div>
      </div>
    </footer>
  )
}
