import React from 'react'
import ImageSlider from './ImageSlider'

import styles from './styles.module.scss'

function Testimonials(): JSX.Element {
  return (
    <section className={styles.testimonials}>
      <div className={styles.mainSlider}>
        <div className={styles.boxSlider}>
          <h2>Depoimentos de quem automatizou o processo LGPD.</h2>
          <ImageSlider />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
