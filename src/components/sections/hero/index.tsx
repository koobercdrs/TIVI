'use client'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import styles from './hero.module.scss'

import 'swiper/css'

const imgs = ['/images/hero-img-1.jpg', '/images/hero-img-2.jpg']

export const Hero = () => {
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
        {imgs.map((img, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <Image src={img} alt="hero img" fill priority />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles.navigation} container`}>
        <button onClick={() => swiperInstance?.slidePrev()} className={styles.arrow}>
          <Image src="/icons/left-arrow.svg" alt="left arrow" width={12} height={24} />
        </button>

        <div className={styles.dots}>
          {imgs.map((_, index) => (
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
          <h1 className={styles.title}>Riverside Restaurant, Bar & Boat Tours in Tbilisi</h1>

          <div className={styles.left}>
            <h1 className={styles.subtitle}>
              TIVI is Tbilisi&apos;s riverside hub for dining, bar life, Mtkvari tours, and
              birthday, corporate or engagement events.
            </h1>

            <div className={styles.btns}>
              <Button>Explore TIVI</Button>
              <Button variant="secondary">Boat Tours</Button>
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {imgs.map((_, index) => (
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
