'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const stats = [
  { target: 340, suffix: '+', label: 'Tradespeople Placed' },
  { target: 87, suffix: '', label: 'Active Business Clients' },
  { target: 12, suffix: '', label: 'TAFE & RTO Partners' },
  { target: 96, suffix: '%', label: 'Client Satisfaction' },
]

function useCounter(ref: React.RefObject<HTMLSpanElement>, target: number) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = String(Math.floor(eased * target))
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = String(target)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, target])
}

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useCounter(ref, target)
  return (
    <div className={styles.stat}>
      <span className={styles.statNum}><span ref={ref}>0</span>{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} aria-hidden />

      <div className={styles.badge}>
        <span className={styles.dot} aria-hidden />
        Melbourne&apos;s Trades Workforce Engine
      </div>

      <h1 className={styles.h1}>
        We Find<br />
        <em>Your Next</em><br />
        <span className={styles.outline}>Hire.</span>
      </h1>

      <p className={styles.sub}>
        Hireo connects Melbourne&apos;s construction and trades businesses with qualified,
        job-ready workers — fully screened, certified, and ready on day one.
        You run the job. We&apos;ll handle the rest.
      </p>

      <div className={styles.actions}>
        <a href="#how" className="btn-primary">Find Workers Now</a>
        <a href="#how" className="btn-ghost">See How It Works</a>
      </div>

      <div className={styles.statsBar}>
        {stats.map(s => <StatItem key={s.label} {...s} />)}
      </div>
    </section>
  )
}
