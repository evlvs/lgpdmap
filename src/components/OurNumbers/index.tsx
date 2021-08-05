import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import styles from './styles.module.scss'

function OurNumbers(): JSX.Element {
  return (
    <section className={styles.ourNumbers}>
      <div className="ballsLC"></div>
      <div className="ballsLO"></div>
      <h2>Confiamos em números!</h2>

      <ul>
        <li>
          <h6>mais de</h6>
          <h5>
            <CountUp end={30} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            mil
          </h5>
          <h4>Clientes ativos</h4>
        </li>
        <li>
          <h6>mais de</h6>
          <h5>
            <CountUp end={200} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            mil
          </h5>
          <h4>Empresas adequadas à LGPD</h4>
        </li>
        <li>
          <h6>mais de</h6>
          <h5>
            <CountUp end={650} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            mil
          </h5>
          <h4>Volumes de dados mapeados</h4>
        </li>
      </ul>
    </section>
  )
}

export default OurNumbers
