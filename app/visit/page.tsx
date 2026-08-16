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

            {/* Tourist Attractions */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Tourism</div>
              <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>Tourist Attractions</h2>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Obudhingiya Bwa Bwamba has great tourism potential, much of it not yet fully tapped. The people are warm, welcoming, entertaining and generally hospitable to visitors.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {[
                  { icon: '🏔️', label: 'Rwenzori Mountains National Park' },
                  { icon: '🌿', label: 'Semuliki National Park' },
                  { icon: '♨️', label: 'Sempaya Hot Springs' },
                  { icon: '🏛️', label: 'Cultural Information Centre' },
                  { icon: '🌊', label: 'Ngite Natural Waterfalls' },
                  { icon: '🌋', label: 'Crater Lakes' },
                  { icon: '🦋', label: 'Rare animal, bird & butterfly species' },
                  { icon: '🗻', label: 'Rift Valley & beautiful scenery' },
                  { icon: '🏺', label: 'Cultural sites and sacred places' },
                ].map((a) => (
                  <div key={a.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', background: '#F8F3E7', borderRadius: '0.625rem', padding: '0.875rem 1rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{a.icon}</span>
                    <span style={{ fontSize: '0.9rem', color: '#333', fontWeight: 500 }}>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Natural attractions + cultural sites */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              <div className="card" style={{ padding: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>🏔️</span>
                  <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424' }}>Natural Attractions</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {['Rwenzori Mountains (Mountains of the Moon)', 'Semuliki National Park', 'Sempaya Hot Springs', 'Ngite Natural Waterfalls', 'Crater Lakes', 'Rift Valley scenery'].map((item) => (
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
                  {['Bujumila (Magic Tree)', 'Mbugha (Hot Springs)', 'Kirogoji (Ngite Water Falls)', 'Kiwalaga (Water Pool)', 'Cultural Information Centre', 'Sacred places and ancestral sites'].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6B1E2E', flexShrink: 0, marginTop: '0.45rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Economic Setup */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Economy</div>
              <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>Economic Set-up of Obudhingiya</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                  Agriculture is the main income earner in Obudhingiya Bwa Bwamba and most households obtain their livelihoods from it. OBB is divided into two food economy zones: the highland zone and the lowland agricultural zone.
                </p>
                <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                  Bananas, beans, cocoa, coffee, palm oil and vanilla are grown across all zones. Cassava is predominately grown in highland and lowland zones, while sweet potatoes and groundnuts are common in the lowland zone. Many households rely on crop and livestock sales as their main source of income.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.625rem', margin: '0.5rem 0' }}>
                  {['Bananas','Beans','Cocoa','Coffee','Palm Oil','Vanilla','Cassava','Sweet Potatoes','Groundnuts'].map((crop) => (
                    <div key={crop} style={{ background: '#F8F3E7', borderRadius: '0.5rem', padding: '0.5rem 0.875rem', fontSize: '0.8125rem', color: '#333', fontWeight: 500 }}>{crop}</div>
                  ))}
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                  OBB enjoys fertile alluvial soils, a variety of food and cash crops and readily available human resources for farming. Challenges include inadequate agro-business skills, subsistence farming, retrogressive land tenure systems and weak cooperative societies. These are being addressed through government advisory services, improved road infrastructure and promotion of SACCOs.
                </p>
              </div>
            </div>

            {/* Landscape & Environment */}
            <div style={{ background: '#1F4D3A', borderRadius: '1.25rem', padding: '2.5rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Landscape</div>
              <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Obudhingiya Landscape</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>
                  Obudhingiya Bwa Bwamba is a highly mountainous area. The soils in different parts are organic, ferrosol, podsols/eutrophic and hydromorphic. The mountainous terrain makes the area prone to soil erosion, resulting in landslides, loss of soil fertility and river silting.
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>
                  The area has suffered cyclic landslides every 30–40 years and periodic flooding. In 2000 a landslide claimed 19 lives in Kasitu sub county; in 2009, 14 households were affected in Bubukwanga sub county. Every year, especially during the long rains of November–December, landslides occur in various villages.
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>
                  Communities are already experiencing increasing temperatures linked to increased malaria incidences in highland areas, more frequent crop pest and disease outbreaks (coffee wilt, cassava mosaic, banana bacterial wilt), and changes in agricultural patterns. The institution is working to address these environmental challenges as key priorities.
                </p>
              </div>
            </div>

            {/* Wildlife */}
            <div className="card" style={{ padding: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🌿</span>
                <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424' }}>Wildlife & Nature</h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1rem' }}>
                The region boasts diverse wildlife including rare bird species, butterflies, and forest animals. Semuliki National Park is home to unique flora and fauna found nowhere else in East Africa.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                Most people in OBB depend on trees for fuel needs such as cooking, heating and brick baking. The area has only recently been connected to the national hydroelectricity grid. This over-dependency on wood products has led to massive deforestation and bare hills, facilitating soil and water runoff.
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
