import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import parse from 'html-react-parser'

function Presentation(props: {
  title: string
  paragraph: string
  hasButton: string
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
          <p>{parse(props.paragraph)}</p>
          {props.hasButton === 'true' ? (
            <Link href="/steps">
              <a>Quer saber como funciona?</a>
            </Link>
          ) : (
            ' '
          )}
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
