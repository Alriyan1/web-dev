import styles from './Header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>AlFA</h3>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default header
