import { dashboardData } from '../../data/mock'
import styles from './Dashboard.module.scss'

export function Dashboard() {
  const data = dashboardData

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2 className={styles.h1}>Academic Overview</h2>
        <p className={styles.sub}>{data.termLabel}</p>
      </header>

      <section className={styles.grid}>
        <article className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.iconBox}>
              <span className="material-symbols-outlined">fact_check</span>
            </div>
            <span className={styles.pill}>{data.attendance.status}</span>
          </div>
          <p className={styles.kicker}>Overall Attendance</p>
          <div className={styles.metricRow}>
            <div className={styles.metric}>{data.attendance.percent}%</div>
            <div className={styles.delta}>↑ {data.attendance.delta}%</div>
          </div>
          <div className={styles.progressTrack} aria-hidden="true">
            <div
              className={styles.progressFill}
              style={{ width: `${data.attendance.percent}%` }}
            />
          </div>
        </article>

        <article className={[styles.card, styles.cardWide].join(' ')}>
          <div className={styles.gradesHeader}>
            <h3 className={styles.h2}>Latest Grades</h3>
            <div className={styles.gpa}>
              <div className={styles.gpaLabel}>Current GPA</div>
              <div className={styles.gpaValue}>{data.gpa.toFixed(2)}</div>
            </div>
          </div>

          <div className={styles.gradeList}>
            {data.grades.map((g) => (
              <div key={g.course} className={styles.gradeRow}>
                <div className={styles.gradeLeft}>
                  <div className={styles.smallIcon}>
                    <span className="material-symbols-outlined">{g.icon}</span>
                  </div>
                  <div>
                    <div className={styles.gradeCourse}>{g.course}</div>
                    <div className={styles.gradeType}>{g.type}</div>
                  </div>
                </div>
                <div className={styles.gradeValue}>{g.grade}</div>
              </div>
            ))}
          </div>
        </article>

        <article className={[styles.card, styles.cardSchedule].join(' ')}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.h2}>Today's Schedule</h3>
            <button className={styles.linkLike} type="button">
              View Calendar
            </button>
          </div>

          <div className={styles.timeline}>
            {data.today.map((c) => (
              <div
                key={c.title + c.time}
                className={[
                  styles.timelineItem,
                  c.active ? '' : styles.muted,
                ].join(' ')}
              >
                <div className={styles.dot} aria-hidden="true" />
                <div className={styles.timelineCard}>
                  <div>
                    <div className={styles.courseTitle}>{c.title}</div>
                    <div className={styles.courseSub}>{c.subtitle}</div>
                  </div>
                  <div className={styles.time}>
                    <span className="material-symbols-outlined">schedule</span>
                    {c.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.campusLife}>
          <img src={data.campusLife.image} alt="" />
          <div className={styles.campusOverlay}>
            <h4 className={styles.h2On}>{data.campusLife.title}</h4>
            <p className={styles.onText}>{data.campusLife.message}</p>
          </div>
        </article>
      </section>
    </div>
  )
}

