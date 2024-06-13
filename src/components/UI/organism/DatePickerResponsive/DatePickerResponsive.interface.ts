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
}
