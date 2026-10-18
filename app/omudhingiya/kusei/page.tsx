import Image from 'next/image';
import Link from 'next/link';

const presidingOfficers = [
  {
    src: 'https://res.cloudinary.com/a9kf2wue/image/upload/v1786659106/4.Rt.Hon.Maisaba_Manzi_Edmond._Kusei_Speaker..jpg',
    name: 'Rt. Hon. Maisaba Manzi Edmond',
    title: 'Kusei Speaker',
  },
  {
    src: 'https://res.cloudinary.com/a9kf2wue/image/upload/v1786659106/5.Rt.Hon._Kamu_Jim_Sumbabhuliki._Deputy_Kusei_Speaker..jpg',
    name: 'Rt. Hon. Kamu Jim Sumbabhuliki',
    title: 'Deputy Kusei Speaker',
  },
];

export default function KuseiPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/omudhingiya" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Omudhingiya</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Kusei</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>About Kusei</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            The legislative arm of Obudhingiya Bwa Bwamba
          </h1>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div className="card" style={{ padding: '2.5rem', maxWidth: '920px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.125rem', color: '#242424', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Kusei is the supreme organ of the Obudhingiya Bwa Bwamba cultural institution. It is the council where the voices of the people are gathered, weighed, and turned into decisions for the good of the whole realm.
            </p>

            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>
              Membership
            </h2>

            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#555', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.75rem' }}>
              <li>Directly elected clan representatives</li>
              <li>Representatives of the Elders’ Council</li>
              <li>Directly elected youth (Mpaghi) representatives from all sub-counties</li>
              <li>Special nominees appointed by the Omudhingiya</li>
              <li>All members of the Executive Committee (Cabinet)</li>
            </ul>

            <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.9 }}>
              Every sitting of Kusei is convened and presided over by the Speaker or, in his absence, the Deputy Speaker, both elected from among the members on the first council sitting. The presiding officer preserves order and decorum in the House and rules on questions of order and practice.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <Link href="/omudhingiya" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6B1E2E', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                ← Back to Omudhingiya
              </Link>
            </div>
          </div>

          <section aria-labelledby="kusei-officers-heading" style={{ maxWidth: '920px', margin: '2.5rem auto 0' }}>
            <h2 id="kusei-officers-heading" className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>
              Presiding Officers
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {presidingOfficers.map((officer) => (
                <article key={officer.title} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4', background: '#242424' }}>
                    <Image
                      src={officer.src}
                      alt={`${officer.name}, ${officer.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#242424', marginBottom: '0.35rem' }}>{officer.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#666' }}>{officer.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
