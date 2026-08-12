import Link from 'next/link';

const categories = [
  { title: 'Folk Stories', slug: 'stories',   icon: '📚', description: 'Traditional narratives passed down through generations, teaching values and history.' },
  { title: 'Proverbs',     slug: 'proverbs',  icon: '💬', description: 'Wisdom and insights expressed through time-honoured sayings.' },
  { title: 'Riddles',      slug: 'riddles',   icon: '❓', description: 'Traditional puzzles that challenge the mind and entertain across all ages.' },
  { title: 'Songs',        slug: 'songs',     icon: '🎵', description: 'Musical expressions of joy, sorrow, celebration, and daily life.' },
  { title: 'Poems',        slug: 'poems',     icon: '✍️', description: 'Poetic expressions of our culture and lived experiences.' },
  { title: 'Lullabies',    slug: 'lullabies', icon: '🎼', description: 'Gentle songs sung to children across generations.' },
  { title: 'Names',        slug: 'names',     icon: '👤', description: 'Meanings and significance of traditional Bwamba names.' },
];

export default function Culture() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Heritage</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Culture & Heritage
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Explore the rich cultural tapestry of the Bwamba people through our collection of stories, wisdom, music, and traditions.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site">

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/culture/${cat.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '3rem', height: '3rem', borderRadius: '0.875rem',
                    background: 'rgba(107,30,46,0.07)', border: '1px solid rgba(107,30,46,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', flexShrink: 0,
                  }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.5rem' }}>{cat.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.75 }}>{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: '#1E4D38',
            borderRadius: '1.25rem',
            padding: '3.5rem',
            textAlign: 'center',
          }}>
            <h2 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              Preserve Our Heritage
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '500px', marginInline: 'auto', marginBottom: '2.25rem' }}>
              Have a story, proverb, or cultural tradition to share? Help us preserve our heritage by contributing to our growing archive.
            </p>
            <Link href="/contact" className="btn btn-gold">Contribute Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
