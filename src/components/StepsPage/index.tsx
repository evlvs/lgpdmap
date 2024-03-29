import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const StepsPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500
    })
  }, [])
  return (
    <>
      <div className="ballsRC"></div>
      <div className="ballsRO"></div>
      <div className={styles.steps}>
        <ul className={styles.services}>
          <li id="map">
            <div className={styles.infoBody} data-aos="zoom-in-up">
              <div className={styles.stepsTitle}>
                <h3>Mapeamento</h3>
                Conhecendo os processos
              </div>
              <div className={styles.textBox}>
                <h3>
                  Esta fase exige uma boa perícia de quem está no comando das
                  atividades.
                </h3>
                <p>
                  Agora é a hora de aprofundar o trabalho focando os esforços na
                  análise dos dados que são coletados em qualquer um dos
                  processos da empresa, sejam impressos ou eletrônicos, em todo
                  e qualquer sistema.
                </p>
                <p>
                  Uma boa análise e organização destes dados garantirá
                  tranquilidade absoluta nas próximas fases. Para que tudo saia
                  conforme o planejado, nada melhor do que a tecnologia e um bom
                  sistema para auxiliar neste processo.
                </p>
              </div>
            </div>
            <div className={styles.infoHead} data-aos="fade">
              <div className={styles.stepsIcon}>
                <img src="/assets/mapping.png" alt="Mapeamento" />
              </div>
            </div>
          </li>
          <li id="risk">
            <div className={styles.infoHead} data-aos="fade">
              <div className={styles.stepsIcon}>
                <img src="/assets/risks.png" alt="Análise de riscos" />
              </div>
            </div>

            <div className={styles.infoBody} data-aos="zoom-in-up">
              <div className={styles.stepsTitle}>
                <h3>Análise de Riscos</h3>
                Criação de estratégias para mitigá-los
              </div>
              <div className={styles.textBox}>
                <h3>
                  Neste ponto, já percorremos boa parte do caminho, portanto é
                  fazer a lição de casa e garantir o sucesso.
                </h3>
                <p>
                  A análise de Riscos nada mais é do que mapear tudo aquilo que
                  pode gerar algum possível problema futuro para a empresa. Ou
                  seja, tirado o raio-X nas etapas anteriores, basta entender o
                  que se tornará um risco, qual sua gravidade, como e se é
                  viável mitigá-lo.
                </p>
                <p>
                  Com a lição feita, agora é hora de planejar as ações
                  necessárias para entrar de fato na reta final do processo!
                </p>
              </div>
            </div>
          </li>
          <li id="act">
            <div className={styles.infoBody} data-aos="zoom-in-up">
              <div className={styles.stepsTitle}>
                <h3>Ações</h3>
                Mão na massa
              </div>
              <div className={styles.textBox}>
                <h3>
                  Já na reta final, esta fase vem para elencar todas as
                  atividades que a empresa deverá ajustar em seus processos para
                  enfim estar adequada à LGPD.
                </h3>
                <p>
                  O momento é de arregaçar as mangas e distribuir as atividades
                  entre os setores e colocar em prática tudo o que foi planejado
                  até aqui.
                </p>
                <p>
                  Um dos resultados desta fase é a consolidação das informações
                  para a geração, com poucos cliques, do Relatório de Impacto à
                  Proteção de Dados (RIPD), requisito obrigatório para o
                  processo de adequação da LGPD.
                </p>
                <p>
                  Concluindo a implantação das atividades de ajuste propostas no
                  plano de ação, agora é hora de encerrar esta caminhada e
                  começar uma nova: a manutenção da conformidade com a Lei.
                  Monitore se tudo o que foi feito está em pleno funcionamento!
                  Não basta adequar, é necessário manter o processo!
                </p>
              </div>
            </div>

            <div className={styles.infoHead} data-aos="fade">
              <div className={styles.stepsIcon}>
                <img src="/assets/action.png" alt="Ações" />
              </div>
            </div>
          </li>
          <li id="listen">
            <div className={styles.infoHead} data-aos="fade">
              <div className={styles.stepsIcon}>
                <img src="/assets/diagnostics.png" alt="Monitoramento" />
              </div>
            </div>

            <div className={styles.infoBody} data-aos="zoom-in-up">
              <div className={styles.stepsTitle}>
                <h3>Monitoramento</h3>
                Manutenção da conformidade
              </div>
              <div className={styles.textBox}>
                <h3>
                  Após adequar e colocar sua empresa nos trilhos da LGPD, é
                  fundamental o monitoramento para manutenção da conformidade.
                </h3>
                <p>
                  Esta fase reflete o processo de manutenção da conformidade com
                  a LGPD. O intuito é acompanhar o processo de implantação das
                  atividades propostas no plano de ação e ao seu término iniciar
                  o segundo ciclo da adequação:
                </p>
                <ul>
                  <li>
                    <p>
                      Pensar em novos processos e/ou produtos da empresa com
                      foco na privacidade desde a sua concepção (privacy by
                      design / by default).
                    </p>
                  </li>
                  <li>
                    <p>
                      Monitorar se os processos já mapeados demandam de novos
                      ajustes e/ou adaptações;
                    </p>
                  </li>
                  <li>
                    <p>
                      Acompanhar a execução do plano de ação e lançar novas
                      demandas para execução de seu segundo ciclo;
                    </p>
                  </li>
                  <li>
                    <p>
                      Registrar e a atender as demandas dos titulares de dados;
                    </p>
                  </li>
                  <li>
                    <p>
                      Ficar atento às novidades da legislação e novas normativas
                      da sua área de atuação.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div className="ballsLC"></div>
        <div className="ballsLO"></div>
      </div>
    </>
  )
}

export default StepsPage
