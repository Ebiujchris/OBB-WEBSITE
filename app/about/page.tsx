'use client';
import Link from 'next/link';
import { useState } from 'react';

const ministries = [
  'Culture and Social Mobilization','Royal Protocol','Royal Infrastructure and Transport',
  'Lands and Other Natural Resources','Agriculture','Health','Education',
  'Gender and Social Development','Youth and Sports','Special Interest Groups',
  'Information, Research and Documentation','Finance','Planning and Economic Development',
  'Security and Internal Affairs','Trade and Industrial Cooperation',
  'Constitutional Affairs / Attorney General','External Relations',
  'Special Duties in the Office of the Katikilo','General Duties in the Office of Omudhingiya',
];

const aims = [
  'Establish and maintain an institutional framework for the cultural leadership of Obudhingiya Bwa Bwamba.',
  'Initiate, stimulate, support and maintain cultural and social unity among the ethnic communities (Banabudhingiya).',
  'Preserve, foster and enrich Obudhingiya cultural heritage, and discard those inconsistent with morality.',
  'Protect and promote traditional cultural sites, institutions and related identities.',
  'Advise and settle all disputes of cultural nature in respect of land, marriage, tradition and custom.',
  'Initiate, encourage and promote economic and social development in Obudhingiya.',
  'Support educational programmes, projects, institutions and related activities.',
  'Initiate, foster and maintain primary and rural health care programmes.',
  'Promote the provision of clean water and rural sanitation in Obudhingiya.',
  'Promote co-operation with the Government of Uganda and international organisations.',
  'Foster and promote peaceful co-existence with neighbouring communities and tribes.',
  'Provide a forum for exchange of views on unity and social and economic development.',
  'Sensitize and motivate the people to participate in self-help and self-reliance projects.',
  'Raise and administer finances necessary for carrying out any of these objectives.',
];

export default function About() {
  const [showHistory, setShowHistory] = useState(false);
  const [showColonial, setShowColonial] = useState(false);
  const [showAllAims, setShowAllAims] = useState(false);

  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>About us</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Obudhingiya Bwa Bwamba
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '560px' }}>
            Uniting the Bamba, Babwisi and Vanuma people through culture, language and community-led heritage preservation.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Core values */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {['Equality', 'Equity', 'Respect', 'Courtesy', 'Oneness', 'Transparency'].map((v) => (
              <span key={v} style={{ padding: '0.45rem 1.1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 600, background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{v}</span>
            ))}
          </div>

          {/* Historical Background — collapsible */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>About Obudhingiya Bwa Bwamba</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Historical Background</h2>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1rem' }}>
              The cultural heritage of Bwamba includes artistic and cultural expressions — language and literary arts, performing arts, visual arts and handicrafts, indigenous knowledge, cultural beliefs, traditions and values, cultural sites, monuments and antiquities.
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: showHistory ? '1rem' : '1.5rem' }}>
              Obudhingiya Bwa Bwamba cultural institution is comprised of three major ethnic communities: <strong>Bamba</strong>, <strong>Vanoma</strong> and <strong>Babwiisi</strong>. The Babwiisi are Bantu speaking people like the Banyoro, Batooro, Bakonzo, and Baganda. The Bamba and Vanoma are more or less Nilotic speaking people.
            </p>

            {showHistory && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  'The Bamba, Vanoma and Babwisi have lived together since time immemorial in the land comprised of western slopes of Mount Ruwenzori and Semuliki valley in the present-day Bundibugyo District in Uganda, extending to Beni District in the Democratic Republic of Congo. They are believed to have migrated to this area during the time of mass movement of people between the 12th–16th century.',
                  'The Bamba, Vanoma and Babwiisi intermarried and have since nearly diffused. They have a strong blood relationship largely inseparable in culture and livelihoods. They live in social groups of extended families, tied together by blood, kinship, marriage, consanguinity, propinquity, and surname identification.',
                  'Currently they are mostly agriculturalists and business people although some were traditionally hunters and collectors. They all practice and profess male circumcision. A group of families form a ridge (Kitubbi). A given number of ridges form a sub clan while a set of sub clans form a clan.',
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>{para}</p>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowHistory(!showHistory)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600, color: '#6B1E2E', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}
            >
              {showHistory ? 'Show less ↑' : 'Read more →'}
            </button>
          </div>

          {/* Colonial History — collapsible */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>History of Bwamba</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Colonial Era & The Rwenzururu Movement</h2>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: '1rem' }}>
              In the 1890's, the European colonialists divided the indigenous people into two: the western side fell under Belgian colonialists where the Babwiisi were referred to as Batalinga and the Bamba called Bhahumu. The eastern side fell under the British Protectorate where the people were annexed to Tooro Kingdom and the area named Bwamba County.
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85, marginBottom: showColonial ? '1rem' : '1.5rem' }}>
              The social, political and economic repression and marginalisation by Tooro Kingdom prompted the Bamba, Babwiisi and Bakonzo to present a petition demanding equality in 1954, eventually leading to the historic walk out from the Toro Rukurato on 13th March 1962.
            </p>

            {showColonial && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  'On 13th April 1962, three leaders of the walk out — Mr. Kawamara Yeremiya, Mr. Mukirani Isaaya, and Mr. Mupaliya K Peter — were arrested and convicted. The Rwenzururu Movement was formed to unite the Bamba-Babwiisi and Bakonzo people to address the massive abuse of human rights and struggle for autonomy.',
                  'This struggle continued until 1974 when the Districts of Kasese (Rwenzori) and Bundibugyo (Semuliki) were created. On 26th December 2002, the anti-Obusinga Bwa Rwenzururu group was formed, later translating into BBEDA (Bamba–Babwiisi Elders Development Association) under Mr. Fulgensio Bamwiterebye, to protect and preserve Bamba-Babwiisi cultural identity.',
                  'The continued need to independently develop the culture of the people culminated in a two-day Traditional Leaders and Youth conference of close to 1,000 people at Bundibugyo Teachers College on 9th and 10th August 2012. This Conference unanimously resolved to establish Obudhingiya Bwa Bwamba, with Omudhingiya Martin Ayongi Kamya as the first cultural leader.',
                  'Obudhingiya Bwa Bwamba Cultural Institution is legally derived from the mandate of the people in accordance with Article 246 of the 1995 Constitution of the Republic of Uganda. The Bundibugyo District Council also passed a resolution for its establishment and recognition on 30th October 2012.',
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>{para}</p>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowColonial(!showColonial)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600, color: '#6B1E2E', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}
            >
              {showColonial ? 'Show less ↑' : 'Read more →'}
            </button>
          </div>

          {/* Founder member link cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <Link href="/about/bbeda-founders" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '2rem', borderTop: '3px solid #C99A2E', cursor: 'pointer' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏛️</div>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>BBEDA Founder Members</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Bamba–Babwiisi Elders Development Association — 43 founding members who laid the foundation for Obudhingiya Bwa Bwamba.
                </p>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#C99A2E' }}>View Members →</span>
              </div>
            </Link>
            <Link href="/about/rwenzururu-founders" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '2rem', borderTop: '3px solid #6B1E2E', cursor: 'pointer' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚔️</div>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>Rwenzururu Founder Members</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Rwenzururu Movement founder members in Bundibugyo — 58 individuals who stood for autonomy and self-determination.
                </p>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B1E2E' }}>View Members →</span>
              </div>
            </Link>
          </div>

          {/* Leadership Structure */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Leadership Structure</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Governance & Administration</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {[
                { title: 'Omudhingiya', image: '/omundhingiya%20image.jpeg', personName: 'Omudhingiya Martin Ayongi Kamya' },
                { title: 'Katikilo (Prime Minister)', image: '/prime-minister.jpg', personName: 'Rt. Hon. Charles Bukantwa' },
                { title: 'Kusei (Cultural Council)', image: '/kingdom%20logo.jpeg' },
                { title: "Council of Elders (Bakulu b'Entula)", image: '/Esimudhungiya%20Head%20of%20the%20Elders%20council.jpeg' },
                { title: 'Kusei Speaker', image: '/cabinet%20images/4.Rt.Hon.Maisaba%20Manzi%20Edmond.%20Kusei%20Speaker..jpg', personName: 'Rt. Hon. Maisaba Manzi Edmond' },
                { title: 'Attorney General', image: '/cabinet%20images/6.Oweng.Kisembo%20David%20Bakasima.%20Attoney%20General..jpg', personName: 'Oweng. Kisembo David Bakasima' },
              ].map((item) => (
                <div key={item.title} style={{ background: '#F8F3E7', borderRadius: '0.875rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.875rem', overflow: 'hidden' }}>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#242424', margin: 0 }}>{item.title}</h4>
                  <div style={{ width: '100%', maxWidth: '180px', height: '200px', background: '#fff', borderRadius: '0.75rem', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                    />
                  </div>
                  {item.personName && (
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1F4D3A', lineHeight: 1.5 }}>{item.personName}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ministries */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Executive Council</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Obudhingiya Ministries</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              The specific ministers are appointed by Omudhingiya and approved by Kusei, the Cultural Council.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {ministries.map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#F8F3E7', borderRadius: '0.625rem', padding: '0.875rem 1rem', fontSize: '0.875rem', color: '#333' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: i % 3 === 0 ? '#D8232A' : i % 3 === 1 ? '#C99A2E' : '#1F4D3A', flexShrink: 0 }} />
                  Ministry of {m}
                </div>
              ))}
            </div>
          </div>

          {/* Aims & Objectives — collapsible */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Mission & Vision</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Aims & Objectives</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Under Chapter Two of the Constitution of Obudhingiya Bwa Bwamba, the institution is established to pursue the following aims and objectives:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {(showAllAims ? aims : aims.slice(0, 4)).map((aim, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', background: '#1F4D3A', color: '#fff', fontSize: '0.6875rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>{i + 1}</span>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.75 }}>{aim}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowAllAims(!showAllAims)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600, color: '#1F4D3A', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}
            >
              {showAllAims ? `Show less ↑` : `Show all ${aims.length} objectives →`}
            </button>
          </div>

          {/* CTA */}
          <div style={{ background: '#111', borderRadius: '1.25rem', padding: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(216,35,42,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <h2 className="heading-serif" style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', position: 'relative' }}>Be Part of Our Story</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '500px', marginInline: 'auto', marginBottom: '2rem', position: 'relative' }}>
              Obudhingiya Bwa Bwamba is built on the strength of its people. Connect with us to learn more, share your heritage, or get involved.
            </p>
            <Link href="/contact" className="btn btn-gold" style={{ position: 'relative' }}>Get in Touch</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
