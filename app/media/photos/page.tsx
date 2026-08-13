import Image from 'next/image';
import Link from 'next/link';

const cabinetMembers = [
  { src: '/cabinet images/1.Rt.Hon.Charles Bukantwa. Prime Minister..jpg', name: 'Rt. Hon. Charles Bukantwa', title: 'Prime Minister' },
  { src: '/cabinet images/2.Rt.Hon. Hassan Kihanda.1st Deputy Prime Minister..jpg', name: 'Rt. Hon. Hassan Kihanda', title: '1st Deputy Prime Minister' },
  { src: '/cabinet images/3.Rt.Hon. Ivan Mutebi.2nd Deputy Prime Minister..jpg', name: 'Rt. Hon. Ivan Mutebi', title: '2nd Deputy Prime Minister' },
  { src: '/cabinet images/4.Rt.Hon.Maisaba Manzi Edmond. Kusei Speaker..jpg', name: 'Rt. Hon. Maisaba Manzi Edmond', title: 'Kusei Speaker' },
  { src: '/cabinet images/5.Rt.Hon. Kamu Jim Sumbabhuliki. Deputy Kusei Speaker..jpg', name: 'Rt. Hon. Kamu Jim Sumbabhuliki', title: 'Deputy Kusei Speaker' },
  { src: '/cabinet images/6.Oweng.Kisembo David Bakasima. Attoney General..jpg', name: 'Oweng. Kisembo David Bakasima', title: 'Attorney General' },
  { src: '/cabinet images/7.Oweng.Rev.Kyomuhendo Geoffrey. Spokesperson..jpg', name: 'Oweng. Rev. Kyomuhendo Geoffrey', title: 'Spokesperson' },
  { src: '/cabinet images/8.Oweng.Musinguzi John. Minister of Trade,Industries and Cooperatives..jpg', name: 'Oweng. Musinguzi John', title: 'Minister of Trade, Industries and Cooperatives' },
  { src: '/cabinet images/9.Oweng. Chief Prince Agaba Charles. Minister for Royal Protocal and Welfare.jpg', name: 'Oweng. Chief Prince Agaba Charles', title: 'Minister for Royal Protocol and Welfare' },
  { src: '/cabinet images/10.Oweng.Baguma Godfrey. Minister for General Duties in the Office of Omudhingiya..jpg', name: 'Oweng. Baguma Godfrey', title: 'Minister for General Duties in the Office of Omudhingiya' },
  { src: '/cabinet images/11.Oweng.Baguma Peter. Minister for Defence..jpg', name: 'Oweng. Baguma Peter', title: 'Minister for Defence' },
  { src: '/cabinet images/12.Oweng.Sunday Milton. Minister for Security..jpg', name: 'Oweng. Sunday Milton', title: 'Minister for Security' },
  { src: '/cabinet images/13.Oweng. Mugenyi Eliphaz. Minister for Internal Relations..jpg', name: 'Oweng. Mugenyi Eliphaz', title: 'Minister for Internal Relations' },
  { src: '/cabinet images/14.Oweng.Dr. James Maisaba. Minister for Health..jpg', name: 'Oweng. Dr. James Maisaba', title: 'Minister for Health' },
  { src: '/cabinet images/15.Oweng. Baguma Anthony. Minister for Education..jpg', name: 'Oweng. Baguma Anthony', title: 'Minister for Education' },
  { src: '/cabinet images/16.Oweng.Tibesigwa John. Minister for Youth(Mpaghi),Games and Sports..jpg', name: 'Oweng. Tibesigwa John', title: 'Minister for Youth (Mpaghi), Games and Sports' },
  { src: '/cabinet images/17.Oweng.Mudhele Salim. Minister for and Community Mobilization..jpg', name: 'Oweng. Mudhele Salim', title: 'Minister for Culture and Community Mobilization' },
  { src: '/cabinet images/18.Oweng. Night Oliver Kacuro. Minister for Gender Labour and Social Development..jpg', name: 'Oweng. Night Oliver Kacuro', title: 'Minister for Gender, Labour and Social Development' },
  { src: '/cabinet images/19.Oweng. Balinkunda Silver. Minister for Lands,Environment and other Natural Resources..jpg', name: 'Oweng. Balinkunda Silver', title: 'Minister for Lands, Environment and other Natural Resources' },
  { src: '/cabinet images/20.Oweng.Balikamanya Zaa Francis. Minister for Transport and Royal Infrastructure..jpg', name: 'Oweng. Balikamanya Zaa Francis', title: 'Minister for Transport and Royal Infrastructure' },
  { src: '/cabinet images/21.Oweng.Kamanda Cos. Batalingiya. Minister for for External Relations..jpg', name: 'Oweng. Kamanda Cos. Batalingiya', title: 'Minister for External Relations' },
  { src: '/cabinet images/22.Oweng.Bamuturaki Julius. Minister for ICT,Research and documentation..jpg', name: 'Oweng. Bamuturaki Julius', title: 'Minister for ICT, Research and Documentation' },
  { src: '/cabinet images/23.Oweng.Asaba Mandela Roberts. Minister for Tourism and Industrial Relations..jpg', name: 'Oweng. Asaba Mandela Roberts', title: 'Minister for Tourism and Industrial Relations' },
  { src: '/cabinet images/24.Oweng.Hon.Alisemera Jane Babiha. Minister for Special Duties in the Office of Omudhingiya..jpg', name: 'Oweng. Hon. Alisemera Jane Babiha', title: 'Minister for Special Duties in the Office of Omudhingiya' },
  { src: '/cabinet images/25.Oweng.Mukwasobwe Julius. Minister for Special Interest Groups..jpg', name: 'Oweng. Mukwasobwe Julius', title: 'Minister for Special Interest Groups' },
  { src: '/cabinet images/26.Oweng.Kamero Elasto Komungalo. Minister without Portfolio in The Office of the Prime Minister..jpg', name: 'Oweng. Kamero Elasto Komungalo', title: 'Minister without Portfolio in the Office of the Prime Minister' },
  { src: '/cabinet images/27.Oweng. Kabagambe Juan Sam. Minister Finance ,Economic Monitoring and Evaluation..jpg', name: 'Oweng. Kabagambe Juan Sam', title: 'Minister for Finance, Economic Monitoring and Evaluation' },
  { src: '/cabinet images/28.Oweng.Magezi Expedito. Minister for Energy and Mineral Development..jpg', name: 'Oweng. Magezi Expedito', title: 'Minister for Energy and Mineral Development' },
  { src: '/cabinet images/29.Oweng.Kakonge Edward Kifunga. Minister for Constitutional Affairs and Deputy Attornt General..jpg', name: 'Oweng. Kakonge Edward Kifunga', title: 'Minister for Constitutional Affairs and Deputy Attorney General' },
  { src: '/cabinet images/30.Oweng.Tibirihuwa Boniface. Minister for Agriculture,Fisheries and Annimal Husbandry..jpg', name: 'Oweng. Tibirihuwa Boniface', title: 'Minister for Agriculture, Fisheries and Animal Husbandry' },
  { src: '/cabinet images/31.Oweng. Mutegeki Tomson. Deputy Minister for Gender,Labour and Social Development.Incharge Labour and Social Development..jpg', name: 'Oweng. Mutegeki Tomson', title: 'Deputy Minister for Gender, Labour and Social Development (In-charge Labour and Social Development)' },
  { src: '/cabinet images/32.Oweng.Bakahwerayo Lawrance. Deputy Minister for Youth,Games and Sports, Incharge Games and Sports..jpg', name: 'Oweng. Bakahwerayo Lawrance', title: 'Deputy Minister for Youth, Games and Sports (In-charge Games and Sports)' },
  { src: '/cabinet images/33.Oweng.Baguma Yona.Deputy Minster for Culture and Community Mobilization, Incharge Culture..jpg', name: 'Oweng. Baguma Yona', title: 'Deputy Minister for Culture and Community Mobilization (In-charge Culture)' },
  { src: '/cabinet images/34.Oweng.Sengi Semu Gwamba. Deputy MInister for Transport and Royal Infrastructure, Inchaege Royal Infrastructure..jpg', name: 'Oweng. Sengi Semu Gwamba', title: 'Deputy Minister for Transport and Royal Infrastructure (In-charge Royal Infrastructure)' },
  { src: '/cabinet images/35.Oweng.Mugisa Bamaaga. Deputy Minister for Tourism and Industrial Relations,Incharge Tourism..jpg', name: 'Oweng. Mugisa Bamaaga', title: 'Deputy Minister for Tourism and Industrial Relations (In-charge Tourism)' },
  { src: '/cabinet images/36.Oweng.Nsiyabo Andrew. Deputy Minister for Agriculture,Fisheries and Annimal Husbandry,Incharge Fisheries and Annimal Husbandry..jpg', name: 'Oweng. Nsiyabo Andrew', title: 'Deputy Minister for Agriculture, Fisheries and Animal Husbandry (In-charge Fisheries and Animal Husbandry)' },
  { src: '/cabinet images/37.Oweng.Kunihira Faith. Deputy Minister for Finance Incharge Economic Monitoring and Evaluation..jpg', name: 'Oweng. Kunihira Faith', title: 'Deputy Minister for Finance (In-charge Economic Monitoring and Evaluation)' },
  { src: '/cabinet images/38.Oweng. Kabonesa Jeniffer. Deputy Minister for Health, Incharge Environmental,Health,Child Health Care and Marternal Health..jpg', name: 'Oweng. Kabonesa Jeniffer', title: 'Deputy Minister for Health (In-charge Environmental Health, Child Health Care and Maternal Health)' },
  { src: '/cabinet images/39.Oweng.Annabaliya Grace. Deputy Minister for Trade,Industries and Cooperatives,Incharge Cooperatives..jpg', name: 'Oweng. Annabaliya Grace', title: 'Deputy Minister for Trade, Industries and Cooperatives (In-charge Cooperatives)' },
  { src: '/cabinet images/40.Oweng.Kansiime Conclodia. Deputy Minister for Protocal and Welfare incharge Welfare..jpg', name: 'Oweng. Kansiime Conclodia', title: 'Deputy Minister for Protocol and Welfare (In-charge Welfare)' },
  { src: '/cabinet images/41.Oweng. Bahemuka Edward Balitwana. Administrator in the Prime Minister\'s Office..jpg', name: 'Oweng. Bahemuka Edward Balitwana', title: "Administrator in the Prime Minister's Office" },
  { src: '/cabinet images/42.Oweng.Byomuhangi John. Finance Officer..jpg', name: 'Oweng. Byomuhangi John', title: 'Finance Officer' },
  { src: '/cabinet images/43.Oweng. Mukidi. Accountant General..jpg', name: 'Oweng. Mukidi', title: 'Accountant General' },
  { src: '/cabinet images/44.Oweng.Musinguzi Godwin. ICT. Officer..jpg', name: 'Oweng. Musinguzi Godwin', title: 'ICT Officer' },
  { src: '/cabinet images/45.Oweng.Mugabi Timothy. Traditional-Customary Marriage Registration Officer..JPG', name: 'Oweng. Mugabi Timothy', title: 'Traditional-Customary Marriage Registration Officer' },
  { src: '/cabinet images/48.Oweng.Kakonge Edaward Kifunga..jpg', name: 'Oweng. Kakonge Edward Kifunga', title: 'Cabinet Member' },
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
