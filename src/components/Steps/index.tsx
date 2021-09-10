import React from 'react'
import styles from './styles.module.scss'

const Steps: React.FC = () => {
  return (
    <>
      <div className={styles.startWave}></div>
      <div className={styles.steps}>
        <div className={styles.callToAction}>
          <h3>
            Processos para <strong>adequar </strong>
            sua <strong>empresa </strong>
            <span>a LGPD</span>
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
            <div className={styles.stepsIcon}>
              <img src="/assets/mapping.png" alt="Mapeamento" />
            </div>
            <div className={styles.infoBox}>
              <h3>Mapeamento</h3>
              Perícia das atividades
            </div>
          </li>
          <li>
            <div className={styles.stepsIcon}>
              <img
                className={styles.plus}
                src="/assets/risks.png"
                alt="Análise de riscos"
              />
            </div>
            <div className={styles.infoBox}>
              <h3>Análise de riscos</h3>
              Garantir o Sucesso
            </div>
          </li>
          <li>
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
          </li>
          <li>
            <div className={styles.stepsIcon}>
              <img
                className={styles.plus}
                src="/assets/action.png"
                alt="Ações"
              />
            </div>
            <div className={styles.infoBox}>
              <h3>Monitoramento</h3>
              Manutenção da LGPD
            </div>
          </li>
        </ul>
      </div>
      <div className={`${styles.endWave}`}></div>
    </>
  )
}

export default Steps
