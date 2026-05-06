import { Link } from 'react-router-dom'
import { navItems } from './navItems'
import styles from './BottomNav.module.scss'

export function BottomNav({ activePath }) {
  return (
    <nav className={styles.bottomNav} aria-label="Bottom navigation">
      {navItems.map((item) => {
        const isActive = activePath === item.to
        return (
          <Link
            key={item.to}
            to={item.to}
            className={[styles.item, isActive ? styles.active : ''].join(' ')}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: isActive
                  ? "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24"
                  : undefined,
              }}
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

