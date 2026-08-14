import Link from 'next/link';

const stories = [
  { title: 'The Elephant and the Tortoise',   lang: 'Lubwisi',  excerpt: 'A tale of wisdom over strength, showing how patience and cleverness can overcome any obstacle.' },
  { title: 'Why the River Sings',              lang: 'Kwamba',   excerpt: 'The story of how the Semuliki River received its voice and became a guardian of the valley.' },
  { title: 'The First Fire',                   lang: 'Vonoma',   excerpt: 'How the Vanuma people discovered fire and the responsibilities that came with that gift.' },
  { title: 'The Clever Hare',                  lang: 'Lubwisi',  excerpt: 'A classic tale of wit and resourcefulness that has been told to children for generations.' },
  { title: 'The Mountain and the Valley',      lang: 'Kwamba',   excerpt: 'An origin story explaining the relationship between the Rwenzori Mountains and the Semuliki Valley.' },
  { title: 'The Generous Chief',               lang: 'Vonoma',   excerpt: 'A story about a chief whose generosity united three warring clans into a single peaceful community.' },
];

export default function FolkStories() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Folk Stories</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Oral tradition</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Folk Stories
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Traditional narratives passed down through generations, teaching values, history and the meaning of community.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {stories.map((story) => (
              <div key={story.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>
                    {story.lang}
                  </span>
                </div>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424', marginBottom: '0.75rem', lineHeight: 1.3 }}>{story.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.75 }}>{story.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
