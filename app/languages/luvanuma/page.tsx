import Link from 'next/link';

export default function Luvanuma() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/languages" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Languages</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Luvanuma</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Language</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Luvanuma
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '480px' }}>
            An integral part of Bwamba heritage, carrying unique perspectives and cultural narratives.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>About Luvanuma</h2>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
              Luvanuma is an integral part of Bwamba heritage, carrying unique perspectives and cultural narratives that have shaped our community. The language is a living bridge between the Vanuma community's past and future, encoding values, history and identity in every phrase.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { icon: '📚', title: 'Folk Stories', href: '/culture/stories' },
              { icon: '💬', title: 'Proverbs',     href: '/culture/proverbs' },
              { icon: '❓', title: 'Riddles',      href: '/culture/riddles' },
              { icon: '🎵', title: 'Songs',        href: '/culture/songs' },
              { icon: '✍️', title: 'Poems',        href: '/culture/poems' },
              { icon: '🎼', title: 'Lullabies',    href: '/culture/lullabies' },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{cat.icon}</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#242424' }}>{cat.title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/languages" className="btn btn-outline-dark" style={{ padding: '0.625rem 1.375rem', fontSize: '0.875rem' }}>← All Languages</Link>
            <Link href="/contact" className="btn btn-primary">Contribute Content</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
