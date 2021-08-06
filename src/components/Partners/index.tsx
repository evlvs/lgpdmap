import React from 'react'
import styles from './styles.module.scss'

function Partners(): JSX.Element {
  return (
    <section className={styles.partnersMain} id="contactUs">
      <div className="ballsRC"></div>
      <div className="ballsRO"></div>

      <h2>
        Empresas que acreditam em um processo seguro para seus clientes e
        funcionários.
      </h2>

      <div className={styles.partners}>
        <img
          src="./assets/partners/Poco.svg"
          alt="Poco"
          className={styles.primary}
        />
        <div className={styles.boxImg2}>
          <img
            src="./assets/partners/partner2.svg"
            alt="Poco"
            className={styles.partner2}
          />
        </div>
        <div className={styles.boxImg3}>
          <img
            src="./assets/partners/partner3.svg"
            alt="Poco"
            className={styles.partner3}
          />
        </div>
        <div className={styles.boxImg4}>
          <img
            src="./assets/partners/partner4.svg"
            alt="Poco"
            className={styles.partner4}
          />
        </div>
        <div className={styles.boxImg5}>
          <img
            src="./assets/partners/partner5.svg"
            alt="Poco"
            className={styles.partner5}
          />
        </div>
        <div className={styles.boxImg6}>
          <img
            src="./assets/partners/partner6.svg"
            alt="Poco"
            className={styles.partner6}
          />
        </div>
        <div className={styles.boxImg7}>
          <img
            src="./assets/partners/partner7.svg"
            alt="Poco"
            className={styles.partner7}
          />
        </div>
      </div>
    </section>
  )
}

export default Partners
