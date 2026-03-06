export interface IClassNames {
  /**
   * Custom styles for the bar
   */
  bar?: string
  /**
   * Custom styles for the fill container
   */
  container?: string
  /**
   * Custom styles for the text description
   */
  text?: string
  /**
   * Custom styles for the fill value within the bar
   */
  value?: string
  /**
   * Custom styles for the fill
   */
  fill?: string
}
export interface IHorizontalBarProps {
  /**
   * Sets the value to show within the bar
   */
  value: number
  /**
   * Sets the text of the bar
   */
  text?: string
  /**
   * Sets the range of the bar
   */
  maxPercentage?: number
  /**
   * Sets custom classnames
   */
  classNames?: IClassNames
}
