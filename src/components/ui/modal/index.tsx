'use client'
import { Fragment, useState } from 'react'

import { PackageModal } from '@/components/models/package-modal'
import { EventModal } from '@/components/models/event-modal'
import { HomeView } from '@/payload-types'
import styles from './modal.module.scss'

interface IProps {
  onSlide: (index: number) => void
  events: HomeView['events']
  initialSlide: number
  onClose: () => void
}

export const Modal = ({ events, initialSlide, onClose, onSlide }: IProps) => {
  return (
    <Fragment>
      <section className={styles.modal}>
        <div className={styles.wrapper}>
          <ModalCard
            initialSlide={initialSlide}
            onSlide={onSlide}
            onClose={onClose}
            events={events}
          />
        </div>
      </section>

      <div onClick={onClose} className={styles.overlay}></div>
    </Fragment>
  )
}

const ModalCard = ({ events, onClose, initialSlide, onSlide }: IProps) => {
  const [selectedEventId, setSelectedEventId] = useState('')

  const selectEvent = (id: string) => setSelectedEventId(id)

  if (selectedEventId) {
    return <PackageModal back={() => setSelectedEventId('')} id={selectedEventId} />
  }

  return (
    <EventModal
      initialSlide={initialSlide}
      onSelect={selectEvent}
      onSlide={onSlide}
      onClose={onClose}
      events={events}
    />
  )
}
