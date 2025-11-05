export type OmittedFieldInputProps = 'prefix' | 'size'

export type TFieldInputButtonAlign = 'left' | 'center' | 'right'

export type FieldInputButtonAlign = `${TFieldInputButtonAlign}`

export enum FieldInputTypeEnum {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number',
  EMAIL = 'email',
  TEL = 'tel',
  BUTTON = 'button'
}

export type FieldInputTypes = `${FieldInputTypeEnum}`

export interface IFieldInputBase extends Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedFieldInputProps> {
  error?: boolean
  prefix?:
    | React.ReactNode
    | ((args: {
        inputRef: React.RefObject<HTMLInputElement>
        prefixRef: React.RefObject<HTMLSpanElement>
        opened: boolean
      }) => React.ReactNode)
  /**
   * If for example the dev wants to keep de focus on a mobile environment by clicking it.
   */
  preserveFocus?: boolean
  size?: 'small' | 'medium'
  suffix?:
    | React.ReactNode
    | ((args: {
        inputRef: React.RefObject<HTMLInputElement>
        suffixRef: React.RefObject<HTMLSpanElement>
        opened: boolean
      }) => React.ReactNode)
  wrapper?: React.HTMLAttributes<HTMLSpanElement>
}

export interface IFieldInputButton extends IFieldInputBase {
  type: `${FieldInputTypeEnum.BUTTON}`
  align?: FieldInputButtonAlign
}

export interface IFieldInputCommon extends IFieldInputBase {
  type?: Exclude<FieldInputTypes, `${FieldInputTypeEnum.BUTTON}`>
  align?: never
}

export type IFieldInput = IFieldInputButton | IFieldInputCommon
