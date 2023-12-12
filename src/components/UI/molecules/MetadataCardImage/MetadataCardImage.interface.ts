import { IMainButton } from '@components/UI/atoms'
import { IListMenuItems } from '../ListMenuItems'

interface ICardImageFormatsSamples {
  source: string
  formatType: string
  url: string
}

export interface ICardImageAuthor {
  role: string
  name: string
  bioText?: string
}
export interface ICardImageLanguages {
  code: string
  name: string
}
export interface ICardImageFormatsIdentifiers {
  type: string
  value: string
}

export interface ICardImageFormats {
  id: string
  name: string
  fileName: string
  onSaleDate?: string
  fileSize: number
  duration?: string
  partCount?: number
  identifiers: ICardImageFormatsIdentifiers[]
  samples?: ICardImageFormatsSamples[]
}

export interface ICardImageSubjects {
  value: string
}

export interface IMetadataCardImage {
  id: string
  title: string
  sortTitle?: string
  mediaType: string
  publisher: string
  edition?: string
  imprint?: string
  series?: string
  fullDescription: string
  starRating: number
  copiesAvailable: number
  numberOfHolds: number
  languages: ICardImageLanguages[]
  formats: ICardImageFormats[]
  subjects: ICardImageSubjects[]
  authors: ICardImageAuthor[]
  byText: string
  buttonsFooter: IMainButton[]
  listMenuProps: IListMenuItems
}
