import React from 'react'
import styles from './styles.module.scss'
import Accordion from './Accordion'

function FAQ(): JSX.Element {
  return (
    <section className={styles.FAQ}>
      <div className="ballsRC"></div>
      <div className="ballsRO"></div>

      <h2>Perguntas frequentes (FAQ)</h2>
      <Accordion />
    </section>
  )
}

export default FAQ
