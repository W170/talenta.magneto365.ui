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
  selectionMonthHeader: string
  /*
   */
  selectionYearHeader: string
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
  /**
   * The selected date value for the date picker.
   */
  value: Date
}
