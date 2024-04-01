import { ICardImage } from '@components/UI/molecules/CardImage'

export interface ICollectionSection {
  title: string
  subtitle: string
  textButton: string
  withSub: boolean
  values: ICardImage[]
}