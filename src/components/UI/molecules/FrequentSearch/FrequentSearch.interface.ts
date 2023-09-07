import { ISearchItem } from '@components/UI/atoms'

export interface IFrequentSearch {
  /**
   * The heading or title for the frequent search section.
   */
  searchHeading: string
  /**
   * The content to be displayed inside the frequent search section.
   * It can be any content compatible with React's `ReactNode`.
   */
  searchList: ISearchItem[]
  /**
   * This text should be 'Show less' text
   */
  showLess: string
  /**
   * This text should be 'Show more' text
   */
  showMore: string
}
