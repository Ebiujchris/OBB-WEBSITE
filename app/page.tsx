import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';

type CommunityArticle = {
  title: string;
  date?: string;
  category: string;
  image: string;
  imageClass?: string;
  alt: string;
};

const communityArticles: CommunityArticle[] = [
  { title: 'Cultural Festival', date: 'Aug 8, 2026', category: 'Events', image: '/images/cultural%20festival%20image.jpg', imageClass: 'festival-image', alt: 'Cultural festival gathering' },
  { title: 'Language Archive', date: 'Aug 5, 2026', category: 'Language', image: '/images/landuage%20image.jpg', imageClass: 'language-image', alt: 'Community language documentation' },
  { title: 'Elder Stories', category: 'Culture', image: '/images/culture/leadership%20council%20of%20elders%20image.PNG', imageClass: 'elder-image', alt: 'Council of elders at a cultural gathering' },
  { title: 'PM at Sports Galore', category: 'Sports', image: '/images/news-cabinet from cabinet minister.jpg', alt: 'Prime Minister speech at Sports Galore' },
  { title: 'Omudhingiya Anniversary', category: 'Anniversary', image: '/images/news-anniversary%20omudhigiya%20enthronment%20day.jpg', alt: 'Community marking the Omudhingiya enthronement anniversary' },
  { title: 'Harvest Festival', category: 'Community', image: '/images/news-harvest%20more%20festival%20images%20for%20news.jpg', alt: 'Community harvest festival' },
  { title: 'Women’s Dance', category: 'Culture', image: '/images/culture/women%20dance%201%20image.jpg', alt: 'Women performing a traditional cultural dance' },
];

export default function Home() {
  return (
    <main className="home-page">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section style={{
        background: '#111111',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '4rem',
        paddingBottom: '4rem',
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
                padding: '1.5rem 1rem',
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
              <div style={{ position: 'relative', height: '32rem', overflow: 'hidden' }}>
                <img
                  src="/images/another%20omudhingya%20image%20-%20king.jpg"
                  alt="Omudhingiya Martin Ayongi Kamya"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
                />
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
          <section className="section-space language-section" style={{ background: '#fff' }}>
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
          <section className="section-space culture-section" style={{ background: '#F8F3E7' }}>
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

          <div className="culture-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
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
          <div className="anthem-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginTop: '1.25rem', padding: '0.5rem 0.75rem', background: '#FFFDF5', borderTop: '1px solid rgba(201,154,46,0.24)', borderRight: '1px solid rgba(201,154,46,0.24)', borderBottom: '1px solid rgba(201,154,46,0.24)', borderLeft: '4px solid #C99A2E', borderRadius: '6px' }}>
            <h3 className="heading-serif" style={{ fontSize: '1rem', fontWeight: 700, color: '#242424' }}>
              Kingdom anthem
            </h3>
            <iframe
              title="Play the Obudhingiya Bwa Bwamba Anthem"
              width="280"
              height="166"
              scrolling="no"
              allow="autoplay"
              loading="lazy"
              src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fbwamba%2Fobudhingiya-bwa-bwamba&color=%23C99A2E&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
              style={{ width: 'min(100%, 280px)', height: '166px', border: 0, borderRadius: '4px', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          NEWS
      ════════════════════════════════════════ */}
          <section className="section-space community-news-section" style={{ background: '#fff' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', fontWeight: 700, color: '#242424', marginBottom: '0.625rem' }}>
                Latest from our community
              </h2>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>Events, documentation efforts and cultural initiatives.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              <Link href="/news-events" className="btn btn-outline-dark" style={{ padding: '0.625rem 1rem', fontSize: '0.8125rem' }}>
                View all news
              </Link>
              <Link href="/media" className="btn btn-outline-dark" style={{ padding: '0.625rem 1rem', fontSize: '0.8125rem' }}>
                View gallery
              </Link>
            </div>
          </div>

          <div className="community-carousel" role="region" aria-label="Latest community news and events">
            <div className="community-carousel-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="community-carousel-group" aria-hidden={copy === 1}>
                  {communityArticles.map((article) => (
                    <article key={`${copy}-${article.title}`} className="news-card community-news-card">
                      <div className={`community-news-image ${article.imageClass ?? ''}`}>
                        <Image
                          src={article.image}
                          alt={article.alt}
                          fill
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 340px"
                          style={{ objectFit: 'cover', objectPosition: article.imageClass === 'elder-image' ? 'center top' : 'center' }}
                        />
                      </div>
                      <div className="community-news-copy">
                        <span className="community-news-category">{article.category}</span>
                        <h3>{article.title}</h3>
                        {article.date && <p>{article.date}</p>}
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VISIT CTA
      ════════════════════════════════════════ */}
        <section style={{
          backgroundColor: '#242424',
          backgroundImage: "linear-gradient(rgba(17,17,17,0.32), rgba(17,17,17,0.42)), url('/images/Rwenzori%20Mountains%20.jfif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '5.5rem',
          paddingBottom: '5.5rem',
        }}>
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
        .home-page > section:first-of-type { padding-block: 2rem !important; }
        .home-page > section:last-of-type { padding-block: 2rem !important; }
        .home-page .section-space { padding-block: 1.75rem !important; }
        .home-page .language-section,
        .home-page .culture-section { padding-block: 1.25rem !important; }
        .home-page .language-section > .container-site > div:first-child { margin-bottom: 1.5rem !important; }
        .home-page .language-section > .container-site > div:nth-child(2) { gap: 1rem !important; }
        .home-page .language-section .card { padding: 1.25rem; }
        .home-page .language-section .card span:first-of-type { margin-bottom: 0.75rem !important; }
        .home-page .language-section .card h3 { font-size: 1.75rem !important; margin-bottom: 0.5rem !important; }
        .home-page .language-section .card p { margin-bottom: 1rem !important; }
        .home-page .section-space.culture-section .container-site > div:first-child:not(.two-col-grid) { margin-bottom: 1.25rem !important; }
        .home-page .culture-section .culture-grid { gap: 0.75rem !important; }
        .home-page .culture-section .culture-card { padding: 0.875rem 1rem; gap: 0.75rem; }
        .home-page .culture-section .anthem-row { margin-top: 0.75rem !important; gap: 0.5rem !important; }
        .home-page .culture-section iframe { width: min(100%, 230px) !important; }
        .home-page .section-space .container-site > div:first-child:not(.two-col-grid) { margin-bottom: 1.25rem !important; }
        .home-page .hero-grid,
        .home-page .two-col-grid { gap: 1.5rem !important; }
        .home-page .stats-grid > div { padding-block: 0.75rem !important; }
        .home-page .stats-grid > div > .heading-serif { font-size: 2rem !important; }
        .home-page .stats-grid > div > p:last-child { margin-top: 0.375rem !important; }
        .home-page .two-col-grid > div:nth-child(2) > div:first-child { height: 26rem !important; }
        .home-page .news-card > div:first-child { height: 9rem !important; }
        .home-page .news-card > div:first-child.festival-image { height: 13rem !important; }
        .home-page .news-card > div:first-child.language-image { height: 13rem !important; }
        .home-page .news-card > div:first-child.elder-image { height: 17rem !important; }
        .home-page .community-news-section > .container-site { max-width: 1400px; }
        .home-page .news-card > div:nth-child(2) { padding: 0.875rem !important; }
        .home-page .news-card span { padding: 0.2rem 0.55rem !important; margin-bottom: 0.5rem !important; }
        .home-page .news-card h3 { font-size: 1rem !important; margin-bottom: 0.3rem !important; }
        .home-page .news-card p { margin-bottom: 0.5rem !important; }
        .home-page .elder-story-card > div:nth-child(2) { padding: 0.625rem !important; }
        .home-page .elder-story-card span { margin-bottom: 0.25rem !important; }
        .home-page .elder-story-card h3 { font-size: 0.95rem !important; margin-bottom: 0.15rem !important; }
        .home-page .elder-story-card p { margin-bottom: 0.25rem !important; }
        .home-page iframe { width: min(100%, 250px) !important; }
        .community-carousel { overflow: hidden; }
        .community-carousel-track { display: flex; width: max-content; animation: community-carousel-scroll 58s linear infinite; }
        .community-carousel-group { display: flex; gap: 1rem; padding-right: 1rem; }
        .community-news-card { flex: 0 0 clamp(270px, 28vw, 340px); }
        .community-news-link { display: block; height: 100%; color: inherit; text-decoration: none; }
        .community-news-image { position: relative; height: 13rem; overflow: hidden; background: #242424; }
        .home-page .news-card > div:first-child.community-news-image { height: 15rem !important; }
        .community-news-copy { display: flex; min-height: 5rem; flex-direction: column; align-items: flex-start; padding: 0.625rem !important; }
        .community-news-category { display: inline-block; margin-bottom: 0.5rem !important; }
        .home-page .community-news-card .community-news-category { margin-bottom: 0.25rem !important; }
        .home-page .community-news-card .community-news-copy h3 { margin-bottom: 0.2rem !important; font-size: 0.9375rem !important; line-height: 1.3; }
        .home-page .community-news-card .community-news-copy p { margin-bottom: 0.25rem !important; font-size: 0.75rem; color: #888; }
        .community-news-action { margin-top: auto; padding: 0 !important; border: 0 !important; background: transparent !important; color: #6B1E2E; font-size: 0.875rem; font-weight: 600; }
        .community-carousel:hover .community-carousel-track,
        .community-carousel:focus-within .community-carousel-track { animation-play-state: paused; }
        @keyframes community-carousel-scroll { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .community-carousel { overflow-x: auto; }
          .community-carousel-track { animation: none; }
          .community-carousel-group[aria-hidden="true"] { display: none; }
        }
        .home-page > section:first-of-type .badge { margin-bottom: 1.25rem !important; }
        .home-page > section:first-of-type h1 { margin-bottom: 1.25rem !important; }
        .home-page > section:first-of-type p { margin-bottom: 1.5rem !important; }
        .home-page > section:last-of-type .container-site > p { margin-bottom: 0.75rem !important; }
        .home-page > section:last-of-type h2 { margin-bottom: 0.875rem !important; }
        .home-page > section:last-of-type .container-site > p:last-of-type { margin-bottom: 1.5rem !important; }
        @media (min-width: 1024px) {
          .home-page .section-space { padding-block: 2rem !important; }
          .home-page .language-section,
          .home-page .culture-section { padding-block: 1.5rem !important; }
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
