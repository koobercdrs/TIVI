import { BoatCard } from './card'

import styles from './boats.module.scss'

export const Boats = () => {
  return (
    <section id="BOAT-TOURS" className={styles.section}>
      <h1 className={styles.title}>Experience Boat Tours</h1>

      <div className={styles.wrapper}>
        <BoatCard side="right" />

        <BoatCard side="left" />
      </div>
    </section>
  )
}
