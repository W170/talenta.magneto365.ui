import { IFilterValue } from '@components/UI/template/SideFilter'

export interface IFilterMenuItem extends IFilterValue {
  /**
   * This is the filter identifier
   */
  field: string
  /**
   * This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * This flag indicate if the item render the total of vacancies
   */
  hasTotal: boolean
  /**
   * This function change if the item is isSelected
   */
  setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) => Promise<void>
}
