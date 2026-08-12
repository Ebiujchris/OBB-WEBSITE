import Link from 'next/link';

const poems = [
  { title: 'The Mountains Speak',    lang: 'Lubwisi', lines: ['The Rwenzori stands tall and proud,', 'Her crown of snow above the cloud,', 'She watches over valley and plain,', 'And sends her waters down as rain.'] },
  { title: 'Roots and Rivers',       lang: 'Kwamba',  lines: ['My roots run deep into the earth,', 'Where my ancestors found their worth,', 'The Semuliki flows through my veins,', 'In dry season and when it rains.'] },
  { title: 'Three Voices, One Song', lang: 'Vonoma',  lines: ['Three languages, three ways to say:', 'I love you, I am here, I pray.', 'Yet one heart beats beneath it all,', 'One people answer to one call.'] },
];

export default function Poems() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Poems</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Poetry</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Poems</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '500px' }}>
            Poetic expressions of our culture and lived experiences in Lubwisi, Kwamba and Vonoma.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {poems.map((poem) => (
              <div key={poem.title} className="card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1A1A1A' }}>{poem.title}</h3>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)', flexShrink: 0 }}>{poem.lang}</span>
                </div>
                <div style={{ borderLeft: '3px solid #C4922A', paddingLeft: '1.25rem' }}>
                  {poem.lines.map((line, i) => (
                    <p key={i} className="heading-serif" style={{ fontSize: '1rem', fontStyle: 'italic', color: '#333', lineHeight: 1.8 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.875rem' }}>Share a Poem</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, maxWidth: '440px', marginInline: 'auto', marginBottom: '2rem' }}>Contribute original or traditional poems in any Bwamba language to our growing poetry archive.</p>
            <Link href="/contact" className="btn btn-primary">Contribute a Poem</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
