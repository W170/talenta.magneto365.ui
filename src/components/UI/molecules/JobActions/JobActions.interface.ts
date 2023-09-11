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
   *
   */
  externalButtonChild: ReactNode
  /**
   *
   */
  externalChild: ReactNode
  /**
   *
   */
  saveButtonProps: ISaveButton
}
