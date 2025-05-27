import { TPosition } from '../Tooltip/Tooltip.interface'

export interface IPortalTooltipProps {
  /**
   * this property set the tooltip title
   */
  title: string
  /**
   * this property set the tooltip position
   */
  position?: TPosition
  /**
   * the tooltip component must wrap a component
   */
  children: React.ReactElement

  /**
   * this property sets delay in milliseconds before the tooltip appearst
   * If not specified, the tooltip will appear immediately.
   */
  enterDelay?: number

  /**
   * this property sets delay in milliseconds before the tooltip disappears
   * If not specified, the tooltip will disappear immediately.
   */
  leaveDelay?: number

  /**
   * this property sets the offset in pixels for the tooltip position relative to the target element.
   * @default 8
   */
  offset?: number
}
