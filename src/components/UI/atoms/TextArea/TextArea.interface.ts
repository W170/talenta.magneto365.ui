import { ChangeEvent } from 'react'

export interface ITextArea {
  /**
   * this property change value text
   */
  value: string
  /**
   * this property have value text
   */
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  /**
   * this property is to add a reference
   */
  name?: string
  /**
   * this property add rows in the text area
   */
  rows?: number
  /**
   * this property add placeholder text in the text area
   */
  placeholder: string
  /**
   * this property disable the input
   */
  disabled?: boolean
  /**
   * this property add an error message
   */
  error?: string
}
