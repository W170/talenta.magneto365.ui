import { ICollectionSection } from '@components/UI/organism'
import { cardImageProps } from './cardImage.constants'

export const collectionSectionProps: ICollectionSection = {
  title: 'Inteligencia Artificial',
  subtitle: 'Inteligencia Artificial Inteligencia Artificial',
  textButton: 'Ver todos',
  isFeatured: false,
  values: [
    { ...cardImageProps, id: '1' },
    { ...cardImageProps, id: '2' },
    { ...cardImageProps, id: '3' },
    { ...cardImageProps, id: '4' },
    { ...cardImageProps, id: '5' },
    { ...cardImageProps, id: '6' },
    { ...cardImageProps, id: '7' },
    { ...cardImageProps, id: '8' },
    { ...cardImageProps, id: '9' },
    { ...cardImageProps, id: '10' },
    { ...cardImageProps, id: '11' },
    { ...cardImageProps, id: '12' },
    { ...cardImageProps, id: '12' },
    { ...cardImageProps, id: '14' }
  ]
}
