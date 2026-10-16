import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { title: 'Folk Stories',          slug: 'stories',    icon: '📚', description: 'Traditional narratives passed down through generations, teaching values and history.' },
  { title: 'Proverbs',              slug: 'proverbs',   icon: '💬', description: 'Wisdom and insights expressed through time-honoured sayings.' },
  { title: 'Riddles',               slug: 'riddles',    icon: '❓', description: 'Traditional puzzles that challenge the mind and entertain across all ages.' },
  { title: 'Songs',                 slug: 'songs',      icon: '🎵', description: 'Musical expressions of joy, sorrow, celebration, and daily life.' },
  { title: 'Poems',                 slug: 'poems',      icon: '✍️', description: 'Poetic expressions of our culture and lived experiences.' },
  { title: 'Lullabies',             slug: 'lullabies',  icon: '🎼', description: 'Gentle songs sung to children across generations.' },
  { title: 'Names',                 slug: 'names',      icon: '👤', description: 'Meanings and significance of traditional Bwamba names.' },
  { title: 'Customs & Traditions',  slug: 'customs',    icon: '🪘', description: 'Rituals, ceremonies and traditional practices of the Obudhingiya people.' },
];

const cultureImages = [
  { src: '/images/culture/leadership%20council%20of%20elders%20image.PNG', alt: 'Elders gathered with cultural leaders', caption: 'Elders & oral history' },
  { src: '/images/culture/women%20dance%201%20image.jpg', alt: 'Women performing a traditional cultural dance', caption: 'Dance & celebration' },
  { src: '/images/culture/women%20weaving%20baskets%20(2).jfif', alt: 'Women weaving traditional baskets', caption: 'Traditional crafts' },
];

export default function Culture() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Heritage</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', textShadow: '0 2px 10px rgba(0,0,0,0.65)' }}>
            Culture & Heritage
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.8, maxWidth: '520px', textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
            Explore the rich cultural tapestry of the Bwamba people through our collection of stories, wisdom, music, and traditions.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">

          <div style={{ marginBottom: '2rem' }}>
            <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>
              Living culture
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.875rem' }}>
              {cultureImages.map((photo) => (
                <figure key={photo.src} style={{ position: 'relative', aspectRatio: '4 / 3', margin: 0, overflow: 'hidden', borderRadius: '6px', background: '#242424' }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  <figcaption style={{ position: 'absolute', inset: 'auto 0 0', padding: '1.75rem 0.75rem 0.625rem', background: 'linear-gradient(transparent, rgba(17,17,17,0.78))', color: '#fff', fontSize: '0.8125rem', fontWeight: 600 }}>
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
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
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>{cat.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.75 }}>{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
