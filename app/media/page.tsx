import Link from 'next/link';

const mediaTypes = [
  { href: '/media/photos',    icon: '📸', title: 'Photos',    desc: 'Image gallery and cultural archives.' },
  { href: '/media/videos',    icon: '🎥', title: 'Videos',    desc: 'Cultural ceremonies and recorded events.' },
  { href: '/media/audio',     icon: '🎵', title: 'Audio',     desc: 'Songs, stories and spoken recordings.' },
  { href: '/media/documents', icon: '📄', title: 'Documents', desc: 'Historical records and written archives.' },
];

export default function Media() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Archive</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Media Gallery
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Explore our collection of photos, videos, audio recordings and documents preserving Bwamba culture.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
            {mediaTypes.map((m) => (
              <Link key={m.href} href={m.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '2.25rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem', lineHeight: 1 }}>{m.icon}</div>
                  <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>{m.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ background: '#1F4D3A', borderRadius: '1.25rem', padding: '3.5rem', textAlign: 'center' }}>
            <h2 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Contribute to Our Archive</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '500px', marginInline: 'auto', marginBottom: '2.25rem' }}>
              Do you have photos, videos, audio recordings, or documents related to Bwamba culture? Help us preserve our heritage.
            </p>
            <Link href="/contact" className="btn btn-gold">Submit Your Content</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
