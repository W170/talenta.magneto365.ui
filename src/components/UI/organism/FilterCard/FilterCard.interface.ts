import { TOptionFilterSearch } from '@components/UI/molecules/FilterSearchItem'

export interface IFilterCard {
  /**
   * This is a vector whit the options to shows
   */
  totalOptions: TOptionFilterSearch[]
  /**
   * This function modify the options
   */
  //   setOptions: (filteredOptions: TOptionFilterSearch[]) => void
  /**
   * This is the title card
   */
  title: string
  /**
   * This flag indicate if has switch
   */
  hasSwitch?: boolean
  /**
   * This is the title switch
   */
  switchText?: string
  /**
   *
   */
  searchPlaceholder?: string
}
