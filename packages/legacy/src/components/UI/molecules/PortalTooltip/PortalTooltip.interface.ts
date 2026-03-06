import { TPosition } from '../Tooltip/Tooltip.interface'

export interface IPortalTooltipProps {
  /**
   * this property set the tooltip title
   */
  title: string

  /**
   * this property set the tooltip position
   * @default 'bottom'
   */
  position?: TPosition

  /**
   * the tooltip component must wrap a component. This needs to be able to hold a ref
   */
  children: React.ReactElement

  /**
   * this property set the tooltip visibility
   * @default true
   */
  visible?: boolean

  /**
   * this property set the tooltip width
   * @default 'fit-content'
   */
  width?: string

  /**
   * this property sets delay in milliseconds before the tooltip appears
   */
  enterDelay?: number

  /**
   * this property sets delay in milliseconds before the tooltip disappears
   */
  leaveDelay?: number

  /**
   * this property sets the offset in pixels for the tooltip position relative to the target element
   * @default 8
   */
  offset?: number

  /**
   * this property set the tooltip arrow visibility
   * @default true
   */
  hasArrow?: boolean
}
