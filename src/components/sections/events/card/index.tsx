'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { HomeView } from '@/payload-types'
import styles from './card.module.scss'

export type IEvent = HomeView['events']['events_list'][0]

export const Card = ({ event }: { event: IEvent }) => {
  const [open, setOpen] = useState<boolean>(false)

  const onOpen = () => {
    setOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const onClose = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <Fragment>
      <div className={styles.card}>
        <Image draggable={false} src="/images/event-img.png" alt="event" width={384} height={320} />

        <h1 className={styles.title}>{event.title}</h1>

        <p className={styles.text}>{event.text}</p>

        <Button onClick={onOpen}>See Details</Button>
      </div>

      {open && <Modal type="event" event={event} onClose={onClose} />}
    </Fragment>
  )
}
