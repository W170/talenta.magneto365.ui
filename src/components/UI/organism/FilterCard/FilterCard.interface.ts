import { IFilter, ISearchRenderTypeProps, ISetIsApplied } from '@components/UI/template/SideFilter'

export interface IFilterCard extends IFilter, ISearchRenderTypeProps {
  /**
   * This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * This function change if this filter is applied in the options
   */
  setIsApplied: (filter: ISetIsApplied) => Promise<void>
  /**
   *This is the placeholder in the input search
   */
  searchPlaceholder?: string
  /**
   * This is the switch title and indicate if has switch
   */
  switchText?: string
}
