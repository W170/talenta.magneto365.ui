import React, { createContext, useContext } from 'react'
import {
  IMegaMenuContext,
  IMegaMenuJobs,
  IMegaMenuSocialHeader,
  IMegaMenuMainHeader
} from './MegaMenuContext.interface'

const initialContext: IMegaMenuContext = {
  socialHeaderProps: {
    helpOptions: [],
    tabs: []
  },
  jobsProps: {
    tabs: []
  },
  mainHeaderProps: {}
}

const MegaMenuContext = createContext<IMegaMenuContext>(initialContext)

export const MegaMenuProvider: React.FC<IMegaMenuContext> = ({ children, ...props }) => {
  return <MegaMenuContext.Provider value={props}>{children}</MegaMenuContext.Provider>
}

export const useMegaMenu = () => useContext(MegaMenuContext)

export const useMegaMenuSocialHeader = (): IMegaMenuSocialHeader => {
  const { socialHeaderProps } = useContext(MegaMenuContext)
  return socialHeaderProps
}

export const useMegaMenuJobs = (): IMegaMenuJobs => {
  const { jobsProps } = useContext(MegaMenuContext)
  return jobsProps
}

export const useMegaMenuMain = (): IMegaMenuMainHeader => {
  const { mainHeaderProps } = useContext(MegaMenuContext)
  return mainHeaderProps
}
