'use client'
import Image from 'next/image'

import styles from './card.module.scss'
import { useState } from 'react'

interface IMenu {
  id: number
  name: string
  desc: string
  price: number
  banner: string
}

interface IProps {
  data: IMenu[]
  side?: string
}

export const MenuCard = ({ data, side = 'left' }: IProps) => {
  const [selectedMenu, setSelectedMenu] = useState<IMenu>(data[0])

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
        className={styles.banner}
        src={selectedMenu.banner}
        height={560}
        alt="banner"
        width={696}
      />
    </section>
  )
}
