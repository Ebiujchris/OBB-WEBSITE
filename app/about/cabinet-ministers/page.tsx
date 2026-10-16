import Image from 'next/image';
import Link from 'next/link';
import { cabinetMembers } from '../../media/photos/page';

export default function CabinetMinistersPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>About us</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Cabinet Ministers
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '560px' }}>
            Meet the ministers and office holders serving Obudhingiya Bwa Bwamba.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div className="prime-minister-profile" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 0.8fr) minmax(0, 1.4fr)', background: '#fff', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(36,36,36,0.08)' }}>
            <div className="prime-minister-portrait" style={{ position: 'relative', minHeight: '320px' }}>
              <Image
                src={cabinetMembers[0].src}
                alt="Rt. Hon. Charles Bukantwa, Prime Minister"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 700px) 100vw, 35vw"
              />
            </div>
            <div style={{ padding: 'clamp(1.25rem, 3vw, 2.25rem)' }}>
              <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Katikilo · Prime Minister</div>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>
                Rt. Hon. Charles Bukantwa
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.75, marginBottom: '0.875rem' }}>
                The Katikilo leads the Cabinet and guides parliamentary business in Kusei. Working under the Omudhingiya’s direction, he coordinates the institution’s policies, programmes, communications, and activities, and chairs Cabinet meetings. Two deputies assist with responsibilities delegated by the Prime Minister.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.75 }}>
                Charles Bukantwa is from the Nibe Clan and is of Bamba ethnicity. His deputies are Rt. Hon. (Afande) Kihanda Hassan of the Babandi Clan and Babwisi community, and Rt. Hon. Mutebi Ivan of the Vanuma community.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem' }}>
            <Link href="/" style={{ color: '#1F4D3A', textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Home
            </Link>
            <Link href="/about" style={{ color: '#1F4D3A', textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Back to About
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {cabinetMembers.map((member, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4' }}>
                  <Image
                    src={member.src}
                    alt={`${member.name} — ${member.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: '#242424', marginBottom: '0.25rem', lineHeight: 1.4 }}>
                    {member.name}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.5 }}>
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 700px) {
          .prime-minister-profile { grid-template-columns: 1fr !important; }
          .prime-minister-portrait { min-height: 260px !important; }
        }
      `}</style>
    </main>
  );
}
