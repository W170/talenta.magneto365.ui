import { IFilterCard } from '@components/UI/organism/FilterCard/FilterCard.interface'
import { ISearchRenderTypeProps } from '@components/UI/template'

export interface IFilterCardOnSearch extends IFilterCard, ISearchRenderTypeProps {
  /**
   * This is the parent filter applied
   */
  params?: number[] | string[]
}

export interface ISetIsAppliedProps {
  /**
   * this is the identifier of  the filter
   */
  field: string
  /**
   * This is the ai of the filter to apply or de-apply
   */
  id: string | number | { id: string; from: string | number; to: string | number }
  /**
   * This is the flag that indicate if the filter is applied
   */
  isApplied: boolean
  /**
   * This is the flag to know if this filter can has multiple options applied at the same time
   */
  multiple: boolean
}
