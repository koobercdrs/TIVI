import Image from 'next/image'

import styles from './events.module.scss'
import { events } from '@/data'
import { Card } from './card'
import { HomeView } from '@/payload-types'

export const Events = ({ content }: { content: HomeView['events'] }) => {
  return (
    <section id="EVENTS" className={styles.section}>
      <Image
        className={styles.background}
        src="/images/events-bg.png"
        draggable={false}
        loading="eager"
        alt="event"
        fill
      />

      <div className={`${styles.content_wrapper} container`}>
        <h1 className={styles.title}>{content.section_title}</h1>

        <div className={styles.wrapper}>
          {events.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
