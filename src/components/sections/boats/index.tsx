import { BoatCard } from './card'

import styles from './boats.module.scss'
import { HomeView } from '@/payload-types'
import { Fragment } from 'react'

export const Boats = ({ content }: { content: HomeView['boat_tours'] }) => {
  return (
    <Fragment>
      {content.map((item) => (
        <section id="BOAT-TOURS" className={styles.section}>
          <h1 className={styles.title}>{item.name}</h1>

          <div className={styles.wrapper}>
            <BoatCard content={item} side="right" />

            <BoatCard content={item} side="left" />
          </div>
        </section>
      ))}
    </Fragment>
  )
}
