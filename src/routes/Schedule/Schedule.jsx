import styles from './Schedule.module.scss'

const days = [
  { dow: 'MON', date: '12', active: true },
  { dow: 'TUE', date: '13' },
  { dow: 'WED', date: '14', accent: true },
  { dow: 'THU', date: '15' },
  { dow: 'FRI', date: '16' },
]

const sessions = [
  {
    time: '09:00 AM',
    title: 'Advanced Molecular Biology',
    tag: { label: 'Lecture', tone: 'primary' },
    person: 'Dr. Eleanor Vance',
    place: 'Lab Block B • Room 402',
    border: 'primary',
  },
  {
    time: '11:30 AM',
    title: 'Statistics for Research',
    tag: { label: 'Seminar', tone: 'tertiary' },
    person: 'Prof. Julian Thorne',
    place: 'Main Hall • Theater 1',
    border: 'tertiary',
  },
  { time: '01:00 PM', lunch: true },
  {
    time: '02:30 PM',
    title: 'Ethics in Global Governance',
    tag: { label: 'Mandatory', tone: 'muted' },
    person: 'Dr. Sarah Jenkins',
    place: 'Social Sciences • Room 12',
    border: 'neutral',
  },
]

export function Schedule() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.h1}>Weekly Timetable</h2>
          <p className={styles.sub}>Winter Semester • Week 08</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnGhost} type="button">
            <span className="material-symbols-outlined">filter_list</span>
            {' '}
            Filter
          </button>
          <button className={styles.btnPrimary} type="button">
            <span className="material-symbols-outlined">print</span>
            {' '}
            Export PDF
          </button>
        </div>
      </header>

      <section className={styles.dayStrip} aria-label="Days">
        {days.map((d) => (
          <button
            key={d.dow}
            type="button"
            className={[
              styles.day,
              d.active ? styles.dayActive : '',
              d.accent ? styles.dayAccent : '',
            ].join(' ')}
          >
            <span className={styles.dow}>{d.dow}</span>
            <span className={styles.date}>{d.date}</span>
          </button>
        ))}
      </section>

      <section className={styles.list} aria-label="Schedule list">
        {sessions.map((s) => {
          if (s.lunch) {
            return (
              <div key={s.time} className={styles.lunchRow}>
                <div className={styles.timeCol}>{s.time}</div>
                <div className={styles.lunchLine} />
                <div className={styles.lunchPill}>Lunch Break</div>
                <div className={styles.lunchLine} />
              </div>
            )
          }

          return (
            <div key={s.time + s.title} className={styles.row}>
              <div className={styles.timeCol}>{s.time}</div>
              <article className={[styles.session, styles[`b_${s.border}`]].join(' ')}>
                <div className={styles.sessionTop}>
                  <h3 className={styles.h2}>{s.title}</h3>
                  <span className={[styles.tag, styles[`t_${s.tag.tone}`]].join(' ')}>
                    {s.tag.label}
                  </span>
                </div>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <span className="material-symbols-outlined">person</span>
                    {s.person}
                  </div>
                  <div className={styles.metaItem}>
                    <span className="material-symbols-outlined">location_on</span>
                    {s.place}
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </section>

      <section className={styles.deadlines}>
        <h3 className={styles.h2}>Assignment Deadlines</h3>
        <div className={styles.deadlineGrid}>
          <div className={styles.deadline}>
            <div className={[styles.deadIcon, styles.danger].join(' ')}>
              <span className="material-symbols-outlined">emergency_home</span>
            </div>
            <div className={styles.deadText}>
              <div className={styles.deadTitle}>Bio Lab Report</div>
              <div className={styles.deadSubDanger}>Due in 4 hours</div>
            </div>
            <span className={[styles.chev, 'material-symbols-outlined'].join(' ')}>
              chevron_right
            </span>
          </div>
          <div className={styles.deadline}>
            <div className={[styles.deadIcon, styles.primary].join(' ')}>
              <span className="material-symbols-outlined">edit_note</span>
            </div>
            <div className={styles.deadText}>
              <div className={styles.deadTitle}>Ethics Reflection Paper</div>
              <div className={styles.deadSub}>Due Friday, 11:59 PM</div>
            </div>
            <span className={[styles.chev, 'material-symbols-outlined'].join(' ')}>
              chevron_right
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

