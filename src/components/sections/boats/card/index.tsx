import Image from 'next/image'

import { Button } from '@/components/ui/button'

import styles from './card.module.scss'

interface IProps {
  side: 'left' | 'right'
}

export const BoatCard = ({ side }: IProps) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.wrapper} ${styles[side]} container`}>
        <Image
          className={styles.banner}
          src="/images/boat.png"
          height={480}
          width={822}
          alt="boat"
        />

        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.title}>The Dolphin</h1>

            <div className={styles.info}>
              <div className={styles.info_card}>
                <Image src="/icons/people.svg" alt="icon" width={24} height={24} />
                <span>34 People</span>
              </div>

              <div className={styles.info_card}>
                <Image src="/icons/box.svg" alt="icon" width={24} height={24} />
                <span>Kids Under 6 are Free</span>
              </div>
            </div>

            <p className={styles.text}>
              The most comfortable and safe boat on the Mtkvari, perfect for sightseeing, events,
              and special moments. Its well-designed space, smooth ride, and river views create an
              experience where every minute feels special.
            </p>
          </div>

          <div className={styles.rental}>
            <h1 className={styles.title}>Full Boat Rental :</h1>

            <div className={styles.rental_content}>
              <p className={styles.text}>15 minute tour - 150 ₾ (Half Tour)</p>
              <p className={styles.text}>30 minute tour - 300 ₾ (Full Tour)</p>
            </div>
          </div>

          <div className={styles.about}>
            <h1 className={styles.title}>Group Tour - Dolphin ( Minimum: 5 guests required ) :</h1>

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
