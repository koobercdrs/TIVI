'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'

import styles from './events.module.scss'
import { Card } from './card'

import { Modal } from '@/components/ui/modal'
import { HomeView } from '@/payload-types'

export const Events = ({ content }: { content: HomeView['events'] }) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
    document.body.style.overflowY = 'hidden'
  }

  const onClose = () => {
    setOpen(false)
    document.body.style.overflowY = ''
  }

  return (
    <Fragment>
      <section id="EVENTS" className={styles.section}>
        <Image
          className={styles.background}
          src="/images/events-bg.png"
          draggable={false}
          loading="eager"
          alt="event"
          fill
        />

        <div className={`${styles.content_wrapper} container`}>
          <h1 className={styles.title}>{content.section_title}</h1>

          <div className={styles.wrapper}>
            {content.events_list.map((event) => (
              <Card key={event.id} event={event} onClick={onOpen} />
            ))}
          </div>
        </div>
      </section>

      {open && <Modal events={content} onClose={onClose} />}
    </Fragment>
  )
}
