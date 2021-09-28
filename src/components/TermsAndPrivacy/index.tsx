import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

function PresentationTP(props: {
  title: string
  paragraph: string
}): JSX.Element {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.presentation}>
          <Link href="/">
            <a>
              <img src="/assets/logo.svg" alt="Logo LGPD Map" />
            </a>
          </Link>
          <h1>{props.title}</h1>
          <p>{props.paragraph}</p>
        </div>
      </section>
      <section className={styles.divider1}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </section>
    </>
  )
}

export default PresentationTP
