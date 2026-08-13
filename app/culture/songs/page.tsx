import Link from 'next/link';

const songs = [
  { title: 'Enyimba ya Bwamba',   type: 'Ceremonial', lang: 'Lubwisi', desc: 'A ceremonial song sung during the harvest season, expressing gratitude to the land and ancestors.' },
  { title: 'Omugambo gw\'Obulamu', type: 'Lament',     lang: 'Kwamba',  desc: 'A reflective song about the cycle of life, sung during times of loss and remembrance.' },
  { title: 'Ngoma ya Amani',      type: 'Celebration', lang: 'Vonoma',  desc: 'A joyful celebration song performed during community gatherings and festivals.' },
  { title: 'Ekyoto ky\'Obuntu',   type: 'Work song',  lang: 'Lubwisi', desc: 'Sung during communal work to keep spirits high and coordinate group effort.' },
  { title: 'Bwamba Nyote',        type: 'Unity',      lang: 'Kwamba',  desc: 'A unifying song that calls together all three communities under one shared identity.' },
];

export default function Songs() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Songs</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Music</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Songs</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '500px' }}>
            Musical expressions of joy, sorrow, celebration and daily life across the Bwamba communities.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {songs.map((s) => (
              <div key={s.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.625rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(31,77,58,0.08)', color: '#1F4D3A', border: '1px solid rgba(31,77,58,0.15)' }}>{s.type}</span>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{s.lang}</span>
                </div>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424', marginBottom: '0.75rem', fontStyle: 'italic' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#242424', borderRadius: '1.25rem', padding: '3rem', textAlign: 'center' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Share a Song</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '480px', marginInline: 'auto', marginBottom: '2rem' }}>
              Help us build a complete archive of traditional Bwamba songs in all three languages.
            </p>
            <Link href="/contact" className="btn btn-gold">Contribute a Song</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
