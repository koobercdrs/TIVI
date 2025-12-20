import { Button } from '@/components/ui/button'
import Image from 'next/image'

import styles from './events.module.scss'

export const Events = () => {
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
        <h1 className={styles.title}>Make Your Drean Event Come True</h1>

        <div className={styles.wrapper}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

const Card = () => {
  return (
    <div className={styles.card}>
      <Image draggable={false} src="/images/event-img.png" alt="event" width={384} height={320} />

      <h1 className={styles.title}>Birthday Party</h1>

      <p className={styles.text}>
        Celebrate in style with riverside vibes, great music, and memorable moments. TIVI is your
        ideal birthday venue.
      </p>

      <Button>See Details</Button>
    </div>
  )
}
