'use client'
import { useState } from 'react'
import Image from 'next/image'

import { Menu } from '@/payload-types'
import styles from './card.module.scss'
import { getMedia } from '@/library/helpers'

interface IProps {
  side?: string
  data: Menu[]
  svg: string
}

export const MenuCard = ({ data, side = 'left', svg }: IProps) => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>(data[0])

  return (
    <section className={`${styles.wrapper} ${styles[side]} container`}>
      <div className={styles.content}>
        <div className={styles.content_list}>
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

        <Image src={svg} alt="svg" width={600} height={400} />
      </div>

      <MenuImage url={getMedia(selectedMenu.image).url} />
    </section>
  )
}

const MenuImage = ({ url }: { url: string }) => {
  return (
    <div className={styles.banner}>
      <Image draggable={false} height={600} alt="banner" width={850} src={url} />
    </div>
  )
}
