import Link from 'next/link';

const languages = [
  {
    name: 'Lubwisi', slug: 'lubwisi', ethnicity: 'Babwisi', type: 'Bantu',
    accentBg: 'rgba(107,30,46,0.07)', accentColor: '#6B1E2E', accentBorder: 'rgba(107,30,46,0.15)', bar: '#6B1E2E',
    gradient: 'linear-gradient(135deg, #6B1E2E, #2E2E2E)',
    description: 'Bantu language spoken by the Babwisi people, sharing linguistic roots with Banyoro, Batooro, Bakonzo, and Baganda.',
    stats: { stories: 45, proverbs: 120, songs: 30 },
  },
  {
    name: 'Kwamba', slug: 'kwamba', ethnicity: 'Bamba', type: 'Nilotic',
    accentBg: 'rgba(196,146,42,0.08)', accentColor: '#8A6515', accentBorder: 'rgba(196,146,42,0.2)', bar: '#C4922A',
    gradient: 'linear-gradient(135deg, #8A6515, #2E2E2E)',
    description: 'Nilotic language preserving the heritage and cultural expressions of the Bamba people through oral traditions.',
    stats: { stories: 38, proverbs: 95, songs: 25 },
  },
  {
    name: 'Vonoma', slug: 'vonoma', ethnicity: 'Vanuma', type: 'Nilotic',
    accentBg: 'rgba(30,77,56,0.07)', accentColor: '#1E4D38', accentBorder: 'rgba(30,77,56,0.15)', bar: '#1E4D38',
    gradient: 'linear-gradient(135deg, #1E4D38, #2E2E2E)',
    description: 'Nilotic language carrying the wisdom and unique cultural narratives of the Vanuma community.',
    stats: { stories: 32, proverbs: 78, songs: 22 },
  },
];

export default function Languages() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Languages</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Our Three Languages
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '560px' }}>
            One Bantu and two Nilotic languages — each carrying unique cultural expressions, wisdom and traditions passed down through generations.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site">

          <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.85, maxWidth: '700px', marginBottom: '3.5rem' }}>
            The Babwisi, Bamba and Vanuma have lived together since time immemorial, intermarrying and sharing a strong bond while preserving their distinct linguistic identities.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {languages.map((lang) => (
              <div key={lang.slug} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {/* Header image */}
                <div style={{ height: '10rem', background: lang.gradient, position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem' }}>
                    <span style={{
                      display: 'inline-block', fontSize: '0.6875rem', fontWeight: 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '0.3rem 0.875rem', borderRadius: '9999px',
                      background: 'rgba(255,255,255,0.15)', color: '#fff',
                      border: '1px solid rgba(255,255,255,0.25)',
                    }}>
                      {lang.type}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <h2 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.375rem' }}>{lang.name}</h2>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
                    Spoken by: {lang.ethnicity}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>{lang.description}</p>

                  {/* Stats */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                    background: '#F2ECD8', borderRadius: '0.875rem',
                    overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)',
                    marginBottom: '1.5rem',
                  }}>
                    {Object.entries(lang.stats).map(([key, val], i, arr) => (
                      <div key={key} style={{
                        padding: '1rem', textAlign: 'center',
                        borderRight: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      }}>
                        <p style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>{val}</p>
                        <p style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginTop: '0.375rem' }}>{key}</p>
                      </div>
                    ))}
                  </div>

                  <Link href={`/languages/${lang.slug}`} className="btn btn-primary" style={{ width: '100%' }}>
                    Explore {lang.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.875rem' }}>
              Language Preservation & Documentation
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, maxWidth: '560px', marginInline: 'auto', marginBottom: '2rem' }}>
              Our language preservation efforts include audio recordings from native speakers, written documentation of folk stories, proverbs, riddles and songs, and educational resources.
            </p>
            <Link href="/contact" className="btn btn-primary">Contribute to Our Archive</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
