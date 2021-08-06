import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

function Plans(): JSX.Element {
  return (
    <>
      <section className={styles.divider2}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </section>
      <section className={styles.plans}>
        <div className={styles.plansIllustration}>
          <img src="./assets/illustrationPlans.svg" alt="Whatsapp" />
        </div>
        <div className={styles.callToAction}>
          <h2>Possuimos um plano ideal para seu negócio!</h2>
          <p>
            Fique tranquilo e despreocupado que a ferramenta Lgpdmap veio para
            agregar e facilitar o seu dia a dia, nós estamos em atualização
            diárias para seu negócio sempre estar adequado a LGPD.
          </p>
          <Link href="#contactUs">
            <a>Conhecer os planos</a>
          </Link>
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

export default Plans
