import { IUserMenuAnalystProps } from '@components/UI/molecules'

export interface IUserMenuDropdownAnalystProps extends IUserMenuAnalystProps {
  /**
   * State to open or close user menu
   */
  clickOut?: boolean
  /**
   * Function to open or close user menu
   */
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
}
