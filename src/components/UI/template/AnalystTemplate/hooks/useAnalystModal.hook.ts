import { useState, useCallback } from 'react'
import { IModalAnalyst } from '@components/UI/organism'
import { IModalProps } from '../AnalystTemplate.interface'

export const useAnalystModal = (modals?: IModalAnalyst[]) => {
  const [modal, setModal] = useState<IModalProps[]>(
    Array.from({ length: modals?.length || 0 }, (_, i) => ({
      name: modals ? modals[i].name : '',
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

  return { modal, handleModal }
}
