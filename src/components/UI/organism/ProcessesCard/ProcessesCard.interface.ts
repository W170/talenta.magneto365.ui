/* eslint-disable @typescript-eslint/no-namespace */

export type IStatusJob = 'Sent' | 'Pending' | 'Validation' | 'Finalists' | 'Hired' | 'Discarded' | 'Canceled'

export interface ICommonProcessesCardPros {
  /**
   * this property sets custom className
   */
  className?: string
  /**
   * this property sets any children
   */
  children: React.ReactNode
}

export type ICommonProcessesCardImg = React.ImgHTMLAttributes<HTMLImageElement>

export interface IProcessesCard extends React.ButtonHTMLAttributes<HTMLButtonElement>, ICommonProcessesCardPros {
  /**
   * this property sets custom className
   */
  children: React.ReactNode
  /**
   * this  property on true changes the background color
   */
  isSelected?: boolean
}

export namespace IProcessesCard {
  export type ISection = ICommonProcessesCardPros
  export type ITitle = ICommonProcessesCardPros & { status?: IStatusJob }
  export type ICardStatus = ICommonProcessesCardPros & { status: IStatusJob; isSelected?: boolean }
  export type IText = ICommonProcessesCardPros & { status?: IStatusJob; strong?: boolean }
  export type IBrand = ICommonProcessesCardImg
  export type IArrow = ICommonProcessesCardImg
  export type IStatusIcon = ICommonProcessesCardImg & { status: IStatusJob }
}
