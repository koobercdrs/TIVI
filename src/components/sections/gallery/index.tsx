'use client'
import { useState } from 'react'
import Image from 'next/image'

import { getMedia } from '@/library/helpers'
import styles from './gallery.module.scss'
import { HomeView } from '@/payload-types'

type IGallery = HomeView['gallery']['categories'][0]['images']

export const Gallery = ({ content }: { content: HomeView['gallery'] }) => {
  const [gallery, setGallery] = useState<IGallery>(content.categories[0].images)
  const [selectedId, setSelectedId] = useState<string>(content.categories[0].id || '')

  return (
    <div className={styles.section_bg}>
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
                height={800}
                width={1000}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
