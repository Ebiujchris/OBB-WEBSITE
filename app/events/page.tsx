import Link from 'next/link';

const upcoming = [
  { id: 1, title: 'Traditional Music Workshop',         date: 'Aug 25, 2026', time: '2:00 PM – 5:00 PM',   location: 'Community Cultural Center', desc: 'Learn traditional Bwamba songs and musical instruments from master musicians.' },
  { id: 2, title: 'Language Learning Circle – Lubwisi', date: 'Sep 1, 2026',  time: '10:00 AM – 12:00 PM', location: 'Community Hall',             desc: 'Monthly gathering for those learning and practising the Lubwisi language.' },
  { id: 3, title: 'Storytelling Evening with Elders',   date: 'Sep 10, 2026', time: '6:00 PM – 8:00 PM',   location: 'Open Air Theatre',           desc: 'Community elders share traditional folk stories in all three languages.' },
];

const past = [
  { id: 4, title: 'Annual Cultural Festival',  date: 'Aug 8, 2026',  desc: 'Three-day celebration with music, dance, and traditional ceremonies.' },
  { id: 5, title: 'Youth Cultural Exchange',   date: 'Jul 28, 2026', desc: 'Young people from different clans came together to learn and share traditions.' },
];

export default function Events() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Calendar</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Events
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Join us in celebrating and preserving our cultural heritage through community events.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>

          {/* Upcoming */}
          <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '2rem' }}>Upcoming Events</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem' }}>
            {upcoming.map((ev) => (
              <div key={ev.id} className="card" style={{ padding: '2rem 2.25rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem' }}>
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>{ev.title}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1rem' }}>
                      {[{ icon: '📅', val: ev.date }, { icon: '🕐', val: ev.time }, { icon: '📍', val: ev.location }].map(({ icon, val }) => (
                        <span key={val} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: '#555' }}>
                          <span>{icon}</span>{val}
                        </span>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.7 }}>{ev.desc}</p>
                  </div>
                  <button className="btn btn-gold" style={{ padding: '0.625rem 1.375rem', fontSize: '0.8125rem', flexShrink: 0 }}>
                    Register Interest
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Past */}
          <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '2rem' }}>Past Events</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {past.map((ev) => (
              <div key={ev.id} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '1rem', padding: '1.5rem 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#242424', marginBottom: '0.375rem' }}>{ev.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.65 }}>{ev.desc}</p>
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#C99A2E', flexShrink: 0 }}>{ev.date}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/contact" className="btn btn-primary">Get Involved</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
