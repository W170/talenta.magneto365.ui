import { ReactNode } from 'react'

export interface IMegaMenuDrawerItem {
  className?: string
  /**
   * Put a url direction
   */
  url: string
  /**
   * This property set to true can change styles
   */
  isActive: boolean
  /**
   * This is the menu text
   */
  text: string
  /**
   * Icon for each option
   */
  icon?: string
  /**
   * Icon for each option
   */
  content?: IMegaMenuDrawerItemContent

  onClickOption?: () => void
}

export interface IMegaMenuDrawerItemContent {
  child: ReactNode
  title: string
}
