'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/about',       label: 'About' },
  { href: '/omudhingiya', label: 'Omudhingiya' },
  { href: '/languages',   label: 'Languages' },
  { href: '/culture',     label: 'Culture' },
  { href: '/nabantu',     label: 'Our People' },
  { href: '/visit',       label: 'Visit' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
      }}
    >
      <div className="container-site">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem', gap: '1.5rem' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <div style={{
              width: '2.5rem', height: '2.5rem',
              background: '#6B1E2E',
              borderRadius: '0.625rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(107,30,46,0.3)',
              flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'serif', lineHeight: 1 }}>O</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1A1A1A', letterSpacing: '-0.01em' }}>Obudhingiya</span>
              <span style={{ fontWeight: 400, fontSize: '0.625rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.22em', marginTop: '0.1rem' }}>Bwa Bwamba</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0.25rem' }} className="lg-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive(item.href) ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'none' }} className="lg-cta">
            <Link href="/contact" className="btn btn-primary" style={{ padding: '0.625rem 1.375rem', fontSize: '0.8125rem' }}>
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg-hide"
            style={{
              background: 'none',
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              cursor: 'pointer',
              color: '#1A1A1A',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.07)',
          background: '#fff',
          padding: '1rem 0 1.5rem',
        }}>
          <div className="container-site">
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.25rem' }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '0.875rem 1rem',
                    borderRadius: '0.625rem',
                    fontSize: '0.9375rem',
                    fontWeight: isActive(item.href) ? 600 : 400,
                    color: isActive(item.href) ? '#6B1E2E' : '#222',
                    background: isActive(item.href) ? 'rgba(107,30,46,0.06)' : 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {item.label}
                  {isActive(item.href) && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6B1E2E' }} />}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .lg-nav  { display: flex !important; }
          .lg-cta  { display: block !important; }
          .lg-hide { display: none !important; }
        }
      `}</style>
    </header>
  );
}
