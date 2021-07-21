import React from 'react'

function OurNumbers() {
  return (
    <>
      <section className="ourNumbers">
        <div className="ballsColored"></div>
        <div className="ballsOutlined"></div>
        <h2>
          Conheça mais da Lgpd<span>map</span>
        </h2>

        <ul>
          <li>
            <h6>mais de</h6>
            <h5>
              30<span>mil</span>
            </h5>
            <p>Clientes ativos</p>
          </li>
          <li>
            <h6>mais de</h6>
            <h5>
              200<span>mil</span>
            </h5>
            <p>Empresas adequadas à LGPD</p>
          </li>
          <li>
            <h6>mais de</h6>
            <h5>
              650<span>mil</span>
            </h5>
            <p>Volumes de dados mapeados</p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default OurNumbers
