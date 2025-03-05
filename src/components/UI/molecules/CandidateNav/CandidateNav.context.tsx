import React, { createContext, useCallback, useContext, useState } from 'react'
import { ICandidateNavContext } from './CandidateNav.interface'

const CandidateNavContext = createContext<ICandidateNavContext | undefined>(undefined)

export const CandidateNavProvider: React.FC = ({ children }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)

  const onChangeOpen = useCallback(() => {
    setShowOptions((prevState) => !prevState)
  }, [])

  return <CandidateNavContext.Provider value={{ showOptions, onChangeOpen }}>{children}</CandidateNavContext.Provider>
}

export const useCandidateNav = () => {
  const context = useContext(CandidateNavContext)
  if (!context) throw new Error('useCandidateNav must be used within a CandidateNavProvider')
  return context
}
