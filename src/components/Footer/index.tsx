import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram } from 'react-feather'
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
        <div className={styles.siteMap}>
          <ul>
            <li>Lgpdmap</li>
            <li>
              <Link href="./#knowMore">
                <a>Conheça o Lgpdmap</a>
              </Link>
            </li>
            <li>
              <Link href="./#ourNumbers">
                <a>Impacto em números</a>
              </Link>
            </li>
            <li>
              <Link href="./#contactUs">
                <a>Falar com Especialista</a>
              </Link>
            </li>
            <li>
              <Link href="./#testimonials">
                <a>Depoimentos</a>
              </Link>
            </li>
            <li>
              <Link href="./#partners">
                <a>Empresas</a>
              </Link>
            </li>
            <li>
              <Link href="./#FAQ">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>Como funciona?</li>
            <li>
              <Link href="/steps">
                <a>Adeque-se</a>
              </Link>
            </li>
            <li>
              <Link href="/steps#map">
                <a>Mapeamento</a>
              </Link>
            </li>
            <li>
              <Link href="/steps#risk">
                <a>Análise de Riscos</a>
              </Link>
            </li>

            <li>
              <Link href="/steps#act">
                <a>Ações</a>
              </Link>
            </li>
            <li>
              <Link href="/steps#listen">
                <a>Monitoramento</a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>Conheça nossos planos</li>
            <li>
              <Link href="/plans">
                <a>Planos</a>
              </Link>
            </li>
            <li>
              <Link href="/plans#SMB">
                <a>SMB</a>
              </Link>
            </li>
            <li>
              <Link href="/plans#PRO">
                <a>PRO</a>
              </Link>
            </li>
            <li>
              <Link href="/plans#BUSINESS">
                <a>BUSINESS</a>
              </Link>
            </li>
            <li>
              <Link href="/plans#ENTERPRISE">
                <a>ENTERPRISE</a>
              </Link>
            </li>
          </ul>

          <div className={styles.illustration}>
            <img src="./assets/contactus.svg" alt="Whatsapp" />
          </div>

          <div className={styles.callToAction}>
            <h2>
              Fale com um <strong>Especialista</strong> e veja como é fácil
              <strong> adequar</strong> a sua empresa à <strong>LGPD</strong>{' '}
              com o<strong> Lgpd</strong>map
            </h2>
            <Link href="https://whats.link/lgpdmap">
              <a>Fale com um Especialista</a>
            </Link>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.credits}>
            © All rights reserved. Upland 2020
            <a href="/terms">Termos de Uso</a>
            <a href="/privacy">Política de Privacidade</a>
          </div>
          <div className={styles.social}>
            <Link href="https://www.facebook.com/lgpdmap">
              <a target="_blank">
                <Facebook />
              </a>
            </Link>
            <Link href="https://www.instagram.com/lgpdmap/">
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
