import { ICardImage } from '@components/UI/molecules/CardImage'
import { ICardImageFormatsIdentifiers } from '../../MetadataCardImage.interface'

export interface IConfigDetailsFormats {
  id: string
  onSaleDate?: string
  fileSize: number
  duration?: string
  partCount?: number
  identifiers: ICardImageFormatsIdentifiers[]
}

export interface IConfigDetails {
  mediaType: string
  publisher: string
  edition: string
  formats: IConfigDetailsFormats[]
}

export interface IConfigDetailsFormatsResponse {
  id: string
  fileSize: number
  onSaleDate: string
  duration?: string
  partCount?: number
  identifiers?: ICardImageFormatsIdentifiers
}

export interface IConfigDetailsResponse {
  mediaType: string
  publisher: string
  edition?: string
  formats: IConfigDetailsFormatsResponse[]
}

export interface IDetails extends ICardImage {
  publisherText: string
  editionText?: string
  fileSizeText: string
  releaseDateText?: string
  durationText?: string
  numberPartsText?: string
  configDetails: (
    publisher: string,
    edition: string | undefined,
    formats: IConfigDetailsFormats[]
  ) => IConfigDetailsResponse[]
}
