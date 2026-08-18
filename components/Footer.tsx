import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#111111', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Uganda-flag colour wash */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 60% 50% at 0% 100%,   rgba(216,35,42,0.22)  0%, transparent 55%),
          radial-gradient(ellipse 50% 45% at 100% 0%,   rgba(252,209,22,0.15) 0%, transparent 55%),
          radial-gradient(ellipse 45% 40% at 100% 100%, rgba(31,77,58,0.18)   0%, transparent 55%)
        `,
      }} />
      {/* top colour-stripe bar: black | yellow | red | black | green | black */}
      <div style={{ position: 'relative', display: 'flex', height: '4px' }}>
        <div style={{ flex: 1, background: '#D8232A' }} />
        <div style={{ flex: 1, background: '#111111' }} />
        <div style={{ flex: 1, background: '#FCD116' }} />
        <div style={{ flex: 1, background: '#111111' }} />
        <div style={{ flex: 1, background: '#1F4D3A' }} />
        <div style={{ flex: 1, background: '#111111' }} />
      </div>
      <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '2.5rem', height: '2.5rem',
                background: '#6B1E2E',
                borderRadius: '0.625rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'serif' }}>O</span>
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#fff' }}>Obudhingiya</div>
                <div style={{ fontSize: '0.625rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Bwa Bwamba</div>
              </div>
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '20rem' }}>
              Cultural institution of the Bamba, Babwisi and Vanuma communities. Preserving heritage since 2012.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FCD116', display: 'inline-block' }} />
              <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>Bundibugyo, Uganda</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Explore
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { href: '/about',       label: 'About Us' },
                { href: '/omudhingiya', label: 'Omudhingiya' },
                { href: '/nabantu',     label: 'Our People' },
                { href: '/culture',     label: 'Culture' },
                { href: '/history',     label: 'History' },
                { href: '/visit',       label: 'Bwamba' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Languages
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { href: '/languages/lubwisi', label: 'Lubwisi' },
                { href: '/languages/kwamba',  label: 'Kwamba' },
                { href: '/languages/vonoma',  label: 'Vonoma' },
                { href: '/languages',         label: 'All Languages' },
                { href: '/media',             label: 'Media Gallery' },
                { href: '/news-events',       label: 'News & Events' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Contact
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <svg width="16" height="16" fill="none" stroke="#D8232A" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginTop: '0.1rem', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>Bundibugyo District, Uganda</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <svg width="16" height="16" fill="none" stroke="#FCD116" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginTop: '0.1rem', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@obudhingiya.org" className="footer-link">
                  info@obudhingiya.org
                </a>
              </li>
            </ul>
            <div style={{ marginTop: '1.75rem' }}>
              <Link href="/contact" className="btn btn-outline-white" style={{ padding: '0.625rem 1.25rem', fontSize: '0.8125rem' }}>
                Send a message
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} Obudhingiya Bwa Bwamba. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[{ href: '/contact', label: 'Contact' }, { href: '/about', label: 'About' }].map(({ href, label }) => (
              <Link key={href} href={href} className="footer-link-sm">{label}</Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
