import Link from 'next/link';

const names = [
  { name: 'Kamya',    meaning: 'Born during a time of hardship',           lang: 'Lubwisi', gender: 'M/F' },
  { name: 'Ayongi',   meaning: 'One who brings peace and understanding',   lang: 'Kwamba',  gender: 'M' },
  { name: 'Tibamanya', meaning: 'We do not all know everything',           lang: 'Lubwisi', gender: 'M/F' },
  { name: 'Nalwoga',  meaning: 'One who was born in a time of fear',       lang: 'Vonoma',  gender: 'F' },
  { name: 'Bwambale', meaning: 'Belonging to the Bwamba land',             lang: 'Lubwisi', gender: 'M' },
  { name: 'Musubaho', meaning: 'One who overcomes challenges',             lang: 'Kwamba',  gender: 'M' },
  { name: 'Kyomugisha', meaning: 'By God\'s grace',                        lang: 'Lubwisi', gender: 'M/F' },
  { name: 'Mbambu',   meaning: 'A gift brought at the right time',         lang: 'Vonoma',  gender: 'F' },
];

export default function Names() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Names</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Identity</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Traditional Names
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Names carry meaning, history and identity. Every Bwamba name tells a story about the moment of birth or the hopes of a family.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {names.map((n) => (
              <div key={n.name} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                  <h3 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424' }}>{n.name}</h3>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{n.lang}</span>
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>&ldquo;{n.meaning}&rdquo;</p>
                <p style={{ fontSize: '0.8125rem', color: '#999' }}>Gender: {n.gender}</p>
              </div>
            ))}
          </div>

          {/* Obudhingiya Traditional Names */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Traditional Names · Lubwisi (Babwisi)</div>
              <h2 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>Bakali — Names for Girls/Women</h2>
              <p style={{ fontSize: '0.8125rem', color: '#999', marginBottom: '1.25rem' }}>Compiled by: Rev. Can. Timothy Bandirana — Maliina ghaa Lubwisi</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.5rem' }}>
                {['Mbikaliiye','Beeswikila','Nanjala','Balindiya','Balinjikuta','Tabutoona','Babisobwabo','Bukampemula','Bakampimbila','Ndighwaki','Kilihoona','Etimalyabo','Babiik\'ebugha','Lukulwabo','Tabiita','Tabununka','Nkaukimba','Nkaghumela','Ghubiika','Bambuniyaki','Balikulilaha','Tabasiima','Bukansukuwa','Badheedheeuwe','Koomwawe','Buhemula','Balinguwo','Mughasoki','Beelogha','Kalibaatila','Agbekuwa (balongo)','Ambuusa','Tababwomba','Tabaghwata','Kubholiya','Babukwatiya','Bukeebwabo','Tabakuliliyaayo','Balikanjiyo','Nsonisyabo','Mbulisyabo','Balimbughiya','Mbuleleeye','Kaheelu','Butulibwabo','Nkabukwelela','Mbubyaliiye','Beeikaliya','Tuliikaliilaha','Butamanya','Bighuweki','Bukandwaliya','Byabo','Beebona','Tibaghitaliya','Kwedima','Nsonooki','Kaboneesa','Nakyabu','Byabanaghi','Baghende','Ndighenda','Bukambona','Bulogho','Byabali','Byabusa','Busabutama','Babyali','Libhwabho','Taabughaniya','Tibaliila onji','Beesemeliya','Baghwemaliya','Buswekiya','Ndisiimwani','Beeigha','Buswaliya','Bukanjeheelela','Buloliya','Ngulibiita','Kaabhalanja','Kanikki','Kabanjungu','Kabahindi','Bukanjoleka','Baghwejiba','Nakala','Nambaijo','Bujune','Nditumaani','Nansooliya','Nsunguwa','Nkabadheedha','Nkabasaasiya','Kwegheliya','Nkabwongela','Nkabanonela','Kaboolu','Mukaliki','Bhansunge','Wende','Balimpana','Ghaalimaka','Makaaghaabo','Kabhengu','Kalabiyo','Bulimpikiyaha','Etimalyabo','Babukwatiya','Batighiwa'].map((name, i) => (
                  <div key={i} style={{ background: '#F8F3E7', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.8125rem', color: '#333' }}>{name}</div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>Basaasa — Names for Boys/Men</h2>
              <p style={{ fontSize: '0.8125rem', color: '#999', marginBottom: '1.25rem' }}>Compiled by: Rev. Can. Timothy Bandirana — Maliina ghaa Lubwisi</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.5rem' }}>
                {['Komunjala','Babindubhila','Balinsangayo','Nyamayabo','Ngighuyabo','Kitalikyawe','Bamwitileebiye','Ndyejiika','Mujiiki','Balikamanya','Nkwilabusa','Ndyanabo','Nkabona','Bakahuwa','Kalikoona','Kawe-kawe','Mubughitaali','Mugami','Mubuuliya','Bakeecula','Bwankeela','Ntamuhiila','Nsekanabo','Bampalana','Nkabukeesiya','Ndikyemalila','Balijeluw','Balyogbuwa','Mbaanaani','Onjitaalogha','Bakatwelinga','Bakatuusuka','Bukantuwa','Tabamwenda','Basiima','Byamaka','Bahemuka','Bambaliilila','Balikighamba','Tabeenigha','Katuulamu','Sengi kato (balongo)','Butelukila','Banseka','Bakeetuwa','Balitwana','Weeitile','Bakankwaki','Beebhihiliya','Bakatwika','Ndibamaliisiya','Bandirana','Balikulungi','Bhacurana','Bhaajane','Muyaayi','Ndiiyaha','Tombo','Bundoloye','Balikulilaha','Kyesaagha','Ndabughilaha','Kyebungiya','Nkaghuluma','Bwisakilo','Bukanjoha','Bujune','Nkombi','Mukulumba','Nkabwisila','Tibaaghuwa','Bakankwaki','Nditumwani','Kituulo','Bulogho','Ndibajela','Nkabandinabo','Tabunsaala','Tandiswala','Tandisaaghayo','Tuughuwe','Bakaweelayo','Bampiigha','Mpiighuwa','Mulenguwa','Mbeighaana','Bundeketiye','Tambesigha','Kimbutu','Balikanjiyo','Bhanjale','Ngugha','Kikonko','Kighambi','Kabimbi','Kaakwanguwa','Kabhii','Bulimbe','Ngeleki','Ntanda','Katalikaawe','Kitakuliiyo','Kyebhimba','Weehuniye','Kitaami','Mudhingiya','Mbaanaani','Kamuntu','Tibengana','Tumwelinde','Weelinde','Weeghendiye','Mpweluwa','Nsiima','Mbungi','Ndiiyaha','Taaliwaawe','Balyesiima','Kyambiyo','Kihanda','Bakangambila','Kalunjiyamu','Kabhili','Nkubha','Asili','Ndighilantiya','Bunkwamiiye','Kyesangile','Ndyaanabo','Nkabatama','Bakatwika','Ntaaghuwa','Bukanjujuula','Namutakiya','Babimpeekiya','Babiisile','Bughani','Kasooli','Bampuwa','Bamukoka','Bamunaabiliya','Bukantangisiya','Bankotelana','Ntulanke','Bhanjale','Mujoloto','Teekwila','Kahusiko','Bakyeyalemu','Kyamboone','Kyaboona','Bakankwisiya','Mahanga','Mutoghwabo','Bidimaagiyo','Bakabundiila','Balyebuuliya','Mudhibiya','Malemo','Tabunguka','Bitighale'].map((name, i) => (
                  <div key={i} style={{ background: '#F8F3E7', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.8125rem', color: '#333' }}>{name}</div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: '2.5rem' }}>
              <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Traditional Spirits</div>
              <h2 className="heading-serif" style={{ fontSize: '1.375rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>Maliina Ghaa Mi̱li̱mu̱ ya Babwisi na Bamba</h2>
              <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.8, marginBottom: '1.25rem' }}>Traditional spirits for worship and consultation among the Babwisi and Bamba communities.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.5rem' }}>
                {['Baghwejiba','Nakala','Elungu','Namujuna','Luhanga','Mulyome','Ngoou̱we','Aluta','Ndyoka','Namujunga','Kamangana','Nambaijo','Kamalampaka','Kiloghoji','Namulimi','Bhitoto','Mukila','Katabaali','Wasana','Mankini','Mugheluula','Kengeina','Ndibanindola'].map((spirit, i) => (
                  <div key={i} style={{ background: '#F8F3E7', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.8125rem', color: '#333', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#C99A2E' }}>{String(i+1).padStart(2,'0')}</span>
                    {spirit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
