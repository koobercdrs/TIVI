'use client'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { getMedia } from '@/library/helpers'
import { HomeView } from '@/payload-types'
import styles from './card.module.scss'

export type IEvent = HomeView['events']['events_list'][0]

export const Card = ({ event, onClick }: { event: IEvent; onClick: () => void }) => {
  return (
    <div className={styles.card}>
      <Image
        src={getMedia(event.image).url}
        alt={getMedia(event.image).alt}
        draggable={false}
        height={500}
        width={600}
      />

      <h1 className={styles.title}>{event.title}</h1>

      <p className={styles.text}>{event.text}</p>

      <Button onClick={onClick}>{event.btn}</Button>
    </div>
  )
}
