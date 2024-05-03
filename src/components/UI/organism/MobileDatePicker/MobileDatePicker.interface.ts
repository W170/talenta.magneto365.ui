import { IOptionValues } from '@components/UI/atoms'

export interface IMobileDatePicker {
  applyLabel: string

  cancelLabel: string

  selectionHeader: string

  dateOptions: IOptionValues[]

  disabled?: boolean
}
