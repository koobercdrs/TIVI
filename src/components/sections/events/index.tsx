'use client'
import { Fragment, useState } from 'react'

import styles from './events.module.scss'
import { Card } from './card'

import { Modal } from '@/components/ui/modal'
import { HomeView } from '@/payload-types'

export const Events = ({ content }: { content: HomeView['events'] }) => {
  const [initialSlide, setInitialSlide] = useState(0)
  const [open, setOpen] = useState(false)

  const onOpen = (index: number) => {
    setOpen(true)
    setInitialSlide(index)
    document.body.style.overflowY = 'hidden'
  }

  const onClose = () => {
    setOpen(false)
    document.body.style.overflowY = ''
  }

  return (
    <Fragment>
      <section id="EVENTS" className={styles.section}>
        <div className={`${styles.content_wrapper} container`}>
          <h1 className={styles.title}>{content.section_title}</h1>

          <div className={styles.wrapper}>
            {content.events_list.map((event, index) => (
              <Card key={event.id || index} event={event} onClick={() => onOpen(index)} />
            ))}
          </div>
        </div>
      </section>

      {open && (
        <Modal
          events={content}
          onClose={onClose}
          initialSlide={initialSlide}
          onSlide={(e) => setInitialSlide(e)}
        />
      )}
    </Fragment>
  )
}
