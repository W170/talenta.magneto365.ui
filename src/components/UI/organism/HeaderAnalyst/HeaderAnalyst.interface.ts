import { IBreadcrumbs, IUserMenuWrapperAnalystProps } from '@components/UI/molecules'
import { ILogoComponent } from '@components/UI/atoms'
import React from 'react'

export interface IHeaderAnalyst {
  /**
   * Breadcrumbs props
   */
  breadCrumbProps?: IBreadcrumbs
  /**
   * Class name
   */
  className?: string
  /**
   * Function to handle modal visibility from analyst template
   */
  handleModal?: (name: string, visible: boolean, data: unknown) => void
  /**
   * Text to be displayed in the header
   */
  legend?: string
  /**
   * Logo props
   */
  logoProps?: ILogoAnalyst
  /**
   * Main menu button click handler
   */
  onMainMenuClick?: () => void
  /**
   * User menu data and handlers
   */
  userMenuProps: IUserMenuWrapperAnalystProps
  /**
   * Component to display a custom notification bell
   */
  notificationBell?: React.ReactNode
}

export interface ILogoAnalyst extends ILogoComponent {
  /**
   * Link to redirect
   */
  href?: string
  /**
   * Link rel
   */
  rel?: string
  /**
   * Link target
   */
  target?: string
}
