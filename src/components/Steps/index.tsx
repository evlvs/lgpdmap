import React from 'react'
import styles from './styles.module.scss'

const Steps: React.FC = () => {
  return (
    <>
      <div className={styles.startWave}></div>
      <div className={styles.steps}>
        <div className={styles.callToAction}>
          <h3>
            <span>4</span> para <strong>adequar</strong> a sua
            <strong> empresa</strong>
          </h3>
          <a href="#contactUs">Quer saber como funciona?</a>
        </div>
        <ul className={styles.services}>
          <li>
            <div className={styles.stepsIcon}>
              <img src="/assets/diagnostics.png" alt="Diagnósticos" />
            </div>
            <h3>Diagnóstico</h3>
            Inicio de jornada
          </li>
          <li>
            <div className={styles.stepsIcon}>
              <img src="/assets/mapping.png" alt="Mapeamento" />
            </div>
            <h3>Mapeamento</h3>
            Perícia das atividades
          </li>
          <li>
            <div className={styles.stepsIcon}>
              <img
                className={styles.plus}
                src="/assets/risks.png"
                alt="Análise de riscos"
              />
            </div>
            <h3>Análise de riscos</h3>
            Garantir o Sucesso
          </li>
          <li>
            <div className={styles.stepsIcon}>
              <img
                className={styles.plus}
                src="/assets/action.png"
                alt="Ações"
              />
            </div>
            <h3>Ações</h3>
            Mão na massa
          </li>
        </ul>
      </div>
      <div className={`${styles.endWave}`}></div>
    </>
  )
}

export default Steps
