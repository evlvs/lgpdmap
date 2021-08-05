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
          Fale com um consultor via <strong>Whatsapp</strong> e solicite uma
          demonstração.
        </h2>
        <Link href="https://whats.link/lgpdmap">
          <a>Conversar no Whatsapp</a>
        </Link>
      </div>
    </section>
  )
}

export default ContactUs
