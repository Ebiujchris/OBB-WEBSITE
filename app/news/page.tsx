import Link from 'next/link';

const articles = [
  { id: 1, title: 'Cultural Festival Celebration',          date: 'Aug 8, 2026',  excerpt: 'The annual Bwamba cultural festival brought together communities to celebrate our heritage with three days of music, dance and traditional ceremonies.', category: 'Events',      gradient: 'linear-gradient(135deg,#6B1E2E,#1A1A1A)' },
  { id: 2, title: 'New Language Documentation Initiative',  date: 'Aug 5, 2026',  excerpt: 'Obudhingiya Bwa Bwamba launches a comprehensive documentation project covering Lubwisi, Kwamba and Vonoma languages with native speakers.',            category: 'Language',    gradient: 'linear-gradient(135deg,#1E4D38,#1A1A1A)' },
  { id: 3, title: 'Elder Stories Project Completed',        date: 'Jul 30, 2026', excerpt: 'After two years of dedicated work, we have successfully recorded 150 traditional stories from community elders across all three communities.',           category: 'Culture',     gradient: 'linear-gradient(135deg,#7A5C3E,#1A1A1A)' },
  { id: 4, title: 'Youth Engagement Program',               date: 'Jul 25, 2026', excerpt: 'Young people from across Bwamba participated in language and culture workshops, learning traditional skills and connecting with their heritage.',           category: 'Education',   gradient: 'linear-gradient(135deg,#6B1E2E,#1E4D38)' },
  { id: 5, title: 'Digital Archive Expansion',              date: 'Jul 20, 2026', excerpt: 'Our online cultural archive now includes over 500 audio recordings and 1,000 written documents, freely accessible to community members worldwide.',         category: 'Technology',  gradient: 'linear-gradient(135deg,#1A1A1A,#6B1E2E)' },
  { id: 6, title: 'Community Gathering Success',            date: 'Jul 15, 2026', excerpt: 'Over 300 community members gathered to share stories and traditional knowledge in a two-day intergenerational exchange event.',                             category: 'Community',   gradient: 'linear-gradient(135deg,#1E4D38,#7A5C3E)' },
];

export default function News() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Updates</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            News & Updates
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            The latest stories, announcements and initiatives from Obudhingiya Bwa Bwamba.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem' }}>
            {articles.map((article) => (
              <article key={article.id} className="news-card">
                <div style={{ height: '10rem', background: article.gradient }} />
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(196,146,42,0.1)', color: '#8A6515', border: '1px solid rgba(196,146,42,0.2)' }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: '#999' }}>{article.date}</span>
                  </div>
                  <h2 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.35, marginBottom: '0.75rem' }}>{article.title}</h2>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.75, marginBottom: '1.25rem' }}>{article.excerpt}</p>
                  <Link href={`/news/${article.id}`} style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B1E2E' }}>Read more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
