'use client'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import styles from './hero.module.scss'

import { getMedia } from '@/library/helpers'
import { HomeView } from '@/payload-types'

import 'swiper/css'

export const Hero = ({ content }: { content: HomeView['hero'] }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.hero}>
      <Swiper
        loop
        slidesPerView={1}
        className={styles.swiper}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {content.images.map((img, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <Image src={getMedia(img.image).url} alt="hero img" fill priority />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.navigation} container`}>
        <button onClick={() => swiperInstance?.slidePrev()} className={styles.arrow}>
          <Image src="/icons/left-arrow.svg" alt="left arrow" width={12} height={24} />
        </button>

        <div className={styles.dots}>
          {content.images.map((_, index) => (
            <span
              key={index}
              onClick={() => swiperInstance?.slideToLoop(index)}
              className={activeIndex == index ? styles.active : ''}
            />
          ))}
        </div>

        <button onClick={() => swiperInstance?.slideNext()} className={styles.arrow}>
          <Image src="/icons/right-arrow.svg" alt="right arrow" width={12} height={24} />
        </button>
      </div>

      <div className={`${styles.wrapper} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>{content.title}</h1>

          <div className={styles.left}>
            <h1 className={styles.subtitle}>{content.subtitle}</h1>

            <div className={styles.btns}>
              <Button>{content.primary_btn}</Button>
              <Button variant="secondary">{content.secondary_btn}</Button>
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {content.images.map((_, index) => (
            <span
              key={index}
              onClick={() => swiperInstance?.slideToLoop(index)}
              className={activeIndex == index ? styles.active : ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
