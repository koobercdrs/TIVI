import { IEvent } from '@/components/sections/events/card'
import { Button } from '@/components/ui/button'
import { getMedia } from '@/library/helpers'
import Image from 'next/image'

import styles from './event-model.module.scss'
import { X } from 'lucide-react'

interface IProps {
  event: IEvent
  onClose: () => void
}

export const EventModal = ({ event, onClose }: IProps) => {
  const image = getMedia(event.image)

  return (
    <div className={styles.wrapper}>
      <div className={styles.mobile_header}>
        <h1 className={styles.title}>{event.title}</h1>

        <Button onClick={() => onClose()} variant="icon">
          <X className={styles.menu_icon} />
        </Button>
      </div>

      <Image
        className={styles.banner}
        src={image.url}
        alt={image.url}
        loading="eager"
        height={500}
        width={480}
      />

      <div className={styles.content}>
        <div className={styles.content_info}>
          <div className={styles.top}>
            <h1 className={styles.title}>{event.title}</h1>
            <p className={styles.text}>{event.text}</p>
          </div>

          <div className={styles.packages}>
            {event.packages.map((item, index) => {
              return (
                <Button key={index}>
                  <span>{item.label}</span>

                  <Image src="/icons/arrow-right.svg" alt="icon" width={24} height={24} />
                </Button>
              )
            })}
          </div>
        </div>

        <div className={styles.navigation}>
          <Button variant="icon">
            <Image src="/icons/left-arrow.svg" alt="left arrow" width={12} height={24} />
          </Button>

          <Button variant="icon">
            <Image src="/icons/right-arrow.svg" alt="right arrow" width={12} height={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}
