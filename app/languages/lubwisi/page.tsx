import Link from 'next/link';

const categories = [
  { icon: '📚', title: 'Folk Stories', href: '/culture/stories' },
  { icon: '💬', title: 'Proverbs',     href: '/culture/proverbs' },
  { icon: '❓', title: 'Riddles',      href: '/culture/riddles' },
  { icon: '🎵', title: 'Songs',        href: '/culture/songs' },
  { icon: '✍️', title: 'Poems',        href: '/culture/poems' },
  { icon: '🎼', title: 'Lullabies',    href: '/culture/lullabies' },
];

export default function Lubwisi() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/languages" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Languages</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Lubwisi</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Bantu Language</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Lubwisi
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '480px' }}>
            Spoken by the Babwisi people of Bundibugyo, sharing linguistic roots with Banyoro, Batooro, Bakonzo, and Baganda.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '900px' }}>

          {/* About */}
          <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>About Lubwisi</h2>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1rem' }}>
              Lubwisi is a Bantu language spoken by the Babwisi people of western Uganda. It belongs to the same language family as Rutooro, Runyoro, Lhukonzo and Luganda, making it part of one of Africa's largest language groups.
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
              The language is a vital carrier of the Babwisi community's oral traditions, including proverbs, folk stories, songs and ceremonies that have been passed down through generations.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(0,0,0,0.07)', borderRadius: '1rem', overflow: 'hidden', marginBottom: '2rem' }}>
            {[{ value: '45', label: 'Folk Stories' }, { value: '120', label: 'Proverbs' }, { value: '30', label: 'Songs' }].map((s) => (
              <div key={s.label} style={{ background: '#fff', padding: '1.75rem', textAlign: 'center' }}>
                <p className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#6B1E2E', lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: '0.8125rem', color: '#888', marginTop: '0.5rem' }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Culture categories */}
          <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Explore in Lubwisi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{cat.icon}</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#242424' }}>{cat.title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/languages" className="btn btn-outline-dark" style={{ padding: '0.625rem 1.375rem', fontSize: '0.875rem' }}>← All Languages</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
