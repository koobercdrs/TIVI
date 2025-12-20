'use client'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Image from 'next/image'

import styles from './about.module.scss'
import { Button } from '@/components/ui/button'
import { HomeView, Media } from '@/payload-types'
import { getMedia } from '@/library/payload'

export const About = ({ content }: { content: HomeView['about'] }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <section className={styles.section}>
      <Swiper
        loop
        slidesPerView={1}
        className={styles.swiper}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {content.images.map((img, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <Image src={getMedia(img.image as Media).url} alt="hero img" fill loading="eager" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.content} container`}>
        <h1 className={styles.left_text}>{content.title}</h1>

        <h1 className={styles.right_text}>{content.subtitle}</h1>
      </div>

      <div className={`${styles.tablet} container`}>
        <h1>
          {content.title} {content.subtitle}
        </h1>

        <div className={styles.navigation}>
          <Button onClick={() => swiperInstance?.slidePrev()} variant="icon">
            <Image src="/icons/left-arrow.svg" alt="left arrow" width={12} height={24} />
          </Button>

          <Button onClick={() => swiperInstance?.slideNext()} variant="icon">
            <Image src="/icons/right-arrow.svg" alt="right arrow" width={12} height={24} />
          </Button>
        </div>
      </div>
    </section>
  )
}
