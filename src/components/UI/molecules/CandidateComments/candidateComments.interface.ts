import { ReactElement } from 'react'

export interface ICommentsMobile {
  children?: ReactElement[]
  data?: IdataComments[]
}

export interface IdataComments {
  src?: string
  name?: string
  rating?: number
  date?: string | number | Date
  description?: string
}
