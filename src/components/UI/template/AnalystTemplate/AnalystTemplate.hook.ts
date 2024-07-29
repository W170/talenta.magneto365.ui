import { useState, useCallback } from 'react'
import { IModalAnalyst } from '@components/UI/organism'

export const useAnalystModal = (modals: IModalAnalyst[]) => {
  const [modal, setModal] = useState<{ name: string; visible: boolean; data?: unknown }[]>(
    Array.from({ length: modals?.length }, (_, i) => ({
      name: modals[i].name,
      visible: false,
      data: undefined
    }))
  )

  const handleModal = useCallback(
    (name: string, visible: boolean, data: unknown) => {
      setModal(modal.map((modal) => (modal.name === name ? { ...modal, visible, data } : modal)))
    },
    [modal]
  )

  return { modalOpen: modal, handleModal }
}
