import { IFilter } from '@components/UI/template/SideFilter'

export interface IFilterCard extends IFilter {
  /**
   * This function change if this filter is applied in the options
   */
  setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) => Promise<void>
  /**
   * This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * This flag indicate if has switch
   */
  hasSwitch?: boolean
  /**
   * This is the switch title
   */
  switchText?: string
  /**
   *This is the placeholder in the input search
   */
  searchPlaceholder?: string
}
