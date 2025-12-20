'use client'
import { IEvent } from '@/components/sections/events/card'
import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type IModelType = 'event' | 'standard' | 'special'

interface ModalContextType {
  isOpen: boolean
  data: IEvent | null
  closeModal: () => void
  type: IModelType | null
  open: (type: IModelType, data: IEvent) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setModalType] = useState<IModelType | null>(null)
  const [data, setModalData] = useState<IEvent | null>(null)

  const open = useCallback((type: IModelType, data: IEvent) => {
    setModalType(type)
    setModalData(data)
    setIsOpen(true)

    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setModalType(null)
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
