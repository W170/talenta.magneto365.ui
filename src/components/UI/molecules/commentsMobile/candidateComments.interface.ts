import { ReactElement } from 'react'

export interface ICommentsMobile {
  children: ReactElement
  data: Idata[]
}

export interface Idata {
  src: string
  name: string
  rating: number
  date: string
  description: string
}

export interface ICommentsMobileContext {
  data: Idata[]
}
