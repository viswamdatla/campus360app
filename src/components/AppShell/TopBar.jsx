import styles from './TopBar.module.scss'

export function TopBar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <div className={styles.avatar} aria-hidden="true">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-zN8JzMsY1s5abYjXptA9Z1ZVoJwK-vrCXCJAicbllNF-NefjWOqvzf_ZqgsPBC7CD_fpbd_8iSoXKT6AbCs1k1NAal5Ig2JXgRyLmR8QyJdK7VksdKM1CGfEUS8KUBACeaVoHykKxYlHA8arovK7sLha-pRE5YqPo3PiX0Wg-M8i5Cpy-ss-tcIcu-DuNZ46HRwhup2qy_YBLXm1CnL8V2l5-8EZHVlnWlv_tfyhnZi5iedSNkRgBtX1tetFfYjvXjg7eR5KQc"
            alt=""
          />
        </div>
        <h1 className={styles.brand}>CampusConnect</h1>
      </div>

      <button className={styles.iconBtn} type="button" aria-label="Notifications">
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  )
}

