import Link from 'next/link';

const leaders = [
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

export default function ClanLeaders() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/nabantu" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Our People</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Clan Leaders</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Leadership</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Heads of Clans
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            The heads of the 25 clans of Obudhingiya Bwa Bwamba — custodians of tradition and community leadership.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">

          <div className="card" style={{ padding: '3rem', textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>👑</div>
            <h2 className="heading-serif" style={{ fontSize: '1.875rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>
              Guardians of Tradition
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.85, maxWidth: '580px', marginInline: 'auto' }}>
              Clan leaders play a vital role in maintaining cultural continuity, resolving disputes, and ensuring that traditions, stories and ceremonies are passed down faithfully to younger generations. Each of the 25 clans has a designated leader who serves as both a cultural custodian and community representative.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            {['Cultural custodianship', 'Dispute mediation', 'Ceremony oversight', 'Community representation', 'Lineage documentation', 'Elder consultation'].map((role) => (
              <div key={role} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '0.875rem', padding: '1.375rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6B1E2E', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#333' }}>{role}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.875rem', marginBottom: '2rem' }}>
            {leaders.map((l) => (
              <div key={l.no} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '0.875rem', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C99A2E', minWidth: '1.75rem' }}>{l.no}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#242424', marginBottom: '0.2rem' }}>{l.name}</p>
                  <p style={{ fontSize: '0.8125rem', color: '#6B1E2E', fontWeight: 500 }}>{l.clan}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#6B1E2E', borderRadius: '1.25rem', padding: '2.5rem', textAlign: 'center' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.875rem' }}>Help Us Document Leadership</h3>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '460px', marginInline: 'auto', marginBottom: '2rem' }}>
              If you are a clan leader or know of clan leadership information that should be documented, please get in touch.
            </p>
            <Link href="/contact" className="btn btn-gold">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
