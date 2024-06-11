export interface IDateInput {
  className?: string
  /**
   * if the user type an invalid date like (32/02/2000)
   * the onChange goint to sent (03/03/2000)
   */
  onChange?: (value?: Date | null) => void
  /**
   * if you pass null the component will reset.
   */
  value?: Date | null
  /**
   * fix the width based in content.
   */
  fit?: boolean
  /**
   * just apply an style.
   */
  hasError?: boolean
}
