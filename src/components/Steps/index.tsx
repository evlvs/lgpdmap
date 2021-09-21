import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'

const Steps: React.FC = () => {
  return (
    <>
      <div className={styles.startWave}></div>
      <div className={styles.steps}>
        <div className={styles.callToAction}>
          <h3>
            Processos
            <br /> para <strong>adequar </strong>
            sua <strong>empresa </strong>
            <span>à LGPD</span>
          </h3>
          <a href="/steps">Quer saber como funciona?</a>
        </div>
        <ul className={styles.services}>
          {/* <li>
            <div className={styles.stepsIcon}>
              <img src="/assets/diagnostics.png" alt="Diagnósticos" />
            </div>
            <div className={styles.infoBox}>
              <h3>Diagnóstico</h3>
              Inicio de jornada
            </div>
          </li> */}
          <li>
            <Link href="./steps#map">
              <a>
                <div className={styles.stepsIcon}>
                  <img src="/assets/mapping.png" alt="Mapeamento" />
                </div>
                <div className={styles.infoBox}>
                  <h3>Mapeamento</h3>
                  Conhecendo os processos
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="./steps#risk">
              <a>
                <div className={styles.stepsIcon}>
                  <img
                    className={styles.plus}
                    src="/assets/risks.png"
                    alt="Análise de riscos"
                  />
                </div>
                <div className={styles.infoBox}>
                  <h3>Análise de Riscos</h3>
                  Criação de estratégias para mitigá-los
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="./steps#act">
              <a>
                <div className={styles.stepsIcon}>
                  <img
                    className={styles.plus}
                    src="/assets/action.png"
                    alt="Ações"
                  />
                </div>
                <div className={styles.infoBox}>
                  <h3>Ações</h3>
                  Mão na massa
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="./steps#listen">
              <a>
                <div className={styles.stepsIcon}>
                  <img
                    className={styles.plus}
                    src="/assets/diagnostics.png"
                    alt="Ações"
                  />
                </div>
                <div className={styles.infoBox}>
                  <h3>Monitoramento</h3>
                  Manutenção da conformidade
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.endWave}`}></div>
    </>
  )
}

export default Steps
