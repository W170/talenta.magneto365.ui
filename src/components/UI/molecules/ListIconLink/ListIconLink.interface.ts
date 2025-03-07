type Direction = 'row' | 'column'

export interface IListIconLink {
  direction?: Direction
  spacing?: number
  listIcon: IListIcon[]
  size?: number
  hover?: boolean
  className?: string
}

export interface IListIcon {
  url?: string | null
  icon?: string | null
  title?: string
}
