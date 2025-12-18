'use client'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Image from 'next/image'

import styles from './about.module.scss'
import { Button } from '@/components/ui/button'

const imgs = ['/images/hero-img-1.jpg', '/images/hero-img-2.jpg']

export const About = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <section className={styles.section}>
      <Swiper
        loop
        slidesPerView={1}
        className={styles.swiper}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {imgs.map((img, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <Image src={img} alt="hero img" fill loading="eager" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.content} container`}>
        <h1 className={styles.left_text}>
          As night falls, TIVI comes alive with music, dancing, and unforgettable celebrations.
        </h1>

        <h1 className={styles.right_text}>
          Enjoy refined riverside dining at TIVI, where calm ambiance meets exceptional cuisine and
          stunning Mtkvari views.
        </h1>
      </div>

      <div className={`${styles.tablet} container`}>
        <h1>
          Enjoy refined riverside dining at TIVI, where calm ambiance meets exceptional cuisine and
          stunning Mtkvari views. As night falls, TIVI comes alive with music, dancing, and
          unforgettable celebrations.
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
