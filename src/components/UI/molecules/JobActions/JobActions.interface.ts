import { IShareButton } from '@components/UI/atoms'
import { ISaveButton } from '@components/UI/atoms/SaveButton'
import { ReactNode } from 'react'

export interface IJobsActions {
  /**
   * An array of string icons to be displayed for each anchor link in the actions section.
   * (Optional property)
   */
  actionsAnchorIcons?: string[]
  /**
   * An array of string URLs representing anchor links for each item in the actions section.
   */
  actionsAnchorLinks: string[]
  /**
   * An array of string titles or labels associated with each action anchor link.
   */
  actionsAnchorTitle: string[]

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
