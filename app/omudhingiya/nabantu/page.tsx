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
                    Her Royal Highness Mbabazi Betty
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                      Within the Obudhingiya Bwa Bwamba cultural institution, the title <em>Na'abantu</em> — which translates as "Mother of the People" — is bestowed upon the wife of the Omudhingiya. She carries the full honour of Her Royal Highness (HRH) and walks alongside the Omudhingiya as an equal in social standing and public dignity.
                    </p>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                      While her role has no formally prescribed duties in the institution's constitution, the Na'abantu is a constant presence at the Omudhingiya's side — accompanying him on official visits, cultural ceremonies and community engagements. She also takes on ceremonial responsibilities in her own right, particularly in matters that touch on the wellbeing of women, children and the fabric of family life within Obudhingiya.
                    </p>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                      Across all clans and communities of Obudhingiya Bwa Bwamba, the Na'abantu is held with deep respect — seen as a mother to all Bana'Budhingiya. In any gathering of the institution, she holds a position of precedence above all other women.
                    </p>
                    <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                      Her Royal Highness Mbabazi Betty is the current Na'abantu, wife of His Royal Highness Col. (Rtd) Ayongi Martin Kamya, the Omudhingiya. Born into the Batalinga Clan of the Babwisi community, she is a daughter of Mr. Aligyaha Salezio.
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
