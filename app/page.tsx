import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';

export default function Home() {
  return (
    <main>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section style={{
        background: '#111111',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}>
        {/* Uganda flag color wash — red sweep from top-left, yellow from bottom-right, green depth in centre */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 75% 60% at -5% 0%,   rgba(216,35,42,0.55)   0%, transparent 55%),
            radial-gradient(ellipse 60% 55% at 105% 100%, rgba(252,209,22,0.38)  0%, transparent 55%),
            radial-gradient(ellipse 55% 50% at 50%  55%,  rgba(31,77,58,0.22)    0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 95%  5%,   rgba(216,35,42,0.18)   0%, transparent 50%)
          `,
        }} />
        {/* thin diagonal colour stripe for depth */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(135deg, rgba(216,35,42,0.08) 0%, transparent 40%, rgba(252,209,22,0.06) 70%, transparent 100%)',
        }} />

        <div className="container-site" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
            {/* Left */}
            <div style={{ maxWidth: '680px' }}>
              <div className="badge badge-light" style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <img src="/kingdom flag.jpeg" alt="Bwamba Kingdom flag" style={{ width: '1.25rem', height: '0.875rem', objectFit: 'cover', borderRadius: '2px', flexShrink: 0 }} />
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FCD116', display: 'inline-block' }} />
                Cultural institution since 2012
              </div>

              <h1 className="heading-serif" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '1.75rem',
              }}>
                Preserving the heritage of the{' '}
                <span style={{ color: '#D8232A' }}>Bamba</span>,{' '}
                <span style={{ color: '#FCD116' }}>Babwisi</span>{' '}
                and{' '}
                <span style={{ color: '#4CAF7D' }}>Vonoma</span>{' '}
                communities.
              </h1>

              <p style={{
                fontSize: '1.125rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}>
                Obudhingiya Bwa Bwamba carries stories, language, tradition and shared values into a stronger future for all our communities.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
                <Link href="/about" className="btn btn-gold">
                  Discover Our Story
                </Link>
                <Link href="/languages" className="btn btn-outline-white">
                  Explore Languages
                </Link>
              </div>
            </div>

            {/* Right — sliding carousel */}
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
      ════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="container-site">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            borderLeft: '1px solid rgba(0,0,0,0.07)',
          }} className="stats-grid">
            {[
              { value: '3',      label: 'Languages preserved' },
              { value: '25+',    label: 'Clans represented' },
              { value: '500+',   label: 'Stories archived' },
              { value: '1,000+', label: 'Audio recordings' },
            ].map((stat) => (
              <div key={stat.label} style={{
                padding: '2.5rem 2rem',
                textAlign: 'center',
                borderRight: '1px solid rgba(0,0,0,0.07)',
                borderBottom: '1px solid rgba(0,0,0,0.07)',
              }}>
                <p className="heading-serif" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#6B1E2E', lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.625rem', lineHeight: 1.4 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OMUDHINGIYA FEATURE
      ════════════════════════════════════════ */}
      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="two-col-grid">
            {/* Text */}
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Cultural leadership</div>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>
                Omudhingiya Martin Ayongi Kamya
              </h2>
              <p style={{ fontSize: '1.0625rem', color: '#555', lineHeight: 1.85, marginBottom: '1rem' }}>
                The living symbol of unity for the Bamba, Babwisi and Vanuma communities, guiding a shared cultural future with dignity, peace and honour.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, marginBottom: '2rem' }}>
                Omudhingiya serves as the supreme head of Obudhingiya Bwa Bwamba and represents every clan in matters of tradition, ceremony and community life.
              </p>
              <Link href="/omudhingiya" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.9375rem', fontWeight: 600, color: '#6B1E2E',
                transition: 'gap 0.2s',
              }}>
                Learn more about Omudhingiya
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Card */}
            <div style={{
              background: '#242424',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}>
              <div style={{ position: 'relative', height: '18rem', overflow: 'hidden' }}>
                <img
                  src="/omundhingiya image.jpeg"
                  alt="Omudhingiya Martin Ayongi Kamya"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4rem', background: 'linear-gradient(to top, #242424, transparent)' }} />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                  {[
                    { label: 'Role',        value: 'Supreme Head' },
                    { label: 'Communities', value: '3 peoples' },
                    { label: 'Vision',      value: 'Unity & heritage' },
                    { label: 'Clans',       value: '25 represented' },
                  ].map(({ label, value }) => (
                    <div key={label} style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '0.75rem',
                      padding: '0.875rem',
                    }}>
                      <p style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.375rem' }}>{label}</p>
                      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          LANGUAGES
      ════════════════════════════════════════ */}
      <section className="section-space" style={{ background: '#fff' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', maxWidth: '600px', marginInline: 'auto', marginBottom: '3.5rem' }}>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(1.875rem, 3vw, 2.625rem)', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>
              Three languages, one heritage
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#666', lineHeight: 1.8 }}>
              Discover Lubwisi, Kwamba and Vonoma — living voices of the Bamba, Babwisi and Vanuma people.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                slug: 'lubwisi', label: 'Lubwisi', type: 'Bantu',
                accentBg: 'rgba(107,30,46,0.07)', accentColor: '#6B1E2E', accentBorder: 'rgba(107,30,46,0.15)',
                bar: '#6B1E2E',
                desc: 'Bantu language spoken by the Babwisi people, rooted in shared storytelling traditions.',
              },
              {
                slug: 'kwamba', label: 'Kwamba', type: 'Nilotic',
                accentBg: 'rgba(201,154,46,0.08)', accentColor: '#8a6a1a', accentBorder: 'rgba(201,154,46,0.2)',
                bar: '#C99A2E',
                desc: 'Nilotic language spoken by the Bamba people, preserving ancestral words and songs.',
              },
              {
                slug: 'vonoma', label: 'Vonoma', type: 'Nilotic',
                accentBg: 'rgba(31,77,58,0.07)', accentColor: '#1F4D3A', accentBorder: 'rgba(31,77,58,0.15)',
                bar: '#1F4D3A',
                desc: 'Nilotic language of the Vanuma people, keeping cultural wisdom alive with every phrase.',
              },
            ].map((lang) => (
              <Link key={lang.slug} href={`/languages/${lang.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                  {/* colour bar */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: lang.bar }} />
                  <div style={{ marginTop: '0.5rem' }}>
                    <span style={{
                      display: 'inline-block', fontSize: '0.6875rem', fontWeight: 600,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '0.3rem 0.75rem', borderRadius: '9999px',
                      background: lang.accentBg, color: lang.accentColor, border: `1px solid ${lang.accentBorder}`,
                      marginBottom: '1.25rem',
                    }}>
                      {lang.type}
                    </span>
                    <h3 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>{lang.label}</h3>
                    <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.75, marginBottom: '1.5rem' }}>{lang.desc}</p>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: lang.accentColor, display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      Explore {lang.label} <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CULTURE CATEGORIES
      ════════════════════════════════════════ */}
      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', fontWeight: 700, color: '#242424', marginBottom: '0.625rem' }}>
                Culture & Heritage
              </h2>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>Stories, wisdom and traditions across generations.</p>
            </div>
            <Link href="/culture" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6B1E2E', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              View all → 
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { title: 'Folk Stories', icon: '📖', href: '/culture/stories' },
              { title: 'Proverbs',     icon: '💬', href: '/culture/proverbs' },
              { title: 'Riddles',      icon: '🤔', href: '/culture/riddles' },
              { title: 'Songs',        icon: '🎵', href: '/culture/songs' },
              { title: 'Poems',        icon: '✍️',  href: '/culture/poems' },
              { title: 'Lullabies',    icon: '🎶', href: '/culture/lullabies' },
              { title: 'Names',        icon: '👤', href: '/culture/names' },
              { title: 'Clans',        icon: '👥', href: '/nabantu/clans' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="culture-card">
                <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{item.icon}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#242424' }}>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          NEWS
      ════════════════════════════════════════ */}
      <section className="section-space" style={{ background: '#fff' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', fontWeight: 700, color: '#242424', marginBottom: '0.625rem' }}>
                Latest from our community
              </h2>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>Events, documentation efforts and cultural initiatives.</p>
            </div>
            <Link href="/news-events" className="btn btn-outline-dark" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
              View all news
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Cultural Festival 2026',           date: 'Aug 8, 2026',  category: 'Events',   gradient: 'linear-gradient(135deg, #6B1E2E, #242424)' },
              { title: 'Language Documentation Initiative', date: 'Aug 5, 2026',  category: 'Language', gradient: 'linear-gradient(135deg, #1F4D3A, #242424)' },
              { title: 'Elder Stories Archive',             date: 'Jul 30, 2026', category: 'Culture',  gradient: 'linear-gradient(135deg, #7A5C3E, #242424)' },
            ].map((article, i) => (
              <article key={i} className="news-card">
                <div style={{ height: '11rem', background: article.gradient }} />
                <div style={{ padding: '1.75rem' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '0.3rem 0.75rem', borderRadius: '9999px',
                    background: 'rgba(201,154,46,0.1)', color: '#8a6a1a',
                    border: '1px solid rgba(201,154,46,0.2)',
                    marginBottom: '1rem',
                  }}>
                    {article.category}
                  </span>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', lineHeight: 1.35, marginBottom: '0.5rem' }}>{article.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: '#999', marginBottom: '1.25rem' }}>{article.date}</p>
                  <Link href={`/news/${i + 1}`} style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B1E2E', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VISIT CTA
      ════════════════════════════════════════ */}
      <section style={{ background: '#242424', position: 'relative', overflow: 'hidden', paddingTop: '5.5rem', paddingBottom: '5.5rem' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(107,30,46,0.18) 0%, transparent 65%)',
        }} />
        <div className="container-site" style={{ position: 'relative', textAlign: 'center', maxWidth: '640px', marginInline: 'auto' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
            Plan your trip
          </p>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Visit Bwamba
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Discover the natural beauty, cultural experiences and warm hospitality of our communities in Bundibugyo.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.875rem' }}>
            <Link href="/visit" className="btn btn-gold">Plan Your Visit</Link>
            <Link href="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid     { grid-template-columns: 1.15fr 0.85fr !important; }
          .two-col-grid  { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 640px) {
          .stats-grid    { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </main>
  );
}
