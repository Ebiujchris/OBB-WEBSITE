import Image from 'next/image';
import Link from 'next/link';

const activities = [
  'Sports and games',
  'Art, dance, and drama',
  'Music and poetry',
  'Community awareness programmes',
  'Cultural clubs and competitions',
];

export default function MpaghiPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/about" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>About</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Mpaghi sya Bwamba</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Mpaghi sya Bwamba</div>
          <h1 className="heading-serif" style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            The Pillars of the Kingdom
          </h1>
          <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'rgba(255,255,255,0.92)', lineHeight: 1.8, maxWidth: '760px' }}>
            More than half of Bana’Budhingiya are young. They are not the future of Obudhingiya Bwa Bwamba alone. They are its strength today.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div className="mpaghi-intro">
            <div>
              <p style={{ fontSize: '1.0625rem', color: '#444', lineHeight: 1.9, marginBottom: '1rem' }}>
                Known as <em>Mpaghi sya Bwamba</em>, the pillars of the Kingdom, the youth stand at the very centre of the Kingdom’s cultural, social, and economic life. Every programme and every policy begins with one question: what does it mean for our young people?
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85 }}>
                In Obudhingiya Bwa Bwamba, young people are active participants in the life of the Kingdom and partners in shaping its future.
              </p>
            </div>
            <figure style={{ position: 'relative', aspectRatio: '4 / 3', margin: 0, overflow: 'hidden', borderRadius: '0.75rem', background: '#242424' }}>
              <Image
                src="/images/sports%20images%20and%20news/His%20Majesty%20meeting%20players%20image.jpg"
                alt="His Majesty meeting young sports players"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section-space" style={{ background: '#fff' }}>
        <div className="container-site mpaghi-narrow">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Our beginnings</div>
          <h2 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>Where It Began</h2>
          <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.9, marginBottom: '1rem' }}>
            In 2012, the Kingdom launched the Mpaghi movement with a bold aim: to close the distance between the culture practised largely by leaders and the ordinary young people in villages and towns. Culture should not belong only to the few. Every young person, rural or urban, deserves to know their heritage, take pride in it, and carry it forward.
          </p>
          <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.9 }}>
            Since then, the bond between the youth and their cultural identity has grown stronger, and so has their appreciation of it.
          </p>
        </div>
      </section>

      <section className="section-space" style={{ background: '#1F4D3A', color: '#fff' }}>
        <div className="container-site">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Culture in action</div>
          <h2 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1.75rem' }}>Culture That Young People Live</h2>
          <div className="mpaghi-activities">
            {activities.map((activity, index) => (
              <div key={activity} style={{ borderTop: '1px solid rgba(255,255,255,0.3)', padding: '1rem 0', display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FCD116' }}>{String(index + 1).padStart(2, '0')}</span>
                <p style={{ fontSize: '1.0625rem', fontWeight: 600, lineHeight: 1.6 }}>{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site mpaghi-narrow">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Youth at the heart of the throne</div>
          <h2 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>Our Commitment</h2>
          <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.9, marginBottom: '1rem' }}>
            The Kingdom does not treat youth development as a side project. It is a central pillar of our agenda.
          </p>
          <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.9, marginBottom: '1rem' }}>
            We are raising young men and women who are culturally proud, well informed, and empowered, and who accept community transformation as their responsibility.
          </p>
          <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.9 }}>
            Through the royal Ministry of Youths, Games and Sports, we organise quarterly, bi-annual, and annual cultural events, competitions, and skilling camps. These give young people the knowledge, skills, values, and attitudes to lead and serve their communities across the Kingdom.
          </p>
        </div>
      </section>

      <section className="section-space" style={{ background: '#fff' }}>
        <div className="container-site mpaghi-narrow">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Sport brings us together</div>
          <h2 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Sport: Our Unifier</h2>
          <blockquote style={{ margin: 0, padding: '0 0 0 1.25rem', borderLeft: '4px solid #C99A2E' }}>
            <p className="heading-serif" style={{ fontSize: '1.375rem', fontStyle: 'italic', color: '#333', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              “Sport has the power to change the world. It has the power to inspire. It has the power to unite people in a way that little else does.”
            </p>
            <cite style={{ fontSize: '0.875rem', fontStyle: 'normal', fontWeight: 700, color: '#6B1E2E' }}>Nelson Mandela, 2000</cite>
          </blockquote>
          <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.9, marginTop: '1.5rem' }}>
            In Obudhingiya Bwa Bwamba, sport brings us together. When clans meet on the pitch, rivalry becomes fellowship, and the unity of the Babwisi, Bamba, and Vanuma is renewed in every generation.
          </p>
        </div>
      </section>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site mpaghi-narrow">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Ministry leadership</div>
          <h2 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>Leadership of the Ministry</h2>
          <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.9 }}>
            The royal Ministry of Youths, Games and Sports is led by <strong>Oweng Tibesigwa John “Senior”</strong>, deputised by <strong>Oweng Bakahwerayo Lawrence</strong>.
          </p>
        </div>
      </section>

      <style>{`
        .mpaghi-intro { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 2.5rem; }
        .mpaghi-narrow { max-width: 820px; }
        .mpaghi-activities { display: grid; grid-template-columns: 1fr 1fr; column-gap: 3rem; }
        @media (max-width: 767px) {
          .mpaghi-intro, .mpaghi-activities { grid-template-columns: 1fr; }
          .mpaghi-intro { gap: 1.5rem; }
        }
      `}</style>
    </main>
  );
}