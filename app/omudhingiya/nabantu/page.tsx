import Link from 'next/link';

export default function Nabantu() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/omudhingiya" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Omudhingiya</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Nabantu (Queen)</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Her Royal Highness</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Nabantu — The Queen
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Na'abantu, meaning "the Mother of People" — the official title of the Queen Consort of Obudhingiya Bwa Bwamba.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Profile card */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }} className="nabantu-grid">
                {/* Image */}
                <div style={{ position: 'relative', background: '#111', minHeight: '32rem' }}>
                  <img
                    src="/Nabantu(Queen).jpeg"
                    alt="Her Royal Highness Mbabazi Betty — Na'abantu of Obudhingiya Bwa Bwamba"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', position: 'absolute', inset: 0 }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                    padding: '2rem 1.5rem 1.5rem',
                  }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FCD116', marginBottom: '0.25rem' }}>Na'abantu of Obudhingiya Bwa Bwamba</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>HRH Mbabazi Betty</p>
                  </div>
                </div>

                {/* Bio */}
                <div style={{ padding: '2.5rem' }}>
                  <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Biography</div>
                  <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>
                    Her Royal Highness Mbabazi Betty,
                    <br />
                    Na’abantu of Obudhingiya Bwa Bwamba
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                      Born into the Batalinga Clan of the Babwisi community, Her Royal Highness Mbabazi Betty is a daughter of Mr. Aligyaha Salezio. As wife of His Royal Highness Col. (Rtd) Ayongi Martin Kamya, the Omudhingiya, she serves as the Na’abantu, the “Mother of the People,” and stands as a living symbol of peace, harmony, and protection for the people of Bwamba.
                    </p>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                      The title Na’abantu is bestowed upon the wife of the Omudhingiya, and she carries the full honour of Her Royal Highness (HRH).
                    </p>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                      Across all clans and communities of Obudhingiya Bwa Bwamba, she is held with deep respect as a mother to all Bana’Budhingiya, and she holds a place of precedence above all other women at every gathering of the institution. She carries this honour with a clear sense of purpose: to protect the culture, values, and traditions that bind the people of Bwamba, and to stand with those who need support most, especially women, children, and vulnerable families. She champions the dignity of the home and the strength of marriage and family as the foundation of a healthy society.
                    </p>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                      Her commitment to the weak and vulnerable finds practical expression through the Na’abantu Foundation, which advances the wellbeing of women and the protection and care of vulnerable children, while safeguarding the cultural heritage of Bwamba for generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Role summary */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { title: 'Title', desc: 'Her Royal Highness (HRH) Na\'abantu' },
                { title: 'Primary Role', desc: 'Support and companionship to the Omudhingiya at public and official functions' },
                { title: 'Charitable Duties', desc: 'Welfare of women, children, family and home' },
                { title: 'Social Standing', desc: 'Mother-figure to all Bana\'Budhingiya; holds precedence over all women in the realm' },
              ].map((item) => (
                <div key={item.title} className="card" style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#242424', marginBottom: '0.375rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#666', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/omudhingiya" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6B1E2E', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                ← Back to Omudhingiya
              </Link>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .nabantu-grid { grid-template-columns: 1fr 1fr !important; }
          .nabantu-grid > div:first-child { min-height: 36rem !important; }
        }
      `}</style>
    </main>
  );
}
