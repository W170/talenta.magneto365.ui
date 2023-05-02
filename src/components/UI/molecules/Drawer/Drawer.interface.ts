type Direction = 'left' | 'right'

export interface IDrawer {
  className?: string
  /**
   * open drawer
   */
  isOpen: boolean
  /**
   * close drawer
   */
  onClose: () => void
  /**
   * can receive components inside the drawer
   */
  children: JSX.Element | JSX.Element[]
  /**
   * you can change drawer direction
   */
  direction: Direction
}

export interface IDrawerPortal {
  children: false | JSX.Element | JSX.Element[]
}
