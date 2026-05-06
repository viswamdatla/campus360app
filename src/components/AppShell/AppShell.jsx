import { Outlet, useLocation } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import styles from './AppShell.module.scss'

export function AppShell() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className={styles.shell}>
      <TopBar />
      <Sidebar activePath={pathname} />
      <main className={styles.content}>
        <Outlet />
      </main>
      <BottomNav activePath={pathname} />
    </div>
  )
}

