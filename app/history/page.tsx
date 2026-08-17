import Link from 'next/link';

export default function History() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Our past</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Our History
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Centuries of community, culture and resilience in the foothills of the Rwenzori Mountains.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* 3 intro cards horizontal */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Origins of the Bwamba People', color: '#D8232A', body: 'The Bwamba people have a rich history spanning centuries in the foothills of the Rwenzori Mountains, with communities that thrived through agriculture, trade and strong cultural traditions. The preservation of three distinct languages — Lubwisi, Kwamba and Vonoma — reflects the diverse heritage of our communities.' },
              { title: 'The Obudhingiya Institution', color: '#C99A2E', body: 'The Obudhingiya of Bwamba has served as a unifying institution preserving cultural values, mediating disputes and maintaining connection to ancestral wisdom. Through generations, our leaders have ensured the continuity of traditions, stories and cultural practices.' },
              { title: 'Cultural Resilience', color: '#1F4D3A', body: 'Despite the challenges of modernisation and external influences, the Bwamba people have maintained their cultural identity through dedicated preservation efforts. Today we continue to honour our ancestors by documenting languages, recording stories and passing traditions forward.' },
            ].map((s) => (
              <div key={s.title} className="card" style={{ padding: '1.75rem', borderTop: `3px solid ${s.color}` }}>
                <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>

          {/* Horizontal timeline strip */}
          <div style={{ background: '#242424', borderRadius: '1.25rem', padding: '2rem' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>Historical Timeline</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0' }}>
              {[
                { era: 'Pre-Colonial Era', detail: 'Establishment of Bwamba communities and cultural traditions.' },
                { era: 'Colonial Period', detail: 'Adaptation and resilience under colonial administration.' },
                { era: 'Post-Independence', detail: 'Revival of cultural institutions and language preservation.' },
                { era: 'Modern Era', detail: 'Digital documentation and global sharing of Bwamba heritage.' },
              ].map((item, i, arr) => (
                <div key={item.era} style={{ borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)', paddingLeft: i === 0 ? 0 : '1.25rem', paddingRight: i < arr.length - 1 ? '1.25rem' : 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C99A2E', marginBottom: '0.625rem' }} />
                  <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#C99A2E', marginBottom: '0.375rem' }}>{item.era}</p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kente divider */}
          <div style={{ width: '100%', lineHeight: 0, overflow: 'hidden', borderRadius: '0.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="18" style={{ display: 'block' }} preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="kente-hist" x="0" y="0" width="48" height="18" patternUnits="userSpaceOnUse">
                  <rect width="48" height="18" fill="#111" />
                  <rect x="0" y="0" width="10" height="18" fill="#D8232A" />
                  <rect x="10" y="0" width="10" height="18" fill="#FCD116" />
                  <rect x="20" y="0" width="10" height="18" fill="#1F4D3A" />
                  <rect x="30" y="0" width="4" height="18" fill="#111" />
                  <rect x="34" y="0" width="3" height="18" fill="#D8232A" />
                  <rect x="37" y="0" width="2" height="18" fill="#111" />
                  <rect x="39" y="0" width="3" height="18" fill="#FCD116" />
                  <rect x="42" y="0" width="2" height="18" fill="#111" />
                  <rect x="44" y="0" width="4" height="18" fill="#1F4D3A" />
                  <rect x="0" y="6" width="48" height="2" fill="rgba(0,0,0,0.25)" />
                  <rect x="0" y="10" width="48" height="2" fill="rgba(255,255,255,0.08)" />
                  <polygon points="5,0 10,9 5,18 0,9" fill="rgba(0,0,0,0.2)" />
                  <polygon points="25,0 30,9 25,18 20,9" fill="rgba(0,0,0,0.2)" />
                </pattern>
              </defs>
              <rect width="100%" height="18" fill="url(#kente-hist)" />
            </svg>
          </div>

          {/* Historical Background header */}
          <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #111 0%, #1F4D3A 100%)', borderRadius: '1.25rem', padding: '2rem' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(216,35,42,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />
            <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Historical Background</div>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
              Historical Background of Obudhingiya Bwa Bwamba
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '640px' }}>
              The cultural heritage of Bwamba includes artistic and cultural expressions — language and literary arts, performing arts, visual arts, indigenous knowledge, cultural beliefs, traditions, cultural sites, monuments and antiquities.
            </p>
          </div>

          {/* Communities + Social Structure */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #D8232A' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>The Three Communities</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85, marginBottom: '0.75rem' }}>
                Obudhingiya Bwa Bwamba is comprised of <strong>Bamba</strong>, <strong>Vanoma</strong> and <strong>Babwiisi</strong>. The Babwiisi are Bantu speakers like the Banyoro, Batooro, Bakonzo and Baganda. The Bamba and Vanoma are Nilotic speaking people.
              </p>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85 }}>
                They have lived together since time immemorial on the western slopes of Mount Ruwenzori and Semuliki valley in Bundibugyo District, extending to Beni District in the DRC. They migrated here between the 12th–16th century.
              </p>
            </div>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #FCD116' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Social Structure</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85, marginBottom: '0.875rem' }}>
                The three communities intermarried and have a strong inseparable blood relationship. They live in extended family groups tied by blood, kinship, marriage, consanguinity and surname identification.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { label: 'Family group', value: 'Ridge (Kitubbi)' },
                  { label: 'Ridges form', value: 'Sub-clan' },
                  { label: 'Sub-clans form', value: 'Clan' },
                  { label: 'Leadership', value: 'Most revered male elder' },
                ].map((r) => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.3rem' }}>
                    <span style={{ color: '#888' }}>{r.label}</span>
                    <span style={{ fontWeight: 600, color: '#242424' }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonial + Rwenzururu */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #1F4D3A' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Colonial Division</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85 }}>
                In the 1890s, European colonialists divided the people into two: the western side fell under Belgian colonialists (Babwiisi became "Batalinga", Bamba called "Bhahumu"), while the eastern side fell under the British Protectorate, annexed to Tooro Kingdom as Bwamba County — creating Bwamba on the Ugandan side and Butalinga County in the DRC.
              </p>
            </div>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #D8232A' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>The Rwenzururu Movement</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85 }}>
                Repression by Tooro Kingdom led to a petition in 1954, then a historic walk out from the Toro Rukurato on 13th March 1962. Three leaders were arrested. Mukirani Isaaya escaped to the Rwenzori mountains. The Movement fought for autonomy — succeeding in 1974 when Bundibugyo District was created.
              </p>
            </div>
          </div>

          {/* BBEDA + Founding */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #FCD116' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>BBEDA (2002)</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85 }}>
                On 26th December 2002, the anti-Obusinga group became BBEDA (Bamba–Babwiisi Elders Development Association) under Mr. Fulgensio Bamwiterebye — to protect, preserve and promote Bamba-Babwiisi cultural identity and guard against the expansionist tendencies of Obusinga Bwa Rwenzururu Kingdom.
              </p>
            </div>
            <div className="card" style={{ padding: '1.75rem', borderTop: '3px solid #1F4D3A' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Founding Conference (2012)</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.85 }}>
                A two-day Traditional Leaders and Youth conference of ~1,000 people at Bundibugyo Teachers College on 9th–10th August 2012 unanimously resolved to establish Obudhingiya Bwa Bwamba. Omudhingiya Martin Ayongi Kamya was declared the first cultural leader. The Bundibugyo District Council recognised OBB on 30th October 2012.
              </p>
            </div>
          </div>

          {/* Key dates */}
          <div style={{ background: '#111', borderRadius: '1.25rem', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(252,209,22,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Key Dates</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem' }}>
              {[
                { date: '12th–16th C', event: 'Migration to Bwamba region' },
                { date: '1890s', event: 'Colonial division of the people' },
                { date: '1954', event: 'Petition for equality in Toro Kingdom' },
                { date: '13 Mar 1962', event: 'Historic walk out from Toro Rukurato' },
                { date: '1974', event: 'Bundibugyo District created' },
                { date: '26 Dec 2002', event: 'BBEDA formed' },
                { date: '9–10 Aug 2012', event: 'Founding conference at Bundibugyo TC' },
                { date: '30 Oct 2012', event: 'District Council recognition of OBB' },
                { date: '28 May 2014', event: 'Coronation of Omudhingiya I' },
              ].map((d) => (
                <div key={d.date} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '0.875rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FCD116', marginBottom: '0.25rem' }}>{d.date}</p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{d.event}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
