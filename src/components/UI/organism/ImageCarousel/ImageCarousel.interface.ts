import { ReactNode } from 'react'
import { IImageValues } from './children/CarouselLibrary'

export enum ECandidateState {
  NO_AUTH = 'notAuth',
  AUTH = 'auth',
  FINISHED = 'finished'
}

export interface IImageCarousel {
  title: string
  titleFinished: string
  values: IImageValues[]
  buttonAction: ReactNode | JSX.Element
  candidateState: ECandidateState
}
