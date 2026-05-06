import styles from './Attendance.module.scss'

const subjectBreakdown = [
  { name: 'Advanced Mathematics', pct: 98, tone: 'primary' },
  { name: 'Quantum Physics', pct: 85, tone: 'primary' },
  { name: 'Data Structures', pct: 92, tone: 'primary' },
  { name: 'Technical English', pct: 74, tone: 'tertiary' },
  { name: 'Humanities', pct: 100, tone: 'primary' },
]

const recent = [
  { date: 'Oct 16, 2023', subject: 'Advanced Mathematics', type: 'Lecture', status: 'PRESENT' },
  { date: 'Oct 15, 2023', subject: 'Quantum Physics', type: 'Laboratory', status: 'PRESENT' },
  { date: 'Oct 14, 2023', subject: 'Technical English', type: 'Tutorial', status: 'ABSENT' },
]

export function Attendance() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Academic Year 2023-24</p>
        <h2 className={styles.h1}>Attendance Overview</h2>
      </header>

      <section className={styles.grid}>
        <article className={[styles.card, styles.metric].join(' ')}>
          <div className={styles.metricTop}>
            <span className={styles.metricLabel}>TOTAL PERCENTAGE</span>
            <div className={styles.metricIcon}>
              <span className="material-symbols-outlined">analytics</span>
            </div>
          </div>
          <div className={styles.metricValue}>92.4%</div>
          <div className={styles.trend}>
            <span className="material-symbols-outlined">trending_up</span>
            <span>+1.2% from last month</span>
          </div>
          <div className={styles.progressTrack} aria-hidden="true">
            <div className={styles.progressFill} style={{ width: '92.4%' }} />
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.simpleMetric}>
            <div className={[styles.bubble, styles.good].join(' ')}>
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <div className={styles.metricLabel}>TOTAL PRESENT</div>
              <div className={styles.simpleValue}>
                144 <span className={styles.muted}>/ 156</span>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.simpleMetric}>
            <div className={[styles.bubble, styles.bad].join(' ')}>
              <span className="material-symbols-outlined">cancel</span>
            </div>
            <div>
              <div className={styles.metricLabel}>TOTAL ABSENT</div>
              <div className={styles.simpleValue}>
                12 <span className={styles.muted}>Days</span>
              </div>
            </div>
          </div>
        </article>

        <article className={[styles.card, styles.calendar].join(' ')}>
          <div className={styles.sectionTop}>
            <h3 className={styles.h2}>October 2023</h3>
            <div className={styles.calBtns}>
              <button className={styles.iconBtn} type="button" aria-label="Previous month">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className={styles.iconBtn} type="button" aria-label="Next month">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className={styles.weekdays}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
              <div key={d} className={styles.weekday}>
                {d}
              </div>
            ))}
          </div>

          <div className={styles.days}>
            {Array.from({ length: 29 }).map((_, idx) => {
              const day = idx - 5 // start at 24 prev month
              if (day < 1) {
                const prev = 24 + idx
                return (
                  <div key={`p-${prev}`} className={styles.dayMuted}>
                    {prev}
                  </div>
                )
              }
              const isPresent = [2, 3, 4, 5, 9, 10, 11, 12, 13].includes(day)
              const isAbsent = day === 6
              const isToday = day === 16
              return (
                <div
                  key={`d-${day}`}
                  className={[
                    styles.day,
                    isPresent ? styles.present : '',
                    isAbsent ? styles.absent : '',
                    isToday ? styles.today : '',
                  ].join(' ')}
                >
                  {day}
                </div>
              )
            })}
          </div>

          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <span className={[styles.dot, styles.dotPresent].join(' ')} />
              <span>Present</span>
            </div>
            <div className={styles.legendItem}>
              <span className={[styles.dot, styles.dotAbsent].join(' ')} />
              <span>Absent</span>
            </div>
            <div className={styles.legendItem}>
              <span className={[styles.dot, styles.dotToday].join(' ')} />
              <span>Today</span>
            </div>
          </div>
        </article>

        <article className={[styles.card, styles.breakdown].join(' ')}>
          <div className={styles.sectionTop}>
            <h3 className={styles.h2}>Subject Breakdown</h3>
            <button className={styles.linkLike} type="button">
              View Details
            </button>
          </div>
          <div className={styles.breakItems}>
            {subjectBreakdown.map((s) => (
              <div key={s.name} className={styles.subject}>
                <div className={styles.subjectTop}>
                  <span className={styles.subjectName}>{s.name}</span>
                  <span className={[styles.subjectPct, styles[`tone_${s.tone}`]].join(' ')}>
                    {s.pct}%
                  </span>
                </div>
                <div className={styles.bar}>
                  <div
                    className={[styles.barFill, styles[`tone_${s.tone}`]].join(' ')}
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className={[styles.card, styles.table].join(' ')}>
          <h3 className={styles.h2}>Recent History</h3>
          <div className={styles.tableWrap}>
            <table className={styles.t}>
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>SUBJECT</th>
                  <th>TYPE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((r) => (
                  <tr key={r.date + r.subject}>
                    <td>{r.date}</td>
                    <td>{r.subject}</td>
                    <td>{r.type}</td>
                    <td>
                      <span
                        className={[
                          styles.badge,
                          r.status === 'PRESENT' ? styles.badgeGood : styles.badgeBad,
                        ].join(' ')}
                      >
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  )
}

