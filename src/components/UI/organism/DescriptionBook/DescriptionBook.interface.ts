import { IMainButton } from '@components/UI/atoms'
import { IOptions } from '@components/UI/atoms/Tabs'
import { ICardImage } from '@components/UI/molecules/CardImage'
import {
  IConfigDetailsFormats,
  IConfigDetailsResponse
} from '@components/UI/molecules/MetadataCardImage/children/Details'
import { IFormatsColumn } from './children/FormatsColumn'

export interface IDescriptionBook extends ICardImage {
  copiesAvailableText: string
  configLinkButtons: IMainButton[]
  configBorrowReadButtons: IMainButton[]
  score?: number
  optionsTabs: IOptions[]
  getTotalStarRating: (index: number) => void
  publisherText: string
  editionText?: string
  fileSizeText: string
  releaseDateText?: string
  durationText?: string
  numberPartsText?: string
  formatsColumn: IFormatsColumn
  configDetails: (
    publisher: string,
    edition: string | undefined,
    formats: IConfigDetailsFormats[]
  ) => IConfigDetailsResponse[]
}
