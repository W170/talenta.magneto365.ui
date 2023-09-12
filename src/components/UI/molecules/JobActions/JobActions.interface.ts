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
   * Content to be displayed as an external button.
   */
  externalButtonChild: ReactNode
  /**
   * Content to be displayed as an external child element.
   */
  externalChild: ReactNode
  /**
   * Props for the save button component.
   */
  saveButtonProps: ISaveButton
}
