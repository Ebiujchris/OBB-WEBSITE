export default function Omudhingiya() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Cultural leader</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
            Omudhingiya Martin<br />Ayongi Kamya
          </h1>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Main profile */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', background: '#111' }}>
                <img
                  src="/omundhingiya image.jpeg"
                  alt="Omudhingiya Martin Ayongi Kamya"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                  padding: '1.5rem',
                }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FCD116', marginBottom: '0.25rem' }}>Cultural Leader</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Omudhingiya Martin Ayongi Kamya</p>
                </div>
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>The Cultural Leader</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'OMUDHINGIYA is the symbol of Bamba, Vonoma and Babwisi\'s dignity and his presence is inspiring the community with a sense of unity, peace, tranquility, joy, happiness and the continuity of our cherished way of life for future generations to emulate.',
                    'Omudhingiya Martin Ayongi Kamya serves as the Cultural Leader of Obudhingiya Bwa Bwamba cultural institution; the embodiment of unity of the clans of the Bamba, Babwisi and Vanuma communities everywhere they live.',
                    'OMUDHINGIYA is the supreme head of Obudhingiya Bwa Bwamba and fountain of Honour, taking precedence over all persons willingly paying allegiance to him as the cultural leader.',
                  ].map((para, i) => (
                    <p key={i} style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>{para}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Responsibilities & Structure */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              <div className="card" style={{ padding: '2.25rem' }}>
                <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Responsibilities</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {['Chief Spokesman and representative of Obudhingiya', 'Embodiment of unity for all clans', 'Custodian of customs, traditions and practices', 'Supreme head and fountain of honour'].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#555', lineHeight: 1.65 }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C99A2E', flexShrink: 0, marginTop: '0.45rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card" style={{ padding: '2.25rem' }}>
                <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Leadership Structure</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {["Esimudhingiya (Head of Elders)", "Katikilo (Prime Minister)", "Executive Council (Ministers)", "Council of Elders (Bakulu b'Entula)", "Cultural Council (Kusei)"].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#555', lineHeight: 1.65 }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6B1E2E', flexShrink: 0, marginTop: '0.45rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quote */}
            <div style={{ background: '#6B1E2E', borderRadius: '1.25rem', padding: '3rem', textAlign: 'center' }}>
              <p className="heading-serif" style={{ fontSize: '1.75rem', fontStyle: 'italic', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                &ldquo;OMUDHINGIYA is heard in silence.&rdquo;
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', marginInline: 'auto', lineHeight: 1.8 }}>
                OMUDHINGIYA enjoys all the attributes, dignities and preeminence attached to his office in accordance with the customs, tradition, usage and practices of his people.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
