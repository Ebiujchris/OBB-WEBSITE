import Link from 'next/link';

const riddles = [
  { question: 'I have a neck but no head, and I wear a cap. What am I?', answer: 'A bottle', lang: 'Lubwisi' },
  { question: 'I run but have no legs, I have a mouth but never speak. What am I?', answer: 'A river', lang: 'Kwamba' },
  { question: 'The more you take, the more you leave behind. What am I?', answer: 'Footsteps', lang: 'Vonoma' },
  { question: 'I speak without a mouth and hear without ears. I have no body but I come alive with wind. What am I?', answer: 'An echo', lang: 'Lubwisi' },
  { question: 'I have cities, but no houses live there. I have mountains, but no trees grow there. What am I?', answer: 'A map', lang: 'Kwamba' },
];

export default function Riddles() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Riddles</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Mind & play</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Riddles</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '500px' }}>
            Traditional puzzles that challenge the mind and entertain communities across all ages.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {riddles.map((r, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }}>❓</span>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: '#242424', lineHeight: 1.65 }}>{r.question}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '2.25rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#C99A2E', fontWeight: 600 }}>Answer: {r.answer}</span>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{r.lang}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Know a Riddle?</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, maxWidth: '440px', marginInline: 'auto', marginBottom: '2rem' }}>Help us collect traditional riddles from all three Bwamba languages.</p>
            <Link href="/contact" className="btn btn-primary">Contribute a Riddle</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
