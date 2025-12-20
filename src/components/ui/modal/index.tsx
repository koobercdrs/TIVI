import { Fragment } from 'react'

import styles from './modal.module.scss'
import { EventModal } from '@/components/models/event-modal'
import { SpecialModal } from '@/components/models/special-modal'
import { StandardModal } from '@/components/models/standard-modal'
import { IEvent } from '@/components/sections/events/card'

type IModelType = 'event' | 'standard' | 'special'
interface IProps {
  event: IEvent
  type: IModelType
  onClose: () => void
}

export const Modal = ({ onClose, event, type }: IProps) => {
  return (
    <Fragment>
      <section className={styles.modal}>
        <div className={styles.wrapper}>
          <ModalCard onClose={onClose} type={type} event={event} />
        </div>
      </section>

      <div onClick={onClose} className={styles.overlay}></div>
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
