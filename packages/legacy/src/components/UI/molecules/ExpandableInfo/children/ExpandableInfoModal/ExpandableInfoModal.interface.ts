import { IExpandableInfoDetailsProps, IExpandableInfoTogglerProps } from '../index'

export interface IExpandableInfoModalProps {
  /**
   * Details props
   */
  details?: IExpandableInfoDetailsProps
  /**
   * Toggler props
   */
  toggler: Omit<IExpandableInfoTogglerProps, 'onToggle'>
}
