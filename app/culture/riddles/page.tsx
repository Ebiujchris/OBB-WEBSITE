import Link from 'next/link';

const riddles = [
  { question: 'I have a neck but no head, and I wear a cap. What am I?', answer: 'A bottle', lang: 'Lubwisi' },
  { question: 'I run but have no legs, I have a mouth but never speak. What am I?', answer: 'A river', lang: 'Kwamba' },
  { question: 'The more you take, the more you leave behind. What am I?', answer: 'Footsteps', lang: 'Vonoma' },
  { question: 'I speak without a mouth and hear without ears. I have no body but I come alive with wind. What am I?', answer: 'An echo', lang: 'Lubwisi' },
  { question: 'I have cities, but no houses live there. I have mountains, but no trees grow there. What am I?', answer: 'A map', lang: 'Kwamba' },
];

const obbRiddles = [
  { q: 'Hu̱u̱ na hu̱u̱?', a: 'Ki̱bhi̱ kya mughumba' },
  { q: 'Kaajughila bu̱lengeeli̱ya?', a: 'Mu̱su̱li̱ ghwa musakaali̱' },
  { q: 'Kati̱ki̱na pete?', a: 'Mulogho haa kongo' },
  { q: 'Ondoli̱yeki nkwisa e waawe?', a: 'Mulyango' },
  { q: 'Ghaali masano?', a: 'Njoka kuniina etali na maghulu' },
  { q: 'Kini kikansweki̱ya?', a: 'Kutakila mu kanu̱wa mali̱gha ghabbudhukila mu maaso / nkoko njelu kubyala njilaghuli' },
  { q: 'Nguli ghabaagha mati̱mu̱ nguli ghaalatumali̱ye?', a: 'Mbu̱la' },
  { q: 'Nkabyala baana banje basatu omui ataliyo banji tabaliya?', a: 'Mahi̱gha' },
  { q: 'Nkabhasula nseku yanje eba neenaghenda?', a: 'Maasi' },
  { q: 'Nkabyala baana banje baghenda mbaatilana bukama?', a: 'Maghulu' },
  { q: 'Mukama akengenga na bitabo biye?', a: 'Kisumba' },
  { q: 'Kiswigha weetekemi̱ye?', a: 'Kibelo kya mwanjoko' },
  { q: 'Mu̱twesi̱ye mugholi tumusunange?', a: 'Buhunga' },
  { q: 'Ohi̱li̱ngi̱te nkukusange eghi?', a: 'Ntole haa mumelo' },
  { q: 'Telebu-telebu?', a: 'Ki̱i̱li̱bhata haa butelelo' },
  { q: 'Kpekpelekpenju̱?', a: 'Kaakpetu̱ haa kighogho' },
  { q: 'O\'bhi̱i̱te?', a: 'Ki̱i̱hohooli̱ haa njoghu̱' },
  { q: 'Nkakweli̱ya numba yanje mpaghi emui?', a: 'Ki̱tu̱li̱' },
  { q: 'Nkakwela numba yanje yaaba na mulyango ghumui?', a: 'Mubhungu' },
  { q: 'Nkaata nyama naasanga maku̱wa haagu̱u̱li̱?', a: 'Kikaka / ehuli / kongo / kamambo' },
  { q: 'Nkaata nyama yanje ngiliya neenaghenda?', a: 'Kiniki' },
  { q: 'Ndi na numba yanje tayeehighala?', a: 'Muhuli' },
  { q: 'Kati dhi̱li̱ kati paca?', a: 'Ntoli̱ maasi' },
  { q: 'Pala-pala muhandi̱i̱ki̱?', a: 'Wangusobola kuhandiika hagu̱u̱li̱ ya maasi' },
  { q: 'Nkaata nyama naaghi̱boohi̱ya mala ghaayo?', a: 'Bu̱solu̱' },
  { q: 'Nkabyala baana banje babili ninaakolobha omui boona baatakila hamui?', a: 'Maaso' },
  { q: 'Ndi na kigita kyanje takihuwamu?', a: 'Muhuli ghwa mbuwa' },
  { q: 'Nkabhasula nseku yanje ntaamanya eki yaati̱ye?', a: 'Kuha mukali̱ etundu' },
  { q: 'Nkakwela numba yanje ya maadi̱li̱sa ghonkaha?', a: 'Kisoolo kedha kiisuwa-suwa' },
  { q: 'Ndi na bitalo byanje bibili mbuluwa eki ndiil\'o?', a: 'Nsi na eghulu' },
  { q: 'Ndi na mwana wanje neetanuka nsi yoona emu̱u̱ghu̱wa?', a: 'Nkubha' },
  { q: 'Mba nimpenda mighogho?', a: 'Kansu̱ndi̱ haa kansungu-sungu' },
  { q: 'Bajungu basitami̱ye haa ntebe emui?', a: 'Makali̱ / mabeele' },
  { q: 'Kakonje mugbagha?', a: 'Bubalu̱ bwa mbuwa' },
  { q: 'Oghende e kaanu̱ma okusanga bajungu mbabi̱na?', a: 'Nkuto mu kyalooni̱' },
  { q: 'Otuwe hanja obilikile mabhengu abu̱ghe?', a: 'Kweli̱ mu bitooka-tooke' },
  { q: 'Mukama w\'eka alindiliiye nte siye?', a: 'Kisali̱li̱yo mu bitooke' },
  { q: 'Pili-pili kaliya etaka?', a: 'Kansunsu kaa muholo' },
  { q: 'Mamba andeli̱ye?', a: 'Bulili, ntebe' },
  { q: 'Mbumbutata mbu̱ghi̱la eghulu?', a: 'Ngoma' },
  { q: 'Mamba akanti̱ghi̱la mwegi̱mo ghwanje?', a: 'Mukono' },
  { q: 'Mamba akanti̱ghi̱la munagha taghukaatikagha?', a: 'Etundu' },
  { q: 'Maaha taahwana kulila?', a: 'Maasi mu kighona' },
  { q: 'Oghende e kaanu̱ma okusanga beesiki baleegi̱ye? paamu?', a: 'Njwenge sya mukusa' },
  { q: 'Oghambile baana baawe baleke kunaabila haa kyambu kyanje?', a: 'Bi̱i̱hohooli̱' },
  { q: 'Nkaghenda e bukuwe banteekela nkoko naasomamu muto ghwonkaha?', a: 'Kikaka' },
  { q: 'Nkaghula tadhooba yanje ekubhaki̱li̱yagha nsi yoona?', a: 'Kweli̱' },
  { q: 'Heei̱ya mwana heei̱ya?', a: 'Bantu mu katale' },
  { q: 'Nkabyala mwana wanje ali na mahuwa-huwa?', a: 'Ki̱fenensi̱ / kitaafiile' },
  { q: 'Nkoko yanje ekalaalila haa mahuwa egu̱u̱li̱?', a: 'Nanansi' },
  { q: 'Nkabyala baana banje banamasusaane?', a: 'Nkwali' },
  { q: 'E waatu aseli̱ye?', a: 'Eku̱li̱mu̱' },
  { q: 'Mbogho mulangbala?', a: 'Kaghona katalimu maasi' },
  { q: 'Nkeehi̱ghi̱la mukuwe atali wanje?', a: 'Matoka' },
  { q: 'Ooyemu mbu̱li̱ syawe otighoho nkingi?', a: 'Biikono-kono bya mukusa / mucele' },
  { q: 'Kaadungbeela?', a: 'Kahu̱lo kaa nanja' },
  { q: 'Nkatema kisaka kyanje kyalu̱ghamu ki̱ghu̱mba kimui?', a: 'Esoke' },
  { q: 'Kyahi̱ya eghi-neeghi kyati̱gha namunengi̱ya haagati?', a: 'Ebaale munkala' },
  { q: 'Okpeete bukinkini onti̱ghe bukinkini?', a: 'Wangumaaniilila kinyobuwa kya busaasa' },
  { q: 'Taata na mamba bakpakaane?', a: 'Kaaghali̱yo kaa lwighi' },
  { q: 'Nkajiika mamba anakaaye?', a: 'Byalaagha' },
  { q: 'Nkajiika esenga aasa ankweme?', a: 'Ki̱bu̱ kyomu mahigha' },
  { q: 'Nkabyala mwana wanje aabuluwa esoke?', a: 'Ehuli' },
  { q: 'Ondoli̱ye ki nkukamuuye?', a: 'Bulaala bw\'ekyambu / bumiyo' },
  { q: 'Nguli nabaagha muhoole nguli nalabahooye?', a: 'Kyaloni' },
  { q: 'Kpu̱ngbu̱lu̱-kpu̱ngbu̱lu̱?', a: 'Mbeba mukimugha' },
  { q: 'Kpu̱ngbu̱lu̱ malyasi̱?', a: 'Mbeba haa saani' },
];

export default function Riddles() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Riddles</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Mind & play</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Riddles</h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '500px' }}>
            Traditional puzzles that challenge the mind and entertain communities across all ages.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {riddles.map((r, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }}>❓</span>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: '#242424', lineHeight: 1.65 }}>{r.question}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '2.25rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#C99A2E', fontWeight: 600 }}>Answer: {r.answer}</span>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', borderRadius: '9999px', background: 'rgba(107,30,46,0.08)', color: '#6B1E2E', border: '1px solid rgba(107,30,46,0.15)' }}>{r.lang}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Obudhingiya Traditional Riddles */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Obudhingiya Riddles · Lubwisi</div>
            <h2 className="heading-serif" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>Bhikolokombania</h2>
            <p style={{ fontSize: '0.875rem', color: '#999', marginBottom: '1.5rem' }}>Source: Rev. Can. Timothy Bandirana — Caller: "Kolo, Kolo Dhiyo" · Response: Answer</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {obbRiddles.map((r, i) => (
                <div key={i} style={{ background: '#F8F3E7', borderRadius: '0.75rem', padding: '1rem 1.25rem' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#242424', marginBottom: '0.375rem' }}>{r.q}</p>
                  <p style={{ fontSize: '0.8125rem', color: '#6B1E2E', fontWeight: 500 }}>→ {r.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
