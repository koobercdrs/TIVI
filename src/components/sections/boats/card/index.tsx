import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { HomeView, Media } from '@/payload-types'
import { getMedia } from '@/library/payload'
import styles from './card.module.scss'

interface IProps {
  side: 'left' | 'right'
  content: HomeView['boat_tours'][number]
}

export const BoatCard = ({ side, content }: IProps) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.wrapper} ${styles[side]} container`}>
        <Image
          src={getMedia(content.image as Media).url}
          className={styles.banner}
          height={480}
          width={822}
          alt="boat"
        />

        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.title}>{content.name}</h1>

            <div className={styles.info}>
              <div className={styles.info_card}>
                <Image src="/icons/people.svg" alt="icon" width={24} height={24} />
                <span>{content.details.people_count} People</span>
              </div>

              <div className={styles.info_card}>
                <Image src="/icons/box.svg" alt="icon" width={24} height={24} />
                <span>{content.details.gift}</span>
              </div>
            </div>

            <p className={styles.text}>{content.desc}</p>
          </div>

          <div className={styles.rental}>
            <h1 className={styles.title}>{content.full_rental.title}</h1>

            <div className={styles.rental_content}>
              {content.full_rental.list.map((obj) => (
                <p className={styles.text}>{obj.item}</p>
              ))}
            </div>
          </div>

          <div className={styles.about}>
            <h1 className={styles.title}>{content.group_tour.title}</h1>

            <div className={styles.about_content}>
              <div className={styles.card}>
                <Image src="/icons/day.svg" alt="icon" width={24} height={24} />
                <span>Day - 17:00</span>
              </div>
              <div className={styles.card}>
                <Image src="/icons/night.svg" alt="icon" width={24} height={24} />
                <span>Night - 21:00</span>
              </div>
              <div className={styles.card}>
                <Image src="/icons/money.svg" alt="icon" width={24} height={24} />
                <span>30₾/Per Guest</span>
              </div>
              <div className={styles.card}>
                <Image src="/icons/time.svg" alt="icon" width={24} height={24} />
                <span>30 Minute</span>
              </div>
            </div>
          </div>

          <Button>Make a Reservation</Button>
        </div>
      </div>
    </section>
  )
}
