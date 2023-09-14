import { IShareButton } from '@components/UI/atoms'
import { ISaveButton } from '@components/UI/atoms/SaveButton'
import { ReactNode } from 'react'

export interface IActions {
  /**
   * An array of string icons to be displayed for each anchor link in the actions section.
   * (Optional property)
   */
  ActionsAnchorIcons?: string[]
  /**
   * An array of string URLs representing anchor links for each item in the actions section.
   */
  ActionsAnchorLinks: string[]
  /**
   * An array of string text for each anchor link in the actions section.
   * (Optional property)
   */
  ActionAnchorText?: string[]
  /**
   * Specifies whether the UI is in mobile mode or not.
   * (Optional property)
   */
  isMobile?: boolean
  /**
   * The header or title for the actions section.
   */
  ActionsHeader: string
  /**
   * Content to be displayed as an external button.
   */
  externalButtonChild: ReactNode
  /**
   * Props for the save button component.
   */
  saveButtonProps: ISaveButton
  /**
   * Props for the share button component.
   */
  shareButtonProps: IShareButton
}
