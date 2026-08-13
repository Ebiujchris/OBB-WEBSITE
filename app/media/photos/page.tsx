import Image from 'next/image';
import Link from 'next/link';

const BASE = 'https://res.cloudinary.com/a9kf2wue/image/upload/v1786659106';

const cabinetMembers = [
  { src: `${BASE}/1.Rt.Hon.Charles_Bukantwa._Prime_Minister..jpg`, name: 'Rt. Hon. Charles Bukantwa', title: 'Prime Minister' },
  { src: `${BASE}/2.Rt.Hon._Hassan_Kihanda.1st_Deputy_Prime_Minister..jpg`, name: 'Rt. Hon. Hassan Kihanda', title: '1st Deputy Prime Minister' },
  { src: `${BASE}/3.Rt.Hon._Ivan_Mutebi.2nd_Deputy_Prime_Minister..jpg`, name: 'Rt. Hon. Ivan Mutebi', title: '2nd Deputy Prime Minister' },
  { src: `${BASE}/4.Rt.Hon.Maisaba_Manzi_Edmond._Kusei_Speaker..jpg`, name: 'Rt. Hon. Maisaba Manzi Edmond', title: 'Kusei Speaker' },
  { src: `${BASE}/5.Rt.Hon._Kamu_Jim_Sumbabhuliki._Deputy_Kusei_Speaker..jpg`, name: 'Rt. Hon. Kamu Jim Sumbabhuliki', title: 'Deputy Kusei Speaker' },
  { src: `${BASE}/6.Oweng.Kisembo_David_Bakasima._Attoney_General..jpg`, name: 'Oweng. Kisembo David Bakasima', title: 'Attorney General' },
  { src: `${BASE}/7.Oweng.Rev.Kyomuhendo_Geoffrey._Spokesperson..jpg`, name: 'Oweng. Rev. Kyomuhendo Geoffrey', title: 'Spokesperson' },
  { src: `${BASE}/8.Oweng.Musinguzi_John._Minister_of_Trade_Industries_and_Cooperatives..jpg`, name: 'Oweng. Musinguzi John', title: 'Minister of Trade, Industries and Cooperatives' },
  { src: `${BASE}/9.Oweng._Chief_Prince_Agaba_Charles._Minister_for_Royal_Protocal_and_Welfare.jpg`, name: 'Oweng. Chief Prince Agaba Charles', title: 'Minister for Royal Protocol and Welfare' },
  { src: `${BASE}/10.Oweng.Baguma_Godfrey._Minister_for_General_Duties_in_the_Office_of_Omudhingiya..jpg`, name: 'Oweng. Baguma Godfrey', title: 'Minister for General Duties in the Office of Omudhingiya' },
  { src: `${BASE}/11.Oweng.Baguma_Peter._Minister_for_Defence..jpg`, name: 'Oweng. Baguma Peter', title: 'Minister for Defence' },
  { src: `${BASE}/12.Oweng.Sunday_Milton._Minister_for_Security..jpg`, name: 'Oweng. Sunday Milton', title: 'Minister for Security' },
  { src: `${BASE}/13.Oweng._Mugenyi_Eliphaz._Minister_for_Internal_Relations..jpg`, name: 'Oweng. Mugenyi Eliphaz', title: 'Minister for Internal Relations' },
  { src: `${BASE}/14.Oweng.Dr._James_Maisaba._Minister_for_Health..jpg`, name: 'Oweng. Dr. James Maisaba', title: 'Minister for Health' },
  { src: `${BASE}/15.Oweng._Baguma_Anthony._Minister_for_Education..jpg`, name: 'Oweng. Baguma Anthony', title: 'Minister for Education' },
  { src: `${BASE}/16.Oweng.Tibesigwa_John._Minister_for_Youth_Mpaghi_Games_and_Sports..jpg`, name: 'Oweng. Tibesigwa John', title: 'Minister for Youth (Mpaghi), Games and Sports' },
  { src: `${BASE}/17.Oweng.Mudhele_Salim._Minister_for_and_Community_Mobilization..jpg`, name: 'Oweng. Mudhele Salim', title: 'Minister for Culture and Community Mobilization' },
  { src: `${BASE}/18.Oweng._Night_Oliver_Kacuro._Minister_for_Gender_Labour_and_Social_Development..jpg`, name: 'Oweng. Night Oliver Kacuro', title: 'Minister for Gender, Labour and Social Development' },
  { src: `${BASE}/19.Oweng._Balinkunda_Silver._Minister_for_Lands_Environment_and_other_Natural_Resources..jpg`, name: 'Oweng. Balinkunda Silver', title: 'Minister for Lands, Environment and other Natural Resources' },
  { src: `${BASE}/20.Oweng.Balikamanya_Zaa_Francis._Minister_for_Transport_and_Royal_Infrastructure..jpg`, name: 'Oweng. Balikamanya Zaa Francis', title: 'Minister for Transport and Royal Infrastructure' },
  { src: `${BASE}/21.Oweng.Kamanda_Cos._Batalingiya._Minister_for_for_External_Relations..jpg`, name: 'Oweng. Kamanda Cos. Batalingiya', title: 'Minister for External Relations' },
  { src: `${BASE}/22.Oweng.Bamuturaki_Julius._Minister_for_ICT_Research_and_documentation..jpg`, name: 'Oweng. Bamuturaki Julius', title: 'Minister for ICT, Research and Documentation' },
  { src: `${BASE}/23.Oweng.Asaba_Mandela_Roberts._Minister_for_Tourism_and_Industrial_Relations..jpg`, name: 'Oweng. Asaba Mandela Roberts', title: 'Minister for Tourism and Industrial Relations' },
  { src: `${BASE}/24.Oweng.Hon.Alisemera_Jane_Babiha._Minister_for_Special_Duties_in_the_Office_of_Omudhingiya..jpg`, name: 'Oweng. Hon. Alisemera Jane Babiha', title: 'Minister for Special Duties in the Office of Omudhingiya' },
  { src: `${BASE}/25.Oweng.Mukwasobwe_Julius._Minister_for_Special_Interest_Groups..jpg`, name: 'Oweng. Mukwasobwe Julius', title: 'Minister for Special Interest Groups' },
  { src: `${BASE}/26.Oweng.Kamero_Elasto_Komungalo._Minister_without_Portfolio_in_The_Office_of_the_Prime_Minister..jpg`, name: 'Oweng. Kamero Elasto Komungalo', title: 'Minister without Portfolio in the Office of the Prime Minister' },
  { src: `${BASE}/27.Oweng._Kabagambe_Juan_Sam._Minister_Finance__Economic_Monitoring_and_Evaluation..jpg`, name: 'Oweng. Kabagambe Juan Sam', title: 'Minister for Finance, Economic Monitoring and Evaluation' },
  { src: `${BASE}/28.Oweng.Magezi_Expedito._Minister_for_Energy_and_Mineral_Development..jpg`, name: 'Oweng. Magezi Expedito', title: 'Minister for Energy and Mineral Development' },
  { src: `${BASE}/29.Oweng.Kakonge_Edward_Kifunga._Minister_for_Constitutional_Affairs_and_Deputy_Attornt_General..jpg`, name: 'Oweng. Kakonge Edward Kifunga', title: 'Minister for Constitutional Affairs and Deputy Attorney General' },
  { src: `${BASE}/30.Oweng.Tibirihuwa_Boniface._Minister_for_Agriculture_Fisheries_and_Annimal_Husbandry..jpg`, name: 'Oweng. Tibirihuwa Boniface', title: 'Minister for Agriculture, Fisheries and Animal Husbandry' },
  { src: `${BASE}/31.Oweng._Mutegeki_Tomson._Deputy_Minister_for_Gender_Labour_and_Social_Development.Incharge_Labour_and_Social_Development..jpg`, name: 'Oweng. Mutegeki Tomson', title: 'Deputy Minister for Gender, Labour and Social Development' },
  { src: `${BASE}/32.Oweng.Bakahwerayo_Lawrance._Deputy_Minister_for_Youth_Games_and_Sports__Incharge_Games_and_Sports..jpg`, name: 'Oweng. Bakahwerayo Lawrance', title: 'Deputy Minister for Youth, Games and Sports' },
  { src: `${BASE}/33.Oweng.Baguma_Yona.Deputy_Minster_for_Culture_and_Community_Mobilization__Incharge_Culture..jpg`, name: 'Oweng. Baguma Yona', title: 'Deputy Minister for Culture and Community Mobilization' },
  { src: `${BASE}/34.Oweng.Sengi_Semu_Gwamba._Deputy_MInister_for_Transport_and_Royal_Infrastructure__Inchaege_Royal_Infrastructure..jpg`, name: 'Oweng. Sengi Semu Gwamba', title: 'Deputy Minister for Transport and Royal Infrastructure' },
  { src: `${BASE}/35.Oweng.Mugisa_Bamaaga._Deputy_Minister_for_Tourism_and_Industrial_Relations_Incharge_Tourism..jpg`, name: 'Oweng. Mugisa Bamaaga', title: 'Deputy Minister for Tourism and Industrial Relations' },
  { src: `${BASE}/36.Oweng.Nsiyabo_Andrew._Deputy_Minister_for_Agriculture_Fisheries_and_Annimal_Husbandry_Incharge_Fisheries_and_Annimal_Husbandry..jpg`, name: 'Oweng. Nsiyabo Andrew', title: 'Deputy Minister for Agriculture, Fisheries and Animal Husbandry' },
  { src: `${BASE}/37.Oweng.Kunihira_Faith._Deputy_Minister_for_Finance_Incharge_Economic_Monitoring_and_Evaluation..jpg`, name: 'Oweng. Kunihira Faith', title: 'Deputy Minister for Finance' },
  { src: `${BASE}/38.Oweng._Kabonesa_Jeniffer._Deputy_Minister_for_Health__Incharge_Environmental_Health_Child_Health_Care_and_Marternal_Health..jpg`, name: 'Oweng. Kabonesa Jeniffer', title: 'Deputy Minister for Health' },
  { src: `${BASE}/39.Oweng.Annabaliya_Grace._Deputy_Minister_for_Trade_Industries_and_Cooperatives_Incharge_Cooperatives..jpg`, name: 'Oweng. Annabaliya Grace', title: 'Deputy Minister for Trade, Industries and Cooperatives' },
  { src: `${BASE}/40.Oweng.Kansiime_Conclodia._Deputy_Minister_for_Protocal_and_Welfare_incharge_Welfare..jpg`, name: 'Oweng. Kansiime Conclodia', title: 'Deputy Minister for Protocol and Welfare' },
  { src: `${BASE}/41.Oweng._Bahemuka_Edward_Balitwana._Administrator_in_the_Prime_Minister_s_Office..jpg`, name: 'Oweng. Bahemuka Edward Balitwana', title: "Administrator in the Prime Minister's Office" },
  { src: `${BASE}/42.Oweng.Byomuhangi_John._Finance_Officer..jpg`, name: 'Oweng. Byomuhangi John', title: 'Finance Officer' },
  { src: `${BASE}/43.Oweng._Mukidi._Accountant_General..jpg`, name: 'Oweng. Mukidi', title: 'Accountant General' },
  { src: `${BASE}/44.Oweng.Musinguzi_Godwin._ICT._Officer..jpg`, name: 'Oweng. Musinguzi Godwin', title: 'ICT Officer' },
  { src: `${BASE}/45.Oweng.Mugabi_Timothy._Traditional-Customary_Marriage_Registration_Officer..JPG`, name: 'Oweng. Mugabi Timothy', title: 'Traditional-Customary Marriage Registration Officer' },
  { src: `${BASE}/48.Oweng.Kakonge_Edaward_Kifunga..jpg`, name: 'Oweng. Kakonge Edward Kifunga', title: 'Cabinet Member' },
];

export default function PhotosPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Photos</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Cabinet Members
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Official portraits of the Bwamba Kingdom cabinet members and office holders.
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {cabinetMembers.map((member, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4' }}>
                  <Image
                    src={member.src}
                    alt={`${member.name} — ${member.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: '#242424', marginBottom: '0.25rem', lineHeight: 1.4 }}>
                    {member.name}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.5 }}>
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
