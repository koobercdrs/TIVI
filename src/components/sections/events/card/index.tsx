'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import styles from './card.module.scss'
import { IEvent } from '@/data'

export const Card = ({ event }: { event: IEvent }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Fragment>
      <div className={styles.card}>
        <Image draggable={false} src="/images/event-img.png" alt="event" width={384} height={320} />

        <h1 className={styles.title}>{event.title}</h1>

        <p className={styles.text}>{event.text}</p>

        <Button onClick={() => setOpen(true)}>See Details</Button>
      </div>

      {open && <Modal type="event" eventId={event.id} onClose={() => setOpen(false)} />}
    </Fragment>
  )
}
