export type Direction = 'row' | 'column'

export interface IListIconItems {
    containerTitle: string,
    containerIcon: string
    direction?: Direction
    spacing?: number
    listIcon: IListIconItem[]
    size?: number
    className?: string
}

export interface IListIconItem {
    icon?: string | null
    title?: string
    info?: string
}
