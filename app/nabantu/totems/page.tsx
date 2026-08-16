import Link from 'next/link';

const totems = [
  { symbol: '🦅', name: 'Eagle',    significance: 'Vision, freedom and spiritual elevation' },
  { symbol: '🐘', name: 'Elephant', significance: 'Strength, memory and community wisdom' },
  { symbol: '🦁', name: 'Lion',     significance: 'Courage, leadership and protection' },
  { symbol: '🐍', name: 'Serpent',  significance: 'Transformation, healing and ancestral connection' },
  { symbol: '🦒', name: 'Giraffe',  significance: 'Far-sightedness and peaceful coexistence' },
  { symbol: '🐊', name: 'Crocodile','significance': 'Guardianship of water sources and ancient knowledge' },
];

export default function Totems() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/nabantu" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Our People</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Totems & Symbols</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Symbolism</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Totems & Symbols
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Discover the totems of the Bwamba clans and their deep spiritual significance within our culture.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.85, maxWidth: '680px', marginBottom: '3.5rem' }}>
            In Bwamba culture, each clan is associated with a totem — an animal or natural element that represents the clan's identity, spiritual connection and values. Totems are treated with great respect and are central to ceremony, naming and community life.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            {totems.map((totem) => (
              <div key={totem.name} className="card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2.25rem', lineHeight: 1, flexShrink: 0 }}>{totem.symbol}</div>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>{totem.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7 }}>{totem.significance}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bandimanga totems */}
          <div className="card" style={{ padding: '2.25rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Bandimanga Clan</div>
            <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Bandimanga Totems & Taboos</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { totem: 'Ngamu (white bird)', reason: 'Not eaten — believed to act as a spiritual messenger between the living and ancestors.' },
                { totem: 'Omutuwe gwe mbuli (head of the goat)', reason: 'Prohibited from eating — it was believed this would cause one to lose their teeth. These prohibitions stand to today.' },
              ].map((t) => (
                <div key={t.totem} style={{ background: '#F8F3E7', borderRadius: '0.75rem', padding: '1.125rem 1.25rem' }}>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#242424', marginBottom: '0.375rem' }}>{t.totem}</p>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.65 }}>{t.reason}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>
    </main>
  );
}
