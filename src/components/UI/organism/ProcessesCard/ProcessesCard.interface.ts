/* eslint-disable @typescript-eslint/no-namespace */

export type IStatusJob = 'Sent' | 'Pending' | 'Validation' | 'Finalists' | 'Hired' | 'Discarded'

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
  children: React.ReactNode
}

export namespace IProcessesCard {
  export type ISection = ICommonProcessesCardPros
  export type ITitle = ICommonProcessesCardPros
  export type ICardStatus = ICommonProcessesCardPros
  export type IText = ICommonProcessesCardPros
  export type IBrand = ICommonProcessesCardImg
  export type IArrow = ICommonProcessesCardImg
}
