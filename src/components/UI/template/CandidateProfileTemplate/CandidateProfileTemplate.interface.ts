import { FC } from 'react'

export interface ICandidateProfileTemplate {
  screens: ICandidateScreen[]
  onChangeScreen?: (screen?: ICandidateScreen, index?: number) => void
}

export interface ICandidateScreen {
  icon: string
  name: string
  component: FC
  title: string
}

export interface ICandidateTemplateContext {
  activeScreen: number
  screens: ICandidateScreen[]
  setActiveScreen: (index: number) => void
  isProfileOpen: boolean
  setIsProfileOpen: (state: boolean) => void
  navHeight: number
  setNavHeight: (height: number) => void
}

export interface ICandidateProvider {
  screens: ICandidateScreen[]
  onChangeScreen?: (screen?: ICandidateScreen, index?: number) => void
}
