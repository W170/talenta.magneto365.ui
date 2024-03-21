import React from 'react'

export interface IDateDropdown {
  /*
   */
  dateOptions: IOptionValues[]
  /*
   */
  placeholderLabel: string
  /*
   */
  selectedOption?: string | number | undefined
  /*
   */
  onOptionChanged?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  /*
   */
  disabled?: boolean
}

export interface IOptionValues {
  /*
   */
  optionValue: string | number
  /*
   */
  optionLabel: string
}
