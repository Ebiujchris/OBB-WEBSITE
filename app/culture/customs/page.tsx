import Link from 'next/link';

export default function Customs() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-site" style={{ position: 'relative' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/culture" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>Culture</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.875rem' }}>/</span>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Customs & Traditions</span>
          </nav>
          <div className="badge badge-gold" style={{ marginBottom: '1.5rem' }}>Rituals & Practices</div>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            Customs & Traditions
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '520px' }}>
            Rituals and traditional practices in Obudhingiya — ceremonies that mark life's most important moments.
          </p>
        </div>
      </div>

      <section className="section-space" style={{ background: '#F8F3E7' }}>
        <div className="container-site" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <p style={{ fontSize: '0.8125rem', color: '#999' }}>
            Prepared by: Owenguko Kamui Jim Gilbson, Deputy Speaker KUSEI ·
            As narrated by: Samusoni Somyo, Langiya Sub Clan Elder ·
            Edited by: Dr. Swizen Kyomuhendo
          </p>

          {/* Circumcision */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Rite of Passage</div>
            <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Circumcision</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                Among Bamba clans, circumcision traditionally took place after every seven years of age, unlike today where a baby boy is circumcised after birth. This involved a series of cultural activities including seven days of traditional dances, initiation of candidates where folk tales were taught, and special traditional surgeons with enormous experience carrying out the circumcision without anesthesia.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                The candidates would be placed in one room called <em>Kigombe</em>, sleeping on wrapped fresh banana leaves called <em>Mpbisi</em>, until they healed. Uncircumcised baby boys were not allowed to eat <em>mahuli</em> (eggs), <em>Nkwali</em> (guinea fowl), <em>Bilenge Byenkoko</em> (legs of chicken), <em>Kilibbhata</em> (duck) etc. — intended to prevent excessive blood veins and muscles during circumcision.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                During circumcision, family members prepared local brew (Waragi, Tonto) and other local potent gins; traditional dances (<em>muledu/libghaya</em>) took place for seven days; animal skins, raffia skirts and rattles were worn; boys would step on eggs and were given sugar canes for chewing. A spear and bells were prepared. In the event of death of the candidate, the traditional surgeon would be speared to death.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                After circumcision and healing: traditional dances were performed, food and drinks were served, and gifts were offered to the circumcised. Graduates were required to take their foreskins (<em>Bisusu</em>) to their maternal uncles with 2 birds; in return each graduate was given a goat with one bird/chicken.
              </p>
              <div style={{ background: '#F8F3E7', borderRadius: '0.875rem', padding: '1.25rem' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#242424', marginBottom: '0.5rem' }}>Today</p>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.75 }}>
                  Circumcision remains a compulsory requirement among the Bamba as a whole — serving as a symbol of passage from childhood to adulthood, to avoid stigma and isolation, and to ensure every man is healthy enough to have children.
                </p>
              </div>
            </div>
          </div>

          {/* Birth */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>New Life</div>
            <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Birth</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                After the birth of every baby boy, the child would be retained in the house for a month. When exposing the child to the public, a naming ceremony was conducted with local delicacies like <em>Kodiko</em>, dry fish, chicken, beans, matooke, Gonja, rice, <em>Kahunga</em> etc. Dry banana leaves were made as a bed in the compound for the child, and a child of the opposite sex was made to lie on this bed with the new baby.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                If the baby was a boy, a bow with arrow, catapult, a sickle-headed traditional panga called <em>muholo</em>, spear etc. would be given. Baby girls were given knives, brooms and other feminine gifts. A grandparent would come forward, break a piece of <em>kahunga</em> (cassava flour), dip it in chicken stew, swallow it with pomp, and name the child — a traditional and cultural requirement.
              </p>
            </div>
          </div>

          {/* Marriage */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Union</div>
            <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Marriage</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                Traditionally, marriage was an exchange of young adolescent girls for girls of similar standing from friendly clans, without necessarily involving bride wealth. The cost was only seven goats, later increased to twelve goats. Dowry would be paid through a middleman called <em>Mukwenda</em>. Today, marriage has become much more expensive.
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
                The most common process was elopement — locally termed <em>Kuhaiya Mukali</em> (<em>Tisyaga Nkali</em>). Men would arrange through a middleman called <em>Mukwenda</em>, from a carefully selected family by elders, and needed just between five to seven chicken (<em>Nkoko</em>) as a fine called <em>Misanga</em>.
              </p>
            </div>
          </div>

          {/* Twins */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>Special Occasion</div>
            <h2 className="heading-serif" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#242424', marginBottom: '1.25rem' }}>Birth of Twins</h2>
            <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.85 }}>
              During the twins ceremony, the father of twins called <em>Salongo</em> contributes two goats with two chicken, mushrooms, dried fish and cassava flour. One goat and one cock is taken to the in-laws who ritually slaughter them to cast away any bad omen associated with twins. Culturally, twins were synonymous with ghosts — similar items were given to the kinsmen of the father (<em>Ssabalongo</em>), who enjoyed them ceremoniously singing obscene songs directed to <em>Nabalongo</em> (the mother of the twins) and vice versa. The entire ceremony is accompanied with drinking local gin called <em>Tonto</em> and <em>Waragi</em>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
