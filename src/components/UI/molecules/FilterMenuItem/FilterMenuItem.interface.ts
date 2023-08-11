import { IFilterValue, ISetIsApplied } from '@components/UI/template/SideFilter'

export interface IFilterMenuItem extends IFilterValue {
  /**
   * This is the filter identifier
   */
  field: string
  /**
   * This is the flag whit the same filter can has multiple options applied
   */
  multiple: boolean
  /**
   * This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * This flag indicate if the item render the total of vacancies
   */
  hasTotal?: boolean
  /**
   * This flag indicate if the parent if renderType = search
   */
  isSearched?: boolean
  /**
   * This function change if the item is isSelected
   */
  setIsApplied: (filter: ISetIsApplied) => Promise<void> | void
}
