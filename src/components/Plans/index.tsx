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
          <h2>
            Possuimos um <strong>plano ideal</strong> para seu negócio!
          </h2>
          <p>
            Tenha tranquilidade e facilidade para implementação e gerenciamento
            dos processos exigidos pela legislação com o Lgpdmap. Mantenha-se
            atualizado para que sua empresa esteja sempre adequada à LGPD.
          </p>
          <Link href="#contactUs">
            <a>Conheça os planos</a>
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
