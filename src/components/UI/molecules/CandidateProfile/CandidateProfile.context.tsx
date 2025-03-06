import React, { createContext, useCallback, useContext, useState, useEffect } from 'react'
import { ICandidateContext } from './CandidateProfile.interface'

const CandidateProfileContext = createContext<ICandidateContext | undefined>(undefined)

export const CandidateProfileProvider: React.FC<Partial<ICandidateContext>> = ({
  children,
  isOpen = true,
  onChangeOpen
}) => {
  const [localIsOpen, setLocalIsOpen] = useState<boolean>(true)

  const handleOnchangeOpen = useCallback(
    (isOpen: boolean) => {
      if (onChangeOpen) {
        onChangeOpen(isOpen)
        return
      }
      setLocalIsOpen(isOpen)
    },
    [onChangeOpen]
  )

  useEffect(() => {
    setLocalIsOpen(isOpen)
  }, [isOpen])

  return (
    <CandidateProfileContext.Provider value={{ isOpen: localIsOpen, onChangeOpen: handleOnchangeOpen }}>
      {children}
    </CandidateProfileContext.Provider>
  )
}

export const useCandidateProfile = () => {
  const context = useContext(CandidateProfileContext)
  if (!context) throw new Error('useCandidateProfile must be used within a CandidateProfileProvider')
  return context
}
