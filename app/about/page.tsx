import Link from 'next/link';

const bbedaFounders = [
  'Bamwitirebye Fulgensio','Kamuhanda N Tomasi','Sibugyo Gideon Katuramu','Suuza Acleo','Bakecura Coronelious',
  'Ngirisi Kosia','Kamero Elasto','Amon Seruboyo','Rukilo Andrea','Katongole James',
  'Betamirwe Nsunga Isaya','Nkayarwa Stephen Jibi','Muhindi Fobyano','Ndigyaha John','Baker Samuel',
  'Rukurato Syliver','Kyomuhendo Geoffrey','Smith Tibamwenda','Mutogwabo Yovani','Bugyo Sylvester',
  'Assa Wamala','Kisembo John','Kilumani Yokasi','Hannington Bahemuka','Ngonzi Philip',
  'Sibgyo Agnes','Kiloolo Leo','Tibemanya Jolly','Asingirwaho Christom','Nyamihanda Agnes',
  'Ahamed Balami','Idi Mulangila Mutaka','Kifunga V.Seith','Njenje Vicent','Ngeye Stephen',
  'Mpabati William','Mugenyi Eliphaz','Angella Kumbirwa','Mubulya Wilson','Batungikabo Hassan',
  'Mutwezi George William','Yofesi Wamala','Balami Tadeo',
];

const rwenzururuFounders = [
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

          {/* Core values strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {['Equality', 'Equity', 'Respect', 'Courtesy', 'Oneness', 'Transparency'].map((v) => (
              <span key={v} style={{ padding: '0.45rem 1.1rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 600, background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{v}</span>
            ))}
          </div>

          {/* Historical Background */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Historical Background</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>About Obudhingiya Bwa Bwamba</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'The cultural heritage of Bwamba includes artistic and cultural expressions — language and literary arts, performing arts, visual arts and handicrafts, indigenous knowledge, cultural beliefs, traditions and values, cultural sites, monuments and antiquities.',
                'Obudhingiya Bwa Bwamba cultural institution is comprised of three major ethnic communities: Bamba, Vanoma and Babwiisi. The Babwiisi are Bantu speaking people like the Banyoro, Batooro, Bakonzo, and Baganda. The Bamba and Vanoma are more or less Nilotic speaking people.',
                'The Bamba, Vanoma and Babwisi have lived together since time immemorial in the land comprised of western slopes of Mount Ruwenzori and Semuliki valley in the present-day Bundibugyo District in Uganda, extending to Beni District in the Democratic Republic of Congo. They are believed to have migrated to this area during the time of mass movement of people between the 12th–16th century.',
                'The Bamba, Vanoma and Babwiisi intermarried and have since nearly diffused. They have a strong blood relationship largely inseparable in culture and livelihoods. They live in social groups of extended families, tied together by blood, kinship, marriage, consanguinity, propinquity, and surname identification.',
                'Currently they are mostly agriculturalists and business people although some were traditionally hunters and collectors. They all practice and profess male circumcision. A group of families form a ridge (Kitubbi). A given number of ridges form a sub clan while a set of sub clans form a clan.',
              ].map((para, i) => (
                <p key={i} style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>{para}</p>
              ))}
            </div>
          </div>

          {/* Colonial History */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>History of Bwamba</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Colonial Era & The Rwenzururu Movement</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "In the 1890's, the European colonialists divided the indigenous people into two: the western side fell under Belgian colonialists where the Babwiisi were referred to as Batalinga and the Bamba called Bhahumu. The eastern side fell under the British Protectorate where the people were annexed to Tooro Kingdom and the area named Bwamba County.",
                'The social, political and economic repression and marginalisation by Tooro Kingdom prompted the Bamba, Babwiisi and Bakonzo to present a petition demanding equality in 1954. The irresponsiveness led to a historic walk out of the Bamba, Bakonzo, Basongora, Banyabindi and Batuku councillors from the Toro Rukurato (kingdom parliament) on 13th March 1962.',
                'On 13th April 1962, three leaders of the walk out — Mr. Kawamara Yeremiya, Mr. Mukirani Isaaya, and Mr. Mupaliya K Peter — were arrested and convicted. The Rwenzururu Movement was formed to unite the Bamba-Babwiisi and Bakonzo people to address the massive abuse of human rights and struggle for autonomy.',
                'This struggle continued until 1974 when the Districts of Kasese (Rwenzori) and Bundibugyo (Semuliki) were created. On 26th December 2002, the anti-Obusinga Bwa Rwenzururu group was formed, later translating into BBEDA (Bamba–Babwiisi Elders Development Association) under Mr. Fulgensio Bamwiterebye, to protect and preserve Bamba-Babwiisi cultural identity.',
                'The continued need to independently develop the culture of the people culminated in a two-day Traditional Leaders and Youth conference of close to 1,000 people at Bundibugyo Teachers College on 9th and 10th August 2012. This Conference unanimously resolved to establish Obudhingiya Bwa Bwamba, with Omudhingiya Martin Ayongi Kamya as the first cultural leader.',
                "Obudhingiya Bwa Bwamba Cultural Institution is legally derived from the mandate of the people in accordance with Article 246 of the 1995 Constitution of the Republic of Uganda. The Bundibugyo District Council also passed a resolution for its establishment and recognition on 30th October 2012.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>{para}</p>
              ))}
            </div>
          </div>

          {/* Founder members two columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* BBEDA */}
            <div className="card" style={{ padding: '2.25rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Founder Members</div>
              <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>BBEDA Founder Members</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {bbedaFounders.map((name, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.875rem', color: '#555' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C99A2E', minWidth: '1.5rem' }}>{String(i + 1).padStart(2, '0')}</span>
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* Rwenzururu */}
            <div className="card" style={{ padding: '2.25rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Founder Members</div>
              <h3 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Rwenzururu Founder Members in Bundibugyo</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {rwenzururuFounders.map((name, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.875rem', color: '#555' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B1E2E', minWidth: '1.5rem' }}>{String(i + 1).padStart(2, '0')}</span>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Structure */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Leadership Structure</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Governance & Administration</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {[
                { title: 'Omudhingiya', desc: 'Supreme head and fountain of honour. Takes precedence over all persons paying allegiance. Heard in silence.' },
                { title: 'Katikilo (Prime Minister)', desc: 'Head of Executive Council. Assists Omudhingiya in all duties and leads Obudhingiya business in Kusei. Must be a male Mwamba, Mubwisi or Muvanuma, aged 40–70, of unquestionable moral integrity.' },
                { title: 'Kusei (Cultural Council)', desc: 'The legislative and policy making body. Composed of 2 elected clan representatives per clan (male & female), Elders Council representatives, youth representatives, and 25 special nominees of Omudhingiya.' },
                { title: 'Council of Elders (Bakulu b\'Entula)', desc: 'Consists of clan leaders from all 25 clans. Headed by Esimudhingiya (Head of Clans). Deliberates on all matters pertaining to Obudhingiya and formulates guidelines on customs.' },
                { title: 'Kusei Speaker', desc: 'Presides over Cultural Council sittings. Elected from Members of Kusei on the first sitting. The position is rotational among the ethnic communities.' },
                { title: 'Attorney General', desc: 'Principal legal advisor of Obudhingiya. Must be an Advocate of the Courts of Judicature with at least 5 years experience. Handles agreements, contracts and legal representation.' },
              ].map((item) => (
                <div key={item.title} style={{ background: '#F8F3E7', borderRadius: '0.875rem', padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ministries */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Executive Council</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Obudhingiya Ministries</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              The specific ministers for these positions are appointed by Omudhingiya and approved by Kusei, the Cultural Council.
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

          {/* Aims & Objectives */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Mission & Vision</div>
            <h2 className="heading-serif" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Aims & Objectives</h2>
            <p style={{ fontSize: '0.9375rem', color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Under Chapter Two of the Constitution of Obudhingiya Bwa Bwamba, the institution is established to pursue the following aims and objectives:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {aims.map((aim, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', background: '#1F4D3A', color: '#fff', fontSize: '0.6875rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>{i + 1}</span>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.75 }}>{aim}</p>
                </div>
              ))}
            </div>
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
