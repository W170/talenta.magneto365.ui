export interface IDateList {
  /**
   * The value of the option.
   */
  optionValue?: string | number
  /**
   * The label to display for the option.
   */
  optionLabel?: string
}
export interface IDatePicker {
  /**
   * The placeholder text to display for the month input field.
   */
  monthPlaceholder: string
  /**
   * An array of labels for the month options in the date picker.
   */
  monthOptionsLabels: string[]
  /**
   * The placeholder text to display for the year input field.
   */
  yearPlaceholder: string
  /**
   * The selected date value for the date picker.
   */
  value?: Date
  /**
   * Specifies whether the date picker is disabled or not.
   */
  disabled?: boolean
  /**
   * Callback function to be executed when the selected date in the date picker changes.
   */
  onChange: (value: string | Date | null) => void
  /**
   * value for setting future years
   */
  futureYears?: number
  /**
   * value for setting past years
   */
  pastYears?: number
}
