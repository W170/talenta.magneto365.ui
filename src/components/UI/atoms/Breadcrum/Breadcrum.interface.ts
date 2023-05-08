export interface IBreadcrum {
  /**
   * Breadcrum label text
   */
  label: string
  /**
   * Possible breadcrum navigation URL
   */
  url?: string
  /**
   * Breadcrum modifier for active label
   */
  IsActive: boolean
  className?: string
}
