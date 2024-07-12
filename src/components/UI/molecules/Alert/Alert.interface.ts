import { ICustomText } from '@components/UI/atoms/Text/Text.interface'

export interface IAlert {
  /**
   * This is the type in the alert
   * */
  type: EAlertType
  /**
   * This is the main text in the alert
   * */
  text?: string
  /**
   * This is the custom text in the alert
   * */
  customText?: ICustomText[]
  /**
   * This is the custom text in the alert
   * */
  border?: boolean
  /**
   * this property set the size the alert
   */
  size?: number
  /**
   * this property set close onClick on the alert
   */
  onClose?: (() => void) | null
}

export type EAlertType = 'success' | 'warning' | 'info' | 'error'
