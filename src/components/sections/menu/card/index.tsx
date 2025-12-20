'use client'
import { useState } from 'react'
import Image from 'next/image'

import styles from './card.module.scss'
import { Media, Menu } from '@/payload-types'
import { getMedia } from '@/library/payload'

interface IProps {
  side?: string
  data: Menu[]
}

export const MenuCard = ({ data, side = 'left' }: IProps) => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>(data[0])

  return (
    <section className={`${styles.wrapper} ${styles[side]} container`}>
      <div className={styles.content}>
        {data.map((item, index) => {
          const isSelected = item.id == selectedMenu.id

          return (
            <div
              key={index}
              onClick={() => setSelectedMenu(item)}
              className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            >
              <div className={styles.info}>
                <h1>{item.name}</h1>
                <p>{item.desc}</p>
              </div>

              <h1 className={styles.price}>{item.price}₾</h1>
            </div>
          )
        })}
      </div>

      <Image
        src={getMedia(selectedMenu.image as Media).url}
        className={styles.banner}
        draggable={false}
        height={560}
        alt="banner"
        width={696}
      />
    </section>
  )
}
