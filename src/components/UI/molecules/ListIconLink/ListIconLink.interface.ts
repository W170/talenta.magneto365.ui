import { Icon } from 'iconsax-react'

type Direction = 'row' | 'column'

export interface IListIconLink {
  direction?: Direction
  spacing?: number
  listIcon: IListIcon[]
  size?: number
  color?: string
  className?: string
  hover?: boolean
}

export interface IListIcon {
  url: string
  Icon: Icon
}
