import Link from 'next/link';

const stories = [
  { title: 'The Elephant and the Tortoise',   lang: 'Lubwisi',  excerpt: 'A tale of wisdom over strength, showing how patience and cleverness can overcome any obstacle.' },
  { title: 'Why the River Sings',              lang: 'Kwamba',   excerpt: 'The story of how the Semuliki River received its voice and became a guardian of the valley.' },
  { title: 'The First Fire',                   lang: 'Vonoma',   excerpt: 'How the Vanuma people discovered fire and the responsibilities that came with that gift.' },
  { title: 'The Clever Hare',                  lang: 'Lubwisi',  excerpt: 'A classic tale of wit and resourcefulness that has been told to children for generations.' },
  { title: 'The Mountain and the Valley',      lang: 'Kwamba',   excerpt: 'An origin story explaining the relationship between the Rwenzori Mountains and the Semuliki Valley.' },
  { title: 'The Generous Chief',               lang: 'Vonoma',   excerpt: 'A story about a chief whose generosity united three warring clans into a single peaceful community.' },
];

const obbStories = [
  { title: "Badu̱bha Obu̱u̱li̱ya", author: "Mubulya Wilson", text: "Haanu̱ma ya myaka joo Kongo emali̱ye kutunga kwelema, mu kyalo kya Katuwa e Bhutembo bakatunga mughenu̱ mujungu mu miisonale. Mujungu oghu akaba alu̱ghi̱ye Bungeleeja ali na myaka 79 ya bukulu. Mali̱i̱na ghe aaniiye Charles Rollings.\n\nMbyaluwa sya mukyalo eki syabu̱ghagha Lunande/Lukonjo. Bamui mu bo bakaba bamani̱ye Kiswahi̱li̱ na basomi̱ye bamani̱ye Lufulansa. Na Rollings aabu̱ghagha lujungu lwonkaha. Bantu abaabbalagha ku̱bu̱gha naye baasaalilagha mwa mwegheesi̱ya wa lujungu mu si̱ni̱ya eghi ekaba eli haai nabo." },
  { title: "Bu̱ku̱u̱bbi̱ ni Kujaabhuwa", author: "Anonymous", text: "Si̱ye maaha akanti̱gha ndi na myaka enaa ya bukulu. Nankabha tita naabaagha na bakali̱ banji. Taaliyo n'omui oghu akaneekundila nga mwana wee. Bwile bunamu̱nji̱ tita taakalagha e ka. Akaba ali na mulimo mu gavumente..." },
  { title: "Ngughuma Sikusasulagha", author: "Mwesige Robbin", text: "Hakaba aliyo basaasa babili, omui aaniiye Bu̱dhooti̱bwabo nonji aaniiye Bukalali̱ya. Bombi bakaba bali bateghi̱. Bukalali̱ya na Bu̱dhooti̱bwabo baaghenda mu kisaka kutegha..." },
  { title: "Njala Ekulehi̱yagha Bintu", author: "Sunday K. Ezra", text: "Akaba aliyo musaasa li̱i̱na aniiye Kyetunda. Akaba ali na mukali̱ wee omui na baana be basatu. Njala yaaghuwa mu kyalo kyona. Muntu noobu abaagha na sente haa kughulila byokuliya hakaba atali..." },
  { title: "Bugheji Takuli Kuneeta", author: "Baguma Godfrey", text: "Obu kyanda kyahingulaane, bihamba na maasi ghoona ghooma mukyalo. Binyama byona bya mu kisaka byagumbaana niikuwo byelimile ki̱i̱na bikole nsulo..." },
  { title: "Lugheji-gheji Lu̱kwi̱ti̱i̱si̱yagha", author: "Mubulya Wilson", text: "Wakaamambo aakelelagha mu mu̱mi̱li̱ ya ki̱tu̱lu̱ kuliya buhuka. Kaamabo waawe akaba ali mu mi̱li̱ ya kiti na bi̱i̱bbi̱mbo bili eghulu mu matai kuliya bi̱ghuma..." },
  { title: "Bu̱u̱bhootu̱ Bwa Bu̱ghobi̱ya", author: "Mubulya Wilson", text: "Kigbende na njoka bakaba bali bana bu̱u̱bhootu̱. Boona baakilagha kusanga-sangaana mu kihanda. Kilo kimui beeli̱li̱kana ku̱ki̱dhi̱lana mu maka..." },
  { title: "Bwesighibuwa Bwa Maaja-Maaja", author: "Mubulya A. Wilson", text: "Musaasa akaba ali na mukali̱ wee oghu ataadheedhuwagha na eba wee. Bu̱li̱ kilo mukali̱ aakalagha naatongani̱ya eba wee oghu..." },
  { title: "Bu̱u̱bhootu̱ Bwa Mutani̱i̱na", author: "Biira Mary", text: "Kandi̱byaladhi̱nku̱we na kigbende bakaba bali bana buubhootu̱. Kilo kimui kigbende aaghila bhootu̱ wee ati baghende balole mamba wee baadu̱bhagha kubhasuka maasi..." },
  { title: "Ekikulekagha Baana Nkelembe Bataatula Bwangu", author: "Mubulya Wilson", text: "Hambele baana nkelembe baabu̱ghagha aaniibuwo babyahuwe. Mbaabbala kwonka babu̱gha bati njala ebakwete..." },
  { title: "Ekyaleki̱ye Bisolo Byaleka Ku̱bu̱gha", author: "Biira Mary", text: "Hakaba aliyo musaasa ali na mukali̱ wee. Bakaba batabyaye kyonkaha bali haa ka basatu. Waakasatu akaba ali mukuwe wee ki̱byala mukali̱ wee..." },
  { title: "Ngoku Wakame Aasweye Mukali̱ Wa Basatu", author: "Kyakimwa Christine", text: "Mu kyalo kya Weehiilemu akaba alimu manaabukali̱ oghu beehitilagha kubbala kuswela. Wakame, Wanjoka na Wantale bakaba bali bana bu̱u̱bhootu̱..." },
  { title: "Kalimagheji Naasi̱nga Mugyano", author: "Mubulya Wilson", text: "Wakamambo akaba ali bhootu̱ sya Wansele hamui na Wanjoghu̱. Wakamambo waawe aaghenda aaghambila Wanjoghu ati akusobola ku̱mu̱singa mu bubhula mughuwo..." },
  { title: "Buteesighangana", author: "Mugisa Salapias", text: "Hakaba aliyo Wantale ali na mukali̱ wee baakaaye mu ki̱bhi̱li̱ bonkaha. Wantale aatandika kukwela numba mu elungu haagati..." },
  { title: "Magheji Ghasaiye Maani", author: "Nkabandinabo Amosi", text: "Kilo kimui Wakame akaamuka aaghenda ewa Wa Wankoko. Wakame aghila nkonko ati oneholiye silingi bitaano..." },
  { title: "Lughanda Lusaiye Bubhootu", author: "Nkabandinabo Amosi", text: "Akaba aliyo musaasa omui liina liye bakatwelinga, aabhotanuwa na bhootu siye liina liye okakyeeha..." },
  { title: "Ekyalekiye Mbuwa Syaleka Kukoonela Bantu", author: "Rev. Timothy Bandirana", text: "Ambele na mbele mbuwa syakoonelagha bantu. Kilo kimui mulyanyama aaghenda kuhiigha, aatila kimui nyama sikani̱ye..." },
  { title: "Mamano Ghagoliye Taghamana Kukuwa", author: "Kabaghenu Annet", text: "Akaba aliyo musaasa omui, li̱i̱na liye ntaaghuwa ali na bakalibe babili, omui bamughilamu kighonge nonji mbamughilamu kinobole..." },
  { title: "Mighaso Ya Baana Baa Bukali", author: "Katusiime Julius Richard", text: "Akaba aliyo musaasa aswela bakali be babili, bakali bani batandika kubyala baana baabo..." },
  { title: "Mukali̱ Taaghila Bwesi̱ghi̱bu̱wa", author: "Rev. Timothy Bandirana", text: "Kilo kimui bakahuwa, akaghambila kabundiira ati mana-maaha mukali̱ taaghila bwesi̱ghi̱bu̱wa bbaa..." },
  { title: "Butaaghuwa Bukwi̱ti̱si̱yagha", author: "Rev. Timothy Bandirana", text: "Mbambali ekakola bubhootu bwayo na nkeme, buli kilo mbamabali yasagha kulola nkeme nambali ali..." },
  { title: "Wankunga na Bhootanuwa na Kiikakala", author: "Balyebulya B. Peter", text: "Wankunga mu biti bwile buwe bwona. Kilo kimui, wankunga aghambila kiikakala ati wai siye nkubhootwana naawe..." },
  { title: "Musaasa Tandikuwa", author: "Batalingaya Andrew", text: "Akaba aliyo musaasa liina liye tandikuwa, akaba ali na myepanko mu maaso gha luhanga. Musaasa oghu eghilagha ati eye taliku̱wa..." },
  { title: "Busuma Nkalimu", author: "Scola Baguma", text: "Akaba aliyo musaasa omui mu kitwike kya nyangasa, liina liye kyaala. Akaba ali na muhala we liina liye mangadha..." },
  { title: "Busuma Bukwi̱ti̱si̱yagha", author: "Bakawelayo Jeremiah", text: "Mumu bhili ghwa bundigele, akaba aliyo musaasa liina liye kibhi kyaabo, musaasa oghu akaba ali nabakali be musanju, babyaye baana ki̱ku̱mi̱..." },
];

export default function FolkStories() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Folk Stories</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Oral tradition</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Folk Stories
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Traditional narratives passed down through generations, teaching values, history and the meaning of community.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {stories.map((story) => (
              <div key={story.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>
                    {story.lang}
                  </span>
                </div>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#242424', marginBottom: '0.75rem', lineHeight: 1.3 }}>{story.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.75 }}>{story.excerpt}</p>
              </div>
            ))}
          </div>

          {/* Obudhingiya Folk Stories in Lubwisi */}
          <div className="card" style={{ padding: '2.5rem', marginBottom: '1.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Obudhingiya Folk Stories · Lubwisi</div>
            <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '1.5rem' }}>Stories in Lubwisi</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {obbStories.map((s, i) => (
                <div key={i} style={{ borderLeft: '3px solid #C99A2E', paddingLeft: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <h3 className="heading-serif" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#242424' }}>{s.title}</h3>
                    <span style={{ fontSize: '0.75rem', color: '#666' }}>— {s.author}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.9, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{s.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Baker Samuel contribution */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Cultural Contributor</div>
            <h2 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '1rem' }}>Owenguko Baker Samuel Bamwendere</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {[
                { label: 'Clan', value: 'Mubandi – Mpindu Sub-clan: Bandimagwara-Nkubu' },
                { label: 'Position', value: 'Minister of Culture, OBB' },
                { label: 'Sub County', value: 'Ntotoro, Parish: Nyasoro' },
                { label: 'Contact', value: '0772645477 / 0706319134' },
              ].map((item) => (
                <div key={item.label} style={{ background: '#F8F3E7', borderRadius: '0.625rem', padding: '0.875rem' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#999', marginBottom: '0.25rem' }}>{item.label}</p>
                  <p style={{ fontSize: '0.875rem', color: '#333' }}>{item.value}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#242424', marginBottom: '0.75rem' }}>Contributions to Bwamba Cultural Identity:</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Founder of Bandimagwara Cultural Group — performed in Tanzania-Bagamoyo (M.D.D Lubwisi-luma, 2006)',
                'Popularized Bwamba culture (Luma dance) across Uganda: Fort Portal, Kasese, Kibale, National Theatre, Ndere Centre, Jinja, Masindi, Hoima and more',
                'Facilitator — Ntula Drama Group trip to Tanzania-Bagamoyo for cultural dance (muledhu), 2001',
                'Founder member of BBEDA, contributing to the establishment of Obudhingiya Bwa Bwamba',
                'Signed the OBB constitution on behalf of Babandi clan',
                'Part of elders team to State House Entebbe to meet President Museveni for official recognition of OBB',
                'Started Bandimagwara Cultural Museum in Bundibugyo Town Council, Katanga village',
                'Presenter of cultural education on Radio UBC — Voice of Bundibugyo',
                'Acted as detective (mbegga) for the armed wing of Rwenzururu struggle at age 11',
                'Led cultural rituals during the installation of Omudhingiya Martin Ayongi Kamya, 28th May 2014',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: '#555', lineHeight: 1.65 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C99A2E', flexShrink: 0, marginTop: '0.45rem' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
