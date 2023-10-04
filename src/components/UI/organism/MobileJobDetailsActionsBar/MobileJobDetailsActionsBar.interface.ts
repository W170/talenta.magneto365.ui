import { IActions } from '@components/UI/molecules/Actions'
import { ReactNode } from 'react'

export interface IMobileJobDetailsActionsBar {
  /**
   * Props for the actions component.
   * This component represents a set of actions or buttons that can be displayed in the actions bar.
   */
  actionsProps: IActions
  /**
   * Content to be displayed as an external button.
   */
  externalButtonChild: ReactNode
  /**
   *
   */
  onClose?: boolean
}
