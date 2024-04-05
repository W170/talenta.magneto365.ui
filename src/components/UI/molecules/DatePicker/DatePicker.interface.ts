export interface IDateList {
  /*
  
  */
  optionValue?: string | number
  /*

  */
  optionLabel?: string
}

export interface IDatePicker {
  /*
   */
  monthPlaceholder: string
  /*
   */
  monthOptionsLabels: string[]
  /*
   */
  yearPlaceholder: string
  /*
   */
  value: Date
  /*
   */
  disabled?: boolean
  /*
   */
  onChange: (value: string | Date | null) => void
}
