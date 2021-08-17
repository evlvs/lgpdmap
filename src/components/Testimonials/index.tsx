import React from 'react'
import ImageSlider from './ImageSlider'

import styles from './styles.module.scss'

function Testimonials(): JSX.Element {
  return (
    <section className={styles.testimonials}>
      <div className={styles.mainSlider}>
        <div className={styles.boxSlider}>
          <h2>
            Depoimentos que quem já implementou a LGPD utilizando o Lgpdmap
          </h2>
          <ImageSlider />
        </div>
      </div>
      <img
        src="./assets/peoplestar.png"
        alt="Depoimentos"
        className="peopleStar"
      />
    </section>
  )
}

export default Testimonials
