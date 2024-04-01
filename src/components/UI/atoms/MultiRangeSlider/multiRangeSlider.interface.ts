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
  /**
   * this property show currency character
   */
  currency?: ICurrency
  /**
   * this property set a value in the range slide
   */
  currentMin?: number
  /**
   * this property set a value in the range slide
   */
  currentMax?: number
}

interface ICurrency {
  code: string
  to: string
}
