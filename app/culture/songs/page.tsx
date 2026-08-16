import Link from 'next/link';

const songs = [
  { title: 'Enyimba ya Bwamba',   type: 'Ceremonial', lang: 'Lubwisi', desc: 'A ceremonial song sung during the harvest season, expressing gratitude to the land and ancestors.' },
  { title: 'Omugambo gw\'Obulamu', type: 'Lament',     lang: 'Kwamba',  desc: 'A reflective song about the cycle of life, sung during times of loss and remembrance.' },
  { title: 'Ngoma ya Amani',      type: 'Celebration', lang: 'Vonoma',  desc: 'A joyful celebration song performed during community gatherings and festivals.' },
  { title: 'Ekyoto ky\'Obuntu',   type: 'Work song',  lang: 'Lubwisi', desc: 'Sung during communal work to keep spirits high and coordinate group effort.' },
  { title: 'Bwamba Nyote',        type: 'Unity',      lang: 'Kwamba',  desc: 'A unifying song that calls together all three communities under one shared identity.' },
];

export default function Songs() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Songs</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Music</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Songs</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '500px' }}>
            Musical expressions of joy, sorrow, celebration and daily life across the Bwamba communities.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {songs.map((s) => (
              <div key={s.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.625rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(31,77,58,0.08)', color: '#1F4D3A', border: '1px solid rgba(31,77,58,0.15)' }}>{s.type}</span>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{s.lang}</span>
                </div>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424', marginBottom: '0.75rem', fontStyle: 'italic' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Obudhingiya Folk Songs */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Obudhingiya Folk Songs · Lubwisi</div>
            <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Traditional Songs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { title: 'Nkaba Ningenda', author: 'Mubulya A. Wilson', lines: ['Nkaba ningenda e waa Taata', 'Naasanga bu̱noni̱ bubili mu njila', 'Kali̱ kati bususa bi̱ti̱ya', 'Kali̱ kati, \'butukuula', 'Naalasi̱ye njenje mu kutui', 'Naalulukana njenje munda', 'Kamucole, kamucole'] },
                { title: 'Mukuwe Ali e Kaanu̱ma', author: 'Mubulya A. Wilson', lines: ['Mukuwe ali e kaanu̱ma', 'Aasi̱ye kulola maaha', 'Oghende oghambile njoko', 'Ki̱i̱no kyamukangama', 'Ee naawe Bheeni̱to', 'Bheeni̱to na Ngulunguta', 'Ngulunguta na Selengi̱bho'] },
                { title: 'Ki̱i̱su̱ndo', author: 'Mubulya A. Wilson', lines: ['Solo: Ki̱i̱su̱ndo, ki̱i̱su̱ndo', 'Chorus: Heeleya ki̱su̱ndo', 'Naawe odhongomela ala'] },
                { title: 'Kasandaliya', author: 'Mubulya A. Wilson', lines: ['Londo e Londo', 'Kasandali̱ya….', 'Sandala tulole', 'Nga maasi ghaa kitenee'] },
                { title: 'Nkoko Nsokolome', author: 'Traditional', lines: ['Nkoko nsokolome yasamba ntu̱u̱li̱', 'Otali muntu mukulu tookuuya eti̱nde', 'Kpolo-kpolo mooti̱ katu̱mi̱sage li̱bho'] },
                { title: 'Muleli', author: 'Traditional', lines: ['Hooli̱ya ee hooli̱ya ee', 'Njoko waawe ni mu̱gu̱ndi̱ya', 'Na mu̱leli̱ na mu̱leli̱ tabamwi̱ma', 'Kahu̱si̱ko ka mu̱leeli̱ o', 'Kakongo ka mu̱leeli̱ o'] },
                { title: 'Oni Bhwengi̱ya', author: 'Mubulya A. Wilson', lines: ['Oni Bhwengi̱ya', 'Oni Bhwengi̱ya', 'Si̱ye Bhwengi̱ya bwa Taata'] },
                { title: 'Baana Mugange', author: 'Mubulya A. Wilson', lines: ['Kanganganga.. kanganga', 'Baana mugange', 'Bakulu bakahuwa', 'Kabiyo-biyo – biyo', 'Kusanga biyo', 'Ku̱ku̱nda biyo'] },
              ].map((song, i) => (
                <div key={i} style={{ borderLeft: '3px solid #1F4D3A', paddingLeft: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <h3 className="heading-serif" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#242424', fontStyle: 'italic' }}>{song.title}</h3>
                    <span style={{ fontSize: '0.8125rem', color: '#666' }}>— {song.author}</span>
                  </div>
                  {song.lines.map((line, j) => (
                    <p key={j} style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.8 }}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
