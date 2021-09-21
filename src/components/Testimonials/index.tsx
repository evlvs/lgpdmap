import React from 'react'
import ImageSlider from './ImageSlider'

import styles from './styles.module.scss'

function Testimonials(): JSX.Element {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.mainSlider}>
        <div className={styles.boxSlider}>
          <h2>
            Depoimentos de quem já se adequou à <strong>LGPD</strong> utilizando
            o <strong>Lgpdmap</strong>
          </h2>
          <ImageSlider />
        </div>
      </div>
      <img
        src="./assets/peoplestar.png"
        alt="Depoimentos"
        className={styles.peopleStar}
      />
    </section>
  )
}

export default Testimonials
