export enum EFormatType {
  EBOOK = 'ebook',
  AUDIO_BOOK = 'audio',
  MAGAZINE = 'magazine'
}

export type IFormatsType = Record<EFormatType, string>

export interface IBookType {
  mediaType: string
}
