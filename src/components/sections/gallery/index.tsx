'use client'
import { useState } from 'react'
import Image from 'next/image'

import styles from './gallery.module.scss'
import { HomeView } from '@/payload-types'

export const Gallery = ({ content }: { content: HomeView['gallery'] }) => {
  const [selectedFilter, setFilter] = useState('Restaurant Images')

  return (
    <section id="GALLERY" className={`${styles.section} container`}>
      <div className={styles.filter}>
        {content.categories.map((item, index) => (
          <div
            className={`${styles.filter_item} ${selectedFilter === item.name ? styles.active : ''}`}
            onClick={() => setFilter(item.name)}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className={styles.gallery}>
        {Array.from({ length: 9 }).map((item, index) => (
          <div key={index} className={styles.banner}>
            <Image
              src="/images/hero-img-2.jpg"
              draggable={false}
              alt="gallery"
              height={712}
              width={440}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
