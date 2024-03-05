import { ISearchItem } from '@components/UI/atoms'

export interface IEmptyResults {
  /**
   * This property show title in the card
   */
  titleNoResults: string
  /**
   * This property show image in the card
   */
  noResultsImage: string
  /**
   * This property show first paragraph line in the card
   */
  noResultsDescription: string
  /**
   * This property show second paragraph line in the card
   */
  noResultsDescriptionTwo: string
  /**
   * This property show link list to redirect
   */
  filteredOptions: ISearchItem[]
}
