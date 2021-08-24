import { createContext, useContext, useState } from 'react'

type ModalContextData = {
  handleOpenModal: () => void
  handleCloseModal: () => void
  open: boolean
}

type ModalContext = {
  children: React.ReactNode
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

export const ModalProvider = ({ children }: ModalContext) => {
  const [open, setOpen] = useState(false)

  function handleOpenModal() {
    setOpen(true)
  }

  function handleCloseModal() {
    setOpen(false)
  }

  return (
    <ModalContext.Provider value={{ handleCloseModal, handleOpenModal, open }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within a ModalContextProvider')
  }

  return context
}
