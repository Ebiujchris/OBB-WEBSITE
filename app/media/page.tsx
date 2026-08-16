import Link from 'next/link';

const mediaTypes = [
  { href: '/media/photos',    icon: '📸', title: 'Photos',    desc: 'Image gallery and cultural archives.' },
  { href: '/media/videos',    icon: '🎥', title: 'Videos',    desc: 'Cultural ceremonies and recorded events.' },
  { href: '/media/audio',     icon: '🎵', title: 'Audio',     desc: 'Songs, stories and spoken recordings.' },
  { href: '/media/documents', icon: '📄', title: 'Documents', desc: 'Historical records and written archives.' },
];

export default function Media() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Archive</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Media Gallery
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Explore our collection of photos, videos, audio recordings and documents preserving Bwamba culture.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem' }}>
            {mediaTypes.map((m) => (
              <Link key={m.href} href={m.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '2.25rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem', lineHeight: 1 }}>{m.icon}</div>
                  <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>{m.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Kingdom Flag */}
          <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div className="badge badge-gold">Kingdom Flag</div>
            <img
              src="/kingdom flag.jpeg"
              alt="Obudhingiya Bwa Bwamba Kingdom Flag"
              style={{ maxWidth: '360px', width: '100%', borderRadius: '0.75rem', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', display: 'block' }}
            />
            <p style={{ fontSize: '0.9375rem', color: '#666', textAlign: 'center', maxWidth: '480px', lineHeight: 1.8 }}>
              The official flag of Obudhingiya Bwa Bwamba — symbol of unity for the Bamba, Babwisi and Vanuma communities.
            </p>
          </div>

          {/* Anthem */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Official Anthem</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '0.375rem' }}>
              Obudhingiya Bwa Bwamba Anthem
            </h2>
            <p style={{ fontSize: '0.8125rem', color: '#999', marginBottom: '2rem', lineHeight: 1.7 }}>
              Adopted melody by S. Mbangi and Rev. Ntulanke (Bwamba Native Association, 1954) ·
              Words by J.K. Kutambaki, S.M. Kisembo, G. Kisembo, A.B. Asaba and C.B. Kanyesige ·
              Harmonized by S.M. Kisembo, Dip. MDD, Makerere University ·
              Studio Choir: Edith Tusabe Miiki, Jennipher Kabasinguzi Miiki, Vivian Baguma Simoli and Swizen Kyomuhendo
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {/* Verse 1 */}
              <div style={{ borderLeft: '3px solid #D8232A', paddingLeft: '1.25rem' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999', marginBottom: '0.875rem' }}>Verse 1</p>
                {['Bhesu̱ bhakpa ndi bha ko Bwamba', 'Ki̱dhedheluwa̱ si̱ni̱-si̱ni̱', 'Nanga kusali̱ya ndyasu̱ yoho', 'Ndia K\' Obudhingiya'].map((line, i) => (
                  <p key={i} className="heading-serif" style={{ fontSize: '1rem', fontStyle: 'italic', color: '#242424', lineHeight: 1.9 }}>{line}</p>
                ))}
              </div>

              {/* Chorus */}
              <div style={{ borderLeft: '3px solid #FCD116', paddingLeft: '1.25rem' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999', marginBottom: '0.875rem' }}>Chorus</p>
                {['Bhesu poni Bhanikyamba', 'Ki̱nsi̱mege Mambombi̱', 'Nanga pasu kyalo', 'Ndia bhela bhakugamya', 'Ka kusali̱ya ndyasu̱ yoho'].map((line, i) => (
                  <p key={i} className="heading-serif" style={{ fontSize: '1rem', fontStyle: 'italic', color: '#242424', lineHeight: 1.9 }}>{line}</p>
                ))}
              </div>

              {/* Verse 2 */}
              <div style={{ borderLeft: '3px solid #1F4D3A', paddingLeft: '1.25rem' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999', marginBottom: '0.875rem' }}>Verse 2</p>
                {['Aliku sabuhanguwa ndyasu̱', 'Gu̱si̱ya, mabhi̱li̱, li̱bho, na ngolo', 'Bhanyama tai bha mbungu'].map((line, i) => (
                  <p key={i} className="heading-serif" style={{ fontSize: '1rem', fontStyle: 'italic', color: '#242424', lineHeight: 1.9 }}>{line}</p>
                ))}
              </div>

              {/* Verse 3 */}
              <div style={{ borderLeft: '3px solid #D8232A', paddingLeft: '1.25rem' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#999', marginBottom: '0.875rem' }}>Verse 3</p>
                {['Ki̱hu̱ti̱se lunganda ndyasu̱', 'Asili, zeni, kisomo na sa di̱ni̱', 'Kigbe bhiani dhudhu ndyasu̱', 'Andu̱lu̱ ki̱ebombi̱se'].map((line, i) => (
                  <p key={i} className="heading-serif" style={{ fontSize: '1rem', fontStyle: 'italic', color: '#242424', lineHeight: 1.9 }}>{line}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

