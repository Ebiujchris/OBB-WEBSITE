import Link from 'next/link';

const clans = [
  'Babandi', 'Basu', 'Batalinga', 'Banyamwela', 'Balungu',
  'Baseghiya', 'Bawiisa', 'Bandimbuka', 'Bahombi', 'Balirehe',
  'Banseelu', 'Baboni', 'Bahundu', 'Bamate', 'Bahanda',
  'Bandimanga', 'Batolu', 'Bakuteele', 'Banyangule', 'Bajimbula',
  'Bandinibe', 'Babhila', 'Bamaga', 'Ba_hula', 'Vonoma',
];

const bandimangaSubClans = [
  { subClan: 'Feme',      people: 'Bafeme' },
  { subClan: 'Timbo',     people: 'Bandimutimbo' },
  { subClan: 'Syoko',     people: 'Bandisyoko' },
  { subClan: 'Fokeri',    people: 'Bandifokeri' },
  { subClan: 'Leeu',      people: 'Bandileeu' },
  { subClan: 'Kagwani',   people: 'Bandikagwani' },
  { subClan: 'Sendwa',    people: 'Basendwa' },
  { subClan: 'Ndwasumba', people: 'Bandwasumba' },
  { subClan: 'Ndimbuwo',  people: 'Bandimbuwo' },
  { subClan: 'Kuwbikari', people: 'Bakuwbikari' },
];

export default function Clans() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/nabantu" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Our People</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Clans</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Community</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            The 25 Clans
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Each clan carries its own history, totems, and cultural practices — the foundation of our social identity.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Clan grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '0.75rem' }}>
            {clans.map((clan, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '0.875rem', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C99A2E', minWidth: '1.5rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#242424' }}>{clan}</span>
              </div>
            ))}
          </div>

          {/* Bandimanga spotlight */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Clan Spotlight</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>Bandimanga Clan</h2>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#999', marginBottom: '1.5rem' }}>Background</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                The Bhandimanga clan is among the 25 clans that make up Obudhingiya Bwa Bwamba. The people belonging to this clan are called Bhandimanga. The word <em>"Bandi"</em> (plural) means "of or belonging to" — people within or tracing their ancestry from Ndimanga as a clan. All clans in Obudhingiya Bwa Bwamba except a few use "Ba" to mean people within a clan. In singular, a person within a clan is represented by the word <em>"Mundi"</em>.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                The Bhandimanga clan comprises eleven (11) sub-clans.
              </p>
            </div>

            {/* Sub-clans table */}
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>Sub-Clans</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.625rem', marginBottom: '2rem' }}>
              {bandimangaSubClans.map((s) => (
                <div key={s.subClan} style={{ background: '#F8F3E7', borderRadius: '0.625rem', padding: '0.875rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#242424' }}>{s.subClan}</span>
                  <span style={{ fontSize: '0.8125rem', color: '#6B1E2E', fontWeight: 500 }}>{s.people}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Origin</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                The Bhandimanga are believed to have originated and migrated from Toro Kingdom around the 1870s. They were the Omukama's (Toro king) entertainers who sang and danced traditional songs to the king. One day, the Omukama visited Bwamba with his entertainers. When he decided to return to Toro, the Bhandimanga stayed behind.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                In Bwamba, the Bhandimanga occupied the places of Mwandika, Kisiri, Bbhamba and areas around river Lamia. They later migrated into the forests of Zaire (present-day DRC) where they met the Bandimbele and Batwa (pygmies). Intermarrying with the Bandimbele, they formed the sub-groups: Feme, Timbo, Syoko, Kubbhikali, Leeu, Kagwani, Sendwa, Ndyasumba, Ndimboyo and the Kphekaali.
              </p>
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Way of Life</h3>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              The Bhandimanga are led by a clan head called <em>Omukwati W'enkoni Mukulu</em>, highly respected and responsible for presiding over marriage, burial and other ceremonies. Each sub-clan also has a leader called <em>Omukwati W'enkoni Muto</em> with the same responsibilities at sub-clan level.
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              The Bhandimanga were renowned as music entertainers — playing drums, traditional harps (Likembe and Doomo). They were also skilled cooks; their most beloved dish was <em>Sombe</em>, a delicacy prepared from cassava leaves.
            </p>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Totems & Taboos</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { totem: 'Ngamu (white bird)', reason: 'Not eaten — believed to act as a spiritual messenger.' },
                { totem: 'Omutuwe gwe mbuli (head of the goat)', reason: 'Prohibited — eating it was believed to cause one to lose their teeth.' },
              ].map((t) => (
                <div key={t.totem} style={{ background: '#F8F3E7', borderRadius: '0.75rem', padding: '1rem 1.25rem' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#242424', marginBottom: '0.25rem' }}>{t.totem}</p>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.6 }}>{t.reason}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
