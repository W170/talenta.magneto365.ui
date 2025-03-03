import React, { createContext, useContext, useState } from 'react'
import { ICandidateTemplateContext, ICandidateProvider } from './CandidateProfileTemplate.interface'

const CandidateContext = createContext<ICandidateTemplateContext | undefined>(undefined)

export const CandidateProfileProvider: React.FC<ICandidateProvider> = ({ children, screens }) => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(true)
  const [activeScreen, setActiveScreen] = useState<number>(0)

  return (
    <CandidateContext.Provider value={{ activeScreen, setActiveScreen, screens, isProfileOpen, setIsProfileOpen }}>
      {children}
    </CandidateContext.Provider>
  )
}

export const useCandidateProfile = () => {
  const context = useContext(CandidateContext)
  if (!context) throw new Error('useCandidate must be used within a CandidateProvider')
  return context
}
