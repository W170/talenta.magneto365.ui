export interface IHorizontalBarProps {
  /**
   * Sets the value to show within the bar
   */
  value: number
  /**
   * Sets the fill color of the bar
   */
  color: string
  /**
   * Sets the text of the bar
   */
  text?: string
  /**
   * Sets the range of the bar
   */
  maxPercentage?: number
  /**
   * Sets custom classname
   */
  className?: string
}
