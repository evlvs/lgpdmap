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
    <div className={styles.plansPage}>
      <h2>
        Planos Lgpd<span>map</span>
      </h2>
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
        Diga adeus às planilhas ou ferramentas complexas, com recursos
        desnecessários. Implemente a LGPD de forma simples e centralizada, com
        uma só ferramenta.
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
                        ? plans.value.basic
                        : plans.value.basic * 12}
                    </strong>
                    <span>{radioBtn === 'month' ? '/mês' : '/ano'}</span>
                  </p>

                  <ul>
                    <li>
                      <CheckCircle /> Cadastramento de até{' '}
                      <strong>{plans.CNPJAmount.basic} CNPJ</strong>
                    </li>
                    <li>
                      <CheckCircle /> Gerenciamento completo com{' '}
                      <strong>{plans.userAmount.basic} usuário</strong>
                    </li>
                    <li>
                      <CheckCircle /> Relatório de impacto à
                      <strong> proteção de dados</strong>
                    </li>
                  </ul>

                  <Link href="#basicPlan">
                    <button>COMEÇAR JÁ</button>
                  </Link>

                  <Link href="#basicPlan">
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
                        ? plans.value.intermediate
                        : plans.value.intermediate * 12}
                    </strong>
                    <span>{radioBtn === 'month' ? '/mês' : '/ano'}</span>
                  </p>

                  <ul>
                    <li>
                      <CheckCircle /> Cadastramento de até{' '}
                      <strong>{plans.CNPJAmount.intermediate} CNPJ</strong>
                    </li>
                    <li>
                      <CheckCircle /> Gerenciamento completo com{' '}
                      <strong>{plans.userAmount.intermediate} usuário</strong>
                    </li>
                    <li>
                      <CheckCircle /> Relatório de impacto à
                      <strong> proteção de dados</strong>
                    </li>
                  </ul>

                  <Link href="#intermediatePlan">
                    <button>COMEÇAR JÁ</button>
                  </Link>

                  <Link href="#intermediatePlan">
                    <a>Faça a comparação</a>
                  </Link>
                </li>

                <li className={styles.advancedPlan}>
                  <h6>{plans.plansType.advanced}</h6>
                  <p>
                    R$
                    <strong>
                      {radioBtn === 'month'
                        ? plans.value.advanced
                        : plans.value.advanced * 12}
                    </strong>
                    <span>{radioBtn === 'month' ? '/mês' : '/ano'}</span>
                  </p>

                  <ul>
                    <li>
                      <CheckCircle /> Cadastramento de até{' '}
                      <strong>{plans.CNPJAmount.advanced} CNPJ</strong>
                    </li>
                    <li>
                      <CheckCircle /> Gerenciamento completo com{' '}
                      <strong>{plans.userAmount.advanced} usuário</strong>
                    </li>
                    <li>
                      <CheckCircle /> Relatório de impacto à
                      <strong> proteção de dados</strong>
                    </li>
                  </ul>

                  <Link href="#advancedPlan">
                    <button>COMEÇAR JÁ</button>
                  </Link>

                  <Link href="#advancedPlan">
                    <a>Faça a comparação</a>
                  </Link>
                </li>

                <li className={styles.platinumPlan}>
                  <h6>{plans.plansType.platinum}</h6>
                  <p>
                    R$
                    <strong>
                      {radioBtn === 'month'
                        ? plans.value.platinum
                        : plans.value.platinum * 12}
                    </strong>
                    <span>{radioBtn === 'month' ? '/mês' : '/ano'}</span>
                  </p>

                  <ul>
                    <li>
                      <CheckCircle /> Cadastramento de até{' '}
                      <strong>{plans.CNPJAmount.platinum} CNPJ</strong>
                    </li>
                    <li>
                      <CheckCircle /> Gerenciamento completo com{' '}
                      <strong>{plans.userAmount.platinum} usuário</strong>
                    </li>
                    <li>
                      <CheckCircle /> Relatório de impacto à
                      <strong> proteção de dados</strong>
                    </li>
                  </ul>

                  <Link href="#platinumPlan">
                    <button>COMEÇAR JÁ</button>
                  </Link>

                  <Link href="#platinumPlan">
                    <a>Faça a comparação</a>
                  </Link>
                </li>
              </ul>
            </div>
            <h2>
              A LGPD<span>map tem um </span> plano ideal para você
            </h2>
            <table key={index} className={styles.tableInfo}>
              <tr>
                <th>{plans.plansType.title}</th>
                <th>{plans.plansType.basic}</th>
                <th>{plans.plansType.intermediate}</th>
                <th>{plans.plansType.advanced}</th>
                <th>{plans.plansType.platinum}</th>
              </tr>
              <tr>
                <td>{plans.CNPJAmount.title}</td>
                <td>{plans.CNPJAmount.basic}</td>
                <td>{plans.CNPJAmount.intermediate}</td>
                <td>{plans.CNPJAmount.advanced}</td>
                <td>{plans.CNPJAmount.platinum}</td>
              </tr>
              <tr>
                <td>{plans.userAmount.title}</td>
                <td>{plans.userAmount.basic}</td>
                <td>{plans.userAmount.intermediate}</td>
                <td>{plans.userAmount.advanced}</td>
                <td>{plans.userAmount.platinum}</td>
              </tr>
              <tr>
                <td>{plans.companyMapping.title}</td>
                <td>
                  {plans.companyMapping.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.companyMapping.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.companyMapping.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.companyMapping.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.dataMapping.title}</td>
                <td>
                  {plans.dataMapping.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataMapping.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataMapping.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataMapping.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.dataManagement.title}</td>
                <td>
                  {plans.dataManagement.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataManagement.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataManagement.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataManagement.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.riskAnalysis.title}</td>
                <td>
                  {plans.riskAnalysis.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.riskAnalysis.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.riskAnalysis.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.riskAnalysis.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.legitimateInterestTest.title}</td>
                <td>
                  {plans.legitimateInterestTest.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.legitimateInterestTest.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.legitimateInterestTest.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.legitimateInterestTest.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.actions.title}</td>
                <td>
                  {plans.actions.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.actions.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.actions.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.actions.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.dataProtection.title}</td>
                <td>
                  {plans.dataProtection.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataProtection.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataProtection.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dataProtection.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.dashboard.title}</td>
                <td>
                  {plans.dashboard.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dashboard.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dashboard.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.dashboard.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.EAD.title}</td>
                <td>
                  {plans.EAD.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.EAD.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.EAD.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.EAD.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.processTemplate.title}</td>
                <td>
                  {plans.processTemplate.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.processTemplate.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.processTemplate.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.legislation.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.customReports.title}</td>
                <td>
                  {plans.customReports.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customReports.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customReports.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customReports.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.IncidentManagement.title}</td>
                <td>
                  {plans.IncidentManagement.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.IncidentManagement.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.IncidentManagement.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.IncidentManagement.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.semiannualAudit.title}</td>
                <td>
                  {plans.semiannualAudit.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.semiannualAudit.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.semiannualAudit.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.semiannualAudit.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.customizeForms.title}</td>
                <td>
                  {plans.customizeForms.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customizeForms.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customizeForms.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customizeForms.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
              <tr>
                <td>{plans.customizeLogo.title}</td>
                <td>
                  {plans.customizeLogo.basic === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customizeLogo.intermediate === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customizeLogo.advanced === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
                <td>
                  {plans.customizeLogo.platinum === true ? (
                    <CheckCircle color="#3CCF8E" />
                  ) : (
                    <XCircle color="#CF3E27" />
                  )}
                </td>
              </tr>
            </table>
          </>
        )
      })}
    </div>
  )
}

export default PlansPage
