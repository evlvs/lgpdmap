import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Linkedin } from 'react-feather'
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
        <div className={styles.credits}>
          © All rights reserved. Upland 2020
          <a href="#">Termos de Serviço</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Mapa do Site</a>
        </div>
        <div className={styles.social}>
          <Link href="https://www.facebook.com/sekurtecnologia">
            <a>
              <Facebook />
            </a>
          </Link>
          <Link href="https://www.instagram.com/sekurbr/">
            <a>
              <Instagram />
            </a>
          </Link>
          <Link href="#">
            <a>
              <Linkedin />
            </a>
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
