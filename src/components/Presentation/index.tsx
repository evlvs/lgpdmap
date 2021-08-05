import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

function Presentation(): JSX.Element {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.presentation}>
          <img src="/assets/logo.svg" alt="Logo LGPD Map" />
          <h1>Nunca foi tão fácil implementar a LGPD no seu negócio.</h1>
          <p>
            Diga adeus as consultorias complicadas com valores exorbitantes,
            chegou a hora de automatizar o processo da implimentação LGPD.
          </p>
          <Link data-scroll href="#contactUs" scroll={false}>
            <a>Quer saber como funciona?</a>
          </Link>
        </div>
        <div className={styles.bannerIllustration}></div>
      </section>
      <section className={styles.divider1}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </section>
    </>
  )
}

export default Presentation
