import Link from 'next/link';

export default function FamilyLineage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/nabantu" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Our People</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Family & Lineage</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Lineage</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Family & Lineage
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Understanding family structures and lineage systems that define the Bwamba communities.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { title: 'Patrilineal Structure', body: 'The Bwamba communities follow a patrilineal lineage system, where family membership, clan identity and inheritance are traced through the father\'s line. This creates clear lines of belonging and responsibility within each community.' },
              { title: 'Clan Exogamy', body: 'Members of the same clan are forbidden from marrying one another — a practice known as clan exogamy. This tradition has historically strengthened bonds between different clans and communities, fostering unity across the broader Bwamba people.' },
              { title: 'Family Naming Traditions', body: 'Names in Bwamba culture carry deep meaning and family history. Children are often named after grandparents, ancestors or significant events, keeping the memory of forebears alive through each generation. Language-specific naming traditions differ across Lubwisi, Kwamba and Vonoma speakers.' },
              { title: 'Intergenerational Knowledge', body: 'Family units serve as the primary vehicle for transmitting cultural knowledge. Elders within the family hold responsibility for teaching younger generations the history, values and customs of their clan and community.' },
            ].map((section) => (
              <div key={section.title} className="card" style={{ padding: '2.25rem' }}>
                <h2 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1rem' }}>{section.title}</h2>
                <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>{section.body}</p>
              </div>
            ))}

            <div style={{ background: '#1E4D38', borderRadius: '1.25rem', padding: '2.75rem', textAlign: 'center' }}>
              <h3 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.875rem' }}>Trace Your Lineage</h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '460px', marginInline: 'auto', marginBottom: '2rem' }}>
                Want help researching your family history and clan connections? Reach out to our community team.
              </p>
              <Link href="/contact" className="btn btn-gold">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
