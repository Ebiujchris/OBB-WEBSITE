import Link from 'next/link';

const categories = [
  { icon: '📚', title: 'Folk Stories', href: '/culture/stories' },
  { icon: '💬', title: 'Proverbs',     href: '/culture/proverbs' },
  { icon: '❓', title: 'Riddles',      href: '/culture/riddles' },
  { icon: '🎵', title: 'Songs',        href: '/culture/songs' },
  { icon: '✍️', title: 'Poems',        href: '/culture/poems' },
  { icon: '🎼', title: 'Lullabies',    href: '/culture/lullabies' },
];

export default function Vonoma() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/languages" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Languages</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Vonoma</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Nilotic Language</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Vonoma
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '480px' }}>
            Spoken by the Vanuma people of Bundibugyo, carrying unique cultural narratives and wisdom across generations.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>About Vonoma</h2>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1rem' }}>
              Vonoma is a Nilotic language spoken by the Vanuma people, the third major community within Obudhingiya Bwa Bwamba. Like Kwamba, its Nilotic origin gives it a distinct phonological and grammatical character that sets it apart from the region's Bantu languages.
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
              The language carries a rich heritage of oral literature — from riddles and proverbs to songs and ceremonial expressions — reflecting the Vanuma people's deep connection to their land, ancestors and community identity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(0,0,0,0.07)', borderRadius: '1rem', overflow: 'hidden', marginBottom: '2rem' }}>
            {[{ value: '32', label: 'Folk Stories' }, { value: '78', label: 'Proverbs' }, { value: '22', label: 'Songs' }].map((s) => (
              <div key={s.label} style={{ background: '#fff', padding: '1.75rem', textAlign: 'center' }}>
                <p className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#1F4D3A', lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: '0.8125rem', color: '#888', marginTop: '0.5rem' }}>{s.label}</p>
              </div>
            ))}
          </div>

          <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Explore in Vonoma</h2>
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
            <Link href="/contact" className="btn btn-primary">Contribute Content</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
