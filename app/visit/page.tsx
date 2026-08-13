import Link from 'next/link';

export default function VisitBwamba() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Plan your trip</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Visit Bwamba
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Discover the beauty and cultural richness of Bundibugyo and the Bwamba region.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* About */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>About Bwamba</h2>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1rem' }}>
                Obudhingiya Bwa Bwamba is located in Bundibugyo District, nestled between the western slopes of the Rwenzori Mountains and the Semuliki Valley in Uganda, extending to Beni District in the Democratic Republic of Congo.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                The region offers breathtaking natural beauty, rich cultural heritage, and warm hospitality from the Bamba, Babwisi, and Vanuma communities.
              </p>
            </div>

            {/* Attractions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              <div className="card" style={{ padding: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>🏔️</span>
                  <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424' }}>Natural Attractions</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {['Rwenzori Mountains (Mountains of the Moon)', 'Semuliki National Park', 'Sempaya Hot Springs', 'Ngite Natural Waterfalls', 'Crater Lakes'].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C99A2E', flexShrink: 0, marginTop: '0.45rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card" style={{ padding: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>🏛️</span>
                  <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424' }}>Cultural Sites</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {['Bujumila (Magic Tree)', 'Mbugha (Hot Springs)', 'Kirogoji (Ngite Water Falls)', 'Kiwalaga (Water Pool)', 'Cultural Information Centre'].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6B1E2E', flexShrink: 0, marginTop: '0.45rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wildlife */}
            <div style={{ background: '#1F4D3A', borderRadius: '1.25rem', padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🌿</span>
                <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#fff' }}>Wildlife & Nature</h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
                The region boasts diverse wildlife including rare bird species, butterflies, and forest animals. Semuliki National Park is home to unique flora and fauna found nowhere else in East Africa.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.85 }}>
                The fertile alluvial soils support bananas, cocoa, coffee, palm oil, and vanilla, contributing to the agricultural richness of the region.
              </p>
            </div>

            {/* CTA */}
            <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Plan Your Visit</h3>
              <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, maxWidth: '480px', marginInline: 'auto', marginBottom: '2rem' }}>
                Experience the warmth and hospitality of the Bwamba people. Contact us for guidance on visiting cultural sites, attending events, or learning more about our heritage.
              </p>
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
