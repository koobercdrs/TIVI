'use client'
import { useState } from 'react'
import Image from 'next/image'

import styles from './gallery.module.scss'

const filter = ['Restaurant Images', 'Water Transport', 'Events', 'Menu']

export const Gallery = () => {
  const [selectedFilter, setFilter] = useState('Restaurant Images')

  return (
    <section id="GALLERY" className={`${styles.section} container`}>
      <div className={styles.filter}>
        {filter.map((item, index) => (
          <div
            className={`${styles.filter_item} ${selectedFilter === item ? styles.active : ''}`}
            onClick={() => setFilter(item)}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={styles.gallery}>
        {Array.from({ length: 9 }).map((item, index) => (
          <div key={index} className={styles.banner}>
            <Image src="/images/hero-img-2.jpg" alt="gallery" height={712} width={440} />
          </div>
        ))}
      </div>
    </section>
  )
}
