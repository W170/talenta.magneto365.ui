export interface IDateInput {
  className?: string
  /**
   * this event can dispatch NaN value due to the input date is invalid
   * @example (78/02/2000) 78 is an invalid day so the onChange will dispatch NaN value.
   */
  onChange?: (value?: Date | null | typeof NaN) => void
  /**
   * if you pass null the component will reset.
   */
  value?: Date | null | typeof NaN
  /**
   * fix the width based in content.
   */
  fit?: boolean
  /**
   * just apply an style.
   */
  hasError?: boolean
}
