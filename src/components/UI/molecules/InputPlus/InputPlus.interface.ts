export interface IInputPlus {
  /**
   * through this function you can obtain the value of the imput
   */
  onChange: (value: string) => void
  /**
   * this property set the placeholder value
   */
  placeholder: string
  /**
   * this property sets a word limit in the input
   */
  maxWords?: number
  /**
   * this property enables or disables the button press
   */
  disabled?: boolean
  /**
   * this property show a circular progress spinner
   */
  isLoading?: boolean
  /**
   * set custom classname
   */
  className?: string
}
