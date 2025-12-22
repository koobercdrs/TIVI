'use client'
import { Fragment, useState } from 'react'

import { PackageModal } from '@/components/models/package-modal'
import { EventModal } from '@/components/models/event-modal'
import { HomeView } from '@/payload-types'
import styles from './modal.module.scss'

interface IProps {
  events: HomeView['events']
  onClose: () => void
}

export const Modal = ({ events, onClose }: IProps) => {
  return (
    <Fragment>
      <section className={styles.modal}>
        <div className={styles.wrapper}>
          <ModalCard onClose={onClose} events={events} />
        </div>
      </section>

      <div onClick={onClose} className={styles.overlay}></div>
    </Fragment>
  )
}

const ModalCard = ({ events, onClose }: IProps) => {
  const [selectedEventId, setSelectedEventId] = useState('')

  const selectEvent = (id: string) => setSelectedEventId(id)

  if (selectedEventId) return <PackageModal id={selectedEventId} />

  return <EventModal onSelect={selectEvent} onClose={onClose} events={events} />
}
