import { IFilter, ISearchRenderTypeProps } from '@components/UI/template/SideFilter'

export interface IHorizontalFilter extends ISearchRenderTypeProps {
  /**
   * This is the title of the filters
   */
  title: string
  /**
   * This is a vector with the total filters
   */
  filters: IFilter[]
  /**
   * This is the total filters applied
   */
  totalAppliedFilters: number
  /**
   * This is the text that shows the clean button
   */
  buttonText: string
  /**
   * This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * If this flag is true the buttonFilter isn't visible
   */
  isFiltersOpen: boolean
  /**
   * This function selected or un-applied the option
   */
  setIsApplied: (filter: any) => Promise<void>
  /**
   * This is the function to clean all the filters
   */
  clearFilters: () => Promise<void>
}
