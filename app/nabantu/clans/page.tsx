import Link from 'next/link';

const clans = [
  'Babandi', 'Basu', 'Batalinga', 'Banyamwela', 'Balungu',
  'Baseghiya', 'Bawiisa', 'Bandimbuka', 'Bahombi', 'Balirehe',
  'Banseelu', 'Baboni', 'Bahundu', 'Bamate', 'Bahanda',
  'Bandimanga', 'Batolu', 'Bakuteele', 'Banyangule', 'Bajimbula',
  'Bandinibe', 'Babhila', 'Bamaga', 'Ba_hula', 'Vonoma',
];

export default function Clans() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/nabantu" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Our People</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Clans</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Community</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            The 25 Clans
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Each clan carries its own history, totems, and cultural practices — the foundation of our social identity.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem', marginBottom: '4rem' }}>
            {clans.map((clan, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '0.875rem', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: i % 3 === 0 ? '#6B1E2E' : i % 3 === 1 ? '#C99A2E' : '#1F4D3A', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#242424' }}>{clan}</span>
              </div>
            ))}
          </div>


        </div>
      </section>
    </main>
  );
}
