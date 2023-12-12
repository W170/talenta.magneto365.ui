import {
  IConfigDetailsFormats,
  IConfigDetailsResponse
} from './../../components/UI/molecules/MetadataCardImage/children/Details/Details.interface'
import { IMainButton } from '@components/UI/atoms'
import { IDescriptionBook } from '@components/UI/organism'
import { ArchiveAdd, Clock } from '@constants/icons.constants'
import { cardImageProps } from './cardImage.constants'
import { IFormatsColumn } from '@components/UI/organism/DescriptionBook/children/FormatsColumn'

export const buttonCardDescriptionProps: IMainButton[] = [
  {
    buttonType: 'button',
    buttonText: 'Pedir prestado',
    className: 'button-borrow',
    buttonStyles: {
      buttonColor: '#090467',
      textColor: '#fff',
      spacing: '10px'
    },
    onClick: (e) => console.log(e)
  },
  {
    buttonType: 'button',
    buttonText: 'Leer un fragmento',
    className: 'button-read',
    buttonStyles: {
      buttonColor: '#F4F4FA',
      textColor: '#090467'
    },
    onClick: (e) => console.log(e)
  }
]

export const tabsProps = [
  {
    title: 'Description'
  },
  {
    title: 'Details'
  }
]

export const configLinkButtons: IMainButton[] = [
  {
    buttonType: 'button',
    buttonText: 'Añadir a lista de deseos',
    className: 'button-list',
    buttonStyles: {
      buttonColor: 'transparent'
    },
    iconProps: {
      icon: ArchiveAdd,
      hover: true,
      color: '#090467 '
    },
    onClick: (e) => console.log(e)
  },
  {
    buttonType: 'button',
    buttonText: 'Agregar al historial',
    className: 'button-historial',
    buttonStyles: {
      buttonColor: 'transparent'
    },
    iconProps: {
      icon: Clock,
      hover: true,
      color: '#090467 '
    },
    onClick: (e) => console.log(e)
  }
]

const TYPES = ['ISBN', 'ASIN', 'PublisherCatalogNumber']

export const configDetails = (
  publisher: string,
  edition: string | undefined,
  formats: IConfigDetailsFormats[]
): IConfigDetailsResponse[] => [
  {
    publisher,
    edition,
    mediaType: 'audioBook',
    formats: formats.map(({ id, fileSize, onSaleDate = '', duration, partCount, identifiers }) => ({
      id,
      fileSize,
      onSaleDate,
      duration,
      partCount,
      identifiers: identifiers.find(({ type }) => TYPES.includes(type))
    }))
  },
  {
    publisher,
    mediaType: 'ebook',
    formats: formats.map(({ id, fileSize, onSaleDate = '', identifiers }) => ({
      id,
      fileSize,
      onSaleDate,
      identifiers: identifiers.find(({ type }) => TYPES.includes(type))
    }))
  },
  {
    publisher,
    mediaType: 'magazine',
    formats: formats.map(({ id, fileSize, onSaleDate = '', identifiers }) => ({
      id,
      fileSize,
      onSaleDate,
      identifiers: identifiers.find(({ type }) => TYPES.includes(type))
    }))
  }
]

export const formatsColumnProps: IFormatsColumn = {
  formats: {
    text: 'Formatos',
    values: cardImageProps.formats
  },
  subjects: {
    text: 'Temas',
    values: cardImageProps.subjects
  },
  languages: {
    text: 'Idiomas',
    values: cardImageProps.languages
  }
}

export const descriptionBookProps: IDescriptionBook = {
  ...cardImageProps,
  formatsColumn: formatsColumnProps,
  optionsTabs: tabsProps,
  configBorrowReadButtons: buttonCardDescriptionProps,
  configLinkButtons: configLinkButtons,
  copiesAvailableText: '0 de 999 copias disponibles',
  getTotalStarRating: (index: number) => console.log('value: ', index),
  publisherText: 'Publisher',
  editionText: 'Edition',
  fileSizeText: 'File size',
  releaseDateText: 'Release Date',
  durationText: 'Duration',
  numberPartsText: 'Number of parts',
  configDetails: configDetails
}
