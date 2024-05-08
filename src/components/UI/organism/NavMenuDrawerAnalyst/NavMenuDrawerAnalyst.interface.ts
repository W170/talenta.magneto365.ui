import { INavMenuAnalystProps } from '@components/UI/organism/NavMenuAnalyst'

export interface INavMenuDrawerAnalystProps extends INavMenuAnalystProps {
  /**
   * Function to close menu
   */
  onClose?: () => void
}
