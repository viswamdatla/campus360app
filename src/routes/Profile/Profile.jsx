import styles from './Profile.module.scss'

export function Profile() {
  return (
    <div className={styles.page}>
      <section className={styles.topGrid}>
        <article className={styles.identity}>
          <div className={styles.photoWrap} aria-hidden="true">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlGBG-fw6nR2j-FdgLJSn-micDBWXIm2H1KSkrXPWIc7WSY2tHYUS6KkSg4y9NCfgYnvwWx1OOh7wgEh6C37Euqnf3EHGIhh03AIaSVNfzY6tBzv20-l8tIiXx0keHprxKz4IELL7zJn2UZQLxro4JW7QNdKxa1Tq5OCEkzH-Q27OkaEZ2fBb1yHowtJDS4ypUKPy_BhhIvy-CcQBCASq4Bvyf4tJ9W7mNqvB5Vg08Z1RJAIDL0Lqgp0e9c2oqSBmFikwXqe9KtYM"
              alt=""
            />
            <span className={styles.onlineDot} />
          </div>

          <div className={styles.idText}>
            <div className={styles.nameRow}>
              <h2 className={styles.h1}>Arjun Vardhan</h2>
              <span className={styles.statusPill}>Active Student</span>
            </div>
            <p className={styles.sub}>Student ID: CC-2024-8902</p>

            <div className={styles.tags}>
              <div className={styles.tag}>
                <span className="material-symbols-outlined">domain</span>
                <span>Section: Grade 12-B</span>
              </div>
              <div className={styles.tag}>
                <span className="material-symbols-outlined">tag</span>
                <span>Roll No: 24</span>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.btnPrimary} type="button">
              <span className="material-symbols-outlined">edit</span>
              {' '}
              Edit Profile
            </button>
            <button className={styles.btnGhost} type="button">
              <span className="material-symbols-outlined">print</span>
              {' '}
              Print ID
            </button>
          </div>
        </article>

        <article className={styles.performance}>
          <p className={styles.perfKicker}>Academic Performance</p>
          <div className={styles.perfValue}>3.82 GPA</div>
          <div className={styles.perfTrack} aria-hidden="true">
            <div className={styles.perfFill} style={{ width: '88%' }} />
          </div>
          <p className={styles.perfSub}>92nd Percentile in Section</p>
          <span className={styles.decor} aria-hidden="true" />
        </article>
      </section>

      <section className={styles.bottomGrid}>
        <div className={styles.leftCol}>
          <article className={styles.card}>
            <div className={styles.cardHead}>
              <span className="material-symbols-outlined">person_outline</span>
              <h3 className={styles.h2}>Personal Information</h3>
            </div>

            <div className={styles.infoGrid}>
              <div>
                <p className={styles.label}>Date of Birth</p>
                <p className={styles.value}>14th March 2006</p>
              </div>
              <div>
                <p className={styles.label}>Blood Group</p>
                <p className={styles.value}>O Positive (O+)</p>
              </div>
              <div>
                <p className={styles.label}>Gender</p>
                <p className={styles.value}>Male</p>
              </div>
              <div>
                <p className={styles.label}>Nationality</p>
                <p className={styles.value}>Indian</p>
              </div>
              <div className={styles.full}>
                <p className={styles.label}>Residential Address</p>
                <p className={styles.value}>
                  Skyline Residency, Apt 402, Brigade Road, Bangalore, 560001
                </p>
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHead}>
              <span className="material-symbols-outlined">school</span>
              <h3 className={styles.h2}>Academic Track</h3>
            </div>

            <div className={styles.trackList}>
              <div className={styles.trackItem}>
                <div className={styles.trackLeft}>
                  <div className={styles.trackIcon}>
                    <span className="material-symbols-outlined">science</span>
                  </div>
                  <div>
                    <p className={styles.valueBold}>Science Stream</p>
                    <p className={styles.label}>PCMB Specialization</p>
                  </div>
                </div>
                <span className={styles.yearPill}>2024-25</span>
              </div>

              <div className={styles.trackItemOutline}>
                <div className={styles.trackLeft}>
                  <div className={styles.trackIconMuted}>
                    <span className="material-symbols-outlined">history_edu</span>
                  </div>
                  <div>
                    <p className={styles.valueBold}>Attendance Rate</p>
                    <p className={styles.label}>Present: 142/150 days</p>
                  </div>
                </div>
                <p className={styles.rightStat}>94.6%</p>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.rightCol}>
          <article className={styles.card}>
            <div className={styles.cardHead}>
              <span className="material-symbols-outlined">family_restroom</span>
              <h3 className={styles.h2}>Parent/Guardian Info</h3>
            </div>

            <div className={styles.guardian}>
              <div className={styles.guardianPrimary}>
                <p className={styles.guardKicker}>Primary Contact</p>
                <div className={styles.kv}>
                  <p className={styles.label}>Name</p>
                  <p className={styles.valueBold}>Ramesh Vardhan</p>
                </div>
                <div className={styles.kv}>
                  <p className={styles.label}>Relation</p>
                  <p className={styles.value}>Father</p>
                </div>
                <div className={styles.kv}>
                  <p className={styles.label}>Occupation</p>
                  <p className={styles.value}>Software Engineer</p>
                </div>

                <div className={styles.contactLinks}>
                  <a className={styles.contact} href="tel:+919880012345">
                    <span className="material-symbols-outlined">call</span>
                    {' '}
                    +91 98800 12345
                  </a>
                  <a className={styles.contact} href="mailto:r.vardhan@email.com">
                    <span className="material-symbols-outlined">mail</span>
                    {' '}
                    r.vardhan@email.com
                  </a>
                </div>
              </div>

              <div className={styles.guardianSecondary}>
                <p className={styles.guardKickerMuted}>Secondary Contact</p>
                <div className={styles.kv}>
                  <p className={styles.label}>Name</p>
                  <p className={styles.valueBold}>Sunita Vardhan</p>
                </div>
                <div className={styles.kv}>
                  <p className={styles.label}>Relation</p>
                  <p className={styles.value}>Mother</p>
                </div>
                <div className={styles.kv}>
                  <p className={styles.label}>Phone</p>
                  <p className={styles.value}>+91 98800 67890</p>
                </div>
              </div>
            </div>

            <div className={styles.emergency}>
              <div className={styles.emHead}>
                <span className="material-symbols-outlined">emergency</span>
                <p className={styles.emTitle}>EMERGENCY PROCEDURE</p>
              </div>
              <p className={styles.emText}>
                In case of emergency, contact Ramesh Vardhan immediately. Allergic to Peanuts.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

