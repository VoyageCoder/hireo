'use client'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#how', label: 'How It Works' },
  { href: '#training', label: 'Training' },
  { href: '#partners', label: 'Partners' },
  { href: '#industries', label: 'Industries' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>Hire<span>o</span></a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}><a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a></li>
        ))}
        <li><a href="#how" className={styles.cta} onClick={() => setMenuOpen(false)}>Get Started</a></li>
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
