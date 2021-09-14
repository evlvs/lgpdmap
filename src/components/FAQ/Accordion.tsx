import React, { useState } from 'react'
import { Plus, Minus } from 'react-feather'
import parse from 'html-react-parser'

import { Data } from './Data'
import styles from './styles.module.scss'

const Accordion: React.FC = () => {
  const [active, setActive] = useState(null)

  const toggle = index => {
    if (active === index) {
      return setActive(null)
    }
    setActive(index)
  }
  return (
    <div className={styles.accordion}>
      {Data.map((accordion, index) => {
        return (
          <div
            className={styles.accordionContent}
            onClick={() => toggle(index)}
            key={index}
          >
            <div className={styles.accordionHead}>
              <h3>{accordion.question}</h3>
              {active === index ? <Minus /> : <Plus />}
            </div>
            <div
              className={`${
                active === index
                  ? styles.accordionBody + ' ' + styles.active
                  : styles.accordionBody
              }`}
            >
              {parse(accordion.answer)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
