import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

function Presentation(): JSX.Element {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.presentation}>
          <img src="/assets/logo.svg" alt="Logo LGPD Map" />
          <h1>Nunca foi tão fácil adequar a sua empresa à LGPD.</h1>
          <p>
            Diga adeus às planilhas ou ferramentas complexas, com recursos
            desnecessários. Implemente a LGPD de forma simples e centralizada,
            com uma só ferramenta.
          </p>
          <Link data-scroll href="#contactUs" scroll={false}>
            <a>Quer saber como funciona?</a>
          </Link>
        </div>
        <div className={styles.bannerIllustration}>
          <img src="./assets/illustration-home.svg" alt="Whatsapp" />
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

export default Presentation
