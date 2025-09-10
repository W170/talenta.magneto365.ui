import { ISaveButton } from '@components/UI/atoms/SaveButton'
import { ReactNode } from 'react'
import { ISharePopover } from '../SharePopover'

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
   * An array of string texts associated with each action anchor link.
   * Used only when variant is 'detailed'.
   */
  actionsAnchorText?: string[]

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
  shareButtonProps: ISharePopover
  /**
   * Props for render save button.
   * it's true it will not display save button
   */
  isApplied?: boolean

  /**
   * Indicates whether the component is default or detailed.
   */
  variant?: TJobActionsVariant
  /**
   * Indicates whether the component is being used on a job detail offer page.
   * (Optional property)
   */
  isJobDetailPage?: boolean
  /**
   * this is the main class to the actions
   * (optional)
   */
  className?: string
  /**
   * this is the main class to the external actions
   * (optional)
   */
  externalChildClass?: string
}

export type TJobActionsVariant = 'default' | 'detailed'
