import Image from 'next/image';
import Link from 'next/link';
import { cabinetMembers } from '../../media/photos/page';

const cabinetPortraits: Record<string, string> = {
  '1': '1.Rt.Hon.Charles Bukantwa. Prime Minister..jpg',
  '2': '2.Rt.Hon. Hassan Kihanda.1st Deputy Prime Minister..jpg',
  '3': '3.Rt.Hon. Ivan Mutebi.2nd Deputy Prime Minister..jpg',
  '4': '4.Rt.Hon.Maisaba Manzi Edmond. Kusei Speaker..jpg',
  '5': '5.Rt.Hon. Kamu Jim Sumbabhuliki. Deputy Kusei Speaker..jpg',
  '6': '6.Oweng.Kisembo David Bakasima. Attoney General..jpg',
  '7': '7.Oweng.Rev.Kyomuhendo Geoffrey. Spokesperson..jpg',
  '8': '8.Oweng.Musinguzi John. Minister of Trade,Industries and Cooperatives..jpg',
  '9': '9.Oweng. Chief Prince Agaba Charles. Minister for Royal Protocal and Welfare.jpg',
  '10': '10.Oweng.Baguma Godfrey. Minister for General Duties in the Office of Omudhingiya..jpg',
  '11': '11.Oweng.Baguma Peter. Minister for Defence..jpg',
  '12': '12.Oweng.Sunday Milton. Minister for Security..jpg',
  '13': '13.Oweng. Mugenyi Eliphaz. Minister for Internal Relations..jpg',
  '14': '14.Oweng.Dr. James Maisaba. Minister for Health..jpg',
  '15': '15.Oweng. Baguma Anthony. Minister for Education..jpg',
  '16': '16.Oweng.Tibesigwa John. Minister for Youth(Mpaghi),Games and Sports..jpg',
  '17': '17.Oweng.Mudhele Salim. Minister for and Community Mobilization..jpg',
  '18': '18.Oweng. Night Oliver Kacuro. Minister for Gender Labour and Social Development..jpg',
  '19': '19.Oweng. Balinkunda Silver. Minister for Lands,Environment and other Natural Resources..jpg',
  '20': '20.Oweng.Balikamanya Zaa Francis. Minister for Transport and Royal Infrastructure..jpg',
  '21': '21.Oweng.Kamanda Cos. Batalingiya. Minister for for External Relations..jpg',
  '22': '22.Oweng.Bamuturaki Julius. Minister for ICT,Research and documentation..jpg',
  '23': '23.Oweng.Asaba Mandela Roberts. Minister for Tourism and Industrial Relations..jpg',
  '24': '24.Oweng.Hon.Alisemera Jane Babiha. Minister for Special Duties in the Office of Omudhingiya..jpg',
  '25': '25.Oweng.Mukwasobwe Julius. Minister for Special Interest Groups..jpg',
  '26': '26.Oweng.Kamero Elasto Komungalo. Minister without Portfolio in The Office of the Prime Minister..jpg',
  '27': '27.Oweng. Kabagambe Juan Sam. Minister Finance ,Economic Monitoring and Evaluation..jpg',
  '28': '28.Oweng.Magezi Expedito. Minister for Energy and Mineral Development..jpg',
  '29': '29.Oweng.Kakonge Edward Kifunga. Minister for Constitutional Affairs and Deputy Attornt General..jpg',
  '30': '30.Oweng.Tibirihuwa Boniface. Minister for Agriculture,Fisheries and Annimal Husbandry..jpg',
  '31': '31.Oweng. Mutegeki Tomson. Deputy Minister for Gender,Labour and Social Development.Incharge Labour and Social Development..jpg',
  '32': '32.Oweng.Bakahwerayo Lawrance. Deputy Minister for Youth,Games and Sports, Incharge Games and Sports..jpg',
  '33': '33.Oweng.Baguma Yona.Deputy Minster for Culture and Community Mobilization, Incharge Culture..jpg',
  '34': '34.Oweng.Sengi Semu Gwamba. Deputy MInister for Transport and Royal Infrastructure, Inchaege Royal Infrastructure..jpg',
  '35': '35.Oweng.Mugisa Bamaaga. Deputy Minister for Tourism and Industrial Relations,Incharge Tourism..jpg',
  '36': '36.Oweng.Nsiyabo Andrew. Deputy Minister for Agriculture,Fisheries and Annimal Husbandry,Incharge Fisheries and Annimal Husbandry..jpg',
  '37': '37.Oweng.Kunihira Faith. Deputy Minister for Finance Incharge Economic Monitoring and Evaluation..jpg',
  '38': '38.Oweng. Kabonesa Jeniffer. Deputy Minister for Health, Incharge Environmental,Health,Child Health Care and Marternal Health..jpg',
  '39': '39.Oweng.Annabaliya Grace. Deputy Minister for Trade,Industries and Cooperatives,Incharge Cooperatives..jpg',
  '40': '40.Oweng.Kansiime Conclodia. Deputy Minister for Protocal and Welfare incharge Welfare..jpg',
  '41': "41.Oweng. Bahemuka Edward Balitwana. Administrator in the Prime Minister's Office..jpg",
  '42': '42.Oweng.Byomuhangi John. Finance Officer..jpg',
  '43': '43.Oweng. Mukidi. Accountant General..jpg',
  '44': '44.Oweng.Musinguzi Godwin. ICT. Officer..jpg',
  '45': '45.Oweng.Mugabi Timothy. Traditional-Customary Marriage Registration Officer..JPG',
  '48': '48.Oweng.Kakonge Edaward Kifunga..jpg',
};

function getCabinetPortrait(src: string) {
  const imageId = src.match(/\/(\d+)\./)?.[1];
  const filename = imageId ? cabinetPortraits[imageId] : undefined;

  if (!filename) {
    throw new Error(`No local cabinet portrait is configured for ${src}`);
  }

  return `/cabinet%20images/${encodeURIComponent(filename)}`;
}

export default function CabinetMinistersPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>About us</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Cabinet Ministers
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '560px' }}>
            Meet the ministers and office holders serving Obudhingiya Bwa Bwamba.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site">
          <div className="prime-minister-profile" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 0.8fr) minmax(0, 1.4fr)', background: '#fff', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(36,36,36,0.08)' }}>
            <div className="prime-minister-portrait" style={{ position: 'relative', minHeight: '320px' }}>
              <Image
                src={getCabinetPortrait(cabinetMembers[0].src)}
                alt="Rt. Hon. Charles Bukantwa, Prime Minister"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 700px) 100vw, 35vw"
                quality={75}
              />
            </div>
            <div style={{ padding: 'clamp(1.25rem, 3vw, 2.25rem)' }}>
              <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Katikiro · Prime Minister</div>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#242424', marginBottom: '0.875rem' }}>
                The Right Honourable Charles Bukantwa,
                <br />
                Katikiro (Oweng) of Obudingya Bwamba
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.75, marginBottom: '0.875rem' }}>
                The Right Honourable Charles Bukantwa is a son of the Nibe Clan and a proud member of the Bamba people. Rooted in the heritage and traditions of his clan and community, he brings that identity to the service of the Obudingya and its people.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.75, marginBottom: '0.875rem' }}>
                He serves as the Katikiro (Prime Minister) of Obudingya Bwamba and has been the foremost servant of the Omudhingiya since 2020. Working under the Omudhingiya’s direction, he leads the Cabinet and presides over its meetings, guiding the business of Parliament and keeping its proceedings in good order. He coordinates the institution’s policies, programmes, communications, and activities, so that every office moves in harmony and every decision honours the dignity of the Obudingya and the welfare of its people.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.75 }}>
                He is assisted by two Deputy Prime Ministers, who carry out the responsibilities he entrusts to them: the Right Honourable (Afande) Kihanda Hassan, of the Babandi Clan and the Babwisi community, and the Right Honourable Mutebi Ivan, of the Vanuma community.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem' }}>
            <Link href="/" style={{ color: '#1F4D3A', textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Home
            </Link>
            <Link href="/about" style={{ color: '#1F4D3A', textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Back to About
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
                    src={getCabinetPortrait(member.src)}
                    alt={`${member.name} — ${member.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={75}
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
      <style>{`
        @media (max-width: 700px) {
          .prime-minister-profile { grid-template-columns: 1fr !important; }
          .prime-minister-portrait { min-height: 260px !important; }
        }
      `}</style>
    </main>
  );
}
