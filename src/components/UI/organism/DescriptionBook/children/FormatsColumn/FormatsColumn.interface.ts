import { ICardImageFormats, ICardImageLanguages, ICardImageSubjects } from '@components/UI/molecules'

interface IFormatsItems<T> {
  text: string
  values: T[]
}

export interface IFormatsColumn {
  formats: IFormatsItems<ICardImageFormats>
  subjects: IFormatsItems<ICardImageSubjects>
  languages: IFormatsItems<ICardImageLanguages>
}
