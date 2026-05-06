import { Link } from 'react-router-dom'
import { navItems } from './navItems'
import styles from './Sidebar.module.scss'

export function Sidebar({ activePath }) {
  return (
    <aside className={styles.sidebar} aria-label="Primary navigation">
      <div className={styles.header}>
        <h2 className={styles.title}>Student Portal</h2>
        <p className={styles.subtitle}>Welcome back, Alex</p>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive = activePath === item.to
          return (
            <Link
              key={item.to}
              to={item.to}
              className={[styles.link, isActive ? styles.active : ''].join(' ')}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

