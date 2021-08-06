import React from 'react'
import styles from './styles.module.scss'

function Footer(): JSX.Element {
  return (
    <>
      <section className={styles.divider2}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </section>
      <footer className={styles.footer}>
        © All rights reserved. Upland 2020
      </footer>
    </>
  )
}

export default Footer
