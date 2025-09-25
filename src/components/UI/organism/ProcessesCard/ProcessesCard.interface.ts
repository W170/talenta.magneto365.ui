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

export type TIconComponent = {
  /**
   * this property sets color icon
   */
  fill?: string
}

export namespace IProcessesCard {
  export type ISection = ICommonProcessesCardPros
  export type ITitle = ICommonProcessesCardPros & { status?: IStatusJob }
  export type ICardStatus = ICommonProcessesCardPros & { status: IStatusJob; isSelected?: boolean }
  export type IText = ICommonProcessesCardPros & { status?: IStatusJob; strong?: boolean }
  export type IBrand = ICommonProcessesCardImg
  export interface IArrow extends React.HTMLAttributes<HTMLSpanElement> {
    color?: string
  }
  export interface IStatusIcon extends React.HTMLAttributes<HTMLSpanElement> {
    status: IStatusJob
    color?: string
  }
}
