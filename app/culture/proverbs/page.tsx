import Link from 'next/link';

const proverbs = [
  { text: 'A child who is not embraced by the village will burn it down to feel its warmth.', lang: 'Lubwisi' },
  { text: 'The forest does not forget the tree that stood in it.', lang: 'Kwamba' },
  { text: 'You cannot wake a person who is pretending to sleep.', lang: 'Vonoma' },
  { text: 'Until the lion learns to write, every story will glorify the hunter.', lang: 'Lubwisi' },
  { text: 'Rain does not fall on one roof alone.', lang: 'Kwamba' },
  { text: 'The river that forgets its source will dry up.', lang: 'Vonoma' },
  { text: 'A tree is straightened while it is still young.', lang: 'Lubwisi' },
  { text: 'Knowledge is like a garden: if it is not cultivated, it cannot be harvested.', lang: 'Kwamba' },
];

export default function Proverbs() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Proverbs</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Wisdom</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Proverbs</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '500px' }}>
            Wisdom and insights expressed through time-honoured sayings across Lubwisi, Kwamba and Vonoma.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {proverbs.map((p, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '1rem', padding: '1.75rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', color: '#C4922A', fontFamily: 'serif', lineHeight: 1, flexShrink: 0, marginTop: '0.15rem' }}>&ldquo;</span>
                <div>
                  <p className="heading-serif" style={{ fontSize: '1.0625rem', fontStyle: 'italic', color: '#1A1A1A', lineHeight: 1.55, marginBottom: '0.75rem' }}>{p.text}</p>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{p.lang}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.875rem' }}>Know a Proverb?</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, maxWidth: '440px', marginInline: 'auto', marginBottom: '2rem' }}>Share traditional proverbs in Lubwisi, Kwamba or Vonoma to grow our archive.</p>
            <Link href="/contact" className="btn btn-primary">Contribute a Proverb</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
