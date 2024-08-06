import { ISelectField } from '../../Select2.interface'

export interface ISelect2InputProps<T> {
  /**
   * detects when clicked out of the box
   */
  clickOut?: boolean
  /**
   * disables the input or button
   */
  disabled?: boolean
  /**
   * checks if the list is disabled
   */
  disableList: boolean
  /**
   * this function stores the written text
   */
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * preffix icon
   */
  icon?: string
  /**
   * the name of the input
   */
  name?: string
  /**
   * placeholder when input or button are empty
   */
  placeholder: string
  /**
   * input written text
   */
  searchValue: string
  /**
   * detects when user wants to open the list
   */
  setClickOut: (clickOut: boolean) => void
  /**
   * array of all selected values
   */
  valueSelected: (ISelectField & T)[]
  /**
   * this property allows you to select several values
   */
  isMultiple?: boolean
}
