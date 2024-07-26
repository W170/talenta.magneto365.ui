import { useState, useCallback } from 'react'
import { IModalAnalyst } from '@components/UI/organism'

export const useAnalystModal = (modals: IModalAnalyst[]) => {
  const [modalOpen, setModalOpen] = useState(
    Array.from({ length: modals?.length }, (_, i) => ({
      name: modals[i].name,
      visible: false
    }))
  )

  const handleModal = useCallback(
    (name: string, visible: boolean) => {
      setModalOpen(modalOpen.map((modal) => (modal.name === name ? { ...modal, visible } : modal)))
    },
    [modalOpen]
  )

  return { modalOpen, handleModal }
}
