import { IModalAnalystHeader, IModalAnalystFooter } from './children'

export interface IModalAnalystProps extends IModalAnalyst {
  handleClose: (name: string, visible: boolean, data: unknown) => void
  data: unknown
  isOpen: boolean
}

export interface IModalAnalyst {
  /**
   * The name of the modal
   */
  name: string
  /**
   * Array of screens that will be displayed
   */
  screens: IModalAnalystScreen[]
}

export interface IModalAnalystScreen {
  /**
   * The key of the screen
   */
  key: number
  /**
   * Header of the screen
   */
  header?: IModalAnalystHeader
  /**
   * Content of the screen
   */
  content?: string
  /**
   * Footer of the screen
   */
  footer?: IModalAnalystFooter
}
