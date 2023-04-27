import { Icon } from 'iconsax-react'

type Direction = 'row' | 'column'
type Variant = 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone'

export interface IListIconLink {
  /**
   * Change direction
   */
  direction: Direction
  /**
   * Change spacing between icons
   */
  spacing: number
  /**
   * Add destination on click
   */
  url: string
  /**
   * You can set Icon o get Default icon
   */
  Icon: Icon
  listIcon: any
  variant: Variant
  size: string | number
  color: string
}
