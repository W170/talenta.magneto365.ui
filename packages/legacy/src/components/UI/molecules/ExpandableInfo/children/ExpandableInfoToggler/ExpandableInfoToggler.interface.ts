import { IExpandableInfoProps } from '../../ExpandableInfo.interface'
import { IconProps } from '@components/UI/atoms'

export interface IExpandableInfoTogglerProps
  extends Omit<IExpandableInfoProps, 'actionButton' | 'message' | 'clickOut' | 'setClickOut' | 'floating'> {
  /**
   * Function to be called when the toggler is clicked
   */
  onToggle: (value?: boolean) => void
  /**
   * Left icon of the dropdown
   */
  prefixIcon?: IconProps
  /**
   * Right icon of the dropdown
   */
  suffixIcon?: IconProps
}
