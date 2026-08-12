import Link from 'next/link';

const news = [
  { id: 1, title: 'Cultural Festival Celebration',             date: 'Aug 8, 2026',  excerpt: 'The annual Bwamba cultural festival brought together communities to celebrate our heritage with music, dance and traditional ceremonies.', category: 'Events',    gradient: 'linear-gradient(135deg,#6B1E2E,#1A1A1A)' },
  { id: 2, title: 'New Language Documentation Initiative',     date: 'Aug 5, 2026',  excerpt: 'Obudhingiya Bwa Bwamba launches a comprehensive documentation project for Lubwisi, Kwamba and Vonoma languages.',                      category: 'Language',  gradient: 'linear-gradient(135deg,#1E4D38,#1A1A1A)' },
  { id: 3, title: 'Elder Stories Project Completed',           date: 'Jul 30, 2026', excerpt: 'After two years of dedicated work, we have successfully recorded 150 traditional stories from community elders.',                         category: 'Culture',   gradient: 'linear-gradient(135deg,#7A5C3E,#1A1A1A)' },
];

const events = [
  { id: 1, title: 'Traditional Music Workshop',        date: 'Aug 25, 2026', time: '2:00 PM – 5:00 PM',   location: 'Community Cultural Center' },
  { id: 2, title: 'Language Learning Circle – Lubwisi', date: 'Sep 1, 2026',  time: '10:00 AM – 12:00 PM', location: 'Community Hall' },
  { id: 3, title: 'Storytelling Evening with Elders',  date: 'Sep 10, 2026', time: '6:00 PM – 8:00 PM',   location: 'Open Air Theatre' },
];

export default function NewsEvents() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Community</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            News & Events
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Stay informed about events, documentation efforts and new cultural initiatives from our community.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site">

          {/* Latest News */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1A1A1A' }}>Latest News</h2>
              <Link href="/news" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B1E2E' }}>View all news →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
              {news.map((article) => (
                <article key={article.id} className="news-card">
                  <div style={{ height: '10rem', background: article.gradient }} />
                  <div style={{ padding: '1.75rem' }}>
                    <span style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(196,146,42,0.1)', color: '#8A6515', border: '1px solid rgba(196,146,42,0.2)', marginBottom: '1rem' }}>
                      {article.category}
                    </span>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.35, marginBottom: '0.625rem' }}>{article.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.75, marginBottom: '1.25rem' }}>{article.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.8125rem', color: '#999' }}>{article.date}</span>
                      <Link href={`/news/${article.id}`} style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B1E2E' }}>Read more →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1A1A1A' }}>Upcoming Events</h2>
              <Link href="/events" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B1E2E' }}>View all events →</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {events.map((event) => (
                <div key={event.id} className="card" style={{ padding: '1.75rem 2rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.25rem' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.875rem' }}>{event.title}</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                        {[{ icon: '📅', val: event.date }, { icon: '🕐', val: event.time }, { icon: '📍', val: event.location }].map(({ icon, val }) => (
                          <span key={val} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: '#555' }}>
                            <span>{icon}</span>{val}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="btn btn-gold" style={{ padding: '0.625rem 1.375rem', fontSize: '0.8125rem', flexShrink: 0 }}>
                      Register Interest
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
