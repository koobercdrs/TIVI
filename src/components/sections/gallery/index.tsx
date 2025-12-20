'use client'
import { useState } from 'react'
import Image from 'next/image'

import { getMedia } from '@/library/helpers'
import styles from './gallery.module.scss'
import { HomeView } from '@/payload-types'

type IGallery = HomeView['gallery']['categories'][0]['images']

export const Gallery = ({ content }: { content: HomeView['gallery'] }) => {
  const [gallery, setGallery] = useState<IGallery>([])
  const [selectedId, setSelectedId] = useState<string>('')

  return (
    <section id="GALLERY" className={`${styles.section} container`}>
      <div className={styles.filter}>
        {content.categories.map((item, index) => (
          <div
            className={`${styles.filter_item} ${selectedId === item.id ? styles.active : ''}`}
            onClick={() => {
              setGallery(item.images)
              setSelectedId(item.id || '')
            }}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className={styles.gallery}>
        {gallery.map((item, index) => (
          <div key={index} className={styles.banner}>
            <Image
              src={getMedia(item.image).url}
              alt={getMedia(item.image).alt}
              draggable={false}
              height={712}
              width={440}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
