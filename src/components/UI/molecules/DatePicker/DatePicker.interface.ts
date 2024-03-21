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
  monthOptionsValue: number[]
  /*
   */
  monthOptionsLabels: string[]
  /*
   *
   */
  yearPlaceholder: string
  /*
   */
  yearOptionsValue: number[]
  /*
   */
  yearOptionsLabel: string[]
  /*
   *
   */
  disabledDate?: boolean
}
