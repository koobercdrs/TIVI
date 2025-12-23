import { BoatCard } from './card'

import { HomeView } from '@/payload-types'
import styles from './boats.module.scss'

export const Boats = ({ content }: { content: HomeView['boat_tours_section'] }) => {
  return (
    <div id="BOAT_TOURS">
      <section className={styles.section}>
        <h1 className={styles.title}>{content.name}</h1>

        <div className={styles.wrapper}>
          {content.boat_tours.map((item, index) => (
            <BoatCard key={index} content={item} side={item.side} />
          ))}
        </div>
      </section>
    </div>
  )
}
