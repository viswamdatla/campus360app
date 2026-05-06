import styles from './Grades.module.scss'

const spring = [
  { name: 'Advanced Algorithms', code: 'CS-401', credits: '4.0', pct: '94%', grade: 'A', status: 'Passed' },
  { name: 'Machine Learning Foundations', code: 'CS-405', credits: '4.0', pct: '88%', grade: 'A-', status: 'Passed' },
  { name: 'Database Management Systems', code: 'CS-302', credits: '3.0', pct: '91%', grade: 'A', status: 'Passed' },
]

const fall = [
  { name: 'Computer Networks', code: 'CS-308', credits: '4.0', pct: '84%', grade: 'B+', status: 'Passed' },
  { name: 'Artificial Intelligence', code: 'CS-310', credits: '4.0', pct: '92%', grade: 'A', status: 'Passed' },
]

export function Grades() {
  return (
    <div className={styles.page}>
      <section className={styles.gridTop}>
        <article className={[styles.card, styles.accentLeft].join(' ')}>
          <div className={styles.cardHead}>
            <span className={styles.kicker}>Cumulative GPA</span>
            <div className={styles.bubble}>
              <span className="material-symbols-outlined">trending_up</span>
            </div>
          </div>
          <div className={styles.big}>3.82</div>
          <div className={styles.note}>Top 5% of Department</div>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.kicker}>Total Credits</span>
            <div className={[styles.bubble, styles.tertiary].join(' ')}>
              <span className="material-symbols-outlined">menu_book</span>
            </div>
          </div>
          <div className={styles.big}>94 / 120</div>
          <div className={styles.track} aria-hidden="true">
            <div className={styles.fill} style={{ width: '78%' }} />
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.kicker}>Class Rank</span>
            <div className={[styles.bubble, styles.neutral].join(' ')}>
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
          </div>
          <div className={styles.big}>12th</div>
          <div className={styles.muted}>Out of 340 students</div>
        </article>
      </section>

      <section className={styles.transcript}>
        <div className={styles.transcriptHead}>
          <h2 className={styles.h2}>Academic Transcript</h2>
          <button className={styles.btn} type="button">
            <span className="material-symbols-outlined">download</span>
            {' '}
            Export PDF
          </button>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <div className={styles.blockTitle}>
              <span className="material-symbols-outlined">calendar_today</span>
              <span>Spring 2024 (Current)</span>
            </div>
            <span className={styles.pill}>Semester GPA: 3.90</span>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.t}>
              <thead>
                <tr>
                  <th>COURSE NAME</th>
                  <th>CODE</th>
                  <th>CREDITS</th>
                  <th>PERCENTAGE</th>
                  <th>GRADE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {spring.map((r) => (
                  <tr key={r.code}>
                    <td>{r.name}</td>
                    <td className={styles.mono}>{r.code}</td>
                    <td>{r.credits}</td>
                    <td>{r.pct}</td>
                    <td>
                      <span className={styles.grade}>{r.grade}</span>
                    </td>
                    <td>
                      <span className={styles.status}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <div className={styles.blockTitleMuted}>
              <span className="material-symbols-outlined">history</span>
              <span>Fall 2023</span>
            </div>
            <span className={styles.pillMuted}>Semester GPA: 3.75</span>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.t}>
              <tbody>
                {fall.map((r) => (
                  <tr key={r.code}>
                    <td>{r.name}</td>
                    <td className={styles.mono}>{r.code}</td>
                    <td>{r.credits}</td>
                    <td>{r.pct}</td>
                    <td>
                      <span className={styles.gradeDark}>{r.grade}</span>
                    </td>
                    <td>
                      <span className={styles.status}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.bottom}>
        <article className={styles.card}>
          <h3 className={styles.h2}>Grade Distribution</h3>
          <div className={styles.bars}>
            {[
              { label: 'A', h: 90, cls: styles.primaryBar },
              { label: 'B', h: 60, cls: styles.primaryFixedBar },
              { label: 'C', h: 20, cls: styles.surfaceBar },
              { label: 'D', h: 5, cls: styles.surfaceMidBar },
              { label: 'F', h: 2, cls: styles.errorBar },
            ].map((b) => (
              <div key={b.label} className={styles.barCol}>
                <div className={[styles.bar, b.cls].join(' ')} style={{ height: `${b.h}%` }} />
                <div className={styles.barLabel}>{b.label}</div>
              </div>
            ))}
          </div>
        </article>

        <article className={[styles.card, styles.center].join(' ')}>
          <div className={styles.ringWrap}>
            <svg className={styles.ring} viewBox="0 0 128 128" aria-hidden="true">
              <circle className={styles.ringBg} cx="64" cy="64" r="58" />
              <circle className={styles.ringFg} cx="64" cy="64" r="58" />
            </svg>
            <div className={styles.ringText}>78%</div>
          </div>
          <div className={styles.centerTitle}>Degree Completion</div>
          <div className={styles.centerSub}>
            You are 26 credits away from graduation. Keep up the great work!
          </div>
        </article>
      </section>
    </div>
  )
}

