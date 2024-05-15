import { IOptionValues } from '@components/UI/atoms'

export interface IMobileDatePicker {
  /*
   */
  applyLabel: string
  /*
   */
  cancelLabel: string
  /*
   */
  monthsLabels: string[]
  /*
   */
  selectionHeader: string
  /*
   */
  monthDateOptions: IOptionValues[]
  /*
   */
  yearDateOptions: IOptionValues[]
  /*
   */
  monthPlaceholder: string
  /*
   */
  yearPlaceholder: string
  /*
   */
  disabled?: boolean
  /**
   * Callback function to be executed when the selected date in the date picker changes.
   */
  onChange: (value: string | Date | null) => void
}
