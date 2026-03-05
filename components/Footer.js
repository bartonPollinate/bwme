import styles from './Footer.module.scss'

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <p>&copy; {currentYear} Barton White</p>
        <img className={styles.barcode} src="/barcode2.svg" alt="" aria-role="presentation" />
      </footer>
    </>
  )
}
