import React, { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

function Navbar(): JSX.Element {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  if (process.browser) {
    window.addEventListener('scroll', changeBackground)
  }

  return (
    <nav
      className={
        navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
      }
    >
      <Link href="/">
        <a>
          <img src="/assets/Logo.png" alt="LGPDmap" />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/steps">Como funciona?</Link>
        </li>
        <li>
          <Link href="/plans">Planos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
