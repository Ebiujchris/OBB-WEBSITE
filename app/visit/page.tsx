import Link from 'next/link';

const touristPhotos = [
  { src: '/tourist%20attraction/Rwenzori%20Ranges%20.webp', title: 'Rwenzori ranges', description: 'Snow-capped peaks and misty mountain views.' },
  { src: '/tourist%20attraction/Ngite%20water%20falls1.webp', title: 'Ngite Waterfalls', description: 'A dramatic waterfall surrounded by rich forest.' },
  { src: '/tourist%20attraction/sempaya%20hot%20spring.webp', title: 'Sempaya Hot Springs', description: 'Natural thermal springs and bubbling mineral pools.' },
  { src: '/tourist%20attraction/Female%20Hotsprings%20.webp', title: 'Hot spring traditions', description: 'Local community life around the geothermal wonders of the region.' },
  { src: '/tourist%20attraction/Batama%20cultural%20group.jpg', title: 'Batama cultural group', description: 'A vibrant community performance celebrating identity and heritage.' },
  { src: '/tourist%20attraction/sunbird%20semuliki-national-park-1024x680-1.jpg', title: 'Semuliki wildlife', description: 'Rare birds and forest life in the national park.' },
  { src: '/tourist%20attraction/white%20bird.webp', title: 'Birdlife', description: 'An abundance of bird species found in the region.' },
  { src: '/tourist%20attraction/Cocoa%20frutes.jfif', title: 'Cocoa farms', description: 'Bwamba’s fertile soils support rich agriculture.' },
];

export default function VisitBwamba() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Plan your trip</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Bwamba
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Discover the beauty and cultural richness of Bundibugyo and the Bwamba region.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Elephant banner */}
          <div style={{ borderRadius: '1.25rem', overflow: 'hidden', position: 'relative', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <img
              src="/obudhingiya_elephant_pattern.png"
              alt="Obudhingiya Bwa Bwamba"
              style={{ maxHeight: '220px', width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>

          {/* About + Tourist Attractions side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>About Bwamba</div>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.85, marginBottom: '0.875rem' }}>
                Obudhingiya Bwa Bwamba is located in Bundibugyo District, nestled between the western slopes of the Rwenzori Mountains and the Semuliki Valley in Uganda, extending to Beni District in the DRC.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.85 }}>
                The people are warm, welcoming, entertaining and generally hospitable to visitors. The region has great tourism potential, much of it not yet fully tapped.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Main Attractions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { icon: '🏔️', label: 'Rwenzori Mountains National Park' },
                  { icon: '🌿', label: 'Semuliki National Park' },
                  { icon: '♨️', label: 'Sempaya Hot Springs' },
                  { icon: '🌊', label: 'Ngite Natural Waterfalls' },
                  { icon: '🌋', label: 'Crater Lakes & Rift Valley scenery' },
                  { icon: '🏛️', label: 'Cultural Information Centre' },
                  { icon: '🦋', label: 'Rare birds, animals & butterflies' },
                  { icon: '🏺', label: 'Cultural sites & sacred places' },
                ].map((a) => (
                  <div key={a.label} style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', fontSize: '0.875rem', color: '#333' }}>
                    <span>{a.icon}</span>{a.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Natural + Cultural sites */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #C99A2E' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>🏔️ Natural Attractions</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {['Rwenzori Mountains (Mountains of the Moon)', 'Semuliki National Park', 'Sempaya Hot Springs', 'Ngite Natural Waterfalls', 'Crater Lakes', 'Rift Valley scenery'].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: '#555', lineHeight: 1.6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C99A2E', flexShrink: 0, marginTop: '0.45rem' }} />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #6B1E2E' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>🏛️ Cultural Sites</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {['Bujumila (Magic Tree)', 'Mbugha (Hot Springs)', 'Kirogoji (Ngite Water Falls)', 'Kiwalaga (Water Pool)', 'Cultural Information Centre', 'Sacred places and ancestral sites'].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: '#555', lineHeight: 1.6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#6B1E2E', flexShrink: 0, marginTop: '0.45rem' }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Economy + Landscape */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #1F4D3A' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>🌱 Economy</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85, marginBottom: '0.75rem' }}>
                Agriculture is the main income earner. OBB has two food economy zones — highland and lowland. Key crops include bananas, beans, cocoa, coffee, palm oil, vanilla, cassava, sweet potatoes and groundnuts.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {['Bananas','Cocoa','Coffee','Palm Oil','Vanilla','Cassava','Beans'].map((c) => (
                  <span key={c} style={{ fontSize: '0.75rem', background: '#F8F3E7', borderRadius: '9999px', padding: '0.25rem 0.625rem', color: '#555', border: '1px solid rgba(0,0,0,0.07)' }}>{c}</span>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #D8232A' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>🗻 Landscape</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85 }}>
                Obudhingiya is a highly mountainous area with organic, ferrosol, podsol and hydromorphic soils. The terrain is prone to landslides and periodic flooding. Communities are experiencing increasing temperatures linked to malaria and crop disease outbreaks — challenges the institution is actively addressing.
              </p>
            </div>
          </div>

          {/* Wildlife */}
          <div style={{ background: '#1F4D3A', borderRadius: '1.25rem', padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
              <div>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>🌿 Wildlife & Nature</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>
                  Semuliki National Park hosts unique flora and fauna found nowhere else in East Africa. The region boasts diverse rare bird species, butterflies and forest animals. Fertile alluvial soils support a rich variety of food and cash crops.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Rare bird species', 'Forest animals', 'Butterfly species', 'Unique flora', 'Fertile alluvial soils'].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#FCD116', flexShrink: 0 }} />{item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tourist gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '1rem', flexWrap: 'wrap' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', margin: 0 }}>Tourist Highlights</h3>
              <span style={{ fontSize: '0.8125rem', color: '#6B1E2E', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Bwamba at a glance</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {touristPhotos.map((photo) => (
                <div key={photo.title} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '1rem 1rem 1.1rem' }}>
                    <h4 className="heading-serif" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#242424', marginBottom: '0.35rem' }}>{photo.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '0.75rem' }}>Plan Your Visit</h3>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, maxWidth: '480px', marginInline: 'auto', marginBottom: '1.5rem' }}>
              Experience the warmth and hospitality of the Bwamba people. Contact us for guidance on visiting cultural sites, attending events or learning more about our heritage.
            </p>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
