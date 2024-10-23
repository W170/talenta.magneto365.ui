export interface ICheckbox extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * event to controll the change value component.
   * @param checked
   * @returns
   */
  onChange?: (checked: boolean) => void
  /**
   * change UI behavior with this prop.
   */
  type?: 'box' | 'background'
  /**
   * change display behavior for checkbox.
   */
  display?: 'inline' | 'block'
}
