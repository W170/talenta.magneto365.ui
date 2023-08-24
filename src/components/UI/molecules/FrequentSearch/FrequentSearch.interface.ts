export interface IFrequentSearch {
  /**
   * The heading or title for the frequent search section.
   */
  searchHeading: string
  /**
   * The content to be displayed inside the frequent search section.
   * It can be any content compatible with React's `ReactNode`.
   */
  children: React.ReactNode
}