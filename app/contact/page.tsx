'use client';

export default function Contact() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Get in touch</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '480px' }}>
            Questions, contributions and collaboration are always welcome.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F2ECD8' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }} className="contact-grid">

            {/* Form */}
            <div className="card" style={{ padding: '2.75rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.625rem' }}>Send a message</h2>
              <p style={{ fontSize: '0.9375rem', color: '#777', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                Share your questions, cultural contributions, research interests or partnership ideas with us.
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.375rem' }}>
                {[
                  { label: 'Full Name',      type: 'text',  id: 'name',  placeholder: 'Your full name' },
                  { label: 'Email Address',  type: 'email', id: 'email', placeholder: 'your.email@example.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      style={{
                        width: '100%', padding: '0.875rem 1.125rem',
                        borderRadius: '0.75rem', border: '1.5px solid rgba(0,0,0,0.1)',
                        background: '#fff', fontSize: '0.9375rem', color: '#1A1A1A',
                        outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = '#C4922A'; e.target.style.boxShadow = '0 0 0 3px rgba(196,146,42,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    style={{
                      width: '100%', padding: '0.875rem 1.125rem',
                      borderRadius: '0.75rem', border: '1.5px solid rgba(0,0,0,0.1)',
                      background: '#fff', fontSize: '0.9375rem', color: '#1A1A1A',
                      outline: 'none', cursor: 'pointer',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#C4922A'; e.target.style.boxShadow = '0 0 0 3px rgba(196,146,42,0.12)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.boxShadow = 'none'; }}
                  >
                    <option>General Inquiry</option>
                    <option>Cultural Contribution</option>
                    <option>Language Documentation</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Write your message here..."
                    style={{
                      width: '100%', padding: '0.875rem 1.125rem',
                      borderRadius: '0.75rem', border: '1.5px solid rgba(0,0,0,0.1)',
                      background: '#fff', fontSize: '0.9375rem', color: '#1A1A1A',
                      outline: 'none', resize: 'vertical',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#C4922A'; e.target.style.boxShadow = '0 0 0 3px rgba(196,146,42,0.12)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  icon: <svg width="18" height="18" fill="none" stroke="#C4922A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  title: 'Email', value: 'info@obudhingiya.org', href: 'mailto:info@obudhingiya.org',
                },
                {
                  icon: <svg width="18" height="18" fill="none" stroke="#C4922A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                  title: 'Phone', value: '+256 XXX XXX XXX', href: null,
                },
                {
                  icon: <svg width="18" height="18" fill="none" stroke="#C4922A" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  title: 'Location', value: 'Bundibugyo District, Uganda', href: null,
                },
              ].map((item) => (
                <div key={item.title} className="card" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                    background: 'rgba(196,146,42,0.1)', border: '1px solid rgba(196,146,42,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#999', marginBottom: '0.375rem' }}>{item.title}</p>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: '0.9375rem', color: '#1A1A1A' }}>{item.value}</a>
                      : <p style={{ fontSize: '0.9375rem', color: '#1A1A1A' }}>{item.value}</p>
                    }
                  </div>
                </div>
              ))}

              <div style={{ background: '#6B1E2E', borderRadius: '1.25rem', padding: '2rem' }}>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Come visit us</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
                  Nestled in Bundibugyo District at the foot of the Rwenzori Mountains. We welcome visitors and cultural enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1.3fr 0.7fr !important; }
        }
      `}</style>
    </main>
  );
}
