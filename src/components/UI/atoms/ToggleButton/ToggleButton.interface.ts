export interface IToggleButton {
  /**
   * You can extend the style properties with class names
   */
  className?: string
  /**
   * this property sets the background and border color when is selected
   */
  color?: string
  /**
   * this property sets the background when is not selected
   */
  baseColor?: string
  /**
   * this property sets the button name
   */
  name: string
  /**
   * this property sets the button id
   */
  id: string | number
  /**
   * this property sets default value
   */
  currentSelect?: boolean //
  /**
   *  this function returns the name and id value of the button when clicked on
   */
  onChange: ({ name, id }: { name?: string; id?: string | number }) => void
}
