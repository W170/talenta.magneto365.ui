import { SetStateAction } from 'react'
import { ERenderType } from '@constants/stories'

export interface ISideFilter extends ISearchRenderTypeProps {
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
   * this is the text for the value filtered
   */
  filterSummary: string
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
   * This te title attribute for the button to close the drawer
   */
  textBtnMain: string
  /**
   * This te title attribute for the button to close the drawer
   */
  titleBtnClose?: string
  /**
   * With this function you open the drawer
   */
  setIsFiltersOpen: (value: SetStateAction<boolean>) => void
  /**
   * This function selected or un-applied the option
   */
  setIsApplied: (filter: ISetIsApplied) => Promise<void>
  /**
   * This is the function to clean all the filters
   */
  clearFilters: () => Promise<void>
  /**
   * Tis si the text that shows next to de switch
   */
  switchText?: string
}
export interface ISearchRenderTypeProps {
  /**
   * This function un-apply the filter clear the child filters applied
   */
  unApplyWithChild: (withChild: IUnApplyWithChild) => Promise<void>
  /**
   * This function to get the initial options applies if renderType is search
   */
  getOptionsOnLoad: (field: string, values: (string | number)[]) => Promise<ISearchRenderTypeOption[]>
  /**
   * This is the function to search the options when the renderType is search
   */
  getOptionsOnSearch: (term: IGetOptionsOnSearchProps) => Promise<ISearchRenderTypeOption[]>
}

/**
 * This is the homologate filters with the host data
 */

export interface IFilter {
  label: string
  field: string
  type: string
  dataType: string
  multiple: boolean
  renderType: ERenderType
  repository: IFilterRepository
  values: IFilterValue[]
  placeholder?: string
  renderChild?: string
  child?: IFilter
  filtersApplied?: Array<string | number>
}

export interface IFieldsAlias {
  id?: string
  label?: string
  parentId?: string
}

export interface IFilterRepository {
  type: string
  defaultFilter: IDefaultFilter
  defaultOrder: IDefaultOrder
  defaultOperator: number
  source: null | string
  fieldsAlias: IFieldsAlias
  fieldFullSearch?: string
  sourceName?: string
}

export interface IDefaultFilter {
  active?: boolean
}

export interface IDefaultOrder {
  name?: string
}

export interface IFilterValue {
  id: number | string
  label: string
  isApplied: boolean
  total?: number
  operator?: number
  type?: null | string
  from?: number | null | string
  to?: number | null | string
}

export interface ISetIsApplied {
  field: string
  id: string | number
  isApplied: boolean
  multiple: boolean
}

export interface IUnApplyWithChild {
  child: IFilter
  parentId: string | number
  parentField: string
  newParentId?: string | number
}
export interface ISearchRenderTypeOption {
  id: string | number
  label: string
  isApplied: boolean
  parentId?: string | number
}

export interface IGetOptionsOnSearchProps {
  repository: IFilterRepository
  field: string
  value: string
  params?: number[] | string[]
}
