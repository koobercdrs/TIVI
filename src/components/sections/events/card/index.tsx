'use client'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { HomeView } from '@/payload-types'
import styles from './card.module.scss'
import Link from 'next/link'

export type IEvent = HomeView['events']['events_list'][0]

export const Card = ({ event, onClick }: { event: IEvent; onClick: () => void }) => {
  return (
    <div className={styles.card}>
      <Image draggable={false} src="/images/event-img.png" alt="event" width={384} height={320} />

      <h1 className={styles.title}>{event.title}</h1>

      <p className={styles.text}>{event.text}</p>

      <Button onClick={onClick}>See Details</Button>
    </div>
  )
}
