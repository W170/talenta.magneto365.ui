import { IMetadataCardImage } from '../MetadataCardImage'

export interface ICardImage extends IMetadataCardImage {
  available: boolean
  availableText: string
  cover: string
  urlRedirect: string
}
