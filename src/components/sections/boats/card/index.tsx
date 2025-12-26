import Image from 'next/image'

import { Button } from '@/components/ui/button'

import styles from './card.module.scss'
import { HomeView } from '@/payload-types'
import { getMedia } from '@/library/helpers'

interface IProps {
  svg: string
  side: 'left' | 'right'
  content: HomeView['boat_tours_section']['boat_tours'][number]
}

export const BoatCard = ({ side, content, svg }: IProps) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.wrapper} ${styles[side]} container`}>
        <Image
          src={getMedia(content.image).url}
          className={styles.banner}
          height={480}
          width={822}
          alt="boat"
        />

        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <div className={styles.top}>
              <h1 className={styles.title}>{content.name}</h1>

              <div className={styles.info}>
                <div className={styles.info_card}>
                  <Image src="/icons/people.svg" alt="icon" width={24} height={24} />
                  <span>{content.details.people_count}</span>
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
                {content.full_rental.list.map((obj, index) => (
                  <p key={index} className={styles.text}>
                    {obj.item}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.about}>
              <h1 className={styles.title}>{content.group_tour.title}</h1>

              <div className={styles.about_content}>
                {content.group_tour.tour_details.map((item, index) => {
                  var icon = '/icons/day.svg'

                  if (item.icon === 'day') {
                    icon = '/icons/day.svg'
                  } else if (item.icon === 'night') {
                    icon = '/icons/night.svg'
                  } else if (item.icon === 'money') {
                    icon = '/icons/money.svg'
                  } else if (item.icon === 'time') {
                    icon = '/icons/time.svg'
                  }

                  return (
                    <div key={index} className={styles.card}>
                      <Image src={icon} alt="icon" width={24} height={24} />
                      <span>{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <a href="#CONTACT">
              <Button>{content.primary_btn}</Button>
            </a>
          </div>

          <Image
            className={styles.content_wrapper_bg}
            src={svg}
            alt="svg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
