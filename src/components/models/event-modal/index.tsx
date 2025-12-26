import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

import { Event, HomeView } from '@/payload-types'
import { Button } from '@/components/ui/button'
import styles from './event-model.module.scss'
import { getMedia } from '@/library/helpers'

interface IProps {
  onSlide: (index: number) => void
  onSelect: (e: Event) => void
  events: HomeView['events']
  initialSlide: number
  onClose: () => void
}

export const EventModal = ({ events, onClose, onSelect, initialSlide, onSlide }: IProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <div className={styles.swiper_slider}>
      <Swiper
        loop={true}
        slidesPerView={1}
        className={styles.swiper}
        initialSlide={initialSlide}
        onSlideChange={(e) => onSlide(e.activeIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {events.events_list.map((event, index) => {
          const image = getMedia(event.image)

          console.log(event)

          return (
            <SwiperSlide className={styles.slide} key={index}>
              <div className={styles.mobile_header}>
                <h1 className={styles.title}>{event.title}</h1>

                <Button onClick={() => onClose()} variant="icon">
                  <X className={styles.menu_icon} />
                </Button>
              </div>

              <div className={styles.banner}>
                <Image src={image.url} alt={image.url} loading="eager" height={900} width={1024} />
              </div>

              <div className={styles.content_info}>
                <div className={styles.top}>
                  <div className={styles.title}>
                    <span>{event.title}</span>

                    <Button onClick={onClose} variant="icon">
                      <X className={styles.menu_icon} />
                    </Button>
                  </div>
                  <p className={styles.text}>{event.text}</p>
                </div>

                <div className={styles.packages}>
                  {event.packages.map((item, index) => {
                    return (
                      <Button onClick={() => onSelect((item.event as Event) || '')} key={index}>
                        <span>{item.label}</span>

                        <Image src="/icons/arrow-right.svg" alt="icon" width={24} height={24} />
                      </Button>
                    )
                  })}
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className={styles.navigation}>
        <Button onClick={() => swiperInstance?.slidePrev()} variant="icon">
          <Image src="/icons/left-arrow.svg" alt="left arrow" width={12} height={24} />
        </Button>

        <Button onClick={() => swiperInstance?.slideNext()} variant="icon">
          <Image src="/icons/right-arrow.svg" alt="right arrow" width={12} height={24} />
        </Button>
      </div>
    </div>
  )
}
