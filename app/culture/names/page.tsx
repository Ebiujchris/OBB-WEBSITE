import Link from 'next/link';

const names = [
  { name: 'Kamya',    meaning: 'Born during a time of hardship',           lang: 'Lubwisi', gender: 'M/F' },
  { name: 'Ayongi',   meaning: 'One who brings peace and understanding',   lang: 'Kwamba',  gender: 'M' },
  { name: 'Tibamanya', meaning: 'We do not all know everything',           lang: 'Lubwisi', gender: 'M/F' },
  { name: 'Nalwoga',  meaning: 'One who was born in a time of fear',       lang: 'Vonoma',  gender: 'F' },
  { name: 'Bwambale', meaning: 'Belonging to the Bwamba land',             lang: 'Lubwisi', gender: 'M' },
  { name: 'Musubaho', meaning: 'One who overcomes challenges',             lang: 'Kwamba',  gender: 'M' },
  { name: 'Kyomugisha', meaning: 'By God\'s grace',                        lang: 'Lubwisi', gender: 'M/F' },
  { name: 'Mbambu',   meaning: 'A gift brought at the right time',         lang: 'Vonoma',  gender: 'F' },
];

export default function Names() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Names</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Identity</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Traditional Names
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Names carry meaning, history and identity. Every Bwamba name tells a story about the moment of birth or the hopes of a family.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {names.map((n) => (
              <div key={n.name} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                  <h3 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A' }}>{n.name}</h3>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{n.lang}</span>
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>&ldquo;{n.meaning}&rdquo;</p>
                <p style={{ fontSize: '0.8125rem', color: '#999' }}>Gender: {n.gender}</p>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.875rem' }}>Know a Traditional Name?</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, maxWidth: '460px', marginInline: 'auto', marginBottom: '2rem' }}>
              Help us build a comprehensive dictionary of Bwamba names and their meanings across all three languages.
            </p>
            <Link href="/contact" className="btn btn-primary">Contribute a Name</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
