import { ChangeEvent } from 'react'

type Type = 'text' | 'number' | 'email'

export interface IInput {
  /**
   * this property change value text
   */
  value: string
  /**
   * this property have value text
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  /**
   * this property is to add a reference
   */
  name?: string
  /**
   * this property have input type
   */
  type: Type
  /**
   * this property add placeholder text in the input
   */
  placeholder: string
  /**
   * this property add a custom icon in the input element
   */
  customIcon?: string
  /**
   * this property in true hide the input icon
   */
  hideIcon?: boolean
  /**
   * this property add an error message
   */
  error?: string
  /**
   * this property disable the input
   */
  disabled?: boolean
  /**
   * this property customize the auto-focus for the input
   */
  autoFocus?: boolean
}
