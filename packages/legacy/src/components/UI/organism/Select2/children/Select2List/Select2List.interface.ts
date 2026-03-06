import { ISelectField } from '../../Select2.interface'

export interface ISelect2ListProps<T> {
  /**
   * disables the list
   */
  disabledList: boolean
  /**
   * enables mobile version
   */
  isMobile?: boolean
  /**
   * list of all options
   */
  list: (ISelectField & T)[]
  /**
   * this function stores the selected values
   */
  onSelected: (data: ISelectField & T) => void
  /**
   * array of selected values
   */
  selected: (ISelectField & T)[]
  /**
   * shows conditionally the list
   */
  visible?: boolean
  /**
   * renders a custom component
   */
  render?: (data: T, index: number) => JSX.Element
}
