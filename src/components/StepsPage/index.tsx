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
          {/* <li>
            <div className={styles.infoHead} data-aos="fade">
              <div className={styles.stepsIcon}>
                <img src="/assets/diagnostics.png" alt="Diagnósticos" />
              </div>
            </div>
            <div className={styles.infoBody} data-aos="zoom-in-up">
              <div className={styles.stepsTitle}>
                <h3>Diagnóstico</h3>
                Inicio de jornada
              </div>
              <div className={styles.textBox}>
                <h3>Este é o início da caminhada rumo à adequação da LGDP.</h3>
                <p>
                  Esta fase é fundamental para que sejam colhidos os melhores
                  resultados no final do projeto. É neste momento em que a
                  empresa faz uma análise de 360º tanto do seu ambiente quanto
                  dos seus recursos.
                </p>
                <p>
                  Neste momento os sócios, seus colaboradores e todos aqueles
                  que de alguma forma estão envolvidos com o cotidiano da
                  empresa tomam consciência da importância da LGPD para o
                  negócio.
                </p>
                <p>
                  O resultado desta fase servirá de base para todas as outras
                  desta incrível caminhada.
                </p>
              </div>
            </div>
          </li> */}
          <li>
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
          <li>
            <div className={styles.infoHead} data-aos="fade">
              <div className={styles.stepsIcon}>
                <img src="/assets/risks.png" alt="Análise de riscos" />
              </div>
            </div>

            <div className={styles.infoBody} data-aos="zoom-in-up">
              <h3>Análise de riscos</h3>
              Criação de estratégias para mitigá-los
              <div className={styles.textBox}>
                <h3>
                  Neste ponto, já ultrapassamos metade da nossa caminhada,
                  portanto é fazer a lição de casa e garantir o sucesso.
                </h3>
                <p>
                  A análise de riscos nada mais é do que mapear tudo aquilo que
                  pode gerar algum possível problema futuro para a empresa. Ou
                  seja, tirado o raio-X nas etapas anteriores, basta entender o
                  que se tornará um risco, qual sua gravidade, como e se é
                  viável mitigá-lo.
                </p>
                <p>
                  Com a lição feita, agora é hora de criar as ações necessárias
                  para entrar de fato na reta final do processo!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.infoBody} data-aos="zoom-in-up">
              <h3>Ações</h3>
              Mão na massa
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
                  para a geração do Relatório de Impacto à Proteção de Dados,
                  requisito obrigatório para o processo de adequação da LGPD.
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
          <li>
            <div className={styles.infoHead} data-aos="fade">
              <div className={styles.stepsIcon}>
                <img src="/assets/action.png" alt="Monitoramento" />
              </div>
            </div>

            <div className={styles.infoBody} data-aos="zoom-in-up">
              <h3>Monitoramento</h3>
              Manutenção da LGPD
              <div className={styles.textBox}>
                <h3>
                  Texto para monitorameto que ainda não enviado, mas podemos
                  colocar.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est.
                </p>
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
