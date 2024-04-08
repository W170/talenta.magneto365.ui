import React from 'react'

export interface IDateDropdown {
  /**
   * An array of option values for the dropdown.
   */
  dateOptions: IOptionValues[]
  /**
   * The label to display as a placeholder in the dropdown when no option is selected.
   */
  placeholderLabel: string
  /**
   * The currently selected option in the dropdown.
   */
  selectedOption?: string | number | undefined
  /**
   * Callback function to be executed when the selected option in the dropdown changes.
   */
  onOptionChanged?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  /**
   * Specifies whether the dropdown is disabled or not.
   */
  disabled?: boolean
}
export interface IOptionValues {
  /**
   * The value of the option.
   */
  optionValue: string | number
  /**
   * The label to display for the option.
   */
  optionLabel: string
}
