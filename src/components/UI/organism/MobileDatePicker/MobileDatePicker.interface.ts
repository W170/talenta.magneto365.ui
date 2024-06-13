export interface IMobileDatePicker {
  /*
   * Label text for the apply button in the date picker.
   */
  applyLabel: string
  /*
   * Label text for the cancel button in the date picker.
   */
  cancelLabel: string
  /*
   * Array of strings representing the names of the months.
   */
  monthsLabels: string[]
  /*
   * Header text for the month selection view.
   */
  selectionMonthHeader: string
  /*
   * Header text for the year selection view.
   */
  selectionYearHeader: string
  /*
   * Placeholder text to display in the month input field.
   */
  monthPlaceholder: string
  /*
   * Placeholder text to display in the year input field.
   */
  yearPlaceholder: string
  /*
   * Specifies whether the date picker is disabled.
   * (Optional property)
   */
  disabled?: boolean
  /**
   * Callback function to be executed when the selected date in the date picker changes.
   * @param value - The new date value selected, which can be a string, a Date object, or null.
   */
  onChange: (value: string | Date | null) => void
  /**
   * The selected date value for the date picker.
   */
  value: Date
}
