import React, { useState } from 'react'
import { PlansData } from './PlansData'
import styles from './styles.module.scss'
import { CheckCircle, XCircle } from 'react-feather'
import Link from 'next/link'

function PlansPage(): JSX.Element {
  const [radioBtn, setRadioBtn] = useState('month')

  function refreshPrice(e) {
    const { value } = e.target
    setRadioBtn(value)
  }

  return (
    <>
      <div className="ballsRC"></div>
      <div className="ballsRO"></div>
      <div className="ballsLC"></div>
      <div className="ballsLO"></div>

      <div className={styles.plansPage}>
        <h2>Planos Lgpdmap</h2>
        <form>
          <div className="radio-group">
            <input
              type="radio"
              id="month"
              name="selector"
              value="month"
              onChange={refreshPrice}
            />
            <label htmlFor="month">Mensal</label>
            <input
              type="radio"
              id="anual"
              name="selector"
              value="anual"
              onChange={refreshPrice}
            />
            <label htmlFor="anual">Anual</label>
          </div>
        </form>

        <p>
          Diga adeus às planilhas ou ferramentas complexas, recursos
          desnecessários. Adeque sua empresa à <strong>LGPD</strong> de forma
          simples e centralizada, com uma só ferramenta.
        </p>

        {PlansData.map((plans, index) => {
          return (
            <>
              <div>
                <ul className={styles.plans}>
                  <li className={styles.basicPlan}>
                    <h6>{plans.plansType.basic}</h6>
                    <p>
                      R$
                      <strong>
                        {radioBtn === 'month'
                          ? plans.valueMonth.basic
                          : plans.valueAnual.basic}
                      </strong>
                      <span>/mês</span>
                    </p>

                    <ul>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Cadastramento de até{' '}
                        <strong>{plans.CNPJAmount.basic} CNPJ</strong>
                      </li>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Gerenciamento completo
                        com <strong>{plans.userAmount.basic} usuários</strong>
                      </li>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Relatório de Impacto à
                        <strong> Proteção de Dados (RIPD)</strong>
                      </li>
                    </ul>

                    <Link href="#basicPlan">
                      <button>COMECE JÁ</button>
                    </Link>

                    <Link href="#compare">
                      <a>Faça a comparação</a>
                    </Link>
                  </li>

                  <li className={styles.intermediatePlan}>
                    <div className={styles.recommended}>RECOMENDADO</div>
                    <h6>{plans.plansType.intermediate}</h6>
                    <p>
                      R$
                      <strong>
                        {radioBtn === 'month'
                          ? plans.valueMonth.intermediate
                          : plans.valueAnual.intermediate}
                      </strong>
                      <span>/mês</span>
                    </p>

                    <ul>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Cadastramento de até{' '}
                        <strong>{plans.CNPJAmount.intermediate} CNPJs</strong>
                      </li>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Gerenciamento completo
                        com{' '}
                        <strong>
                          {plans.userAmount.intermediate} usuários
                        </strong>
                      </li>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Relatório de Impacto à
                        <strong> Proteção de Dados (RIPD)</strong>
                      </li>
                    </ul>

                    <Link href="#intermediatePlan">
                      <button>COMECE JÁ</button>
                    </Link>

                    <Link href="#compare">
                      <a>Faça a comparação</a>
                    </Link>
                  </li>

                  <li className={styles.advancedPlan}>
                    <h6>{plans.plansType.advanced}</h6>
                    <p>
                      R$
                      <strong>
                        {radioBtn === 'month'
                          ? plans.valueMonth.advanced
                          : plans.valueAnual.advanced}
                      </strong>
                      <span>/mês</span>
                    </p>

                    <ul>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Cadastramento de até
                        <strong>{plans.CNPJAmount.advanced} CNPJs</strong>
                      </li>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Gerenciamento completo
                        com{' '}
                        <strong>{plans.userAmount.advanced} usuários</strong>
                      </li>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Relatório de Impacto à
                        <strong> Proteção de Dados (RIPD)</strong>
                      </li>
                    </ul>

                    <Link href="#advancedPlan">
                      <button>COMECE JÁ</button>
                    </Link>

                    <Link href="#compare">
                      <a>Faça a comparação</a>
                    </Link>
                  </li>

                  <li className={styles.platinumPlan}>
                    <h6>{plans.plansType.platinum}</h6>
                    <p>
                      R$
                      <strong>
                        {radioBtn === 'month'
                          ? plans.valueMonth.platinum
                          : plans.valueAnual.platinum}
                      </strong>
                      <span>/mês</span>
                    </p>

                    <ul>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Cadastramento de até{' '}
                        <strong>{plans.CNPJAmount.platinum} CNPJs</strong>
                      </li>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Gerenciamento completo
                        com{' '}
                        <strong>{plans.userAmount.platinum} usuários</strong>
                      </li>
                      <li>
                        <CheckCircle color="#3CCF8E" /> Relatório de Impacto à
                        <strong> Proteção de Dados (RIPD)</strong>
                      </li>
                    </ul>

                    <Link href="#platinumPlan">
                      <button>COMECE JÁ</button>
                    </Link>

                    <Link href="#compare">
                      <a>Faça a comparação</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.bglines}></div>

              <table key={index} className={styles.tableInfo} id="compare">
                <caption>
                  <h2>
                    LGPD<span>map tem um </span> plano ideal para você
                  </h2>
                </caption>

                <thead>
                  <tr>
                    <th scope="col">{plans.plansType.title}</th>
                    <th scope="col">{plans.plansType.basic}</th>
                    <th scope="col">{plans.plansType.intermediate}</th>
                    <th scope="col">{plans.plansType.advanced}</th>
                    <th scope="col">{plans.plansType.platinum}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label={plans.plansType.title}>
                      <strong>CNPJs</strong>
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.CNPJAmount.basic}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.CNPJAmount.intermediate}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.CNPJAmount.advanced}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.CNPJAmount.platinum}
                    </td>
                  </tr>
                  <tr>
                    <td data-label={plans.plansType.title}>
                      Multi <strong>Usuários</strong>
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.userAmount.basic}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.userAmount.intermediate}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.userAmount.advanced}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.userAmount.platinum}
                    </td>
                  </tr>
                  {/* <tr>
                  <td data-label={plans.plansType.basic}>{plans.companyMapping.title}</td>
                  <td data-label={plans.plansType.basic}>
                    {plans.companyMapping.basic === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.companyMapping.intermediate === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.companyMapping.advanced === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.companyMapping.platinum === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                </tr> */}
                  <tr>
                    <td data-label={plans.plansType.title}>
                      <strong>Mapeamento</strong> de Dados
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.dataMapping.basic === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.dataMapping.intermediate === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.dataMapping.advanced === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.dataMapping.platinum === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td data-label={plans.plansType.title}>
                      <strong>Mapeamento</strong> dos Fluxos de Dados
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.dataManagement.basic === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.dataManagement.intermediate === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.dataManagement.advanced === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.dataManagement.platinum === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td data-label={plans.plansType.title}>
                      <strong>Análise</strong> de Riscos
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.riskAnalysis.basic === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.riskAnalysis.intermediate === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.riskAnalysis.advanced === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.riskAnalysis.platinum === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td data-label={plans.plansType.title}>
                      Teste de <strong>legítimo Interesse</strong>
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.legitimateInterestTest.basic === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.legitimateInterestTest.intermediate === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.legitimateInterestTest.advanced === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.legitimateInterestTest.platinum === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td data-label={plans.plansType.title}>
                      <strong>Gestão</strong> Inividual dos Dados
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.actions.basic === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.actions.intermediate === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.actions.advanced === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.actions.platinum === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td data-label={plans.plansType.title}>
                      Relatório de Impacto à{' '}
                      <strong>Proteção de Dados (RIPD)</strong>
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.dataProtection.basic === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.dataProtection.intermediate === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.dataProtection.advanced === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.dataProtection.platinum === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td data-label={plans.plansType.title}>
                      <strong>Dashboard</strong>
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.dashboard.basic === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.dashboard.intermediate === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.dashboard.advanced === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.dashboard.platinum === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                  </tr>
                  {/* <tr>
                  <td data-label={plans.plansType.basic}>{plans.EAD.title}</td>
                  <td data-label={plans.plansType.basic}>
                    {plans.EAD.basic === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.EAD.intermediate === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.EAD.advanced === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.EAD.platinum === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                </tr>
                <tr>
                  <td data-label={plans.plansType.basic}>{plans.processTemplate.title}</td>
                  <td data-label={plans.plansType.basic}>
                    {plans.processTemplate.basic === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.processTemplate.intermediate === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.processTemplate.advanced === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.processTemplate.platinum === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                </tr> */}
                  <tr>
                    <td data-label={plans.plansType.title}>
                      Relatório de <strong>Plano de Ações</strong>
                    </td>
                    <td data-label={plans.plansType.basic}>
                      {plans.customReports.basic === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.intermediate}>
                      {plans.customReports.intermediate === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.advanced}>
                      {plans.customReports.advanced === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                    <td data-label={plans.plansType.platinum}>
                      {plans.customReports.platinum === true ? (
                        <CheckCircle color="#3CCF8E" />
                      ) : (
                        <XCircle color="#CF3E27" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="plansBtn"></td>

                    <td className="plansBtn">
                      <a href="#basic">Comece já</a>
                    </td>

                    <td className="plansBtn">
                      <a href="#intermediate">Comece já</a>
                    </td>

                    <td className="plansBtn">
                      <a href="#advanced">Comece já</a>
                    </td>

                    <td className="plansBtn">
                      <a href="#platinum">Comece já</a>
                    </td>
                  </tr>
                  {/* <tr>
                  <td data-label={plans.plansType.basic}>{plans.IncidentManagement.title}</td>
                  <td data-label={plans.plansType.basic}>
                    {plans.IncidentManagement.basic === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.IncidentManagement.intermediate === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.IncidentManagement.advanced === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.IncidentManagement.platinum === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                </tr>
                <tr>
                  <td data-label={plans.plansType.basic}>{plans.semiannualAudit.title}</td>
                  <td data-label={plans.plansType.basic}>
                    {plans.semiannualAudit.basic === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.semiannualAudit.intermediate === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.semiannualAudit.advanced === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.semiannualAudit.platinum === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                </tr>
                <tr>
                  <td data-label={plans.plansType.basic}>{plans.customizeForms.title}</td>
                  <td data-label={plans.plansType.basic}>
                    {plans.customizeForms.basic === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.customizeForms.intermediate === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.customizeForms.advanced === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.customizeForms.platinum === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                </tr>
                <tr>
                  <td data-label={plans.plansType.basic}>{plans.customizeLogo.title}</td>
                  <td data-label={plans.plansType.basic}>
                    {plans.customizeLogo.basic === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.customizeLogo.intermediate === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.customizeLogo.advanced === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                  <td data-label={plans.plansType.basic}>
                    {plans.customizeLogo.platinum === true ? (
                      <CheckCircle color="#3CCF8E" />
                    ) : (
                      <XCircle color="#CF3E27" />
                    )}
                  </td>
                </tr> */}
                </tbody>
              </table>
            </>
          )
        })}
      </div>
    </>
  )
}

export default PlansPage
