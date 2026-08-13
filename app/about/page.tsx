export default function About() {
  return (
    <main>

      {/* Page hero */}
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>About us</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Obudhingiya Bwa Bwamba
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '560px' }}>
            Uniting the Bamba, Babwisi and Vanuma people through culture, language and community-led heritage preservation.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">

          {/* Intro grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '2rem' }} className="two-col-grid">
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>Who we are</h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, marginBottom: '1.75rem' }}>
                Obudhingiya Bwa Bwamba unites the Bamba, Babwisi and Vanuma people through culture, language and community-led heritage preservation.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {['Language preservation', 'Oral history archiving', 'Community unity', 'Cultural education'].map((item) => (
                  <div key={item} style={{
                    display: 'flex', alignItems: 'center', gap: '0.625rem',
                    background: '#F8F3E7', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: '0.625rem', padding: '0.75rem 1rem',
                    fontSize: '0.875rem', fontWeight: 500, color: '#333',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C99A2E', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #6B1E2E, #1F4D3A)',
              borderRadius: '1.25rem',
              padding: '1.5px',
              boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
            }}>
              <div style={{ background: '#fff', borderRadius: '1.15rem', padding: '2.25rem', height: '100%' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#999', marginBottom: '1rem' }}>Our heritage</p>
                <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1rem', lineHeight: 1.25 }}>
                  A shared story across the Semuliki valley
                </h2>
                <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Across the western slopes of Mount Rwenzori and the Semuliki valley, our communities have grown together in shared language, ceremony and daily life.
                </p>
                {[
                  { title: 'A living alliance',  body: 'Bamba, Vanuma and Babwisi traditions woven into one cultural institution.' },
                  { title: 'Legal recognition',  body: "Established through community leadership in accordance with Uganda's constitution." },
                ].map((item) => (
                  <div key={item.title} style={{ background: '#F8F3E7', borderRadius: '0.75rem', padding: '1.125rem', marginBottom: '0.75rem' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#242424', marginBottom: '0.375rem' }}>{item.title}</p>
                    <p style={{ fontSize: '0.8125rem', color: '#666', lineHeight: 1.65 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission / Story / Values */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {/* Mission */}
            <div className="card" style={{ padding: '2.25rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Our Mission</h2>
              <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Preserve and promote language, stories, music and community identity for generations to come.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Document oral traditions and cultural knowledge', 'Support language revitalization', 'Protect traditional music and songs', 'Celebrate names, clans and ceremonies'].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: '#555', lineHeight: 1.6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C99A2E', flexShrink: 0, marginTop: '0.45rem' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Story */}
            <div className="card" style={{ padding: '2.25rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Our Story</h2>
              <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Formed in 2012 by community leaders and youth from a shared vision of cultural unity and preservation.
              </p>
              {[
                { year: '2012',  detail: 'Traditional leaders and youth established the institution at Bundibugyo Teachers College.' },
                { year: 'Today', detail: 'The institution continues to grow as a hub for cultural preservation and community collaboration.' },
              ].map(({ year, detail }) => (
                <div key={year} style={{ background: '#F8F3E7', borderRadius: '0.75rem', padding: '1.125rem', marginBottom: '0.75rem' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999', marginBottom: '0.375rem' }}>{year}</p>
                  <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.65 }}>{detail}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="card" style={{ padding: '2.25rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Core Values</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '0.5rem' }}>
                {['Equality', 'Respect', 'Transparency', 'Courtesy', 'Unity'].map((value) => (
                  <span key={value} style={{
                    display: 'inline-block',
                    padding: '0.5rem 1.125rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem', fontWeight: 500,
                    background: 'rgba(107,30,46,0.07)',
                    color: '#6B1E2E',
                    border: '1px solid rgba(107,30,46,0.15)',
                  }}>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Why it matters */}
          <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '1.25rem', padding: '2.5rem 3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="two-col-grid">
              <div>
                <h2 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Why our work matters</h2>
                <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85 }}>
                  We protect the voices, values and stories of our people so that future generations can carry forward a strong, united cultural legacy.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                {['Intergenerational learning', 'Cultural ceremonies', 'Language recordings', 'Community partnerships'].map((item) => (
                  <div key={item} style={{
                    background: '#F8F3E7', border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: '0.875rem', padding: '1.25rem',
                    fontSize: '0.9rem', fontWeight: 600, color: '#242424',
                  }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .two-col-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
