import Link from 'next/link';

const news = [
  { id: 1, title: 'Cultural Festival Celebration',             date: 'Aug 8, 2026',  excerpt: 'The annual Bwamba cultural festival brought together communities to celebrate our heritage with music, dance and traditional ceremonies.', category: 'Events',    image: '/images/cultural festival image.jpg' },
  { id: 2, title: 'New Language Documentation Initiative',     date: 'Aug 5, 2026',  excerpt: 'Obudhingiya Bwa Bwamba launches a comprehensive documentation project for Lubwisi, Kwamba and Vonoma languages.',                      category: 'Language',  image: '/images/landuage image.jpg' },
  { id: 3, title: 'Elder Stories Project Completed',           date: 'Jul 30, 2026', excerpt: 'After two years of dedicated work, we have successfully recorded 150 traditional stories from community elders.',                         category: 'Culture',   image: '/images/culture/leadership council of elders image.PNG' },
  { id: 4, title: 'Kingdom Marks 12 Years Since the Enthronement of Omudhingiya I', date: '30 May 2026', excerpt: 'A weeklong celebration at Bundibugyo Boma Grounds honours 12 years of the reign of HRH Col. (Rtd) Ayongi Martin Kamya.', category: 'Kingdom Updates', image: '/images/news-anniversary omudhigiya enthronment day.jpg' },
  { id: 5, title: 'Bwamba Harvest Festival Returns to Semuliki', date: '18 April 2026', excerpt: 'Traditional dances, food fairs and clan exhibitions return as the kingdom celebrates the season\'s harvest.', category: 'Cultural Events', image: '/images/news-harvest more festival images for news.jpg' },
  { id: 6, title: 'Katikilo Announces New Cabinet Portfolios', date: '5 March 2026', excerpt: 'Rt. Hon. Bukantwa Charles unveils refreshed portfolios for culture, youth and economic transformation.', category: 'Leadership', image: '/images/news-cabinet from cabinet minister.jpg' },
  { id: 8, title: 'Clan Elders Convene at Esimudhingiya\'s Court', date: '28 January 2026', excerpt: 'Heads of all 25 clans met to deliberate on cultural rites, intra-clan disputes and youth engagement.', category: 'Leadership', image: '/images/culture/leadership council of elders image.PNG' },
  { id: 9, title: 'Mpaghi Conference Draws Hundreds in Bundibugyo', date: '10 December 2025', excerpt: 'Young Bana\'Budhingiya gathered to chart a vision for cultural and economic revival.', category: 'Community', image: '/images/Batama cultural group.jpg' },
  { id: 10, title: 'Kingdom Unveils Cultural Tourism Trail', date: '2 November 2025', excerpt: 'From sacred sites to Semuliki\'s hot springs, a new trail invites visitors to walk the Bwamba story.', category: 'Kingdom Updates', image: '/images/Rwenzori Mountains .jfif' },
];

export default function NewsEvents() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Official Kingdom News</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            News & Events
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Stay informed about events, documentation efforts and new cultural initiatives from our community.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">

          {/* Latest News */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#242424' }}>Latest News</h2>
              <Link href="/news" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B1E2E' }}>View all news →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
              {news.map((article) => (
                <article key={article.id} className="news-card">
                  <div style={{ height: '16rem', overflow: 'hidden', position: 'relative', background: '#242424' }}>
                    <img src={article.image} alt={article.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(201,154,46,0.1)', color: '#8a6a1a', border: '1px solid rgba(201,154,46,0.2)' }}>
                        {article.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#999' }}>{article.date}</span>
                    </div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#242424', lineHeight: 1.35 }}>{article.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
