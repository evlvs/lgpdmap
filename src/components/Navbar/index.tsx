import React, { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { Menu } from 'react-feather'

function Navbar(): JSX.Element {
  const [navbar, setNavbar] = useState(false)
  const [btnMenu, setBtnMenu] = useState(false)

  const changeBackground = () => {
    if (window.scrollY > 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const handleBtnMenu = () => {
    if (btnMenu === false) {
      setBtnMenu(true)
    } else {
      setBtnMenu(false)
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
          <img src="./assets/logo.svg" alt="LGPDmap" />
        </a>
      </Link>
      <button onClick={() => handleBtnMenu()}>
        <Menu stroke="#6359cf" />
      </button>
      <ul className={btnMenu ? `burger ${styles.active}` : 'burger'}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/steps">Como funciona?</Link>
        </li>
        <li>
          <Link href="/plans">Planos</Link>
        </li>
        <li>
          <Link
            
            href="javascript:void(Tawk_API.toggle())"
          >
            <a className={styles.callBtn}>Fale com um Especialista</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
