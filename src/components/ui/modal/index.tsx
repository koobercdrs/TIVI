import { Fragment } from 'react'

import styles from './modal.module.scss'
import { events, IEvent } from '@/data'
import { EventModal } from '@/components/models/event-modal'
import { SpecialModal } from '@/components/models/special-modal'
import { StandardModal } from '@/components/models/standard-modal'

type IModelType = 'event' | 'standard' | 'special'
interface IProps {
  eventId: number
  type: IModelType
  onClose: () => void
}

export const Modal = ({ onClose, eventId, type }: IProps) => {
  const event = events.find((e) => e.id === eventId)

  if (!event) return null

  return (
    <Fragment>
      <section className={styles.modal}>
        <div className={styles.wrapper}>
          <ModalCard type={type} event={event} />
        </div>
      </section>

      <div onClick={onClose} className={styles.overlay}></div>
    </Fragment>
  )
}

const ModalCard = ({ type, event }: { type: IModelType; event: IEvent }) => {
  switch (type) {
    case 'event':
      return <EventModal event={event} />
    case 'special':
      return <SpecialModal />
    case 'standard':
      return <StandardModal />
    default:
      return <EventModal event={event} />
  }
}
