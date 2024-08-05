import { IDatePicker } from '@components/UI/molecules'
import { IMobileDatePicker } from '@components/UI/organism'

export interface IDatePickerComponent {
  /*
    Props for the date picker component.
   */
  datePickerProps: IDatePicker
  /*
    Props for the mobile date picker component.
   */
  mobileDatePickerProps: IMobileDatePicker
  /**
   * Callback function to be executed when the selected date in the date picker changes.
   */
  onChange?: (value: string | Date | null) => void
  /**
   * The selected date value for the date picker.
   */
  value?: Date
}
