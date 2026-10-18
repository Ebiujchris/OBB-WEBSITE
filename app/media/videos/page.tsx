import Link from 'next/link';

const videos = [
  { src: 'https://res.cloudinary.com/a9kf2wue/video/upload/f_mp4/812c3555.mov', type: 'video/mp4', title: 'Community video 1' },
  { src: 'https://res.cloudinary.com/a9kf2wue/video/upload/f_mp4/812c3564.mov', type: 'video/mp4', title: 'Community video 2' },
  { src: 'https://res.cloudinary.com/a9kf2wue/video/upload/f_mp4/812c3570.mov', type: 'video/mp4', title: 'Community video 3' },
  { src: 'https://res.cloudinary.com/a9kf2wue/video/upload/f_mp4/812c3572.mov', type: 'video/mp4', title: 'Community video 4' },
  { src: 'https://res.cloudinary.com/a9kf2wue/video/upload/f_mp4/812c3590.mov', type: 'video/mp4', title: 'Community video 5' },
  { src: '/images/videos/praying%20for%20omudhiiya%20video.MOV', type: 'video/quicktime', title: 'Prayer for Omudhingiya' },
];

export default function VideosPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/media" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Media</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Videos</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Archive</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Video Gallery
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: '560px' }}>
            Cultural ceremonies and recorded moments from the communities of Bwamba.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/media" style={{ color: '#1F4D3A', textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Back to Media
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
            {videos.map((video) => (
              <article key={video.src} className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '0.5rem' }}>
                <div style={{ aspectRatio: '16 / 9', background: '#111' }}>
                  <video controls playsInline preload="none" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}>
                    <source src={video.src} type={video.type} />
                    Your browser does not support this video format.
                  </video>
                </div>
                <div style={{ padding: '0.875rem 1rem' }}>
                  <h2 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#242424' }}>{video.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}