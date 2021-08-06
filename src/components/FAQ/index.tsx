import React from 'react'
import styles from './styles.module.scss'
import Accordion from './Accordion'

function FAQ(): JSX.Element {
  return (
    <section className={styles.FAQ}>
      <div className="ballsRC"></div>
      <div className="ballsRO"></div>
      <div className="ballsLC"></div>
      <div className="ballsLO"></div>
      <h2>
        Veja as principais dúvidas dos clientes, antes de contratar um plano.
      </h2>
      <Accordion />
    </section>
  )
}

export default FAQ
