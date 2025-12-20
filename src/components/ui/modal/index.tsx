'use client'
import { Fragment } from 'react'

import styles from './modal.module.scss'
import { IEvent } from '@/components/sections/events/card'
import { EventModal } from '@/components/models/event-modal'
import { SpecialModal } from '@/components/models/special-modal'
import { StandardModal } from '@/components/models/standard-modal'
import { IModelType, useEventModal } from '@/context/events-context'

interface IProps {
  event: IEvent
  type: IModelType
  onClose: () => void
}

export const Modal = () => {
  const { closeModal, type, data } = useEventModal()

  return (
    <Fragment>
      <section className={styles.modal}>
        <div className={styles.wrapper}>
          {/* <ModalCard onClose={closeModal} type={type} event={data!} /> */}
        </div>
      </section>

      <div onClick={closeModal} className={styles.overlay}></div>
    </Fragment>
  )
}

const ModalCard = ({ type, event, onClose }: IProps) => {
  switch (type) {
    case 'event':
      return <EventModal onClose={onClose} event={event} />
    case 'special':
      return <SpecialModal />
    case 'standard':
      return <StandardModal />
    default:
      return <EventModal onClose={onClose} event={event} />
  }
}
