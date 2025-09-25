export type OmittedFieldInputProps = 'prefix' | 'size'

export enum FieldInputTypeEnum {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number',
  EMAIL = 'email',
  TEL = 'tel',
  BUTTON = 'button'
}

export type FieldInputTypes = `${FieldInputTypeEnum}`

export interface IFieldInput extends Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedFieldInputProps> {
  error?: boolean
  isMobile?: never
  prefix?: React.ReactNode
  /**
   * If for example the dev wants to keep de focus on a mobile environment by clicking it.
   */
  preserveFocus?: boolean
  size?: 'small' | 'medium'
  suffix?: React.ReactNode
  type?: FieldInputTypes
  wrapper?: React.HTMLAttributes<HTMLSpanElement>
}
