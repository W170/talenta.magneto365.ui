import React from 'react'
import style from './CardImage.module.scss'
import { classMUI } from '@constants/stories'
import { ICardImage } from './CardImage.interface'
import { MetadataCardImage } from '../MetadataCardImage'
import { Ebook } from '@constants/icons.constants'

const Component: React.FC<ICardImage> = ({ urlRedirect, available, availableText, cover, ...props }) => {
  return (
    <a className={style[`${classMUI}-card-image`]} href={urlRedirect}>
      {available ? (
        <div className={style[`${classMUI}-card-image__available`]}>
          <img src={Ebook} alt="ebook icon" />
          <span>{availableText}</span>
        </div>
      ) : null}
      <img className={style[`${classMUI}-card-image__cover`]} src={cover} />
      <MetadataCardImage {...props} />
    </a>
  )
}

/**
 * Molecule UI component for Carousel
 */

export const CardImage = Component
