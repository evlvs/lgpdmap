import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

function ContactUs(): JSX.Element {
  return (
    <section className={styles.contactUs} id="contactUs">
      <div className="ballsRC"></div>
      <div className="ballsRO"></div>
      <div className="ballsLC"></div>
      <div className="ballsLO"></div>
      <div className={styles.illustration}>
        <img src="./assets/contactus.svg" alt="Whatsapp" />
      </div>
      <div className={styles.callToAction}>
        <h2>
          Fale com um <strong>Especialista</strong> e veja como é fácil{' '}
          <strong>adequar</strong> a sua empresa à <strong>LGPD</strong> com o
          <strong> Lgpdmap</strong>
        </h2>
        <Link href="https://whats.link/lgpdmap">
          <a>Fale com um Especialista</a>
        </Link>
      </div>
    </section>
  )
}

export default ContactUs
