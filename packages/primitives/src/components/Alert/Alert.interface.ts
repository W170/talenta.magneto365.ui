export interface ICustomText {
  /**
   * This is the value to the custom text
   */
  value: string | React.ReactNode
  /**
   * This is the custom font weight to text
   */
  fontWeight: EFontWeightType
  /**
   * This is the custom line break to text
   */
  lineBreak?: boolean
}

export type EFontWeightType = 'normal' | 'bold' | 'lighter'

export interface IAlert {
  /**
   * This is the type in the alert
   */
  type: EAlertType
  /**
   * This is the main text in the alert
   */
  text?: string
  /**
   * This is the custom text in the alert
   */
  customText?: ICustomText[]
  /**
   * This adds border to the alert
   */
  border?: boolean
  /**
   * this property set the size the alert
   */
  size?: number
  /**
   * this property set close onClick on the alert
   */
  onClose?: (() => void) | null
  /**
   * this property set custom classname
   */
  className?: string
  /**
   * this property add a new button or component on the alert
   */
  extraButton?: React.ReactChild
}

export type EAlertType = 'success' | 'warning' | 'info' | 'error'
