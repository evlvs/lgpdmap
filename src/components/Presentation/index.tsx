import React from 'react'
import styles from './styles.module.scss'

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
          <a href="#">Quer saber como funciona?</a>
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
