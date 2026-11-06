/**
 * Data structure for a block of frequently asked questions.
 */
export interface IJobsFaqs {
  /**
   * Enable rounded corners.
   * (Optional)
   */
  roundEdges?: boolean
  /**
   * Title of the FAQ block.
   */
  title?: string
  children?: React.ReactNode
}
