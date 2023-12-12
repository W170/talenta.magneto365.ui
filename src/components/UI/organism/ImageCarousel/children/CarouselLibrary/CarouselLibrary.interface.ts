import { ECandidateState } from '../../ImageCarousel.interface'

export interface IImageValues {
  id: string
  title: string
  url: string
  cover: string
  href: string
}

export interface ICarouselLibrary {
  /**
   * values to config and display the carousel images.
   */
  values: IImageValues[]
  candidateState: ECandidateState
}
