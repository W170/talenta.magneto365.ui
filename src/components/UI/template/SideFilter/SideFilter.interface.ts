// import { TOptionFilterSearch } from '@components/UI/molecules/FilterSearchItem'
import { ERenderType } from './SideFilter.component'

export interface ISideFilter {
  /**
   * This is a vector with the total filters
   */
  filters: IFilter[]
  /**
   * This function change if this filter is selected the options
   */
  setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) => Promise<void>
  /**
   * This is the total filters applied
   */
  totalAppliedFilters: number
  /**
   * This is the function to clean all the filters
   */
  clearFilters: () => Promise<void>
  /**
   * This is the title of the filters
   */
  title: string
  /**
   * This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * This is the text that shows the clean button
   */
  buttonText: string
  /**
   * Tis si the text that shows next to de switch
   */
  switchText?: string
}

//TODO: temporal type
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
}

export interface IFieldsAlias {
  id?: string
  label?: string
  parentId?: null | string
}

export interface IFilterRepository {
  type: string
  defaultFilter: IDefaultFilter
  defaultOrder: IDefaultOrder
  defaultOperator: number
  source: null | string
  fieldsAlias: IFieldsAlias | null
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
  operator: number
  label: string
  total: number
  isApplied: boolean
  type?: null | string
  from?: number | null | string
  to?: number | null | string
}
