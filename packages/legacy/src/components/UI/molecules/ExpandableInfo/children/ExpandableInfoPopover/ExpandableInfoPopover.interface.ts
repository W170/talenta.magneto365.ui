import { IExpandableInfoTogglerProps, IExpandableInfoDetailsProps } from '../index'

export interface IExpandableInfoPopoverProps {
  /**
   * Details props
   */
  details?: IExpandableInfoDetailsProps
  /**
   * Toggler props
   */
  toggler: Omit<IExpandableInfoTogglerProps, 'onToggle'>
  /**
   * Click out
   */
  clickOut?: boolean
  /**
   * Set click out
   */
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
}
