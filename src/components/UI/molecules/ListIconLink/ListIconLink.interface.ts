import { Icon } from 'iconsax-react'

type Direction = 'row' | 'column'
type Variant = 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone'

export interface IListIconLink {
  direction: Direction
  spacing: number
  url: string
  Icon: Icon
  listIcon: any
  variant: Variant
  size: string | number
  color: string
}
