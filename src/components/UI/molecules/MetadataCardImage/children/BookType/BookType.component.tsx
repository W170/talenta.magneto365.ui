import React, { useMemo } from 'react'
import style from './BookType.module.scss'
import { classMUI } from '@constants/stories'
import { EbookGray, Magazine, Music } from '@constants/icons.constants'
import { EFormatType, IBookType, IFormatsType } from './BookType.interface'

const Component: React.FC<IBookType> = ({ mediaType }) => {
  const FORMATS_TYPES: IFormatsType = useMemo(
    () => ({
      ebook: EbookGray,
      audio: Music,
      magazine: Magazine
    }),
    []
  )

  const formatType = useMemo(() => {
    if (!mediaType) return null
    const types = ['ebook', 'audio', 'magazine']
    const knowType = types.find((value) => mediaType.toLowerCase().includes(value))
    if (!knowType) return null
    const type = (knowType || 'ebook') as EFormatType
    return FORMATS_TYPES[type]
  }, [FORMATS_TYPES, mediaType])

  return (
    <div className={style[`${classMUI}-book-type`]}>
      {formatType ? <img src={formatType} /> : null}
      {mediaType ? <span className={style[`${classMUI}-book-type__text`]}>{mediaType}</span> : null}
    </div>
  )
}

/**
 * UI Atom component of By Book Type
 */

export const BookType = Component
