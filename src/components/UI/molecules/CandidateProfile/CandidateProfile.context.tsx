import React, { createContext, useCallback, useContext, useState } from 'react'
import { ICandidateContext } from './CandidateProfile.interface'

const CandidateProfileContext = createContext<ICandidateContext | undefined>(undefined)

export const CandidateProfileProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const onChangeOpen = useCallback((isOpen: boolean) => {
    setIsOpen(isOpen)
  }, [])

  return (
    <CandidateProfileContext.Provider value={{ isOpen, onChangeOpen }}>{children}</CandidateProfileContext.Provider>
  )
}

export const useCandidateProfile = () => {
  const context = useContext(CandidateProfileContext)
  if (!context) throw new Error('useCandidateProfile must be used within a CandidateProfileProvider')
  return context
}
