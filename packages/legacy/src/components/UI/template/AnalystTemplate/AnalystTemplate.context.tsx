/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext } from 'react'
import { INavMenuAnalystRegion } from '@components/UI/organism'
import { useAnalystModal, useAnalystModalRegion } from './hooks'
import { IAnalystProviderProps, IModalProps } from './AnalystTemplate.interface'

const AnalystContext = createContext<{
  modal: IModalProps[]
  handleModal: (name: string, visible: boolean, data: unknown) => void
  modalRegion: boolean
  handleRegionChange: (region: INavMenuAnalystRegion | null) => void
  handleRegionModal: (open: boolean) => void
}>({
  modal: [],
  handleModal: () => {},
  modalRegion: false,
  handleRegionChange: () => {},
  handleRegionModal: () => {}
})

export const AnalystProvider: React.FC<IAnalystProviderProps> = ({ children, modals, onRegionChange }) => {
  const { modalRegion, handleRegionChange, handleRegionModal } = useAnalystModalRegion(onRegionChange)
  const { modal, handleModal } = useAnalystModal(modals)

  return (
    <AnalystContext.Provider value={{ modal, handleModal, modalRegion, handleRegionChange, handleRegionModal }}>
      {children}
    </AnalystContext.Provider>
  )
}

export const useAnalyst = () => useContext(AnalystContext)
