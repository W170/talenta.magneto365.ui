type TPosition = 'top' | 'bottom' | 'left' | 'right'

export interface ITooltipProps {
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
  children: React.ReactNode

  /**
   * this property set the tooltip width
   */
  width?: string

  /**
   * this property set the tooltip visibility
   */
  hidden?: boolean
}
