type PositionY = 'top' | 'bottom'
type PositionX = 'left' | 'center' | 'right'

export interface IPopover {
  /**
   * You must set a Y position 'top' or 'bottom'
   */
  positionY: PositionY
  /**
   * You must set a X position 'left', 'center' or 'right'
   */
  positionX: PositionX
  /**
   * Here must be the element that invokes the popover
   */
  children: JSX.Element | JSX.Element[]
  /**
   * Here should be the element to be displayed in the popover
   */
  content: JSX.Element | JSX.Element[]
  /**
   * You can set a numeric width value for the popover
   */
  show: boolean
  /**
   * You must set a numeric value for width container
   */
  widthBase: number
  /**
   * This property can change position between aboslute or static to content container
   */
  staticContent?: boolean

  className?: string
}
