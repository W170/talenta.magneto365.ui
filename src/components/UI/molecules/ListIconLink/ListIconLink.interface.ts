type Direction = 'row' | 'column'

export interface IListIconLink {
  direction?: Direction
  spacing?: number
  listIcon: IListIcon[]
  size?: number
  hover?: boolean
}

export interface IListIcon {
  url: string
  icon: string
}
