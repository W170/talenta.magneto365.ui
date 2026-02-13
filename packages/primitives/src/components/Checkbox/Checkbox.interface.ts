export interface ICheckbox extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Event to control the change value component.
   * @param checked - The new checked state
   * @returns void
   */
  onChange?: (checked: boolean) => void
  /**
   * Change UI behavior with this prop.
   * - 'box': Standard checkbox with visible box
   * - 'background': Checkbox with background highlight style
   */
  type?: 'box' | 'background'
  /**
   * Change display behavior for checkbox.
   * - 'inline': Display as inline-flex
   * - 'block': Display as flex block
   */
  display?: 'inline' | 'block'
  /**
   * Render prop to create custom check component.
   * @param props - Object containing checked state and type
   * @returns React node to render as the checkbox indicator
   */
  renderCheck?: (props: { checked: ICheckbox['checked']; type: ICheckbox['type'] }) => React.ReactNode
}
