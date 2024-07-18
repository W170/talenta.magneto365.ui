import { ISelectField } from '../../Select2.interface'

export interface ISelect2TagsProps<T> {
  /**
   * this function removes a selected value
   */
  onRemove: (id: string | number) => void
  /**
   * list of tags
   */
  tags: (ISelectField & T)[]
  /**
   * shows conditionally a list of tags
   */
  visible?: boolean
}
