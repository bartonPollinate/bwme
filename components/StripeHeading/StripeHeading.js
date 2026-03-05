import styles from './StripeHeading.module.scss'

export default function StripeHeading({children}) {

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.wrapper}>
      <h2>{children}</h2>
      <div className={styles.stripes}></div>
    </div>
  )
}
