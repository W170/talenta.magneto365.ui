import { Ref } from 'react'

export interface IFilterActions {
  /**
   * Text that shows when all option is clicked
   */
  allAction: string
  /**
   * Callback when select an option
   */
  onClickAction: (index: number, value: string) => void
  /**
   * Optional reference for imperative behaviour
   */
  filtersRef?: Ref<IFiltersRef>
}

export interface IFiltersRef {
  /**
   * CallBack to restart filters
   */
  restartFilters: () => void
}
