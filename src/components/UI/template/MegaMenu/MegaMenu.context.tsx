import React, { createContext, useContext } from 'react'
import {
  IMegaMenuContext,
  IMegaMenuJobs,
  IMegaMenuSocialHeader,
  IMegaMenuMainHeader
} from './MegaMenuContext.interface'
import { IlistMenuUserProps } from '@components/UI/organism'

const initialContext: IMegaMenuContext = {
  socialHeaderProps: {
    helpOptions: [],
    tabs: []
  },
  jobsProps: {
    tabs: []
  },
  mainHeaderProps: {
    mobileSearchBarProps: {
      termValue: '',
      onSearch: () => ({}),
      placeholder: ''
    }
  },
  listMenuUserProps: {
    urlParam: '',
    menuItems: [],
    menuItems1440: [],
    logout: {
      logoutText: '',
      onClick: () => ({})
    },
    settings: {
      settingsText: '',
      onClick: () => ({})
    },
    profileImage: {},
    isAuthenticated: false
  }
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

export const useLoggedInUser = (): IlistMenuUserProps => {
  const { listMenuUserProps } = useContext(MegaMenuContext)
  return listMenuUserProps
}
