import { IconProps } from '../../../Icon'
import { IRadioCommonProps } from '../../Radio.interface'

export interface IRadioButtonProps extends IRadioCommonProps {
  /**
   * Left icon of the radio button
   */
  prefixIcon?: IconProps
  /**
   * Right icon of the radio button
   */
  suffixIcon?: IconProps
}
