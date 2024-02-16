export interface IMultiRangeSlider {
  /**
   * This is the min value in the range
   */
  min: number
  /**
   * This is the max value in the range
   */
  max: number
  /**
   * This flag indicate if show the values of the range
   */
  showValues?: boolean
  /**
   * This function is called when the value change
   */
  onChange: (v: unknown) => void
}
