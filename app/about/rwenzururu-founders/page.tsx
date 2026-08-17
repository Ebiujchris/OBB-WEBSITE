import Link from 'next/link';

const members = [
  'Yeremiya Kawamara','Petero K. Mupalya','Henrey Mbilika','Ndyezika Sirwano','Andeleya Lukilo',
  'Yositansi K. Komungalo','Husseni Mucakambi','Obadiah Kidungu','Erinest Rupanjura','Yozefu Kibhebhelo Dugu',
  'Erinest Kyambiyo','Bukansinga','Kisiili Mwangata','Kisiili','Jailesi Mukubwa',
  'Kmanda Anakileto','Mbogho abuneeli','Eliya Ntamuhila','Bailensi Obote','Hezekiya Kupa',
  'Mbutatali Atindiya','Eli Komunjala','Denesi Komunjala','Ben Bhangogoole','Paulo Bhambuye',
  'Yakobo Nyakirro','Yakobo Bhabhuwe','Bukamaki Yusufu','Andeleya Kibhbhelo','Erisa Atooko',
  'Kosiya Ngilisi','Pilikalipo Kibhebhelo','Andeleya Kibhebhelo','Muhamudu Ntunguwa','Matete Christopher',
  'Akileo Simutundu','Mulinga','Ntambala','Obadiya Kidabho','John Mulenguwa',
  'Yozefu Kimeene','Kambaga','Kinjeghele','Bakebbeseliya','Timeteo Ntelebuki',
  'Yona Miiki','Nyansiyo Lughambiluwa','Semu Gwala','Paulini Mukilolu','Pilikalipo Ruculera',
  'Isaleeli Abankakiyo','Issa','Basiima','Denesi Nyaruhondo','Denesi Sulanyama',
  'Christopher Kasimbazi','Jackson Rwemera','Benjamin Nkwilabusa',
];

export default function RwenzururuFounders() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/about" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>About</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Rwenzururu Founder Members</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Founder Members</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Rwenzururu Founder Members
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Rwenzururu Movement founder members in Bundibugyo — those who stood for autonomy and self-determination.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/about" style={{ color: '#1F4D3A', textDecoration: 'none', fontSize: '0.95rem' }}>← Back to About</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
            {members.map((name, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '0.875rem', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B1E2E', minWidth: '1.75rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: '0.9375rem', color: '#242424' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
