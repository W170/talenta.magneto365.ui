import { FC } from 'react'

export interface ICandidateProfileTemplate {
  /**
   * List of screens to be rendered
   */
  screens: ICandidateScreen[]
  /**
   * Function to be called when a screen is changed
   */
  onChangeScreen?: (screen?: ICandidateScreen, index?: number) => void
}

export interface ICandidateScreen {
  /**
   * Icon of the screen to show in the header
   */
  icon: React.ReactNode
  /**
   * Name of the screen
   */
  name: string
  /**
   * Component to be rendered
   */
  component: FC
  /**
   * Title of the screen to show in the header
   */
  title: string
}

export interface ICandidateTemplateContext {
  /**
   * Index of the active screen
   */
  activeScreen: number
  /**
   * List of screens
   */
  screens: ICandidateScreen[]
  /**
   * Function to set the active screen
   */
  setActiveScreen: (index: number) => void
  /**
   * Indicates if the profile is open
   */
  isProfileOpen: boolean
  /**
   * Function to set the profile open
   */
  setIsProfileOpen: (state: boolean) => void
  /**
   * Height of bottom navigation
   */
  navHeight: number
  /**
   * Function to set the height of bottom navigation
   */
  setNavHeight: (height: number) => void
  /**
   * Height of header
   */
  headerHeight: number
  /**
   * Function to set the height of header
   */
  setHeaderHeight: (height: number) => void
}

export interface ICandidateProvider {
  /**
   * List of screens
   */
  screens: ICandidateScreen[]
  /**
   * Function to be called when a screen is changed
   */
  onChangeScreen?: (screen?: ICandidateScreen, index?: number) => void
}
