import React from 'react'
import Fade from 'react-reveal/Fade'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

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
              <Fade>
                <CountUp end={30} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </Fade>
              mil
            </h5>
            <p>Clientes ativos</p>
          </li>
          <li>
            <h6>mais de</h6>
            <h5>
              <Fade>
                <CountUp end={200} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </Fade>
              mil
            </h5>
            <p>Empresas adequadas à LGPD</p>
          </li>
          <li>
            <h6>mais de</h6>
            <h5>
              <Fade>
                <CountUp end={650} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </Fade>
              mil
            </h5>
            <p>Volumes de dados mapeados</p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default OurNumbers
