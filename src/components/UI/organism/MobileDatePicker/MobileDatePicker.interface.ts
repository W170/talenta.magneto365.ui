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
