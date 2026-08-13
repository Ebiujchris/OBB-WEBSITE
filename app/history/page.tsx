import Link from 'next/link';

export default function History() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Our past</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Our History
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Centuries of community, culture and resilience in the foothills of the Rwenzori Mountains.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {[
              {
                title: 'Origins of the Bwamba People',
                body: ['The Bwamba people have a rich history spanning centuries in the foothills of the Rwenzori Mountains. Our ancestors established communities that thrived through agriculture, trade, and strong cultural traditions.', 'The preservation of our three distinct languages — Lubwisi, Kwamba, and Vonoma — reflects the diverse heritage and cultural depth of our communities.'],
              },
              {
                title: 'The Obudhingiya Institution',
                body: ['The Obudhingiya of Bwamba has served as a unifying institution for our people, preserving cultural values, mediating disputes, and maintaining our connection to ancestral wisdom.', 'Through generations, our leaders have ensured the continuity of traditions, stories, and cultural practices that define who we are as a people.'],
              },
              {
                title: 'Cultural Resilience',
                body: ['Despite the challenges of modernisation and external influences, the Bwamba people have maintained their cultural identity through dedicated preservation efforts and community commitment.', 'Today, we continue to honour our ancestors by documenting our languages, recording our stories, and passing our traditions to future generations.'],
              },
            ].map((section) => (
              <div key={section.title} className="card" style={{ padding: '2.5rem' }}>
                <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>
                  {section.title}
                </h2>
                {section.body.map((para, i) => (
                  <p key={i} style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: i < section.body.length - 1 ? '1rem' : 0 }}>{para}</p>
                ))}
              </div>
            ))}

            {/* Timeline */}
            <div style={{ background: '#242424', borderRadius: '1.25rem', padding: '2.5rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#fff', marginBottom: '2rem' }}>Historical Timeline</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { era: 'Pre-Colonial Era',   detail: 'Establishment of Bwamba communities and cultural traditions.' },
                  { era: 'Colonial Period',     detail: 'Adaptation and resilience under colonial administration.' },
                  { era: 'Post-Independence',  detail: 'Revival of cultural institutions and language preservation efforts.' },
                  { era: 'Modern Era',          detail: 'Digital documentation and global sharing of Bwamba heritage.' },
                ].map((item, i, arr) => (
                  <div key={item.era} style={{ display: 'flex', gap: '1.5rem' }}>
                    {/* Timeline spine */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#C99A2E', border: '3px solid #242424', outline: '2px solid #C99A2E', flexShrink: 0, marginTop: '0.2rem' }} />
                      {i < arr.length - 1 && <div style={{ width: 1, flex: 1, background: 'rgba(255,255,255,0.12)', margin: '0.5rem 0' }} />}
                    </div>
                    {/* Content */}
                    <div style={{ paddingBottom: i < arr.length - 1 ? '1.75rem' : 0 }}>
                      <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#C99A2E', marginBottom: '0.375rem' }}>{item.era}</p>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '1.25rem', padding: '3rem', textAlign: 'center' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>
                Contribute to Our History
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, maxWidth: '480px', marginInline: 'auto', marginBottom: '2rem' }}>
                Do you have historical records, photographs, or stories to share? Help us document our complete history.
              </p>
              <Link href="/contact" className="btn btn-primary">Share Your Story</Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
