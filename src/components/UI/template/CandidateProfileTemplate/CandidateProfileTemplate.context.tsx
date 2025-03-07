import React, { createContext, useContext, useState, useEffect, useRef } from 'react'
import { ICandidateTemplateContext, ICandidateProvider } from './CandidateProfileTemplate.interface'

const CandidateContext = createContext<ICandidateTemplateContext | undefined>(undefined)

export const CandidateProfileProvider: React.FC<ICandidateProvider> = ({ children, onChangeScreen, screens }) => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(true)
  const [activeScreen, setActiveScreen] = useState<number>(0)
  const [navHeight, setNavHeight] = useState<number>(0)
  const prevScreenRef = useRef<number | null>(null)

  useEffect(() => {
    if (prevScreenRef.current !== activeScreen) {
      onChangeScreen?.(screens[activeScreen], activeScreen)
      prevScreenRef.current = activeScreen
    }
  }, [activeScreen, onChangeScreen, screens])

  return (
    <CandidateContext.Provider
      value={{ activeScreen, setActiveScreen, screens, isProfileOpen, setIsProfileOpen, navHeight, setNavHeight }}
    >
      {children}
    </CandidateContext.Provider>
  )
}

export const useCandidateProfile = () => {
  const context = useContext(CandidateContext)
  if (!context) throw new Error('useCandidate must be used within a CandidateProvider')
  return context
}
