export interface IBarChart {
  /**
   * Sets the range of the bar
   */
  bin: number[]
  /**
   * Sets the percentage of the bar
   */
  heightPercentage: number
  /**
   * Sets the description text of the bar
   */
  jobText: string
  /**
   * Sets the maximum percentage of the bar
   */
  maxPercentage?: number
  /**
   * Sets the maximum height of the bar
   */
  maxHeight?: number
  /**
   * Point color (RGB) or color
   */
  point?: string
}
