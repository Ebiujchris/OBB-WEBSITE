import Link from 'next/link';

const clanLeaders = [
  { no: '01', name: 'Mr. Baker Samuel B',        clan: 'Babandi' },
  { no: '02', name: 'Mr. Mudhele Salim',          clan: 'Basu' },
  { no: '03', name: 'Rev. Suuza Acleo',           clan: 'Batalinga' },
  { no: '04', name: 'Mr. Bakecura Cornelius',     clan: 'Banyamwela' },
  { no: '05', name: 'Rev. Yovani Mutoghwabo',     clan: 'Balungu' },
  { no: '06', name: 'Mr. Ngugha Yostasi',         clan: 'Baseghiya' },
  { no: '07', name: 'Mr. Kisembo Sulait M.',      clan: 'Bawiisa' },
  { no: '08', name: 'Mr. Gabriel Bacurana',       clan: 'Bandimbuka' },
  { no: '09', name: 'Mr. Limbaponi Yowasi',       clan: 'Bahombi' },
  { no: '10', name: 'Mr. Bakawerayo Hillary',     clan: 'Balirehe' },
  { no: '11', name: 'Mr. Ngeye Stephen',          clan: 'Banseelu' },
  { no: '12', name: 'Mr. Dominic Atooko',         clan: 'Baboni' },
  { no: '13', name: 'Mr. Kiloolo Leo',            clan: 'Bahundu' },
  { no: '14', name: 'Mr. Leo Bamwitirebye',       clan: 'Bamate' },
  { no: '15', name: 'Mr. Katongole James',        clan: 'Bahanda' },
  { no: '16', name: 'Pr. Balaami Tadeo',          clan: 'Bandimanga' },
  { no: '17', name: 'Mr. Ndigyaha John',          clan: 'Batolu' },
  { no: '18', name: 'Mr. Bambanduwa Filimon',     clan: 'Bakuteele' },
  { no: '19', name: 'Rev. Yofesi Bgalaghanja',    clan: 'Banyangule' },
  { no: '20', name: 'Mr. Bazalirwaki Vanensio',   clan: 'Bajimbula' },
  { no: '21', name: 'Mr. Aruta Sirwano',          clan: 'Bandinibe' },
  { no: '22', name: 'Mr. Denesi Nyaruhondo',      clan: 'Babhila' },
  { no: '23', name: 'Mr. Adonia Balinsangayo',    clan: 'Bamaga' },
  { no: '24', name: 'Mr. Basiime Amos',           clan: 'Ba_hula' },
  { no: '25', name: 'Mr. Alajo Sylivano',         clan: 'Vanuma' },
];

const clans = [
  'Babandi','Basu','Batalinga','Banyamwela','Balungu',
  'Baseghiya','Bawiisa','Bandimbuka','Bahombi','Balirehe',
  'Banseelu','Baboni','Bahundu','Bamate','Bahanda',
  'Bandimanga','Batolu','Bakuteele','Banyangule','Bajimbula',
  'Bandinibe','Babhila','Bamaga','Ba_hula','Vonoma',
];

const bandimangaSubClans = [
  { subClan: 'Feme', people: 'Bafeme' },
  { subClan: 'Timbo', people: 'Bandimutimbo' },
  { subClan: 'Syoko', people: 'Bandisyoko' },
  { subClan: 'Fokeri', people: 'Bandifokeri' },
  { subClan: 'Leeu', people: 'Bandileeu' },
  { subClan: 'Kagwani', people: 'Bandikagwani' },
  { subClan: 'Sendwa', people: 'Basendwa' },
  { subClan: 'Ndwasumba', people: 'Bandwasumba' },
  { subClan: 'Ndimbuwo', people: 'Bandimbuwo' },
  { subClan: 'Kuwbikari', people: 'Bakuwbikari' },
];

export default function Nabantu() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Our people</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Our People
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            The three ethnic communities that form Obudhingiya Bwa Bwamba.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">

          {/* Three communities */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { name: 'Bamba',   language: 'Kwamba',  type: 'Nilotic', desc: 'Nilotic-speaking people with rich cultural traditions and heritage.', color: '#6B1E2E' },
              { name: 'Babwisi', language: 'Lubwisi', type: 'Bantu',   desc: 'Bantu-speaking community sharing linguistic roots with Banyoro, Batooro, and Bakonzo.', color: '#C99A2E' },
              { name: 'Vanuma',  language: 'Vonoma',  type: 'Nilotic', desc: 'Nilotic-speaking people contributing unique cultural perspectives.', color: '#1F4D3A' },
            ].map((people) => (
              <div key={people.name} className="card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '3rem', height: '3rem', borderRadius: '0.875rem',
                  background: people.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.375rem', marginBottom: '1.375rem',
                }}>
                  👥
                </div>
                <h3 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '0.375rem' }}>{people.name}</h3>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#999', marginBottom: '0.875rem' }}>
                  {people.language} · {people.type}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.75 }}>{people.desc}</p>
              </div>
            ))}
          </div>

          {/* Clans banner */}
          <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '1.25rem', padding: '2.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }} className="two-col-grid">
              <div>
                <h2 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>Our 25 Clans</h2>
                <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, marginBottom: '1.75rem' }}>
                  Obudhingiya Bwa Bwamba is comprised of 25 clans, each with its own history, totems, and cultural practices. These clans form the foundation of our social structure and cultural identity.
                </p>
                <Link href="/nabantu/clans" className="btn btn-primary">Explore Our Clans</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                {['25 clans', 'Unique totems', 'Clan histories', 'Living traditions'].map((item) => (
                  <div key={item} style={{ background: '#F8F3E7', borderRadius: '0.75rem', padding: '1.125rem', fontSize: '0.875rem', fontWeight: 600, color: '#242424' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-pages */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { href: '/nabantu/clans',          icon: '🏛️', title: 'Clans & Sub-Clans',   desc: 'Explore the 25 clans, their histories, totems, and cultural significance.' },
              { href: '/nabantu/clan-leaders',   icon: '👑', title: 'Clan Leaders',         desc: 'Meet the heads of clans who preserve our traditions and guide our communities.' },
              { href: '/nabantu/totems',         icon: '🦅', title: 'Totems & Symbols',     desc: 'Discover the totems and their spiritual significance in our culture.' },
              { href: '/nabantu/family-lineage', icon: '🌳', title: 'Family & Lineage',     desc: 'Understanding family structures and lineage systems in our communities.' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '3rem', height: '3rem', borderRadius: '0.875rem',
                    background: '#F8F3E7', border: '1px solid rgba(0,0,0,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .two-col-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
