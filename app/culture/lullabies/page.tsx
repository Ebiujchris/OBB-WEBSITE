import Link from 'next/link';

const lullabies = [
  { title: 'Oya Leka Alalire',      lang: 'Lubwisi', desc: 'A gentle lullaby sung by mothers to soothe newborns, invoking blessings from the ancestors upon the child.' },
  { title: 'Ninda Omwana Wange',    lang: 'Kwamba',  desc: 'A song of deep maternal love, promising the child protection, guidance and a future filled with belonging.' },
  { title: 'Laliya Mwanangu Lala',  lang: 'Vonoma',  desc: 'A soothing melody that weaves the natural sounds of the Semuliki Valley — rain, birds, flowing water — into a gentle bedtime song.' },
];

export default function Lullabies() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Lullabies</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Children&apos;s songs</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Lullabies</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '500px' }}>
            Gentle songs sung to children across generations — carrying love, belonging and heritage from the very first days of life.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {lullabies.map((l) => (
              <div key={l.title} className="card" style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2.5rem', lineHeight: 1, flexShrink: 0 }}>🎼</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                    <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424', fontStyle: 'italic' }}>{l.title}</h3>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)', flexShrink: 0 }}>{l.lang}</span>
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8 }}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
