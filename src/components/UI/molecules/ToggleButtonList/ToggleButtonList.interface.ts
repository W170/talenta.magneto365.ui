import { IToggleButton, IToggleButtonOnchangeValues } from '@components/UI/atoms/ToggleButton/ToggleButton.interface'

export type TToggleButtonList = {
  /**
   * this property sets the list of toggle buttons
   */
  list: Partial<Pick<IToggleButton, 'id' | 'name' | 'customIcon'>>[]
  /**
   * this property sets the props of toggle buttons
   */
  toggleButtonProps?: IToggleButton
  /**
   * this property returns the values of the toggle button selected
   */
  onChange?: (value: IToggleButtonOnchangeValues | null) => void
  /**
   * this property sets customs className for toggle buttons
   */
  className?: string
}
