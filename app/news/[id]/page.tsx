import Link from 'next/link';

const articles: Record<string, { title: string; date: string; category: string; body: string[]; gradient: string }> = {
  '1': { title: 'Cultural Festival Celebration',          date: 'August 8, 2026',   category: 'Events',    gradient: 'linear-gradient(135deg,#6B1E2E,#1A1A1A)', body: ['The annual Bwamba cultural festival brought together communities from across Bundibugyo to celebrate shared heritage over three days of music, dance and traditional ceremonies.', 'Thousands of community members attended, with performances showcasing traditional Bwamba songs, dances and costumes representing all three communities — the Bamba, Babwisi and Vanuma.', 'The festival also featured storytelling sessions by elders, language workshops, and a showcase of traditional crafts and foods, reinforcing the importance of cultural preservation for future generations.'] },
  '2': { title: 'New Language Documentation Initiative',  date: 'August 5, 2026',   category: 'Language',  gradient: 'linear-gradient(135deg,#1E4D38,#1A1A1A)', body: ['Obudhingiya Bwa Bwamba has launched a comprehensive documentation project covering Lubwisi, Kwamba and Vonoma languages with native speakers from across the region.', 'The initiative involves recording elders and fluent speakers sharing proverbs, stories, songs and everyday vocabulary, creating an invaluable archive for current and future generations.', 'Materials will be made available through the community centre and our online archive, with plans to develop educational resources for schools in Bundibugyo District.'] },
  '3': { title: 'Elder Stories Project Completed',        date: 'July 30, 2026',    category: 'Culture',   gradient: 'linear-gradient(135deg,#7A5C3E,#1A1A1A)', body: ['After two years of dedicated work, we have successfully recorded 150 traditional folk stories from community elders, representing all three Bwamba communities.', 'The stories cover a wide range of themes — from origin tales and moral fables to historical accounts and nature stories — providing a rich window into the worldview of the Bwamba people.', 'All recordings have been transcribed and are now available in the cultural archive, with translations into English to make them accessible to a wider audience.'] },
};

export default function NewsArticle({ params }: { params: { id: string } }) {
  const article = articles[params.id];

  if (!article) {
    return (
      <main>
        <div className="page-hero">
          <div className="container-site" style={{ position: 'relative' }}>
            <h1 className="heading-serif" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff' }}>Article Not Found</h1>
          </div>
        </div>
        <section className="section-space" style={{ background: '#F2ECD8' }}>
          <div className="container-site" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>This article doesn&apos;t exist or has been removed.</p>
            <Link href="/news" className="btn btn-primary">Back to News</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>{article.category}</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, maxWidth: '700px', marginBottom: '1.25rem' }}>
            {article.title}
          </h1>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)' }}>{article.date}</p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site" style={{ maxWidth: '760px' }}>
          <div className="card" style={{ padding: '2.75rem' }}>
            <div style={{ height: '14rem', background: article.gradient, borderRadius: '0.875rem', marginBottom: '2.5rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {article.body.map((para, i) => (
                <p key={i} style={{ fontSize: '1rem', color: '#444', lineHeight: 1.9 }}>{para}</p>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/news" className="btn btn-outline-dark" style={{ padding: '0.625rem 1.375rem', fontSize: '0.875rem' }}>
              ← Back to News
            </Link>
            <Link href="/news-events" className="btn btn-outline-dark" style={{ padding: '0.625rem 1.375rem', fontSize: '0.875rem' }}>
              All News & Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
