import Link from 'next/link';
import Image from 'next/image';

export default function PrimeMinisterPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/omudhingiya" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Omudhingiya</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Prime Minister</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Katikiro · Prime Minister</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            The Right Honourable Charles Bukantwa
          </h1>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div className="prime-minister-profile" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 0.8fr) minmax(0, 1.4fr)', background: '#fff', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(36,36,36,0.08)' }}>
            <div className="prime-minister-portrait" style={{ position: 'relative', minHeight: '320px' }}>
              <Image
                src="https://res.cloudinary.com/a9kf2wue/image/upload/v1786659106/1.Rt.Hon.Charles_Bukantwa._Prime_Minister..jpg"
                alt="Rt. Hon. Charles Bukantwa, Prime Minister"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 700px) 100vw, 35vw"
              />
            </div>
            <div style={{ padding: 'clamp(1.25rem, 3vw, 2.25rem)' }}>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>
                The Right Honourable Charles Bukantwa,
                <br />
                Katikiro (Oweng) of Obudingya Bwamba
              </h2>

              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.75, marginBottom: '0.875rem' }}>
                The Right Honourable Charles Bukantwa is a son of the Nibe Clan and a proud member of the Bamba people. Rooted in the heritage and traditions of his clan and community, he brings that identity to the service of the Obudingya and its people.
              </p>

              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.75, marginBottom: '0.875rem' }}>
                He serves as the Katikiro (Prime Minister) of Obudingya Bwamba and has been the foremost servant of the Omudhingiya since 2020. Working under the Omudhingiya’s direction, he leads the Cabinet and presides over its meetings, guiding the business of Parliament and keeping its proceedings in good order. He coordinates the institution’s policies, programmes, communications, and activities, so that every office moves in harmony and every decision honours the dignity of the Obudingya and the welfare of its people.
              </p>

              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.75 }}>
                He is assisted by two Deputy Prime Ministers, who carry out the responsibilities he entrusts to them: the Right Honourable (Afande) Kihanda Hassan, of the Babandi Clan and the Babwisi community, and the Right Honourable Mutebi Ivan, of the Vanuma community.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            <Link href="/omudhingiya" style={{ color: '#1F4D3A', textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Back to Omudhingiya
            </Link>
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
