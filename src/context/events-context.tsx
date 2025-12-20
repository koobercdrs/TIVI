'use client'
import { IEvent } from '@/components/sections/events/card'
import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export type IModelType = 'event' | 'standard' | 'special'

interface ModalContextType {
  isOpen: boolean
  type: IModelType
  data: IEvent | null
  closeModal: () => void
  open: (type: IModelType, data: IEvent) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

interface IProps {
children: ReactNode ,

}

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [data, setModalData] = useState<IEvent | null>(null)
  const [type, setModalType] = useState<IModelType>('event')
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((type: IModelType, data: IEvent) => {
    setModalType(type)
    setModalData(data)
    setIsOpen(true)

    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setModalType('event')
    setModalData(null)
    setIsOpen(false)

    document.body.style.overflow = ''
  }, [])

  return (
    <ModalContext.Provider value={{ isOpen, type, data, closeModal, open }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useEventModal = () => {
  const context = useContext(ModalContext)

  if (context === undefined) throw new Error('useModal must be used within a ModalProvider')

  return context
}
